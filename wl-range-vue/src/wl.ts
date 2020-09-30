import { App, Plugin } from 'vue';

import { WlConfig } from 'wl-range';
import { appInitialize } from './app-initialize';

import { createInputComponent } from './components/inputs';

let Vue: App;

export const install: Plugin = (_Vue, config: WlConfig) => {
  if (Vue && _Vue === Vue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('[Wl] already installed. Vue.use(Wl) should be called only once.');
    }
    return;
  }
  Vue = _Vue;
  Vue.config.isCustomElement = tag => tag.startsWith('wl-');

  createInputComponent('WlRangeVue', 'wl-range');

  appInitialize(config);
};
