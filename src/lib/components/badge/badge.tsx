import React from 'react';
import styled from 'styled-components';
import Label from '../label/label';
import { BaseProps } from '../../base-types.ts';

type BadgeBackgroundColor =
  | 'green'
  | 'violet'
  | 'blue'
  | 'gray'
  | 'fillBlueGradient'
  | string;

interface StyledBadgeProps {
  bgColor: BadgeBackgroundColor;
  textColor?: string;
}

export interface BadgeProps extends BaseProps {
  label: string | React.ReactNode;
  variation?: BadgeBackgroundColor;
  textColor?: string;
  capitalize?: boolean;
  lineHeight?: 'xxs' | 'xs' | 'sm';
}

const getBadgeBgColors = (theme, color: BadgeBackgroundColor) => {
  const bgColor = {
    green: theme.styleguideColors.fillGreen,
    violet: theme.styleguideColors.fillVioletGradient,
    blue: theme.colorSpecialCase.blueBanner2,
    gray: theme.styleguideColors.contentQuaternary,
    fillBlueGradient: theme.styleguideColors.fillBlueGradient,
    lightBlue: theme.styleguideColors.contentLightBlue,
  }[color];
  return bgColor || color;
};

const StyledBadge = styled.div<StyledBadgeProps>(
  ({ theme, bgColor, textColor }) => ({
    display: 'flex',
    alignItems: 'center',
    width: 'fit-content',
    color: textColor ? textColor : theme.styleguideColors.contentOnFill,
    background: getBadgeBgColors(theme, bgColor),
    borderRadius: '40px',
    minHeight: '17px',
    padding: '0 6px 1px 6px',
  }),
);

const StyledLabelContentWrapper = styled.div(({ theme }) => ({
  a: {
    cursor: 'pointer',
    color: theme.styleguideColors.contentOnFill,
  },
  'a:hover': {
    color: theme.styleguideColors.contentQuaternary,
  },
}));

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (props, ref) => (
    <StyledBadge
      ref={ref}
      bgColor={props.variation || 'green'}
      textColor={props.textColor}
    >
      <Label
        size={2}
        capitalize={props.capitalize || true}
        lineHeight={props.lineHeight || 'sm'}
      >
        <StyledLabelContentWrapper>{props.label}</StyledLabelContentWrapper>
      </Label>
    </StyledBadge>
  ),
);

export default Badge;
