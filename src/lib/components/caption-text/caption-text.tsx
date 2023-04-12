import React from 'react';
import styled from 'styled-components';

import { matchSize } from '../../utils/match-size';
import Text, { TextProps } from '../text/text';

/* eslint-disable-next-line */
export interface CaptionTextProps extends TextProps {
  size: 1 | 2;
  lineHeight?: 1 | 2;
}

const StyledText = styled(Text)<CaptionTextProps>(({ theme, size = 2 }) => ({
  fontWeight: matchSize(
    {
      1: theme.typography.fontWeight.medium,
      2: theme.typography.fontWeight.regular,
    },
    size
  ),
  fontSize: theme.scale('1.1rem'),
  lineHeight: matchSize(
    {
      1: theme.scale('2rem'),
      2: theme.scale('1.6rem'),
    },
    size
  ),
}));

export function CaptionText(props: CaptionTextProps) {
  return <StyledText {...props} />;
}

export default CaptionText;
