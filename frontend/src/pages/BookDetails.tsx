import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBook } from "../services/books";

export default function BookDetails() {
  const { id } = useParams();

  const {
    data: book,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["book", id],
    queryFn: () => getBook(Number(id)),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#0D0F10] text-white">
        Loading book...
      </main>
    );
  }

  if (isError || !book) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#0D0F10] text-red-400">
        Book not found.
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0D0F10] text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">

        <Link
          to="/shuffle"
          className="text-[#C9A66B] hover:underline"
        >
          ← Back
        </Link>

        <h1 className="mt-8 text-6xl font-bold">
          {book.title}
        </h1>

        <p className="mt-3 text-2xl text-gray-400">
          {book.author}
        </p>

        <span className="inline-block mt-6 rounded-full border border-[#C9A66B] px-4 py-2">
          {book.genre}
        </span>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold">
            Summary
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-300">
            {book.summary}
          </p>
        </section>

      </div>
    </main>
  );
}