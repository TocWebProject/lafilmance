<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const { t } = useI18n({
  useScope: 'local'
})

const videos = ref([
    // Add more videos as needed
    {
        title: 'YMNK- FRIENDSHIP AND BRAVERY',
        poster: 'videos/home/modal/posters/YMNK-FRIENDSHIP_AND_BRAVERY-min.png',
        description: 'Valentin Ordinateur - 2023',
        loop: 'videos/home/modal/boucles/BOUCLE-YMNK-FRIENDSHIP-AND-BRAVERY.mp4',
        videoUrl: 'videos/home/modal/videos/YMNK-FRIENDSHIP-AND-BRAVERY-1080P.mp4',
    },
    {
        title: 'DOR - VUELTA 4 "Mille Feux" (Visualizer) ft. Sancho Panch',
        poster: 'videos/home/modal/posters/DOR-VUELTA_4-min.png',
        description: 'Valentin Ordinateur - 2023',
        loop: 'videos/home/modal/boucles/BOUCLE-VUELTA.mp4',
        videoUrl: 'videos/home/modal/videos/DOR-VUELTA_4.mp4',
    },
    {
        title: 'ELAKA - FUCK',
        poster: 'videos/home/modal/posters/ELAKA-FUCK-min.png',
        description: 'Valentin Ordinateur - 2022',
        loop: 'videos/home/modal/boucles/BOUCLE-ELAKA.mp4',
        videoUrl: 'videos/home/modal/videos/ELAKA-FUCK.mp4',
    },
    {
        title: '$AFIA BAHMED SCHWARTZ - ESCAPE GAME ',
        poster: 'videos/home/modal/posters/SAFIA_BAHMED_SCHWARTZ-ESCAPE_GAME-min.png',
        description: 'Valentin Ordinateur - 2022',
        loop: 'videos/home/modal/boucles/BOUCLE-SAFIA-BAHMED-SCHWARTZ-ESCAPE-GAME.mp4',
        videoUrl: 'videos/home/modal/videos/SAFIA_BAHMED_SCHWARTZ-ESCAPE_GAME.mp4',
    },
    {
        title: 'SYDNEY VALETTE - ADIEU',
        poster: 'videos/home/modal/posters/SYDNEY_VALETTE-ADIEU-min.png',
        description: 'Valentin Ordinateur - 2022',
        loop: 'videos/home/modal/boucles/BOUCLE-SYDNEY-VALETTE-ADIEU.mp4',
        videoUrl: 'videos/home/modal/videos/SYDNEY-VALETTE-ADIEU-BIENTOT-1080P.mp4',
    },
    {
        title: 'TEASER SORTIE SINGLE L.L',
        poster: 'videos/home/modal/posters/TEASER_L.L-SPACE_JAM-min.png',
        description: 'Valentin Ordinateur - 2021',
        loop: 'videos/home/modal/videos/TEASER_L.L.mp4',
        videoUrl: 'videos/home/modal/videos/TEASER_L.L.mp4',
    },
    {
        title: 'LIL RHIZ0ME - SILVER SKIES',
        poster: 'videos/home/modal/posters/LIL_RHIZOME-SILVER_SKIES-min.png',
        description: 'Valentin Ordinateur - 2021',
        loop: 'videos/home/modal/boucles/BOUCLE-LIL-RHIZOME-SILVER-SKIES.mp4',
        videoUrl: 'videos/home/modal/videos/LIL_RHIZOME-SILVER_SKIES.mp4',
    },
    {
        title: 'JULIETTE CATROUX - SI TU SITUES',
        poster: 'videos/home/modal/posters/JULIETTE_CATROUX-SI_TU_SITUES-min.png',
        description: 'Réalisation: Valentin Ordinateur - 2020',
        loop: 'videos/home/modal/boucles/BOUCLE-JULIETTE-CATROUX-SI-TU-SITUES.mp4',
        videoUrl: 'videos/home/modal/videos/JULIETTE-CATROUX-SI-TU-SITUES-HQ-1080P.mp4',
    },
    {
        title: 'CARAMBOLAGE - WEEK END NOSTALGIE',
        poster: 'videos/home/modal/posters/CARAMBOLAGE-WEEK_END_NOSTALGIE-min.png',
        description: 'Réalisation: Valentin Ordinateur - 2020',
        loop: 'videos/home/modal/boucles/BOUCLE-CARAMBOLAGE-WEEK-END-NOSTALGIE.mp4',
        videoUrl: 'videos/home/modal/videos/CARAMBOLAGE-WEEK-END-NOSTALGIE-1080p.mp4',
    },
    {
        title: 'CARAMBOLAGE - GAUCHE DROITE',
        poster: 'videos/home/modal/posters/CARAMBOLAGE-GAUCHE_DROITE-min.png',
        description: 'Réalisation: Valentin Ordinateur - 2019',
        loop: 'videos/home/modal/boucles/BOUCLE-CARAMBOLAGE-GAUCHE-DROITE.mp4',
        videoUrl: 'videos/home/modal/videos/CARAMBOLAGE-GAUCHE_DROITE.mp4',
    },
    {
        title: 'VOYAGE AU SUD',
        poster: 'videos/home/modal/posters/VOYAGE_AU_SUD-min.png',
        description: 'Valentin Ordinateur - 2018',
        loop: 'videos/home/modal/boucles/BOUCLE-VOYAGE-AU-SUD.mp4',
        videoUrl: 'videos/home/modal/videos/VOYAGE_AU_SUD.mp4',
    },
    {
        title: 'KAVIAR SPECIAL - VORTEX ',
        poster: 'videos/home/modal/posters/KAVIA_SPECIAL-VORTEX-min.png',
        description: 'Valentin Ordinateur - 2018',
        loop: 'videos/home/modal/boucles/BOUCLE-KAVIAR-SPECIAL-VORTEX.mp4',
        videoUrl: 'videos/home/modal/videos/KS_VORTEX.mp4',
    },
    {
        title: 'DRAGSTER - GANJA WAR',
        poster: 'videos/home/modal/posters/DRAGSTER-GANJA_WAR-min.png',
        description: 'Valentin Ordinateur - 2014',
        loop: 'videos/home/modal/boucles/BOUCLE-DRAGSTER-GANJA-WAR.mp4',
        videoUrl: 'videos/home/modal/videos/DRAGSTER-GANJA_WAR.mp4',
    },
]);

