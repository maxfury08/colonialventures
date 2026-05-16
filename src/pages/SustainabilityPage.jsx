import { motion } from "framer-motion";

import sustainability from "../assets/images/sustainability.png";

export default function SustainabilityPage() {
  const sustainabilityPoints = [
    {
      title: "Eco-Friendly Cultivation",
      description:
        "We implement environmentally responsible farming practices focused on long-term sustainability.",
    },

    {
      title: "Water Conservation",
      description:
        "Efficient irrigation and rainwater management systems help preserve natural resources.",
    },

    {
      title: "Biodiversity Protection",
      description:
        "Our plantations are managed to support local ecosystems and surrounding biodiversity.",
    },

    {
      title: "Community Development",
      description:
        "Colonial Ventures supports local employment and sustainable economic growth within plantation communities.",
    },
  ];

  return (
    <main className="bg-black text-white">
      {/* HERO */}

      <section
        className="
        relative
        h-[70vh]
        flex
        items-center
        justify-center
        text-center
        overflow-hidden
        "
      >
        <img
          src={sustainability}
          alt="Sustainability"
          className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          "
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-6">
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

          <h1
            className="
            text-5xl
            md:text-7xl
            font-bold
            mb-6
            "
          >
            Sustainable Plantation Growth
          </h1>

          <p
            className="
            text-lg
            md:text-xl
            text-gray-300
            max-w-3xl
            mx-auto
            "
          >
            Colonial Ventures is committed to
            environmentally responsible plantation
            management and sustainable agricultural
            development.
          </p>
        </div>
      </section>

      {/* CONTENT */}

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="
            grid
            md:grid-cols-2
            gap-10
            "
          >
            {sustainabilityPoints.map(
              (point, index) => (
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
                  bg-[#081C15]
                  border
                  border-white/10
                  rounded-3xl
                  p-10
                  "
                >
                  <h2
                    className="
                    text-3xl
                    font-bold
                    text-[#D4AF37]
                    mb-6
                    "
                  >
                    {point.title}
                  </h2>

                  <p
                    className="
                    text-gray-300
                    text-lg
                    leading-relaxed
                    "
                  >
                    {point.description}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}