import { useState } from "react";

import { motion } from "framer-motion";

import plantation from "../assets/images/plantation-drone.png";

export default function Calculator() {
  const [investment, setInvestment] =
    useState(100000);

  const [years, setYears] =
    useState(1);

  const monthlyReturnRate =
    0.0333;

  const monthlyIncome =
    investment *
    monthlyReturnRate;

  const totalReturns =
    monthlyIncome *
    12 *
    years;

  const totalValue =
    investment +
    totalReturns;

  return (
    <section
      className="
      relative
      bg-[#F8F5F0]
      py-28
      md:py-32
      px-6
      overflow-hidden
      "
    >
      {/* GOLD GLOW */}

      <div
        className="
        absolute
        top-0
        right-0
        w-[700px]
        h-[700px]
        bg-[#D4AF37]/10
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
            Investment Calculator
          </p>

          <h2
            className="
            text-4xl
            md:text-6xl
            lg:text-7xl
            font-bold
            text-[#081C15]
            leading-[1.1]
            max-w-5xl
            mx-auto
            "
            style={{
              fontFamily:
                "Georgia, serif",
            }}
          >
            Estimate Your
            Plantation Returns
          </h2>
        </motion.div>

        {/* GRID */}

        <div
          className="
          grid
          lg:grid-cols-2
          gap-12
          xl:gap-20
          items-stretch
          "
        >
          {/* LEFT SIDE */}

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
            relative
            rounded-[40px]
            overflow-hidden
            min-h-[680px]
            "
          >
            <img
              src={plantation}
              alt="Plantation"
              className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              "
            />

            <div
              className="
              absolute
              inset-0
              bg-black/55
              "
            ></div>

            <div
              className="
              relative
              z-10
              p-10
              md:p-12
              h-full
              flex
              flex-col
              justify-between
              "
            >
              <div>
                <p
                  className="
                  uppercase
                  tracking-[5px]
                  text-[#D4AF37]
                  mb-6
                  "
                >
                  Investment Details
                </p>

                <h3
                  className="
                  text-4xl
                  md:text-5xl
                  font-bold
                  text-white
                  leading-tight
                  mb-8
                  "
                  style={{
                    fontFamily:
                      "Georgia, serif",
                  }}
                >
                  Calculate Your
                  Long-Term
                  Plantation Growth
                </h3>

                <p
                  className="
                  text-gray-300
                  text-lg
                  leading-relaxed
                  "
                >
                  Adjust your
                  investment amount
                  and duration to
                  estimate projected
                  plantation returns
                  backed by sustainable
                  pepper cultivation.
                </p>
              </div>

              {/* INPUTS */}

              <div className="mt-12">
                {/* INVESTMENT */}

                <div className="mb-10">
                  <div
                    className="
                    flex
                    justify-between
                    mb-5
                    "
                  >
                    <span className="text-white text-lg">
                      Investment
                    </span>

                    <span className="text-[#D4AF37] font-bold text-xl">
                      LKR{" "}
                      {investment.toLocaleString()}
                    </span>
                  </div>

                  <input
                    type="range"
                    min="100000"
                    max="5000000"
                    step="50000"
                    value={
                      investment
                    }
                    onChange={(e) =>
                      setInvestment(
                        Number(
                          e.target
                            .value
                        )
                      )
                    }
                    className="
                    w-full
                    accent-[#D4AF37]
                    "
                  />
                </div>

                {/* YEARS */}

                <div>
                  <p
                    className="
                    text-white
                    text-lg
                    mb-5
                    "
                  >
                    Investment
                    Duration
                  </p>

                  <div className="flex gap-4">
                    {[1, 2, 3].map(
                      (year) => (
                        <button
                          key={year}
                          onClick={() =>
                            setYears(
                              year
                            )
                          }
                          className={`
                          px-6
                          py-3
                          rounded-full
                          font-semibold
                          transition-all
                          ${
                            years ===
                            year
                              ? `
                              bg-[#D4AF37]
                              text-black
                              `
                              : `
                              bg-white/10
                              text-white
                              border
                              border-white/10
                              `
                          }
                          `}
                        >
                          {year} Year
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}

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
            rounded-[40px]
            p-8
            md:p-10
            text-white
            shadow-2xl
            h-full
            flex
            flex-col
            justify-between
            bg-gradient-to-br
            from-[#081C15]
            to-[#02100b]
            
            "
          >
            <div>
              <p
                className="
                uppercase
                tracking-[5px]
                text-[#D4AF37]
                mb-6
                "
              >
                Estimated Returns
              </p>

              <h3
                className="
                text-3xl
                md:text-[52px]
                font-bold
                leading-[1.05]
                mb-8
                "
                style={{
                  fontFamily:
                    "Georgia, serif",
                }}
              >
                Projected Investment
                Performance
              </h3>

              {/* RESULT CARDS */}

              <div className="space-y-4">
                {/* MONTHLY */}

                <div
                  className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-[28px]
                  p-5
                  "
                >
                  <p className="text-gray-400 text-sm mb-2">
                    Estimated Monthly
                    Income
                  </p>

                  <h4
                    className="
                    text-4xl
                    md:text-5xl
                    font-bold
                    text-[#D4AF37]
                    "
                  >
                    LKR{" "}
                    {Math.round(
                      monthlyIncome
                    ).toLocaleString()}
                  </h4>
                </div>

                {/* TOTAL */}

                <div
                  className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-[28px]
                  p-5
                  "
                >
                  <p className="text-gray-400 text-sm mb-2">
                    Estimated Total
                    Returns
                  </p>

                  <h4
                    className="
                    text-3xl
                    md:text-4xl
                    font-bold
                    "
                  >
                    LKR{" "}
                    {Math.round(
                      totalReturns
                    ).toLocaleString()}
                  </h4>
                </div>

                {/* FINAL */}

                <div
                  className="
                  bg-[#D4AF37]
                  rounded-[28px]
                  p-5
                  text-black
                  "
                >
                  <p className="text-sm mb-2 opacity-80">
                    Estimated Final
                    Value
                  </p>

                  <h4
                    className="
                    text-4xl
                    md:text-5xl
                    font-bold
                    "
                  >
                    LKR{" "}
                    {Math.round(
                      totalValue
                    ).toLocaleString()}
                  </h4>
                </div>
              </div>
            </div>

            {/* BUTTON */}

            <button
              className="
              w-full
              mt-8
              bg-white
              hover:bg-[#D4AF37]
              text-black
              py-4
              rounded-full
              text-lg
              font-semibold
              transition-all
              duration-300
              "
            >
              Start Investing
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}