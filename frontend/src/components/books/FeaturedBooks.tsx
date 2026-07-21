import { motion } from "framer-motion";
import BookCard from "./BookCard";
import { books } from "../../data/books";


export default function FeaturedBooks() {

  return (

    <section className="px-6 py-24">

      <motion.h2
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        className="
        text-center
        text-5xl
        font-semibold
        "
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

        {books.map((book)=>(
          <BookCard
            key={book.id}
            book={book}
          />
        ))}

      </div>


    </section>

  );
}