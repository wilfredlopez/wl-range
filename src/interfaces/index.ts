export * from '../components/wl-range/RangeInterface';
export type Mode = 'ios' | 'md';

export type PredefinedColors = 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'light' | 'medium' | 'dark';

export interface StyleEventDetail {
  [styleName: string]: boolean;
}

export interface GestureConfig {
  el: Node;
  disableScroll?: boolean;

  direction?: 'x' | 'y';
  gestureName: string;
  gesturePriority?: number;
  passive?: boolean;
  maxAngle?: number;
  threshold?: number;

  canStart?: GestureCallback;
  onWillStart?: (_: GestureDetail) => Promise<void>;
  onStart?: GestureCallback;
  onMove?: GestureCallback;
  onEnd?: GestureCallback;
  notCaptured?: GestureCallback;
}

export interface Gesture {
  enable(enable?: boolean): void;
  destroy(): void;
}
export interface GestureDetail {
  type: string;
  startX: number;
  startY: number;
  startTime: number;
  currentX: number;
  currentY: number;
  velocityX: number;
  velocityY: number;
  deltaX: number;
  deltaY: number;
  currentTime: number;
  event: UIEvent;
  data?: any;
}

export type GestureCallback = (detail: GestureDetail) => boolean | void;

export type Side = 'start' | 'end';
