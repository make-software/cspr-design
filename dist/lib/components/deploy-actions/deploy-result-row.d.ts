import { default as React } from 'react';
import { ActionIdentificationHashesType } from './deploy-action-row';
import { AccountInfoResult, ContractResult, DataResponse, Deploy, DeployContractPackageResult, GetDeployResult } from '../../types/types';
export declare enum ResultRowVariation {
    default = "default",
    gray = "gray"
}
interface DeployResultRowComponentProps {
    deploy: Deploy;
    loading: boolean;
    actionIdentificationHashes: ActionIdentificationHashesType;
    deployRawData?: DataResponse<GetDeployResult & {
        api_version: string;
    }> | null;
    actionComponents?: React.ReactElement[] | null;
    variation?: ResultRowVariation;
    shouldCollapse?: boolean;
}
export declare const DeployResultRowComponent: (props: DeployResultRowComponentProps) => import("react/jsx-runtime").JSX.Element;
type DeployResultRowProps = DeployResultRowComponentProps & {
    getAccountInfo: (publicKey: string) => AccountInfoResult | null | undefined;
    getContractPackageInfoByHash?: (contractPackageHash: string) => DeployContractPackageResult | null | undefined;
    getContractInfoByHash?: (contractHash: string) => ContractResult | null | undefined;
    csprLiveDomainPath: string;
};
export declare const DeployResultRow: (props: DeployResultRowProps) => import("react/jsx-runtime").JSX.Element | null;
export default DeployResultRow;
//# sourceMappingURL=deploy-result-row.d.ts.map