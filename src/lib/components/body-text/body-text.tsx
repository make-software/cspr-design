import React from 'react';
import styled from 'styled-components';

import { matchSize } from '../../utils/match-size';
import Text, { TextProps } from '../text/text';

type Ref = HTMLSpanElement;

/* eslint-disable-next-line */
export interface BodyTextProps extends TextProps {
  size: 1 | 2 | 3;
  scale?: 'xs' | 'sm' | 'md' | 'lg';
}

const StyledText = styled(Text)<BodyTextProps>(
  ({ theme, size = 3, scale = 'sm' }) => ({
    fontWeight: matchSize(
      {
        1: theme.typography.fontWeight.semiBold,
        2: theme.typography.fontWeight.medium,
        3: theme.typography.fontWeight.regular,
      },
      size
    ),
    fontSize: matchSize(
      {
        xs: '0.813rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
      },
      scale
    ),
    lineHeight: '1.5rem',
  })
);

export const BodyText = React.forwardRef<Ref, BodyTextProps>(function BodyText(
  props: BodyTextProps,
  ref
) {
  return <StyledText ref={ref} {...props} />;
});

export default BodyText;
