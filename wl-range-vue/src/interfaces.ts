import { App } from 'vue';

export interface HTMLVueElement extends HTMLElement {
  __vue__: App;
}

export interface VueWindow extends Window {
  Vue: App;
}

export interface WebpackFunction extends Function {
  cid: number;
}

export interface EsModule extends Object {
  __esModule?: boolean;
  [Symbol.toStringTag]: string;
}

export interface WlGlobal {
  config?: any;
  ael?: (elm: any, eventName: string, cb: (ev: Event) => void, opts: any) => void;
  raf?: (ts: number) => void;
  rel?: (elm: any, eventName: string, cb: (ev: Event) => void, opts: any) => void;
}

export interface WlWindow extends Window {
  Wl: WlGlobal;
}

export interface FrameworkDelegate {
  attachViewToDom(parentElement: HTMLElement, component: HTMLElement | WebpackFunction | object | App, opts?: object, classes?: string[]): Promise<HTMLElement>;
  removeViewFromDom(parentElement: HTMLElement, childElement: HTMLVueElement): Promise<void>;
}

export interface ApiCache {
  [key: string]: any;
}

export interface ProxyDelegateOptions extends Object {
  [key: string]: any;
  delegate?: FrameworkDelegate;
}
