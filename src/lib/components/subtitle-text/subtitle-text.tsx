import React from 'react';
import styled from 'styled-components';

import { matchSize } from '../../utils/match-size';
import Text, { TextProps } from '../text/text';

type Ref = HTMLSpanElement;

/* eslint-disable-next-line */
export interface SubtitleTextProps extends TextProps {
  size: 1 | 2 | 3;
  scale?: 'md' | 'lg';
}

const StyledText = styled(Text)<SubtitleTextProps>(
  ({ theme, size, scale = 'md', monotype = false }) => ({
    fontWeight: monotype
      ? theme.typography.fontWeight.regular
      : matchSize(
          {
            1: theme.typography.fontWeight.semiBold,
            2: theme.typography.fontWeight.regular,
            3: theme.typography.fontWeight.light,
          },
          size
        ),
    fontSize: matchSize(
      {
        lg: '1.5rem',
        md: '1.25rem',
      },
      scale
    ),
    lineHeight: '2rem',
      '&:where(h1, h2, h3, h4, h5, h6)': {
          margin: 0,
      },
  })
);

export const SubtitleText = React.forwardRef<Ref, SubtitleTextProps>(
  (props: SubtitleTextProps, ref) => {
    return <StyledText ref={ref} {...props} />;
  }
);

export default SubtitleText;
