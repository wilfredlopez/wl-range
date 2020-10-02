import { App, Plugin } from 'vue';

import { WlConfig } from 'wl-range';
import { appInitialize } from './app-initialize';

import { createInputComponent } from './components/inputs';

let Vue: App;

function installFunction(_Vue: App<any>, config?: WlConfig) {
  if (Vue && _Vue === Vue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('[Wl] already installed. Vue.use(Wl) should be called only once.');
    }
    return;
  }
  Vue = _Vue;
  Vue.config.isCustomElement = tag => tag.startsWith('wl-');

  // CREATE ELEMENTS HERE
  const WlRangeVue = createInputComponent('WlRangeVue', 'wl-range');
  Vue.component('wl-range-vue', WlRangeVue);
  appInitialize(config);
}

export const install: Plugin = (_Vue, config: WlConfig) => {
  installFunction(_Vue, config);

  return {
    install: (app: App, appConfig?: WlConfig) => {
      installFunction(app, appConfig);
    },
  };
};
