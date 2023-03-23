export enum HashLength {
  FULL = 0,
  TINY = 5,
  LITTLE = 10,
  SMALL = 15,
  MEDIUM = 20,
  LARGE = 25,
}

export const formatHash = (
  hash: string,
  visibleHashLength: HashLength = HashLength.TINY
) => {
  const MIN_TRUNCATE_HASH_LENGTH = HashLength.TINY * 2 + 3;

  const [hashWithoutSuffix, lastDigits] = hash.split("-");

  const hashLength = hashWithoutSuffix.length;

  if (
    visibleHashLength === HashLength.FULL ||
    hashLength <= MIN_TRUNCATE_HASH_LENGTH
  ) {
    return hash;
  }

  const firstPart = hashWithoutSuffix.substring(0, visibleHashLength);
  const secondPart = hashWithoutSuffix.substring(
    hashLength - visibleHashLength
  );

  const truncatedHash = `${firstPart}...${secondPart}`;

  return lastDigits ? `${truncatedHash}-${lastDigits}` : `${truncatedHash}`;
};
