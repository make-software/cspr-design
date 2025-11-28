import React from 'react';

import Copy from '../copy/copy.tsx';
import { Link } from '../link/link.tsx';
import {
  formatHash,
  HashLength,
  truncateCSPRName,
} from '../../utils/formatters.ts';
import FlexRow from '../flex-row/flex-row.tsx';

const CSPR_NAME_TRUNCATION_LENGTH = 24;

interface HashLinkProps {
  href: string | undefined;
  hash: string | undefined;
  minified?: boolean;
  csprName?: string | null;
  hashLength?: HashLength;
  align?: string;
}

export const HashLink = ({
  hash,
  href = './',
  csprName,
  hashLength = undefined,
  minified = true,
  align = 'center',
}: HashLinkProps) => {
  const copiedValue = csprName || hash || '';

  const truncatedCsprName =
    csprName && hashLength === HashLength.TINY
      ? truncateCSPRName(csprName, CSPR_NAME_TRUNCATION_LENGTH)
      : csprName;
  const formattedHash = hash ? formatHash(hash, hashLength) : null;

  return (
    <FlexRow itemsSpacing={4} align={align}>
      <Link color={'primaryBlue'} href={href}>
        {truncatedCsprName || formattedHash}
      </Link>
      <Copy value={copiedValue} minified={minified} />
    </FlexRow>
  );
};
