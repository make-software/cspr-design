/// <reference types="react" />
import { BaseProps } from '../../types';
export type DropdownValue = {
    value: string;
    label: string;
};
export type DropdownItem<T = DropdownValue> = T;
export type DropdownEventValue = {
    target: {
        name?: string;
        value: DropdownValue | null;
    };
};
export interface DropdownProps extends BaseProps {
    items: DropdownValue[];
    value?: DropdownValue | null;
    label?: string;
    placeholder?: string;
    areItemsRemovable?: boolean;
    isSearchable?: boolean;
    onChange?: (ev: DropdownEventValue) => void;
    onSelect?: (ev: DropdownEventValue) => void;
    onRemove?: (ev: DropdownEventValue) => void;
    noItemsMessage?: string;
}
export declare function Dropdown(props: DropdownProps): JSX.Element;
export type MultiDropdownValue = {
    label: string;
    chipLabel?: string;
    value: any;
};
export interface MultiSelectDropdownProps extends BaseProps {
    items: MultiDropdownValue[];
    label?: string;
    placeholder?: string;
    onChange?: (ev: DropdownEventValue) => void;
    onSelect?: (ev: DropdownEventValue) => void;
    onRemove?: (ev: DropdownEventValue) => void;
}
export declare function MultiSelectDropdown(props: MultiSelectDropdownProps): JSX.Element;
export default Dropdown;
//# sourceMappingURL=dropdown.d.ts.map