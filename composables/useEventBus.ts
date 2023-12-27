import mitt from 'mitt'

type ApplicationEvents = {
  'resetModalGallery': 'resetModalGallery'
};

const emitter = mitt<ApplicationEvents>()

export const useEvent = emitter.emit
export const useListen = emitter.on