import React from 'react';

import { BaseProps } from '../../types';
import { matchSize } from '../../utils/match-size';
import FlexRow from '../flex-row/flex-row';
import { BodyTextProps } from '../body-text/body-text';
import styled from 'styled-components';
import Text, { TextVariation } from '../text/text';

export interface CircularIndicatorProps extends BaseProps {
  size: 'medium';
  progress: number;
  textSize: 1 | 2;
}

export enum CircularIndicatorTextSize {
  'small' = 1,
  'default' = 2,
}

export const CircularIndicatorTextVariation: {
  [CircularIndicatorTextSize.small]: TextVariation;
  [CircularIndicatorTextSize.default]: TextVariation;
} = {
  [CircularIndicatorTextSize.small]: 'darkGray',
  [CircularIndicatorTextSize.default]: 'black',
};

const StyledText = styled(Text)<BodyTextProps & { textSize: 1 | 2 }>(
  ({ theme, size = 3, textSize }) => ({
    fontWeight: matchSize(
      {
        1: theme.typography.fontWeight.semiBold,
        2: theme.typography.fontWeight.medium,
        3: theme.typography.fontWeight.regular,
      },
      size
    ),
    fontSize: matchSize(
      {
        1: '1.3rem',
        2: '1.4rem',
      },
      textSize
    ),
    lineHeight: '2rem',
  })
);

export const ProgressColorsRange = [
  { id: 1, limit: 0, color: 'E6332A' },
  { id: 2, limit: 0.25, color: 'ED8417' },
  { id: 3, limit: 0.5, color: 'F1BF0B' },
  { id: 4, limit: 0.75, color: 'BBDE31' },
  { id: 5, limit: 0.99, color: '86DE56' },
  { id: 6, limit: 1, color: '31DE91' },
];

const calculatePerfomanceGradientColor = (progress) => {
  const PROGRESS_MINIMUM = 95;
  const PROGRESS_MAXIMUM = 100;

  if (progress < PROGRESS_MINIMUM) {
    return `#${ProgressColorsRange[0].color}`;
  }

  const ratio =
    (progress - PROGRESS_MINIMUM) / (PROGRESS_MAXIMUM - PROGRESS_MINIMUM);

  const firstGradientItem = ProgressColorsRange.find(
    (range) => ratio <= range.limit
  );

  const firstGradientColor = firstGradientItem!.color;

  if (firstGradientItem!.id === ProgressColorsRange.length) {
    return `#${firstGradientColor}`;
  }

  const secondGradientColor = ProgressColorsRange.find(
    (range) => range.id === firstGradientItem!.id + 1
  )!.color;

  const hex = (x) => {
    return x.toString(16).padStart(2, '0');
  };

  const r = Math.ceil(
    parseInt(firstGradientColor.substring(0, 2), 16) * ratio +
      parseInt(secondGradientColor.substring(0, 2), 16) * (1 - ratio)
  );
  const g = Math.ceil(
    parseInt(firstGradientColor.substring(2, 4), 16) * ratio +
      parseInt(secondGradientColor.substring(2, 4), 16) * (1 - ratio)
  );
  const b = Math.ceil(
    parseInt(firstGradientColor.substring(4, 6), 16) * ratio +
      parseInt(secondGradientColor.substring(4, 6), 16) * (1 - ratio)
  );
  const color = hex(r) + hex(g) + hex(b);

  return `#${color}`;
};

/**
 * @example
 * <CircularIndicator size="medium" progress={0 - 100} />
 */
export function CircularIndicator({
  size,
  progress,
  textSize,
}: CircularIndicatorProps) {
  const { stroke, radius } = matchSize(
    {
      medium: { stroke: 4, radius: 12 },
    },
    size
  );

  // validation 0 - 100
  if (progress == null || progress < 0 || progress > 100) {
    progress = 0;
  }

  const strokeRadius = radius - stroke / 2;
  const strokeCircumference = strokeRadius * 2 * Math.PI;
  const strokeDashoffset =
    strokeCircumference - (progress / 100) * strokeCircumference;

  const roundedProgress = progress.toPrecision(3);
  const color = calculatePerfomanceGradientColor(progress);

  return (
    <FlexRow align="center">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={strokeCircumference + ' ' + strokeCircumference}
          style={{
            strokeDashoffset,
            transition: 'stroke-dashoffset 0.35s',
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%',
          }}
          r={strokeRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <StyledText
        size={3}
        style={{ marginLeft: 8 }}
        textSize={textSize}
        variation={CircularIndicatorTextVariation[textSize]}
      >
        {roundedProgress}%
      </StyledText>
    </FlexRow>
  );
}

export default CircularIndicator;
