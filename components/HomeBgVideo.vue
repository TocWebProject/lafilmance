<script setup>
  const videoPlayer = ref(null)

  onActivated(() => {
    if (videoPlayer.value.paused) {
    videoPlayer.value.play()
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
      <video ref="videoPlayer" width="320" height="240" autoplay loop muted>
        <source src="\videos\home\background\lafilmance-2-resize.mp4"  type="video/mp4" />
      </video>
    </div>
  </template>
  
<style scoped>
video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1; 
}
</style>