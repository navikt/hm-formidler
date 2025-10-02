/// <reference types="vitest" />
import { fetchDecoratorHtml } from '@navikt/nav-dekoratoren-moduler/ssr'
import react from '@vitejs/plugin-react-swc'
import mustache from 'mustache'
import { defineConfig, type Plugin } from 'vite'
import svgr from 'vite-plugin-svgr'

const htmlPlugin = ({ development }: { development?: boolean }): Plugin => ({
  name: 'html-transform',
  async transformIndexHtml(html) {
    if (development) {
      const decorator = await fetchDecoratorHtml({
        env: 'dev',
        params: {
          context: 'samarbeidspartner',
          logoutWarning: true,
        },
      })
      const {
        DECORATOR_HEAD_ASSETS: HeadAssets,
        DECORATOR_HEADER: Header,
        DECORATOR_FOOTER: Footer,
        DECORATOR_SCRIPTS: Scripts,
      } = decorator
      return {
        html: mustache.render(html.replaceAll('{{.', '{{{').replaceAll('}}', '}}}'), {
          HeadAssets,
          Header,
          Footer,
          Scripts,
        }),
        tags: [
          {
            tag: 'script',
            children: `window.appSettings = {
              USE_MSW: true,
              NAIS_CLUSTER_NAME: 'dev-gcp'
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
export default defineConfig((env) => {
  // process.env.USE_MSW === 'true'
  return {
    base: '/hjelpemidler/formidler/',
    plugins: [htmlPlugin({ development: env.mode === 'development' }), react(), svgr()],
    build: {
      sourcemap: true,
      manifest: true,
    },
    server: {
      proxy: {
        ...(true
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
            }),
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: 'src/setupTests.ts',
    },
  }
})
