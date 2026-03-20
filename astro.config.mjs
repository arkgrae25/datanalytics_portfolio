// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build
export default defineConfig({
  site: 'https://arkgrae25.github.io',
  base: '/datanalytics-portfolio', 

  vite: {
    plugins: [tailwindcss()],
  },
});

