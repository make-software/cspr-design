export declare const isNonNullable: <T extends any>(value: T) => value is NonNullable<T>;
export declare const uniq: <T extends any>(array?: readonly T[]) => T[];
export declare function indexBy<T, K extends PropertyKey>(arrayOrSelector: readonly T[], maybeSelector?: (item: T) => K): Record<K, T>;
export declare function isObject(value: unknown): value is object;
//# sourceMappingURL=guards.d.ts.map