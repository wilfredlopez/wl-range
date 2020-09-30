import React from 'react';
import { WlRange } from 'wl-range-react';

interface Props {}

const ShowCase = (props: Props) => {
  const [value, setValue] = React.useState(0);

  function handleChange(val: number) {
    setValue(val);
  }
  return (
    <React.Fragment>
      <div className="container">
        <h2 className="text-center">Range {value}</h2>
        <WlRange
          translate="no"
          snaps
          step={1}
          min={1}
          max={10}
          color="tertiary"
          pin
          value={value}
          onWlChange={e => {
            if (e.detail.value) {
              handleChange(e.detail.value as number);
            }
          }}
        >
          <div slot="start">
            <strong>0</strong>
          </div>
          <div slot="end">
            <strong>10</strong>
          </div>
        </WlRange>
      </div>
    </React.Fragment>
  );
};

export default ShowCase;
