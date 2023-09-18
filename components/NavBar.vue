<script setup lang="ts">
</script>
<template>
  <div class="navbar">
    <nav class="nav-items">
      <NuxtLink to="/">Accueil</NuxtLink>
      <NuxtLink to="/a-propos" prefetch >À propos</NuxtLink>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  z-index: 10;

  .nav-items {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  a {
    font-family: 'DrukText-HeavyItalic', Helvetica, Arial, Verdana, Tahoma, sans-serif;
    padding: 15px;
    font-size: 2rem;
    color: white;

    @media screen and (max-width: $breakpoint-mobile) {
      font-size: 1.4rem;
      padding: 15px 10px;
    }
  }
}
</style>
