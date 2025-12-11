import { AvatarProps } from '../avatar/avatar';
import { DeployContractPackageResult } from '../../types/types';
import { HashLength, HashFontSize } from '../../utils/formatters';
interface ContractIdentifierProps {
    hash: string;
    withName?: boolean;
    contractPackage?: DeployContractPackageResult;
    hideContractType?: boolean;
    hashLength?: HashLength;
    avatarSize?: AvatarProps['size'];
    hashFontSize?: HashFontSize;
    loading?: boolean;
    path: string;
}
export declare const ContractIdentifier: ({ withName, ...props }: ContractIdentifierProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=contract-identifier.d.ts.map