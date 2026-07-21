from fastapi import FastAPI

app = FastAPI(
    title="Whispering Library API",
    version="1.0.0",
    description="Backend API for Whispering Library"
)


@app.get("/")
def root():
    return {
        "message": "Welcome to Whispering Library API 📚"
    }