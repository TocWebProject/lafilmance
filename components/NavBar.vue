<script setup lang="ts">
const { t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()
</script>

<i18n lang="json">
{
  "en": {
    "about": "About",
    "home": "Home"
  },
  "fr": {
    "about": "À propos",
    "home": "Accueil"
  }
}
</i18n>

<template>
  <div class="navbar">
    <nav class="nav-items">
      <NuxtLink :to="localePath('/')" >{{ t('home') }}</NuxtLink>
      <NuxtLink :to="localePath('/about')" >{{ t('about') }}</NuxtLink>
    </nav>

  </div>
  <div class="lang">
    <NuxtLink :to="switchLocalePath('en')">En</NuxtLink><span>/</span>
    <NuxtLink :to="switchLocalePath('fr')">Fr</NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.lang {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  width: max-content;
  padding: 10px;
  z-index: 10;
  font-size: 2rem;
  color: white;

  a {
    margin-right: 0px;
    padding: 15px 5px;
  }
}

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

    &:hover {
      color: $theme-color;
    }
  }
</style>
