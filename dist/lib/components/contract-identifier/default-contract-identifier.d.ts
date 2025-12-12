import { AvatarProps } from '../avatar/avatar';
import { DeployContractPackageResult } from '../../types/types';
import { BodyTextProps } from '../body-text/body-text';
import { HashLength } from '../../utils/formatters.ts';
export declare const UnknownContractInfo: ({ hash, iconSize, hashFontSize, hashLength, path, }: {
    hash: string | null;
    iconSize?: AvatarProps["size"];
    hashFontSize?: BodyTextProps["scale"];
    hashLength?: HashLength;
    path: string;
}) => import("react/jsx-runtime").JSX.Element | null;
interface DefaultContractIdentifierProps {
    hash: string;
    contractPackage?: DeployContractPackageResult;
    hashLength?: HashLength;
    avatarSize?: AvatarProps['size'];
    hashFontSize?: BodyTextProps['scale'];
    hideContractType?: boolean;
    loading?: boolean;
    path: string;
}
export declare const DefaultContractIdentifier: ({ hash, contractPackage, hideContractType, hashLength, avatarSize, hashFontSize, loading, path, }: DefaultContractIdentifierProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=default-contract-identifier.d.ts.map