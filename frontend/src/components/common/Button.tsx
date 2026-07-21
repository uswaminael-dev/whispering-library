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
  className="
  rounded-full
  border
  border-[#C9A66B]
  bg-[#1F3A2E]
  px-10
  py-4
  font-semibold
  text-[#FAF7F2]
  transition-all
  duration-300
  hover:scale-105
  hover:border-[#E0B97A]
  hover:shadow-[0_0_35px_rgba(201,166,107,0.35)]
  active:scale-95
  cursor-pointer
  "
>
  {children}
</button>
  );
}