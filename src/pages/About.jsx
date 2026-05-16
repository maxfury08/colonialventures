import { motion } from "framer-motion";

import founder from "../assets/images/founder.png";
import plantationDrone from "../assets/images/plantation-drone.png";

export default function About() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}

      <section
        className="
        relative
        h-[60vh]
        flex
        items-center
        justify-center
        text-center
        px-6
        "
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <img
          src={plantationDrone}
          alt="Plantation"
          className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          "
        />

        <div className="relative z-10">
          <p
            className="
            uppercase
            tracking-[4px]
            text-[#D4AF37]
            mb-4
            "
          >
            About Colonial Ventures
          </p>

          <h1
            className="
            text-5xl
            md:text-7xl
            font-bold
            "
          >
            Rooted in Heritage.
            <br />
            Built for the Future.
          </h1>
        </div>
      </section>

      {/* STORY */}

      <section className="py-24 px-6">
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
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={founder}
              alt="Founder"
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
            initial={{ opacity: 0, x: 50 }}
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
              Our Story
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
              Premium Sri Lankan Pepper Plantation Investments
            </h2>

            <p
              className="
              text-gray-300
              text-lg
              leading-relaxed
              mb-6
              "
            >
              Colonial Ventures was established
              with a vision to create sustainable
              agricultural investment opportunities
              through premium pepper cultivation in
              Sri Lanka’s Central Province.
            </p>

            <p
              className="
              text-gray-300
              text-lg
              leading-relaxed
              mb-6
              "
            >
              By combining modern plantation
              management with Sri Lanka’s rich
              agricultural heritage, we aim to
              deliver long-term value for both
              investors and local communities.
            </p>

            <p
              className="
              text-gray-300
              text-lg
              leading-relaxed
              "
            >
              Our plantations are carefully
              cultivated using sustainable farming
              methods focused on quality, export
              excellence, and environmental
              responsibility.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}