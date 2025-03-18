import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslations from "../../public/locales/en/translation.json";
import esTranslations from "../../public/locales/es/translation.json";

// Inicializa i18next de forma síncrona para Astro SSR
i18next
  .init({
    lng: "es",
    fallbackLng: "es",
    debug: true, // Activa el modo debug para ver logs
    interpolation: {
      escapeValue: false, // No escapa HTML en las traducciones
    },
    resources: {
      en: {
        translation: enTranslations,
      },
      es: {
        translation: esTranslations,
      },
    },
  }, (err) => {
    if (err) console.error('i18next initialization error:', err);
  });

export default i18next;