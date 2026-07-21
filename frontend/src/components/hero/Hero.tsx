import { motion } from "framer-motion";
import Container from "../common/Container";
import Button from "../common/Button";
import FloatingBooks from "./FloatingBooks";
import Particles from "./Particles";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#111315] pt-20">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1F3A2E]/20 blur-3xl" />
      <Particles />
      <FloatingBooks />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <p className="mb-6 tracking-[0.35em] uppercase text-[#C9A66B]">
            AI Powered Digital Library
          </p>

          <h1 className="text-7xl md:text-9xl font-semibold leading-[0.9] tracking-tight text-[#FAF7F2]">
            Whispering
            <br />
            <span className="text-[#C9A66B]">
              Library
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-neutral-300">
            Discover timeless classics, uncover forgotten masterpieces,
            and converse with literature through AI.
            Every visit is a new journey across centuries of human thought.
          </p>

          <div className="mt-12">
            <Button>
              Enter the Library
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}