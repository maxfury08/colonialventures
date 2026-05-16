import { motion } from "framer-motion";

export default function InvestmentCard({
  title,
  investment,
  returns,
  featured,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className={`
      rounded-[40px]

      p-12

      border

      transition-all
      duration-500

      hover:-translate-y-2
      hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
      transition-all
      duration-500

      min-h-[520px]

      flex
      flex-col
      justify-between

      ${
        featured
          ? `
          bg-[#001F17]
          text-white
          border-[#D4AF37]
          shadow-2xl
          `
          : `
          bg-[#F2ECE6]
          text-[#081C15]
          border-gray-200
          `
      }
      `}
    >
      <div>
        {/* BADGE */}

        {featured && (
          <div
            className="
            inline-block

            bg-[#D4AF37]

            text-black

            px-6
            py-3

            rounded-full

            text-lg
            font-semibold

            mb-10
            "
          >
            Most Popular
          </div>
        )}

        {/* TITLE */}

        <h3
          className={`
          text-5xl
          font-bold
          uppercase

          mb-10

          ${
            featured
              ? "text-white"
              : "text-black"
          }
          `}
          style={{
            fontFamily: "Georgia, serif",
          }}
        >
          {title}
        </h3>

        {/* INVESTMENT */}

        <div
          className="
          text-6xl
          font-bold

          text-[#D4AF37]

          leading-tight

          mb-8
          "
        >
          {investment}
        </div>

        {/* RETURNS */}

        <p
          className={`
          text-2xl

          ${
            featured
              ? "text-white"
              : "text-black"
          }
          `}
        >
          {returns}
        </p>
      </div>

      {/* BUTTON */}

      <button
        className="
        w-full

        mt-12

        bg-[#D4AF37]
        hover:bg-[#c9a42d]

        text-black

        py-5

        rounded-full

        text-2xl
        font-semibold

        transition-all
        duration-300
        "
      >
        Invest Now
      </button>
    </motion.div>
  );
}