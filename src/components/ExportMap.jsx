import { motion } from "framer-motion";

import exportMap from "../assets/images/export-map.png";

export default function ExportMap() {
  const exportRegions = [
    "Europe",
    "Middle East",
    "Australia",
    "Asia",
    "North America",
  ];

  return (
    <section
      className="
      bg-[#081C15]
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
        {/* MAP */}

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
          <img
            src={exportMap}
            alt="Export Map"
            className="
            w-full
            object-contain
            "
          />
        </motion.div>

        {/* CONTENT */}

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
          <p
            className="
            uppercase
            tracking-[4px]
            text-[#D4AF37]
            mb-4
            "
          >
            International Reach
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
            Exporting Premium Sri Lankan Pepper Worldwide
          </h2>

          <p
            className="
            text-lg
            text-gray-300
            leading-relaxed
            mb-10
            "
          >
            Colonial Ventures focuses on supplying
            export-grade pepper to premium global
            spice markets across multiple
            international regions.
          </p>

          <div className="space-y-4">
            {exportRegions.map(
              (region, index) => (
                <div
                  key={index}
                  className="
                  flex
                  items-center
                  gap-4
                  bg-black
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
                    {region}
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