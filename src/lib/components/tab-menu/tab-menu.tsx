import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TabMenuProps {}

const StyledTabMenu = styled.div(({ theme }) => ({
  flexShrink: 0,
  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center',
}));

export function TabMenu(props: TabMenuProps) {
  return <StyledTabMenu {...props} />;
}

export default TabMenu;
