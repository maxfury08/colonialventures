import { motion } from "framer-motion";

import gallery1 from "../assets/images/gallery-1.png";
import gallery2 from "../assets/images/gallery-2.png";
import gallery3 from "../assets/images/gallery-3.png";
import plantationDrone from "../assets/images/plantation-drone.png";
import pepperField from "../assets/images/pepper-field.png";
import sustainability from "../assets/images/sustainability.png";

export default function PlantationGallery() {
  const images = [
    gallery1,
    gallery2,
    gallery3,
    plantationDrone,
    pepperField,
    sustainability,
  ];

  return (
    <section
      className="
      bg-[#081C15]
      text-white
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
            Plantation Gallery
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            "
          >
            Explore Colonial Ventures
          </h2>
        </motion.div>

        {/* GRID */}

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              className="
              overflow-hidden
              rounded-3xl
              group
              "
            >
              <img
                src={image}
                alt="Plantation"
                className="
                h-[400px]
                w-full
                object-cover
                group-hover:scale-110
                transition-all
                duration-700
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}