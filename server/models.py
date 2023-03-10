import datetime
from sqlalchemy.sql import func
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime, Float
from sqlalchemy.orm import relationship

from database import Base

class Roles(Base):
    __tablename__ = "roles"
    id = Column(Integer, primary_key=True, index=True)
    role = Column(String(20), index=True)

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(20), index=True)
    surname = Column(String(20), index=True)
    email = Column(String(50), index=True, unique=True)
    about = Column(String(250), index=True, nullable=True)
    phone_number = Column(String(10), index=True, unique=True)
    role_id = Column(Integer, ForeignKey("roles.id"), default=1)
    rating = Column(Float, index=True, default=0)
    paypal = Column(String, index=True, nullable=True)
    password = Column(String, index=True)

    user_courses = relationship("Courses", back_populates="course_owner")
    # chats where user1 is participating
    user1_chats = relationship("Chat", foreign_keys="[Chat.user1]", back_populates="user1_infos")
    # chats where user2 is participating
    user2_chats = relationship("Chat", foreign_keys="[Chat.user2]", back_populates="user2_infos")

    submissions = relationship("Submissions", back_populates="user")

class Categories(Base):
    __tablename__ = "categories"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), index=True)
    subcategories = relationship("SubCategories", back_populates="category")

class SubCategories(Base):
    __tablename__ = "subcategories"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), index=True)
    category_id = Column(Integer, ForeignKey("categories.id"))
    courses = relationship("Courses", back_populates="category")
    category = relationship("Categories", back_populates="subcategories")

class Courses(Base):
    __tablename__ = "courses"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(100), index=True)
    price = Column(Float, index=True)
    about = Column(String(250), index=True)
    image = Column(String, index=True)
    category_id = Column(Integer, ForeignKey("subcategories.id"))
    owner_id = Column(Integer, ForeignKey("users.id"))

    course_owner = relationship("User", back_populates="user_courses")
    category = relationship("SubCategories", back_populates="courses")
    assignments = relationship("Assignments", back_populates="course")
    videos = relationship("Videos", back_populates="course")


class Assignments(Base):
    __tablename__ = "assignments"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), index=True)
    description = Column(String(250), index=True)
    points = Column(Float, index=True)
    deadline = Column(DateTime, index=True)
    course_id = Column(Integer, ForeignKey("courses.id"))

    course = relationship("Courses", back_populates="assignments")
    submissions = relationship("Submissions", back_populates="assignments")

class CourseStudents(Base):
    __tablename__ = "course_students"
    user_id = Column(Integer, ForeignKey("users.id"), primary_key=True, index=True)
    course_id = Column(Integer, ForeignKey("courses.id"), primary_key=True, index=True)
    joined_date = Column(DateTime, index=True, default=datetime.datetime.utcnow())


class Chat(Base):
    __tablename__ = "chat"

    id = Column(Integer, primary_key=True, index=True)
    user1 = Column(Integer, ForeignKey("users.id"))
    user2 = Column(Integer, ForeignKey("users.id"))

    user1_infos = relationship("User", foreign_keys=[user1], back_populates="user1_chats")
    user2_infos = relationship("User", foreign_keys=[user2], back_populates="user2_chats")


class Messages(Base):
    __tablename__ = "messages"

    id = Column(Integer, primary_key=True, index=True)
    message = Column(String, index=True)
    sender_id = Column(Integer, ForeignKey("users.id"))
    chat_id = Column(Integer, ForeignKey("chat.id"))

class Submissions(Base): 
    __tablename__ = "submissions"

    id = Column(Integer, primary_key=True, index=True)
    image = Column(String, index= True)
    description = Column(String, index= True)
    assignment_id = Column(Integer, ForeignKey("assignments.id"))
    user_id = Column(Integer, ForeignKey("users.id"))

    assignments = relationship("Assignments", back_populates="submissions")
    user = relationship("User", back_populates="submissions")

class Videos(Base):
    __tablename__ = "videos"

    id = Column(Integer, primary_key=True, index=True)
    video = Column(String, index=True)
    description = Column(String, index=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    course_id = Column(Integer, ForeignKey("courses.id"))

    course = relationship("Courses", back_populates="videos")