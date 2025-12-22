import { Deploy, TransactorHashType } from '../../../types/types';
import { FTEntryPointType } from '../../../types/FTToken';
import {
  getNftTokenIdsFromArguments,
  guardedDeriveSplitDataFromArguments,
} from '../../../utils/deploy-args';
import { NftTokenEntryPoint } from '../../../types/NFTToken';
import {NamedKeyPrefix} from "../../../utils/named-key-prefix";

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

const getCep18TransactorsDataFromArgs = (args) => {
  const recipientHash = guardedDeriveSplitDataFromArguments(
    args.recipient,
    'Hash',
  );
  const recipientAccountHash = guardedDeriveSplitDataFromArguments(
    args.recipient,
    'Account',
  );
  const ownerHash = guardedDeriveSplitDataFromArguments(args.owner, 'Account');
  const spenderHash = guardedDeriveSplitDataFromArguments(args.spender, 'Hash');

  return {
    recipientHash,
    recipientAccountHash,
    ownerHash,
    spenderHash,
  };
};

export const prepareFtActionMessageDataForDeployDetails = (
  deploy: Deploy,
  getPublicKeyByAccountHash: (hash: string) => any,
): MessageData | null => {
  const { entryPoint, args, contractPackage } = deploy;
  const entryPointName = entryPoint?.name || '';
  const amount = deploy.args.amount?.parsed as string;

  const actionName = {
    [FTEntryPointType.transfer]: 'Transfer',
    [FTEntryPointType.approve]: 'Approve transfer rights',
    [FTEntryPointType.burn]: 'Burn',
    [FTEntryPointType.mint]: 'Mint',
  };

  const contractPrefixesMap = {
    [FTEntryPointType.transfer]: 'of',
    [FTEntryPointType.burn]: 'of',
    [FTEntryPointType.mint]: 'of',
    [FTEntryPointType.approve]: 'for',
  };

  const senderPrefixesMap = {
    [FTEntryPointType.transfer]: 'from',
    [FTEntryPointType.burn]: 'owned by',
    [FTEntryPointType.mint]: 'to',
    [FTEntryPointType.approve]: 'to',
  };

  const { recipientHash, recipientAccountHash, ownerHash, spenderHash } =
    getCep18TransactorsDataFromArgs(args);

  if (
    actionName[entryPointName] === undefined ||
    !amount ||
    !(recipientHash || recipientAccountHash || ownerHash || spenderHash)
  ) {
    return null;
  }

  const tokenSymbol = contractPackage.metadata?.symbol;
  const senderPrefix = senderPrefixesMap[entryPointName];
  const contractPrefix = contractPrefixesMap[entryPointName];

  const isTransactorAccount = (transactor) => transactor?.prefix === NamedKeyPrefix.ACCOUNT_HASH

  const actionOutcome: Partial<MessageData> = {
    amount,
    ...(tokenSymbol && { symbol: tokenSymbol }),
    ...(contractPrefix && { contractPrefix }),
    ...(ownerHash?.hash && {
      prefix1: senderPrefix,
      account1: {
        hash: ownerHash?.hash,
        publicKey: ownerHash?.hash && getPublicKeyByAccountHash(ownerHash.hash),
        hashType: TransactorHashType.account,
      },
    }),
    ...(spenderHash?.hash && {
      prefix1: senderPrefix,
      account1: {
        hash: spenderHash?.hash,
        publicKey: isTransactorAccount(spenderHash) ? spenderHash?.hash && getPublicKeyByAccountHash(spenderHash.hash) : null,
        hashType:  isTransactorAccount(spenderHash) ?  TransactorHashType.account : TransactorHashType.hash
      },
    }),
    // here could be a case when recipientAccountHash and recipientHash are both present
    // so, we need to avoid overwriting recipientAccountHash with recipientHash
    ...(recipientAccountHash?.hash
      ? {
          prefix2: 'to',
          account2: {
            hash: recipientAccountHash?.hash,
            publicKey:
              recipientAccountHash?.hash &&
              getPublicKeyByAccountHash(recipientAccountHash.hash),
            hashType: TransactorHashType.account,
          },
        }
      : {
          prefix2: 'to',
          account2: {
            hash: recipientHash?.hash,
            hashType: TransactorHashType.hash,
          },
        }),
  };

  return {
    entryPointName: entryPointName,
    actionName: actionName[entryPointName] || entryPointName,
    ...actionOutcome,
  };
};

