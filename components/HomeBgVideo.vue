<script setup>
const videoPlayer = ref(null);

onActivated(() => {
  if (videoPlayer.value.paused) {
    videoPlayer.value.play();
  }
});

/*
  const isPlaying = ref(false)

  function togglePlay() {
    isPlaying.value = !isPlaying.value
    if (isPlaying.value) {
      videoPlayer.value.play()
    } else {
      videoPlayer.value.pause()
    }
  }
  */
</script>
<template>
  <div class="video-container">
    <video ref="videoPlayer" width="320" playsinline="true" disableremoteplayback height="240" poster="\videos\home\background\poster_bg_video-min.png" autoplay loop muted>
      <source src="\videos\home\background\background-clip-la-filmance-comp-resize.mp4" type="video/mp4" />
      <source src="\videos\home\background\background-clip-la-filmance-comp-resize.webm" type="video/webm" />
    </video>
  </div>
</template>

<style  lang="scss" scoped>
video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  z-index: -1;
}
</style>
