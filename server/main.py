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
from routes.SubmissionRoute import submission
from paypal.checkout import payment_routes

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
app.include_router(subcategory, prefix="/subcategories")
app.include_router(course)
app.include_router(assignment)
app.include_router(payment_routes)
app.include_router(submission, prefix='/submissions')