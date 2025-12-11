import React from 'react';
import styled from 'styled-components';

import { ActivableProps } from '../../types';

import HeaderText, { HeaderTextProps } from '../header-text/header-text';

/* eslint-disable-next-line */
export interface HeaderTabMenuItemProps
  extends Omit<HeaderTextProps, 'size'>,
    ActivableProps {
  onClick?: (ev: any) => void;
}

const StyledHeaderTabMenuItem = styled(HeaderText)<ActivableProps>(
  ({ theme, active }) => ({
    cursor: 'pointer',
    color: theme.styleguideColors.contentTertiary,

    ':not(:first-of-type)': {
      marginLeft: 40,
    },

    ...(active && {
      color: theme.styleguideColors.contentPrimary,
      cursor: 'default',
    }),
  })
);

export function HeaderTabMenuItem(props: HeaderTabMenuItemProps) {
  return <StyledHeaderTabMenuItem {...props} size={2} />;
}

export default HeaderTabMenuItem;
