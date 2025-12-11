import React from 'react';
import { BaseProps } from '../../types';
export type TextVariation = 'inherit' | 'gray' | 'white' | 'contentViolet' | 'lightGray' | 'darkGray' | 'black' | 'blue' | 'red' | 'green';
export interface TextProps extends BaseProps {
    variation?: TextVariation;
    monotype?: boolean;
    uppercase?: boolean;
    capitalize?: boolean;
    capitalizeFirstLetter?: boolean;
    noWrap?: boolean;
    loading?: boolean;
    wordBreak?: boolean;
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
}
export declare const Text: React.ForwardRefExoticComponent<TextProps & React.RefAttributes<HTMLSpanElement>>;
export default Text;
//# sourceMappingURL=text.d.ts.map