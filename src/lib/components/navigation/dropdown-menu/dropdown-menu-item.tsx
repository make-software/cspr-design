import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { FlexRow } from '../../flex-row/flex-row';

type Ref = HTMLLIElement;

type NativeLiProps = React.LiHTMLAttributes<HTMLLIElement>;

const ItemContainer = styled(FlexRow)<{ padding?: string }>(({ theme, padding }) => ({
  width: '100%',
  cursor: 'pointer',
  padding: padding ?? '12px 16px',
  ':hover, :active': {
    borderRadius: theme.borderRadius.base,
    background: theme.styleguideColors.fillSecondary,
  },
}));

const MenuItemWrapper = styled.li<
    React.LiHTMLAttributes<HTMLLIElement>
>(({ theme }) =>
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
    })
);

export interface DropdownMenuItemProps
    extends React.LiHTMLAttributes<HTMLLIElement> {
    padding?: string;
    children?: React.ReactNode;
}

export const DropdownMenuItem = React.forwardRef<
    HTMLLIElement,
    DropdownMenuItemProps
>(function DropdownMenuItem(props, ref) {
    const { padding, children, ...rest } = props;

    return (
        <MenuItemWrapper {...rest} ref={ref}>
            <ItemContainer padding={padding}>{children}</ItemContainer>
        </MenuItemWrapper>
    );
});
