from fastapi import WebSocket, HTTPException, Depends, APIRouter
from typing import Dict
import json
from sqlalchemy.orm import Session
import models
import schemas
from auth.jwtbearer import jwtBearer
from database import SessionLocal, engine

chat = APIRouter()

models.Base.metadata.create_all(bind=engine)

def get_db():
    try:
        db = SessionLocal()
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


@chat.post("/chat/create")
def create_chat(chat: schemas.Chat, db: Session = Depends(get_db)):
    chat_db = chat_exists(db, chat.user1, chat.user2)

    if not chat_db:
        db_chat = models.Chat(**chat.dict())
        db.add(db_chat)
        db.commit()
        db.refresh(db_chat)
        return db_chat


    messages = db.query(models.Messages).filter(
        models.Messages.chat_id == chat_db.id
    ).all()

    return {"chat" : chat_db, "messages": messages}

@chat.get("/chats", dependencies=[Depends(jwtBearer())])
def get_chats(db: Session = Depends(get_db)):
    chats = db.query(models.Chat).all()
    return list(map(lambda chat: {"chat_id": chat.id, "user1": chat.user1_infos, "user2": chat.user2_infos}, chats))


@chat.get("/chat/users")
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


@chat.websocket("/ws/{channel_id}/{user_id}")
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