import { motion } from "framer-motion";

export default function InvestorRelations() {
  const reports = [
    {
      title: "Quarterly Plantation Report",
      description:
        "Operational performance, cultivation progress, and harvest updates.",
    },

    {
      title: "Export Market Overview",
      description:
        "Insights into global pepper demand and export market developments.",
    },

    {
      title: "Investor Performance Summary",
      description:
        "Transparent updates regarding investor returns and plantation growth.",
    },
  ];

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
            Investor Relations
          </p>

          <h1
            className="
            text-5xl
            md:text-7xl
            font-bold
            mb-6
            "
          >
            Transparency & Long-Term Value
          </h1>

          <p
            className="
            text-gray-300
            text-lg
            max-w-3xl
            mx-auto
            "
          >
            Colonial Ventures is committed to
            maintaining transparent communication
            and responsible plantation management
            for all investors.
          </p>
        </div>
      </section>

      {/* REPORTS */}

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="
            grid
            md:grid-cols-3
            gap-8
            "
          >
            {reports.map((report, index) => (
              <motion.div
                key={index}
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
                  delay: index * 0.2,
                }}
                className="
                bg-[#081C15]
                border
                border-white/10
                rounded-3xl
                p-10
                "
              >
                <h2
                  className="
                  text-3xl
                  font-bold
                  text-[#D4AF37]
                  mb-6
                  "
                >
                  {report.title}
                </h2>

                <p
                  className="
                  text-gray-300
                  text-lg
                  leading-relaxed
                  mb-8
                  "
                >
                  {report.description}
                </p>

                <button
                  className="
                  bg-[#D4AF37]
                  hover:bg-[#c49c22]
                  text-black
                  px-6
                  py-3
                  rounded-full
                  font-semibold
                  transition-all
                  "
                >
                  View Report
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}