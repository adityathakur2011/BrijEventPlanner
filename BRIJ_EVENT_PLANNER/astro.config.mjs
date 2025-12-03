import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: "https://adityathakur2011.github.io",
  base: "/BrijEventPlanner",
  outDir: "./dist",
  integrations: [
    tailwind({
      applyBaseStyles: false, // We're importing global.css manually
    })
  ],
});

