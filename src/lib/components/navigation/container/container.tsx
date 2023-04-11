import styled from "styled-components";
import { PropsWithChildren } from "react";

const SettingsContainer = styled.div(({ theme }) =>
  theme.withMedia({
    background: theme.styleguideColors.backgroundTertiary,
    height: "40px",
    width: "100%",
    display: "flex",
    // flexDirection: ["column"],
    // justifyContent: ["center"],
    // alignItems: ["center"],
  })
);

export interface ContainerProps {}

export const NavigationContainer = ({ children }: PropsWithChildren<ContainerProps>) => {
  return <SettingsContainer>{children}</SettingsContainer>;
};

export default NavigationContainer;