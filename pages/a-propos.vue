<script setup lang="ts">
useSeoMeta({
  title: "La Filmance",
  ogTitle: "La Filmance",
  description: "La Filmance est un studio spécialisé dans l'art visuel vidéo. Prise de vue, animation 3D, VFX, sont autant de techniques d'exploration et de création de nouvelles formes visuelles",
  ogDescription: "La Filmance est un studio spécialisé dans l'art visuel vidéo. Prise de vue, animation 3D, VFX, sont autant de techniques d'exploration et de création de nouvelles formes visuelles",
  ogImage: "ogImage.png",
  twitterCard: "summary_large_image",
});
</script>
<template>
  <div class="about">
    <ClientOnly>
      <div class="text-container">
        <h1>A propos</h1>
        <p>
          "La Filmance est un studio spécialisé dans l'art visuel vidéo. Prise de vue, animation 3D, VFX, sont autant de
          techniques d'exploration et de création de nouvelles formes visuelles. Son champ d'action se focalise
          essentiellement sur les clips musicaux, mais ses projets touchent l'image au sens large. Créée en 2020 par
          <a href="https://www.youtube.com/channel/UCXsZAM0C2Rae1YWrRTyhtcA" target="_blank">Valentin Ordinateur</a>, La
          Filmance a pour objectif de représenter l'aspect commercial de sa pratique. Il travaille en parallèle sur le
          champ expérimental, qui lui sert de laboratoire et de source d'inspiration pour les clips qu'il réalise
        </p>
      </div>
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.about {
  width: 100%;
  min-height: 100svh;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  // gap: 100px;

  .text-container {
    width: 80%;
    margin: auto;

    h1 {
      font-family: 'DrukText-Heavy', sans-serif;
      font-size: 3.1rem;
      color: white;
      margin-bottom: 1rem;
    }

    p {
      letter-spacing: 0.70px;
      width: 100%;
      font-size: 1.6rem;

      a {
        text-decoration: underline;

        &:hover {
          color: gray;
        }
      }

      @media screen and (max-width: $breakpoint-mobile) {
        font-size: 1.2rem;
        width: 90%;
      }

      @media screen and (min-width: $breakpoint-mobile) and (max-width: $breakpoint-tablet) {
        font-size: 1.5rem;
        width: 85%;
      }

    }
  }
}
</style>
