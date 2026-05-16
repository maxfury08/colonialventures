import { motion } from "framer-motion";

import {
  FaLeaf,
  FaChartLine,
  FaGlobeAsia,
  FaShieldAlt,
} from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaLeaf size={40} />,

      title: "Sustainable Cultivation",

      description:
        "Eco-friendly farming practices focused on long-term environmental sustainability.",
    },

    {
      icon: <FaChartLine size={40} />,

      title: "Stable Monthly Returns",

      description:
        "Structured plantation investments designed for recurring investor returns.",
    },

    {
      icon: <FaGlobeAsia size={40} />,

      title: "Global Export Market",

      description:
        "Access to premium international spice markets across Europe, Asia, and the Middle East.",
    },

    {
      icon: <FaShieldAlt size={40} />,

      title: "Investor Security",

      description:
        "Professionally managed plantation operations with transparent investment structures.",
    },
  ];

  return (
    <section
      className="
      bg-white
      text-[#0B1D16]

      py-24
      px-6
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

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
          className="text-center mb-20"
        >
          <p
            className="
            uppercase
            tracking-[4px]
            text-[#D4AF37]
            mb-4
            "
          >
            Why Colonial Ventures
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            leading-tight
            "
          >
            Plantation Investments Built for the Future
          </h2>
        </motion.div>

        {/* GRID */}

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
          "
        >
          {features.map(
            (feature, index) => (
              <motion.div
                key={index}
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
                  delay: index * 0.2,
                }}
                className="
                bg-[#081C15]

                p-8

                rounded-3xl

                border
                border-white/10

                hover:border-[#D4AF37]
                hover:-translate-y-2

                transition-all
                duration-500
                "
              >
                <div
                  className="
                  text-[#D4AF37]
                  mb-6
                  "
                >
                  {feature.icon}
                </div>

                <h3
                  className="
                  text-2xl
                  font-semibold
                  mb-4
                  text-white
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                  text-gray-400
                  leading-relaxed
                  "
                >
                  {feature.description}
                </p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}