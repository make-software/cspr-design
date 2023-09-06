import React from 'react';
import styled from 'styled-components';

import { BaseProps } from '../../types';

import FlexRow from '../flex-row/flex-row';
import SvgIcon from '../svg-icon/svg-icon';
import SubtitleText from '../subtitle-text/subtitle-text';
import BodyText from '../body-text/body-text';

const StyledFlexRow = styled(FlexRow)<{
  checked?: boolean;
  disabled?: boolean;
  customCheckedColor?: string;
  customUncheckedColor?: string;
}>(
    ({ theme, checked, disabled, customCheckedColor, customUncheckedColor }) => ({
      cursor: disabled ? 'default' : 'pointer',
      width: 'fit-content',
      pointerEvents: disabled ? 'none' : 'auto',
      svg: {
        fill:
            checked && !disabled && customCheckedColor
                ? customCheckedColor
                : checked && !disabled
                    ? theme.styleguideColors.contentBlue
                    : 'none',
        path: {
          fill:
              checked && !disabled
                  ? theme.styleguideColors.backgroundPrimary
                  : 'none',
        },
        rect: {
          stroke: disabled
              ? theme.styleguideColors.contentQuaternary
              : customUncheckedColor
                  ? customUncheckedColor
                  : theme.styleguideColors.contentBlue,
        },
      },
      span: {
        color: disabled
            ? theme.styleguideColors.contentQuaternary
            : theme.styleguideColors.contentPrimary,
      },
    })
);

export enum CheckboxFontSize {
    'default' = 'default',
    'small' = 'small',
}

const StyledCheckboxWrapper = ({ checkboxFontSize, ...props }) => {
    return checkboxFontSize === CheckboxFontSize.small ? (
        <BodyText size={3} lineHeight={'xs'} {...props} />
    ) : (
        <SubtitleText size={2} {...props} />
    );
};

export interface CheckboxProps extends BaseProps {
  label?: string;
  onChange?: (value?: any) => void;
  checked: boolean;
  disabled?: boolean;
  customCheckedColor?: string;
  customUncheckedColor?: string;
  checkboxFontSize?: CheckboxFontSize;
}

export function Checkbox({
                           checked,
                           onChange,
                           label,
                           disabled,
                           customCheckedColor,
                           customUncheckedColor,
                           checkboxFontSize = CheckboxFontSize.default
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
          customCheckedColor={customCheckedColor}
          customUncheckedColor={customUncheckedColor}
      >
        <SvgIcon src={iconSrc} />
        <StyledCheckboxWrapper checkboxFontSize={checkboxFontSize}>{label}</StyledCheckboxWrapper>
      </StyledFlexRow>
  );
}

export default Checkbox;
