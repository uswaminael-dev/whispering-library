import { motion } from "framer-motion";
import Container from "../common/Container";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#111315]">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1F3A2E]/20 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 mx-auto max-w-3xl text-center"
        >
          <p className="mb-6 tracking-[0.35em] uppercase text-[#C9A66B]">
            AI Powered Digital Library
          </p>

          <h1
            className="text-6xl font-bold leading-tight md:text-8xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Whispering
            <br />
            Library
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
            Every book whispers a story across time.
            Discover timeless classics, explore brilliant minds,
            and converse with literature through AI.
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