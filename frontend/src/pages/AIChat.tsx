export default function AIChat() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-10 text-white">

      <h1 className="text-5xl font-bold">
        Chat with your Book
      </h1>

      <p className="mt-4 text-neutral-400">
        Ask anything about the book.
      </p>

      <div className="mt-10 flex-1 rounded-3xl border border-white/10 bg-white/5 p-8">

        <div className="space-y-6">

          <div className="max-w-md rounded-2xl bg-[#1F3A2E] p-4">
            What is the main theme?
          </div>

          <div className="ml-auto max-w-md rounded-2xl bg-[#C9A66B] p-4 text-black">
            The central theme is following one's Personal Legend...
          </div>

        </div>

      </div>

      <div className="mt-8 flex gap-4">

        <input
          className="
            flex-1
            rounded-full
            border
            border-white/10
            bg-white/5
            px-6
            py-4
            outline-none
          "
          placeholder="Ask anything..."
        />

        <button
          className="
            rounded-full
            bg-[#C9A66B]
            px-8
            font-semibold
            text-black
          "
        >
          Send
        </button>

      </div>

    </main>
  );
}