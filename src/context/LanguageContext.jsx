import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import { useTranslation } from "react-i18next";

const LanguageContext =
  createContext();

export function LanguageProvider({
  children,
}) {
  const { i18n } = useTranslation();

  const [language, setLanguage] =
    useState(
      localStorage.getItem("language") ||
        "en"
    );

  useEffect(() => {
    i18n.changeLanguage(language);

    localStorage.setItem(
      "language",
      language
    );
  }, [language, i18n]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  return useContext(LanguageContext);
}