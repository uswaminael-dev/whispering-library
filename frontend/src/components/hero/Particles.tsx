import { motion } from "framer-motion";

const particles = Array.from({ length: 20 });

export default function Particles() {
  return (
    <>
      {particles.map((_, index) => {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = 8 + Math.random() * 8;
        const delay = Math.random() * 5;

        return (
          <motion.div
            key={index}
            className="absolute rounded-full bg-[#C9A66B]/30"
            style={{
              width: 4,
              height: 4,
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{
              y: [-10, 20, -10],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.4, 1],
            }}
            transition={{
              repeat: Infinity,
              duration,
              delay,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </>
  );
}