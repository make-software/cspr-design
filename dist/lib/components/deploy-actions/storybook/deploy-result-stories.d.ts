import { Meta } from '@storybook/react';
import { DeployResultRow } from '../deploy-result-row';
declare const _default: Meta<typeof DeployResultRow>;
export default _default;
export declare const DeployDefaultResults: import('storybook/internal/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, import('../deploy-result-row').DeployResultRowComponentProps & {
    getAccountInfo: (publicKey: string) => import('../../..').AccountInfoResult | null | undefined;
    getContractPackageInfoByHash?: (contractPackageHash: string) => import('../../..').DeployContractPackageResult | null | undefined;
    getContractInfoByHash?: (contractHash: string) => import('../../..').ContractResult | null | undefined;
    csprLiveDomainPath: string;
}>;
export declare const DeployGreyResults: import('storybook/internal/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, import('../deploy-result-row').DeployResultRowComponentProps & {
    getAccountInfo: (publicKey: string) => import('../../..').AccountInfoResult | null | undefined;
    getContractPackageInfoByHash?: (contractPackageHash: string) => import('../../..').DeployContractPackageResult | null | undefined;
    getContractInfoByHash?: (contractHash: string) => import('../../..').ContractResult | null | undefined;
    csprLiveDomainPath: string;
}>;
//# sourceMappingURL=deploy-result-stories.d.ts.map