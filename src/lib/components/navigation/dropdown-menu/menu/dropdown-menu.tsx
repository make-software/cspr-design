import React, { PropsWithChildren } from "react";
import { BaseDropdownMenu } from "../../base-dropdown-menu/base-dropdown-menu";
import FlexColumn from "../../../flex-column/flex-column";
import styled from "styled-components";

const StyledFlexColumn = styled(FlexColumn)(() => ({
  padding: "16px 0",
}))

export interface MenuProps {
  opened?: boolean;
  onClose?: () => void;
}

export const DropdownMenu = ({ children, ...rest }: PropsWithChildren<MenuProps>) => {
  return (
    <BaseDropdownMenu {...rest}>
      <StyledFlexColumn>{children}</StyledFlexColumn>
    </BaseDropdownMenu>
  );
};

export default DropdownMenu;
