import { defineCustomElements } from 'wl-range/loader';
export {
  Gesture,
  GestureConfig,
  GestureDetail,
  createGesture,
  setupConfig,
  RangeChangeEventDetail,
  RangeValue,
} from 'wl-range';

import { RangeChangeEventDetail } from 'wl-range';

export type RangeChangeEvent = CustomEvent<RangeChangeEventDetail>;

// All Components
export * from './proxies';
// Utils
export { isPlatform, getPlatforms, getConfig } from './utils';
// WL Animations
export { RouterDirection } from './hrefprops';
// createControllerComponent
// export { WlButton } from './WlButton';

defineCustomElements(window);
