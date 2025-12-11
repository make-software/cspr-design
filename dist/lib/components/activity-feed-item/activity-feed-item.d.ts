import { ActionIdentificationHashesType } from '../deploy-actions/deploy-action-row';
import { AccountInfoResult, ContractResult, Deploy, DeployContractPackageResult } from '../../types/types';
interface ActivityFeedItemProps {
    deploy: Deploy;
    loading: boolean;
    actionIdentificationHashes: ActionIdentificationHashesType;
    csprLiveDomainPath: string;
    getAccountInfo: (publicKey: string) => AccountInfoResult | null | undefined;
    getContractInfoByHash?: (contractHash: string) => ContractResult | null | undefined;
    getContractPackageInfoByHash?: (contractPackageHash: string) => DeployContractPackageResult | null | undefined;
}
export declare const ActivityFeedItem: ({ deploy, loading, actionIdentificationHashes, getAccountInfo, getContractPackageInfoByHash, getContractInfoByHash, csprLiveDomainPath, }: ActivityFeedItemProps) => import("react/jsx-runtime").JSX.Element;
export default ActivityFeedItem;
//# sourceMappingURL=activity-feed-item.d.ts.map