// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build
export default defineConfig({
  // GitHub Pages project site URL:
  // https://{username}.github.io/{repo}/
  site: 'https://arkgrae25.github.io/datanalytics_portfolio',
  base: '/datanalytics_portfolio',

  vite: {
    plugins: [tailwindcss()],
  },
});

