import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const books = [
  {
    top: "15%",
    left: "10%",
    duration: 8,
    size: 36,
  },
  {
    top: "70%",
    left: "15%",
    duration: 10,
    size: 42,
  },
  {
    top: "25%",
    right: "12%",
    duration: 9,
    size: 32,
  },
  {
    top: "65%",
    right: "18%",
    duration: 12,
    size: 40,
  },
];

export default function FloatingBooks() {
  return (
    <>
      {books.map((book, index) => (
        <motion.div
          key={index}
          className="absolute text-[#C9A66B]/20"
          style={book}
          animate={{
            y: [-10, 10, -10],
            rotate: [-3, 3, -3],
          }}
          transition={{
            repeat: Infinity,
            duration: book.duration,
            ease: "easeInOut",
          }}
        >
          <BookOpen size={book.size} />
        </motion.div>
      ))}
    </>
  );
}