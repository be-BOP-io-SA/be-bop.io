// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "sv"],
    routing: { prefixDefaultLocale: true },
  },
  vite: {
    build: {
      cssCodeSplit: false,
      assetsInlineLimit: 1024 * 1024,
    },
    plugins: [tailwindcss()],
  },
});
