from fastapi import APIRouter

router = APIRouter()

@router.get("/books")
def get_books():
    return [
        {
            "id": 1,
            "title": "The Alchemist",
            "author": "Paulo Coelho",
            "genre": "Fiction",
        },
        {
            "id": 2,
            "title": "Beyond Good and Evil",
            "author": "Friedrich Nietzsche",
            "genre": "Philosophy",
        },
        {
            "id": 3,
            "title": "Pride and Prejudice",
            "author": "Jane Austen",
            "genre": "Classic",
        },
    ]