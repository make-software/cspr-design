import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const NavItem = styled.li(({ theme }) =>
  theme.withMedia({
    display: 'flex',
    color: theme.styleguideColors.contentTertiary,
    padding: ['16px 32px', '16px 48px', '0 12px', '0 16px'],
    '&:first-child': {
      paddingLeft: ['16px 32px', '16px 48px', '0', '0'],
    },
    '&:last-child': {
      paddingRight: [undefined, undefined, '0'],
    },
  })
);

export interface MainMenuItemProps {}

export const MainMenuItem = ({
  children,
}: PropsWithChildren<MainMenuItemProps>) => {
  return <NavItem>{children}</NavItem>;
};
