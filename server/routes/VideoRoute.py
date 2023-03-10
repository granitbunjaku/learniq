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

video = APIRouter()

models.Base.metadata.create_all(bind=engine)

def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()

@video.post('/')
async def create(description: str = Form(...),course_id: int = Form(...), db: Session = Depends(get_db), token: str = Depends(jwtBearer()), video: UploadFile = File(...)):
    decoded_user = decodeJWT(token)
    old_user = db.get(models.User, decoded_user['userID'])

    if old_user.role_id == 0:
        _video = models.Videos(description=description,course_id=course_id)

        contents = await video.read()
        
        file_path = os.path.join("course_videos", f"{datetime.now()}{video.filename}")
        
        with open(file_path, "wb") as f: 
            f.write(contents)

        _video.video = file_path

        db.add(_video)
        db.commit()
        db.refresh(_video)
        return JSONResponse(jsonable_encoder(_video))
    
    return HTTPException(401, "You must be Student to create an Video!")


@video.get('/')
async def read(db: Session = Depends(get_db)):
    videos = db.query(models.Videos).all()
    
    return JSONResponse(content=jsonable_encoder(videos))

@video.put('/{id}')
async def update(id, description: str = Form(...), course_id: int = Form(...), db: Session = Depends(get_db), token: str = Depends(jwtBearer()), video: UploadFile = File(...)):
    db_video = db.get(models.Videos, id)

    data = {"description": description, "course_id": course_id }

    if db_video:
        for key, value in data.items():
            setattr(db_video, key, value)

        if video:
            os.remove(db_video.video)
            contents = await video.read()
            file_path = os.path.join("course_videos", f"{datetime.now()}{video.filename}")
            with open(file_path, "wb") as f:
                f.write(contents)
            db_video.video = file_path

        db.add(db_video)
        db.commit()
        db.refresh(db_video)

        return JSONResponse(content=jsonable_encoder(db_video))

    return HTTPException(404, f"Submission with id : {id} doesn't exist!")


@video.get('/{id}')
async def read(id, db: Session = Depends(get_db)):
    submission = db.get(models.Videos, id)

    if not submission:
        return HTTPException(404, f"Submission with id : {id} doesn't exist!")
    
    return JSONResponse(content=jsonable_encoder(submission))


@video.delete('/{id}')
async def read(id, db: Session = Depends(get_db), token: str = Depends(jwtBearer())):
    decoded_user = decodeJWT(token)
    _video = db.get(models.Videos, id)

    if _video:
        if decoded_user['userID'] == 1:
            os.remove(_video.video)
            db.delete(_video)
            db.commit()
            return f"Video with id : {id} was successfully deleted!"
        return "You must own a Video to delete it"

    return HTTPException(404, f"Video with id : {id} doesn't exist!")

