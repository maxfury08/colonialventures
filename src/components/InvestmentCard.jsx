import { motion } from "framer-motion";

export default function InvestmentCard({
  plan,
  delay = 0,
}) {
  return (
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
        duration: 0.8,
        delay,
      }}
      className={`
      rounded-3xl
      p-10
      border
      transition-all
      hover:-translate-y-2
      ${
        plan.featured
          ? "bg-[#081C15] border-[#D4AF37]"
          : "bg-black border-white/10"
      }
      `}
    >
      {/* FEATURED */}

      {plan.featured && (
        <div
          className="
          inline-block
          bg-[#D4AF37]
          text-black
          px-4
          py-2
          rounded-full
          text-sm
          font-semibold
          mb-6
          "
        >
          Most Popular
        </div>
      )}

      {/* NAME */}

      <h3
        className="
        text-3xl
        font-bold
        mb-6
        "
      >
        {plan.name}
      </h3>

      {/* INVESTMENT */}

      <div className="mb-8">
        <p className="text-gray-400 mb-2">
          Investment Amount
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

      {/* DETAILS */}

      <div className="space-y-4 mb-10">
        <div className="flex justify-between">
          <span className="text-gray-400">
            Monthly Return
          </span>

          <span>{plan.monthlyReturn}</span>
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
        {plan.features.map(
          (feature, index) => (
            <div
              key={index}
              className="
              flex
              items-center
              gap-3
              "
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
          )
        )}
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
  );
}