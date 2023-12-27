// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  spaLoadingTemplate: false,
  ssr: false,
  site: {
    url: 'https://lafilmance.com/',
  },
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },
  app: {
    head: {
      title: 'LA FILMANCE',
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/app.scss" as *;',
        },
      },
    },
  },
  i18n: {
    strategy: 'prefix_and_default',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', 
      alwaysRedirect: true
    },
    baseUrl: 'https://lafilmance.com',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        name: 'Français'
      }
    ],
  },
  modules: ["@nuxtjs/fontaine", "@pinia/nuxt", '@nuxtjs/i18n', "@nuxtjs/robots",'nuxt-simple-sitemap'],
});
