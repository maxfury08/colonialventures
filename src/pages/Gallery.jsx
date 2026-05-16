import { motion } from "framer-motion";

import gallery1 from "../assets/images/gallery-1.png";
import gallery2 from "../assets/images/gallery-2.png";
import gallery3 from "../assets/images/gallery-3.png";
import plantationDrone from "../assets/images/plantation-drone.png";
import pepperField from "../assets/images/pepper-field.png";
import sustainability from "../assets/images/sustainability.png";

export default function Gallery() {
  const images = [
    gallery1,
    gallery2,
    gallery3,
    plantationDrone,
    pepperField,
    sustainability,
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
            Plantation Gallery
          </p>

          <h1
            className="
            text-5xl
            md:text-7xl
            font-bold
            mb-6
            "
          >
            Discover Colonial Ventures
          </h1>

          <p
            className="
            text-gray-300
            text-lg
            max-w-3xl
            mx-auto
            "
          >
            Explore our premium pepper
            plantations, sustainable farming
            operations, and breathtaking estate
            landscapes.
          </p>
        </div>
      </section>

      {/* GALLERY */}

      <section className="py-24 px-6">
        <div
          className="
          max-w-7xl
          mx-auto
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
              "
            >
              <img
                src={image}
                alt="Gallery"
                className="
                h-[400px]
                w-full
                object-cover
                hover:scale-110
                transition-all
                duration-700
                "
              />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}