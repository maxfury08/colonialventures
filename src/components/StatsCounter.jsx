import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function StatsCounter({
  value,
  suffix = "",
  title,
  decimals = 0,
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
      }}
      className="
      bg-[#081C15]
      border
      border-white/10
      rounded-3xl
      p-10
      text-center
      "
    >
      {/* VALUE */}

      <h3
        className="
        text-5xl
        font-bold
        text-[#D4AF37]
        mb-4
        "
      >
        <CountUp
          end={value}
          duration={3}
          decimals={decimals}
        />

        {suffix}
      </h3>

      {/* TITLE */}

      <p
        className="
        text-gray-300
        text-lg
        "
      >
        {title}
      </p>
    </motion.div>
  );
}