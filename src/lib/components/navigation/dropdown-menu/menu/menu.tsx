import React, { useState, PropsWithChildren, useEffect } from "react";
import { useClickAway } from "../../../../hooks/use-click-away";
import styled from "styled-components";
import FlexRow from "../../../flex-row/flex-row";

const Container = styled(FlexRow)<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  borderRadius: theme.borderRadius.base,
  // border: "none",
  // height: 36,
  // padding: "0 16px",
  // background: theme.styleguideColors.fillSecondary,
  // ":hover, :active": {
  //   background: theme.styleguideColors.fillSecondary,
  //   svg: {
  //     color: theme.styleguideColors.fillPrimaryRed,
  //   },
  // },
  ...(!isOpen && {
    display: "none",
  }),
}));

// const ItemsContainer = styled.div<{ isOpen: boolean }>(({ theme, isOpen }) => ({
//   display: isOpen ? "inherit" : "none",
//   marginTop: 4,
//   borderRadius: theme.borderRadius.base,
//   background: theme.styleguideColors.fillSecondary,
// }));

const BaseMenuWrapper = styled.ul<{
  containerPadding?: string;
}>(({ theme, containerPadding }) => ({
  display: "flex",
  flexDirection: "column",
  width: "fit-content",
  height: "auto",
  padding: "16px 0",
  background: theme.styleguideColors.backgroundPrimary,
  filter: theme.boxShadow.dropdown,
  borderTop: `5px solid ${theme.styleguideColors.fillPrimaryRed}`,
  borderRadius: theme.borderRadius.base,
}));

export interface MenuProps {
  opened?: boolean;
  onClose?: () => void;
}

const BaseMenu = ({
  opened = false,
  onClose,
  children,
}: PropsWithChildren<MenuProps>) => {
  const [isOpen, setIsOpen] = useState(opened);

  const { ref } = useClickAway({
    callback: () => {
      setIsOpen(false);
      onClose && onClose();
    },
  });

  useEffect(() => {
    setIsOpen(opened);
  }, [opened]);

  return (
    <Container isOpen={isOpen} ref={ref}>
      <BaseMenuWrapper>{children}</BaseMenuWrapper>
    </Container>
  );
};

export const Menu = ({ children, ...rest }: PropsWithChildren<MenuProps>) => {
  return <BaseMenu {...rest}>{children}</BaseMenu>;
};

export default Menu;
