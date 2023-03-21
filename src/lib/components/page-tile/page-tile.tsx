import React from 'react';
import styled from 'styled-components';
import { BaseProps } from '../../types';

/* eslint-disable-next-line */
export interface PageTileProps extends BaseProps {
  withPadding?: boolean;
}

const StyledPageTile = styled.div<PageTileProps>(({ theme, withPadding }) =>
  theme.withMedia({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    background: theme.styleguideColors.backgroundPrimary,
    boxShadow: theme.boxShadow.block,
    borderRadius: theme.borderRadius.base,
    marginBottom: 24, // make it reponsive
    padding: withPadding ? '16px 0' : undefined,
  })
);

export function PageTile(props: PageTileProps) {
  return <StyledPageTile {...props} />;
}

export default PageTile;
