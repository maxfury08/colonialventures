import { motion } from "framer-motion";

import InvestmentCard from "./InvestmentCard";

export default function InvestmentPlans() {
  const plans = [
    {
      title: "Starter Plan",

      investment: "LKR 100,000",

      returns:
        "Monthly Returns",

      featured: false,
    },

    {
      title: "Growth Plan",

      investment: "LKR 500,000",

      returns:
        "Higher Yield Potential",

      featured: true,
    },

    {
      title: "Estate Partner",

      investment:
        "LKR 1,000,000+",

      returns:
        "Premium Investor Benefits",

      featured: false,
    },
  ];

  return (
    <section
      className="
      relative

      bg-white

      py-28
      md:py-32

      px-6

      overflow-hidden
      "
    >
      {/* SOFT BACKGROUND GLOW */}

      <div
        className="
        absolute

        top-0
        left-1/2
        -translate-x-1/2

        w-[700px]
        h-[700px]

        bg-[#D4AF37]/5

        blur-[140px]

        rounded-full
        "
      ></div>

      <div
        className="
        relative
        z-10

        max-w-7xl
        mx-auto
        "
      >
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
          className="
          text-center

          mb-24
          "
        >
          {/* SMALL TITLE */}

          <p
            className="
            uppercase

            tracking-[8px]

            text-[#D4AF37]

            text-sm
            md:text-base

            mb-6
            "
          >
            Investment Plans
          </p>

          {/* MAIN TITLE */}

          <h2
            className="
            text-4xl
            md:text-6xl
            lg:text-7xl

            font-bold

            text-[#081C15]

            uppercase

            leading-[1.1]

            max-w-5xl
            mx-auto
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

        {/* PLANS GRID */}

        <div
          className="
          grid
          lg:grid-cols-3

          gap-10
          xl:gap-12

          items-stretch
          "
        >
          {plans.map(
            (plan, index) => (
              <InvestmentCard
                key={index}
                title={
                  plan.title
                }
                investment={
                  plan.investment
                }
                returns={
                  plan.returns
                }
                featured={
                  plan.featured
                }
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}