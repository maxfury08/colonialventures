import { Globe } from "lucide-react";

import {
  useLanguageContext,
} from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const {
    language,
    changeLanguage,
  } = useLanguageContext();

  const languages = [
    {
      code: "en",
      label: "EN",
    },

    {
      code: "si",
      label: "සිං",
    },

    {
      code: "ta",
      label: "தமிழ்",
    },
  ];

  return (
    <div
      className="
      flex
      items-center
      gap-2
      bg-black/40
      border
      border-white/10
      backdrop-blur-md
      rounded-full
      px-3
      py-2
      "
    >
      {/* ICON */}

      <Globe
        size={18}
        className="text-[#D4AF37]"
      />

      {/* BUTTONS */}

      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() =>
            changeLanguage(lang.code)
          }
          className={`
          px-3
          py-1
          rounded-full
          text-sm
          font-medium
          transition-all
          ${
            language === lang.code
              ? "bg-[#D4AF37] text-black"
              : "text-white hover:bg-white/10"
          }
          `}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}