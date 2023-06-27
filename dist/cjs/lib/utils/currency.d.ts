export declare enum PrecisionCase {
    'deployCost' = "deployCost",
    'full' = "full"
}
export declare const MOTES_PER_CSPR_RATE = "1000000000";
export declare const currencyPrecisionByCase: (precisionCase?: PrecisionCase) => 0 | 5 | 9;
export declare const motesToCSPR: (motes: string) => string;
export declare const motesToCEP18Token: (motes: string, decimals: number) => string;
//# sourceMappingURL=currency.d.ts.map