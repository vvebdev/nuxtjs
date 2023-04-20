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
        counter: 'Counter',
        button: 'Click me!',
        mainPage: {
          title: 'Main page title',
          toUser: 'To user',
        },
        userPage: {
          title: 'User page title',
          toMain: 'To main',
        },
      },
      ru: {
        hello: 'Привет, {name}!',
        counter: 'Счетчик',
        button: 'Кликни меня!',
        mainPage: {
          title: 'Заголовок главной страницы',
          userId: 'this is userId',
          toUser: 'Перейти к юзеру',
        },
        userPage: {
          title: 'Заголовок страницы пользователя',
          userId: 'Id пользователя',
          toMain: 'На главную',
        },
      },
    },
  });

  vueApp.use(i18n);
});
