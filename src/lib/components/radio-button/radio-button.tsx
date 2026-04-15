import React from 'react';
import styled from 'styled-components';
import { BaseProps } from '../../types';

export interface RadioButtonProps extends BaseProps {
  label?: string | React.ReactNode;
  onChange?: (value: string) => void;
  selected: string;
  value: string;
  color?: string;
  disabled?: boolean;
  size: number;
}

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  userSelect: 'none',
}));

const OuterCircle = styled.div<{
  disabled?: boolean;
  color?: string;
  size: number;
  unselected?: boolean;
}>(({ theme, unselected, disabled, size, color = 'contentBlue' }) => ({
  width: size,
  height: size,
  minWidth: size,
  minHeight: size,
  border:
    disabled || unselected
      ? `2px solid ${theme.styleguideColors.contentQuaternary}`
      : `2px solid ${theme.styleguideColors[color]}`,
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 12,
}));

const InnerCircle = styled.div<{
  unslected: boolean;
  disabled?: boolean;
  color?: string;
}>(({ theme, unslected, disabled, color = 'contentBlue' }) => ({
  borderRadius: '50%',
  width: unslected ? 0 : '70%',
  height: unslected ? 0 : '70%',
  backgroundColor: disabled
    ? theme.styleguideColors.contentQuaternary
    : theme.styleguideColors[color],
}));

export const RadioButton = ({
  selected,
  onChange,
  label,
  value,
  disabled,
  color,
  size = 24,
}: RadioButtonProps) => {
  return (
    <Container
      onClick={() => {
        onChange && onChange(value);
      }}
    >
      <OuterCircle
        disabled={disabled}
        unselected={value !== selected}
        color={color}
        size={size}
      >
        <InnerCircle
          unslected={value !== selected}
          disabled={disabled}
          color={color}
        />
      </OuterCircle>
      {label}
    </Container>
  );
};

export default RadioButton;
