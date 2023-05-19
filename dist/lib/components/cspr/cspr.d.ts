/// <reference types="react" />
import { PrecisionCase } from '../../utils/currency';
export interface CsprProps {
    motes?: string | null;
    precisionCase?: PrecisionCase;
    hideCsprCurrency?: boolean;
}
export declare function Cspr({ motes, precisionCase, hideCsprCurrency }: CsprProps): JSX.Element;
export default Cspr;
//# sourceMappingURL=cspr.d.ts.map