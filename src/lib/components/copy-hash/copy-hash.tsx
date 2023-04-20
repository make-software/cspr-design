import React, { useState } from 'react';
import FlexRow from '../flex-row/flex-row';
import BodyText from '../body-text/body-text';
import styled from 'styled-components';
import SvgIcon from '../svg-icon/svg-icon';
import copy from 'copy-to-clipboard';

const SuccessIcon = styled(SvgIcon)(({ theme }) => ({
  color: theme.styleguideColors.contentGreen,
}));

const StyledSvgIcon = styled(SvgIcon)(({ theme }) =>
  theme.withMedia({
    color: [
      theme.styleguideColors.contentTertiary,
      theme.styleguideColors.contentTertiary,
      theme.styleguideColors.contentBlue,
    ],
    path: {
      fill: [
        theme.styleguideColors.contentTertiary,
        theme.styleguideColors.contentTertiary,
        theme.styleguideColors.contentBlue,
      ],
    },
  })
);

export const CopyHash = ({ value }) => {
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
          <SuccessIcon src={'assets/icons/ic-success.svg'} marginRight />
          <BodyText size={2} variation="green">
            Copied!
          </BodyText>
        </FlexRow>
      ) : (
        <FlexRow align={'center'}>
          <StyledSvgIcon src="assets/icons/ic-copy.svg" marginRight />
          <BodyText size={2}>Copy Public Key</BodyText>
        </FlexRow>
      )}
    </FlexRow>
  );
};
