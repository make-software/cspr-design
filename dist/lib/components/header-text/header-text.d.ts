import { Size } from '../../types';
import { TextProps } from '../text/text';
export interface HeaderTextProps extends TextProps {
    size: Size;
    scale?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}
export declare function HeaderText(props: HeaderTextProps): import("react/jsx-runtime").JSX.Element;
export default HeaderText;
//# sourceMappingURL=header-text.d.ts.map