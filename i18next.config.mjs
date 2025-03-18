/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "es",
  locales: ["es", "en"],
  routes: {
    en: {
      sobreMi: "about",
      proyectos: "projects",
      curriculum: "curriculum",
    },
  },
};
