import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslations from "../../public/locales/en/translation.json";
import esTranslations from "../../public/locales/es/translation.json";

i18next.use(LanguageDetector).init({
  fallbackLng: "es", // Idioma predeterminado (puedes cambiarlo a "en" si prefieres)
  resources: {
    en: {
      translation: enTranslations,
    },
    es: {
      translation: esTranslations,
    },
  },
});
export default i18next;
