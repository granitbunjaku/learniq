from fastapi import APIRouter, FastAPI, HTTPException, Depends
from typing import Dict
import json
from sqlalchemy.orm import Session
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


@course.post("/courses/create")
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

@course.delete("/courses/{id}")
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

@course.get("/courses")
def get_courses(db: Session = Depends(get_db)):
    courses = db.query(models.Courses).all()
    return courses

# @course.get("/categories/{id}")
# def get_category(id, db: Session = Depends(get_db)):
#     category = db.get(models.Categories, id)
#
#     if category:
#         return {"name": category.name, "subcategories": category.subcategories}
#
#     return HTTPException(404, f"Cateogry with id : {id} doesn't exist!")
#
# @course.put("/categories/{id}")
# def update_category(id, category: schemas.Categories, db: Session = Depends(get_db)):
#     old_category = db.get(models.Categories, id)
#     if old_category:
#         if category.name:
#             new_category = category.dict(exclude_unset=True)
#             for key, value in new_category.items():
#                 setattr(old_category, key, value)
#             db.add(old_category)
#             db.commit()
#             db.refresh(old_category)
#             return {"name": old_category.name, "subcategories": old_category.subcategories}
#         return HTTPException(400, f"Name field is required!")
#
#     return HTTPException(404, f"Cateogry with id : {id} doesn't exist!")