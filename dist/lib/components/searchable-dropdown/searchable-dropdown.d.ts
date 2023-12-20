import React from 'react';
declare const Item: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    selected: boolean;
}, never>;
interface Item {
    value: string;
    label: string;
    icon?: React.ReactElement | null;
}
export interface SearchableDropdownProps {
    items: Item[];
    value: Item;
    onSelect: (data: any) => void;
    height?: string;
    maxHeight?: string;
    fontSize?: string;
    placeholder?: string;
}
export declare const SearchableDropdown: ({ items, value, height, fontSize, maxHeight, onSelect, placeholder, }: SearchableDropdownProps) => JSX.Element;
export default SearchableDropdown;
//# sourceMappingURL=searchable-dropdown.d.ts.map