import * as React from 'react';
import { BaseDropdownMenu } from '../base-dropdown-menu/base-dropdown-menu';
import FlexColumn from '../../flex-column/flex-column';
import styled from 'styled-components';

const StyledFlexColumn = styled(FlexColumn)<{
  multiColumn?: boolean;
  padding?: string;
}>(({ theme, multiColumn, padding }) => ({
  padding: padding ?? '8px',
  ...(multiColumn && {
    padding: '8px',
    '& li:hover > *': {
      borderRadius: theme.borderRadius.base,
    },
  }),
}));

export interface MenuProps {
  opened?: boolean;
  onClose?: () => void;
  multiColumn?: boolean;
  padding?: string;
  className?: string;
}

export const DropdownMenu = ({
  children,
  multiColumn,
  padding,
  ...rest
}: React.PropsWithChildren<MenuProps>) => {
  return (
    <BaseDropdownMenu {...rest}>
      <StyledFlexColumn multiColumn={multiColumn} padding={padding}>
        {children}
      </StyledFlexColumn>
    </BaseDropdownMenu>
  );
};
