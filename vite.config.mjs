const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: '/index.html'
    }
  },
  server: {
    fs: {
      allow: ['.'],
    },
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  preview: {
    port: 4173,
    open: true
  }
});
