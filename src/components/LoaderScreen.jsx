import { motion } from "framer-motion";

export default function LoaderScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="
      fixed
      inset-0
      z-[9999]

      bg-[#081C15]

      flex
      items-center
      justify-center
      flex-col
      "
    >
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
        className="
        w-28
        h-28

        rounded-full

        border-[3px]
        border-[#D4AF37]/20
        border-t-[#D4AF37]

        mb-8
        "
      />

      <h1
        className="
        text-5xl
        text-[#D4AF37]
        font-bold
        tracking-[4px]
        "
      >
        Colonial Ventures
      </h1>

      <p className="text-gray-400 mt-4 tracking-[6px] uppercase">
        Premium Pepper Estates
      </p>
    </motion.div>
  );
}