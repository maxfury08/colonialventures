import plantationDrone from "../assets/images/plantation-drone.png";

export default function BlogDetails() {
  return (
    <main className="bg-black text-white">
      {/* HERO IMAGE */}

      <section className="relative h-[70vh]">
        <img
          src={plantationDrone}
          alt="Blog"
          className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          "
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div
          className="
          relative
          z-10
          h-full
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
              Plantation Insights
            </p>

            <h1
              className="
              text-5xl
              md:text-7xl
              font-bold
              max-w-5xl
              "
            >
              Why Sri Lankan Pepper Has Strong
              Global Demand
            </h1>
          </div>
        </div>
      </section>

      {/* CONTENT */}

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className="
            flex
            items-center
            gap-6
            text-gray-400
            mb-10
            "
          >
            <span>May 2026</span>

            <span>•</span>

            <span>Exports</span>
          </div>

          <div
            className="
            space-y-8
            text-lg
            leading-relaxed
            text-gray-300
            "
          >
            <p>
              Sri Lankan pepper is globally
              recognized for its premium aroma,
              strong flavor, and export quality.
              With increasing international demand
              for high-grade spices, pepper remains
              one of the country’s most valuable
              agricultural exports.
            </p>

            <p>
              The fertile highlands of Sri Lanka’s
              Central Province provide ideal
              conditions for sustainable pepper
              cultivation. Factors such as
              elevation, tropical rainfall, and
              nutrient-rich soil contribute to the
              exceptional quality of locally grown
              pepper.
            </p>

            <p>
              As global markets continue to expand,
              sustainable plantation investment
              opportunities are becoming
              increasingly attractive to investors
              seeking long-term agricultural growth
              backed by real assets.
            </p>

            <blockquote
              className="
              border-l-4
              border-[#D4AF37]
              pl-6
              italic
              text-2xl
              text-white
              "
            >
              “Sri Lankan pepper continues to
              maintain its reputation as one of the
              world’s finest premium spice exports.”
            </blockquote>

            <p>
              Colonial Ventures focuses on
              environmentally responsible
              cultivation practices while supporting
              sustainable plantation development
              that benefits both investors and local
              communities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}