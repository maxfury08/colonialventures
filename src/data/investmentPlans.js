const investmentPlans = [
  {
    id: 1,

    name: "Starter Plan",

    investment: "LKR 100,000",

    monthlyReturn: "3.33%",

    duration: "1 Year",

    featured: false,

    features: [
      "Monthly Returns",
      "Managed Plantation Operations",
      "Investor Support",
      "Capital Returned at Maturity",
    ],

    description:
      "An entry-level plantation investment plan designed for new investors seeking sustainable monthly returns.",
  },

  {
    id: 2,

    name: "Professional Plan",

    investment: "LKR 500,000",

    monthlyReturn: "3.33%",

    duration: "2 Years",

    featured: true,

    features: [
      "Priority Investor Benefits",
      "Monthly Returns",
      "Plantation Visit Access",
      "Capital Returned at Maturity",
    ],

    description:
      "A premium investment package offering enhanced investor benefits and long-term plantation growth opportunities.",
  },

  {
    id: 3,

    name: "Estate Partner",

    investment: "LKR 1,000,000+",

    monthlyReturn: "Custom Returns",

    duration: "3 Years",

    featured: false,

    features: [
      "Premium Partnership Access",
      "Custom Investment Structuring",
      "Private Consultations",
      "Long-Term Estate Growth",
    ],

    description:
      "A high-value partnership investment tailored for investors seeking premium estate-level opportunities.",
  },
];

export default investmentPlans;