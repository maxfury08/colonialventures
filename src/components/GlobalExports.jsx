import { motion } from "framer-motion";

import exportMap from "../assets/images/export-map.png";

export default function GlobalExports() {
  const exports = [
    "Middle East",
    "Europe",
    "Australia",
    "Asia",
    "International Spice Markets",
  ];

  return (
    <section
      className="
      bg-black
      text-white
      py-24
      px-6
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        grid
        lg:grid-cols-2
        gap-16
        items-center
        "
      >
        {/* CONTENT */}

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
        >
          <p
            className="
            uppercase
            tracking-[4px]
            text-[#D4AF37]
            mb-4
            "
          >
            Global Exports
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            leading-tight
            mb-8
            "
          >
            Connecting Sri Lankan Pepper to the World
          </h2>

          <p
            className="
            text-lg
            text-gray-300
            leading-relaxed
            mb-10
            "
          >
            Colonial Ventures focuses on export-grade
            pepper cultivation serving premium
            international spice markets across
            multiple global regions.
          </p>

          <div className="space-y-4">
            {exports.map((item, index) => (
              <div
                key={index}
                className="
                flex
                items-center
                gap-4
                bg-[#081C15]
                border
                border-white/10
                rounded-2xl
                px-6
                py-5
                "
              >
                <div
                  className="
                  w-3
                  h-3
                  rounded-full
                  bg-[#D4AF37]
                  "
                ></div>

                <p className="text-lg">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* MAP */}

        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <img
            src={exportMap}
            alt="Global Exports"
            className="
            w-full
            max-w-[900px]
            mx-auto
            scale-125
            lg:scale-150
            object-contain
            "
            />
        </motion.div>
      </div>
    </section>
  );
}