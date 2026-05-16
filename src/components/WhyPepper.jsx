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
      text-black
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
        {/* IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={pepperField}
            alt="Pepper Plantation"
            className="
            rounded-3xl
            shadow-2xl
            object-cover
            h-[600px]
            w-full
            "
          />
        </motion.div>

        {/* CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p
            className="
            uppercase
            tracking-[4px]
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
            mb-8
            text-[#081C15]
            "
          >
            A High-Value Crop Built for Sustainable Growth.
          </h2>

          <p
            className="
            text-gray-700
            text-lg
            leading-relaxed
            mb-10
            "
          >
            Pepper is one of Sri Lanka’s most
            profitable and globally recognized export
            crops. Colonial Ventures focuses on
            premium pepper cultivation in the fertile
            highlands of the Central Province,
            combining sustainability with long-term
            investment potential.
          </p>

          <div className="space-y-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="
                bg-white
                p-6
                rounded-2xl
                shadow-lg
                border
                border-gray-200
                "
              >
                <h3
                  className="
                  text-xl
                  font-semibold
                  text-[#081C15]
                  mb-2
                  "
                >
                  {item.title}
                </h3>

                <p className="text-gray-600">
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