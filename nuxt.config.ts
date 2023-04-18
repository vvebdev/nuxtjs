// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  app: {
    baseURL: '/nuxtjs/',
    head: {
      link: [
        {
          rel: 'shortcut icon',
          type: 'image/x-icon',
          href: '/nuxtjs/favicon.ico',
        },
      ],
    },
  },
});
