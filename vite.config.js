export default defineConfig({
  base: '/',
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
