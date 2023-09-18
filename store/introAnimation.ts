import { defineStore } from 'pinia'

export const useIntroAnimationStore = defineStore({
  id: 'intro-animation',
  state: () => {
    return {
      animation: false,
    }
  },
  actions: {
    setAnimationToDone() {
      this.$state.animation = true;
    },
  },
  getters: {
    introAnimation: state => state.animation,
  },
})