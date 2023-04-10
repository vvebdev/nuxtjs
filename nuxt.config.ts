// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  app: {
    baseURL: "/nuxtjs/",
  },
  nitro: {
    output: {
      dir: ".output",
      serverDir: ".output/server",
      publicDir: ".output/public",
    },
  },
});
