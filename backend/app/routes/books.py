from fastapi import APIRouter, HTTPException

router = APIRouter()

books = [
    {
        "id": 1,
        "title": "The Alchemist",
        "author": "Paulo Coelho",
        "genre": "Fiction",
        "summary": "A shepherd follows his dream in search of treasure.",
    },
    {
        "id": 2,
        "title": "Beyond Good and Evil",
        "author": "Friedrich Nietzsche",
        "genre": "Philosophy",
        "summary": "A critique of traditional morality and philosophy.",
    },
    {
        "id": 3,
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "genre": "Classic",
        "summary": "Love, class and family in Georgian England.",
    },
]


@router.get("/books")
def get_books():
    return books


@router.get("/books/{book_id}")
def get_book(book_id: int):
    for book in books:
        if book["id"] == book_id:
            return book

    raise HTTPException(status_code=404, detail="Book not found")