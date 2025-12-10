import { Args, Approval as ApprovalSDK, Approval } from 'casper-js-sdk';
import { CLType, CLTypeParsedResult, CLTypeTypeResult } from '../types/CLType';
export declare const stringifyCLTypeType: (type: string | CLType | CLTypeTypeResult) => string;
export declare const stringifyCLTypeValue: ({ type, value, balance, }: {
    type?: CLTypeTypeResult | string;
    value: CLTypeParsedResult | null;
    balance?: string | null;
}) => any;
export declare const convertTransactionArgsToObj: (args: Args) => Record<string, any>;
export declare const convertApprovalsFromBytesToString: (approvals: ApprovalSDK[]) => Approval[];
//# sourceMappingURL=cltype.d.ts.map