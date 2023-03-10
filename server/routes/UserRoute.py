from fastapi import APIRouter, FastAPI, HTTPException, Depends
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session
from starlette.responses import JSONResponse

import models
import schemas
from auth.jwtbearer import jwtBearer
from database import SessionLocal, engine
from auth.jwthandler import decodeJWT, signJWT

user = APIRouter()

models.Base.metadata.create_all(bind=engine)

def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


# USER ENDPOINTS ----------
@user.post("/user/create")
def create_user(user: schemas.UserBase, db: Session = Depends(get_db)):

    if not len(user.password) > 7:
        raise HTTPException(400, "Password should be 8+ characters!")

    if user.password != user.confirm_password:
        raise HTTPException(400, "Password and Confirm Password must be the same!")

    del user.confirm_password

    new_user = models.User(**user.dict())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return "Successfully registered"


@user.post("/user/login")
def user_login(user: schemas.UserLogin, db: Session = Depends(get_db)):
    logging_user = db.query(models.User).filter(models.User.email == user.email).first()
    if logging_user:
        if user.password == logging_user.password:
            return {
                "token": signJWT(logging_user.id, logging_user.email), 
                "email": logging_user.email,
                "id": logging_user.id,
                }
        raise HTTPException(400, "Wrong password")
    raise HTTPException(404, "Account doesn't exist")


@user.get("/user/me")
def current_user(user: str = Depends(jwtBearer()), db: Session = Depends(get_db)):
    id = decodeJWT(user)["userID"]
    current_user = db.get(models.User, id)
    return current_user


@user.delete("/user/{id}")
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


@user.get("/user/{id}")
async def get_user(id, db: Session = Depends(get_db)):
    user = db.get(models.User, id)

    if user:
        return { "user": user, "courses": user.user_courses}
    return f"User with id {id} doesn't exist"


@user.put("/user/{id}")
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