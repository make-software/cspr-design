import React from 'react';
import styled from 'styled-components';
import { HashLength, formatHash } from '../../../utils/formatters';
import Link from '../../link/link';
import Tooltip from '../../tooltip/tooltip';
import BodyText from '../../body-text/body-text';

const TokenWrapper = styled.div(({ theme }) => ({
  padding: '2px 8px',
  borderRadius: '4px',
  backgroundColor: theme.styleguideColors.fillSecondary,
}));

const MIN_TRUNCATE_HASH_LENGTH = HashLength.TINY * 2 + 3;

export const NftTokenId = ({ token_id, path }) => {
  const tokenIdContent = (
    <TokenWrapper key={`token-${token_id}`}>
      <BodyText size={3}>
        <Link
          color={'primaryBlue'}
          href={path}
          ariaDescription={'Link to nft token details'}
        >
          {formatHash(token_id.toString(), HashLength.LITTLE)}
        </Link>
      </BodyText>
    </TokenWrapper>
  );

  return token_id.length > MIN_TRUNCATE_HASH_LENGTH ? (
    <Tooltip tooltipContent={token_id} scale={'xs'} lineHeight={'xs'}>
      {tokenIdContent}
    </Tooltip>
  ) : (
    tokenIdContent
  );
};

export const NftTokenIds = ({
  nftTokenIds,
  collectionHash,
  csprLiveDomainPath,
}: {
  nftTokenIds: string[] | undefined | null;
  collectionHash: string;
  csprLiveDomainPath: string;
}) => {
  return (
    <>
      {nftTokenIds
        ? nftTokenIds.map((nftId) => (
            <NftTokenId
              token_id={nftId}
              key={nftId}
              path={`${csprLiveDomainPath}/contracts/${collectionHash}/nfts/${nftId}`}
            />
          ))
        : null}
    </>
  );
};
