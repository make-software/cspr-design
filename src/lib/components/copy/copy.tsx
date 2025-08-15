import React, { useState } from 'react';
import FlexRow from '../flex-row/flex-row';
import BodyText from '../body-text/body-text';
import styled from 'styled-components';
import SvgIcon from '../svg-icon/svg-icon';
import copy from 'copy-to-clipboard';

import SuccessIcon from '../../assets/icons/ic-success.svg';
import CopyIcon from '../../assets/icons/ic-copy.svg';

type CopyColor = 'blue' | 'gray';

const copyColorMapper = {
  blue: 'contentBlue',
  gray: 'contentTertiary',
};

const SuccessIconWrapper = styled(SvgIcon)(({ theme }) => ({
  color: theme.styleguideColors.contentGreen,
}));

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
  return (
    <FlexRow
      style={styles}
      align="center"
      onClick={() => {
        copy(value);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
      }}
    >
      {isCopied ? (
        <FlexRow align={'center'}>
          <SuccessIconWrapper src={SuccessIcon} marginRight />
          {!minified && (
            <BodyText size={3} variation="green">
              {copiedLabel}
            </BodyText>
          )}
        </FlexRow>
      ) : (
        <FlexRow align={'center'}>
          <StyledSvgIcon src={CopyIcon} marginRight variation={variation} />
          {!minified && (
            <BodyText size={3} variation={'black'}>
              {label}
            </BodyText>
          )}
        </FlexRow>
      )}
    </FlexRow>
  );
};

export default Copy;
