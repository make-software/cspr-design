import { AvatarProps } from '../avatar/avatar';
import { DeployContractPackageResult } from '../../types/types';
import { HashLength } from '../../utils/formatters.ts';
interface ContractIdentifierWithNameProps {
    hash: string;
    contractPackage: DeployContractPackageResult;
    hashLength?: HashLength;
    avatarSize?: AvatarProps['size'];
    loading?: boolean;
    path: string;
}
export declare const ContractIdentifierWithName: ({ hash, contractPackage, avatarSize, hashLength, loading, path, }: ContractIdentifierWithNameProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=contract-identifier-with-name.d.ts.map