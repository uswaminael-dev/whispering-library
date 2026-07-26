import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import type { Book } from "../../types/book";
import { Link } from "react-router-dom";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="
      rounded-3xl
      border border-[#C9A66B]/20
      bg-white/5
      p-6
      backdrop-blur-xl
      "
    >
      <div className="mb-6 flex justify-center">
        <BookOpen
          size={50}
          className="text-[#C9A66B]"
        />
      </div>

      <h3 className="text-2xl font-semibold">
        {book.title}
      </h3>

      <p className="mt-2 text-neutral-400">
        {book.author}
      </p>

      <div className="mt-4 flex gap-3 text-sm">

        <span className="rounded-full bg-[#1F3A2E] px-3 py-1">
          {book.genre}
        </span>

      </div>

      <p className="mt-5 text-sm leading-6 text-neutral-300">
        {book.summary}
      </p>

    </motion.div>
  );

  <Link
  to={`/book/${book.id}`}
  className="mt-6 inline-flex rounded-full bg-[#C9A66B] px-5 py-3 font-medium text-black transition hover:scale-105"
>
  Explore this Book
</Link>

}