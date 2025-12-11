import React from 'react';
import styled from 'styled-components';

import { BaseProps, Size } from '../../types';
import { matchSize } from '../../utils/match-size';

/* eslint-disable-next-line */
export interface TruncateBoxProps extends BaseProps {
  size?: Size;
  lineHeight?: 'xs' | 'sm';
}

const getSize = (size: Size) =>
  matchSize(
      {
          0: 7.8,
          1: 10,
          2: 23,
          3: 35,
          4: 45,
          5: 55,
      },
    size
  );

const StyledTruncateBox = styled('div')<TruncateBoxProps>(
  ({ size = 2, lineHeight }) => ({
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
      lineHeight: lineHeight ? matchSize(
          {
              sm: '1.5rem',
              xs: '1.25rem',
          },
          lineHeight
      ) : 'unset',
  })
);

export const TruncateBox = React.forwardRef<HTMLDivElement, TruncateBoxProps>(
  (props, ref) => <StyledTruncateBox ref={ref} {...props} />
);

export default TruncateBox;
