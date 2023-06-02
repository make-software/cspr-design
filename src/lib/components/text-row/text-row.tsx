import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { BodyText } from '../body-text/body-text';
import { FlexRow } from '../flex-row/flex-row';
import { SubtitleText } from '../subtitle-text/subtitle-text';
import { TruncateBox } from '../truncate-box/truncate-box';
import { formatHash } from '../../utils/formatters';
import { Tooltip } from '../tooltip/tooltip';
import { useMatchMedia } from '../../utils/match-media';
import { CopyHash } from '../copy-hash/copy-hash';
import { HashLength } from '../../utils/formatters';
import { Size } from '../../types';

const StyledWrapper = styled('div')(({}) => ({
  display: 'flex',
  flexDirection: 'column',
}));

const LabelContainer = styled('div')(({}) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 4,
}));

const InputContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 16px',
  height: 36,
  backgroundColor: theme.styleguideColors.backgroundPrimary,
  border: theme.border.base,
  borderRadius: theme.borderRadius.base,
}));

const SuffixContainer = styled('div')(({}) => ({
  marginLeft: 16,
}));

const SuffixTextContainer = styled(SuffixContainer)(({ theme }) => ({
  color: theme.styleguideColors.contentSecondary,
}));

const PrefixContainer = styled('div')(({}) => ({
  marginRight: 16,
}));

export enum TextRowType {
  'Text' = 'text',
  'Hash' = 'hash',
  'Number' = 'number',
}

export interface TextRowProps {
  label?: string;
  rightLabel?: string;
  text?: string | null;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  suffixText?: string;
  type: TextRowType;
  labelIcon?: ReactNode;
  labelTooltipText?: string | undefined;
}
export function TextRow(props: TextRowProps) {
  const {
    label,
    rightLabel,
    text,
    prefixIcon,
    suffixText,
    suffixIcon,
    type,
    labelIcon,
    labelTooltipText,
  } = props;

  const responsiveHashSize = useMatchMedia(
    [HashLength.SMALL, HashLength.MEDIUM, HashLength.LARGE],
    []
  );
  const responsiveTruncateSize = useMatchMedia<Size>([2, 3, 4, 5], []);

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
      <InputContainer>
        {prefixIcon && <PrefixContainer>{prefixIcon}</PrefixContainer>}
        <FlexRow itemsSpacing={4}>
          {type === TextRowType.Hash ? (
            <Tooltip title={text}>
              <BodyText size={3} monotype scale={"xs"}>
                {formatHash(text || '', responsiveHashSize)}
              </BodyText>
            </Tooltip>
          ) : (
            <TruncateBox size={responsiveTruncateSize}>
              <Tooltip title={text}>
                <BodyText size={3} monotype={type === TextRowType.Number}>
                  {text}
                </BodyText>
              </Tooltip>
            </TruncateBox>
          )}
          <CopyHash value={text ? text : ''} minified variation="gray" />
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

export default TextRow;
