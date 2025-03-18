/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "es",
  locales: ["es", "en"],
  routes: {
    // Define aquí las rutas de traducción personalizadas si es necesario
    es: {
      "sobreMiPage": "sobreMiPage",
      "proyectosPage": "proyectosPage",
      "curriculumPage": "curriculumPage"
    },
    en: {
      "sobreMiPage": "aboutMePage",
      "proyectosPage": "projectsPage",
      "curriculumPage": "resumePage"
    }
  }
};
