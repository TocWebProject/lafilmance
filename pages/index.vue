<script setup lang="ts">
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
      <Home3d />
      <HomeBgVideo />
      <ModalGalleryHome />
  </div>
</template>

<style lang="scss">

</style>
