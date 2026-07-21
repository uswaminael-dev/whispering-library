import { motion } from "framer-motion";

const links = [
  "Discover",
  "Library",
  "AI Chat",
  "About",
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#111315]/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <h1
          className="text-3xl font-semibold text-[#FAF7F2]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Whispering Library
        </h1>

        <nav className="hidden gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="relative text-neutral-300 transition hover:text-[#C9A66B] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#C9A66B] after:transition-all hover:after:w-full"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}