let open = ref(false);
function closeTheModal() {
    open.value = false;
    showVideo.value = false;
    currentVideo.value = null;
}

const showVideo = ref(false);
const currentVideo = ref(null);

function showTheVideo(index) {
    currentVideo.value = videos.value[index];
    showVideo.value = true;
}

function closePopupVideo() {
    showVideo.value = false;
    currentVideo.value = null;
}

function movingBanners() {
    const q = gsap.utils.selector('.modal');
    const banners = q('.video-thumbnail .moving-banner');
    const tlMooving = gsap.timeline({ defaults: { clearProps: true } });
    tlMooving.to(banners, {
        ease: "linear", x: "-380%", duration: 15, repeat: -1
    }); 
}

onMounted(() => {
    movingBanners();
});

useListen('resetModalGallery', () => tlMooving.restart)

</script>

<i18n lang="json">
    {
      "en": {
        "filmmaker": "Video maker :"
      },
      "fr": {
        "filmmaker": "Réalisateur :"
      }
    }
</i18n>
      
<template id="modal-gallery">
    <div class="container">
        <button @click="open = true">
            <span aria-hidden="true">LA FILMANCE</span>
            <h1>LA FILMANCE</h1>
            <p hidden>
                La Filmance is a studio specializing in visual video art. Shooting, 3D animation, VFX, are all techniques for exploring and creating new visual forms</p>
            <span aria-hidden="true">LA FILMANCE</span>
        </button>
    </div>

    <Teleport to="body">
        <div v-if="open" class="outside" @click="closeTheModal" aria-label="Close videos gallery"></div>
        <div v-if="showVideo" class="video-popup">
            <video-player :poster="currentVideo.poster" width="1080" :src="currentVideo.videoUrl"
                class="vjs-big-play-centered" autoplay controls :volume="0.5">
            </video-player>
            <h3>{{ currentVideo.title }}</h3>
            <p>{{ currentVideo.description }}</p>
            <button class="btn-close-modal" aria-label="Close" @click="closePopupVideo">Close</button>
        </div>

        <div ref="modal" v-show="open" class="modal" v-bind:class="{ 'overflow-hidden': showVideo }">
            <button class="close-modal" aria-label="Close" v-if="open" @click="closeTheModal">
                X
            </button>
            <div class="inner-modal">
                <div v-for="(video, index) in videos" :key="index" class="video-thumbnail" @click="showTheVideo(index)">
                    <video :poster="video.poster" width="320" height="240" playsinline="true" disableremoteplayback autoplay
                        loop muted>
                        <source :src="video.loop" type="video/mp4" />
                    </video>
                    <div class="moving-banner">
                        <div class="wrapper">
                            <span class="title-video">{{ video.title }}</span>
                            <span> - {{ t('filmmaker') }} {{ video.description }} - </span>
                            <span class="title-video">{{ video.title }}</span>
                            <span> - {{ t('filmmaker') }} {{ video.description }} - </span>
                            <span class="title-video">{{ video.title }}</span>
                            <span> - {{ t('filmmaker') }} {{ video.description }} - </span>
                            <span class="title-video">{{ video.title }}</span>
                            <span> - {{ t('filmmaker') }} {{ video.description }} - </span>
                            <span class="title-video">{{ video.title }}</span>
                            <span> - {{ t('filmmaker') }} {{ video.description }} - </span>
                            <span class="title-video">{{ video.title }}</span>
                            <span> - {{ t('filmmaker') }} {{ video.description }} - </span>
                            <span class="title-video">{{ video.title }}</span>
                            <span> - {{ t('filmmaker') }} {{ video.description }} - </span>
                            <span class="title-video">{{ video.title }}</span>
                            <span> - {{ t('filmmaker') }} {{ video.description }} - </span>
                            <span class="title-video">{{ video.title }}</span>
                            <span> - {{ t('filmmaker') }} {{ video.description }} - </span>
                            <span class="title-video">{{ video.title }}</span>
                            <span> - {{ t('filmmaker') }} {{ video.description }} - </span>
                            <span class="title-video">{{ video.title }}</span>
                            <span> - {{ t('filmmaker') }} {{ video.description }} - </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style lang="scss" scoped>
