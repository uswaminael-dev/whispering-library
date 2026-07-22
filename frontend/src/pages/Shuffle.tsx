import { useState } from "react";
import { books } from "../data/books";
import ShuffleCard from "../components/shuffle/ShuffleCard";

export default function Shuffle() {
  const randomBook =
    books[Math.floor(Math.random() * books.length)];

  const [book, setBook] = useState(randomBook);

  function shuffleBook() {
    const next =
      books[Math.floor(Math.random() * books.length)];

    setBook(next);
  }

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
          className="
          mt-12
          rounded-full
          bg-[#C9A66B]
          px-8
          py-4
          font-semibold
          text-black
          transition
          hover:scale-105
          "
        >
          Shuffle Again
        </button>

      </div>

    </main>
  );
}