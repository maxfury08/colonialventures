import { motion } from "framer-motion";

import worldMap from "../assets/images/export-map.png";

export default function GlobalExports() {
  const exportMarkets = [
    "United Kingdom",
    "Germany",
    "United Arab Emirates",
    "India",
    "Australia",
    "Singapore",
  ];

  return (
    <section
      className="
      relative

      overflow-hidden

      py-32
      lg:py-40
      "
      style={{
        background:
          "linear-gradient(90deg, #ffffff 0%, #f4f1eb 25%, #1a1a1a 65%, #000000 100%)",
      }}
    >
      {/* GOLD ATMOSPHERIC GLOW */}

      <div
        className="
        absolute

        top-1/2
        right-0

        -translate-y-1/2

        w-[900px]
        h-[900px]

        bg-[#D4AF37]/10

        blur-[180px]

        rounded-full
        "
      ></div>

      {/* MAP BACKGROUND */}

      <div
        className="
        absolute

        top-0
        right-0

        w-[75%]
        h-full

        hidden
        lg:block
        "
      >
        {/* MAP */}

        <img
          src={worldMap}
          alt="World Map"
          className="
          absolute
          inset-0

          w-full
          h-full

          object-cover

          opacity-[0.3]

          scale-125
          "
        />

        {/* BLACK OVERLAY */}

        <div
          className="
          absolute
          inset-0

          bg-gradient-to-r
          from-transparent
          via-[#081C15]/70
          to-black
          "
        ></div>

        {/* LEFT FADE */}

        <div
          className="
          absolute
          inset-y-0
          left-0

          w-[400px]

          bg-gradient-to-r
          from-[#f4f1eb]
          to-transparent
          "
        ></div>

        {/* EXPORT LINES GLOW */}

        <div
          className="
          absolute

          top-[30%]
          right-[15%]

          w-[500px]
          h-[500px]

          border

          border-[#D4AF37]/10

          rounded-full

          blur-sm
          "
        ></div>

        {/* GLOW DOTS */}

        {[
          {
            top: "30%",
            left: "70%",
          },

          {
            top: "45%",
            left: "78%",
          },

          {
            top: "60%",
            left: "60%",
          },

          {
            top: "38%",
            left: "48%",
          },

          {
            top: "72%",
            left: "82%",
          },
        ].map(
          (
            marker,
            index
          ) => (
            <motion.div
              key={index}
              animate={{
                scale: [
                  1,
                  1.4,
                  1,
                ],
                opacity: [
                  0.5,
                  1,
                  0.5,
                ],
              }}
              transition={{
                duration: 2,
                repeat:
                  Infinity,
                delay:
                  index * 0.3,
              }}
              className="
              absolute
              z-20
              "
              style={{
                top: marker.top,
                left: marker.left,
              }}
            >
              {/* OUTER GLOW */}

              <div
                className="
                absolute

                -inset-4

                bg-[#D4AF37]/20

                blur-xl

                rounded-full
                "
              ></div>

              {/* DOT */}

              <div
                className="
                relative

                w-4
                h-4

                rounded-full

                bg-[#D4AF37]

                shadow-[0_0_20px_rgba(212,175,55,1)]
                "
              ></div>
            </motion.div>
          )
        )}
      </div>

      {/* CONTENT */}

      <div
        className="
        relative
        z-20

        max-w-7xl
        mx-auto

        px-6
        lg:px-10
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
          max-w-2xl
          "
        >
          {/* LABEL */}

          <p
            className="
            uppercase

            tracking-[8px]

            text-[#D4AF37]

            text-sm
            md:text-base

            mb-6
            "
          >
            International Exports
          </p>

          {/* TITLE */}

          <h2
            className="
            text-5xl
            md:text-7xl

            font-bold

            text-[#081C15]

            leading-[0.95]

            mb-10
            "
            style={{
              fontFamily:
                "Georgia, serif",
            }}
          >
            Supplying
            Premium Sri
            Lankan Pepper
            To Global
            Markets
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
            text-lg
            md:text-xl

            text-gray-700

            leading-relaxed

            mb-14

            max-w-xl
            "
          >
            Colonial Ventures
            connects Sri Lanka’s
            premium pepper
            cultivation industry
            with international
            buyers across Europe,
            the Middle East,
            Asia, and Oceania.
          </p>

          {/* EXPORT LIST */}

          <div className="space-y-5">
            {exportMarkets.map(
              (
                country,
                index
              ) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay:
                      index * 0.1,
                  }}
                  className="
                  flex
                  items-center
                  gap-4

                  bg-white/70
                  backdrop-blur-xl

                  border
                  border-white/50

                  rounded-2xl

                  px-6
                  py-5

                  shadow-xl

                  hover:border-[#D4AF37]
                  hover:translate-x-2

                  transition-all
                  duration-300
                  "
                >
                  {/* DOT */}

                  <div
                    className="
                    w-3
                    h-3

                    rounded-full

                    bg-[#D4AF37]

                    shadow-[0_0_15px_rgba(212,175,55,0.8)]
                    "
                  ></div>

                  <span
                    className="
                    text-[#081C15]

                    text-lg
                    font-semibold
                    "
                  >
                    {country}
                  </span>
                </motion.div>
              )
            )}
          </div>

          {/* STATS */}

          <div
            className="
            grid
            grid-cols-3

            gap-5

            mt-14

            max-w-xl
            "
          >
            {[
              {
                number: "18+",
                label:
                  "Export Markets",
              },

              {
                number: "250T",
                label:
                  "Annual Exports",
              },

              {
                number: "100%",
                label:
                  "Sri Lankan Origin",
              },
            ].map(
              (
                item,
                index
              ) => (
                <div
                  key={index}
                  className="
                  bg-[#081C15]

                  rounded-2xl

                  p-5

                  text-center

                  shadow-2xl

                  border
                  border-white/5
                  "
                >
                  <h3
                    className="
                    text-3xl
                    md:text-4xl

                    font-bold

                    text-[#D4AF37]

                    mb-2
                    "
                  >
                    {
                      item.number
                    }
                  </h3>

                  <p
                    className="
                    text-gray-300

                    text-sm
                    "
                  >
                    {item.label}
                  </p>
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}