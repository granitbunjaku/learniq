from fastapi import APIRouter, FastAPI, HTTPException, Depends
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session
from starlette.responses import JSONResponse

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


@course.get("/courses/{id}")
def get_course(id, db: Session = Depends(get_db)):
    course = db.get(models.Courses, id)

    if not course:
        return HTTPException(404, f"Course with id : {id} doesn't exist!")

    course.course_owner.password = "*******"

    data = [
        course,
        course.course_owner,
        course.category,
        course.assignments
    ]

    return JSONResponse(content=jsonable_encoder(data[0]))


@course.put("/courses/{id}")
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