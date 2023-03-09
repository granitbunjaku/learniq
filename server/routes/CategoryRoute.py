from fastapi import APIRouter, HTTPException, Depends
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session
from starlette.responses import JSONResponse
import models
import schemas
from database import SessionLocal, engine

category = APIRouter()

models.Base.metadata.create_all(bind=engine)

def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


# CATEGORY ENDPOINTS ----------
@category.post("/categories/create")
def create_category(category: schemas.Categories, db: Session = Depends(get_db)):
    category = models.Categories(**category.dict())
    db.add(category)
    db.commit()
    db.refresh(category)
    return JSONResponse(content=jsonable_encoder(category))

@category.delete("/categories/{id}")
def delete_category(id, db: Session = Depends(get_db)):
    category = db.get(models.Categories, id)

    if category:
        db.delete(category)
        db.commit()
        return f"Category with id : {id} was successfully deleted!"

    return HTTPException(404, f"Cateogry with id : {id} doesn't exist!")

@category.get("/categories")
def get_categories(db: Session = Depends(get_db)):
    categories = db.query(models.Categories).all()
    data = list(map(lambda category: {"name": category.name, "subcategories": category.subcategories}, categories))
    return JSONResponse(content=jsonable_encoder(data))

@category.get("/categories/{id}")
def get_category(id, db: Session = Depends(get_db)):
    category = db.get(models.Categories, id)

    if category:
        data = {"name": category.name, "subcategories": category.subcategories}
        return JSONResponse(content=jsonable_encoder(data))

    return HTTPException(404, f"Cateogry with id : {id} doesn't exist!")

@category.put("/categories/{id}")
def update_category(id, category: schemas.Categories, db: Session = Depends(get_db)):
    old_category = db.get(models.Categories, id)
    if old_category:
        if category.name:
            new_category = category.dict(exclude_unset=True)
            for key, value in new_category.items():
                setattr(old_category, key, value)
            db.add(old_category)
            db.commit()
            db.refresh(old_category)
            data = {"name": old_category.name, "subcategories": old_category.subcategories}
            return JSONResponse(content=jsonable_encoder(data))
        return HTTPException(400, f"Name field is required!")

    return HTTPException(404, f"Cateogry with id : {id} doesn't exist!")