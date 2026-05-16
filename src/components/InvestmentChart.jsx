import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    year: "Year 1",
    value: 120000,
  },

  {
    year: "Year 2",
    value: 180000,
  },

  {
    year: "Year 3",
    value: 260000,
  },

  {
    year: "Year 4",
    value: 390000,
  },

  {
    year: "Year 5",
    value: 520000,
  },
];

export default function InvestmentChart() {
  return (
    <div
      className="
      bg-[#081C15]

      rounded-[32px]

      p-8

      shadow-2xl

      border
      border-white/5
      "
    >
      <div className="mb-8">
        <p
          className="
          uppercase
          tracking-[4px]

          text-[#D4AF37]

          text-sm

          mb-3
          "
        >
          Growth Projection
        </p>

        <h3
          className="
          text-4xl

          text-white

          font-bold
          "
        >
          Investment Performance
        </h3>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="gold"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#D4AF37"
                  stopOpacity={0.8}
                />

                <stop
                  offset="100%"
                  stopColor="#D4AF37"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="year"
              stroke="#999"
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#D4AF37"
              fill="url(#gold)"
              strokeWidth={4}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}