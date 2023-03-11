from fastapi import APIRouter, FastAPI, HTTPException, Depends, UploadFile, Form, File
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session
from starlette.responses import JSONResponse
import os
from datetime import datetime
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
                "name": logging_user.name,
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

    del user.password;

    if user:
        return { "user": user, "courses": user.user_courses}
    return f"User with id {id} doesn't exist"


@user.put("/user/{id}")
async def update_user(name: str = Form(...), surname: str = Form(...), about: str = Form(...), phone_number: str = Form(...), db: Session = Depends(get_db), token: str = Depends(jwtBearer()), image: UploadFile = File(...)):
    decoded_user = decodeJWT(token)
    old_user = db.get(models.User, decoded_user['userID'])

    if old_user:
        data = {"name":name, "surname": surname, "about": about, "phone_number": phone_number}
        for key, value in data.items():
            setattr(old_user, key, value)
        
        if image:
            if old_user.image != "string":
                os.remove(old_user.image)
            contents = await image.read()
            file_path = os.path.join("users_images", f"{datetime.now()}{image.filename}")
            with open(file_path, "wb") as f:
                f.write(contents)
            old_user.image = file_path

        db.add(old_user)
        db.commit()
        db.refresh(old_user)
        return old_user
    return f"User doesn't exist"