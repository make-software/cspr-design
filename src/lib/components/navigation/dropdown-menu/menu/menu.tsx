import React, { PropsWithChildren } from "react";
import { BaseMenu } from "../../base-menu/base-menu";
import FlexColumn from "../../../flex-column/flex-column";
import styled from "styled-components";

const StyledFlexColumn = styled(FlexColumn)(() => ({
  padding: "16px 0",
}))

export interface MenuProps {
  opened?: boolean;
  onClose?: () => void;
}

export const Menu = ({ children, ...rest }: PropsWithChildren<MenuProps>) => {
  return (
    <BaseMenu {...rest}>
      <StyledFlexColumn>{children}</StyledFlexColumn>
    </BaseMenu>
  );
};

export default Menu;
