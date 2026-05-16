import { useState } from "react";

import { motion } from "framer-motion";

import { ChevronDown } from "lucide-react";

import faq from "../data/faq";

export default function FAQ() {
  const [activeIndex, setActiveIndex] =
    useState(null);

  return (
    <section
      className="
      bg-white
      py-24
      px-6
      "
    >
      <div className="max-w-4xl mx-auto">
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
            FAQ
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-[#081C15]
            "
          >
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* FAQ ITEMS */}

        <div className="space-y-6">
          {faq.map((item, index) => (
            <div
              key={index}
              className="
              bg-[#F8F5F0]

              rounded-[30px]

              border
              border-gray-200

              overflow-hidden
              "
            >
              <button
                onClick={() =>
                  setActiveIndex(
                    activeIndex === index
                      ? null
                      : index
                  )
                }
                className="
                w-full

                flex
                justify-between
                items-center

                p-8

                text-left
                "
              >
                <span
                  className="
                  text-xl
                  font-semibold
                  text-[#081C15]
                  "
                >
                  {item.question}
                </span>

                <ChevronDown
                  className={`
                  transition-transform
                  ${
                    activeIndex === index
                      ? "rotate-180"
                      : ""
                  }
                  `}
                />
              </button>

              {activeIndex === index && (
                <div
                  className="
                  px-8
                  pb-8

                  text-gray-600
                  leading-relaxed
                  "
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}