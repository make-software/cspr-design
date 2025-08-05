import { TextProps } from '../text/text';
type Transform = 'uppercase' | 'capitalize' | 'unset';
export interface LabelProps extends TextProps {
    size: 1 | 2;
    transform?: Transform;
    lineHeight?: 'xxs' | 'xs' | 'sm';
}
export declare function Label(props: LabelProps): import("react/jsx-runtime").JSX.Element;
export default Label;
//# sourceMappingURL=label.d.ts.map