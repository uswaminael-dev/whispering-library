from fastapi import FastAPI
from app.routes.books import router as books_router

app = FastAPI(
    title="Whispering Library API",
    version="1.0.0",
    description="Backend API for Whispering Library",
)

# Register routes
app.include_router(books_router)


@app.get("/")
def root():
    return {
        "message": "Welcome to Whispering Library API 📚"
    }
    