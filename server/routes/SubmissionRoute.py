from fastapi import APIRouter, HTTPException, Depends, UploadFile, File, Form
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session
from fastapi.responses import FileResponse
from starlette.responses import JSONResponse
from datetime import datetime
import os
import models
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

    if old_user.role_id in [1,2]:
        submission = models.Submissions(description=description, assignment_id=assignment_id)

        contents = await image.read()

        filename = f"{datetime.now().strftime('%Y%m%d%H%M%S%f')}{image.filename}"
        file_path = os.path.join("course_assignments", filename)

        with open(file_path, "wb") as f:
            f.write(contents)

        submission.user_id = old_user.id
        submission.image = filename

        db.add(submission)
        db.commit()
        db.refresh(submission)
        return {"submission": submission, "user_name": submission.user.name}
    
    return HTTPException(401, "You must be Student to create an submission!")

@submission.get("/image/{image}")
async def get_image(image: str):
    image_path = f"course_assignments/{image}"
    content_type = "image/png"  # adjust the media type based on your file type
    return FileResponse(image_path, media_type=content_type)


@submission.get('/')
async def read(db: Session = Depends(get_db)):
    submissions = db.query(models.Submissions).all()

    all_submissions = []

    for submission in submissions:
        all_submissions.append({"submission": submission, "user_name": submission.user.name})

    return JSONResponse(content=jsonable_encoder(all_submissions))


@submission.get('/assignment/{id}')
async def read(id, db: Session = Depends(get_db)):
    submissions = db.query(models.Submissions).filter(models.Submissions.assignment_id == id).all()
    all_submissions = []

    for submission in submissions:
        all_submissions.append({"submission": submission, "user_name": submission.user.name})

    return JSONResponse(content=jsonable_encoder(all_submissions))


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
            os.remove(f"course_assignments/{submission.image}")
            db.delete(submission)
            db.commit()
            return f"Submission with id : {id} was successfully deleted!"
        return "You must own a submission to delete it"

    return HTTPException(404, f"Submission with id : {id} doesn't exist!")

