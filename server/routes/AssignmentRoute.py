from fastapi import APIRouter, FastAPI, HTTPException, Depends
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session
from starlette.responses import JSONResponse

import models
import schemas
from auth.jwtbearer import jwtBearer
from database import SessionLocal, engine
from auth.jwthandler import decodeJWT

assignment = APIRouter()

models.Base.metadata.create_all(bind=engine)

def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


# ASSIGNMENTS ENDPOINTS ----------
@assignment.post("/assignments/create")
def create_assignment(assignment: schemas.Assignments, db: Session = Depends(get_db), token: str = Depends(jwtBearer())):
    decoded_user = decodeJWT(token)
    new_assignment = models.Assignments(**assignment.dict())
    course = db.get(models.Courses, new_assignment.course_id)

    if course.owner_id == decoded_user['userID']:
        db.add(new_assignment)
        db.commit()
        db.refresh(new_assignment)
        return JSONResponse(content=jsonable_encoder(new_assignment))

    return HTTPException(401, f"You must own the course to post assignments for it")

@assignment.get("/assignments")
def get_assignments(db: Session = Depends(get_db)):
    assignments = db.query(models.Assignments).all()
    return JSONResponse(content=jsonable_encoder(assignments))


@assignment.get("/assignments/{id}")
def get_assignment(id, db: Session = Depends(get_db)):
    assignment = db.get(models.Assignments, id)

    if assignment:
        return JSONResponse(content=jsonable_encoder(assignment))

    return HTTPException(404, f"Assignment with id : {id} doesn't exist!")


@assignment.put("/assignments/{id}")
def update_assignment(id, assignment: schemas.AssignmentEdit,db: Session = Depends(get_db), token: str = Depends(jwtBearer())):
    decoded_user = decodeJWT(token)
    old_assignment = db.get(models.Assignments, id)

    if old_assignment:
        if old_assignment.course.owner_id == decoded_user['userID']:
            for key, value in assignment:
                setattr(old_assignment, key, value)
            db.add(old_assignment)
            db.commit()
            db.refresh(old_assignment)
            return old_assignment

        return HTTPException(401, f"You must own the assignment to edit it")

    return HTTPException(404, f"Assignment with id : {id} doesn't exist!")


@assignment.delete("/assignments/{id}")
def delete_assignment(id, db: Session = Depends(get_db), token: str = Depends(jwtBearer())):
    decoded_user = decodeJWT(token)
    assignment = db.get(models.Assignments, id)

    if assignment:
        if assignment.course.owner_id == decoded_user['userID']:
            db.delete(assignment)
            db.commit()
            return f"Assignment with id : {id} was successfully deleted!"

        return HTTPException(401, f"You must own the assignment to delete it")

    return HTTPException(404, f"Assignment with id : {id} doesn't exist!")