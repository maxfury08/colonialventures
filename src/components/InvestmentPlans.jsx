import { motion } from "framer-motion";

export default function InvestmentPlans() {
  const plans = [
    {
      name: "Starter Plan",
      investment: "LKR 100,000",
      returnRate: "3.33% Monthly",
      duration: "1 Year",
      features: [
        "Monthly Returns",
        "Managed Plantation Operations",
        "Investor Support",
        "Capital Returned at Maturity",
      ],
    },

    {
      name: "Professional Plan",
      investment: "LKR 500,000",
      returnRate: "3.33% Monthly",
      duration: "2 Years",
      featured: true,
      features: [
        "Priority Investor Benefits",
        "Monthly Returns",
        "Plantation Visit Access",
        "Capital Returned at Maturity",
      ],
    },

    {
      name: "Estate Partner",
      investment: "LKR 1,000,000+",
      returnRate: "Custom Returns",
      duration: "3 Years",
      features: [
        "Premium Partnership Access",
        "Custom Investment Structuring",
        "Private Consultations",
        "Long-Term Estate Growth",
      ],
    },
  ];

  return (
    <section
      className="
      bg-[#F8F5F0]
      text-[#0B1D16]
      py-24
      px-6
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p
            className="
            uppercase
            tracking-[4px]
            text-[#D4AF37]
            mb-4
            "
          >
            Investment Opportunities
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            "
          >
            Plantation Investment Plans
          </h2>
        </motion.div>

        {/* PLANS */}

        <div
          className="
          grid
          text-gray-400
          lg:grid-cols-3
          gap-8
          "
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              className={`
              rounded-3xl
              p-10
              border
              transition-all
              ${
                plan.featured
                  ? "bg-[#081C15] border-[#D4AF37] scale-105"
                  : "bg-[#111] border-white/10"
              }
              `}
            >
              {plan.featured && (
                <div
                  className="
                  bg-[#D4AF37]
                  text-black
                  text-sm
                  font-semibold
                  px-4
                  py-2
                  rounded-full
                  inline-block
                  mb-6
                  "
                >
                  Most Popular
                </div>
              )}

              <h3
                className="
                text-3xl
                font-bold
                mb-6
                "
              >
                {plan.name}
              </h3>

              <div className="mb-8">
                <p className="text-gray-400 mb-2">
                  Investment
                </p>

                <h4
                  className="
                  text-4xl
                  font-bold
                  text-[#D4AF37]
                  "
                >
                  {plan.investment}
                </h4>
              </div>

              <div className="space-y-4 mb-10">
                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Monthly Return
                  </span>

                  <span>{plan.returnRate}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Duration
                  </span>

                  <span>{plan.duration}</span>
                </div>
              </div>

              {/* FEATURES */}

              <div className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="
                      w-2
                      h-2
                      rounded-full
                      bg-[#D4AF37]
                      "
                    ></div>

                    <p className="text-gray-300">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* BUTTON */}

              <button
                className="
                w-full
                bg-[#D4AF37]
                hover:bg-[#c49c22]
                text-black
                py-4
                rounded-full
                font-semibold
                transition-all
                "
              >
                Invest Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}