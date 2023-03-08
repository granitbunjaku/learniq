from pydantic import BaseModel, EmailStr
from typing import Optional


class Roles(BaseModel):
    role: str


class Courses(BaseModel):
    title: str
    price: float
    about: str
    image: str
    category_id: int

    class Config:
        orm_mode = True


class User(BaseModel):
    name: str
    surname: str
    email: EmailStr
    about: Optional[str]
    phone_number: int
    role_id: int
    rating: float
    paypal: Optional[str]

    class Config:
        orm_mode = True

class UserBase(User):
    password: str

class UserEdit(BaseModel):
    name: Optional[str]
    surname: Optional[str]
    email: Optional[EmailStr]
    about: Optional[str]
    phone_number: Optional[int]
    role_id: Optional[int]
    rating: Optional[float]
    paypal: Optional[str]
    password: Optional[str]


class UserLogin(BaseModel):
    email: EmailStr
    password: str

class Categories(BaseModel):
    name: str


class SubCategories(BaseModel):
    name: str
    category_id: int

class SubCategoriesEdit(BaseModel):
    name: Optional[str]
    category_id: Optional[int]
    class Config:
        orm_mode = True

class ReadCourses(BaseModel):
    title: str
    price: float
    about: str
    image: str
    category_id: int
    owner_id: int

    class Config:
        orm_mode = True

class Assignments(BaseModel):
    name: str
    description: str
    points: float
    course_id: str

    class Config:
        orm_mode = True

class CourseStudents(BaseModel):
    user_id: int
    course_id: int
    joined_date: int

    class Config:
        orm_mode = True

class Chat(BaseModel):
    user1: int
    user2: int

    class Config:
        orm_mode = True
