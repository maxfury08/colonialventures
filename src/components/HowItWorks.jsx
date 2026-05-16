import { motion } from "framer-motion";
import {
  FaHandHoldingUsd,
  FaSeedling,
  FaShippingFast,
  FaMoneyCheckAlt,
} from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaHandHoldingUsd size={40} />,
      title: "Choose Your Investment",
      description:
        "Select an investment plan that aligns with your financial goals and preferred investment duration.",
    },

    {
      icon: <FaSeedling size={40} />,
      title: "Plantation Cultivation",
      description:
        "Our experienced plantation team manages cultivation, maintenance, and sustainable farming operations.",
    },

    {
      icon: <FaShippingFast size={40} />,
      title: "Harvest & Export",
      description:
        "Premium pepper harvests are processed and exported to international markets.",
    },

    {
      icon: <FaMoneyCheckAlt size={40} />,
      title: "Receive Monthly Returns",
      description:
        "Investors receive structured monthly returns generated through plantation harvest revenue.",
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
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
            Investment Process
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            "
          >
            How Colonial Ventures Works
          </h2>
        </motion.div>

        {/* STEPS */}

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-10
          "
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              className="
              relative
              bg-black
              border
              border-white/10
              rounded-3xl
              p-8
              text-center
              "
            >
              {/* STEP NUMBER */}

              <div
                className="
                absolute
                -top-5
                left-1/2
                -translate-x-1/2
                bg-[#D4AF37]
                text-black
                w-10
                h-10
                rounded-full
                flex
                items-center
                justify-center
                font-bold
                "
              >
                {index + 1}
              </div>

              <div
                className="
                text-[#D4AF37]
                flex
                justify-center
                mb-6
                mt-4
                "
              >
                {step.icon}
              </div>

              <h3
                className="
                text-2xl
                font-semibold
                mb-4
                "
              >
                {step.title}
              </h3>

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