import { defineCustomElements } from 'wl-range/loader';
export {
  Gesture,
  GestureConfig,
  GestureDetail,
  createGesture,
  setupConfig,
} from 'wl-range';

// All Components
export * from './proxies';
export { WlPage } from './WlPage';
// Utils
export { isPlatform, getPlatforms, getConfig } from './utils';
// WL Animations
export { RouterDirection } from './hrefprops';
// createControllerComponent
// export { WlButton } from './WlButton';

defineCustomElements(window);
