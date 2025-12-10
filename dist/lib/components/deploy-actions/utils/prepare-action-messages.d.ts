import { Deploy, TransactorHashType } from '../../../types/types';
export interface MessageDataAccount {
    accountHash?: string;
    publicKey?: string;
    hash?: string;
    logo?: string;
    path?: string;
    hashType?: TransactorHashType;
}
export interface MessageData {
    entryPointName?: string | null;
    actionName?: string;
    numOfTokens?: number;
    numOfTokensPrefix?: string | null;
    symbol?: string;
    callerPrefix?: string;
    callerAccount?: MessageDataAccount;
    prefix1?: string;
    account1?: MessageDataAccount;
    prefix2?: string;
    account2?: MessageDataAccount;
    nftTokenIds?: string[] | null;
    contractPrefix?: string;
    amount?: string;
}
export declare const prepareFtActionMessageDataForDeployDetails: (deploy: Deploy, getPublicKeyByAccountHash: (hash: string) => any) => MessageData | null;
export declare const prepareNftActionMessageDataForDeployDetails: (deploy: Deploy, getPublicKeyByAccountHash: (hash: string) => any) => MessageData | null;
//# sourceMappingURL=prepare-action-messages.d.ts.map