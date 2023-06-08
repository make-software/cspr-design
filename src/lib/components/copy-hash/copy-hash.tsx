import React, { useState } from 'react';
import FlexRow from '../flex-row/flex-row';
import BodyText from '../body-text/body-text';
import styled from 'styled-components';
import SvgIcon from '../svg-icon/svg-icon';
import copy from 'copy-to-clipboard';

import SuccessIcon from '../../assets/icons/ic-success.svg';
import CopyIcon from '../../assets/icons/ic-copy.svg';

type CopyHashColor = 'blue' | 'gray';

const copyHashColorMapper = {
  blue: 'contentBlue',
  gray: 'contentTertiary',
};

const SuccessIconWrapper = styled(SvgIcon)(({ theme }) => ({
  color: theme.styleguideColors.contentGreen,
}));

const StyledSvgIcon = styled(SvgIcon)<{ variation?: CopyHashColor }>(
  ({ theme, variation = 'blue' }) =>
    theme.withMedia({
      color: theme.styleguideColors[copyHashColorMapper[variation]],
      path: {
        fill: theme.styleguideColors[copyHashColorMapper[variation]],
      },
    })
);

export interface CopyHashProps {
  value: string;
  label?: string;
  copiedLabel?: string;
  minified?: boolean;
  variation?: CopyHashColor;
}

export const CopyHash = ({
  value,
  label = 'Copy Public Key',
  copiedLabel = 'Copied!',
  variation,
  minified = false,
}: CopyHashProps) => {
  const [isCopiedHash, setIsCopiedHash] = useState(false);
  return (
    <FlexRow
      align="center"
      onClick={() => {
        copy(value);
        setIsCopiedHash(true);
        setTimeout(() => setIsCopiedHash(false), 3000);
      }}
    >
      {isCopiedHash ? (
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
          {!minified && <BodyText size={3}>{label}</BodyText>}
        </FlexRow>
      )}
    </FlexRow>
  );
};

export default CopyHash;
