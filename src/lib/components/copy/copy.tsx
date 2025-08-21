import React, { useState } from 'react';
import FlexRow from '../flex-row/flex-row';
import BodyText from '../body-text/body-text';
import styled from 'styled-components';
import SvgIcon from '../svg-icon/svg-icon';
import copy from 'copy-to-clipboard';

import SuccessIcon from '../../assets/icons/ic-success.svg';
import CopyIcon from '../../assets/icons/ic-copy.svg';
import { StyledTableRow } from '../table-row/table-row.tsx';

type CopyColor = 'blue' | 'gray' | 'green';

const copyColorMapper = {
  blue: 'contentBlue',
  gray: 'contentTertiary',
  green: 'contentGreen',
};

const StyledContainer = styled.span<{ isCopied: boolean }>`
  ${({ theme, isCopied }) => ({
    lineHeight: '20px',
    cursor: 'pointer',
    position: 'relative',
    pointerEvents: isCopied ? 'none' : 'initial',
    '>:not(:first-child)': {
      marginLeft: 8,
    },

    '& > svg': {
      color: isCopied
        ? theme.styleguideColors.contentGreen
        : theme.styleguideColors.contentTertiary,
      ':hover': {
        color: theme.styleguideColors.fillPrimaryRed,
      },
      ':active': {
        color: theme.styleguideColors.fillPrimaryRedClick,
      },
      ...(isCopied && {
        animation: 'fadeInOut 3s',
      }),
    },
  })}
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

  const handleCopy = (event) => {
    event.stopPropagation();

    if (value) {
      copy(value);
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
          marginRight
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
