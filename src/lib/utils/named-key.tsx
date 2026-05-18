import { getNamedKeyPrefix, hashPrefixRegExpV2 } from './named-key-prefix';

export interface SplitDataType {
  prefix: string;
  hash: string;
}

export const deriveSplitDataFromNamedKeyValue = (namedKeyValue: string) => {
  const formattedPrefix = getNamedKeyPrefix(namedKeyValue);

  const isURef = namedKeyValue.startsWith('uref-');

  if (isURef) {
    return {
      prefix: formattedPrefix,
      hash: namedKeyValue.replace(/^uref-/, ''),
    };
  }

  const cleaned = namedKeyValue.replace(hashPrefixRegExpV2, '');
  const parts = cleaned.split('-');

  const hash = parts[0];
  const lastDigits = parts.slice(1).join('-');

  return {
    prefix: formattedPrefix,
    hash: lastDigits ? `${hash}-${lastDigits}` : hash,
  };
};