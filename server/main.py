from fastapi import FastAPI
import models
from Chat.ChatWebsocket import chat
from database import SessionLocal, engine
from routes.AssignmentRoute import assignment
from routes.CategoryRoute import category
from routes.CourseRoute import course
from routes.RoleRoute import role
from routes.SubcategoryRoute import subcategory
from routes.UserRoute import user

app = FastAPI()

models.Base.metadata.create_all(bind=engine)

def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()

app.include_router(chat)
app.include_router(category)
app.include_router(role)
app.include_router(user)
app.include_router(subcategory)
app.include_router(course)
app.include_router(assignment)