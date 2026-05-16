import { motion } from "framer-motion";

import sustainability from "../assets/images/sustainability.png";

export default function Sustainability() {
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
            rounded-3xl
            shadow-2xl
            h-[600px]
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
            tracking-[4px]
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
            leading-tight
            mb-8
            "
          >
            Plantation Growth That Protects Nature
          </h2>

          <p
            className="
            text-lg
            text-gray-300
            leading-relaxed
            mb-8
            "
          >
            Colonial Ventures focuses on
            environmentally responsible
            cultivation methods that preserve
            biodiversity, support local
            communities, and create sustainable
            agricultural growth.
          </p>

          <div className="space-y-6">
            <div
              className="
              bg-black
              border
              border-white/10
              rounded-2xl
              p-6
              "
            >
              <h3
                className="
                text-2xl
                font-semibold
                text-[#D4AF37]
                mb-3
                "
              >
                Eco-Friendly Farming
              </h3>

              <p className="text-gray-300">
                Sustainable agricultural practices
                designed for long-term plantation
                health.
              </p>
            </div>

            <div
              className="
              bg-black
              border
              border-white/10
              rounded-2xl
              p-6
              "
            >
              <h3
                className="
                text-2xl
                font-semibold
                text-[#D4AF37]
                mb-3
                "
              >
                Water Conservation
              </h3>

              <p className="text-gray-300">
                Efficient irrigation and water
                management systems that reduce
                environmental impact.
              </p>
            </div>

            <div
              className="
              bg-black
              border
              border-white/10
              rounded-2xl
              p-6
              "
            >
              <h3
                className="
                text-2xl
                font-semibold
                text-[#D4AF37]
                mb-3
                "
              >
                Community Development
              </h3>

              <p className="text-gray-300">
                Supporting local employment and
                sustainable economic growth in
                plantation communities.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}