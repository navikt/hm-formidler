import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/hjelpemidler/formidler/',
  plugins: [react(), svgr()],
  build: {
    sourcemap: true,
  },
  server: {
    proxy: process.env.USE_MSW
      ? {}
      : {
          '/hjelpemidler/formidler/api': {
            target: 'http://localhost:5000',
            changeOrigin: true,
          },
          '/hjelpemidler/formidler/soknad-api': {
            target: 'http://localhost:5000',
            changeOrigin: true,
          },
          '/hjelpemidler/formidler/session/exp': {
            target: 'http://localhost:5000',
          },
        },
  },
})
