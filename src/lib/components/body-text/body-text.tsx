import React from 'react';
import styled from 'styled-components';

import { matchSize } from '../../utils/match-size';
import Text, { TextProps } from '../text/text';

type Ref = HTMLSpanElement;

/* eslint-disable-next-line */
export interface BodyTextProps extends TextProps {
  size: 1 | 2 | 3;
}

const StyledText = styled(Text)<BodyTextProps>(({ theme, size = 3 }) => ({
  fontWeight: matchSize(
    {
      1: theme.typography.fontWeight.semiBold,
      2: theme.typography.fontWeight.medium,
      3: theme.typography.fontWeight.regular,
    },
    size
  ),
  fontSize: theme.scale('1.3rem'),
  lineHeight: theme.scale('2rem'),
}));

export const BodyText = React.forwardRef<Ref, BodyTextProps>(function BodyText(
  props: BodyTextProps,
  ref
) {
  return <StyledText ref={ref} {...props} />;
});

export default BodyText;
