import { PluginFunction, default as VueImport } from "vue";

import { WlConfig } from "../src/global/wl-config";
import { appInitialize } from "./app-initialize";

import { createInputComponent } from "./components/inputs";

let Vue: typeof VueImport;

export const install: PluginFunction<WlConfig> = (_Vue, config) => {
  if (Vue && _Vue === Vue) {
    if (process.env.NODE_ENV !== "production") {
      console.error("[Wl] already installed. Vue.use(Wl) should be called only once.");
    }
    return;
  }
  Vue = _Vue;
  Vue.config.ignoredElements.push(/^wl-/);

  createInputComponent("WlRangeVue", "wl-range");

  appInitialize(config);
};
