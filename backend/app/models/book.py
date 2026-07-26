from sqlalchemy import Column, Integer, String, Text
from app.db.database import Base


class Book(Base):
    __tablename__ = "books"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String, nullable=False)
    author = Column(String, nullable=False)
    genre = Column(String, nullable=False)

    summary = Column(Text, nullable=False)

    author_bio = Column(Text)
    historical_context = Column(Text)
    themes = Column(Text)

    difficulty = Column(String)
    reading_time = Column(String)

    cover_url = Column(Text)