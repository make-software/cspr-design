import React from 'react';
import styled from 'styled-components';
import { BaseProps } from '../../base-types.ts';

export interface Props extends BaseProps {
  tabsCount: number;
}

const StyledWrapper = styled.div<{ childrenCount: number }>(
  ({ theme, childrenCount }) =>
    theme.withMedia({
      display: 'flex',
      flexGrow: 1,
      justifyContent: childrenCount > 2 ? ['left', 'center'] : ['center'],
      padding: 16,
      overflowX: 'auto',
    }),
);

/** @deprecated use TabMenuContainer instead */
export const PageTileTabsHeader = ({ tabsCount, children }: Props) => {
  return <StyledWrapper childrenCount={tabsCount}>{children}</StyledWrapper>;
};

export default PageTileTabsHeader;
