import React from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

import { BaseProps } from '../../types';

type Ref = HTMLSpanElement;

export type TextVariation =
  | 'inherit'
  | 'gray'
  | 'white'
  | 'contentViolet'
  | 'lightGray'
  | 'darkGray'
  | 'black'
  | 'blue'
  | 'red'
  | 'green';

/* eslint-disable-next-line */
export interface TextProps extends BaseProps {
  variation?: TextVariation;
  monotype?: boolean;
  uppercase?: boolean;
  capitalize?: boolean;
  capitalizeFirstLetter?: boolean;
  noWrap?: boolean;
  loading?: boolean;
  wordBreak?: boolean;
}

const StyledText = styled('span').withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['loading'].includes(prop) && defaultValidatorFn(prop),
})<TextProps>(
  ({
    theme,
    loading,
    variation = 'inherit',
    monotype = false,
    noWrap = false,
    uppercase = false,
    capitalize = false,
    capitalizeFirstLetter = false,
    wordBreak = false,
  }) => ({
    fontFamily: monotype
      ? theme.typography.fontFamily.mono
      : theme.typography.fontFamily.primary,
    fontWeight: monotype
      ? theme.typography.fontWeight.regular
      : theme.typography.fontWeight.medium,
    color: {
      inherit: 'inherit',
      lightGray: theme.styleguideColors.contentTertiary,
      contentViolet: theme.styleguideColors.contentViolet,
      gray: theme.styleguideColors.contentTertiary,
      darkGray: theme.styleguideColors.contentSecondary,
      black: theme.styleguideColors.contentPrimary,
      white: theme.styleguideColors.contentOnFill,
      blue: theme.styleguideColors.contentBlue,
      red: theme.styleguideColors.contentRed,
      green: theme.styleguideColors.contentGreen,
    }[variation],
    whiteSpace: noWrap ? 'nowrap' : 'initial',

    ...(loading && {
      display: 'inline-block',
      width: '100%',
    }),

    ...(uppercase && {
      textTransform: 'uppercase',
    }),
    ...(capitalize && {
      textTransform: 'capitalize',
    }),
    ...(capitalizeFirstLetter && {
      '&:first-letter': {
        textTransform: 'capitalize',
      },
    }),
    ...(wordBreak && {
      wordBreak: 'break-word',
    }),
    '-webkit-text-size-adjust': '100%',
  })
);

export const Text = React.forwardRef<Ref, TextProps>(function Text(
  { ...props }: TextProps,
  ref
) {
  if (props.loading) {
    return (
      <StyledText ref={ref} {...props}>
        <Skeleton />
      </StyledText>
    );
  }

  return <StyledText ref={ref} {...props} />;
});

export default Text;
