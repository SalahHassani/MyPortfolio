import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: './', // <-- Change this to relative paths so GitHub Pages finds your files
  plugins: [react(), tailwindcss()],
});