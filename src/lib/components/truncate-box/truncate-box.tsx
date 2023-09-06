import React from 'react';
import styled from 'styled-components';

import { BaseProps, Size } from '../../types';
import { matchSize } from '../../utils/match-size';

/* eslint-disable-next-line */
export interface TruncateBoxProps extends BaseProps {
  size?: Size;
  lineHeight?: 'xs' | 'sm';
  scale?: 'xs' | 'sm';
}

const getSize = (size: Size) =>
  matchSize(
    {
      0: 6.25,
      1: 6.25,
      2: 14.375,
      3: 21.875,
      4: 28.125,
      5: 34.375,
    },
    size
  );

const StyledTruncateBox = styled('div')<TruncateBoxProps>(
  ({ theme, size = 2, lineHeight = 'sm', scale = 'sm' }) => ({
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
      lineHeight: matchSize(
          {
              sm: '1.5rem',
              xs: '1.25rem',
          },
          lineHeight
      ),
      fontSize: matchSize(
          {
              sm: '1rem',
              xs: '0.625rem',
          },
          scale
      ),
  })
);

export const TruncateBox = React.forwardRef<HTMLDivElement, TruncateBoxProps>(
  (props, ref) => <StyledTruncateBox ref={ref} {...props} />
);

export default TruncateBox;
