from fastapi import APIRouter
from pydantic import BaseModel

from app.ai.gemini import ask_gemini

router = APIRouter()


class ChatRequest(BaseModel):
    message: str


@router.post("/chat")
def chat(request: ChatRequest):
    answer = ask_gemini(request.message)

    return {
        "response": answer
    }