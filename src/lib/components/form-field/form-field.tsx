import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { BaseProps } from '../../types';
import { SubtitleText } from '../subtitle-text/subtitle-text';

const getThemeColor = (status?: FormFieldStatus | null) => {
  if (status == null) {
    return 'contentTertiary';
  }

  return {
    [FormFieldStatus.Error]: 'contentRed',
    [FormFieldStatus.Success]: 'contentGreen',
  }[status];
};

const StyledContainer = styled.div<{ disabled?: boolean }>(
  ({ theme, disabled }) => ({
    display: 'flex',
    flexDirection: 'column',
    ...(disabled && {
      opacity: 0.5,
    }),
  })
);

const LabelContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& > *': { marginBottom: 4 },
}));

const StatusTextContainer = styled('div')<FormFieldProps>(
  ({ theme, status: status }) => ({
    color: theme.styleguideColors[getThemeColor(status)],
  })
);

export enum FormFieldStatus {
  Error = 'error',
  Success = 'success',
}

export interface FormFieldProps extends BaseProps {
  label?: ReactNode | string;
  rightLabel?: ReactNode | string;
  status?: FormFieldStatus;
  statusText?: string | null;
  disabled?: boolean;
}

export function FormField({
  label,
  rightLabel,
  status,
  statusText,
  children,
  ...restProps
}: FormFieldProps) {
  return (
    <StyledContainer {...restProps}>
      <LabelContainer>
        {label && <SubtitleText size={1}>{label}</SubtitleText>}
        {rightLabel && <SubtitleText size={1}>{rightLabel}</SubtitleText>}
      </LabelContainer>

      {children}

      <StatusTextContainer status={status}>
        <SubtitleText size={2}>{statusText}</SubtitleText>
      </StatusTextContainer>
    </StyledContainer>
  );
}

export default FormField;
