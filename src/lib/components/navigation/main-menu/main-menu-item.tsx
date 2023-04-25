import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const NavItem = styled.li<{ selected?: boolean }>(({ theme, selected }) =>
  theme.withMedia({
    display: 'flex',
    color: theme.styleguideColors.contentTertiary,
    padding: ['16px 32px', '16px 48px', '0 12px', '0 16px'],
    width: '100%',
    ...(selected && {
      backgroundColor: theme.styleguideColors.fillGreen,
    }),
  })
);

export interface MainMenuItemProps {
  selected?: boolean;
}

export const MainMenuItem = ({
  selected = false,
  children,
}: PropsWithChildren<MainMenuItemProps>) => {
  return <NavItem selected={selected}>{children}</NavItem>;
};
