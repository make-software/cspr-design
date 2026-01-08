import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { BaseProps, LabelFontSize } from '../../base-types.ts';
import FormField, { FormFieldStatus } from '../form-field/form-field';
import SvgIcon from '../svg-icon/svg-icon';
import { ErrorIcon } from '../../icons-index.ts';

const getThemeColorByError = (error?: boolean) => {
  if (!error) {
    return ''; // return empty string to not override icon color if any
  }

  return 'contentRed';
};

const StyledTextarea = styled.textarea(({ theme }) => ({
  height: 124,
  borderRadius: theme.borderRadius.base,
  width: '100%',
  padding: 0,
  color: 'inherit',
  background: 'inherit',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  border: 'none',
  '&::placeholder': {
    color: theme.styleguideColors.contentSecondary,
  },
  resize: 'none',
}));

const TextareaContainer = styled('div')<TextareaProps>(
  ({ theme, disabled, error }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    borderRadius: theme.borderRadius.base,
    color: theme.styleguideColors.contentPrimary,
    background: theme.styleguideColors.fillSecondary,
    fontFamily: theme.typography.fontFamily.primary,
    fontSize: '0.875rem',

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

const SuffixContainer = styled('div')(({ theme }) => ({
  marginLeft: 16,
}));

export interface TextareaProps extends BaseProps {
  disabled?: boolean;
  placeholder?: string;
  value?: string | number;
  onChange?: (ev: any) => void;
  onFocus?: (ev: any) => void;
  onBlur?: (ev: any) => void;
  onKeyDown?: (ev: any) => void;
  label?: ReactNode | string;
  labelFontSize?: LabelFontSize;
  rightLabel?: ReactNode | string;
  /** @deprecated */
  prefixIcon?: ReactNode | null;
  suffixIcon?: ReactNode | null;
  error?: boolean;
  validationText?: string | null;
}

export function Textarea({
  id,
  className,
  style,
  disabled,
  label,
  rightLabel,
  suffixIcon,
  prefixIcon,
  error,
  validationText,
  onFocus,
  labelFontSize = LabelFontSize.default,
  ...restProps
}: TextareaProps) {
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
      <TextareaContainer error={error}>
        <StyledTextarea
          title=""
          disabled={disabled}
          onFocus={handleFocus}
          {...restProps}
        />
        {suffixIcon && <SuffixContainer>{suffixIcon}</SuffixContainer>}
      </TextareaContainer>
    </FormField>
  );
}

export default Textarea;
