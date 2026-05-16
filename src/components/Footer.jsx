import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

import logo from "../assets/images/logo.png";


export default function Footer() {
  return (
    <footer
      className="
      relative

      bg-gradient-to-br
      from-[#02100b]
      via-[#081C15]
      to-black

      overflow-hidden

      text-white
      "
    >

      {/* GOLD GLOW */}

      <div
        className="
        absolute

        top-[-200px]
        right-[-100px]

        w-[700px]
        h-[700px]

        bg-[#D4AF37]/10

        blur-[160px]

        rounded-full
        "
      ></div>

      {/* RADIAL OVERLAY */}

      <div
        className="
        absolute
        inset-0

        bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_35%)]
        "
      ></div>

      {/* TOP BORDER */}

      <div
        className="
        absolute
        top-0
        left-0

        h-px
        w-full

        bg-gradient-to-r
        from-transparent
        via-[#D4AF37]/40
        to-transparent
        "
      ></div>

      {/* CONTENT */}

      <div
        className="
        relative
        z-20

        max-w-7xl
        mx-auto

        px-6
        lg:px-10

        py-24

        grid
        md:grid-cols-2
        lg:grid-cols-4

        gap-14
        "
      >
        {/* BRAND */}

        <div>
          {/* LOGO */}

          <img
            src={logo}
            alt="Colonial Ventures"
            className="
            h-36
            md:h-44

            object-contain

            mb-6

            drop-shadow-[0_0_20px_rgba(212,175,55,0.2)]
            "
          />

          {/* COMPANY NAME */}

          <h2
            className="
            text-4xl

            font-bold

            text-[#D4AF37]

            mb-5
            "
            style={{
              fontFamily:
                "Cormorant Garamond, serif",
            }}
          >
            Colonial Ventures
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
            text-gray-400

            leading-relaxed

            text-lg
            "
          >
            Premium Sri Lankan pepper
            plantation investments focused on
            sustainable agricultural growth,
            export excellence, and long-term
            investor value.
          </p>
        </div>

        {/* QUICK LINKS */}

        <div>
          <h3
            className="
            text-2xl

            font-semibold

            mb-8

            text-white
            "
          >
            Quick Links
          </h3>

          <div
            className="
            flex
            flex-col
            gap-5
            "
          >
            {[
              {
                name: "Home",
                path: "/",
              },

              {
                name: "About",
                path: "/about",
              },

              {
                name: "Plans",
                path: "/plans",
              },

              {
                name: "Gallery",
                path: "/gallery",
              },

              {
                name: "Contact",
                path: "/contact",
              },
            ].map(
              (
                link,
                index
              ) => (
                <Link
                  key={index}
                  to={link.path}
                  className="
                  text-gray-400

                  hover:text-[#D4AF37]

                  transition-all
                  duration-300

                  hover:translate-x-2
                  "
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>

        {/* CONTACT */}

        <div>
          <h3
            className="
            text-2xl

            font-semibold

            mb-8
            "
          >
            Contact
          </h3>

          <div
            className="
            flex
            flex-col
            gap-5

            text-gray-400
            "
          >
            <p>
              Kandy, Central Province,
              Sri Lanka
            </p>

            <p>
              +94 77 000 0000
            </p>

            <p>
              info@colonialventures.lk
            </p>

            <p>
              Mon - Sat / 9AM - 6PM
            </p>
          </div>
        </div>

        {/* SOCIALS */}

        <div>
          <h3
            className="
            text-2xl

            font-semibold

            mb-8
            "
          >
            Follow Us
          </h3>

          <div className="flex gap-5 flex-wrap">
            {[
              FaFacebookF,
              FaInstagram,
              FaWhatsapp,
              FaLinkedinIn,
            ].map(
              (
                Icon,
                index
              ) => (
                <a
                  key={index}
                  href="/"
                  className="
                  group

                  relative

                  w-14
                  h-14

                  rounded-full

                  bg-white/5
                  backdrop-blur-xl

                  border
                  border-white/10

                  flex
                  items-center
                  justify-center

                  text-lg

                  overflow-hidden

                  hover:border-[#D4AF37]

                  hover:-translate-y-1

                  hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]

                  transition-all
                  duration-500
                  "
                >
                  {/* HOVER GLOW */}

                  <div
                    className="
                    absolute
                    inset-0

                    bg-[#D4AF37]/10

                    opacity-0

                    group-hover:opacity-100

                    transition-all
                    duration-500
                    "
                  ></div>

                  <Icon className="relative z-10" />
                </a>
              )
            )}
          </div>

          {/* EXPORT TAG */}

          <div
            className="
            mt-10

            inline-flex
            items-center
            gap-3

            bg-white/5

            border
            border-white/10

            rounded-full

            px-5
            py-3
            "
          >
            <div
              className="
              w-2
              h-2

              rounded-full

              bg-[#D4AF37]

              animate-pulse
              "
            ></div>

            <span
              className="
              text-sm
              text-gray-300
              "
            >
              Exporting Globally
            </span>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}

      <div
        className="
        relative
        z-20

        border-t
        border-white/10

        py-8
        px-6
        "
      >
        <div
          className="
          max-w-7xl
          mx-auto

          flex
          flex-col
          md:flex-row

          items-center
          justify-between

          gap-4
          "
        >
          <p
            className="
            text-gray-500
            text-sm
            "
          >
            © 2026 Colonial Ventures.
            All Rights Reserved.
          </p>

          <div
            className="
            flex
            gap-6

            text-sm
            text-gray-500
            "
          >
            <a
              href="/"
              className="hover:text-[#D4AF37]"
            >
              Privacy Policy
            </a>

            <a
              href="/"
              className="hover:text-[#D4AF37]"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}