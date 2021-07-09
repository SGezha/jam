import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Markdown from 'vite-plugin-md'
import WindiCSS from 'vite-plugin-windicss'
import ViteComponents from 'vite-plugin-components'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import Highlightjs from 'markdown-it-highlightjs'
import LinkAttributes from 'markdown-it-link-attributes'


// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log('🦕 vite.config.ts/defineConfig', command, mode)

  return {
    base: mode === 'development' ? './' : '/jam/',
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
      }),

      // https://github.com/hannoeru/vite-plugin-pages
      Pages({
        pagesDir: './src/views',
        extensions: ['vue', 'md'],
      }),

      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      Layouts(),

      // https://github.com/antfu/vite-plugin-md
      Markdown({
        headEnabled: true,
        markdownItSetup(md) {
          md.use(Highlightjs)
          md.use(LinkAttributes, {
            pattern: /^https?:\/\//,
            attrs: {
              target: '_blank',
              rel: 'noopener',
            },
          })
        },
      }),

      // https://github.com/antfu/vite-plugin-windicss
      WindiCSS(),

      // https://github.com/antfu/vite-plugin-components
      ViteComponents({
        // auto import icons
        customComponentResolvers: [
          // https://github.com/antfu/vite-plugin-icons
          ViteIconsResolver({
            componentPrefix: 'icon',
          }),
        ],
      }),

      // https://github.com/antfu/vite-plugin-icons
      ViteIcons(),
    ],
  }
})
