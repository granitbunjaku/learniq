from fastapi import APIRouter, FastAPI, HTTPException, Depends
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session
from starlette.responses import JSONResponse
import models
import schemas
from database import SessionLocal, engine

subcategory = APIRouter()

models.Base.metadata.create_all(bind=engine)

def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


# SUBCATEGORIES ENDPOINTS ----------
@subcategory.post("/")
def create_subcategory(subcategory: schemas.SubCategories, db: Session = Depends(get_db)):
    new_subcategory = models.SubCategories(**subcategory.dict())
    db.add(new_subcategory)
    db.commit()
    db.refresh(new_subcategory)
    return new_subcategory


@subcategory.get("/")
def get_subcategories(db: Session = Depends(get_db)):
    subcategories = db.query(models.SubCategories).all()
    return subcategories


@subcategory.get("/{id}")
def get_subcategories(id, db: Session = Depends(get_db)):
    subcategory = db.get(models.SubCategories, id)

    if subcategory:
        return subcategory
    return HTTPException(404, "Subcategory doesn't exist")


@subcategory.delete("/{id}")
async def delete_subcategory(id, db: Session = Depends(get_db)):
    subcategory = db.get(models.SubCategories, id)
    if subcategory:
        db.delete(subcategory)
        db.commit()
        return f"Subcategory with id : {id} was deleted successfully!"
    return f"Subcategory doesn't exist"


@subcategory.put("/{id}")
async def update_subcategory(id, user: schemas.SubCategoriesEdit, db: Session = Depends(get_db)):
    old_subcategory = db.get(models.SubCategories, id)
    if old_subcategory:
        new_subcategory = user.dict(exclude_unset=True)
        for key, value in new_subcategory.items():
            setattr(old_subcategory, key, value)
        db.add(old_subcategory)
        db.commit()
        db.refresh(old_subcategory)
        return old_subcategory
    return f"Subcategory doesn't exist"