import { motion } from "framer-motion";

import sustainability from "../assets/images/sustainability.png";

export default function Sustainability() {
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
            src={sustainability}
            alt="Sustainability"
            className="
            rounded-[40px]
            shadow-2xl
            w-full
            h-[650px]
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
            Sustainability
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-[#081C15]
            leading-tight
            mb-8
            "
          >
            Responsible Cultivation for Future Generations
          </h2>

          <p
            className="
            text-lg
            text-gray-600
            leading-relaxed
            mb-10
            "
          >
            Colonial Ventures is committed
            to environmentally responsible
            agricultural practices that
            protect Sri Lanka’s natural
            ecosystems while supporting
            sustainable economic growth.
          </p>

          <div className="space-y-6">
            {[
              "Eco-friendly farming practices",
              "Water conservation systems",
              "Sustainable land management",
              "Support for local communities",
            ].map((item, index) => (
              <div
                key={index}
                className="
                bg-white

                p-5

                rounded-2xl

                border
                border-gray-200

                shadow-md
                "
              >
                <p
                  className="
                  text-lg
                  font-medium
                  text-[#081C15]
                  "
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}