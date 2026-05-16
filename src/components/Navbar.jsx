import { useState, useEffect } from "react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  Menu,
  X,
  Globe,
} from "lucide-react";

import { useTranslation } from "react-i18next";

import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const location = useLocation();

  const { i18n } =
    useTranslation();

  const changeLanguage = (
    lang
  ) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > 30
      );
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
      bg-white/70
      backdrop-blur-2xl
      border-b
      border-white/20
      shadow-[0_8px_40px_rgba(0,0,0,0.08)]

      w-full

      z-50

      transition-all
      duration-500
      

      ${
        scrolled
          ? `
          bg-[#F8F5F0]/95
          backdrop-blur-xl
          shadow-lg
          `
          : `
          bg-[#F8F5F0]
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
        

        h-[74px]

        flex
        items-center
        justify-between
        "
      >
        {/* LOGO */}

        <Link
          to="/"
          className="
          flex
          items-center
          gap-4

          flex-shrink-0
          "
        >
          <img
            src={logo}
            alt="Colonial Ventures"
            className="
            h-12
            md:h-14   

            object-contain
            "
          />

          <div>
            <h1
              className="
              text-[24px]
              md:text-[34px]

              leading-none

              font-bold

              text-[#10231d]

              uppercase
              "
              style={{
                fontFamily:
                  "Georgia, serif",
              }}
            >
              Colonial Ventures
            </h1>

            <p
              className="
              hidden
              md:block

              text-[12px]

              tracking-[4px]

              text-gray-500

              mt-1
              "
            >
              PREMIUM PEPPER
              PLANTATIONS
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}

        <div
          className="
          hidden
          lg:flex

          items-center
          gap-10
          "
        >
          {/* LINKS */}

          <div
            className="
            flex
            items-center
            gap-8
            "
          >
            {navLinks.map(
              (link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`
                  text-[17px]

                  font-medium

                  transition-all
                  duration-300

                  hover:text-[#D4AF37]

                  ${
                    location.pathname ===
                    link.path
                      ? "text-[#D4AF37]"
                      : "text-[#081C15]"
                  }
                  `}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* LANGUAGE SWITCHER */}

          <div
            className="
            flex
            items-center

            bg-white

            border
            border-gray-200

            rounded-full

            p-1

            shadow-none
            "
          >
            {/* ICON */}

            <div
              className="
              w-10
              h-10

              flex
              items-center
              justify-center

              text-[#D4AF37]
              "
            >
              <Globe size={18} />
            </div>

            {/* EN */}

            <button
              onClick={() =>
                changeLanguage(
                  "en"
                )
              }
              className={`
              px-5
              py-2

              rounded-full

              text-sm
              font-semibold

              transition-all

              ${
                i18n.language ===
                "en"
                  ? `
                  bg-[#D4AF37]
                  text-black
                  `
                  : `
                  text-gray-600
                  hover:text-black
                  `
              }
              `}
            >
              EN
            </button>

            {/* SI */}

            <button
              onClick={() =>
                changeLanguage(
                  "si"
                )
              }
              className={`
              px-5
              py-2

              rounded-full

              text-sm
              font-semibold

              transition-all

              ${
                i18n.language ===
                "si"
                  ? `
                  bg-[#D4AF37]
                  text-black
                  `
                  : `
                  text-gray-600
                  hover:text-black
                  `
              }
              `}
            >
              සිංහල
            </button>
          </div>
        </div>

        {/* MOBILE BUTTON */}

        <button
          className="
          lg:hidden

          text-[#10231d]
          "
          onClick={() =>
            setMenuOpen(
              !menuOpen
            )
          }
        >
          {menuOpen ? (
            <X size={32} />
          ) : (
            <Menu size={32} />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}

      {menuOpen && (
        <div
          className="
          lg:hidden

          bg-[#F8F5F0]

          border-t
          border-gray-200

          px-6
          py-8
          "
        >
          <div
            className="
            flex
            flex-col
            gap-6
            "
          >
            {navLinks.map(
              (link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() =>
                    setMenuOpen(
                      false
                    )
                  }
                  className={`
                  text-lg
                  font-medium

                  ${
                    location.pathname ===
                    link.path
                      ? "text-[#D4AF37]"
                      : "text-[#10231d]"
                  }
                  `}
                >
                  {link.name}
                </Link>
              )
            )}

            {/* MOBILE LANG */}

            <div
              className="
              flex
              gap-4

              pt-4
              "
            >
              <button
                onClick={() =>
                  changeLanguage(
                    "en"
                  )
                }
                className="
                bg-[#D4AF37]

                text-black

                px-6
                py-3

                rounded-full

                font-semibold
                "
              >
                English
              </button>

              <button
                onClick={() =>
                  changeLanguage(
                    "si"
                  )
                }
                className="
                border
                border-gray-300

                px-6
                py-3

                rounded-full

                font-semibold
                "
              >
                සිංහල
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}