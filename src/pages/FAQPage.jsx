import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      question:
        "How do plantation investments work?",
      answer:
        "Investors contribute towards plantation cultivation and receive structured returns generated through pepper harvest and export operations.",
    },

    {
      question:
        "What is the minimum investment amount?",
      answer:
        "Investment plans begin from LKR 100,000 with multiple investment tiers available.",
    },

    {
      question:
        "Are monthly returns guaranteed?",
      answer:
        "Returns are structured based on plantation performance and market conditions. Full details are provided during consultation.",
    },

    {
      question:
        "Can investors visit the plantations?",
      answer:
        "Yes. Plantation visits can be arranged for investors upon prior appointment.",
    },

    {
      question:
        "How long are the investment durations?",
      answer:
        "Investment plans are available across 1-year, 2-year, and 3-year durations.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(
      activeIndex === index ? null : index
    );
  };

  return (
    <main className="bg-black text-white">
      {/* HERO */}

      <section
        className="
        bg-[#081C15]
        h-[50vh]
        flex
        items-center
        justify-center
        text-center
        px-6
        "
      >
        <div>
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

          <h1
            className="
            text-5xl
            md:text-7xl
            font-bold
            mb-6
            "
          >
            Investor FAQ
          </h1>

          <p
            className="
            text-lg
            text-gray-300
            max-w-3xl
            mx-auto
            "
          >
            Find answers to commonly asked
            questions regarding plantation
            investments and Colonial Ventures.
          </p>
        </div>
      </section>

      {/* FAQS */}

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
              bg-[#081C15]
              border
              border-white/10
              rounded-2xl
              overflow-hidden
              "
            >
              <button
                onClick={() => toggleFAQ(index)}
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
                  "
                >
                  {faq.question}
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
                  text-gray-300
                  leading-relaxed
                  "
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}