import React from 'react';
import styled from 'styled-components';
import { BaseProps } from '../../base-types.ts';

export interface RadioButtonProps extends BaseProps {
  label?: string | React.ReactNode;
  onChange?: (value: string) => void;
  selected: string;
  value: string;
  color?: string;
  disabled?: boolean;
}

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  cursor: 'pointer',
  userSelect: 'none',
}));

const OuterCircle = styled.div<{ disabled?: boolean; color?: string }>(
  ({ theme, disabled, color = 'contentBlue' }) => ({
    width: 24,
    height: 24,
    minWidth: 24,
    minHeight: 24,
    border: disabled
      ? `2px solid ${theme.styleguideColors.contentQuaternary}`
      : `2px solid ${theme.styleguideColors[color]}`,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  }),
);

const InnerCircle = styled.div<{
  unslected: boolean;
  disabled?: boolean;
  color?: string;
}>(({ theme, unslected, disabled, color = 'contentBlue' }) => ({
  borderRadius: '50%',
  width: unslected ? 0 : 12,
  height: unslected ? 0 : 12,
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
}: RadioButtonProps) => {
  return (
    <Container
      onClick={() => {
        onChange && onChange(value);
      }}
    >
      <OuterCircle disabled={disabled} color={color}>
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
