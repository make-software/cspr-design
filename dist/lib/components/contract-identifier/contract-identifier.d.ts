import { AvatarProps } from '../avatar/avatar';
import { DeployContractPackageResult } from '../../types/types';
import { HashLength } from '../../utils/formatters';
import { BodyTextProps } from '../body-text/body-text';
interface ContractIdentifierProps {
    hash: string;
    withName?: boolean;
    contractPackage?: DeployContractPackageResult;
    hideContractType?: boolean;
    hashLength?: HashLength;
    avatarSize?: AvatarProps['size'];
    hashFontSize?: BodyTextProps['scale'];
    loading?: boolean;
    path: string;
}
export declare const ContractIdentifier: ({ withName, ...props }: ContractIdentifierProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=contract-identifier.d.ts.map