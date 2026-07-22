import { books } from "../data/books";

export default function BookDetails() {
  const book = books[0];

  return (
    <main className="min-h-screen bg-[#0D0F10] text-white">

      <div className="mx-auto max-w-7xl px-8 py-20">

        <div className="grid gap-12 md:grid-cols-3">

          <div>

            <div className="aspect-[2/3] rounded-3xl bg-[#1B2B24] border border-[#C9A66B]/20 flex items-center justify-center text-8xl">
              📖
            </div>

          </div>

          <div className="md:col-span-2">

            <p className="uppercase tracking-[0.35em] text-[#C9A66B]">
              Philosophy
            </p>

            <h1 className="mt-4 text-6xl font-bold">
              {book.title}
            </h1>

            <p className="mt-4 text-2xl text-neutral-400">
              {book.author}
            </p>

            <div className="mt-8 flex gap-4">

              <span className="rounded-full bg-[#1F3A2E] px-4 py-2">
                Beginner
              </span>

              <span className="rounded-full bg-[#3E2F23] px-4 py-2">
                6 hrs
              </span>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}