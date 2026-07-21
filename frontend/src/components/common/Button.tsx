import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`rounded-full border border-[#C9A66B] bg-[#1F3A2E] px-8 py-4 font-medium text-[#FAF7F2] transition-all duration-300 hover:-translate-y-1 hover:bg-[#284838] hover:shadow-[0_0_30px_rgba(201,166,107,0.35)] ${className}`}
    >
      {children}
    </button>
  );
}