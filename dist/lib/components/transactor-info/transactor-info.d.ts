import { AvatarProps } from '../avatar/avatar';
import { AccountCentralizedInfo, AccountInfoResult, DeployContractPackageResult, TransactorHashType } from '../../types/types';
import { Size } from '../../base-types.ts';
import { HashLength } from '../../utils/formatters';
import { BodyTextProps } from '../body-text/body-text';
interface TransactorInfoProps {
    type?: TransactorHashType | undefined | null;
    accountInfo: AccountInfoResult | AccountCentralizedInfo | undefined;
    contractPackage?: DeployContractPackageResult | undefined | null;
    hash: string | null;
    publicKey: string | undefined | null;
    csprName?: string | undefined | null;
    loading: boolean;
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