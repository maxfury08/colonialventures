import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import HERO from "../assets/images/HERO.png";
import FloatingParticles from "./FloatingParticles";


export default function Hero() {
  return (
    
    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      "
    >
      <FloatingParticles />
      
      {/* BACKGROUND IMAGE */}

      <div
        className="
        absolute
        inset-0

        bg-cover
        bg-center
        bg-no-repeat

        scale-105
        "
        style={{
          backgroundImage: `url(${HERO})`,
        }}
      ></div>

      {/* DARK OVERLAY */}

      <div
        className="
        absolute
        inset-0

        bg-black/55
        "
      ></div>

      {/* GOLD LIGHT LEAK */}

      <div
        className="
        absolute

        top-0
        right-0

        w-[700px]
        h-[700px]

        bg-[#D4AF37]/10

        blur-[140px]

        rounded-full
        "
      ></div>

      {/* GREEN ATMOSPHERIC GLOW */}

      <div
        className="
        absolute

        bottom-0
        left-0

        w-[600px]
        h-[600px]

        bg-[#1B4332]/30

        blur-[140px]

        rounded-full
        "
      ></div>

      {/* MIST OVERLAY */}

      <div
        className="
        absolute
        inset-0

        opacity-20

        bg-gradient-to-b
        from-white/10
        via-transparent
        to-black/40
        "
      ></div>

      {/* FLOATING PARTICLES */}

      <div
        className="
        absolute
        inset-0
        overflow-hidden
        "
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
            }}
            className="
            absolute

            w-2
            h-2

            bg-[#D4AF37]/40

            rounded-full
            "
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* CONTENT */}

      <div
        className="
        relative
        z-10

        max-w-7xl
        mx-auto

        px-6
        lg:px-8

        min-h-screen

        flex
        items-center

        pt-32
        md:pt-24
        "
      >
        <div className="max-w-2xl">
          {/* SMALL LABEL */}

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
              duration: 1,
            }}
            className="
            uppercase

            tracking-[8px]

            text-[#D4AF37]

            text-sm
            md:text-base

            mb-6
            "
          >
            Premium Plantation Investments
          </motion.p>

          {/* MAIN TITLE */}

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
              duration: 1.2,
            }}
            className="
            text-4xl
            md:text-6xl
            lg:text-7xl

            font-bold

            text-white

            leading-[1.1]

            mb-10
            "
            style={{
              fontFamily: "Georgia, serif",
            }}
          >
            Invest In
            <span className="text-[#D4AF37]">
              {" "}
              Sri Lanka’s
            </span>
            <br />
            Premium Pepper
            Plantations
          </motion.h1>

          {/* DESCRIPTION */}

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
              duration: 1.4,
            }}
            className="
            text-lg
            md:text-2xl

            text-gray-200

            leading-relaxed

            max-w-2xl

            mb-12
            "
          >
            Sustainable plantation investments
            backed by premium Sri Lankan
            agriculture, export-driven growth,
            and long-term estate value.
          </motion.p>

          {/* BUTTONS */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
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

            gap-6
            "
          >
            {/* PRIMARY */}

            <Link
              to="/plans"
              className="
              bg-[#D4AF37]
              hover:bg-[#c9a42d]

              text-black

              px-10
              py-5

              rounded-full

              text-lg
              font-semibold

              shadow-2xl

              transition-all
              duration-300

              hover:scale-105
              "
            >
              Start Investing
            </Link>

            {/* SECONDARY */}

            <Link
              to="/about"
              className="
              border
              border-white/20

              bg-white/5
              backdrop-blur-md

              hover:bg-white
              hover:text-black

              text-white

              px-10
              py-5

              rounded-full

              text-lg
              font-semibold

              transition-all
              duration-300
              "
            >
              Explore Estates
            </Link>
          </motion.div>

          {/* STATS */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.8,
            }}
            className="
            grid
            grid-cols-3

            gap-8

            mt-20
            "
          >
            {[
              {
                number: "120+",
                label: "Acres",
              },

              {
                number: "18+",
                label: "Export Markets",
              },

              {
                number: "12",
                label: "Years Experience",
              },
            ].map((item, index) => (
              <div key={index}>
                <h3
                  className="
                  text-4xl
                  md:text-5xl

                  font-bold

                  text-[#D4AF37]

                  mb-2
                  "
                >
                  {item.number}
                </h3>

                <p
                  className="
                  text-gray-300
                  text-sm
                  md:text-base
                  "
                >
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* BOTTOM FADE */}

      <div
        className="
        absolute
        bottom-0
        left-0

        w-full
        h-20

        bg-gradient-to-t
        from-[#F8F5F0]
        to-transparent
        "
      ></div>
    </section>
  );
}