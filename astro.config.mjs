// astro.config.mjs
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import astroI18next from 'astro-i18next';
import react from '@astrojs/react';

export default defineConfig({
  
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
  ],
  i18n: {
    defaultLocale: 'es',  // Your default language
    locales: ['es', 'en'],
  }
});
