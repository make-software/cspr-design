import React from 'react';
import styled from 'styled-components';

import { matchSize } from '../../utils/match-size';
import Text, { TextProps } from '../text/text';

type Transform = 'uppercase' | 'capitalize' | 'unset';

/* eslint-disable-next-line */
export interface LabelProps extends TextProps {
  size: 1 | 2;
  transform?: Transform;
}

const StyledText = styled(Text)<LabelProps>(
  ({ theme, size = 2, transform = 'unset' }) => ({
    fontWeight: matchSize(
      {
        1: theme.typography.fontWeight.bold,
        2: theme.typography.fontWeight.medium,
      },
      size
    ),
    fontSize: theme.scale('1rem'),
    textTransform: transform,
  })
);

export function Label(props: LabelProps) {
  return <StyledText {...props} />;
}

export default Label;
