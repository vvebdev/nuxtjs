// https://vue-i18n.intlify.dev/guide/integrations/nuxt3.html
import { createI18n } from 'vue-i18n';

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en: {
        hello: 'Hello, {name}!',
      },
      ru: {
        hello: 'Привет, {name}!',
      },
    },
  });

  vueApp.use(i18n);
});
