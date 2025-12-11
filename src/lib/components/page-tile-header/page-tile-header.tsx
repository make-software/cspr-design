import React from 'react';
import styled from 'styled-components';
import HeaderText, { HeaderTextProps } from '../header-text/header-text';

/* eslint-disable-next-line */
export interface PageTileHeaderProps extends HeaderTextProps {}

const StyledPageTileHeader = styled(HeaderText)(({ theme }) =>
  theme.withMedia({
    padding: ['20px 20px 16px'],
  }),
);

export function PageTileHeader(props: PageTileHeaderProps) {
  return <StyledPageTileHeader {...props} size={5} />;
}

export default PageTileHeader;
