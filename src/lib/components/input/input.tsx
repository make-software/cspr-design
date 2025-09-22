import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { matchSize } from '../../utils/match-size';
import { FormField, FormFieldStatus } from '../form-field/form-field';
import SvgIcon from '../svg-icon/svg-icon';
import { LabelFontSize } from '../../types';
import { ErrorIcon } from '../../icons-index.ts';

const getThemeColorByError = (error?: boolean) => {
  if (error == null || !error) {
    return 'fillSecondary';
  }

  return 'contentRed';
};

const InputContainer = styled('div')<InputProps>(
  ({ theme, disabled, error, monotype, height = '36' }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 16px',
    borderRadius: theme.borderRadius.base,
    color: theme.styleguideColors.contentPrimary,
    background: theme.styleguideColors.fillSecondary,
    caretColor: theme.styleguideColors.fillPrimaryRed,
    fontFamily: monotype
      ? theme.typography.fontFamily.mono
      : theme.typography.fontFamily.primary,
    fontSize: '0.875rem',
    lineHeight: matchSize({ '36': '20px', '40': '20px' }, height),
    height: matchSize({ '36': '36px', '40': '40px' }, height),

    path: {
      fill: theme.styleguideColors[getThemeColorByError(error)],
    },

    ...(error && {
      border: `1px solid ${theme.styleguideColors.borderRed}`,
    }),

    ...(disabled && {
      opacity: 0.5,
      color: theme.styleguideColors.contentTertiary,
    }),
  }),
);

const StyledInput = styled.input<InputProps>(({ theme }) => ({
  color: 'inherit',
  background: 'inherit',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  border: 'none',
  width: '100%',
  padding: 0,
  '&[type=number]:focus, &[type=number]:blur': {
    '-moz-appearance': 'number-input',
  },
  '&[type=number]': {
    '-moz-appearance': 'textfield',
    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
      margin: 0,
      '-webkit-appearance': 'none',
      'pointer-events': 'none',
    },
  },
  '&::placeholder': {
    color: theme.styleguideColors.contentSecondary,
  },
}));

const PrefixContainer = styled('div')(({ theme }) => ({
  marginRight: 16,
  color: theme.styleguideColors.contentSecondary,
  path: {
    fill: theme.styleguideColors.contentSecondary,
  },
}));

const SuffixContainer = styled('div')(({ theme }) => ({
  marginLeft: 16,
}));

const SuffixTextContainer = styled(SuffixContainer)(({ theme }) => ({
  color: theme.styleguideColors.contentSecondary,
}));

export enum InputValidationType {
  PositiveInteger = 'positive_int',
  CSPR = 'cspr',
  email = 'email',
  password = 'password',
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: React.ForwardedRef<HTMLInputElement>;
  disabled?: boolean;
  monotype?: boolean;
  placeholder?: string;
  value?: string | number;
  onChange?: (ev: any) => void;
  onFocus?: (ev: any) => void;
  onBlur?: (ev: any) => void;
  onKeyDown?: (ev: any) => void;
  height?: '36' | '40';
  step?: string;
  label?: ReactNode | string;
  labelFontSize?: LabelFontSize;
  rightLabel?: ReactNode | string;
  prefixIcon?: ReactNode | null;
  suffixIcon?: ReactNode | null;
  suffixText?: string | null;
  name?: string;
  required?: boolean;
  error?: boolean;
  validationType?: InputValidationType;
  validationText?: string | null;
}

type Ref = HTMLInputElement;

export const InputRef = React.forwardRef<Ref, InputProps>(function InputRef(
  props: InputProps,
  ref,
) {
  return <StyledInput {...props} ref={ref} />;
});

export function Input({
  id,
  className,
  style,
  disabled,
  monotype,
  height,
  label,
  rightLabel,
  prefixIcon,
  suffixIcon,
  suffixText,
  required,
  error,
  validationType,
  validationText,
  onFocus,
  name,
  labelFontSize = LabelFontSize.default,
  ...restProps
}: InputProps) {
  const validationProps =
    validationType == null
      ? undefined
      : {
          [InputValidationType.CSPR]: {
            type: 'number',
            min: '0',
            max: '0',
            step: '0',
          },
          [InputValidationType.PositiveInteger]: {
            type: 'number',
            min: '1',
            max: '1',
            step: '0',
          },
          [InputValidationType.email]: {
            type: 'email',
          },
          [InputValidationType.password]: {
            type: 'password',
          },
        }[validationType];

  const handleFocus = (event) => {
    event.target.select();
    onFocus && onFocus(event);
  };

  if (error) {
    suffixIcon = <SvgIcon src={ErrorIcon} />;
  }

  return (
    <FormField
      id={id}
      className={className}
      style={style}
      label={label}
      rightLabel={rightLabel}
      status={error ? FormFieldStatus.Error : undefined}
      statusText={validationText}
      disabled={disabled}
      labelFontSize={labelFontSize}
    >
      <InputContainer monotype={monotype} error={error} height={height}>
        {prefixIcon && <PrefixContainer>{prefixIcon}</PrefixContainer>}

        <InputRef
          title=""
          disabled={disabled}
          onFocus={handleFocus}
          name={name}
          aria-required={!!required}
          aria-labelledby={id}
          {...validationProps}
          {...restProps}
        />

        {suffixIcon && <SuffixContainer>{suffixIcon}</SuffixContainer>}

        {suffixText && <SuffixTextContainer>{suffixText}</SuffixTextContainer>}
      </InputContainer>
    </FormField>
  );
}

export default Input;
