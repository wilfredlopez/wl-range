import React from 'react';

import { WlReactProps } from './WlReactProps';

import { createForwardRef } from './utils';
import { WlButtonInner } from './inner-proxies';
import { Components as WlComponents } from 'wl-range';
import { RouterDirection } from './hrefprops';

interface WlButtonProps extends Partial<WlComponents.WlRange> {
  ariaLabel?: string;
  name?: string;
  ref?: React.Ref<any>;
  routerLink?: string;
  routerDirection?: RouterDirection;
}

type InternalProps = WlButtonProps & {
  forwardedRef?: React.RefObject<HTMLWlRangeElement>;
};

class WlButtonContiner extends React.PureComponent<InternalProps> {
  constructor(props: InternalProps) {
    super(props);
  }

  render() {
    const { ...rest } = this.props;

    return (
      <WlButtonInner ref={this.props.forwardedRef} {...rest}>
        {this.props.children}
      </WlButtonInner>
    );
  }
}

export const WlButton = createForwardRef<
  WlButtonProps & WlReactProps,
  HTMLWlRangeElement
>(WlButtonContiner, 'WlRange');
