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
    astroI18next(), react(),
  ],
});
