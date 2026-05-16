import { motion } from "framer-motion";

import gallery from "../data/gallery";

export default function PlantationGallery() {
  return (
    <section
      className="
      bg-white
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
            tracking-[5px]
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
            text-[#081C15]
            "
          >
            Explore Our Pepper Estates
          </h2>
        </motion.div>

        {/* GALLERY */}

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >
          {gallery.map((image, index) => (
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
                duration: 0.8,
                delay: index * 0.1,
              }}
              className="
              overflow-hidden
              rounded-[35px]
              shadow-xl
              "
            >
              <img
                src={image.image}
                alt={image.title}
                className="
                w-full
                h-[350px]
                object-cover

                hover:scale-110

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