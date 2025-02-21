/// <reference types="react" />
import { BaseProps } from '../../types';
export type MultiSelectDropdownValue = {
    label: string;
    chipLabel?: string;
    value: any;
};
export type MultiSelectDropdownEventValue = {
    target: {
        name?: string;
        value: MultiSelectDropdownValue | null;
    };
};
export interface MultiSelectInputProps extends BaseProps {
    value?: MultiSelectDropdownValue[];
    items: MultiSelectDropdownValue[];
    label?: string | JSX.Element;
    placeholder?: string;
    disabled?: boolean;
    onAddItem?: (ev: MultiSelectDropdownEventValue) => void;
    onSelectItem?: (ev: MultiSelectDropdownEventValue) => void;
    onRemoveItem?: (ev: MultiSelectDropdownEventValue) => void;
    onChangeInput?: (value: string) => void;
}
export declare function MultiSelectInput(props: MultiSelectInputProps): JSX.Element;
//# sourceMappingURL=multiselect-input.d.ts.map