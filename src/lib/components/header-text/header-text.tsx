import React from 'react';
import styled from 'styled-components';
import { Size } from '../../types';

import { matchSize } from '../../utils/match-size';
import Text, { TextProps } from '../text/text';

/* eslint-disable-next-line */
export interface HeaderTextProps extends TextProps {
  size: Size;
}

const StyledText = styled(Text)<HeaderTextProps>(
  ({ theme, size = 2, monotype = false }) => ({
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
        0: theme.scale('3.2rem'),
        1: theme.scale('2.8rem'),
        2: theme.scale('2.4rem'),
        3: theme.scale('2.4rem'),
        4: theme.scale('2rem'),
        5: theme.scale('1.8rem'),
      },
      size
    ),
    lineHeight: matchSize(
      {
        0: theme.scale('4.8rem'),
        1: theme.scale('4rem'),
        2: theme.scale('2.8rem'),
        3: theme.scale('2.8rem'),
        4: theme.scale('2rem'),
        5: theme.scale('2.4rem'),
      },
      size
    ),
  })
);

export function HeaderText(props: HeaderTextProps) {
  return <StyledText {...props} />;
}

export default HeaderText;
