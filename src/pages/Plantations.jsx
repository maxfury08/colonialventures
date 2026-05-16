import { motion } from "framer-motion";

import plantationDrone from "../assets/images/plantation-drone.png";
import gallery1 from "../assets/images/gallery-1.png";
import gallery2 from "../assets/images/gallery-2.png";
import gallery3 from "../assets/images/gallery-3.png";

export default function Plantations() {
  const plantations = [
    {
      title: "Central Province Estate",
      description:
        "Located within Sri Lanka’s fertile highlands, our primary plantation is optimized for premium pepper cultivation with sustainable farming methods.",
      image: gallery1,
    },

    {
      title: "Mountain Pepper Cultivation",
      description:
        "Our estates benefit from ideal elevation, tropical rainfall, and rich soil conditions that enhance pepper quality and yield.",
      image: gallery2,
    },

    {
      title: "Export-Oriented Production",
      description:
        "Pepper harvests are processed and prepared to meet international export standards across multiple global markets.",
      image: gallery3,
    },
  ];

  return (
    <main className="bg-black text-white">
      {/* HERO */}

      <section
        className="
        relative
        h-[70vh]
        flex
        items-center
        justify-center
        text-center
        overflow-hidden
        "
      >
        <img
          src={plantationDrone}
          alt="Plantation"
          className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          "
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-6">
          <p
            className="
            uppercase
            tracking-[4px]
            text-[#D4AF37]
            mb-4
            "
          >
            Our Plantations
          </p>

          <h1
            className="
            text-5xl
            md:text-7xl
            font-bold
            mb-6
            "
          >
            Premium Pepper Estates
          </h1>

          <p
            className="
            text-lg
            md:text-xl
            text-gray-300
            max-w-3xl
            mx-auto
            "
          >
            Discover sustainable pepper cultivation
            estates located in the fertile mountain
            regions of Sri Lanka’s Central Province.
          </p>
        </div>
      </section>

      {/* PLANTATIONS */}

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {plantations.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className={`
              grid
              lg:grid-cols-2
              gap-16
              items-center
              ${
                index % 2 === 1
                  ? "lg:grid-flow-dense"
                  : ""
              }
              `}
            >
              {/* IMAGE */}

              <div
                className={`
                ${
                  index % 2 === 1
                    ? "lg:col-start-2"
                    : ""
                }
                `}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                  rounded-3xl
                  shadow-2xl
                  h-[500px]
                  w-full
                  object-cover
                  "
                />
              </div>

              {/* CONTENT */}

              <div>
                <p
                  className="
                  uppercase
                  tracking-[4px]
                  text-[#D4AF37]
                  mb-4
                  "
                >
                  Estate {index + 1}
                </p>

                <h2
                  className="
                  text-4xl
                  font-bold
                  mb-6
                  "
                >
                  {item.title}
                </h2>

                <p
                  className="
                  text-gray-300
                  text-lg
                  leading-relaxed
                  "
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}