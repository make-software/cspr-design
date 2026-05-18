import { default as React } from 'react';
import { ActionIdentificationHashesType } from './deploy-action-row';
import { DataResponse, Deploy, GetDeployResult } from '../../types/types';
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
export declare const DeployResultRowComponent: (props: DeployResultRowComponentProps) => import("react/jsx-runtime").JSX.Element;
type DeployResultRowProps = DeployResultRowComponentProps & {
    getAccountInfo: <T>(publicKey: string) => T | null | undefined;
    getContractInfoByHash?: (contractHash: string) => ContractResult | null | undefined;
    getContractPackagePath: (hash: string) => string | null;
};
export declare const DeployResultRow: (props: DeployResultRowProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=deploy-result-row.d.ts.map