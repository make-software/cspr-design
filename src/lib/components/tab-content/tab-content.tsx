import React from 'react';

import styled from 'styled-components';
import { BaseProps } from '../../types';

/* eslint-disable-next-line */
export interface TabContentProps extends BaseProps {}

const StyledTabContent = styled.div``;

export function TabContent(props: TabContentProps) {
  return <StyledTabContent {...props} />;
}

export default TabContent;
