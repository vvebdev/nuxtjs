// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  app: {
    baseURL: "/nuxtjs/",
  },
  generate: {
    routes: [
      "/user/:id",
      // add additional dynamic routes here as needed
    ],
  },
});
