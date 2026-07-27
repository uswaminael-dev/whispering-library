import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBook } from "../services/books";
import { Link } from "react-router-dom";

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
      <main className="flex min-h-screen items-center justify-center bg-[#0D0F10] text-white">
        <h2 className="text-2xl">Loading Book...</h2>
      </main>
    );
  }

  if (isError || !book) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0D0F10] text-red-400">
        <h2 className="text-2xl">Book not found.</h2>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-20 text-white">

      <div className="grid gap-12 lg:grid-cols-[300px_1fr]">

        {/* Book Cover */}
        <div>
          {book.cover_url ? (
            <img
              src={book.cover_url}
              alt={book.title}
              className="w-full rounded-3xl shadow-2xl transition duration-300 hover:scale-105"
            />
          ) : (
            <div
              className="
                flex
                h-[420px]
                items-center
                justify-center
                rounded-3xl
                border
                border-[#C9A66B]/20
                bg-gradient-to-br
                from-[#15211C]
                to-[#0D0F10]
                text-8xl
              "
            >
              📚
            </div>
          )}
        </div>

        {/* Book Info */}
        <div>

          <p className="uppercase tracking-[0.35em] text-[#C9A66B]">
            {book.genre}
          </p>

          <h1 className="mt-4 text-6xl font-bold leading-tight">
            {book.title}
          </h1>

          <p className="mt-4 text-2xl text-neutral-400">
            {book.author}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <span className="rounded-full bg-[#C9A66B]/10 px-5 py-2 text-[#C9A66B]">
              {book.genre}
            </span>

            <span className="rounded-full bg-[#1F3A2E] px-5 py-2">
              {book.difficulty || "Unknown Difficulty"}
            </span>

            <span className="rounded-full bg-[#222] px-5 py-2">
              {book.reading_time || "Unknown Reading Time"}
            </span>

          </div>

        </div>

      </div>

      {/* Content */}
      <section className="mt-16 space-y-8">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <h2 className="mb-4 text-3xl font-semibold">
            Summary
          </h2>

          <p className="leading-8 text-neutral-300">
            {book.summary}
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <h2 className="mb-4 text-3xl font-semibold">
            About the Author
          </h2>

          <p className="leading-8 text-neutral-300">
            {book.author_bio || "Information coming soon."}
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <h2 className="mb-4 text-3xl font-semibold">
            Historical Context
          </h2>

          <p className="leading-8 text-neutral-300">
            {book.historical_context || "Information coming soon."}
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <h2 className="mb-4 text-3xl font-semibold">
            Main Themes
          </h2>

          <p className="leading-8 text-neutral-300">
            {book.themes || "Information coming soon."}
          </p>
        </div>

        <div className="flex justify-center pt-6">
          <Link
            to={`/chat/${book.id}`}
            className="
              rounded-full
              bg-[#C9A66B]
              px-8
              py-4
              font-semibold
              text-black
              transition
              hover:scale-105
            "
          >
            💬 Chat with this Book
          </Link>
        </div>

      </section>

    </main>
  );
}