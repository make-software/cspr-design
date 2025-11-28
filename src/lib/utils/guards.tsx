export const isNonNullable = <T extends any>(
  value: T,
): value is NonNullable<T> => value != null;
