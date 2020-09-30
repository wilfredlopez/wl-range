// tslint:disable-next-line:no-import-side-effect
import { WlConfig } from "../src/global/wl-config";

import { applyPolyfills, defineCustomElements } from "../loader";
import { WlWindow } from "./interfaces";

export function appInitialize(config?: WlConfig) {
  const win: WlWindow = window as any;
  const Ionic = (win.Wl = win.Wl || {});

  Ionic.config = config;
  applyPolyfills().then(() => defineCustomElements(win));
}
