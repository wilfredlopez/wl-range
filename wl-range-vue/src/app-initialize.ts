// tslint:disable-next-line:no-import-side-effect
import { WlConfig } from "wl-range";

import { applyPolyfills, defineCustomElements } from "wl-range/loader";
import { WlWindow } from "./interfaces";

export function appInitialize(config?: WlConfig) {
  const win: WlWindow = window as any;
  const Ionic = (win.Wl = win.Wl || {});

  Ionic.config = config;
  applyPolyfills().then(() => defineCustomElements(win));
}
