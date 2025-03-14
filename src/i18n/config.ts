import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next.use(LanguageDetector).init({
  fallbackLng: "es", // Idioma predeterminado (puedes cambiarlo a "en" si prefieres)
  resources: {
    en: {
      translation: {
        welcome: "Welcome to my portfolio!",
        changeLang: "Change language",
      },
    },
    es: {
      translation: {
        welcome: "¡Bienvenido a mi portafolio!",
        changeLang: "Cambiar idioma",
      },
    },
  },
});
export default i18next;
