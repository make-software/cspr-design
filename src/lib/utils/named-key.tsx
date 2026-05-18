import { getNamedKeyPrefix, hashPrefixRegExpV2 } from './named-key-prefix';

export interface SplitDataType {
  prefix: string;
  hash: string;
}

export const deriveSplitDataFromNamedKeyValue = (
    namedKeyValue: string,
): SplitDataType => {
  const formattedPrefix = getNamedKeyPrefix(namedKeyValue);

  const cleanedValue = namedKeyValue.replace(hashPrefixRegExpV2, '');

  console.log('cleanedValue',cleanedValue);
  console.log('namedKeyValue',namedKeyValue);

  const isURef = namedKeyValue.includes('uref-');

  console.log('isURef',isURef);

  if (isURef) {
    return {
      prefix: formattedPrefix,
      hash: cleanedValue,
    };
  }

  const parts = cleanedValue.split('-');
  const hash = parts[0];
  const lastDigits = parts.slice(1).join('-');

  return {
    prefix: formattedPrefix,
    hash: lastDigits ? `${hash}-${lastDigits}` : hash,
  };
};