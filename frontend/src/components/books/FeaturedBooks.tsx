import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import BookCard from "./BookCard";
import { getBooks } from "../../services/books";
import type { Book } from "../../types/book";

export default function FeaturedBooks() {
  const {
    data: books,
    isLoading,
    isError,
  } = useQuery<Book[]>({
    queryKey: ["books"],
    queryFn: getBooks,
  });

  if (isLoading) {
    return (
      <section className="px-6 py-24 text-center">
        <h2 className="text-2xl text-white">
          Loading books...
        </h2>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="px-6 py-24 text-center">
        <h2 className="text-2xl text-red-400">
          Failed to load books.
        </h2>
      </section>
    );
  }

  return (
    <section className="px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center text-5xl font-semibold"
      >
        Featured Books
      </motion.h2>

      <div
        className="
          mx-auto
          mt-12
          grid
          max-w-6xl
          gap-8
          md:grid-cols-3
        "
      >
        {books?.map((book) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}
      </div>
    </section>
  );
}