.container {
    position: absolute;
    top: 59%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: $breakpoint-mobile) {
        top: 56%;
        text-align: center;
        width: 95%;
    }

    @media screen and (min-width: $breakpoint-mobile) and (max-width: $breakpoint-tablet) {
        top: 63%;
        text-align: center;
        width: 100%;
    }

    button {
        font-family: 'DrukText-HeavyItalic', Helvetica, Arial, Verdana, Tahoma, sans-serif;
        font-size: 6.5rem;
        cursor: pointer;
        margin-top: 1.4rem;
        position: relative;
        color: white;
        text-shadow: 0.05em 0 0 #2c2d2d, -0.03em -0.04em 0 #000000,
            0.025em 0.04em 0 #f6f6f6;
        animation: glitch 725ms infinite;

        @media screen and (max-width: $breakpoint-mobile) {
            font-size: 4rem
        }

        span {
            position: absolute;
            top: 0;
            left: 0;
        }

        span:first-child {
            animation: glitch 500ms infinite;
            clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
            transform: translate(-0.04em, -0.03em);
            opacity: 0.75;
        }

        span:last-child {
            animation: glitch 375ms infinite;
            clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
            transform: translate(0.04em, 0.03em);
            opacity: 0.75;
        }

        &:hover {
            color: rgb(78, 76, 78);
            cursor: pointer;
        }

        @keyframes glitch {
            0% {
                text-shadow: 0.05em 0 0 $theme-color, -0.03em -0.04em 0 #2c2d2d,
                    0.025em 0.04em 0 #dfdfdf;
            }

            15% {
                text-shadow: 0.05em 0 0 gray, -0.03em -0.04em 0 #2c2d2d,
                    0.025em 0.04em 0 #000000;
            }

            16% {
                text-shadow: -0.05em -0.025em 0 gray, 0.025em 0.035em 0 #2c2d2d,
                    -0.05em -0.05em 0 #000000;
            }

            49% {
                text-shadow: -0.05em -0.025em 0 gray, 0.025em 0.035em 0 #2c2d2d,
                    -0.05em -0.05em 0 #000000;
            }

            50% {
                text-shadow: 0.05em 0.035em 0 $theme-color, 0.03em 0 0 #2c2d2d,
                    0 -0.04em 0 #000000;
            }

            99% {
                text-shadow: 0.05em 0.035em 0 gray, 0.03em 0 0 #2c2d2d,
                    0 -0.04em 0 #000000;
            }

            100% {
                text-shadow: -0.05em 0 0 gray, -0.025em -0.04em 0 #2c2d2d,
                    -0.04em -0.025em 0 #000000;
            }
        }
    }
}

