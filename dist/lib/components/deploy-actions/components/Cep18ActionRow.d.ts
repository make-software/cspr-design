import { DeployContractPackageResult, TransactorHashType } from '../../../types/types';
interface Cep18ActionRowProps {
    actionName: string | undefined;
    prefix?: string | null;
    senderPrefix?: string | null;
    amount?: string;
    contractPackage: DeployContractPackageResult;
    from_hash?: string;
    from_public_key?: string | null;
    from_type?: TransactorHashType;
    to_hash?: string;
    to_public_key?: string | null;
    to_type?: TransactorHashType;
}
export declare const Cep18ActionRow: ({ amount, contractPackage, from_public_key, from_hash, from_type, to_hash, to_type, to_public_key, actionName, prefix, senderPrefix, }: Cep18ActionRowProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Cep18ActionRow.d.ts.map