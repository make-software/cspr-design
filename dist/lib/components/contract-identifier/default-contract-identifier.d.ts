import { AvatarProps } from '../avatar/avatar';
import { DeployContractPackageResult } from '../../types/types';
import { HashLength } from '../../utils/formatters.ts';
export declare enum HashFontSize {
    'default' = "default",
    'big' = "big"
}
export declare const UnknownContractInfo: ({ hash, iconSize, hashFontSize, hashLength, path, }: {
    hash: string | null;
    iconSize?: AvatarProps["size"];
    hashFontSize?: HashFontSize;
    hashLength?: HashLength;
    path: string;
}) => import("react/jsx-runtime").JSX.Element | null;
interface DefaultContractIdentifierProps {
    hash: string;
    contractPackage?: DeployContractPackageResult;
    hashLength?: HashLength;
    avatarSize?: AvatarProps['size'];
    hashFontSize?: HashFontSize;
    hideContractType?: boolean;
    loading?: boolean;
    path: string;
}
export declare const DefaultContractIdentifier: ({ hash, contractPackage, hideContractType, hashLength, avatarSize, hashFontSize, loading, path, }: DefaultContractIdentifierProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=default-contract-identifier.d.ts.map