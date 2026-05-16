import { useState, useEffect } from "react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  Menu,
  X,
} from "lucide-react";

import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const navLinks = [
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
  ];

  return (
    <nav
      className={`
      fixed
      top-0
      left-0
      w-full
      z-50
      transition-all
      duration-300

      ${
        scrolled
          ? `
          bg-[#FAF8F3]/95
          backdrop-blur-xl
          shadow-lg
          `
          : `
          bg-[#FAF8F3]/85
          backdrop-blur-md
          `
      }
      `}
    >
      <div
        className="
        max-w-7xl
        mx-auto

        px-6
        lg:px-8

        h-[88px]

        flex
        items-center
        justify-between
        "
      >
        {/* LOGO + NAME */}

        <Link
          to="/"
          className="
          flex
          items-center
          gap-4
          "
        >
          {/* LOGO */}

          <img
            src={logo}
            alt="Colonial Ventures"
            className="
            h-12
            md:h-14
            object-contain
            "
          />

          {/* TEXT */}

          <div
            className="
            hidden
            sm:flex
            flex-col
            justify-center
            "
          >
            <h1
              className="
              text-[28px]
              md:text-[34px]
              font-semibold
              text-[#0B1D16]
              leading-none
              tracking-tight
              "
              style={{
                fontFamily: "Georgia, serif",
              }}
            >
              COLONIAL VENTURES
            </h1>

            <p
              className="
              text-[11px]
              md:text-[12px]
              tracking-[6px]
              text-gray-500
              uppercase
              mt-1
              "
            >
              Premium Pepper Plantations
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}

        <div
          className="
          hidden
          md:flex
          items-center
          gap-10
          "
        >
          {/* NAVIGATION */}

          <div
            className="
            flex
            items-center
            gap-8
            "
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`
                text-lg
                font-medium
                transition-all
                duration-300

                hover:text-[#D4AF37]

                ${
                  location.pathname ===
                  link.path
                    ? "text-[#D4AF37]"
                    : "text-[#0B1D16]"
                }
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* LANGUAGE */}

          <div
            className="
            flex
            items-center
            gap-3
            ml-4
            "
          >
            <button
              className="
              bg-[#D4AF37]
              text-black

              px-5
              py-2.5

              rounded-full
              text-sm
              font-semibold

              shadow-md
              "
            >
              EN
            </button>

            <button
              className="
              border
              border-gray-300

              text-gray-700

              px-5
              py-2.5

              rounded-full
              text-sm

              hover:bg-[#D4AF37]
              hover:text-black

              transition-all
              "
            >
              සිං
            </button>

            <button
              className="
              border
              border-gray-300

              text-gray-700

              px-5
              py-2.5

              rounded-full
              text-sm

              hover:bg-[#D4AF37]
              hover:text-black

              transition-all
              "
            >
              தமிழ்
            </button>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}

        <button
          className="
          md:hidden
          text-[#0B1D16]
          "
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          {menuOpen ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}

      {menuOpen && (
        <div
          className="
          md:hidden

          bg-[#FAF8F3]

          border-t
          border-gray-200

          px-6
          py-6

          flex
          flex-col
          gap-6
          "
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() =>
                setMenuOpen(false)
              }
              className="
              text-[#0B1D16]
              text-lg
              font-medium
              "
            >
              {link.name}
            </Link>
          ))}

          {/* MOBILE LANGUAGE */}

          <div className="flex gap-3 pt-4">
            <button
              className="
              bg-[#D4AF37]
              text-black

              px-5
              py-2.5

              rounded-full
              text-sm
              font-semibold
              "
            >
              EN
            </button>

            <button
              className="
              border
              border-gray-300

              text-gray-700

              px-5
              py-2.5

              rounded-full
              text-sm
              "
            >
              සිංහල
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}