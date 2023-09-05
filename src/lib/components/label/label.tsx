import React from 'react';
import styled from 'styled-components';

import { matchSize } from '../../utils/match-size';
import Text, { TextProps } from '../text/text';

type Transform = 'uppercase' | 'capitalize' | 'unset';

/* eslint-disable-next-line */
export interface LabelProps extends TextProps {
  size: 1 | 2;
  transform?: Transform;
  lineHeight?: 'xs' | 'sm';
}

const StyledText = styled(Text)<LabelProps>(
  ({ theme, size = 2, transform = 'unset', lineHeight = 'sm' }) => ({
    fontWeight: matchSize(
      {
        1: theme.typography.fontWeight.bold,
        2: theme.typography.fontWeight.medium,
      },
      size
    ),
      lineHeight: matchSize(
          {
              sm: '1.5rem',
              xs: '1.25rem',
          },
          lineHeight
      ),
    fontSize: '0.625rem',
    textTransform: transform,
  })
);

export function Label(props: LabelProps) {
  return <StyledText {...props} />;
}

export default Label;
