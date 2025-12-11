import { AccountInfoResult, ContractResult, DataResponse, Deploy, DeployContractPackageResult, GetDeployResult } from '../../types/types';
export type ActionIdentificationHashesType = {
    auction_manager_contract_hash?: string;
    associated_keys_contract_hash?: string;
    cspr_market_contract_package_hash?: string;
    auction_pool_account_hash?: string;
    native_transfer_contract_hash?: string;
};
interface DeployActionRowComponentProps {
    deploy: Deploy;
    deployRawData?: DataResponse<GetDeployResult> | undefined | null;
    loading: boolean;
    actionIdentificationHashes: ActionIdentificationHashesType;
}
export declare const DeployActionRowComponent: ({ deploy, deployRawData, loading, actionIdentificationHashes, }: DeployActionRowComponentProps) => import("react/jsx-runtime").JSX.Element;
type DeployActionRowProps = DeployActionRowComponentProps & {
    getAccountInfo: (publicKey: string) => AccountInfoResult | null | undefined;
    getContractInfoByHash?: (contractHash: string) => ContractResult | null | undefined;
    getContractPackageInfoByHash?: (contractPackageHash: string) => DeployContractPackageResult | null | undefined;
    csprLiveDomainPath: string;
};
export declare const DeployActionRow: (props: DeployActionRowProps) => import("react/jsx-runtime").JSX.Element;
export default DeployActionRow;
//# sourceMappingURL=deploy-action-row.d.ts.map