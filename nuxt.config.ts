// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: 'LA FILMANCE',
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex, nofollow' },
        { name: 'description', content: 'La Filmance est un studio spécialisé dans l\'art visuel vidéo. Prise de vue, animation 3D, VFX, sont autant de techniques d\'exploration et de création de nouveaux champs visuels' }
      ],
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
})
