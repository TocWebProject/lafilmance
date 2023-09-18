<script setup lang="ts">
import { useIntroAnimationStore } from '~/store/introAnimation'
import { storeToRefs } from 'pinia'

const introAnimStore = useIntroAnimationStore();
const { introAnimation } = storeToRefs(introAnimStore)

await prefetchComponents('ModalGalleryHome')

useSeoMeta({
  title: "La Filmance",
  ogTitle: "La Filmance",
  description: "La Filmance est un studio spécialisé dans l'art visuel vidéo. Prise de vue, animation 3D, VFX, sont autant de techniques d'exploration et de création de nouvelles formes visuelles",
  ogDescription: "La Filmance est un studio spécialisé dans l'art visuel vidéo. Prise de vue, animation 3D, VFX, sont autant de techniques d'exploration et de création de nouvelles formes visuelles",
  ogImage: "ogImage.png",
  twitterCard: "summary_large_image",
})

definePageMeta({
  // you can also pass a string or a computed property
  key: route => route.params.id as string,
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
