export default function Footer() {
  return (
    <footer className="border-t border-[#C9A66B]/10 bg-[#0D0F10]">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="flex flex-col md:flex-row md:justify-between gap-10">

          <div>
            <h2 className="text-2xl font-semibold text-[#C9A66B]">
              Whispering Library
            </h2>

            <p className="mt-3 max-w-sm text-neutral-400">
              Every book whispers a story across time.
            </p>
          </div>

          <div className="flex gap-8 text-neutral-400">

            <a href="#">Discover</a>

            <a href="#">Shuffle</a>

            <a href="#">Library</a>

            <a href="#">AI Chat</a>

          </div>

        </div>

        <div className="mt-10 border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between text-sm text-neutral-500">

          <p>
            © 2026 Whispering Library
          </p>

          <p>
            Crafted with React • FastAPI • OpenAI • PostgreSQL
          </p>

        </div>

      </div>
    </footer>
  );
}