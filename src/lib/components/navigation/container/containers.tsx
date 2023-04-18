import styled from 'styled-components';
import { PropsWithChildren } from 'react';

// const MenuContainer = styled.ul(({ theme }) =>
//   theme.withMedia({
//     display: 'flex',
//     flexDirection: ['row'],
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     // maxWidth: theme.maxWidth,
//     // width: '100%',
//     padding: ['19px 16px', '19px 32px', '0px 56px', '0px'],
//     margin: [0],
//   })
// );

const SettingsContainer = styled.div(({ theme }) =>
  theme.withMedia({
    background: theme.styleguideColors.backgroundTertiary,
    height: '40px',
    width: '100%',
    display: 'flex',
    // flexDirection: ["column"],
    // justifyContent: ["center"],
    // alignItems: ["center"],
  })
);

export interface ContainerProps {}

export const NavigationSettingsContainer = ({
  children,
}: PropsWithChildren<ContainerProps>) => {
  return <SettingsContainer>{children}</SettingsContainer>;
};

// export const NavigationMenuContainer = ({
//   children,
// }: PropsWithChildren<ContainerProps>) => {
//   return <MenuContainer>{children}</MenuContainer>;
// };
