import { PrecisionCase } from '../../utils/currency';
import { DeployContractPackageResult } from '../../types/types';
export interface Cep18Props {
    symbol?: string;
    amount?: string | null;
    precisionCase?: PrecisionCase;
    contractPackage: DeployContractPackageResult;
}
export declare function Cep18FormattedAmount({ amount, symbol, contractPackage, precisionCase, }: Cep18Props): import("react/jsx-runtime").JSX.Element;
export default Cep18FormattedAmount;
//# sourceMappingURL=cep18-formatted-amount.d.ts.map