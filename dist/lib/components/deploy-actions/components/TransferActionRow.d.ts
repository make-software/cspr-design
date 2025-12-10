import { DeployTransferResult } from '../../../types/types';
interface TransferActionRowProps {
    timeTransactionCurrencyRate: number;
    transfer: DeployTransferResult;
    loading: boolean;
    actionPoolAccountHash: string | undefined;
    renderAsResultAction?: boolean;
}
declare const TransferActionRow: ({ timeTransactionCurrencyRate, transfer, loading, actionPoolAccountHash, renderAsResultAction, }: TransferActionRowProps) => import("react/jsx-runtime").JSX.Element;
export default TransferActionRow;
//# sourceMappingURL=TransferActionRow.d.ts.map