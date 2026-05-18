export interface SplitDataType {
  prefix: string;
  hash: string;
}

const prefixOnlyRegExp =
  /^(?:(?:entity-)?contract(?:-package)?|account-hash|dictionary|withdraw|balance|deploy|uref|hash|era|bid)-/i;

export const deriveSplitDataFromNamedKeyValue = (
    namedKeyValue: string
): SplitDataType => {
  const match = namedKeyValue.match(prefixOnlyRegExp);
  const prefix = match ? match[0] : '';
  const hash = prefix ? namedKeyValue.slice(prefix.length) : namedKeyValue;

  return { prefix, hash };
};