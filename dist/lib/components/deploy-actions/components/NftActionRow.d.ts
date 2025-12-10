import { DeployContractPackageResult, TransactorHashType } from '../../../types/types';
export declare const UpdateMetadataNFTAction: ({ actionName, nftTokenIds, contractPackage, }: {
    actionName: any;
    nftTokenIds: any;
    contractPackage: any;
}) => import("react/jsx-runtime").JSX.Element;
interface NftActionRowProps {
    actionName: string | undefined;
    contractPrefix?: string | null;
    senderPrefix?: string | null;
    nftTokenIds?: string[] | null;
    contract_package: DeployContractPackageResult;
    from_hash?: string | null;
    from_public_key?: string | null;
    from_type?: TransactorHashType | null;
    to_hash?: string;
    to_public_key?: string | null;
    to_type?: TransactorHashType | null;
}
export declare const NftActionRow: ({ actionName, contractPrefix, senderPrefix, nftTokenIds, contract_package, from_public_key, from_hash, from_type, to_hash, to_public_key, to_type, }: NftActionRowProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=NftActionRow.d.ts.map