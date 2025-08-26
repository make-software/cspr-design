import React from 'react';
import styled from 'styled-components';

import { ActivableProps, BaseProps } from '../../types';

type Ref = HTMLAnchorElement;

export interface NavLinkProps extends BaseProps, ActivableProps {
  disabled?: boolean;
  target?: string;
  href?: string;
  ref?: React.Ref<Ref>;
  onMouseDown?: (ev: any) => void;
}

const StyledA = styled.a<NavLinkProps>(({ theme, disabled, active }) => ({
  color: theme.styleguideColors.contentTertiary,
  textDecoration: 'none',

  ':hover': {
    fontWeight: theme.typography.fontWeight.semiBold,
    color: theme.styleguideColors.contentOnFill,
  },
  ...(active && {
    fontWeight: theme.typography.fontWeight.semiBold,
    color: theme.styleguideColors.contentOnFill,
  }),

  ...(disabled && {
    pointerEvents: 'none',
  }),
}));

export const NavLink = React.forwardRef<Ref, NavLinkProps>((props, ref) => {
  return <StyledA ref={ref} {...props} />;
});

export default NavLink;
