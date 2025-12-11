import { DataResponse, Deploy, GetDeployResult } from '../../../types/types';
interface DeployAssociatedKeysActionProps {
    deploy: Deploy;
    deployRawData: DataResponse<GetDeployResult & {
        api_version: string;
    }> | undefined | null;
    renderAsResultAction?: boolean;
}
declare const DeployActionAssociatedKeys: ({ deploy, deployRawData, renderAsResultAction, }: DeployAssociatedKeysActionProps) => import("react/jsx-runtime").JSX.Element;
export default DeployActionAssociatedKeys;
//# sourceMappingURL=DeployActionAssociatedKeys.d.ts.map