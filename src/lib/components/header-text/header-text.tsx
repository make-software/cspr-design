import React from 'react';
import styled from 'styled-components';
import { Size } from '../../types';

import { matchSize } from '../../utils/match-size';
import Text, { TextProps } from '../text/text';

/* eslint-disable-next-line */
export interface HeaderTextProps extends TextProps {
  size: Size;
  scale?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const StyledText = styled(Text)<HeaderTextProps>(
  ({ theme, size = 2, scale = 'sm', monotype = false }) => ({
    fontWeight: monotype
      ? theme.typography.fontWeight.regular
      : matchSize(
          {
            0: theme.typography.fontWeight.extraBold,
            1: theme.typography.fontWeight.extraBold,
            2: theme.typography.fontWeight.bold,
            3: theme.typography.fontWeight.semiBold,
            4: theme.typography.fontWeight.semiBold,
            5: theme.typography.fontWeight.semiBold,
          },
          size
        ),
    fontSize: matchSize(
      {
        '2xl': '3.25rem',
        xl: '2.875rem',
        lg: '2.5rem',
        md: '2rem',
        sm: '1.75rem',
        xs: '1.5rem',
      },
      scale
    ),
    lineHeight: matchSize(
      {
        '2xl': '4.5rem',
        xl: '4rem',
        lg: '3.5rem',
        md: '3rem',
        sm: '2.5rem',
        xs: '1.75rem',
      },
      scale
    ),
  })
);

export function HeaderText(props: HeaderTextProps) {
  return <StyledText {...props} />;
}

export default HeaderText;
