from fastapi import APIRouter, HTTPException, Depends
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session
from starlette.responses import JSONResponse
import models
import schemas
from database import SessionLocal, engine

role = APIRouter()

models.Base.metadata.create_all(bind=engine)

def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


# ROLE ENDPOINTS ----------
@role.post("/roles/create")
def create_role(role: schemas.Roles, db: Session = Depends(get_db)):
    role = models.Roles(**role.dict())
    db.add(role)
    db.commit()
    db.refresh(role)
    return role

@role.delete("/roles/{id}")
def delete_role(id, db: Session = Depends(get_db)):
    role = db.get(models.Roles, id)

    if role:
        db.delete(role)
        db.commit()
        return f"Role with id : {id} was successfully deleted!"

    return HTTPException(404, f"Role with id : {id} doesn't exist!")

@role.get("/roles")
def get_roles(db: Session = Depends(get_db)):
    roles = db.query(models.Roles).all()
    return roles

@role.get("/roles/{id}")
def get_role(id, db: Session = Depends(get_db)):
    role = db.get(models.Roles, id)

    if role:
        return role

    return HTTPException(404, f"Role with id : {id} doesn't exist!")

@role.put("/roles/{id}")
def update_role(id, role: schemas.Roles, db: Session = Depends(get_db)):
    old_role = db.get(models.Roles, id)
    if old_role:
        if role.name:
            new_role = role.dict(exclude_unset=True)
            for key, value in new_role.items():
                setattr(old_role, key, value)
            db.add(old_role)
            db.commit()
            db.refresh(old_role)
            return old_role
        return HTTPException(400, f"Role field is required!")

    return HTTPException(404, f"Role with id : {id} doesn't exist!")