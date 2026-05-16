import { motion } from "framer-motion";

import testimonials from "../data/testimonials";

export default function Testimonials() {
  return (
    <section
      className="
      bg-[#F8F5F0]
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
          className="text-center mb-20"
        >
          <p
            className="
            uppercase
            tracking-[5px]
            text-[#D4AF37]
            mb-4
            "
          >
            Investor Testimonials
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-[#081C15]
            "
          >
            Trusted by Plantation Investors
          </h2>
        </motion.div>

        {/* TESTIMONIALS */}

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >
          {testimonials.map(
            (testimonial, index) => (
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
                bg-white

                p-10

                rounded-[35px]

                shadow-xl

                border
                border-gray-200
                "
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="
                  w-20
                  h-20

                  rounded-full

                  object-cover

                  mb-6
                  "
                />

                <p
                  className="
                  text-gray-600
                  leading-relaxed
                  mb-8
                  "
                >
                  “{testimonial.review}”
                </p>

                <h3
                  className="
                  text-2xl
                  font-semibold
                  text-[#081C15]
                  "
                >
                  {testimonial.name}
                </h3>

                <p className="text-gray-500">
                  {testimonial.role}
                </p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}