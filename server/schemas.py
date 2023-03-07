from pydantic import BaseModel, EmailStr

class User(BaseModel):
    id: int
    username: str
    email: EmailStr


class UserBase(User):
    password: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class Chat(BaseModel):
    id: int
    user1_infos: User
    user2_infos: User

    class Config:
        orm_mode = True
