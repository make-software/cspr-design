import React from 'react';
import styled from 'styled-components';

import { BaseProps } from '../../types';

import FlexRow from '../flex-row/flex-row';
import SvgIcon from '../svg-icon/svg-icon';
import SubtitleText from '../subtitle-text/subtitle-text';

const StyledFlexRow = styled(FlexRow)<{
  checked?: boolean;
  disabled?: boolean;
}>(({ theme, checked, disabled }) => ({
  cursor: disabled ? 'default' : 'pointer',
  width: 'fit-content',
  pointerEvents: disabled ? 'none' : 'auto',
  svg: {
    fill: checked && !disabled ? theme.styleguideColors.contentBlue : 'none',
    path: {
      fill:
        checked && !disabled
          ? theme.styleguideColors.backgroundPrimary
          : 'none',
    },
    rect: {
      stroke: disabled
        ? theme.styleguideColors.contentQuaternary
        : theme.styleguideColors.contentBlue,
    },
  },
  span: {
    color: disabled
      ? theme.styleguideColors.contentQuaternary
      : theme.styleguideColors.contentPrimary,
  },
}));

export interface CheckboxProps extends BaseProps {
  label?: string;
  onChange?: (value?: any) => void;
  checked: boolean;
  disabled?: boolean;
}

export function Checkbox({
  checked,
  onChange,
  label,
  disabled,
}: CheckboxProps) {
  const handleClick = (ev) => {
    onChange && onChange(!checked);
  };

  const iconSrc = checked
    ? disabled
      ? 'assets/icons/ic-checkbox-checked-inactive.svg'
      : 'assets/icons/ic-checkbox-checked.svg'
    : 'assets/icons/ic-checkbox.svg';

  return (
    <StyledFlexRow
      itemsSpacing={8}
      align="center"
      checked={checked}
      disabled={disabled}
      onClick={handleClick}
    >
      <SvgIcon src={iconSrc} />
      <SubtitleText size={2}>{label}</SubtitleText>
    </StyledFlexRow>
  );
}

export default Checkbox;
