import React from 'react';
import styled from 'styled-components';

import { BaseProps } from '../../base-types.ts';

/* eslint-disable-next-line */
export interface FlexBoxProps extends BaseProps {
  /* @description will add spacing between children, work depending on row/column layout */
  itemsSpacing?: number;
  innerRef?: React.Ref<HTMLDivElement>;
  gap?: React.CSSProperties['gap'];
  direction?: React.CSSProperties['flexDirection'];
  wrap?: React.CSSProperties['flexWrap'];
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignItems'];
  grow?: React.CSSProperties['flexGrow'];
  shrink?: React.CSSProperties['flexShrink'];
  basis?: React.CSSProperties['flexBasis'];
  tag?: 'div' | 'span';
}

const StyledFlexBox = styled('div')<FlexBoxProps>(
  ({
    itemsSpacing,
    direction: flexDirection,
    justify: justifyContent,
    wrap: flexWrap,
    align: alignItems,
    grow: flexGrow,
    shrink: flexShrink,
    basis: flexBasis = 'auto',
    gap,
    onClick,
  }) => ({
    display: 'flex',
    gap,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    flexGrow,
    flexShrink,
    flexBasis,
    ...(itemsSpacing != null && {
      '> * + *': {
        [flexDirection === 'row' ? 'marginLeft' : 'marginTop']: itemsSpacing,
      },
      '> * + *:where(h1, h2, h3, h4, h5, h6)': {
        [flexDirection === 'row' ? 'marginLeft' : 'marginTop']:
          `${itemsSpacing}px !important`,
      },
    }),
    ...(onClick && {
      cursor: 'pointer',
    }),
  }),
);

export const FlexBox = React.forwardRef<HTMLDivElement, FlexBoxProps>(
  (props, ref) => {
    const { tag = 'div' } = props;
    const validTag = ['div', 'span'].includes(tag) ? tag : 'div';
    return <StyledFlexBox ref={ref} {...props} as={validTag} />;
  },
);

export default FlexBox;
