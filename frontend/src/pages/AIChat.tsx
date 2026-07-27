import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getBook } from "../services/books";
import { chatWithBook } from "../services/chat";

export default function AIChat() {
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

  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!message.trim() || !book) return;

    setLoading(true);

    try {
      const data = await chatWithBook({
        book_id: book.id,
        message,
      });

      setResponse(data.response);
    } catch (err) {
      console.error(err);
      setResponse("Something went wrong.");
    }

    setLoading(false);
  }

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center text-white">
        Loading...
      </main>
    );
  }

  if (isError || !book) {
    return (
      <main className="flex min-h-screen items-center justify-center text-white">
        Book not found.
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-20 text-white">

      <h1 className="text-5xl font-bold">
        Chat with "{book.title}"
      </h1>

      <p className="mt-3 text-neutral-400">
        Ask anything about this book.
      </p>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask a question..."
        className="mt-8 h-40 w-full rounded-2xl bg-white/5 p-5 outline-none"
      />

      <button
        onClick={sendMessage}
        disabled={loading}
        className="mt-6 rounded-full bg-[#C9A66B] px-8 py-3 font-semibold text-black"
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {response && (
        <div className="mt-10 rounded-3xl border border-[#C9A66B]/20 bg-white/5 p-8">
          <h2 className="mb-4 text-2xl font-semibold">
            Gemini
          </h2>

          <p className="whitespace-pre-wrap leading-8">
            {response}
          </p>
        </div>
      )}

    </main>
  );
}