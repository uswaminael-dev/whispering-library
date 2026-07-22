import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../services/books";
import type { Book } from "../types/book";
import ShuffleCard from "../components/shuffle/ShuffleCard";

export default function Shuffle() {
  const { data: books, isLoading, isError } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
  });

  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    if (books && books.length > 0 && !book) {
      setBook(books[Math.floor(Math.random() * books.length)]);
    }
  }, [books, book]);

  function shuffleBook() {
    if (!books || books.length === 0) return;

    const random = books[Math.floor(Math.random() * books.length)];
    setBook(random);
  }

  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#0D0F10] text-white">
        <h2 className="text-2xl">Loading library...</h2>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#0D0F10] text-red-400">
        Failed to load books.
      </main>
    );
  }

  if (!book) return null;

  return (
    <main className="min-h-screen bg-[#0D0F10] text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24">

        <h1 className="mb-12 text-5xl font-bold">
          Shuffle the Library
        </h1>

        <ShuffleCard
          title={book.title}
          author={book.author}
          genre={book.genre}
        />

        <button
          onClick={shuffleBook}
          className="mt-12 rounded-full bg-[#C9A66B] px-8 py-4 font-semibold text-black transition hover:scale-105"
        >
          Shuffle Again
        </button>

      </div>
    </main>
  );
}