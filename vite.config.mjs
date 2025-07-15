import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: 'public',         // <-- Das ist entscheidend!
  build: {
    outDir: '../dist',    // Damit das Output außerhalb von /public liegt
    emptyOutDir: true
  }
})
