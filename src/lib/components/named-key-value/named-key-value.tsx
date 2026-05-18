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
    csprLiveDomainPath: string;
}

export const NamedKeyValue = ({
                                  namedKey,
                                  noPrefix,
                                  hashLength,
                                  csprLiveDomainPath,
                              }: NamedKeyValueProps) => {
    const { prefix, hash } = deriveSplitDataFromNamedKeyValue(namedKey);

    const isURefNamedKey = namedKey.startsWith('uref-');

    const responsiveHashLength = useMatchMedia(
        [HashLength.TINY, HashLength.MEDIUM, HashLength.FULL, HashLength.FULL],
        [hashLength],
    );

    const resolvedHashLength = hashLength ?? responsiveHashLength;

    const redirectHash = namedKey; // keep full for routing
    const redirectPath = `${csprLiveDomainPath}/search/${redirectHash}`;

    const displayValue = formatHash(
        namedKey,
        resolvedHashLength
    );

    console.log('RENDER NamedKeyValue', namedKey);

    return (
        <FlexRow>
            <Link color="hash" href={redirectPath}>
                {!noPrefix && prefix}
                {displayValue}
            </Link>
        </FlexRow>
    );
};
export default NamedKeyValue;