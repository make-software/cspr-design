export const isNonNullable = <T extends any>(
    value: T
): value is NonNullable<T> => value != null;

export const uniq = <T extends any>(array?: readonly T[]) => {
    if (array === undefined) {
        return [];
    }

    const seen = new Set<T>();
    const result: T[] = [];

    for (const item of array) {
        if (!seen.has(item)) {
            seen.add(item);
            result.push(item);
        }
    }

    return result;
};

export function indexBy<T, K extends PropertyKey>(
    arrayOrSelector: readonly T[],
    maybeSelector?: (item: T) => K
): Record<K, T> {
    const array = arrayOrSelector;
    const selector = maybeSelector as (item: T) => K;

    const result = {} as Record<K, T>;

    for (const item of array) {
        const key = selector(item);
        (result as any)[key] = item;
    }

    return result;
}

export function isObject(value: unknown): value is object {
    return typeof value === 'object' && value !== null;
}
