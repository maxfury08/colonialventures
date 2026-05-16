import { motion } from "framer-motion";

import plantationDrone from "../assets/images/plantation-drone.png";
import pepperField from "../assets/images/pepper-field.png";
import sustainability from "../assets/images/sustainability.png";

export default function Blog() {
  const blogs = [
    {
      title:
        "Why Sri Lankan Pepper Has Strong Global Demand",
      image: pepperField,
      category: "Exports",
      date: "May 2026",
      excerpt:
        "Discover why Sri Lankan pepper continues to remain one of the world’s most valuable spice exports.",
    },

    {
      title:
        "Sustainable Plantation Investments in Sri Lanka",
      image: sustainability,
      category: "Sustainability",
      date: "April 2026",
      excerpt:
        "Learn how sustainable plantation management creates long-term value for both investors and local communities.",
    },

    {
      title:
        "The Future of Premium Pepper Cultivation",
      image: plantationDrone,
      category: "Plantations",
      date: "March 2026",
      excerpt:
        "Explore the future of Sri Lanka’s pepper industry and the growing global opportunities in spice exports.",
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
            Plantation Insights
          </p>

          <h1
            className="
            text-5xl
            md:text-7xl
            font-bold
            mb-6
            "
          >
            News & Articles
          </h1>

          <p
            className="
            text-lg
            text-gray-300
            max-w-3xl
            mx-auto
            "
          >
            Explore the latest updates, insights,
            and developments in Sri Lankan pepper
            cultivation and plantation investments.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}

      <section className="py-24 px-6">
        <div
          className="
          max-w-7xl
          mx-auto
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-10
          "
        >
          {blogs.map((blog, index) => (
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
              rounded-3xl
              overflow-hidden
              border
              border-white/10
              "
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="
                h-[280px]
                w-full
                object-cover
                "
              />

              <div className="p-8">
                <div
                  className="
                  flex
                  justify-between
                  items-center
                  mb-4
                  text-sm
                  "
                >
                  <span className="text-[#D4AF37]">
                    {blog.category}
                  </span>

                  <span className="text-gray-400">
                    {blog.date}
                  </span>
                </div>

                <h2
                  className="
                  text-2xl
                  font-bold
                  mb-4
                  leading-snug
                  "
                >
                  {blog.title}
                </h2>

                <p
                  className="
                  text-gray-300
                  leading-relaxed
                  mb-6
                  "
                >
                  {blog.excerpt}
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
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}