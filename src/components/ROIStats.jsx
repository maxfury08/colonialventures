import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function ROIStats() {
  const stats = [
    {
      number: 3.33,
      suffix: "%",
      title: "Monthly Returns",
    },

    {
      number: 500,
      suffix: "+",
      title: "Acres Under Cultivation",
    },

    {
      number: 100,
      suffix: "+",
      title: "Global Export Partners",
    },

    {
      number: 10,
      suffix: "+",
      title: "Years Plantation Experience",
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
            tracking-[4px]
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
            Sustainable Growth Backed by Real Assets
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
              bg-black
              border
              border-white/10
              rounded-3xl
              p-10
              text-center
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
                <CountUp
                  end={stat.number}
                  duration={3}
                  decimals={
                    stat.number % 1 !== 0
                      ? 2
                      : 0
                  }
                />

                {stat.suffix}
              </h3>

              <p
                className="
                text-gray-300
                text-lg
                "
              >
                {stat.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}