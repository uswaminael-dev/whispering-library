import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

interface BookCardProps {
  book: {
    title: string;
    author: string;
    genre: string;
    year: string;
    description: string;
  };
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

        <span className="rounded-full bg-[#3E2F23] px-3 py-1">
          {book.year}
        </span>

      </div>


      <p className="mt-5 text-sm leading-6 text-neutral-300">
        {book.description}
      </p>


    </motion.div>
  );
}