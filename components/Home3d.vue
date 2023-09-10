<script setup lang="ts">
import { Scene, PerspectiveCamera, WebGLRenderer, AmbientLight } from 'three'
import { Ref } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

let renderer: WebGLRenderer
let controls: OrbitControls
const experience: Ref<HTMLCanvasElement | null> = ref(null)
const { width, height } = useWindowSize()
const aspectRatio = computed(() => width.value / height.value)
// const bgColor = new Color('#647AA3')
const scene = new Scene()

// Mouse position const for Mouse animation
const mouseX: Ref<number> = ref(0);
const mouseY: Ref<number> = ref(0);
const windowHalfX: number = window.innerWidth / 2;
const windowHalfY: number = window.innerHeight / 2;

//Camera
const camera = new PerspectiveCamera(9, aspectRatio.value, 0.3, 5000)
if (window.innerWidth > 560) {
  camera.position.set(16, 1, 0)
} else {
  camera.position.set(23, 1, 0)
}
scene.add(camera)

// Light
const ambientLight = new AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// Gltf Object
const glfLoader = new GLTFLoader()
glfLoader.load('/gltf/home/test8/logogltf.gltf', gltf => {
  scene.add(gltf.scene);
});
scene.position.set(0, 0, 0)

// Methods
function updateCamera() {
  camera.aspect = aspectRatio.value
  camera.updateProjectionMatrix()
}

function updateRenderer() {
  renderer.setSize(width.value, height.value)
  // For mouse animation on gltf
  // camera.position.z += (mouseX.value - camera.position.x) * 0.001;
  // camera.position.y += (-mouseY.value - camera.position.y) * 0.0001;
  camera.lookAt(scene.position);
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
  window.addEventListener('mousemove', onDocumentMouseMove);
  setRenderer()
  loop()
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onDocumentMouseMove);
});

// Fonction pour gérer l'événement "mousemove"
const onDocumentMouseMove = (event: MouseEvent) => {
  mouseX.value = (event.clientX - windowHalfX) / 10;
  mouseY.value = (event.clientY - windowHalfY) / 10;
};

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
