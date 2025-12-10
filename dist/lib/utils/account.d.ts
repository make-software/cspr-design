import { AccountCentralizedInfo, AccountInfoResult, GeneralizedAccountInfo } from '../types/types';
type Input = {
    base64: string;
} | {
    publicKeyHex: string;
};
export declare const AccountModel: (input: Input) => {
    getPublicKey: () => string;
    getAccountHash: () => string;
    getBase64AccountHash: () => string;
};
export declare const getAccountInfoLogo: (accountInfo: AccountInfoResult | null | undefined) => string | null;
export declare const getCentralizedAccountInfoLogo: (accountInfo: AccountCentralizedInfo | null | undefined) => string | null;
/**
 * Derive account info from accountInfo or centralizedAccountInfo.
 * Reason for doing that, we have different interfaces for those objects.
 * @param accountInfoObj : AccountInfoResult | AccountCentralizedInfo
 */
export declare const deriveAccountInfo: (accountInfoObj: any) => GeneralizedAccountInfo | null;
export {};
//# sourceMappingURL=account.d.ts.map