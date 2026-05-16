import { motion } from "framer-motion";

export default function SectionTitle({
  subtitle,
  title,
  description,
  center = true,
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
        duration: 1,
      }}
      className={`
      mb-20
      ${
        center
          ? "text-center"
          : "text-left"
      }
      `}
    >
      {/* SUBTITLE */}

      <p
        className="
        uppercase
        tracking-[4px]
        text-[#D4AF37]
        mb-4
        "
      >
        {subtitle}
      </p>

      {/* TITLE */}

      <h2
        className="
        text-4xl
        md:text-5xl
        font-bold
        leading-tight
        mb-6
        "
      >
        {title}
      </h2>

      {/* DESCRIPTION */}

      {description && (
        <p
          className="
          text-lg
          text-gray-300
          max-w-3xl
          leading-relaxed
          mx-auto
          "
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}