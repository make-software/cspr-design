import { PrecisionCase } from '../../utils/currency';
export interface CsprProps {
    motes?: string | number | null;
    precisionCase?: PrecisionCase;
    hideCsprCurrency?: boolean;
}
export declare function CsprAmount({ motes, precisionCase, hideCsprCurrency, }: CsprProps): import("react/jsx-runtime").JSX.Element;
export default CsprAmount;
//# sourceMappingURL=cspr-amount.d.ts.map