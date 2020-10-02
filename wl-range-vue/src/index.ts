import { install } from './wl';
import { RangeChangeEventDetail } from 'wl-range';
export { RangeChangeEventDetail, RangeValue, KnobName } from 'wl-range';

export type RangeChangeEvent = CustomEvent<RangeChangeEventDetail>;

export default install;

export * from './components/inputs';
