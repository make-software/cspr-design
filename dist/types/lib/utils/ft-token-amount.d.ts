import Big from 'big.js';
import { Decimals } from '../types/FTToken';
export declare const tokenDivider: (decimals: Decimals) => Big.Big;
export declare const getAmountFromMotes: (amount: string | undefined | null, decimals: Decimals) => string;
export declare const formatTokenAmount: (amount: string | undefined | null, precision?: number, shouldShortenAmount?: boolean) => string;
export declare const ftTokenAmountToCurrency: (amount: string | number, currencyPerFtTokenRate: number) => string;
//# sourceMappingURL=ft-token-amount.d.ts.map