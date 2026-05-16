import { motion } from "framer-motion";

export default function AnimatedCard({
  children,
  delay = 0,
  className = "",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay,
      }}
      className={`
      bg-[#081C15]
      border
      border-white/10
      rounded-3xl
      transition-all
      hover:border-[#D4AF37]
      hover:-translate-y-2
      ${className}
      `}
    >
      {children}
    </motion.div>
  );
}