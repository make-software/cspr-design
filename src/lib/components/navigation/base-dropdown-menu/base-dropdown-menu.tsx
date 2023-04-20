import React, { PropsWithChildren, useEffect, useState } from "react";
import { useClickAway } from "../../../hooks/use-click-away";
import { MenuProps } from "../dropdown-menu/dropdown-menu";
import styled from "styled-components";
import FlexRow from "../../flex-row/flex-row";

const Container = styled(FlexRow)<{ isOpen: boolean }>(({ theme, isOpen }) => ({
    borderRadius: theme.borderRadius.base,
    ...(!isOpen && {
        display: "none",
    }),
}));

const BaseMenuWrapper = styled.div(({ theme }) => ({
    width: "fit-content",
    height: "auto",
    background: theme.styleguideColors.backgroundPrimary,
    filter: theme.boxShadow.dropdown,
    borderTop: `5px solid ${theme.styleguideColors.fillPrimaryRed}`,
    borderRadius: theme.borderRadius.base,
}));

export const BaseDropdownMenu = ({
  opened = false,
  onClose,
  children,
}: PropsWithChildren<MenuProps>) => {
  // const [isOpen, setIsOpen] = useState(opened);
  //
  // const { ref } = useClickAway({
  //   callback: () => {
  //     setIsOpen(false);
  //     onClose && onClose();
  //   },
  // });
  //
  // useEffect(() => {
  //   setIsOpen(opened);
  // }, [opened]);

  return (
    // <Container isOpen={isOpen} ref={ref}>
    <Container isOpen={opened}>
      <BaseMenuWrapper>{children}</BaseMenuWrapper>
    </Container>
  );
};