import { motion } from "framer-motion";

import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section
      className="
      relative

      py-24
      px-6

      bg-[#081C15]

      overflow-hidden
      "
    >
      {/* GLOW */}

      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2

        w-[700px]
        h-[700px]

        bg-[#D4AF37]/10

        blur-[120px]

        rounded-full
        "
      ></div>

      <div
        className="
        relative
        z-10

        max-w-5xl
        mx-auto

        text-center
        "
      >
        <motion.p
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
          className="
          uppercase
          tracking-[5px]
          text-[#D4AF37]
          mb-4
          "
        >
          Start Your Investment Journey
        </motion.p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          className="
          text-4xl
          md:text-6xl
          font-bold

          text-white

          leading-tight

          mb-8
          "
        >
          Invest in Sri Lanka’s Premium Pepper Plantation Future
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.4,
          }}
          className="
          text-lg
          md:text-xl

          text-gray-300

          leading-relaxed

          max-w-3xl
          mx-auto

          mb-12
          "
        >
          Speak with our plantation
          investment specialists and
          discover sustainable
          opportunities backed by real
          agricultural assets and
          export-driven growth.
        </motion.p>

        {/* BUTTONS */}

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
            duration: 1.6,
          }}
          className="
          flex
          flex-col
          sm:flex-row
          justify-center
          gap-6
          "
        >
          <Link
            to="/contact"
            className="
            bg-[#D4AF37]
            hover:bg-[#c49c22]

            text-black

            px-10
            py-5

            rounded-full

            text-lg
            font-semibold

            transition-all
            "
          >
            Contact Us
          </Link>

          <a
            href="https://wa.me/94770000000"
            target="_blank"
            rel="noopener noreferrer"
            className="
            border
            border-white/20

            hover:bg-white
            hover:text-[#081C15]

            text-white

            px-10
            py-5

            rounded-full

            text-lg
            font-semibold

            transition-all
            "
          >
            WhatsApp Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}