const getNftTransactorsDataFromArgs = (args) => {
  const tokenOwner = guardedDeriveSplitDataFromArguments(
    args.token_owner,
    'Account',
  );
  const owner = guardedDeriveSplitDataFromArguments(args.owner, 'Account');
  const from = guardedDeriveSplitDataFromArguments(args.from, 'Account');

  const sourceKey = guardedDeriveSplitDataFromArguments(
    args.source_key,
    'Account',
  );

  const targetKey = guardedDeriveSplitDataFromArguments(
    args.target_key,
    'Account',
  );
  const recipientHash = guardedDeriveSplitDataFromArguments(
    args.recipient,
    'Account',
  );

  const accountSpenderHash = guardedDeriveSplitDataFromArguments(
    args.spender,
    'Account',
  );

  const contractSpenderHash = guardedDeriveSplitDataFromArguments(
    args.spender,
    'Hash',
  );
  const operatorHash = guardedDeriveSplitDataFromArguments(
    args.operator,
    'Hash',
  );
  const to = guardedDeriveSplitDataFromArguments(args.to, 'Account');

  return {
    tokenOwner,
    owner,
    sourceKey,
    targetKey,
    recipientHash,
    contractSpenderHash,
    operatorHash,
    accountSpenderHash,
    from,
    to,
  };
};

export const prepareNftActionMessageDataForDeployDetails = (
  deploy: Deploy,
  getPublicKeyByAccountHash: (hash: string) => any,
): MessageData | null => {
  const { entryPoint, args } = deploy;
  const entryPointName = entryPoint?.name || '';

  const actionName = {
    [NftTokenEntryPoint.transfer]: 'Transfer',
    [NftTokenEntryPoint.transfer_from]: 'Transfer',
    [NftTokenEntryPoint.approve]: 'Approve transfer rights',
    [NftTokenEntryPoint.burn]: 'Burn',
    [NftTokenEntryPoint.mint]: 'Mint',
    [NftTokenEntryPoint.update_token_meta]: 'Update metadata',
    [NftTokenEntryPoint.set_approval_for_all]: 'Approve transfer rights',
  };

  const contractPrefixesMap = {
    [NftTokenEntryPoint.approve]: 'for',
    [NftTokenEntryPoint.update_token_meta]: 'for',
    [NftTokenEntryPoint.mint]: 'of',
    [NftTokenEntryPoint.set_approval_for_all]: 'of',
  };

  const senderPrefixesMap = {
    [NftTokenEntryPoint.transfer]: 'from',
    [NftTokenEntryPoint.transfer_from]: 'from',
    [NftTokenEntryPoint.burn]: 'owned by',
    [NftTokenEntryPoint.approve]: 'to',
    [NftTokenEntryPoint.mint]: 'to',
  };

  if (actionName[entryPointName] === undefined) {
    return null;
  }

  const nftTokenIds = getNftTokenIdsFromArguments(args);
  const {
    recipientHash,
    tokenOwner,
    contractSpenderHash,
    operatorHash,
    sourceKey,
    owner,
    targetKey,
    accountSpenderHash,
    from,
    to,
  } = getNftTransactorsDataFromArgs(args);

  const account1Hash =
    tokenOwner?.hash ||
    sourceKey?.hash ||
    owner?.hash ||
    accountSpenderHash?.hash ||
    from?.hash;
  const account2Hash = recipientHash?.hash || targetKey?.hash || to?.hash;

  const contractPrefix = contractPrefixesMap[entryPointName];
  const senderPrefix = senderPrefixesMap[entryPointName];

  const actionOutcome: Partial<MessageData> = {
    nftTokenIds: nftTokenIds,
    contractPrefix,
    ...(account1Hash && {
      prefix1: senderPrefix,
      account1: {
        hash: account1Hash,
        publicKey: account1Hash && getPublicKeyByAccountHash(account1Hash),
        hashType: TransactorHashType.account,
      },
    }),
    ...(contractSpenderHash?.hash && {
      prefix1: senderPrefix,
      account1: {
        hash: contractSpenderHash?.hash,
        hashType: TransactorHashType.hash,
      },
    }),
    ...(account2Hash && {
      account2: {
        hash: account2Hash,
        publicKey: account2Hash && getPublicKeyByAccountHash(account2Hash),
        hashType: TransactorHashType.account,
      },
    }),
    ...(operatorHash?.hash && {
      account2: {
        hash: operatorHash?.hash,
        hashType: TransactorHashType.hash,
      },
    }),
  };

  return {
    entryPointName: entryPointName,
    actionName: actionName[entryPointName] || entryPointName,
    ...actionOutcome,
  };
};
