import React from 'react';
import styled from 'styled-components';
import CheckedInactiveIcon from '../../assets/icons/ic-checkbox-checked-inactive.svg';
import CheckBoxChecked from '../../assets/icons/ic-checkbox-checked.svg';
import CheckboxIcon from '../../assets/icons/ic-checkbox.svg';

import FlexRow from '../flex-row/flex-row';
import SvgIcon from '../svg-icon/svg-icon';
import SubtitleText from '../subtitle-text/subtitle-text';
import BodyText from '../body-text/body-text';

const StyledFlexRow = styled(FlexRow)<{
  role?: string;
  tabIndex?: number;
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
            : checked && disabled
              ? theme.styleguideColors.contentQuaternary
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
  }),
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

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | React.ReactElement;
  /**
   * Callback function that is triggered when the checkbox is clicked
   * @param value - [NOTE] contains HTML event instead of boolean value
   */
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
  checkboxFontSize = CheckboxFontSize.default,
}: CheckboxProps) {
  const handleClick = (event) => {
    onChange && onChange(event);
  };

  const iconSrc = checked
    ? disabled
      ? CheckedInactiveIcon
      : CheckBoxChecked
    : CheckboxIcon;

  return (
    <StyledFlexRow
      itemsSpacing={8}
      align="center"
      checked={checked}
      disabled={disabled}
      onClick={handleClick}
      onKeyDown={(ev) => {
        if (ev.key === 'Enter') {
          handleClick(ev);
        }
      }}
      customCheckedColor={customCheckedColor}
      customUncheckedColor={customUncheckedColor}
      role="checkbox"
      aria-checked={checked}
      aria-disabled={disabled}
      aria-label={checked ? 'Checked' : 'Not checked'}
      tabIndex={0}
    >
      <SvgIcon src={iconSrc} />
      <StyledCheckboxWrapper checkboxFontSize={checkboxFontSize}>
        {label}
      </StyledCheckboxWrapper>
    </StyledFlexRow>
  );
}

export default Checkbox;
