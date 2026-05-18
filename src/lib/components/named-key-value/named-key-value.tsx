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

export const NamedKeyValue =
    ({
         namedKey,
         noPrefix,
         hashLength,
         csprLiveDomainPath
     }: NamedKeyValueProps) => {
        const responsiveHashLength = useMatchMedia([
            HashLength.TINY,
            HashLength.MEDIUM,
            HashLength.FULL,
            HashLength.FULL,
        ], [hashLength]);


        const {prefix, hash,} = deriveSplitDataFromNamedKeyValue(namedKey);

        const displayValue = namedKey.includes(NamedKeyPrefix.UREF)
            ? namedKey
            : hash;

        const isURefNamedKey = namedKey.includes(NamedKeyPrefix.UREF);
        const redirectHash = isURefNamedKey ? namedKey : hash;

        const redirectPath = `${csprLiveDomainPath}/search/${redirectHash}`;
        return (
            <FlexRow>
                {redirectPath ? (
                    <Link color={'hash'}  href={redirectPath}>
                        {!noPrefix && prefix}
                        {formatHash(displayValue, hashLength ?? responsiveHashLength)}
                    </Link>
                ) : (
                    formatHash(displayValue, hashLength ?? responsiveHashLength)
                )}
            </FlexRow>
        );
    };

export default NamedKeyValue;


