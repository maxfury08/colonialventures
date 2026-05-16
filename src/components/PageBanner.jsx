import { motion } from "framer-motion";

export default function PageBanner({
  image,
  subtitle,
  title,
  description,
  height = "h-[60vh]",
}) {
  return (
    <section
      className={`
      relative
      ${height}
      flex
      items-center
      justify-center
      text-center
      overflow-hidden
      `}
    >
      {/* BACKGROUND IMAGE */}

      <img
        src={image}
        alt={title}
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        "
      />

      {/* DARK OVERLAY */}

      <div
        className="
        absolute
        inset-0
        bg-black/70
        "
      ></div>

      {/* GRADIENT */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-black/80
        via-black/50
        to-black/70
        "
      ></div>

      {/* CONTENT */}

      <div
        className="
        relative
        z-10
        px-6
        max-w-5xl
        "
      >
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
          uppercase
          tracking-[4px]
          text-[#D4AF37]
          mb-4
          "
        >
          {subtitle}
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
          text-5xl
          md:text-7xl
          font-bold
          leading-tight
          mb-6
          text-white
          "
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            className="
            text-lg
            md:text-xl
            text-gray-300
            leading-relaxed
            max-w-3xl
            mx-auto
            "
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}