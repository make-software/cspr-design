import React from 'react';
import styled from 'styled-components';
import { BaseProps } from '../../base-types.ts';

/* eslint-disable-next-line */
export interface PageTileProps extends BaseProps {
  withPadding?: boolean;
  bottomGap?: number;
}

const StyledPageTile = styled.div<PageTileProps>(
  ({ theme, withPadding, bottomGap = 24 }) =>
    theme.withMedia({
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      background: theme.styleguideColors.backgroundPrimary,
      boxShadow: theme.boxShadow.block,
      borderRadius: theme.borderRadius.base,
      marginBottom: bottomGap,
      padding: withPadding ? '16px 0' : undefined,
    }),
);

export function PageTile(props: PageTileProps) {
  return <StyledPageTile {...props} />;
}

export default PageTile;
