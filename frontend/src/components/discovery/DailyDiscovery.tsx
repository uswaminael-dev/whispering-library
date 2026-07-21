import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function DailyDiscovery() {
  return (
    <section className="px-6 py-24">

      <motion.div
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        className="
        mx-auto
        max-w-5xl
        rounded-3xl
        border
        border-[#C9A66B]/20
        bg-white/5
        p-12
        text-center
        backdrop-blur-xl
        "
      >

        <Sparkles
          className="mx-auto mb-6 text-[#C9A66B]"
          size={45}
        />

        <p className="text-[#C9A66B] tracking-widest">
          DAILY DISCOVERY
        </p>


        <h2 className="mt-5 text-5xl font-semibold">
          The Book Waiting For You Today
        </h2>


        <p className="mt-6 text-neutral-300">
          Every day a new story, a new idea,
          and a new world to explore.
        </p>


        <button
          className="
          mt-8
          rounded-full
          bg-[#C9A66B]
          px-8
          py-3
          text-black
          "
        >
          Discover Book
        </button>


      </motion.div>

    </section>
  );
}