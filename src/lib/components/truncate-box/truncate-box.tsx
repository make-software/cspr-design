import React from 'react';
import styled from 'styled-components';

import { BaseProps, Size } from '../../types';
import { matchSize } from '../../utils/match-size';

/* eslint-disable-next-line */
export interface TruncateBoxProps extends BaseProps {
  size?: Size;
}

const getSize = (size: Size) =>
  matchSize(
    {
      0: 10,
      1: 10,
      2: 23,
      3: 35,
      4: 45,
      5: 55,
    },
    size
  );

const StyledTruncateBox = styled('div')<TruncateBoxProps>(
  ({ theme, size = 2 }) => ({
    display: 'inline-block',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%',
    maxWidth: `${getSize(size)}em`,
    // fix for Tooltip over Truncated Text in Safari
    '&:after': {
      content: "''",
      display: 'block',
    },
  })
);

export const TruncateBox = React.forwardRef<HTMLDivElement, TruncateBoxProps>(
  (props, ref) => <StyledTruncateBox ref={ref} {...props} />
);

export default TruncateBox;
