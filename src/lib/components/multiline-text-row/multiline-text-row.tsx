import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { BodyText } from '../body-text/body-text';
import { FlexRow } from '../flex-row/flex-row';
import { Tooltip } from '../tooltip/tooltip';

interface ContentStyledProps {
  height: string;
  width?: string;
}

export interface MultilineTextRowProps {
  label?: string;
  rightLabel?: string;
  text?: string | ReactNode;
  height?: string;
  width?: string;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  suffixText?: string;
  labelIcon?: ReactNode;
  labelTooltipText?: string | undefined;
}

const StyledWrapper = styled('div')(({ theme }) =>
  theme.withMedia({
    display: 'flex',
    flexDirection: 'column',
  })
);

const LabelContainer = styled('div')(({ theme }) =>
  theme.withMedia({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  })
);

const InputContainer = styled('div')<ContentStyledProps>(
  ({ theme, height, width }) =>
    theme.withMedia({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 16px',
      height: height,
      width: width,
      backgroundColor: theme.styleguideColors.backgroundPrimary,
      border: theme.border.base,
      borderRadius: theme.borderRadius.base,
    })
);

const SuffixContainer = styled('div')(({ theme }) =>
  theme.withMedia({
    marginLeft: 16,
  })
);

const SuffixTextContainer = styled(SuffixContainer)(({ theme }) =>
  theme.withMedia({
    color: theme.styleguideColors.contentSecondary,
  })
);

const PrefixContainer = styled('div')(({ theme }) =>
  theme.withMedia({
    marginRight: 16,
  })
);

export function MultilineTextRow(props: MultilineTextRowProps) {
  const {
    label,
    rightLabel,
    height = 'auto',
    width,
    text,
    prefixIcon,
    suffixText,
    suffixIcon,
    labelIcon,
    labelTooltipText,
  } = props;

  return (
    <StyledWrapper>
      <LabelContainer>
        {label && (
          <Tooltip title={labelTooltipText} limitWidth>
            <FlexRow gap={3} align={'center'}>
              <BodyText size={1}>{label}</BodyText>
              {labelIcon}
            </FlexRow>
          </Tooltip>
        )}
        {rightLabel && <BodyText size={1}>{rightLabel}</BodyText>}
      </LabelContainer>
      <InputContainer height={height} width={width}>
        {prefixIcon && <PrefixContainer>{prefixIcon}</PrefixContainer>}
        <FlexRow itemsSpacing={4}>
          <Tooltip title={typeof text === 'string' ? text : null}>
            <BodyText size={3} monotype scale={'xs'}>
              {text}
            </BodyText>
          </Tooltip>
        </FlexRow>
        {suffixIcon && <SuffixContainer>{suffixIcon}</SuffixContainer>}
        {suffixText && (
          <SuffixTextContainer>
            <BodyText size={3}>{suffixText}</BodyText>
          </SuffixTextContainer>
        )}
      </InputContainer>
    </StyledWrapper>
  );
}

export default MultilineTextRow;
