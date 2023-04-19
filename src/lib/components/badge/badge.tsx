import React from 'react';
import styled from 'styled-components';
import Label from '../label/label';

type BadgeBackgroundColor = 'green' | 'violet' | 'blue';

interface StyledBadgeProps {
  bgColor: BadgeBackgroundColor;
}

export interface BadgeProps {
  label: string | React.ReactNode;
  variation?: BadgeBackgroundColor;
  capitalize?: boolean;
}

const getBadgeBgColors = (theme, color: 'green' | 'violet' | 'blue') =>
  ({
    green: theme.styleguideColors.fillGreen,
    violet: theme.styleguideColors.fillVioletGradient,
    blue: theme.colorSpecialCase.blueBanner2,
  }[color]);

const StyledBadge = styled.div<StyledBadgeProps>(({ theme, bgColor }) => ({
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  color: theme.styleguideColors.contentOnFill,
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
  capitalize = true,
}: BadgeProps) => {
  return (
    <StyledBadge bgColor={variation}>
      <Label size={2} capitalize={capitalize}>
        <StyledLabelContentWrapper>{label}</StyledLabelContentWrapper>
      </Label>
    </StyledBadge>
  );
};
