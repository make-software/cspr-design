import { PrecisionCase } from '../../utils/currency';
export interface CsprAmountProps {
    motes?: string | number | null;
    precisionCase?: PrecisionCase;
    hideCsprCurrency?: boolean;
}
export declare function CsprAmount({ motes, precisionCase, hideCsprCurrency, }: CsprAmountProps): import("react/jsx-runtime").JSX.Element;
export default CsprAmount;
//# sourceMappingURL=cspr-amount.d.ts.map