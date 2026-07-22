import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ShuffleCardProps {
  id: number;
  title: string;
  author: string;
  genre: string;
}

export default function ShuffleCard({
  id,
  title,
  author,
  genre,
}: ShuffleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.8 }}
      className="
        mx-auto
        w-[340px]
        rounded-3xl
        border
        border-[#C9A66B]/20
        bg-[#15211C]
        p-8
        text-center
        shadow-2xl
      "
    >
      <div className="mb-8 text-7xl">📚</div>

      <p className="text-xs uppercase tracking-[0.35em] text-[#C9A66B]">
        RANDOM DISCOVERY
      </p>

      <h2 className="mt-5 text-3xl font-bold">
        {title}
      </h2>

      <p className="mt-3 text-neutral-400">
        {author}
      </p>

      <span className="mt-6 inline-block rounded-full bg-[#C9A66B]/10 px-4 py-2 text-[#C9A66B]">
        {genre}
      </span>

      <div className="mt-8">
        <Link
          to={`/book/${id}`}
          className="rounded-full bg-[#C9A66B] px-6 py-3 font-semibold text-black transition hover:opacity-90"
        >
          Explore this Book
        </Link>
      </div>
    </motion.div>
  );
}