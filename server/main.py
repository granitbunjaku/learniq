from fastapi import FastAPI, WebSocket, HTTPException, Depends
from typing import Dict
import json
from sqlalchemy.orm import Session
import models
import schemas
from auth.jwtbearer import jwtBearer
from database import SessionLocal, engine
from auth.jwthandler import signJWT

app = FastAPI()

models.Base.metadata.create_all(bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# store the connected websockets
connected_websockets: Dict[int, WebSocket] = {}

# store the channels
channels: Dict[int, Dict[int, WebSocket]] = {}

def chat_exists(db: Session, user1_id: int, user2_id: int):
    query = db.query(models.Chat).filter(
        ((models.Chat.user1 == user1_id) & (models.Chat.user2 == user2_id)) |
        ((models.Chat.user1 == user2_id) & (models.Chat.user2 == user1_id))
    )

    if query:
        return query.first()


@app.post("/chat/create")
def create_chat(chat: schemas.Chat, db: Session = Depends(get_db)):
    if not chat_exists(db, chat.user1, chat.user2):
        db_chat = models.Chat(**chat.dict())
        db.add(db_chat)
        db.commit()
        db.refresh(db_chat)
        return db_chat
    return chat_exists(db, chat.user1, chat.user2)


@app.post("/user/create")
def create_user(user: schemas.UserBase, db: Session = Depends(get_db)):
    new_user = models.User(**user.dict())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return signJWT(new_user.email)


@app.post("/user/login")
def user_login(user: schemas.UserLogin, db: Session = Depends(get_db)):
    logging_user = db.query(models.User).filter(models.User.email == user.email).first()
    if logging_user:
        if user.password == logging_user.password:
            return signJWT(user.email)
        return HTTPException(400, "Wrong password")
    return HTTPException(400, "Account doesn't exist")


@app.get("/chats", dependencies=[Depends(jwtBearer())])
def get_chats(db: Session = Depends(get_db)):
    chats = db.query(models.Chat).all()
    return list(map(lambda chat: {"chat_id": chat.id, "user1": chat.user1_infos, "user2": chat.user2_infos}, chats))


@app.get("/chat/users")
def get_chat_users(chat_id: int, db: Session = Depends(get_db)):
    chat = db.query(models.Chat).filter(models.Chat.id == chat_id).first()

    if chat:
        query = db.query(models.User).filter(models.User.id.in_([chat.user1, chat.user2]))
        users = query.all()
        return users
    return HTTPException(404, 'Not found')


# helper function to broadcast a message to all connected websockets in a channel
async def broadcast_message(channel_id: int, message: str):
    for ws in channels[channel_id].values():
        await ws.send_text(message)


@app.websocket("/ws/{channel_id}/{user_id}")
async def websocket_endpoint(websocket: WebSocket, user_id: int, channel_id: int, db: Session = Depends(get_db)):
    chat = db.query(models.Chat).filter(models.Chat.id == channel_id).first()
    query = db.query(models.Chat).filter(
        ((chat.user1 == user_id) | (chat.user2 == user_id))
    )

    if not query.first():
        await websocket.close(code=1008)
        return

    await websocket.accept()
    connected_websockets[user_id] = websocket

    if channel_id not in channels:
        channels[channel_id] = {}

    channels[channel_id][user_id] = websocket

    try:
        while True:
            data = await websocket.receive_text()
            message = json.dumps({"message": data, "sender_id": user_id, "chat_id": channel_id})
            message_to_store = models.Messages(message=data, sender_id=user_id, chat_id=channel_id)
            db.add(message_to_store)
            db.commit()
            db.refresh(message_to_store)
            await broadcast_message(channel_id, message)
    finally:
        del connected_websockets[user_id]
        del channels[channel_id][user_id]
        if not channels[channel_id]:
            del channels[channel_id]
