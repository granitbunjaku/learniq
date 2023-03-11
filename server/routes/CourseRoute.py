import os
from datetime import datetime
from os.path import isfile
from typing import Optional

from fastapi import APIRouter, HTTPException, Depends, UploadFile, File, Form
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session
from starlette.responses import JSONResponse
from fastapi.responses import FileResponse

import models
import schemas
from auth.jwtbearer import jwtBearer
from database import SessionLocal, engine
from auth.jwthandler import decodeJWT

course = APIRouter()

models.Base.metadata.create_all(bind=engine)

def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


# COURSES ENDPOINTS ----------
@course.post("/courses")
async def create_course(title: str = Form(...), price: float = Form(...), about: str = Form(...), category_id: int = Form(...), db: Session = Depends(get_db), token: str = Depends(jwtBearer()), file: UploadFile = File(...)):
    decoded_user = decodeJWT(token)
    old_user = db.get(models.User, decoded_user['userID'])

    if old_user.role_id == 2:
        course = models.Courses(title=title, price=price, about=about, category_id=category_id)

        contents = await file.read()
        filename = f"{datetime.now().strftime('%Y%m%d%H%M%S%f')}{file.filename}"
        file_path = os.path.join("courseimages", filename)
        with open(file_path, "wb") as f:
            f.write(contents)

        course.owner_id = old_user.id
        course.image = filename
        db.add(course)
        db.commit()
        db.refresh(course)
        return course
    return HTTPException(401, "You must be admin to create an course!")


@course.get("/my/courses")
def get_my_courses(db: Session = Depends(get_db), token: str = Depends(jwtBearer())):
    decoded_user = decodeJWT(token)
    courses = db.query(models.Courses).filter(models.Courses.owner_id == decoded_user['userID'])

    my_courses = []

    for course in courses:
        my_courses.append(course)

    return my_courses

@course.delete("/courses/{id}")
def delete_course(id, db: Session = Depends(get_db), token: str = Depends(jwtBearer())):
    decoded_user = decodeJWT(token)
    course = db.get(models.Courses, id)

    if course:
        if course.owner_id == decoded_user['userID']:
            os.remove(f"courseimages/{course.image}")
            db.delete(course)
            db.commit()
            return f"Course with id : {id} was successfully deleted!"
        return "You must own a course to delete it"

    return HTTPException(404, f"Course with id : {id} doesn't exist!")


@course.get("/courses")
def get_courses(db: Session = Depends(get_db)):
    courses = db.query(models.Courses).all()
    return courses

@course.get("/courses/image/{image}")
async def get_image(image: str):
    image_path = f"courseimages/{image}"
    content_type = "image/png"  # adjust the media type based on your file type
    return FileResponse(image_path, media_type=content_type)

@course.get("/courses/{id}")
def get_course(id, db: Session = Depends(get_db)):
    course = db.get(models.Courses, id)

    if not course:
        return HTTPException(404, f"Course with id : {id} doesn't exist!")

    del course.course_owner.password

    data = [
        course,
        course.course_owner,
        course.category,
        course.assignments
    ]

    return JSONResponse(content=jsonable_encoder(data[0]))


@course.put("/courses/{id}")
async def update(id, title: str = Form(None), price: float = Form(None), about: str = Form(None), category_id: int = Form(None), db: Session = Depends(get_db), token: str = Depends(jwtBearer()), file: Optional[UploadFile] = File(None)):
    db_course = db.get(models.Courses, id)
    data = {"title": title, "price" : price, "about" : about, "category_id" : category_id}

    if db_course:
        for key, value in data.items():
            if value is not None:
                setattr(db_course, key, value)

        if file:
            os.remove(db_course.image)
            contents = await file.read()
            file_path = os.path.join("courseimages", f"{datetime.now()}{file.filename}")
            with open(file_path, "wb") as f:
                f.write(contents)
            db_course.image = file_path

        db.add(db_course)
        db.commit()
        db.refresh(db_course)
        data = [
            db_course,
            db_course.course_owner,
            db_course.category
        ]

        return JSONResponse(content=jsonable_encoder(data[0]))

    return HTTPException(404, f"Course with id : {id} doesn't exist!")