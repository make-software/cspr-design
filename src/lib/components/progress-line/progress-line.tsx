import React from 'react';
import styled from 'styled-components';
import { FlexColumn } from '../flex-column/flex-column';
import { FlexRow } from '../flex-row/flex-row';
import { CaptionText } from '../caption-text/caption-text';
import { SvgIcon } from '../svg-icon/svg-icon';
import CheckIcon from '../../assets/icons/ic-check.svg';

export interface ProgressLineProps {
  steps: string[];
  currentIdx: number;
}

const StepWrapper = styled(FlexColumn)(({}) => ({
  position: 'relative',
}));

const StepText = styled(CaptionText)<{
  disabled?: boolean;
  isFirstStep: boolean;
  isLastStep: boolean;
  isCheckedStep: boolean;
}>(({ theme, disabled, isFirstStep, isLastStep, isCheckedStep }) =>
  theme.withMedia({
    color: disabled
      ? theme.styleguideColors.contentTertiary
      : theme.styleguideColors.contentBlue,
    position: 'absolute',
    bottom: 30,
    whiteSpace: ['inherit', 'nowrap', 'nowrap'],
    ...(isCheckedStep &&
      !isLastStep && {
        color: theme.styleguideColors.contentTertiary,
      }),
    ...(isFirstStep && {
      left: 0,
    }),
    ...(isLastStep && {
      right: 0,
    }),
  })
);

const StepContainer = styled(FlexRow)<{ disabled: boolean; checked: boolean }>(
  ({ theme, disabled, checked }) => ({
    borderRadius: '50%',
    border: `2px solid ${
      disabled
        ? theme.styleguideColors.contentQuaternary
        : theme.styleguideColors.contentBlue
    }`,
    background: checked
      ? disabled
        ? theme.styleguideColors.contentQuaternary
        : theme.styleguideColors.contentBlue
      : theme.styleguideColors.backgroundPrimary,
    width: 24,
    height: 24,
    '& svg': {
      path: {
        fill: theme.styleguideColors.backgroundPrimary,
      },
    },
  })
);

const Circle = styled.div<{ disabled?: boolean }>(({ theme, disabled }) => ({
  borderRadius: '50%',
  background: disabled
    ? theme.styleguideColors.contentQuaternary
    : theme.styleguideColors.contentBlue,
  width: 12,
  height: 12,
}));

const Line = styled.div<{ disabled?: boolean }>(({ theme, disabled }) => ({
  height: 2,
  background: disabled
    ? theme.styleguideColors.contentQuaternary
    : theme.styleguideColors.contentBlue,
  width: '100%',
}));

const renderStep = (
  label: string,
  idx: number,
  currentIdx: number,
  totalSteps: number
) => {
  const isCurrentStep = idx === currentIdx;
  const isFirstStep = idx === 0;
  const isLastStep = idx === totalSteps - 1;

  const isCompletedStep = idx < currentIdx;

  const isDisabledStep = !isCompletedStep && !isCurrentStep;
  const isCheckedStep = isCompletedStep || isLastStep;

  return (
    <React.Fragment key={`${idx}-${label}`}>
      {!isFirstStep && <Line disabled={isDisabledStep} />}

      <StepWrapper align="center">
        <StepText
          disabled={isDisabledStep}
          size={1}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          isCheckedStep={isCheckedStep}
        >
          {label}
        </StepText>
        <StepContainer
          disabled={isDisabledStep}
          checked={isCheckedStep}
          align="center"
          justify="center"
        >
          {isCheckedStep ? (
            <SvgIcon height={7} width={10} src={CheckIcon} />
          ) : (
            <Circle disabled={isDisabledStep} />
          )}
        </StepContainer>
      </StepWrapper>
      {!isLastStep && <Line disabled={!isFirstStep && !isCompletedStep} />}
    </React.Fragment>
  );
};

export function ProgressLine({ steps, currentIdx }: ProgressLineProps) {
  return (
    <FlexRow align="center">
      {steps.map((label, idx) =>
        renderStep(label, idx, currentIdx, steps.length)
      )}
    </FlexRow>
  );
}

export default ProgressLine;
