from fastapi import FastAPI, WebSocket, HTTPException, Depends
from typing import Dict
import json
from sqlalchemy.orm import Session
import models
import schemas
from auth.jwtbearer import jwtBearer
from database import SessionLocal, engine
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from auth.jwthandler import signJWT, decodeJWT


app = FastAPI()

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


@app.post("/chat/create")
def create_chat(chat: schemas.Chat, db: Session = Depends(get_db)):
    if not chat_exists(db, chat.user1, chat.user2):
        db_chat = models.Chat(**chat.dict())
        db.add(db_chat)
        db.commit()
        db.refresh(db_chat)
        return db_chat
    return chat_exists(db, chat.user1, chat.user2)

# CATEGORY ENDPOINTS ----------
@app.post("/categories/create")
def create_category(category: schemas.Categories, db: Session = Depends(get_db)):
    category = models.Categories(**category.dict())
    db.add(category)
    db.commit()
    db.refresh(category)
    return category

@app.delete("/categories/{id}")
def delete_category(id, db: Session = Depends(get_db)):
    category = db.get(models.Categories, id)

    if category:
        db.delete(category)
        db.commit()
        return f"Category with id : {id} was successfully deleted!"

    return HTTPException(404, f"Cateogry with id : {id} doesn't exist!")

@app.get("/categories")
def get_categories(db: Session = Depends(get_db)):
    categories = db.query(models.Categories).all()
    return list(map(lambda category: {"name": category.name, "subcategories": category.subcategories}, categories))

@app.get("/categories/{id}")
def get_category(id, db: Session = Depends(get_db)):
    category = db.get(models.Categories, id)

    if category:
        return {"name": category.name, "subcategories": category.subcategories}

    return HTTPException(404, f"Cateogry with id : {id} doesn't exist!")

@app.put("/categories/{id}")
def update_category(id, category: schemas.Categories, db: Session = Depends(get_db)):
    old_category = db.get(models.Categories, id)
    if old_category:
        if category.name:
            new_category = category.dict(exclude_unset=True)
            for key, value in new_category.items():
                setattr(old_category, key, value)
            db.add(old_category)
            db.commit()
            db.refresh(old_category)
            return {"name": old_category.name, "subcategories": old_category.subcategories}
        return HTTPException(400, f"Name field is required!")

    return HTTPException(404, f"Cateogry with id : {id} doesn't exist!")

# ROLE ENDPOINTS ----------
@app.post("/roles/create")
def create_role(role: schemas.Roles, db: Session = Depends(get_db)):
    role = models.Roles(**role.dict())
    db.add(role)
    db.commit()
    db.refresh(role)
    return role

@app.delete("/roles/{id}")
def delete_role(id, db: Session = Depends(get_db)):
    role = db.get(models.Roles, id)

    if role:
        db.delete(role)
        db.commit()
        return f"Role with id : {id} was successfully deleted!"

    return HTTPException(404, f"Role with id : {id} doesn't exist!")

@app.get("/roles")
def get_roles(db: Session = Depends(get_db)):
    roles = db.query(models.Roles).all()
    return roles

@app.get("/roles/{id}")
def get_role(id, db: Session = Depends(get_db)):
    role = db.get(models.Roles, id)

    if role:
        return role

    return HTTPException(404, f"Role with id : {id} doesn't exist!")

@app.put("/roles/{id}")
def update_role(id, role: schemas.Roles, db: Session = Depends(get_db)):
    old_role = db.get(models.Roles, id)
    if old_role:
        if role.name:
            new_role = role.dict(exclude_unset=True)
            for key, value in new_role.items():
                setattr(old_role, key, value)
            db.add(old_role)
            db.commit()
            db.refresh(old_role)
            return old_role
        return HTTPException(400, f"Role field is required!")

    return HTTPException(404, f"Role with id : {id} doesn't exist!")

# USER ENDPOINTS ----------
@app.post("/user/create")
def create_user(user: schemas.UserBase, db: Session = Depends(get_db)):
    new_user = models.User(**user.dict())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return signJWT(new_user.id, new_user.email)


@app.post("/user/login")
def user_login(user: schemas.UserLogin, db: Session = Depends(get_db)):
    logging_user = db.query(models.User).filter(models.User.email == user.email).first()
    if logging_user:
        if user.password == logging_user.password:
            return signJWT(logging_user.id, logging_user.email)
        return HTTPException(400, "Wrong password")
    return HTTPException(404, "Account doesn't exist")


@app.get("/user/me")
def current_user(user: str = Depends(jwtBearer()), db: Session = Depends(get_db)):
    id = decodeJWT(user)["userID"]
    current_user = db.get(models.User, id)
    return current_user


