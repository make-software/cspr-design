import { hashPrefixRegExpV2 } from './named-key-prefix';

export interface SplitDataType {
  prefix: string;
  hash: string;
}

export const deriveSplitDataFromNamedKeyValue = (
    namedKeyValue: string
): SplitDataType => {
  const [hash, lastDigits] = namedKeyValue
      .replace(hashPrefixRegExpV2, '')
      .split('-');

  const formattedPrefix = namedKeyValue.match(hashPrefixRegExpV2)
      ? namedKeyValue.match(hashPrefixRegExpV2)![0]
      : '';

  const formattedHash = lastDigits ? `${hash}-${lastDigits}` : `${hash}`;


  return {
    prefix: formattedPrefix,
    hash: formattedHash,
  };
};