import { motion } from "framer-motion";

export default function Timeline() {
  const timeline = [
    {
      year: "Step 01",
      title: "Investor Consultation",
      description:
        "Discuss investment opportunities and select a suitable plantation investment plan.",
    },

    {
      year: "Step 02",
      title: "Plantation Allocation",
      description:
        "Investment capital is allocated towards pepper cultivation and estate operations.",
    },

    {
      year: "Step 03",
      title: "Cultivation & Harvest",
      description:
        "Pepper vines are cultivated, maintained, harvested, and processed for export.",
    },

    {
      year: "Step 04",
      title: "Returns Distribution",
      description:
        "Investors receive structured monthly returns generated through plantation revenue.",
    },
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
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}

        <div className="text-center mb-20">
          <p
            className="
            uppercase
            tracking-[4px]
            text-[#D4AF37]
            mb-4
            "
          >
            Investment Journey
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            "
          >
            How the Process Works
          </h2>
        </div>

        {/* TIMELINE */}

        <div className="relative">
          {/* LINE */}

          <div
            className="
            absolute
            left-5
            top-0
            bottom-0
            w-[2px]
            bg-[#D4AF37]
            "
          ></div>

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                className="
                relative
                pl-20
                "
              >
                {/* DOT */}

                <div
                  className="
                  absolute
                  left-0
                  top-2
                  w-10
                  h-10
                  rounded-full
                  bg-[#D4AF37]
                  flex
                  items-center
                  justify-center
                  text-black
                  font-bold
                  "
                >
                  {index + 1}
                </div>

                {/* CONTENT */}

                <p
                  className="
                  text-[#D4AF37]
                  uppercase
                  tracking-[3px]
                  mb-2
                  "
                >
                  {item.year}
                </p>

                <h3
                  className="
                  text-3xl
                  font-bold
                  mb-4
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                  text-gray-300
                  text-lg
                  leading-relaxed
                  "
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}