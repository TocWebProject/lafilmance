<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
const i18nHead = useLocaleHead({
  addSeoAttributes: true,
})
const headTitle = computed(() => t('head-title'))

useHead({
  title: headTitle,
  link: [{ rel: 'canonical', href: 'https://lafilmance.com/about' }],
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs!.lang
  },
  meta: [
    { name: 'description', content: `La Filmance est un studio spécialisé dans l\'art visuel vidéo. Prise de vue, animation 3D, VFX, sont autant de techniques d\'exploration et de création de nouvelles formes visuelles` },
    { property: 'og:type', content: `website` },
    { property: 'og:url', content: 'https://lafilmance.com/about' },
    { property: 'og:title', content: `La Filmance - A propos` },
    { property: 'og:description', content: `La Filmance est un studio spécialisé dans l'art visuel vidéo. Prise de vue, animation 3D, VFX, sont autant de techniques d'exploration et de création de nouvelles formes visuelles` },
    { property: 'og:image', content: `https://lafilmance.com/ogImage/ogImg.png` },
    { property: 'twitter:card', content: `summary_large_image` },
    { property: 'twitter:domain', content: `lafilmance.com` },
    { property: 'twitter:url', content: 'https://lafilmance.com/about' },
    { property: 'twitter:title', content: `La Filmance - A propos` },
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

<i18n lang="json">
{
  "en": {
    "title": "About",
    "head-title": "La Filmance - About",
    "description-part-1": "La Filmance is a studio specialized in art video. Shooting, 3D animation and VFX are all the techniques used to explore and create new visual forms. Its main focus is on music videos, but its projects touch on images in the broadest sense. Created in 2020 by",
    "description-part-2": ", La Filmance aims to represent the commercial aspect of his practice. At the same time, he works in the experimental field, which serves as a laboratory and source of inspiration for the clips he makes."
  },
  "fr": {
    "title": "À propos",
    "head-title": "La Filmance - À propos",
    "description-part-1": "La Filmance est un studio spécialisé dans l'art vidéo. Prise de vue, animation 3D, VFX, sont autant de techniques d'exploration et de création de nouvelles formes visuelles. Son champ d'action se focalise essentiellement sur les clips musicaux, mais ses projets touchent l'image au sens large. Créée en 2020 par",
    "description-part-2": ", La Filmance a pour objectif de représenter l'aspect commercial de sa pratique. Il travaille en parallèle sur le champ expérimental, qui lui sert de laboratoire et de source d'inspiration pour les clips qu'il réalise"
  }
}
</i18n>
  

<template>
  <div class="about">
    <About3d></About3d>
    <section class="text-container">
      <h1>{{ t('title') }}</h1>
      <p>{{ t('description-part-1') }}
        <a href="https://www.youtube.com/channel/UCXsZAM0C2Rae1YWrRTyhtcA" target="_blank"
          rel="noopener noreferrer">Valentin Ordinateur</a>
        {{ t('description-part-2') }}</p>
      <ul>
        <li>
          <a href="mailto:la.filmanceprod@gmail.com" target="_blank" rel="noopener noreferrer">Mail</a>
        </li>
        <li>
          <a href="https://www.instagram.com/la.filmance/" target="_blank" rel="noopener noreferrer"
            aria-label="Instagram">Instagram</a>
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.about {
  position: relative;
  width: 100%;
  min-height: 100dvh;
  color: $theme-color;

  .text-container {
    pointer-events: none;
    overflow: hidden;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10%;
    width: 55%;

    @media screen and (max-width: $breakpoint-mobile) {
      top: 50%;
      font-size: 1rem;
      width: 90%;
      transform: translate(-50%, -50%);
      left: 50%;
    }

    @media screen and (min-width: $breakpoint-mobile) and (max-width: $breakpoint-tablet) {
      font-size: 1.5rem;
      width: 85%;
      transform: translateY(-50%);
      left: 10%;
    }

    h1 {
      font-family: 'DrukText-Heavy', sans-serif;
      font-size: 3rem;
      color: $theme-color;
      margin-bottom: 1rem;
    }

    p {
      letter-spacing: 0.70px;
      width: 100%;
      font-size: 1.65rem;
      font-weight: 600;

      @media screen and (max-width: $breakpoint-mobile) {
        font-size: 1.2rem;
        text-align: justify;
      }

      @media screen and (min-width: $breakpoint-mobile) and (max-width: $breakpoint-tablet) {
        font-size: 1.5rem;
      }
    }

    // Youtube link
    a {
      pointer-events: all;
      text-decoration: underline;

      &:hover {
        color: gray;
      }
    }

    // Contact
    ul {
      display: flex;

      li {
        padding: 0.75rem 0rem;

        a {
          margin: 0rem 1.25rem 0rem 0rem;
          letter-spacing: 0.70px;
          width: 100%;
          font-size: 1.4rem;
          font-weight: 600;

          @media screen and (max-width: $breakpoint-mobile) {
            font-size: 1.1rem;
            text-align: justify;
          }

          @media screen and (min-width: $breakpoint-mobile) and (max-width: $breakpoint-tablet) {
            font-size: 1.35rem;
          }
        }
      }
    }
  }
}
</style>
