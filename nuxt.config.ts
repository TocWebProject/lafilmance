// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  spaLoadingTemplate: 'app/spa-loading-template.html',
  ssr: false,
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
          additionalData: '@use "@/assets/scss/app.scss" as *;'
        }
      }
    }
  },
  modules: ['@nuxtjs/fontaine']
})
