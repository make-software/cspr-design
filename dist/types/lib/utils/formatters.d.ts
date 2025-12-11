export declare const MINIMUM_SHOWING_BALANCE = 0.00001;
export declare const DEFAULT_AMOUNT_PRECISION = 4;
export declare const SMALL_PRECISION = 2;
export declare const DEFAULT_PRECISION = 5;
export declare const FULL_PRECISION = 9;
export declare const formatNumber: (value: number | string, { precision, notation, compactDisplay, }?: {
    precision?: number;
    notation?: "compact" | "standard";
    compactDisplay?: "short" | "long";
}) => string;
export declare const formatBigNumbers: (value: any) => string;
export declare const formatCurrency: (value: number | string, code: string, { precision, }?: {
    precision?: number;
}) => string;
export declare const formatPercentage: (value: number, { precision }?: {
    precision?: number;
}) => string;
export declare const formatTimestamp: (value: string) => string;
export declare const formatTimestampAge: (value: string) => string;
export declare const formatDate: (value: string | number) => string;
export declare const formatDateWithWeekday: (value: string) => string;
export declare const formatDateShort: (value: string) => string;
export declare const formatDateWithMonthAndYear: (value: string) => string;
export declare enum HashFontSize {
    'default' = "default",
    'big' = "big"
}
export declare enum HashLength {
    FULL = 0,
    TINY = 5,
    LITTLE = 10,
    SMALL = 15,
    MEDIUM = 20,
    LARGE = 25
}
export declare const shortenString: (valueToShort: string, visibleHashLength?: HashLength) => string;
export declare const formatHash: (hash: string, visibleHashLength?: HashLength) => string;
export declare const formatISODateOnly: (date: Date) => string;
export declare const formatDeploysCount: (value: any) => string;
export declare const formatRatesToCurrency: (value: any) => string;
export declare const truncateCSPRName: (name: string, limit: number) => string;
export declare const shortenCsprName: (csprName: string, visibleStringLength?: HashLength) => string;
//# sourceMappingURL=formatters.d.ts.map