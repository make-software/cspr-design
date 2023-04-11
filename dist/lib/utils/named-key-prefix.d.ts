export declare enum NamedKeyPrefix {
    HASH = "hash-",
    CONTRACT = "contract-",
    UREF = "uref-",
    DEPLOY = "deploy-",
    ERA_INFO_PREFIX = "era-",
    BALANCE_PREFIX = "balance-",
    BID_PREFIX = "bid-",
    WITHDRAW_PREFIX = "withdraw-",
    DICTIONARY_PREFIX = "dictionary-",
    ACCOUNT_HASH = "account-hash-",
    CONTRACT_PACKAGE = "contract-package-"
}
export declare const hashPrefixRegEx: RegExp;
export declare const hasNamedKeyPrefix: (value: any) => boolean;
export declare const getNamedKeyPrefix: (value: string) => string;
//# sourceMappingURL=named-key-prefix.d.ts.map