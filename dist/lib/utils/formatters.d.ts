export declare enum HashLength {
    FULL = 0,
    TINY = 5,
    LITTLE = 10,
    SMALL = 15,
    MEDIUM = 20,
    LARGE = 25
}
export declare const formatBigNumbers: (value: any) => string;
export declare const formatNumber: (value: number | string, { precision, notation, compactDisplay, }?: {
    precision?: number | undefined;
    notation?: "compact" | "standard" | undefined;
    compactDisplay?: "short" | "long" | undefined;
}) => string;
export declare const formatCurrency: (value: number | string, code: string, { precision, }?: {
    precision?: number | undefined;
}) => string;
export declare const formatTimestamp: (value: string, locale?: string) => string;
export declare const formatDistance: (token: any, count: any, options: any) => any;
export declare const formatDate: (value: string) => string;
export declare const formatDateShort: (value: string) => string;
export declare const formatHash: (hash: string, visibleHashLength?: HashLength) => string;
//# sourceMappingURL=formatters.d.ts.map