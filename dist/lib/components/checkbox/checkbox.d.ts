import React from 'react';
import { BaseProps } from '../../types';
export interface CheckboxProps extends BaseProps {
    label?: React.ReactElement | string;
    onChange?: (value?: any) => void;
    checked: boolean;
    disabled?: boolean;
}
export declare function Checkbox({ checked, onChange, label, disabled, }: CheckboxProps): JSX.Element;
export default Checkbox;
//# sourceMappingURL=checkbox.d.ts.map