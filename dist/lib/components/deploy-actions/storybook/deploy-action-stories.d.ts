import { Meta } from '@storybook/react';
import { DeployActionRow } from '../deploy-action-row';
declare const _default: Meta<typeof DeployActionRow>;
export default _default;
export declare const DeployActions: import('storybook/internal/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, import('../deploy-action-row').DeployActionRowComponentProps & {
    getAccountInfo: (publicKey: string) => import('../../..').AccountInfoResult | null | undefined;
    getContractInfoByHash?: (contractHash: string) => import('../../..').ContractResult | null | undefined;
    getContractPackageInfoByHash?: (contractPackageHash: string) => import('../../..').DeployContractPackageResult | null | undefined;
    csprLiveDomainPath: string;
}>;
//# sourceMappingURL=deploy-action-stories.d.ts.map