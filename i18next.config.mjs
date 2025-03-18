/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "es",
  locales: ["es", "en"],
  namespaces: ["translation"],
  defaultNamespace: "translation",
  load: ["server", "client"], // Cargar traducciones en servidor y cliente
  i18nextServer: {
    debug: true,
  },
  i18nextClient: {
    debug: true,
  },
  routes: {
    es: {
      sobreMiPage: "sobre-mi",
      proyectosPage: "proyectos",
      curriculumPage: "curriculum",
    },
    en: {
      sobreMiPage: "about-me",
      proyectosPage: "projects",
      curriculumPage: "resume",
    }
  }
};