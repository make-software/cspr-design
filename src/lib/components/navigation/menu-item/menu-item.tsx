import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const MenuItemWrapper = styled.span(({ theme }) =>
  theme.withMedia({
    color: [
      theme.styleguideColors.contentTertiary,
      theme.styleguideColors.contentTertiary,
      theme.styleguideColors.contentPrimary,
    ],
    '&:hover': {
      cursor: 'pointer',
      '> *': {
        color: [
          theme.styleguideColors.contentOnFill,
          theme.styleguideColors.contentOnFill,
          theme.styleguideColors.contentBlue,
        ],
        fill: [
          theme.styleguideColors.contentOnFill,
          theme.styleguideColors.contentOnFill,
          theme.styleguideColors.contentBlue,
        ],
      },
    },
  })
);

export const MenuItem = ({ children }: PropsWithChildren<any>) => {
  return <MenuItemWrapper>{children}</MenuItemWrapper>;
};
