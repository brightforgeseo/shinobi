// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://shinobiseo.com', // Update to your production domain
  vite: {
    plugins: [tailwindcss()],
  },
});
