import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1F3A2E]/30 via-[#111315] to-[#111315]" />


      {/* Floating particles */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute left-20 top-40 h-3 w-3 rounded-full bg-[#C9A66B]"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute right-32 top-60 h-2 w-2 rounded-full bg-[#C9A66B]"
      />


      <div className="relative z-10 max-w-4xl text-center">


        <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1}}
          className="mb-6 tracking-[0.5em] text-[#C9A66B]"
        >
          AI POWERED DIGITAL LIBRARY
        </motion.p>



        <motion.h1
          initial={{
            opacity:0,
            y:30
          }}
          animate={{
            opacity:1,
            y:0
          }}
          transition={{
            duration:0.8
          }}
          className="text-6xl font-semibold leading-tight md:text-8xl"
        >
          Every Book
          <br />
          Whispers A Story
        </motion.h1>



        <motion.p
          initial={{
            opacity:0
          }}
          animate={{
            opacity:1
          }}
          transition={{
            delay:0.5
          }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-300"
        >
          Discover timeless books, understand brilliant minds,
          and converse with literature through artificial intelligence.
        </motion.p>



        <Link to="/shuffle">

          <motion.button
            whileHover={{
              scale:1.05
            }}
            whileTap={{
              scale:0.95
            }}
            className="mt-10 flex mx-auto items-center gap-3 rounded-full 
            bg-[#C9A66B] px-8 py-4 font-semibold text-black"
          >

            Enter The Library

            <ArrowRight size={20}/>

          </motion.button>

        </Link>


      </div>


    </section>
  );
}