import React from 'react';
import styled from 'styled-components';

import { matchSize } from '../../utils/match-size';
import Text, { TextProps } from '../text/text';

type Ref = HTMLSpanElement;

/* eslint-disable-next-line */
export interface BodyTextProps extends TextProps {
  size: 1 | 2 | 3 | 4;
  scale?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  lineHeight?: 'xs' | 'sm';
  tabIndex?: number;
}

const StyledText = styled(Text)<BodyTextProps>(
  ({ theme, size = 3, scale = 'sm', lineHeight = 'sm' }) => ({
    fontWeight: matchSize(
      {
        1: theme.typography.fontWeight.semiBold,
        2: theme.typography.fontWeight.medium,
        3: theme.typography.fontWeight.regular,
        4: theme.typography.fontWeight.light,
      },
      size
    ),
    fontSize: matchSize(
      {
        xl: '1.25rem',
        lg: '1.125rem',
        md: '1rem',
        sm: '0.875rem',
        xs: '0.813rem',
      },
      scale
    ),
    lineHeight: matchSize(
      {
        sm: '1.5rem',
        xs: '1.25rem',
      },
      lineHeight
    ),
  })
);

export const BodyText = React.forwardRef<Ref, BodyTextProps>(function BodyText(
  props: BodyTextProps,
  ref
) {
  return <StyledText ref={ref} {...props} />;
});

export default BodyText;
