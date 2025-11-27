import React from 'react';
import { formatHash, HashLength } from '../../utils/formatters';
import { deriveSplitDataFromNamedKeyValue } from '../../utils/named-key';
import { NamedKeyPrefix } from '../../utils/named-key-prefix';
import { useMatchMedia } from '../../utils/match-media';
import FlexRow from '../flex-row/flex-row';
import Link from '../link/link';

interface NamedKeyValueProps {
  namedKey: string;
  noPrefix?: boolean;
  hashLength?: HashLength;
  getSearchPath: (hash: string) => string;
}

export const NamedKeyValue = ({
  namedKey,
  noPrefix,
  hashLength,
  getSearchPath,
}: NamedKeyValueProps) => {
  const responsiveHashLength = useMatchMedia(
    [HashLength.TINY, HashLength.MEDIUM, HashLength.FULL, HashLength.FULL],
    [],
  );
  const { prefix, hash } = deriveSplitDataFromNamedKeyValue(namedKey);

  const isURefNamedKey = namedKey.includes(NamedKeyPrefix.UREF);
  const redirectHash = isURefNamedKey ? namedKey : hash;

  const redirectPath = getSearchPath(redirectHash);
  return (
    <FlexRow>
      {redirectPath ? (
        <Link color={'hash'} href={redirectPath}>
          {!noPrefix && prefix}
          {formatHash(hash, hashLength || responsiveHashLength)}
        </Link>
      ) : (
        formatHash(hash, hashLength || responsiveHashLength)
      )}
    </FlexRow>
  );
};

export default NamedKeyValue;
