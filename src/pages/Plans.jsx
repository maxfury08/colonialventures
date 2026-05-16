import InvestmentPlans from "../components/InvestmentPlans";

export default function Plans() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}

      <section
        className="
        h-[50vh]
        flex
        items-center
        justify-center
        text-center
        px-6
        bg-[#081C15]
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
            Investment Opportunities
          </p>

          <h1
            className="
            text-5xl
            md:text-7xl
            font-bold
            mb-6
            "
          >
            Investment Plans
          </h1>

          <p
            className="
            text-gray-300
            text-lg
            max-w-2xl
            mx-auto
            "
          >
            Explore structured plantation
            investment opportunities designed for
            sustainable long-term growth.
          </p>
        </div>
      </section>

      {/* PLANS */}

      <InvestmentPlans />
    </main>
  );
}