@app.delete("/user/{id}")
async def delete_user(id, token: str = Depends(jwtBearer()), db: Session = Depends(get_db)):
    decoded_user = decodeJWT(token)
    user = db.get(models.User, id)

    if user:
        if(user.id == decoded_user['userID']):
            db.delete(user)
            db.commit()
            return f"User with id : {id} was deleted successfully!"
        return f"You must be logged in with this user to actually delete it!"
    return f"User doesn't exist"

# @app.get("/user/{id}")
# async def get_user(id, db: Session = Depends(get_db)):
#     user = db.get(models.User, id)
#
#     if user:
#         return schemas.User.from_orm(user)
#     return f"User doesn't exist"


@app.put("/user/{id}")
async def update_user(id, user: schemas.UserEdit, token: str = Depends(jwtBearer()), db: Session = Depends(get_db)):
    decoded_user = decodeJWT(token)
    old_user = db.get(models.User, id)

    if old_user:
        if(old_user.id == decoded_user['userID']):
            new_user = user.dict(exclude_unset=True)
            for key, value in new_user.items():
                setattr(old_user, key, value)
            db.add(old_user)
            db.commit()
            db.refresh(old_user)
            return old_user
        return f"You must be logged in with this user to edit it!"
    return f"User doesn't exist"

# SUBCATEGORIES ENDPOINTS ----------
@app.post("/subcategories/create")
def create_subcategory(subcategory: schemas.SubCategories, db: Session = Depends(get_db)):
    new_subcategory = models.SubCategories(**subcategory.dict())
    db.add(new_subcategory)
    db.commit()
    db.refresh(new_subcategory)
    return new_subcategory


@app.get("/subcategories")
def get_subcategories(db: Session = Depends(get_db)):
    subcategories = db.query(models.SubCategories).all()
    return subcategories


@app.get("/subcategories/{id}")
def get_subcategories(id, db: Session = Depends(get_db)):
    subcategory = db.get(models.SubCategories, id)

    if subcategory:
        return subcategory
    return HTTPException(404, "Subcategory doesn't exist")


@app.delete("/subcategories/{id}")
async def delete_subcategory(id, db: Session = Depends(get_db)):
    subcategory = db.get(models.SubCategories, id)
    if subcategory:
        db.delete(subcategory)
        db.commit()
        return f"Subcategory with id : {id} was deleted successfully!"
    return f"Subcategory doesn't exist"


@app.put("/subcategories/{id}")
async def update_subcategory(id, user: schemas.SubCategoriesEdit, db: Session = Depends(get_db)):
    old_subcategory = db.get(models.SubCategories, id)
    if old_subcategory:
        new_subcategory = user.dict(exclude_unset=True)
        for key, value in new_subcategory.items():
            setattr(old_subcategory, key, value)
        db.add(old_subcategory)
        db.commit()
        db.refresh(old_subcategory)
        return old_subcategory
    return f"Subcategory doesn't exist"


# COURSES ENDPOINTS ----------
@app.post("/courses")
def create_course(course: schemas.Courses, db: Session = Depends(get_db), token: str = Depends(jwtBearer())):
    decoded_user = decodeJWT(token)
    old_user = db.get(models.User, decoded_user['userID'])

    if old_user.role_id == 2:
        course = models.Courses(**course.dict())
        course.owner_id = old_user.id
        db.add(course)
        db.commit()
        db.refresh(course)
        return course
    return HTTPException(401, "You must be admin to create an course!")

@app.delete("/courses/{id}")
def delete_course(id, db: Session = Depends(get_db), token: str = Depends(jwtBearer())):
    decoded_user = decodeJWT(token)
    course = db.get(models.Courses, id)

    if course:
        if course.owner_id == decoded_user['userID']:
            db.delete(course)
            db.commit()
            return f"Course with id : {id} was successfully deleted!"
        return "You must own a course to delete it"

    return HTTPException(404, f"Course with id : {id} doesn't exist!")

@app.get("/courses")
def get_courses(db: Session = Depends(get_db)):
    courses = db.query(models.Courses).all()
    return courses

@app.get("/courses/{id}")
def get_category(id, db: Session = Depends(get_db)):
    course = db.get(models.Courses, id)
   
    data = [
        course,
        course.course_owner,
        course.category
    ]

    if not course: 
        return HTTPException(404, f"Course with id : {id} doesn't exist!")

    return JSONResponse(content=jsonable_encoder(data[0]))

@app.put("/courses/{id}")
def update(id, course: schemas.Courses, db: Session = Depends(get_db)):
    
    db_course = db.get(models.Courses, id)

    if db_course:
        if course:
            course = course.dict(exclude_unset=True)
            for key, value in course.items():
                setattr(db_course, key, value)

            db.add(db_course)
            db.commit()
            db.refresh(db_course)
            data = [
                db_course,
                db_course.course_owner,
                db_course.category
            ]
            
            return JSONResponse(content=jsonable_encoder(data[0]))
        return HTTPException(400, f"Name field is required!")

    return HTTPException(404, f"Cateogry with id : {id} doesn't exist!")



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
