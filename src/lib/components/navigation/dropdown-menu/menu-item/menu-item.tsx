import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import FlexRow from "../../../flex-row/flex-row";

const ItemContainer = styled(FlexRow)(({ theme }) => ({
  width: "100%",
  cursor: "pointer",
  padding: "12px 24px",
  ":hover, :active": {
    background: theme.styleguideColors.fillSecondaryBlueHover,
  },
}));

const MenuItemWrapper = styled.li(({ theme }) =>
  theme.withMedia({
    display: "flex",
    color: theme.styleguideColors.contentPrimary,
    "&:hover": {
      cursor: "pointer",
      "> *": {
        color: [
          theme.styleguideColors.contentBlue,
        ],
        fill: [
          theme.styleguideColors.contentBlue,
        ],
      },
    },
  })
);

export const MenuItem = ({ children }: PropsWithChildren<any>) => {
  return (
    <MenuItemWrapper>
      <ItemContainer>{children}</ItemContainer>
    </MenuItemWrapper>
  );
};

export default MenuItem;
