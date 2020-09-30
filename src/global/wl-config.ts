import { Mode } from '../interfaces';

export interface WlConfig {
  /**
   * When it's set to `false`, disables all animation and transition across the app.
   * Can be useful to make wl smoother in slow devices, when animations can't run smoothly.
   */
  animated?: boolean;

  /**
   * When it's set to `false`, it disables all material-design ripple-effects across the app.
   * Defaults to `true`.
   */
  rippleEffect?: boolean;

  /**
   * The mode determines which platform styles to use for the whole application.
   */
  mode?: Mode;

  /**
   * Wherever wl will respond to hardware go back buttons in an Android device.
   * Defaults to `true` when wl runs in a mobile device.
   */
  hardwareBackButton?: boolean;

  /**
   * Whenever clicking the top status bar should cause the scroll to top in an application.
   * Defaults to `true` when wl runs in a mobile device.
   */
  statusTap?: boolean;

  /**
   * Overrides the default icon in all `<wl-back-button>` components.
   */
  backButtonIcon?: string;

  /**
   * Overrides the default text in all `<wl-back-button>` components.
   */
  backButtonText?: string;

  /**
   * Overrides the default icon in all `<wl-menu-button>` components.
   */
  menuIcon?: string;

  /**
   * Overrides the default menu type for all `<wl-menu>` components.
   * By default the menu type is chosen based in the app's mode.
   */
  menuType?: string;

  /**
   * Overrides the default icon in all `<wl-refresh-content>` components.
   */
  refreshingIcon?: string;

  /**
   * Global switch that disables or enables "swipe-to-go-back" gesture across all
   * `wl-nav` in your application.
   */
  swipeBackEnabled?: boolean;

  /**
   * EXPERIMENTAL: Adds a page shadow to transitioning pages on iOS. Disabled by default.
   */
  experimentalTransitionShadow?: boolean;

  // PRIVATE configs
  keyboardHeight?: number;
  inputShims?: boolean;
  scrollPadding?: boolean;
  inputBlurring?: boolean;
  scrollAssist?: boolean;
  hideCaretOnScroll?: boolean;

  // INTERNAL configs
  persistConfig?: boolean;
  _forceStatusbarPadding?: boolean;
  _testing?: boolean;
  _zoneGate?: (h: () => any) => any;
}

export const setupConfig = (config: WlConfig) => {
  const win = window as any;
  const Wl = win.Wl;
  if (Wl && Wl.config && Wl.config.constructor.name !== 'Object') {
    console.error('wl config was already initialized');
    return;
  }
  win.Wl = win.Wl || {};
  win.Wl.config = {
    ...win.Wl.config,
    ...config,
  };
  return win.Wl.config;
};

export const getMode = (): Mode => {
  const win = window as any;
  const config = win && win.Wl && win.Wl.config;
  if (config) {
    if (config.mode) {
      return config.mode;
    } else {
      return config.get('mode');
    }
  }
  return 'md';
};
