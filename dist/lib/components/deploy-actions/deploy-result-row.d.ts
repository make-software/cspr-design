import { default as React } from 'react';
import { ActionIdentificationHashesType } from './deploy-action-row';
import { ContractResult, DataResponse, Deploy, GetDeployResult } from '../../types/types';
export declare enum ResultRowVariation {
    default = "default",
    gray = "gray"
}
interface DeployResultRowComponentProps {
    deploy: Deploy;
    loading: boolean;
    actionIdentificationHashes: ActionIdentificationHashesType;
    deployRawData?: DataResponse<GetDeployResult> | null;
    actionComponents?: React.ReactElement[] | null;
    variation?: ResultRowVariation;
    shouldCollapse?: boolean;
}
export declare const DeployResultRowComponent: (props: DeployResultRowComponentProps) => import("react/jsx-runtime").JSX.Element | null;
type DeployResultRowProps = DeployResultRowComponentProps & {
    getAccountInfo: <T>(publicKey: string) => T | null | undefined;
    getContractPackageInfoByHash?: (contractHash: string) => ContractResult | null | undefined;
    csprLiveDomainPath: string;
};
export declare const DeployResultRow: (props: DeployResultRowProps) => import("react/jsx-runtime").JSX.Element;
export default DeployResultRow;
//# sourceMappingURL=deploy-result-row.d.ts.map