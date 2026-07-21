import { motion } from "framer-motion";
import { BookOpen, Clock3, Sparkles } from "lucide-react";
import type { Book } from "../../types/book";

interface ShuffleCardProps {
  book: Book;
}

export default function ShuffleCard({ book }: ShuffleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto mt-16 max-w-2xl rounded-3xl border border-[#C9A66B]/20 bg-white/5 p-8 backdrop-blur-xl"
    >
      <div className="mb-6 flex justify-center">
        <BookOpen size={48} className="text-[#C9A66B]" />
      </div>

      <p className="text-center text-sm uppercase tracking-[0.35em] text-[#C9A66B]">
        Random Discovery
      </p>

      <h2 className="mt-4 text-center text-5xl font-semibold">
        {book.title}
      </h2>

      <p className="mt-2 text-center text-lg text-neutral-300">
        {book.author}
      </p>

      <div className="mt-6 flex justify-center gap-3">
        <span className="rounded-full bg-[#1F3A2E] px-4 py-2 text-sm">
          {book.genre}
        </span>

        <span className="rounded-full bg-[#3E2F23] px-4 py-2 text-sm">
          {book.year}
        </span>
      </div>

      <p className="mt-8 text-center leading-8 text-neutral-300">
        {book.description}
      </p>

      <div className="mt-8 flex justify-center gap-8 text-sm text-neutral-300">
        <div className="flex items-center gap-2">
          <Sparkles size={18} />
          {book.difficulty}
        </div>

        <div className="flex items-center gap-2">
          <Clock3 size={18} />
          {book.readingTime}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <button className="rounded-full bg-[#C9A66B] px-8 py-3 font-semibold text-black transition hover:scale-105">
          Explore Book
        </button>
      </div>
    </motion.div>
  );
}