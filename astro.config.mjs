// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), tailwind()],
  i18n: {
    defaultLocale: "es", // Your default language
    locales: ["es", "en"],
  },
});
