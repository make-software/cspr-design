import { FTAmountDataType, FtTokenMarketData } from '../types/FTToken';
import { DeployContractPackageResult } from '../types/types';
type Cep18DataTypeNew = Omit<FTAmountDataType, 'totalSupply' | 'totalSupplyMotes'> & FtTokenMarketData;
type GetFtTokenDataProps = {
    contractPackageInfo: DeployContractPackageResult | undefined | null;
    isShiboo?: boolean;
};
export declare const deriveFtTokenData: (props: GetFtTokenDataProps | null) => Cep18DataTypeNew;
export {};
//# sourceMappingURL=derive-ft-token-data-service.d.ts.map