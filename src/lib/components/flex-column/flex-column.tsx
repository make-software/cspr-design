import React from 'react';

import FlexBox, { FlexBoxProps } from '../flex-box/flex-box';

/* eslint-disable-next-line */
export interface FlexColumnProps extends FlexBoxProps {}

export const FlexColumn = React.forwardRef<HTMLDivElement, FlexColumnProps>(
  (props, ref) => <FlexBox ref={ref} direction="column" {...props} />
);

export default FlexColumn;
