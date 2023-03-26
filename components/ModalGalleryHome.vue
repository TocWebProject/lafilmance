<script setup>
const videos = ref([
    {
        title: 'DRAGSTER – GANJA WAR',
        description: 'DRAGSTER – GANJA WAR - Réalisation: Valentin Ordinateur - Années: 2014',
        loop: 'videos/home/modal/boucles/SNIPPET-CARAMBOLAGE-GAUCHE-DROITE-504x305.mp4',
        videoUrl: 'videos/home/modal/boucles/SNIPPET-DRAGSTER-GANJA-WAR.mp4',
    },
    {
        title: 'KAVIAR SPECIAL – VORTEX ',
        description: 'KAVIAR SPECIAL – VORTEX - Réalisation: Valentin Ordinateur - Années: 2018',
        loop: 'videos/home/modal/boucles/SNIPPET-CARAMBOLAGE-GAUCHE-DROITE-504x305.mp4',
        videoUrl: 'videos/home/modal/boucles/SNIPPET-DRAGSTER-GANJA-WAR.mp4',
    },
    {
        title: 'VOYAGE AU SUD',
        description: 'VOYAGE AU SUD - Réalisation: Valentin Ordinateur - Années: 2018',
        loop: 'videos/home/modal/boucles/SNIPPET-CARAMBOLAGE-GAUCHE-DROITE-504x305.mp4',
        videoUrl: 'videos/home/modal/boucles/SNIPPET-DRAGSTER-GANJA-WAR.mp4',
    },
    {
        title: 'CARAMBOLE – GAUCHE DROITE',
        description: 'CARAMBOLE – GAUCHE DROITE - Réalisation: Valentin Ordinateur - Année: 2019',
        loop: 'videos/home/modal/boucles/SNIPPET-CARAMBOLAGE-GAUCHE-DROITE-504x305.mp4',
        videoUrl: 'videos/home/modal/boucles/SNIPPET-DRAGSTER-GANJA-WAR.mp4',
    },
    {
        title: 'CARAMBOLE – WEEK END NOSTALGIE',
        description: 'CARAMBOLE – WEEK END NOSTALGIE - Réalisation: Valentin Ordinateur - Année: 2020',
        loop: 'videos/home/modal/boucles/SNIPPET-CARAMBOLAGE-GAUCHE-DROITE-504x305.mp4',
        videoUrl: 'videos/home/modal/boucles/SNIPPET-DRAGSTER-GANJA-WAR.mp4',
    },
    {
        title: 'JULIETTE CATROUX - SI TU SITUES',
        description: 'JULIETTE CATROUX - SI TU SITUES - Réalisation: Valentin Ordinateur - Année: 2020',
        loop: 'videos/home/modal/boucles/SNIPPET-CARAMBOLAGE-GAUCHE-DROITE-504x305.mp4',
        videoUrl: 'videos/home/modal/boucles/SNIPPET-DRAGSTER-GANJA-WAR.mp4',
    },
    {
        title: 'LIL RHIZ0ME - SILVER SKIES',
        description: 'LIL RHIZ0ME - SILVER SKIES - Réalisation: Valentin Ordinateur - Année: 2021',
        loop: 'videos/home/modal/boucles/SNIPPET-CARAMBOLAGE-GAUCHE-DROITE-504x305.mp4',
        videoUrl: 'videos/home/modal/boucles/SNIPPET-DRAGSTER-GANJA-WAR.mp4',
    },
    {
        title: 'TEASER SORTIE SINGLE L.L',
        description: 'TEASER SORTIE SINGLE L.L - Réalisation: Valentin Ordinateur - Année: 2021',
        loop: 'videos/home/modal/boucles/SNIPPET-CARAMBOLAGE-GAUCHE-DROITE-504x305.mp4',
        videoUrl: 'videos/home/modal/boucles/SNIPPET-DRAGSTER-GANJA-WAR.mp4',
    },
    {
        title: '$AFIA BAHMED SCHWARTZ',
        description: '$AFIA BAHMED SCHWARTZ – ESCAPE GAME - Réalisation: Valentin Ordinateur - Année: 2022',
        loop: 'videos/home/modal/boucles/SNIPPET-CARAMBOLAGE-GAUCHE-DROITE-504x305.mp4',
        videoUrl: 'videos/home/modal/boucles/SNIPPET-DRAGSTER-GANJA-WAR.mp4',
    },
    {
        title: 'ELAKA – FUCK',
        description: 'ELAKA – FUCK - Réalisation: Valentin Ordinateur - Année: 2022',
        loop: 'videos/home/modal/boucles/SNIPPET-CARAMBOLAGE-GAUCHE-DROITE-504x305.mp4',
        videoUrl: 'videos/home/modal/boucles/SNIPPET-DRAGSTER-GANJA-WAR.mp4',
    },
    {
        title: 'SYDNEY VALETTE – ADIEU',
        description: 'SYDNEY VALETTE – ADIEU - Réalisation: Valentin Ordinateur - Année: 2022',
        loop: 'videos/home/modal/boucles/SNIPPET-CARAMBOLAGE-GAUCHE-DROITE-504x305.mp4',
        videoUrl: 'videos/home/modal/boucles/SNIPPET-DRAGSTER-GANJA-WAR.mp4',
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
</script>
<template>
    <div class="container">
        <h1>LA FILMANCE</h1>
        <button @click="open = true">
            <span aria-hidden="true">Découvrir</span>
            Découvrir
            <span aria-hidden="true">Découvrir</span>
        </button>
    </div>

    <Teleport to="body">
        <div v-if="open" class="outside" @click="closeTheModal"></div>
        <div v-if="showVideo" class="video-popup">
            <video :src="currentVideo.videoUrl" autoplay controls></video>
            <h3>{{ currentVideo.title }}</h3>
            <p>{{ currentVideo.description }}</p>
            <button @click="closePopupVideo">Close</button>
        </div>
        <div v-show="open" class="modal" v-bind:class="{ 'overflow-hidden': showVideo }">
            <div v-for="(video, index) in videos" :key="index" class="video-thumbnail" @click="showTheVideo(index)">
                <video width="320" height="240" autoplay loop muted>
                    <source :src="video.loop" type="video/mp4" />
                </video>
                <h3>{{ video.title }}</h3>
                <p>{{ video.description }}</p>
            </div>
            <button v-if="!showVideo" @click="closeTheModal">
                X
            </button>
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
        cursor: crosshair;   
        z-index: 10;
        position: absolute;
        top: 10px;
        background-color: black;
        right: 10px;
        color: white;
        font-size: 2rem;
        font-family: 'DrukText-HeavyItalic';
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
        top: 63%;
        text-align: center;
        width: 95%;
    }

    @media screen and (max-width: $breakpoint-tablet) {
        top: 63%;
        text-align: center;
        width: 100%;
    }

    h1 {
        font-family: 'DrukText-HeavyItalic';
        font-size: 7rem;
        color: white;

        @media screen and (max-width: $breakpoint-mobile) {
            font-size: 4rem;
            width: 90%;
        }

        @media screen and (max-width: $breakpoint-tablet) { 
            font-size: 6rem;
        }
    }

    button {
        cursor: crosshair;   
        margin-top: 1.4rem;
        font-size: 2.4rem;
        position: relative;
        border-bottom: 2px white solid;
        color: white;
        font-family: 'DrukText-Bold';
        text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
            0.025em 0.04em 0 #fffc00;
        animation: glitch 725ms infinite;

        @media screen and (max-width: $breakpoint-mobile) {
            font-size: 2rem
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
            color: rgb(255, 0, 183);
            cursor: crosshair;
        }

        @keyframes glitch {
            0% {
                text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
                    0.025em 0.04em 0 #fffc00;
            }

            15% {
                text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
                    0.025em 0.04em 0 #fffc00;
            }

            16% {
                text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
                    -0.05em -0.05em 0 #fffc00;
            }

            49% {
                text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
                    -0.05em -0.05em 0 #fffc00;
            }

            50% {
                text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
                    0 -0.04em 0 #fffc00;
            }

            99% {
                text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
                    0 -0.04em 0 #fffc00;
            }

            100% {
                text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,
                    -0.04em -0.025em 0 #fffc00;
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

    border: 2px white solid;
    font-family: 'DrukText-Bold';
    background-color: black;
    z-index: 11;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    width: 86vw;
    height: 86vh;
    overflow-y: scroll;
    overflow-x: hidden;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width: $breakpoint-mobile) {
        width: 90vw;
        height: 78vh;
    }

    button {
        position: fixed;
        top: 10px;
        right: 10px;
        color: white;
        padding: 5px;
        font-size: 2rem;
        cursor: crosshair;   
    }

    .video-thumbnail {
        cursor: pointer;
        width: 33.3%;
        height: auto;
        position: relative;
        border: 1px white solid;

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

        h3 {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 0.5rem;
            margin: 0;
        }

        p {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 0.5rem;
            margin: 0;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        }

        &:hover p {
            opacity: 1;
        }
    }
}
</style>