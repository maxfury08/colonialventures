export default function MetricsStrip() {
  const stats = [
    {
      value: "120+",
      label: "Acres",
    },

    {
      value: "18",
      label: "Export Markets",
    },

    {
      value: "12",
      label: "Years Experience",
    },

    {
      value: "98%",
      label: "Investor Retention",
    },
  ];

  return (
    <section
      className="
      relative

      z-30

      -mt-20

      px-6
      "
    >
      <div
        className="
        max-w-6xl
        mx-auto

        bg-white/70
        backdrop-blur-2xl

        border
        border-white/20

        rounded-[40px]

        shadow-[0_20px_80px_rgba(0,0,0,0.15)]

        grid
        md:grid-cols-4

        overflow-hidden
        "
      >
        {stats.map(
          (
            item,
            index
          ) => (
            <div
              key={index}
              className="
              p-10

              text-center

              border-r
              border-black/5

              last:border-r-0
              "
            >
              <h3
                className="
                text-5xl

                font-bold

                text-[#D4AF37]

                mb-3
                "
              >
                {item.value}
              </h3>

              <p
                className="
                text-[#081C15]

                font-medium
                "
              >
                {item.label}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}