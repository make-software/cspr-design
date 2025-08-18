import React from 'react';

import Copy from '../copy/copy.tsx';
import Link from '../link/link.tsx';
import {
  truncateCSPRName,
  formatHash,
  HashLength,
} from '../../utils/formatters.ts';
import FlexRow from '../flex-row/flex-row.tsx';

const CSPR_NAME_TRUNCATION_LENGTH = 24;

interface HashLinkProps {
  href: string;
  minified?: boolean;
  hash: string | undefined;
  csprName?: string | null;
  hashLength?: HashLength;
}

export const HashLink = ({
  hash,
  href,
  csprName,
  hashLength = undefined,
  minified = true,
}: HashLinkProps) => {
  const copiedValue = csprName || hash;

  const truncatedCsprName =
    csprName && hashLength === HashLength.TINY
      ? truncateCSPRName(csprName, CSPR_NAME_TRUNCATION_LENGTH)
      : csprName;
  const formattedHash = hash ? formatHash(hash, hashLength) : null;

  return (
    <FlexRow itemsSpacing={4} align="center">
      <Link color={'hash'} href={href}>
        {truncatedCsprName || formattedHash}
      </Link>
      <Copy value={copiedValue} minified={minified} />
    </FlexRow>
  );
};
