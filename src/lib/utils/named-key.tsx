import {hashPrefixRegEx} from './named-key-prefix'

export interface SplitDataType {
  prefix: string;
  hash: string;
}

export const deriveSplitDataFromNamedKeyValue = (
  namedKeyValue: string
): SplitDataType => {
  const [hash, lastDigits] = namedKeyValue
    .replace(hashPrefixRegEx, '')
    .split('-');

  const formattedPrefix = namedKeyValue.match(hashPrefixRegEx)
    ? namedKeyValue.match(hashPrefixRegEx)![0]
    : '';
  const formattedHash = lastDigits ? `${hash}-${lastDigits}` : `${hash}`;

  return {
    prefix: formattedPrefix,
    hash: formattedHash,
  };
};
