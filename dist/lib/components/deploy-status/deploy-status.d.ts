import { Deploy, DeployResult } from '../../types/types';
export declare enum DeployStatusSize {
    Small = 14,
    Medium = 16
}
export declare enum Status {
    Success = "success",
    Processed = "processed",
    Error = "error",
    /** @deprecated Became 'Processed' */
    Executed = "executed",
    Pending = "pending",
    Expired = "expired"
}
export interface DeployStatusProps {
    deployResult: DeployResult | Deploy | null | undefined;
    iconWithText?: boolean;
    size?: 14 | 16;
}
export declare const getDeployStatus: (deployResult?: DeployResult | Deploy | null) => Status;
export declare const DeployStatus: ({ deployResult, iconWithText, size, }: DeployStatusProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=deploy-status.d.ts.map