import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    fs: {
      allow: ['.'],
    }
  },
  // ⬇️ Das ist der entscheidende Teil
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  // ⬇️ Und das hier aktiviert History Fallback für SPA
  //     (damit Vercel auf index.html routet bei Unterseiten)
  preview: {
    port: 4173,
    open: true,
  }
});
