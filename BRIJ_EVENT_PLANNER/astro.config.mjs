import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: "https://marathoncafe.in",
  base: "/",
  outDir: "./dist",
  integrations: [
    tailwind({
      applyBaseStyles: false, // We're importing global.css manually
    })
  ],
  build: {
    assets: 'assets',
  },
});

