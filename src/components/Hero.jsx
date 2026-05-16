import { motion } from "framer-motion";
import HERO from "../assets/images/HERO.png";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      className="
      relative
      h-screen
      bg-cover
      bg-center
      overflow-hidden
      "
      style={{
        backgroundImage: `url(${HERO})`,
      }}
    >
      

      {/* GOLD OVERLAY */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-black/80
        via-black/50
        to-transparent
        "
      ></div>

      {/* CONTENT */}

      <div
        className="
        relative
        z-10
        h-full
        flex
        items-center
        px-6
        md:px-16
        "
      >
        <div className="max-w-3xl text-white">
          {/* SMALL TITLE */}

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
            uppercase
            tracking-[4px]
            text-[#D4AF37]
            font-semibold
            mb-4
            "
          >
            {t("hero_small")}
          </motion.p>

          {/* MAIN TITLE */}

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
            text-5xl
            md:text-7xl
            font-bold
            leading-tight
            mb-4
            "
          >
            {t("hero_title_1")}
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="
            text-5xl
            md:text-7xl
            font-bold
            leading-tight
            text-[#D4AF37]
            mb-8
            "
          >
            {t("hero_title_2")}
          </motion.h1>

          {/* DESCRIPTION */}

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="
            text-lg
            md:text-2xl
            text-gray-200
            leading-relaxed
            mb-10
            max-w-2xl
            "
          >
            {t("hero_description")}
          </motion.p>

          {/* BUTTONS */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
            className="
            flex
            flex-col
            sm:flex-row
            gap-4
            "
          >
            <button
              className="
              bg-[#D4AF37]
              hover:bg-[#c49c22]
              text-black
              px-8
              py-4
              rounded-full
              text-lg
              font-semibold
              transition-all
              shadow-2xl
              "
            >
              {t("start_investing")}
            </button>

            <button
              className="
              border
              border-white/30
              hover:bg-white/10
              px-8
              py-4
              rounded-full
              text-lg
              font-semibold
              transition-all
              "
            >
              {t("view_plans")}
            </button>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM FADE */}

      <div
        className="
        absolute
        bottom-0
        left-0
        w-full
        h-32
        bg-gradient-to-t
        from-black
        to-transparent
        "
      ></div>
    </section>
  );
}