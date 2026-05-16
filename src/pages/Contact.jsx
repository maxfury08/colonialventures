import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}

      <section
        className="
        h-[50vh]
        bg-[#081C15]
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
            Get In Touch
          </p>

          <h1
            className="
            text-5xl
            md:text-7xl
            font-bold
            mb-6
            "
          >
            Contact Colonial Ventures
          </h1>

          <p
            className="
            text-gray-300
            text-lg
            max-w-2xl
            mx-auto
            "
          >
            Speak with our investment team to
            learn more about premium Sri Lankan
            pepper plantation opportunities.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}

      <section className="py-24 px-6">
        <div
          className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-16
          "
        >
          {/* FORM */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="
            bg-[#081C15]
            p-10
            rounded-3xl
            border
            border-white/10
            "
          >
            <h2
              className="
              text-3xl
              font-bold
              mb-8
              "
            >
              Send an Inquiry
            </h2>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="
                w-full
                bg-black
                border
                border-white/10
                px-5
                py-4
                rounded-xl
                outline-none
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                w-full
                bg-black
                border
                border-white/10
                px-5
                py-4
                rounded-xl
                outline-none
                "
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="
                w-full
                bg-black
                border
                border-white/10
                px-5
                py-4
                rounded-xl
                outline-none
                "
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="
                w-full
                bg-black
                border
                border-white/10
                px-5
                py-4
                rounded-xl
                outline-none
                "
              ></textarea>

              <button
                className="
                bg-[#D4AF37]
                hover:bg-[#c49c22]
                text-black
                px-8
                py-4
                rounded-full
                font-semibold
                transition-all
                "
              >
                Submit Inquiry
              </button>
            </form>
          </motion.div>

          {/* INFO */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2
              className="
              text-4xl
              font-bold
              mb-10
              "
            >
              Let’s Discuss Your Investment
            </h2>

            <div className="space-y-8">
              <div>
                <h3
                  className="
                  text-xl
                  font-semibold
                  text-[#D4AF37]
                  mb-2
                  "
                >
                  Office Location
                </h3>

                <p className="text-gray-300">
                  Kandy, Central Province,
                  Sri Lanka
                </p>
              </div>

              <div>
                <h3
                  className="
                  text-xl
                  font-semibold
                  text-[#D4AF37]
                  mb-2
                  "
                >
                  Phone Number
                </h3>

                <p className="text-gray-300">
                  +94 77 000 0000
                </p>
              </div>

              <div>
                <h3
                  className="
                  text-xl
                  font-semibold
                  text-[#D4AF37]
                  mb-2
                  "
                >
                  Email Address
                </h3>

                <p className="text-gray-300">
                  info@colonialventures.lk
                </p>
              </div>

              <div>
                <h3
                  className="
                  text-xl
                  font-semibold
                  text-[#D4AF37]
                  mb-2
                  "
                >
                  Business Hours
                </h3>

                <p className="text-gray-300">
                  Monday - Friday
                  <br />
                  9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}