.video-popup {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .video-js {
        max-width: 65vw !important;
        display: flex;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: $breakpoint-mobile) {
            max-width: 100vw !important;
        }

        @media screen and (min-width: $breakpoint-mobile) and (max-width: $breakpoint-tablet) {
            max-width: 80vw !important;
        }
    }

    .btn-close-modal {
        position: absolute;
        top: 25px;
        right: 25px;
        cursor: pointer;
        z-index: 10;
        color: white;
        font-size: 2.25rem;
        font-family: 'DrukText-HeavyItalic', sans-serif;

        &:hover {
            color: $theme-color;
        }
    }
}

.outside {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    min-width: 100vw;
    z-index: 10;
}

.overflow-hidden {
    overflow-y: hidden !important;
}

.modal {
    border: 2px white solid;
    font-family: 'DrukText-Bold', Helvetica, Arial, Verdana, Tahoma, sans-serif;
    background-color: black;
    z-index: 11;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    width: 85vw;
    height: 82vh;
    overflow: hidden;

    @media screen and (max-width: $breakpoint-mobile) {
        width: 90vw;
        height: 78vh;
    }

    .close-modal {
        position: absolute;
        z-index: 12;
        top: 10px;
        right: 20px;
        background-color: transparent;
        color: white;
        padding: 5px;
        font-size: 2rem;
        cursor: pointer;
        z-index: 20;

        &:hover {
            color: $theme-color;
        }
    }

    .inner-modal {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        /*
        *  Modal Scrollbar style
        */
        &::-webkit-scrollbar-track {
            border: 2px solid #000000;
            background-color: #F5F5F5;
        }

        &::-webkit-scrollbar {
            width: 10px;
            background-color: #F5F5F5;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #000000;
        }

        @media screen and (max-width: $breakpoint-mobile) {
            width: 90vw;
            height: 78vh;
        }

        .video-thumbnail {
            cursor: pointer;
            width: 33.3%;
            height: auto;
            position: relative;
            border: 1px white solid;
            overflow: hidden;

            // styles spécifiques pour la tablette
            @media screen and (max-width: $breakpoint-tablet) {
                width: 50%;
            }

            // styles spécifiques pour le mobile
            @media screen and (max-width: $breakpoint-mobile) {
                width: 100%;
            }

            video {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .moving-banner {
                position: absolute;
                bottom: 0;
                width: 100%;
                height: auto;

                .wrapper {
                    height: auto;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    width: max-content;
                    background-color: black;

                    .title-video {
                        color: $theme-color;
                    }

                    span {
                        padding: 8px 2px;
                        font-size: 1.3rem;
                        color: white;
                    }
                }
            }
        }
    }
}
</style>    