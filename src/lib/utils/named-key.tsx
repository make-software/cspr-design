export interface SplitDataType {
  prefix: string;
  hash: string;
}

export const hashPrefixRegEx = new RegExp(`(?:(entity-)?contract(?:-package)?|account-hash|dictionary|withdraw|balance|deploy|uref|hash|era|bid)-(?=[0-9a-fA-F])`,
  'gi'
);

export const deriveSplitDataFromNamedKeyValue = (
    namedKeyValue: string
): SplitDataType => {
  const match = namedKeyValue.match(hashPrefixRegEx);
  const prefix = match ? match[0] : '';
  const hash = prefix ? namedKeyValue.slice(prefix.length) : namedKeyValue;

  return { prefix, hash };
};