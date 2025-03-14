// astro.config.mjs
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import astroI18next from 'astro-i18next';

export default defineConfig({
  
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    astroI18next({
      defaultLocale: 'es',       // Idioma por defecto (ej: español)
      locales: ['es', 'en'],     // Lista de idiomas disponibles
      // Opciones avanzadas:
      // routes: {
      //   en: '',
      //   es: 'es', // esto hará que /es/... sea la ruta para español, y / para inglés
      // },
    }),
  ],
});
