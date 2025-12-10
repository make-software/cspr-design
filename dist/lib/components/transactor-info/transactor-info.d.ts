import { AvatarProps } from '../avatar/avatar';
import { AccountCentralizedInfo, AccountInfoResult, DeployContractPackageResult, TransactorHashType } from '../../types/types';
import { Size } from '../../types.ts';
import { HashLength } from '../../utils/formatters';
import { BodyTextProps } from '../body-text/body-text';
interface TransactorInfoProps {
    type?: TransactorHashType | undefined;
    accountInfo: AccountInfoResult | AccountCentralizedInfo | undefined;
    contractPackage?: DeployContractPackageResult;
    hash: string | null;
    publicKey: string | null;
    csprName?: string | null;
    loading: boolean;
    contractPackagePath: string;
    accountPath: string;
    hashLength?: HashLength;
    hashFontSize?: BodyTextProps['scale'];
    minifiedCopyNotification?: boolean;
    avatarSize?: AvatarProps['size'];
    nameSize?: Size;
    withName?: boolean;
    csprLiveDomainPath: string;
}
export declare const TransactorInfo: ({ type, accountInfo, contractPackage, publicKey, hash, csprName, loading, hashLength, hashFontSize, minifiedCopyNotification, avatarSize, withName, csprLiveDomainPath, }: TransactorInfoProps) => import("react/jsx-runtime").JSX.Element;
export default TransactorInfo;
//# sourceMappingURL=transactor-info.d.ts.map