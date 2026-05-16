import { useTranslation } from "react-i18next";

export default function useLanguage() {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language;

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return {
    t,
    currentLanguage,
    changeLanguage,
  };
}