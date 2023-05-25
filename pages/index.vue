<script setup lang="ts">
useSeoMeta({
  title: 'La Filmance',
  ogTitle: 'La Filmance',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'ogImage',
  twitterCard: 'summary_large_image',
})

definePageMeta({
  // you can also pass a string or a computed property
  key: route => route.params.id as string,
  transition: {
    name: 'page',
  },
  keepalive: {
    exclude: ['HomeBgVideo']
  },
})
</script>
<template>
  <div class="homepage">
      <Intro />
      <ClientOnly>
        <Home3d />
      </ClientOnly>
      <ModalGalleryHome />
  </div>
</template>

<style lang="scss">

</style>
