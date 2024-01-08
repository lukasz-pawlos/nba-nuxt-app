// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    'bootstrap/dist/css/bootstrap.css',
    '~/node_modules/bootstrap-icons/font/bootstrap-icons.css',
    'public/styles.css'
  ],
  vite: {
    resolve: {
      alias: {
        "@fetchingTypes": path.resolve(__dirname, 'fetchingTypes'),
        "@composables": path.resolve(__dirname, 'composables'),
        "@components": path.resolve(__dirname, 'components'),
      },
    },
  },
})
