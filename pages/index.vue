<script setup lang="ts">
import { useIntroAnimationStore } from '~/store/introAnimation'
import { storeToRefs } from 'pinia'

await prefetchComponents('ModalGalleryHome')

const introAnimStore = useIntroAnimationStore();
const { introAnimation } = storeToRefs(introAnimStore)

const { t } = useI18n({
  useScope: 'local'
})

const i18nHead = useLocaleHead({
  addSeoAttributes: {
    canonicalQueries: ['foo']
  }
})

useHead({
  title: 'La Filmance',
  link: [{ rel: 'canonical', href: 'https://lafilmance.com/' }],
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs!.lang
  },
  meta: [
    { name: 'description', content: `La Filmance est un studio spécialisé dans l\'art visuel vidéo. Prise de vue, animation 3D, VFX, sont autant de techniques d\'exploration et de création de nouvelles formes visuelles` },
    { property: 'og:type', content: `website` },
    { property: 'og:url', content: `https://lafilmance.com` },
    { property: 'og:title', content: `La Filmance` },
    { property: 'og:description', content: `La Filmance est un studio spécialisé dans l'art visuel vidéo. Prise de vue, animation 3D, VFX, sont autant de techniques d'exploration et de création de nouvelles formes visuelles` },  
    { property: 'og:image', content: `https://lafilmance.com/ogImage/ogImg.png` },
    { property: 'twitter:card', content: `summary_large_image` },
    { property: 'twitter:domain', content: `lafilmance.com` },
    { property: 'twitter:url', content: `https://lafilmance.com` },
    { property: 'twitter:title', content: `La Filmance` },
    { property: 'twitter:description', content: `La Filmance est un studio spécialisé dans l'art visuel vidéo. Prise de vue, animation 3D, VFX, sont autant de techniques d'exploration et de création de nouvelles formes visuelles` },  
    { property: 'twitter:image', content: `https://lafilmance.com/ogImage/ogImg.png` },
  ],
})

definePageMeta({
  pageTransition: {
    name: 'page',
  },
  keepalive: {
    exclude: ['HomeBgVideo']
  },
})
</script>

<template>
  <div class="homepage">
    <Intro v-if="introAnimation === false" />
    <Home3d />
    <ModalGalleryHome />
  </div>
</template>
