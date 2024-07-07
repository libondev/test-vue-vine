import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
// z-lazy-show/v-show.lazy
import { VineVitePlugin } from 'vue-vine/vite'

// https://vitejs.dev/config/
export default defineConfig(() => ({
  base: './',

  optimizeDeps: {
    include: ['vue', 'pinia', 'vue-router', 'lodash-es'],
    exclude: ['vue-demi'],
  },

  plugins: [
    vue({
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    }),

    VineVitePlugin(),

    components({
      dts: './shims/components.d.ts',
      extensions: ['vue', 'tsx'],
      // globs: ['src/components/**/index.{vue,tsx,ts}']
    }),

    pages({
      dirs: 'src/views',
      routeBlockLang: 'yaml',
      extensions: ['vue', 'tsx'],
      exclude: [
        '**/*/components/**/*',
        '**/*/composables/**/*',
        '**/*/styles/**/*',
        '**/*/utils/**/*',
      ],
    }),

    autoImport({
      dirs: [
        './src/composables/**',
      ],
      dts: './shims/auto-imports.d.ts',
      imports: [
        'vue',
        'vue-router',
      ],
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}))
