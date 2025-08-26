import React, { useState } from 'react';
import FlexRow from '../flex-row/flex-row';
import BodyText from '../body-text/body-text';
import styled, { css, keyframes } from 'styled-components';
import SvgIcon from '../svg-icon/svg-icon';
import copyToClipboard from 'copy-to-clipboard';

import SuccessIcon from '../../assets/icons/ic-success.svg';
import CopyIcon from '../../assets/icons/ic-copy.svg';

type CopyColor = 'blue' | 'gray' | 'green';

const copyColorMapper = {
  blue: 'contentBlue',
  gray: 'contentTertiary',
  green: 'contentGreen',
};

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const StyledContainer = styled.span<{ isCopied: boolean }>`
  line-height: 20px;
  cursor: pointer;
  position: relative;

  > :not(:first-child) {
    margin-left: 8px;
  }

  pointer-events: ${(props) => (props.isCopied ? 'none' : 'initial')};
  animation: ${(props) =>
    props.isCopied
      ? css`
          ${fadeInOut} 3s
        `
      : 'none'};

  & svg {
    color: ${(props) =>
      props.isCopied
        ? props.theme.styleguideColors.contentGreen
        : props.theme.styleguideColors.contentTertiary};

    path {
      fill: ${(props) =>
        props.isCopied
          ? props.theme.styleguideColors.contentGreen
          : props.theme.styleguideColors.contentTertiary};
    }
    :hover {
      color: ${(props) => props.theme.styleguideColors.fillPrimaryBlue};
      path {
        fill: ${(props) => props.theme.styleguideColors.fillPrimaryBlue};
      }
    }
    :active {
      color: ${(props) => props.theme.styleguideColors.fillPrimaryBlueClick};
      path {
        fill: ${(props) => props.theme.styleguideColors.fillPrimaryBlueClick};
      }
    }
  }
`;

const StyledSvgIcon = styled(SvgIcon)<{ variation?: CopyColor }>(
  ({ theme, variation = 'blue' }) =>
    theme.withMedia({
      color: theme.styleguideColors[copyColorMapper[variation]],
      path: {
        fill: theme.styleguideColors[copyColorMapper[variation]],
      },
    }),
);

export interface CopyProps {
  value: string;
  styles?: React.CSSProperties;
  label?: string;
  copiedLabel?: string;
  minified?: boolean;
  variation?: CopyColor;
}

export const Copy = ({
  value,
  label = 'Copy Public Key',
  copiedLabel = 'Copied!',
  variation,
  styles,
  minified = false,
}: CopyProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const copiedIcon = isCopied ? SuccessIcon : CopyIcon;
  const copiedLabelText = isCopied ? copiedLabel : label;
  const copiedLabelStyle = isCopied ? 'green' : 'black';

  const handleCopy = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();

    if (value) {
      copyToClipboard(value);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2800);
    }
  };

  return (
    <FlexRow style={styles} align="center" itemsSpacing={8}>
      <StyledContainer onClick={handleCopy} isCopied={isCopied}>
        <StyledSvgIcon
          variation={variation}
          size={16}
          src={copiedIcon}
          role={'img'}
          alt={'Copy button'}
        />
        {!minified && (
          <BodyText size={3} variation={copiedLabelStyle}>
            {copiedLabelText}
          </BodyText>
        )}
      </StyledContainer>
    </FlexRow>
  );
};

export default Copy;
