<script setup lang="ts"></script>
<template>
  <div class="about">
    <ClientOnly>
        <div class="text-container">
          <h1>A propos</h1>
          <p>La Filmance est un studio spécialisé dans l'art visuel vidéo. La Filmance est pluridisciplinaire. Prise de vue, animation 3D, VFX, sont autant de techniques d'exploration et de création de nouveaux champs visuels. Sa sphère d'action se focalise essentiellement sur les clips musicaux, mais ses aspirations sont aussi expérimentales et ont attrait à l'image au sens large. La Filmance est créée en 2020 par Valentin Ordinateur et à pour dessein de représenter l'aspect commercial de sa pratique. Il travaille en parallèle sur le champ expérimental, qui lui sert de laboratoire et de source d'inspiration pour les clips qu'il réalise</p>
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
    align-items: flex-end;
    color: white;
    gap: 100px;

    .text-container {
      width: 50%;

        // styles spécifiques pour la tablette
        @media screen and (max-width: $breakpoint-tablet) {
            width: 70%;
        }

        // styles spécifiques pour le mobile
        @media screen and (max-width: $breakpoint-mobile) {
            width: 90%;
        }

      h1 { 
        font-family: 'DrukText-Heavy';
        font-size: 3rem;
        color: white;
        margin-bottom: 1rem;
      }

      p {
        letter-spacing: 0.70px;
        width: 90%;
        font-size: 1.4rem;
        font-family: 'DrukText-Medium';
      }
    }

}

</style>
