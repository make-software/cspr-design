import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import FlexRow from '../../flex-row/flex-row';

const ItemContainer = styled(FlexRow)(({ theme }) => ({
  width: '100%',
  cursor: 'pointer',
  padding: '12px 24px',
  ':hover, :active': {
    background: theme.styleguideColors.fillSecondary,
  },
}));

const MenuItemWrapper = styled.li(({ theme }) =>
  theme.withMedia({
    boxSizing: 'border-box',
    display: 'flex',
    color: theme.styleguideColors.contentPrimary,
    '&:hover': {
      cursor: 'pointer',
      '> *': {
        color: [theme.styleguideColors.contentBlue],
        fill: [theme.styleguideColors.contentBlue],
        background: theme.styleguideColors.fillSecondary,
      },
    },
  })
);

interface DropdownMenuItemProps {
  onClick?: () => void;
}

export const DropdownMenuItem = (
  props: PropsWithChildren<DropdownMenuItemProps>
) => {
  return (
    <MenuItemWrapper {...props}>
      <ItemContainer>{props.children}</ItemContainer>
    </MenuItemWrapper>
  );
};
