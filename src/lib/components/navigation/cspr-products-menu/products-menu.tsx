import React, { PropsWithChildren } from "react";
import { BaseMenu } from "../base-menu/base-menu";

export interface ProductsMenuProps {
  opened?: boolean;
}

export const ProductsMenu = ({
  opened = false,
  children,
}: PropsWithChildren<ProductsMenuProps>) => {
  return <BaseMenu opened={opened}>{children}</BaseMenu>;
};
