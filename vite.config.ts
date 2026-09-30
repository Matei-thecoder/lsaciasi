import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
  /*server: {
    port: 3000,
    open: true,
    host: true,
    proxy: {
      '/api': {
        target: 'https://script.google.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, '/macros/s/AKfycbxO5yn0lSA7kuEY1GTSF8t3aYVoC0emzZOAE8CHyDj95cSD_4VhELVoBr-KbSMJvow/exec'),
      },
    },
  },*/
  css: {
    postcss: './postcss.config.js',
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})