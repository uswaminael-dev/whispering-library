from fastapi import APIRouter
from pydantic import BaseModel
from sqlalchemy.orm import Session

from app.ai.gemini import ask_gemini
from app.db.database import SessionLocal
from app.models.book import Book

router = APIRouter()


class ChatRequest(BaseModel):
    book_id: int
    message: str


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/chat")
def chat(request: ChatRequest):
    db: Session = SessionLocal()

    try:
        book = db.query(Book).filter(Book.id == request.book_id).first()

        if not book:
            return {
                "response": "Sorry, I couldn't find that book."
            }

        prompt = f"""
You are an expert literary assistant.

The user is asking about THIS book only.

Title: {book.title}
Author: {book.author}
Genre: {book.genre}

Summary:
{book.summary}

Author Biography:
{book.author_bio}

Historical Context:
{book.historical_context}

Themes:
{book.themes}

Reading Difficulty:
{book.difficulty}

Estimated Reading Time:
{book.reading_time}

Instructions:
- Answer ONLY questions related to this book.
- If the user asks about another book or an unrelated topic, politely refuse.
- Keep responses informative, friendly, and concise.

User Question:
{request.message}
"""

        answer = ask_gemini(prompt)

        return {
            "response": answer
        }

    finally:
        db.close()