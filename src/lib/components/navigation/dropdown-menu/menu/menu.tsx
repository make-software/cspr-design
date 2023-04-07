import React, { PropsWithChildren } from "react";
import { BaseMenu } from "../../base-menu/base-menu";

export interface MenuProps {
  opened?: boolean;
  onClose?: () => void;
}

export const Menu = ({ children, ...rest }: PropsWithChildren<MenuProps>) => {
  return <BaseMenu {...rest}>{children}</BaseMenu>;
};

export default Menu;
