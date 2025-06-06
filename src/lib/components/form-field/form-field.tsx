import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { BaseProps } from '../../types';
import { SubtitleText } from '../subtitle-text/subtitle-text';
import CaptionText from '../caption-text/caption-text';
import BodyText from "../body-text/body-text";

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
    position: 'relative',
    color: theme.styleguideColors[getThemeColor(status)],
  })
);

const StatusCaptionText = styled(CaptionText)`
  position: absolute;
`;

export enum LabelFontSize {
    'default' = 'default',
    'small' = 'small',
}

const StyledLabelText = ({ labelFontSize, ...props }) => {
    return labelFontSize === LabelFontSize.small ? (
        <BodyText size={1} lineHeight={'xs'} {...props} />
    ) : (
        <SubtitleText size={1} {...props} />
    );
};

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
  labelFontSize?: LabelFontSize;
}

export function FormField({
  id,
  label,
  rightLabel,
  status,
  statusText,
  children,
  labelFontSize = LabelFontSize.default,
  ...restProps
}: FormFieldProps) {
  return (
    <StyledContainer {...restProps}>
      <LabelContainer>
        {label && <StyledLabelText labelFontSize={labelFontSize} id={id}>{label}</StyledLabelText>}
        {rightLabel && <StyledLabelText labelFontSize={labelFontSize}>{rightLabel}</StyledLabelText>}
      </LabelContainer>

      {children}

      <StatusTextContainer status={status} role="alert" aria-live="assertive">
        <StatusCaptionText size={2}>{statusText}</StatusCaptionText>
      </StatusTextContainer>
    </StyledContainer>
  );
}

export default FormField;
