import { useState } from "react";
import { books } from "../data/books";
import ShuffleCard from "../components/shuffle/ShuffleCard";
import { motion, AnimatePresence } from "framer-motion";

export default function Shuffle() {
  const [book, setBook] = useState(
    books[Math.floor(Math.random() * books.length)]
  );

  const [loading, setLoading] = useState(false);

  function shuffleBook() {
    setLoading(true);

    setTimeout(() => {
      const random =
        books[Math.floor(Math.random() * books.length)];

      setBook(random);
      setLoading(false);
    }, 1800);
  }

  return (
    <main className="min-h-screen bg-[#0D0F10] text-white flex items-center justify-center">

      <div className="text-center">

        <h1 className="mb-12 text-5xl font-bold">
          Shuffle the Library
        </h1>

        <AnimatePresence mode="wait">

          {loading ? (

            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                }}
                className="text-8xl"
              >
                📚
              </motion.div>

              <p className="mt-8 text-[#C9A66B] tracking-widest">
                Searching Ancient Shelves...
              </p>

            </motion.div>

          ) : (

            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >

              <ShuffleCard
                title={book.title}
                author={book.author}
                genre={book.genre}
              />

            </motion.div>

          )}

        </AnimatePresence>

        <button
          onClick={shuffleBook}
          className="mt-12 rounded-full bg-[#C9A66B] px-8 py-4 font-semibold text-black hover:scale-105 transition"
        >
          Shuffle Again
        </button>

      </div>

    </main>
  );
}