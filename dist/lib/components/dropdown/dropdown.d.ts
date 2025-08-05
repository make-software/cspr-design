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
    id?: string;
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
    isFixedDropdown?: boolean;
}
export declare function Dropdown(props: DropdownProps): import("react/jsx-runtime").JSX.Element;
export type MultiDropdownValue = {
    label: string;
    chipLabel?: string;
    chipName?: string;
    value: any;
};
export interface MultiSelectDropdownProps extends BaseProps {
    id?: string;
    value?: MultiDropdownValue[];
    items: MultiDropdownValue[];
    label?: string | JSX.Element;
    placeholder?: string;
    disabled?: boolean;
    onChange?: (ev: DropdownEventValue) => void;
    onSelect?: (ev: DropdownEventValue) => void;
    onRemove?: (ev: DropdownEventValue) => void;
    onClearAllItems?: (ev: DropdownEventValue) => void;
    isFixedDropdown?: boolean;
}
export declare function MultiSelectDropdown(props: MultiSelectDropdownProps): import("react/jsx-runtime").JSX.Element;
export default Dropdown;
//# sourceMappingURL=dropdown.d.ts.map