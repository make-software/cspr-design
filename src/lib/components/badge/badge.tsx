import React from 'react';
import styled from 'styled-components';
import Label from '../label/label';

type BadgeBackgroundColor = 'green' | 'violet' | 'blue' | 'gray' | 'fillBlueGradient';

interface StyledBadgeProps {
  bgColor: BadgeBackgroundColor;
  textColor?: string;
}

export interface BadgeProps {
  label: string | React.ReactNode;
  variation?: BadgeBackgroundColor;
  textColor?: string;
  capitalize?: boolean;
  lineHeight?: 'xxs' | 'xs' | 'sm';
}

const getBadgeBgColors = (theme, color: BadgeBackgroundColor) =>
  ({
    green: theme.styleguideColors.fillGreen,
    violet: theme.styleguideColors.fillVioletGradient,
    blue: theme.colorSpecialCase.blueBanner2,
    gray: theme.styleguideColors.contentQuaternary,
    fillBlueGradient: theme.styleguideColors.fillBlueGradient,
  }[color]);

const StyledBadge = styled.div<StyledBadgeProps>(({ theme, bgColor, textColor }) => ({
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  color: textColor ? textColor : theme.styleguideColors.contentOnFill,
  background: getBadgeBgColors(theme, bgColor),
  borderRadius: '40px',
  minHeight: '17px',
  padding: '0 6px 1px 6px',
}));

const StyledLabelContentWrapper = styled.div(({ theme }) => ({
  a: {
    cursor: 'pointer',
    color: theme.styleguideColors.contentOnFill,
  },
  'a:hover': {
    color: theme.styleguideColors.contentQuaternary,
  },
}));

export const Badge = ({
  label,
  variation = 'green',
  textColor,
  capitalize = true,
  lineHeight = 'sm'
}: BadgeProps) => {
  return (
    <StyledBadge bgColor={variation} textColor={textColor}>
      <Label size={2} capitalize={capitalize} lineHeight={lineHeight}>
        <StyledLabelContentWrapper>{label}</StyledLabelContentWrapper>
      </Label>
    </StyledBadge>
  );
};
