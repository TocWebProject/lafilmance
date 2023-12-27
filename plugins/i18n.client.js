
export default defineNuxtPlugin(nuxtApp => {  
    // Called right after a new locale has been set
    nuxtApp.hook('i18n:localeSwitched', ({oldLocale, newLocale}) => {
        // Fix Gsap Init Animation and translations update
        setTimeout(useEvent('resetModalGallery'),900);
    })
  })