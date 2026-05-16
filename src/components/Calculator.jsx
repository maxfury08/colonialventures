import { useState } from "react";
import { motion } from "framer-motion";

export default function Calculator() {
  const [investment, setInvestment] =
    useState(100000);

  const [years, setYears] = useState(1);

  const monthlyReturnRate = 0.0333;

  const monthlyIncome =
    investment * monthlyReturnRate;

  const totalReturns =
    monthlyIncome * 12 * years;

  const totalValue =
    investment + totalReturns;

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
            tracking-[4px]
            text-[#D4AF37]
            mb-4
            "
          >
            Investment Calculator
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            "
          >
            Estimate Your Plantation Returns
          </h2>
        </motion.div>

        {/* CALCULATOR */}

        <div
          className="
          grid
          lg:grid-cols-2
          gap-16
          items-center
          "
        >
          {/* INPUTS */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="
            bg-[#081C15]
            border
            border-white/10
            rounded-3xl
            p-10
            text-white
            "
          >
            {/* INVESTMENT */}

            <div className="mb-10">
              <label
                className="
                block
                text-lg
                mb-4
                "
              >
                Investment Amount
              </label>

              <input
                type="range"
                min="100000"
                max="5000000"
                step="50000"
                value={investment}
                onChange={(e) =>
                  setInvestment(
                    Number(e.target.value)
                  )
                }
                className="w-full"
              />

              <div
                className="
                mt-4
                text-3xl
                font-bold
                text-[#D4AF37]
                "
              >
                LKR{" "}
                {investment.toLocaleString()}
              </div>
            </div>

            {/* YEARS */}

            <div>
              <label
                className="
                block
                text-lg
                mb-4
                "
              >
                Investment Duration
              </label>

              <div className="flex gap-4">
                {[1, 2, 3].map((year) => (
                  <button
                    key={year}
                    onClick={() =>
                      setYears(year)
                    }
                    className={`
                    px-6
                    py-3
                    rounded-full
                    font-semibold
                    transition-all
                    ${
                      years === year
                        ? "bg-[#D4AF37] text-black"
                        : "bg-black border border-white/10"
                    }
                    `}
                  >
                    {year} Year
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RESULTS */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="
            bg-[#081C15]
            border
            border-white/10
            rounded-3xl
            p-10
            text-white
            "
          >
            <div className="space-y-10">
              <div>
                <p className="text-gray-400 mb-2">
                  Estimated Monthly Income
                </p>

                <h3
                  className="
                  text-5xl
                  font-bold
                  text-[#D4AF37]
                  "
                >
                  LKR{" "}
                  {Math.round(
                    monthlyIncome
                  ).toLocaleString()}
                </h3>
              </div>

              <div>
                <p className="text-gray-400 mb-2">
                  Estimated Total Returns
                </p>

                <h3
                  className="
                  text-4xl
                  font-bold
                  "
                >
                  LKR{" "}
                  {Math.round(
                    totalReturns
                  ).toLocaleString()}
                </h3>
              </div>

              <div>
                <p className="text-gray-400 mb-2">
                  Estimated Final Value
                </p>

                <h3
                  className="
                  text-4xl
                  font-bold
                  "
                >
                  LKR{" "}
                  {Math.round(
                    totalValue
                  ).toLocaleString()}
                </h3>
              </div>

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
                Start Investing
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}