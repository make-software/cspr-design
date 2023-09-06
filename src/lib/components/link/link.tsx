import React from 'react';
import styled from 'styled-components';
import {matchSize} from "../../utils/match-size";

type Color = 'primaryBlue' | 'primaryRed' | 'hash' | 'inherit';

const getStateColor = (theme, color: Color) => {
  return (
    {
      primaryBlue: {
        color: theme.styleguideColors.contentBlue,
        hover: theme.styleguideColors.fillPrimaryBlueHover,
        active: theme.styleguideColors.fillPrimaryBlueClick,
      },
      primaryRed: {
        color: theme.styleguideColors.fillPrimaryRed,
        hover: theme.styleguideColors.fillPrimaryRedHover,
        active: theme.styleguideColors.fillPrimaryRedClick,
      },
      hash: {
        color: theme.styleguideColors.contentBlue,
        hover: theme.styleguideColors.contentRed,
        active: theme.styleguideColors.fillPrimaryRedClick,
      },
    }[color] || {
      color: 'inherit',
      hover: 'inherit',
      active: 'inherit',
    }
  );
};

/* eslint-disable-next-line */
export interface LinkProps extends React.HTMLAttributes<Ref> {
  href?: string;
  target?: string;
  color: Color;
  lineHeight?: 'xs' | 'sm';
}

type Ref = HTMLAnchorElement;
const StyledLink = styled.a<LinkProps>(({ theme, color, lineHeight = 'sm' }) => {
  const stateColor = getStateColor(theme, color);
  return {
    lineHeight: matchSize(
        {
          sm: '1.5rem',
          xs: '1.25rem',
        },
        lineHeight
    ),
    color: stateColor.color,
    '&:hover > *': {
      color: stateColor.hover,
    },
    '&:active > *': {
      color: stateColor.active,
    },
  };
});

export const Link = React.forwardRef<Ref, LinkProps>(function Link(props, ref) {
  return <StyledLink ref={ref} target="_blank" {...props} />;
});

export default Link;
