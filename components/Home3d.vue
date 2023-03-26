<script setup lang="ts">
import { Scene, PerspectiveCamera, WebGLRenderer, Color, Fog, AmbientLight } from 'three'
import { Ref } from 'vue'
import { useWindowSize } from '@vueuse/core'
//import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


let gltfObject: GLTFLoader | null = null;
let renderer: WebGLRenderer
let controls: OrbitControls
const experience: Ref<HTMLCanvasElement | null> = ref(null)
const { width, height } = useWindowSize()
const aspectRatio = computed(() => width.value / height.value)

const bgColor = new Color('#647AA3')
const scene = new Scene()

//scene.fog = new Fog(bgColor, 0.1, 75)
//scene.background = bgColor

const camera = new PerspectiveCamera(9, aspectRatio.value, 0.3, 1000)
camera.position.set(20, 1, 0)
scene.add(camera)


const ambientLight = new AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const glfLoader = new GLTFLoader()


glfLoader.load('/gltf/home/test8/logogltf.gltf', gltf => {
  scene.add(gltf.scene);
});

function updateCamera() {
  camera.aspect = aspectRatio.value
  camera.updateProjectionMatrix()
}

function updateRenderer() {
  renderer.setSize(width.value, height.value)
  renderer.render(scene, camera)
}

function setRenderer() {
  if (experience.value) {
    renderer = new WebGLRenderer({ canvas: experience.value, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 10))
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    updateRenderer()
  }
}

watch(aspectRatio, () => {
  updateCamera()
  updateRenderer()
})

onMounted(() => {
  setRenderer()
  loop()
})

const loop = () => {
  controls.update()
  updateRenderer()
  requestAnimationFrame(loop)
}

</script>

<template>
  <div class="home3d">
    <div class="onHover"></div>
    <canvas ref="experience" />
  </div>
</template>

<style lang="scss" scoped>
.home3d {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  &:hover {
    cursor: grab;
  }
}
</style>
