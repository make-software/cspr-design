import React from 'react';
import { BaseProps } from '../../types';
export interface RadioButtonProps extends BaseProps {
    label?: string | React.ReactNode;
    onChange?: (value: string) => void;
    selected: string;
    value: string;
    color?: string;
    disabled?: boolean;
}
export declare function RadioButton({ selected, onChange, label, value, disabled, color, }: RadioButtonProps): JSX.Element;
export default RadioButton;
//# sourceMappingURL=radio-button.d.ts.map