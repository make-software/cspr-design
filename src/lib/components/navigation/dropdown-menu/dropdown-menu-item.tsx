import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import FlexRow from '../../flex-row/flex-row';

const ItemContainer = styled(FlexRow)<{ padding?: string }>(
  ({ theme, padding }) => ({
    width: '100%',
    cursor: 'pointer',
    padding: padding ?? '12px 16px',
    ':hover, :active': {
      borderRadius: theme.borderRadius.base,
      background: theme.styleguideColors.fillSecondary,
    },
  }),
);

const MenuItemWrapper = styled.li(({ theme }) =>
  theme.withMedia({
    boxSizing: 'border-box',
    display: 'flex',
    color: theme.styleguideColors.contentPrimary,
    '&:hover': {
      cursor: 'pointer',
      borderRadius: theme.borderRadius.base,
      '> *': {
        color: [theme.styleguideColors.contentBlue],
        fill: [theme.styleguideColors.contentBlue],
        background: theme.styleguideColors.fillSecondary,
      },
    },
  }),
);

interface DropdownMenuItemProps {
  onClick?: () => void;
  padding?: string;
}

export const DropdownMenuItem = (
  props: PropsWithChildren<DropdownMenuItemProps>,
) => {
  return (
    <MenuItemWrapper {...props}>
      <ItemContainer padding={props.padding}>{props.children}</ItemContainer>
    </MenuItemWrapper>
  );
};
