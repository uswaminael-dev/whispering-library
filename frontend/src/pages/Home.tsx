import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import ShuffleCard from "../components/shuffle/ShuffleCard";

import { books } from "../data/books";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <ShuffleCard book={books[0]} />
    </>
  );
}