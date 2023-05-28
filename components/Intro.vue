<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

    const screen1 = ref(null);
    const screen2 = ref(null);
    const introContainer = ref(null);

    function animationTransition() {
      const tlTransition = gsap.timeline();
      tlTransition.to(screen2.value, {
        ease: "Power1.easeInOut", x: "105%", duration: 1.3, delay: 1.3, zIndex: -10,
      });
      tlTransition.to(screen1.value, {
        ease: "Power1.easeInOut", x: "-105%", duration: 1.3 ,zIndex: -10
      }, "-=1.3");

      tlTransition.to(introContainer.value, {
        zIndex: -10,
      })

      // Store this animation as false to have only once this animation
      //this.$store.commit('introAnim/introIsDone');
    }

    onMounted(() => {
      animationTransition();
    });

</script>
<template>
    <div ref="introContainer" class="intro-container">
        <div ref="screen1" class="screen1">
            <video ref="videoPlayer" width="320" height="240" poster="\video\home\background\poster_intro_2-min.png" autoplay loop  muted>
                <source src="\videos\home\background\production_ID_4990242.mp4"  type="video/mp4" />
            </video>
        </div>
        <div ref="screen2" class="screen2">
            <video ref="videoPlayer" width="320" height="240" poster="\video\home\background\poster_intro_1-min.png" autoplay loop  muted>
                <source src="\videos\home\background\production_ID_4990242.mp4"  type="video/mp4" />
            </video>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.intro-container {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100svh;
    z-index:10;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    .screen1, .screen2 {
        position: relative;
        background-color: black;
        video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
        
    .screen1 {
        width: 100%;
        grid-area: 1 / 1 / 2 / 2;
    }
    .screen2 { 
        grid-area: 1 / 2 / 2 / 3; 
    }
}
    
</style>
