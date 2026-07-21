export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1F3A2E] text-xl shadow-lg">
        📚
      </div>

      <div>
        <h1 className="text-lg font-bold tracking-wide text-[#FAF7F2]">
          Whispering Library
        </h1>

        <p className="text-xs tracking-[0.2em] uppercase text-[#C9A66B]">
          AI Library
        </p>
      </div>
    </div>
  );
}