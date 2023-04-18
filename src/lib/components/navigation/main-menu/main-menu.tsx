import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

// export const Container = styled.div(({ theme }) =>
//   theme.withMedia({
//     background: theme.styleguideColors.backgroundTertiary,
//     position: 'relative',
//     display: 'flex',
//     // flexDirection: ['column', 'column', 'row'],
//     justifyContent: 'flex-end',
//     maxWidth: theme.maxWidth,
//     width: '100%',
//     height: [undefined, undefined, 72],
//     padding: 0,
//     margin: 0,
//
//     '& > :last-of-type': {
//       paddingRight: 0,
//     },
//   })
// );

const MenuContainer = styled.ul(({ theme }) =>
  theme.withMedia({
    background: theme.styleguideColors.backgroundTertiary,
    display: 'flex',
    flexDirection: ['column', 'column', 'row'],
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    // maxWidth: theme.maxWidth,
    // width: '100%',
    // padding: ['19px 16px', '19px 32px', '0px 56px', '0px'],
    margin: [0],
  })
);

export interface MainMenuProps {}

export const MainMenu = ({ children }: PropsWithChildren<MainMenuProps>) => {
  return <MenuContainer>{children}</MenuContainer>;
};
