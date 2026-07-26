from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.books import router as books_router

app = FastAPI(
    title="Whispering Library API",
    version="1.0.0",
    description="Backend API for Whispering Library",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(books_router)

@app.get("/")
def root():
    return {
        "message": "Welcome to Whispering Library API 📚"
    }