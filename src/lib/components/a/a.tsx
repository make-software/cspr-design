import React from 'react';

import { BaseProps } from '../../types';
import styled from "styled-components";

/* eslint-disable-next-line */
export interface AProps extends BaseProps {}

const StyledA = styled.a(({ theme }) => ({}));

/**
 *
 * @deprecated by Piotr. DO NOT USE!
 */
export function A(props: AProps) {
    console.log('do not use')
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
