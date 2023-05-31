import { fetchDecoratorHtml } from '@navikt/nav-dekoratoren-moduler/ssr'
import react from '@vitejs/plugin-react'
import { render } from 'mustache'
import { defineConfig, Plugin, splitVendorChunkPlugin } from 'vite'
import svgr from 'vite-plugin-svgr'

const htmlPlugin = ({ development }: { development?: boolean }): Plugin => ({
  name: 'html-transform',
  async transformIndexHtml(html) {
    if (development) {
      const decorator = await fetchDecoratorHtml({
        env: 'dev',
        context: 'samarbeidspartner',
      })
      return {
        html: render(html, decorator),
        tags: [
          {
            tag: 'script',
            children: `window.appSettings = {
              USE_MSW: true,
              MILJO: 'dev-gcp'
            }`,
          },
        ],
      }
    } else {
      return {
        html,
        tags: [
          {
            tag: 'script',
            children: `window.appSettings = {}`,
          },
          {
            tag: 'script',
            attrs: {
              src: '/hjelpemidler/formidler/settings.js',
            },
          },
        ],
      }
    }
  },
})

// https://vitejs.dev/config/
export default defineConfig((env) => ({
  base: '/hjelpemidler/formidler',
  plugins: [htmlPlugin({ development: env.mode === 'development' }), react(), svgr(), splitVendorChunkPlugin()],
  build: {
    sourcemap: true,
    manifest: true,
  },
  server: {
    proxy:
      process.env.USE_MSW === 'true'
        ? {}
        : {
            '/hjelpemidler/formidler/api': {
              target: 'http://localhost:5000',
              changeOrigin: true,
            },
            '/hjelpemidler/formidler/roller-api': {
              target: 'http://localhost:5000',
              changeOrigin: true,
            },
            '/hjelpemidler/formidler/session/exp': {
              target: 'http://localhost:5000',
            },
          },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.ts',
  },
}))
