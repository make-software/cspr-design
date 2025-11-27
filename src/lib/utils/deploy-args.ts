import { Args, CLValueParser, Conversions } from 'casper-js-sdk';
import { DeployArgsResult } from '../types/types';
import { isNonNullable } from './guards';
import { deriveSplitDataFromNamedKeyValue } from './named-key';

export const getNftTokensQuantityFromArgs = (args: DeployArgsResult) => {
  if (args.token_ids || args.token_metas || args.tokens) {
    return (
      ((args.token_ids || args.token_metas || args.tokens)?.parsed as any[]) ||
      []
    ).length;
  }

  if (args.token_meta_data || args.token_id) {
    return 1;
  }

  return undefined;
};

export const getNftTokenIdsFromArguments = (args) => {
  const hasTokens =
    args.token_metas?.parsed || args.token_id?.parsed || args.token_ids?.parsed;

  const getTokenIdsFromClValue = (clValue) =>
    clValue?.parsed
      ? clValue?.parsed.map((token) =>
          typeof token === 'string' ? token : token.key,
        )
      : [];

  if (hasTokens) {
    const tokens = [
      ...getTokenIdsFromClValue(args.token_ids),
      ...getTokenIdsFromClValue(args.token_metas),
    ];
    const ids = [...tokens, args.token_id?.parsed].filter(isNonNullable);

    return [...new Set(ids)];
  }
  return null;
};

/**
 *
 * @param argument args from Deploy
 * @param parsedKey string { deprecated }
 */
export const guardedDeriveSplitDataFromArguments = (
  argument: any,
  parsedKey: string,
) => {
  if (argument && argument.parsed) {
    // parse arguments for v1
    if (argument.parsed[parsedKey]) {
      return deriveSplitDataFromNamedKeyValue(argument.parsed[parsedKey]);
    }

    if (typeof argument.parsed !== 'object') {
      // parse arguments for v2
      return deriveSplitDataFromNamedKeyValue(argument.parsed);
    }
  }

  return null;
};
