from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from passlib.context import CryptContext

from database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, index=True)
    email = Column(String, index=True)
    password = Column(String, index=True)

    # chats where user1 is participating
    user1_chats = relationship("Chat", foreign_keys="[Chat.user1]", back_populates="user1_infos")
    # chats where user2 is participating
    user2_chats = relationship("Chat", foreign_keys="[Chat.user2]", back_populates="user2_infos")


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
