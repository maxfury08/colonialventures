import { motion } from "framer-motion";

export default function ROIStats() {
  const stats = [
    {
      number: "120+",
      label: "Acres Cultivated",
    },

    {
      number: "18+",
      label: "Export Destinations",
    },

    {
      number: "12",
      label: "Years Experience",
    },

    {
      number: "3",
      label: "Harvest Seasons",
    },
  ];

  return (
    <section
      className="
      bg-[#081C15]
      py-24
      px-6
      text-white
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
            tracking-[5px]
            text-[#D4AF37]
            mb-4
            "
          >
            Plantation Performance
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            "
          >
            Building Long-Term Agricultural Value
          </h2>
        </motion.div>

        {/* STATS */}

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
          "
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
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
                delay: index * 0.2,
              }}
              className="
              bg-black/20

              backdrop-blur-xl

              border
              border-white/10

              rounded-3xl

              p-10

              text-center

              hover:border-[#D4AF37]
              hover:-translate-y-2

              transition-all
              duration-500
              "
            >
              <h3
                className="
                text-5xl
                font-bold
                text-[#D4AF37]
                mb-4
                "
              >
                {stat.number}
              </h3>

              <p
                className="
                text-lg
                text-gray-300
                "
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}