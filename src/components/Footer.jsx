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
    <footer className="bg-black text-white">
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-16

        grid
        md:grid-cols-4
        gap-12
        "
      >
        {/* BRAND */}

        <div>
          {/* LOGO */}

          <img
            src={logo}
            alt="Colonial Ventures"
            className="
            h-32
            md:h-36
            object-contain
            mb-6
            "
          />

          {/* COMPANY NAME */}

          <h2
            className="
            text-3xl
            font-bold
            text-[#D4AF37]
            mb-4
            "
            style={{
              fontFamily:
                "Georgia, serif",
            }}
          >
            Colonial Ventures
          </h2>

          {/* DESCRIPTION */}

          <p className="text-gray-400 leading-relaxed">
            Premium Sri Lankan pepper
            plantation investments focused on
            sustainable growth and long-term
            investor value.
          </p>
        </div>

        {/* LINKS */}

        <div>
          <h3
            className="
            text-xl
            font-semibold
            mb-5
            "
          >
            Quick Links
          </h3>

          <div
            className="
            flex
            flex-col
            gap-3
            text-gray-400
            "
          >
            <Link
              to="/"
              className="hover:text-[#D4AF37] transition-all"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="hover:text-[#D4AF37] transition-all"
            >
              About
            </Link>

            <Link
              to="/plans"
              className="hover:text-[#D4AF37] transition-all"
            >
              Plans
            </Link>

            <Link
              to="/gallery"
              className="hover:text-[#D4AF37] transition-all"
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              className="hover:text-[#D4AF37] transition-all"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* CONTACT */}

        <div>
          <h3
            className="
            text-xl
            font-semibold
            mb-5
            "
          >
            Contact
          </h3>

          <div
            className="
            flex
            flex-col
            gap-3
            text-gray-400
            "
          >
            <p>
              Kandy, Central Province,
              Sri Lanka
            </p>

            <p>+94 77 000 0000</p>

            <p>
              info@colonialventures.lk
            </p>
          </div>
        </div>

        {/* SOCIALS */}

        <div>
          <h3
            className="
            text-xl
            font-semibold
            mb-5
            "
          >
            Follow Us
          </h3>

          <div className="flex gap-4">
            {/* FACEBOOK */}

            <a
              href="/"
              className="
              w-11
              h-11

              rounded-full

              bg-[#1B4332]

              flex
              items-center
              justify-center

              hover:bg-[#D4AF37]
              hover:text-black

              transition-all
              duration-300
              "
            >
              <FaFacebookF />
            </a>

            {/* INSTAGRAM */}

            <a
              href="/"
              className="
              w-11
              h-11

              rounded-full

              bg-[#1B4332]

              flex
              items-center
              justify-center

              hover:bg-[#D4AF37]
              hover:text-black

              transition-all
              duration-300
              "
            >
              <FaInstagram />
            </a>

            {/* WHATSAPP */}

            <a
              href="/"
              className="
              w-11
              h-11

              rounded-full

              bg-[#1B4332]

              flex
              items-center
              justify-center

              hover:bg-[#D4AF37]
              hover:text-black

              transition-all
              duration-300
              "
            >
              <FaWhatsapp />
            </a>

            {/* LINKEDIN */}

            <a
              href="/"
              className="
              w-11
              h-11

              rounded-full

              bg-[#1B4332]

              flex
              items-center
              justify-center

              hover:bg-[#D4AF37]
              hover:text-black

              transition-all
              duration-300
              "
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}

      <div
        className="
        border-t
        border-white/10

        text-center

        py-6

        text-gray-500
        text-sm
        "
      >
        © 2026 Colonial Ventures. All
        Rights Reserved.
      </div>
    </footer>
  );
}