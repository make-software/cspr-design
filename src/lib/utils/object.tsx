export const isObjEmpty = (obj) => obj == null || Object.keys(obj).length === 0;

export const mapToDictionary = <T, V extends Record<string, any>>(
  data: V[]
): T =>
  data &&
  data.reduce(
    (prev, curr) => ({
      ...prev,
      [curr.key.trim()]: curr.value,
    }),
    {} as T
  );
