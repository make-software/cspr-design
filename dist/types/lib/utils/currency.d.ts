export declare enum PrecisionCase {
    'none' = "none",
    'small' = "small",
    'deployCost' = "deployCost",
    'full' = "full"
}
export declare const CSPR_DECIMALS = 9;
export declare const MOTES_PER_CSPR_RATE = "1000000000";
export declare const currencyPrecisionByCase: (precisionCase?: PrecisionCase) => 0 | 2 | 5 | 9;
export declare const motesToCSPR: (motes: string) => string;
export declare const motesToCEP18Token: (motes: string, decimals: number) => string;
//# sourceMappingURL=currency.d.ts.map