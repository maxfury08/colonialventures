import { useState } from "react";

import { ChevronDown } from "lucide-react";

import faq from "../data/faq";

export default function FAQ() {
  const [activeIndex, setActiveIndex] =
    useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(
      activeIndex === index ? null : index
    );
  };

  return (
    <section
      className="
      bg-[#F8F5F0]
      text-black
      py-24
      px-6
      "
    >
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}

        <div className="text-center mb-20">
          <p
            className="
            uppercase
            tracking-[4px]
            text-[#D4AF37]
            mb-4
            "
          >
            Frequently Asked Questions
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-[#081C15]
            "
          >
            Investor FAQ
          </h2>
        </div>

        {/* FAQS */}

        <div className="space-y-6">
          {faq.map((item, index) => (
            <div
              key={item.id}
              className="
              bg-white
              border
              border-gray-200
              rounded-2xl
              overflow-hidden
              shadow-lg
              "
            >
              <button
                onClick={() =>
                  toggleFAQ(index)
                }
                className="
                w-full
                flex
                items-center
                justify-between
                px-8
                py-6
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
                  text-gray-700
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