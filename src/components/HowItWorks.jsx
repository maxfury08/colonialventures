import { motion } from "framer-motion";

import {
  FaSeedling,
  FaChartLine,
  FaGlobe,
} from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaSeedling size={42} />,

      title: "Invest in Plantation Growth",

      description:
        "Choose a plantation investment plan tailored to your long-term financial goals.",
    },

    {
      icon: <FaChartLine size={42} />,

      title: "Cultivation & Harvesting",

      description:
        "Our agricultural experts manage cultivation, harvesting, and sustainable estate operations.",
    },

    {
      icon: <FaGlobe size={42} />,

      title: "Export & Investor Returns",

      description:
        "Pepper exports generate recurring returns through international market demand.",
    },
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
          className="text-center mb-24"
        >
          <p
            className="
            uppercase
            tracking-[5px]
            text-[#D4AF37]
            mb-4
            "
          >
            How It Works
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            "
          >
            A Simple Investment Process
          </h2>
        </motion.div>

        {/* STEPS */}

        <div
          className="
          grid
          md:grid-cols-3
          gap-10
          "
        >
          {steps.map((step, index) => (
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
              relative

              bg-black/20

              border
              border-white/10

              rounded-[35px]

              p-10

              hover:border-[#D4AF37]
              hover:-translate-y-2

              transition-all
              duration-500
              "
            >
              {/* STEP NUMBER */}

              <div
                className="
                absolute
                top-6
                right-6

                text-6xl
                font-bold

                text-white/5
                "
              >
                0{index + 1}
              </div>

              {/* ICON */}

              <div
                className="
                text-[#D4AF37]
                mb-8
                "
              >
                {step.icon}
              </div>

              {/* TITLE */}

              <h3
                className="
                text-2xl
                font-semibold
                mb-5
                "
              >
                {step.title}
              </h3>

              {/* DESCRIPTION */}

              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}