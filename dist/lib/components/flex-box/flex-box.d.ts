import { default as React } from 'react';
import { BaseProps } from '../../types';
type NativeDivProps = Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseProps>;
export interface FlexBoxProps extends BaseProps, NativeDivProps {
    itemsSpacing?: number;
    innerRef?: React.Ref<HTMLDivElement>;
    gap?: React.CSSProperties['gap'];
    direction?: React.CSSProperties['flexDirection'];
    wrap?: React.CSSProperties['flexWrap'];
    justify?: React.CSSProperties['justifyContent'];
    align?: React.CSSProperties['alignItems'];
    grow?: React.CSSProperties['flexGrow'];
    shrink?: React.CSSProperties['flexShrink'];
    basis?: React.CSSProperties['flexBasis'];
    tag?: 'div' | 'span';
}
export declare const FlexBox: React.ForwardRefExoticComponent<FlexBoxProps & React.RefAttributes<HTMLDivElement>>;
export default FlexBox;
//# sourceMappingURL=flex-box.d.ts.map