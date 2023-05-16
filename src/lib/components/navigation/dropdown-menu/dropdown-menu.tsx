import * as React from 'react';
import { BaseDropdownMenu } from '../base-dropdown-menu/base-dropdown-menu';
import FlexColumn from '../../flex-column/flex-column';
import styled from 'styled-components';

const StyledFlexColumn = styled(FlexColumn)<{ multiColumn?: boolean }>(
  ({ theme, multiColumn }) => ({
    padding: '8px 0',
    ...(multiColumn && {
      padding: '8px',
      '& li:hover > *': {
        borderRadius: theme.borderRadius.base,
      },
    }),
  })
);

export interface MenuProps {
  opened?: boolean;
  onClose?: () => void;
  multiColumn?: boolean;
}

export const DropdownMenu = ({
  children,
  multiColumn,
  ...rest
}: React.PropsWithChildren<MenuProps>) => {
  return (
    <BaseDropdownMenu {...rest}>
      <StyledFlexColumn multiColumn={multiColumn}>{children}</StyledFlexColumn>
    </BaseDropdownMenu>
  );
};
