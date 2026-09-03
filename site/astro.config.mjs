import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  outDir: './dist',
  publicDir: './public',
  srcDir: './src',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
