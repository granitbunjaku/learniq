from fastapi import APIRouter, FastAPI, HTTPException, Depends
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session
from starlette.responses import JSONResponse

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
async def create(submission: schemas.Submissions, db: Session = Depends(get_db), token: str = Depends(jwtBearer())):
    decoded_user = decodeJWT(token)
    old_user = db.get(models.User, decoded_user['userID'])


    if old_user.role_id == 0:
        submission = models.Submissions(**submission.dict())
        submission.user_id = old_user.id
        db.add(submission)
        db.commit()
        db.refresh(submission)
        return JSONResponse(content=jsonable_encoder(submission))
    
    return HTTPException(401, "You must be Student to create an submission!")


@submission.get('/')
async def read(db: Session = Depends(get_db)):
    submissions = db.query(models.Submissions).all()
    
    return JSONResponse(content=jsonable_encoder(submissions))

@submission.put('/{id}')
async def update(id, submission: schemas.UpdateSubmission, db: Session = Depends(get_db), token: str = Depends(jwtBearer())):
    db_submission = db.get(models.Submissions, id)

    if db_submission:
        if submission:
            submission = submission.dict(exclude_unset=True)
            for key, value in submission.items():
                setattr(db_submission, key, value)

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
            db.delete(submission)
            db.commit()
            return f"Submission with id : {id} was successfully deleted!"
        return "You must own a submission to delete it"

    return HTTPException(404, f"Submission with id : {id} doesn't exist!")

