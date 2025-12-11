import { DeployArgsResult } from '../types/types';
export declare const getNftTokensQuantityFromArgs: (args: DeployArgsResult) => number | undefined;
export declare const getNftTokenIdsFromArguments: (args: any) => any[] | null;
/**
 *
 * @param argument args from Deploy
 * @param parsedKey string { deprecated }
 */
export declare const guardedDeriveSplitDataFromArguments: (argument: any, parsedKey: string) => import("./named-key").SplitDataType | null;
//# sourceMappingURL=deploy-args.d.ts.map