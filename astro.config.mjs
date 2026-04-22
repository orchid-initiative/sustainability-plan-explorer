import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://orchid-initiative.github.io',
  base: '/sustainability-plan-explorer/',
  vite: {
    plugins: [tailwindcss()],
  },
});
