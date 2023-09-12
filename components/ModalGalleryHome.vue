<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const videos = ref([
    {
        title: 'DRAGSTER - GANJA WAR',
        description: 'DRAGSTER - GANJA WAR - Réalisation: Valentin Ordinateur - Années: 2014',
        loop: 'videos/home/modal/boucles/BOUCLE-DRAGSTER-GANJA-WAR.mp4',
        videoUrl: 'videos/home/modal/videos/DRAGSTER-GANJA_WAR.mp4',
    },
    {
        title: 'KAVIAR SPECIAL - VORTEX ',
        description: 'KAVIAR SPECIAL - VORTEX - Réalisation: Valentin Ordinateur - Années: 2018',
        loop: 'videos/home/modal/boucles/BOUCLE-KAVIAR-SPECIAL-VORTEX.mp4',
        videoUrl: 'videos/home/modal/videos/KS_VORTEX.mp4',
    },
    {
        title: 'VOYAGE AU SUD',
        description: 'VOYAGE AU SUD - Réalisation: Valentin Ordinateur - Années: 2018',
        loop: 'videos/home/modal/boucles/BOUCLE-VOYAGE-AU-SUD.mp4',
        videoUrl: 'videos/home/modal/videos/VOYAGE_AU_SUD.mp4',
    },
    {
        title: 'CARAMBOLE - GAUCHE DROITE',
        description: 'CARAMBOLE - GAUCHE DROITE - Réalisation: Valentin Ordinateur - Année: 2019',
        loop: 'videos/home/modal/boucles/BOUCLE-CARAMBOLAGE-GAUCHE-DROITE.mp4',
        videoUrl: 'videos/home/modal/videos/CARAMBOLAGE-GAUCHE_DROITE.mp4',
    },
    {
        title: 'CARAMBOLE - WEEK END NOSTALGIE',
        description: 'CARAMBOLE - WEEK END NOSTALGIE - Réalisation: Valentin Ordinateur - Année: 2020',
        loop: 'videos/home/modal/boucles/BOUCLE-CARAMBOLAGE-WEEK-END-NOSTALGIE.mp4',
        videoUrl: 'videos/home/modal/videos/CARAMBOLAGE-WEEK_END_NOSTALGIE.mp4',
    },
    {
        title: 'JULIETTE CATROUX - SI TU SITUES',
        description: 'JULIETTE CATROUX - SI TU SITUES - Réalisation: Valentin Ordinateur - Année: 2020',
        loop: 'videos/home/modal/boucles/BOUCLE-JULIETTE-CATROUX-SI-TU-SITUES.mp4',
        videoUrl: 'videos/home/modal/videos/JULIETTE_CATROUX-si_tu_situes.mp4',
    },
    {
        title: 'LIL RHIZ0ME - SILVER SKIES',
        description: 'LIL RHIZ0ME - SILVER SKIES - Réalisation: Valentin Ordinateur - Année: 2021',
        loop: 'videos/home/modal/boucles/BOUCLE-LIL-RHIZOME-SILVER-SKIES.mp4',
        videoUrl: 'videos/home/modal/videos/LIL_RHIZOME-SILVER_SKIES.mp4',
    },
    {
        title: 'TEASER SORTIE SINGLE L.L',
        description: 'TEASER SORTIE SINGLE L.L - Réalisation: Valentin Ordinateur - Année: 2021',
        // Mauvaise loop
        loop: 'videos/home/modal/boucles/BOUCLE-JULIETTE-CATROUX-SI-TU-SITUES.mp4',
        videoUrl: 'videos/home/modal/videos/TEASER_L.L.mp4',
    },
    {
        title: '$AFIA BAHMED SCHWARTZ',
        description: '$AFIA BAHMED SCHWARTZ - ESCAPE GAME - Réalisation: Valentin Ordinateur - Année: 2022',
        loop: 'videos/home/modal/boucles/BOUCLE-SAFIA-BAHMED-SCHWARTZ-ESCAPE-GAME.mp4',
        videoUrl: 'videos/home/modal/videos/SAFIA_BAHMED_SCHWARTZ-ESCAPE_GAME.mp4',
    },
    {
        title: 'ELAKA - FUCK',
        description: 'ELAKA - FUCK - Réalisation: Valentin Ordinateur - Année: 2022',
        loop: 'videos/home/modal/boucles/BOUCLE-ELAKA.mp4',
        videoUrl: 'videos/home/modal/videos/ELAKA-FUCK.mp4',
    },
    {
        title: 'SYDNEY VALETTE - ADIEU',
        description: 'SYDNEY VALETTE - ADIEU - Réalisation: Valentin Ordinateur - Année: 2022',
        loop: 'videos/home/modal/boucles/BOUCLE-SYDNEY-VALETTE-ADIEU.mp4',
        videoUrl: 'videos/home/modal/videos/SYDNEY_VALETTE-ADIEU.mp4',
    },
    {
        title: 'DOR - VUELTA 4 "Mille Feux" (Visualizer) ft. Sancho Panch',
        description: 'DOR - VUELTA 4 "Mille Feux" (Visualizer) ft. Sancho Panch - Réalisation: Valentin Ordinateur - Année: 2023',
        loop: 'videos/home/modal/boucles/BOUCLE-VUELTA.mp4',
        videoUrl: 'videos/home/modal/videos/DOR-VUELTA_4_\'Mille_Feux\'_(Visualizer)_ft._Sancho_Pancho.mp4',
    },
    // Add more videos as needed
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

    const tlMooving = gsap.timeline();
    tlMooving.to(banners, {
        ease: "linear", x: "-1000%", duration: 55, repeat: -1
    });
}

onMounted(() => {
    movingBanners();
});



</script>
<template>
    <div class="container">
        <button @click="open = true">
            <span aria-hidden="true">LA FILMANCE</span>
            <h1>LA FILMANCE</h1>
            <span aria-hidden="true">LA FILMANCE</span>
        </button>
    </div>

    <Teleport to="body">
        <div v-if="open" class="outside" @click="closeTheModal"></div>
        <div v-if="showVideo" class="video-popup">
            <video-player
 :core="HLSCore" :src="currentVideo.videoUrl" autoplay muted controls>
            </video-player>
            <h3>{{ currentVideo.title }}</h3>
            <p>{{ currentVideo.description }}</p>
            <button @click="closePopupVideo">Close</button>
        </div>

        <div ref="modal" v-show="open" class="modal" v-bind:class="{ 'overflow-hidden': showVideo }">
            <button class="close-modal" v-if="open" @click="closeTheModal">
                X
            </button>

            <div class="inner-modal">
                <div v-for="(video, index) in videos" :key="index" class="video-thumbnail" @click="showTheVideo(index)">
                    <video poster="\videos\home\modal\boucles\test_poster_vignette-min.png" width="320" height="240" playsinline="true" disableremoteplayback autoplay loop muted>
                        <source :src="video.loop" type="video/mp4" />
                    </video>
                    <div class="moving-banner">
                        <div class="wrapper">
                            <span>{{ video.title }} -</span>
                            <span>{{ video.description }} -</span>
                            <span>{{ video.title }} -</span>
                            <span>{{ video.description }} -</span>
                            <span>{{ video.title }} -</span>
                            <span>{{ video.description }} -</span>
                            <span>{{ video.title }} -</span>
                            <span>{{ video.description }} -</span>
                            <span>{{ video.title }} -</span>
                            <span>{{ video.description }} -</span>
                            <span>{{ video.title }} -</span>
                            <span>{{ video.description }} -</span>
                            <span>{{ video.title }} -</span>
                            <span>{{ video.description }} -</span>
                            <span>{{ video.title }} -</span>
                            <span>{{ video.description }} -</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </Teleport>
</template>

<style lang="scss" scoped>
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

    video {
        max-width: 100%;
        max-height: 100%;
    }

    button {
        position: absolute;
        top: 25px;
        right: 25px;
        cursor: crosshair;
        z-index: 10;
        color: white;
        font-size: 2rem;
        font-family: 'DrukText-HeavyItalic', sans-serif;
    }
}

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
        cursor: crosshair;
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
            cursor: crosshair;
        }

        @keyframes glitch {
            0% {
                text-shadow: 0.05em 0 0 gray, -0.03em -0.04em 0 #2c2d2d,
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
                text-shadow: 0.05em 0.035em 0 gray, 0.03em 0 0 #2c2d2d,
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
        cursor: crosshair;
        z-index: 20;
    }

    .inner-modal {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: auto;

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

        display: flex;
        flex-wrap: wrap;
        justify-content: center;

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