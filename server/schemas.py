import datetime

from pydantic import BaseModel, EmailStr
from typing import Optional


class Roles(BaseModel):
    role: str


class Courses(BaseModel):
    title: str
    price: float
    about: str
    category_id: int

    class Config:
        orm_mode = True


class User(BaseModel):
    name: str
    surname: str
    email: EmailStr
    about: Optional[str]
    phone_number: str
    role_id: Optional[int]
    paypal: Optional[str]
    confirm_password: str

    class Config:
        orm_mode = True

class UserBase(User):
    password: str
    confirm_password: str

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


class Assignments(BaseModel):
    name: str
    description: str
    points: float
    deadline: datetime.date
    course_id: int

    class Config:
        orm_mode = True


class AssignmentEdit(BaseModel):
    name: Optional[str]
    description: Optional[str]
    points: Optional[float]
    deadline: Optional[datetime.date]

    class Config:
        orm_mode = True


class CourseStudents(BaseModel):
    user_id: int
    course_id: int
    joined_date: datetime.date

    class Config:
        orm_mode = True

class Chat(BaseModel):
    user1: int
    user2: int

    class Config:
        orm_mode = True

class Submissions(BaseModel):
    image: str
    description: Optional[str]
    assignment_id: int

    class Config:
        orm_mode = True

class UpdateSubmission(BaseModel):
    image: Optional[str]
    description: Optional[str]

    class Config:
        orm_mode = True

class Videos(BaseModel):
    video: str
    description: Optional[str]
    created_at: Optional[datetime.date]
    course_id: int

    class Config:
        orm_mode = True