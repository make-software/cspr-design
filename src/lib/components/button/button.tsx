import React from 'react';
import styled from 'styled-components';

import { matchSize } from '../../utils/match-size';

const BaseButton = styled.button<ButtonProps>(
  ({ theme, disabled, height = '36', width = '100%', lineHeight = 'sm' }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    borderRadius: theme.borderRadius.base,
    fontFamily: theme.typography.fontFamily.primary,
    fontWeight: matchSize(
      {
        '24': theme.typography.fontWeight.medium,
        '36': theme.typography.fontWeight.medium,
        '40': theme.typography.fontWeight.semiBold,
      },
      height
    ),
    fontSize: matchSize(
      { '24': '0.688rem', '36': '0.875rem', '40': '0.875rem' },
      height
    ),
    minHeight: matchSize({ '24': 24, '36': 36, '40': 40 }, height),
    lineHeight: matchSize(
      {
        sm: '1.5rem',
        xs: '1.25rem',
      },
      lineHeight
    ),
    padding: matchSize(
      { '24': '2px 10px', '36': '8px 25px', '40': '10px 30px' },
      height
    ),
    width: matchSize(
      {
        '100': '100px',
        '120': '120px',
        '140': '140px',
        '176': '176px',
        '100%': '100%',
      },
      width
    ),

    ':focus': {
      outline: 'none',
    },

    ...(disabled && {
      pointerEvents: 'none',
    }),
  })
);

const PrimaryBlueButton = styled(BaseButton)<ButtonProps>(
  ({ theme, disabled }) => ({
    color: theme.styleguideColors.contentOnFill,
    background: theme.styleguideColors.contentBlue,

    ': hover': {
      background: theme.styleguideColors.fillPrimaryBlueHover,
    },
    ': active': {
      background: theme.styleguideColors.fillPrimaryBlueClick,
    },

    ...(disabled && {
      color: theme.styleguideColors.contentTertiary,
      background: theme.styleguideColors.backgroundSecondary,
    }),
  })
);

const PrimaryRedButton = styled(BaseButton)<ButtonProps>(
  ({ theme, disabled }) => ({
    color: theme.styleguideColors.contentOnFill,
    background: theme.styleguideColors.fillPrimaryRed,

    ': hover': {
      background: theme.styleguideColors.fillPrimaryRedHover,
    },
    ': active': {
      background: theme.styleguideColors.fillPrimaryRedClick,
    },

    ...(disabled && {
      color: theme.styleguideColors.contentTertiary,
      background: theme.styleguideColors.fillSecondary,
    }),
  })
);

const SecondaryBlueButton = styled(BaseButton)<ButtonProps>(
  ({ theme, disabled }) => ({
    color: theme.styleguideColors.contentBlue,
    background: theme.styleguideColors.backgroundSecondary,

    ': hover': {
      background: theme.styleguideColors.fillSecondaryBlueHover,
      borderColor: 'transparent',
    },
    ': active': {
      background: theme.styleguideColors.fillSecondaryBlueClick,
      borderColor: 'transparent',
    },

    ...(disabled && {
      color: theme.styleguideColors.contentTertiary,
      background: theme.styleguideColors.backgroundPrimary,
    }),
  })
);

const SecondaryRedButton = styled(BaseButton)<ButtonProps>(
  ({ theme, disabled }) => ({
    color: theme.styleguideColors.contentRed,
    background: theme.styleguideColors.fillSecondary,

    ': hover': {
      background: theme.styleguideColors.fillSecondaryRedHover,
    },
    ': active': {
      background: theme.styleguideColors.fillSecondaryRedClick,
    },

    ...(disabled && {
      color: theme.styleguideColors.contentTertiary,
      background: theme.styleguideColors.fillSecondary,
    }),
  })
);

const UtilityButton = styled(BaseButton)<ButtonProps>(
  ({ theme, disabled }) => ({
    color: theme.styleguideColors.fillPrimaryRed,
    background: theme.styleguideColors.backgroundSecondary,

    ': hover': {
      background: theme.styleguideColors.fillSecondaryRedHover,
    },
    ': active': {
      background: theme.styleguideColors.fillSecondaryRedClick,
    },

    ...(disabled && {
      color: theme.styleguideColors.contentTertiary,
      background: theme.styleguideColors.backgroundPrimary,
    }),
  })
);

const COMPONENT_MAP_BY_COLOR = {
  primaryBlue: PrimaryBlueButton,
  primaryRed: PrimaryRedButton,
  secondaryBlue: SecondaryBlueButton,
  secondaryRed: SecondaryRedButton,
  utility: UtilityButton,
};

export type ButtonSize = 'small' | 'normal' | 'big';

/* eslint-disable-next-line */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (ev) => void;
  color?:
    | 'primaryBlue'
    | 'primaryRed'
    | 'secondaryBlue'
    | 'secondaryRed'
    | 'utility';
  disabled?: boolean;
  height?: '24' | '36' | '40';
  width?: '100' | '120' | '140' | '176' | '100%';
  lineHeight?: 'xs' | 'sm';
}

type Ref = HTMLButtonElement;

export const Button = React.forwardRef<Ref, ButtonProps>(function Button(
  { color = 'primaryBlue', ...props }: ButtonProps,
  ref
) {
  const ButtonComponent = COMPONENT_MAP_BY_COLOR[color] || PrimaryBlueButton;
  return <ButtonComponent ref={ref} color={color} aria-disabled={!!props.disabled}  tabIndex={0} {...props} />;
});

export default Button;
