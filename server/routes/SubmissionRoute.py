from fastapi import APIRouter, HTTPException, Depends, UploadFile, File, Form
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session
from starlette.responses import JSONResponse
from datetime import datetime
import os
import models
import schemas
from auth.jwtbearer import jwtBearer
from database import SessionLocal, engine
from auth.jwthandler import decodeJWT

submission = APIRouter()

models.Base.metadata.create_all(bind=engine)

def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()

@submission.post('/')
async def create(description: str = Form(...), assignment_id: int = Form(...), db: Session = Depends(get_db), token: str = Depends(jwtBearer()), image: UploadFile = File(...)):
    decoded_user = decodeJWT(token)
    old_user = db.get(models.User, decoded_user['userID'])

    if old_user.role_id == 0:
        submission = models.Submissions(description=description, assignment_id=assignment_id)

        contents = await image.read()
        
        file_path = os.path.join("course_assignments", f"{datetime.now()}{image.filename}")
        
        with open(file_path, "wb") as f: 
            f.write(contents)

        submission.user_id = old_user.id
        submission.image = file_path

        db.add(submission)
        db.commit()
        db.refresh(submission)
        return JSONResponse(jsonable_encoder(submission))
    
    return HTTPException(401, "You must be Student to create an submission!")


@submission.get('/')
async def read(db: Session = Depends(get_db)):
    submissions = db.query(models.Submissions).all()
    
    return JSONResponse(content=jsonable_encoder(submissions))

@submission.put('/{id}')
async def update(id, description: str = Form(...), assignment_id: int = Form(...), db: Session = Depends(get_db), token: str = Depends(jwtBearer()), image: UploadFile = File(...)):
    db_submission = db.get(models.Submissions, id)

    data = {"description": description, "assignment_id": assignment_id }

    if db_submission:
        if submission:
            for key, value in data.items():
                setattr(db_submission, key, value)

            if image:
                os.remove(db_submission.image)
                contents = await image.read()
                file_path = os.path.join("course_assignments", f"{datetime.now()}{image.filename}")
                with open(file_path, "wb") as f:
                    f.write(contents)
                db_submission.image = file_path

            db.add(db_submission)
            db.commit()
            db.refresh(db_submission)
            data = [
                db_submission,
                db_submission.user_id
            ]

            return JSONResponse(content=jsonable_encoder(data[0]))

    return HTTPException(404, f"Submission with id : {id} doesn't exist!")


@submission.get('/{id}')
async def read(id, db: Session = Depends(get_db)):
    submission = db.get(models.Submissions, id)

    if not submission:
        return HTTPException(404, f"Submission with id : {id} doesn't exist!")
    
    return JSONResponse(content=jsonable_encoder(submission))


@submission.delete('/{id}')
async def read(id, db: Session = Depends(get_db), token: str = Depends(jwtBearer())):
    decoded_user = decodeJWT(token)
    submission = db.get(models.Submissions, id)

    if submission:
        if submission.user_id == decoded_user['userID']:
            os.remove(submission.image)
            db.delete(submission)
            db.commit()
            return f"Submission with id : {id} was successfully deleted!"
        return "You must own a submission to delete it"

    return HTTPException(404, f"Submission with id : {id} doesn't exist!")

