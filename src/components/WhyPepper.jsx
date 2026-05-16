import { motion } from "framer-motion";

import pepperField from "../assets/images/pepper-field.png";

export default function WhyPepper() {
  const features = [
    {
      title: "Global Export Demand",

      description:
        "Sri Lankan pepper remains one of the world’s most sought-after premium spices with consistent international demand.",
    },

    {
      title: "Sustainable Long-Term Crop",

      description:
        "Pepper cultivation offers long harvest cycles and recurring income opportunities through sustainable agriculture.",
    },

    {
      title: "Premium Sri Lankan Quality",

      description:
        "Central Province pepper is renowned globally for its aroma, strength, and superior export-grade quality.",
    },
  ];

  return (
    <section
      className="
      bg-[#F8F5F0]
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
        gap-20
        items-center
        "
      >
        {/* IMAGE */}

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
            src={pepperField}
            alt="Pepper Plantation"
            className="
            rounded-[40px]
            shadow-2xl
            h-[650px]
            w-full
            object-cover
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
            tracking-[5px]
            text-[#D4AF37]
            mb-4
            "
          >
            Why Pepper
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            leading-tight
            text-[#081C15]
            mb-8
            "
          >
            Sustainable Agriculture Backed by Global Demand
          </h2>

          <p
            className="
            text-lg
            text-gray-600
            leading-relaxed
            mb-12
            "
          >
            Colonial Ventures focuses on
            premium pepper cultivation in
            Sri Lanka’s fertile Central
            Province, combining sustainable
            agriculture with long-term
            investment opportunities.
          </p>

          <div className="space-y-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="
                bg-white

                p-6

                rounded-3xl

                border
                border-gray-200

                shadow-md

                hover:shadow-xl
                hover:-translate-y-1

                transition-all
                duration-500
                "
              >
                <h3
                  className="
                  text-2xl
                  font-semibold
                  text-[#081C15]
                  mb-3
                  "
                >
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}