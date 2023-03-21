/// <reference types="react" />
import { TextProps } from '../text/text';
type Transform = 'uppercase' | 'capitalize' | 'unset';
export interface LabelProps extends TextProps {
    size: 1 | 2;
    transform?: Transform;
}
export declare function Label(props: LabelProps): JSX.Element;
export default Label;
//# sourceMappingURL=label.d.ts.map