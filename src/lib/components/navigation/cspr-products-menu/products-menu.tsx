import React, { PropsWithChildren } from 'react';
import { BaseDropdownMenu } from '../base-dropdown-menu/base-dropdown-menu';
import styled from 'styled-components';
import FlexRow from '../../flex-row/flex-row';
import { useMatchMedia } from '../../../utils/match-media';
import FlexColumn from '../../flex-column/flex-column';

export interface ProductsMenuProps {
  opened?: boolean;
}

const ProductsMenuWrapper = styled.ul<{
  containerPadding?: string;
}>(({ theme }) => ({
  maxWidth: '620px',
  padding: '8px',
  margin: 0,
}));

export const ProductsMenu = ({
  opened = false,
  children,
}: PropsWithChildren<ProductsMenuProps>) => {
  const ProductContainer = useMatchMedia([FlexColumn, FlexColumn, FlexRow], []);

  return (
    <BaseDropdownMenu opened={opened}>
      <ProductsMenuWrapper>
        <ProductContainer wrap={'wrap'}>{children}</ProductContainer>
      </ProductsMenuWrapper>
    </BaseDropdownMenu>
  );
};
