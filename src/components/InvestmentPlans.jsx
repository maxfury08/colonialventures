import { motion } from "framer-motion";

import InvestmentCard from "./InvestmentCard";

export default function InvestmentPlans() {
  const plans = [
    {
      title: "Starter Plan",

      investment: "LKR 100,000",

      returns: "Monthly Returns",

      featured: false,
    },

    {
      title: "Growth Plan",

      investment: "LKR 500,000",

      returns: "Higher Yield Potential",

      featured: true,
    },

    {
      title: "Estate Partner",

      investment: "LKR 1,000,000+",

      returns: "Premium Investor Benefits",

      featured: false,
    },
  ];

  return (
    <section
      className="
      bg-white

      py-28
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
          className="text-center mb-24"
        >
          <p
            className="
            uppercase

            tracking-[8px]

            text-[#D4AF37]

            text-lg

            mb-6
            "
          >
            Investment Plans
          </p>

          <h2
            className="
            text-5xl
            md:text-7xl

            font-bold

            text-[#081C15]

            uppercase
            "
            style={{
              fontFamily:
                "Georgia, serif",
            }}
          >
            Flexible Investment
            Opportunities
          </h2>
        </motion.div>

        {/* PLANS */}

        <div
          className="
          grid
          lg:grid-cols-3

          gap-12

          items-stretch
          "
        >
          {plans.map((plan, index) => (
            <InvestmentCard
              key={index}
              title={plan.title}
              investment={
                plan.investment
              }
              returns={plan.returns}
              featured={plan.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}