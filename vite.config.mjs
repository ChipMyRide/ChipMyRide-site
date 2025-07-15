import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',  // Root ist der Projektordner
  build: {
    outDir: 'dist',
  },
});
