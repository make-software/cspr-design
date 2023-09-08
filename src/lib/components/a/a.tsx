import React from 'react';
import styled from 'styled-components';

import { BaseProps } from '../../types';

/* eslint-disable-next-line */
export interface AProps extends BaseProps {}

const StyledA = styled.a(({ theme }) => ({}));

export function A(props: AProps) {
  return (
    <StyledA
      {...props}
      onClick={(ev) => {
        if (!(ev.ctrlKey || ev.metaKey || ev.shiftKey)) {
          ev.preventDefault();
          props.onClick && props.onClick(ev);
        }
      }}
    />
  );
}

export default A;
