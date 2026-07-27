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
  const [messages, setMessages] = useState<
  {
    role: "user" | "assistant";
    content: string;
  }[]
>([]);

  const [loading, setLoading] = useState(false);

  async function sendMessage() {
  if (!message.trim()) return;

  const userMessage = message;

  setMessages((prev) => [
    ...prev,
    {
      role: "user",
      content: userMessage,
    },
  ]);

  setMessage("");
  setLoading(true);

  try {
    const history = messages.map((msg) => ({
  role: msg.role,
  content: msg.content,
}));

const data = await chatWithBook({
  book_id: Number(id),
  message: userMessage,
  history,
});

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: data.response,
      },
    ]);
  } catch {
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: "Something went wrong.",
      },
    ]);
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

      <div className="mt-10 space-y-6">

  {messages.map((msg, index) => (


    <div
      key={index}
      className={
        msg.role === "user"
          ? "ml-auto max-w-2xl rounded-3xl bg-[#C9A66B] p-5 text-black"
          : "mr-auto max-w-2xl rounded-3xl bg-white/5 p-5"
      }
    >

      <p className="mb-2 font-semibold">
        {msg.role === "user"
          ? "You"
          : "Whispering Library AI"}
      </p>

      <p className="whitespace-pre-wrap leading-8">
        {msg.content}
      </p>

    </div>

  ))}

  {loading && (

  <div className="mr-auto max-w-md rounded-3xl bg-white/5 p-5">

    <p className="font-semibold">
      Whispering Library AI
    </p>

    <p className="mt-2 animate-pulse">
      Thinking...
    </p>

  </div>

)}

</div>

    </main>
  );
}