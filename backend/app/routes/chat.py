from fastapi import APIRouter
from pydantic import BaseModel

from app.ai.gemini import ask_gemini

router = APIRouter()


class ChatRequest(BaseModel):
    book_id: int
    message: str
    history: list = []


@router.post("/chat")
def chat(request: ChatRequest):

    prompt = f"""
You are an expert literary assistant.

The user is asking about book ID {request.book_id}.

Conversation history:

{request.history}

Current question:

{request.message}

Answer naturally.
"""

    answer = ask_gemini(prompt)

    return {
        "response": answer
    }