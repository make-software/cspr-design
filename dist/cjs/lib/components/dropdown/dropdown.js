"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiSelectDropdown = exports.Dropdown = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var downshift_1 = tslib_1.__importStar(require("downshift"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var fast_deep_equal_1 = tslib_1.__importDefault(require("fast-deep-equal"));
var body_text_1 = tslib_1.__importDefault(require("../body-text/body-text"));
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var svg_icon_1 = tslib_1.__importDefault(require("../svg-icon/svg-icon"));
var flex_column_1 = tslib_1.__importDefault(require("../flex-column/flex-column"));
var ic_arrow_up_svg_1 = tslib_1.__importDefault(require("../../assets/icons/ic-arrow-up.svg"));
var ic_arrow_down_svg_1 = tslib_1.__importDefault(require("../../assets/icons/ic-arrow-down.svg"));
var ic_checkmark_svg_1 = tslib_1.__importDefault(require("../../assets/icons/ic-checkmark.svg"));
var ic_delete_svg_1 = tslib_1.__importDefault(require("../../assets/icons/ic-delete.svg"));
var StyledDropdown = styled_components_1.default.div(function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return (tslib_1.__assign({ outline: 'none' }, (disabled && {
        opacity: '0.5',
        pointerEvents: 'none',
    })));
});
var Container = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme, isOpen = _a.isOpen;
    return ({
        borderRadius: theme.borderRadius.base,
        border: 'none',
        height: 36,
        padding: '0 16px',
        background: theme.styleguideColors.fillSecondary,
        ':hover, :active': {
            background: theme.styleguideColors.fillSecondary,
            svg: {
                color: theme.styleguideColors.fillPrimaryRed,
            },
        },
    });
});
var ItemsContainer = styled_components_1.default.div(function (_a) {
    var theme = _a.theme, isOpen = _a.isOpen;
    return ({
        display: isOpen ? 'inherit' : 'none',
        marginTop: 4,
        borderRadius: theme.borderRadius.base,
        background: theme.styleguideColors.fillSecondary,
    });
});
var ItemContainer = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        cursor: 'pointer',
        minHeight: 36,
        padding: '8px 16px',
        ':hover, :active': {
            background: theme.styleguideColors.fillSecondaryBlueHover,
            fontWeight: 600,
        },
    });
});
var DeleteSvgIcon = (0, styled_components_1.default)(svg_icon_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        path: {
            stroke: theme.styleguideColors.contentSecondary,
        },
        ':hover, :active': {
            path: {
                stroke: theme.styleguideColors.fillPrimaryRed,
            },
        },
    });
});
var ClearSvgIcon = (0, styled_components_1.default)(svg_icon_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        path: {
            stroke: theme.styleguideColors.contentPrimary
        }
    });
});
var MultiSelectContainer = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        borderRadius: theme.borderRadius.base,
        padding: '8px',
        background: theme.styleguideColors.fillSecondary,
        ':hover, :active': {
            svg: {
                color: theme.styleguideColors.fillPrimaryRed,
            },
        },
    });
});
var PlaceholderWrapper = styled_components_1.default.span(function (_a) {
    var theme = _a.theme;
    return ({
        padding: '0 8px',
    });
});
var ChipItemContainer = styled_components_1.default.span(function (_a) {
    var theme = _a.theme;
    return ({
        borderRadius: theme.borderRadius.base,
        cursor: 'pointer',
        padding: '2px 8px',
        background: theme.styleguideColors.fillTertriary,
        color: theme.styleguideColors.contentPrimary,
    });
});
var OverflowWrapper = styled_components_1.default.span(function (_a) {
    var theme = _a.theme;
    return ({
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    });
});
var DropdownIconWrapper = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        paddingRight: '8px',
        marginLeft: '8px',
    });
});
var CheckIcon = (0, styled_components_1.default)(svg_icon_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        path: {
            fill: theme.styleguideColors.contentBlue,
        },
    });
});
var MultiSelectDeleteIcon = (0, styled_components_1.default)(svg_icon_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        path: {
            stroke: theme.styleguideColors.contentBlue,
        },
        ':hover, :active': {
            path: {
                stroke: theme.styleguideColors.contentRed,
            },
        },
    });
});
var getChangeEvent = function (value) {
    return {
        target: {
            name: undefined,
            value: value,
        },
    };
};
function Dropdown(props) {
    var items = props.items, placeholder = props.placeholder, label = props.label, areItemsRemovable = props.areItemsRemovable, value = props.value, style = props.style, onSelect = props.onSelect, onRemove = props.onRemove, _a = props.noItemsMessage, noItemsMessage = _a === void 0 ? 'No Options!' : _a;
    var getChangeEvent = function (value) {
        return {
            target: {
                name: undefined,
                value: value,
            },
        };
    };
    var handleRemoveItem = function (item, ev, downshift) {
        ev.preventDefault();
        ev.stopPropagation();
        var value = item && itemValueGetter(item);
        onRemove && onRemove(getChangeEvent(value));
    };
    var itemValueGetter = function (item) { return item.value; };
    var itemNameGetter = function (item) { return item.label; };
    var handleItemSelect = function (item) {
        onSelect && onSelect(item);
    };
    var getItemToString = function (item) {
        if (item === null)
            return '';
        return typeof item === 'string' ? item : item.label;
    };
    return ((0, jsx_runtime_1.jsx)(downshift_1.default, tslib_1.__assign({ itemToString: getItemToString, onSelect: handleItemSelect, selectedItem: value, selectedItemChanged: function (prevItem, item) { return !(0, fast_deep_equal_1.default)(prevItem, item); } }, { children: function (downshift) {
            var getItemProps = downshift.getItemProps, getMenuProps = downshift.getMenuProps, isOpen = downshift.isOpen, selectedItem = downshift.selectedItem, getRootProps = downshift.getRootProps, getToggleButtonProps = downshift.getToggleButtonProps;
            var noItems = !(items && items.length);
            return ((0, jsx_runtime_1.jsxs)(StyledDropdown, tslib_1.__assign({}, getRootProps({ refKey: 'innerRef' }), { style: style, tabIndex: 0 }, { children: [label && ((0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ lineHeight: 'xs', size: 1 }, { children: label }))), (0, jsx_runtime_1.jsxs)(Container, tslib_1.__assign({ align: "center", justify: "space-between" }, getToggleButtonProps(), { isOpen: isOpen, itemsSpacing: 10 }, { children: [(0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 3, lineHeight: 'xs', variation: selectedItem ? 'inherit' : 'darkGray', style: {
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                } }, { children: itemNameGetter(selectedItem) || placeholder })), (0, jsx_runtime_1.jsx)(svg_icon_1.default, { src: isOpen ? ic_arrow_up_svg_1.default : ic_arrow_down_svg_1.default })] })), (0, jsx_runtime_1.jsx)(ItemsContainer, tslib_1.__assign({}, getMenuProps(), { isOpen: isOpen }, { children: isOpen &&
                            (noItems ? ((0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ style: { padding: '8px 16px', pointerEvents: 'none' } }, { children: (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 3, scale: 'xs', lineHeight: 'xs', variation: "darkGray" }, { children: noItemsMessage })) }))) : (items.map(function (item, idx) {
                                var isSelected = (0, fast_deep_equal_1.default)(item, selectedItem);
                                return ((0, jsx_runtime_1.jsxs)(ItemContainer, tslib_1.__assign({ align: "center", justify: "space-between", itemsSpacing: 10 }, getItemProps({ item: item, index: idx }), { children: [(0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: isSelected ? 1 : 3, style: {
                                                overflow: 'hidden',
                                                whiteSpace: 'nowrap',
                                                textOverflow: 'ellipsis',
                                            }, scale: 'xs', lineHeight: 'xs' }, { children: itemNameGetter(item) })), areItemsRemovable && ((0, jsx_runtime_1.jsx)(DeleteSvgIcon, { src: ic_delete_svg_1.default, onClick: function (ev) {
                                                return handleRemoveItem(item, ev, downshift);
                                            } }))] }), "".concat(item, "-").concat(idx)));
                            }))) }))] })));
        } })));
}
exports.Dropdown = Dropdown;
function MultiSelectDropdown(props) {
    var items = props.items, value = props.value, label = props.label, placeholder = props.placeholder, disabled = props.disabled, onSelect = props.onSelect, onChange = props.onChange, onRemove = props.onRemove, onClearAllItems = props.onClearAllItems;
    var _a = (0, downshift_1.useMultipleSelection)({
        initialSelectedItems: value,
        onSelectedItemsChange: function (changes) {
            onSelect && onSelect(getChangeEvent(changes.selectedItems));
        },
    }), getSelectedItemProps = _a.getSelectedItemProps, getDropdownProps = _a.getDropdownProps, addSelectedItem = _a.addSelectedItem, removeSelectedItem = _a.removeSelectedItem, selectedItems = _a.selectedItems, setSelectedItems = _a.setSelectedItems, reset = _a.reset;
    var _b = (0, downshift_1.useSelect)({
        selectedItem: null,
        defaultHighlightedIndex: 0,
        items: items,
        stateReducer: function (state, actionAndChanges) {
            var changes = actionAndChanges.changes, type = actionAndChanges.type;
            switch (type) {
                case downshift_1.useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
                case downshift_1.useSelect.stateChangeTypes.ToggleButtonKeyDownSpaceButton:
                case downshift_1.useSelect.stateChangeTypes.ItemClick:
                    return tslib_1.__assign(tslib_1.__assign({}, changes), { isOpen: true });
                default:
                    return changes;
            }
        },
        onStateChange: function (_a) {
            var type = _a.type, newSelectedItem = _a.selectedItem;
            switch (type) {
                case downshift_1.useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
                case downshift_1.useSelect.stateChangeTypes.ToggleButtonKeyDownSpaceButton:
                case downshift_1.useSelect.stateChangeTypes.ItemClick:
                    {
                        var isAlreadySelected = selectedItems.some(function (i) { return i.value === (newSelectedItem === null || newSelectedItem === void 0 ? void 0 : newSelectedItem.value); });
                        if (newSelectedItem) {
                            if (isAlreadySelected) {
                                setSelectedItems(selectedItems.filter(function (i) { return i.value !== newSelectedItem.value; }));
                                onRemove && onRemove(getChangeEvent(newSelectedItem));
                            }
                            else {
                                addSelectedItem(newSelectedItem);
                                onChange && onChange(getChangeEvent(newSelectedItem));
                            }
                        }
                    }
                    break;
                default:
                    break;
            }
        },
    }), isOpen = _b.isOpen, selectedItem = _b.selectedItem, getToggleButtonProps = _b.getToggleButtonProps, getLabelProps = _b.getLabelProps, getMenuProps = _b.getMenuProps, getItemProps = _b.getItemProps;
    //Align resetting selected values if they were reset in parent
    (0, react_1.useEffect)(function () {
        if (!value || value.length < 1) {
            reset();
        }
    }, [value]);
    var handleClearAll = function () {
        onClearAllItems && onClearAllItems(getChangeEvent(null));
        reset();
    };
    return ((0, jsx_runtime_1.jsx)(StyledDropdown, tslib_1.__assign({ disabled: disabled }, { children: (0, jsx_runtime_1.jsxs)(flex_column_1.default, tslib_1.__assign({ itemsSpacing: 4 }, { children: [label && ((0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ lineHeight: 'xs' }, getLabelProps(), { size: 1 }, { children: label }))), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)(MultiSelectContainer, tslib_1.__assign({ align: "center", justify: "space-between" }, getToggleButtonProps(tslib_1.__assign(tslib_1.__assign({}, getDropdownProps({ preventKeyAction: isOpen })), { onClick: function (e) { return e.stopPropagation(); }, isOpen: isOpen })), { children: [(0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ lineHeight: 'xs', size: 3, variation: selectedItem ? 'inherit' : 'darkGray' }, { children: (0, jsx_runtime_1.jsx)(OverflowWrapper, { children: (0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ gap: 8, wrap: 'wrap' }, { children: selectedItems.length === 0 ? ((0, jsx_runtime_1.jsx)(PlaceholderWrapper, { children: placeholder })) : (selectedItems.map(function (selectedItem, index) { return ((0, jsx_runtime_1.jsx)(ChipItemContainer, tslib_1.__assign({}, getSelectedItemProps({ selectedItem: selectedItem, index: index }), { children: (0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ align: 'center', gap: 4 }, { children: [(selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.chipName) && ((0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ lineHeight: 'xs', size: 1, variation: 'black' }, { children: selectedItem.chipName }))), (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.chipLabel) || (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.label), (0, jsx_runtime_1.jsx)(MultiSelectDeleteIcon, { onClick: function (event) {
                                                                    event.preventDefault();
                                                                    event.stopPropagation();
                                                                    removeSelectedItem(selectedItem);
                                                                    onRemove &&
                                                                        onRemove(getChangeEvent(selectedItem));
                                                                }, size: 14, src: ic_delete_svg_1.default })] })) }), "selected-item-".concat(index))); })) })) }) })) }), (0, jsx_runtime_1.jsxs)(DropdownIconWrapper, { children: [onClearAllItems && !!selectedItems.length && ((0, jsx_runtime_1.jsx)(ClearSvgIcon, { src: ic_delete_svg_1.default, onClick: handleClearAll, marginRight: true })), (0, jsx_runtime_1.jsx)(svg_icon_1.default, { size: 16, src: isOpen ? ic_arrow_up_svg_1.default : ic_arrow_down_svg_1.default })] })] })), (0, jsx_runtime_1.jsx)(ItemsContainer, tslib_1.__assign({}, getMenuProps(), { isOpen: isOpen }, { children: isOpen &&
                                items.map(function (item, index) {
                                    var isSelected = selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.some(function (i) { return i.value === item.value; });
                                    return ((0, jsx_runtime_1.jsxs)(ItemContainer, tslib_1.__assign({ align: "center", justify: "space-between", itemsSpacing: 10 }, getItemProps({ item: item, index: index }), { children: [(0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: isSelected ? 1 : 3, lineHeight: 'xs', scale: 'xs' }, { children: item.label })), isSelected && (0, jsx_runtime_1.jsx)(CheckIcon, { size: 14, src: ic_checkmark_svg_1.default })] }), "".concat(item.value).concat(index)));
                                }) }))] })] })) })));
}
exports.MultiSelectDropdown = MultiSelectDropdown;
exports.default = Dropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQXlDO0FBQ3pDLDZEQUltQjtBQUNuQixnRkFBdUM7QUFDdkMsNEVBQXNDO0FBSXRDLDZFQUE4QztBQUM5QywwRUFBMkM7QUFDM0MsMEVBQTJDO0FBQzNDLG1GQUFvRDtBQUVwRCwrRkFBd0Q7QUFDeEQsbUdBQTREO0FBQzVELGlHQUFnRTtBQUNoRSwyRkFBMEQ7QUFFMUQsSUFBTSxjQUFjLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQy9CLFVBQUMsRUFBbUI7UUFBakIsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBO0lBQU8sT0FBQSxvQkFDdkIsT0FBTyxFQUFFLE1BQU0sSUFFWixDQUFDLFFBQVEsSUFBSTtRQUNkLE9BQU8sRUFBRSxLQUFLO1FBQ2QsYUFBYSxFQUFFLE1BQU07S0FDdEIsQ0FBQyxFQUNGO0FBUHVCLENBT3ZCLENBQ0gsQ0FBQztBQUVGLElBQU0sU0FBUyxHQUFHLElBQUEsMkJBQU0sRUFBQyxrQkFBTyxDQUFDLENBQXNCLFVBQUMsRUFBaUI7UUFBZixLQUFLLFdBQUEsRUFBRSxNQUFNLFlBQUE7SUFBTyxPQUFBLENBQUM7UUFDN0UsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSTtRQUNyQyxNQUFNLEVBQUUsTUFBTTtRQUNkLE1BQU0sRUFBRSxFQUFFO1FBQ1YsT0FBTyxFQUFFLFFBQVE7UUFDakIsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1FBQ2hELGlCQUFpQixFQUFFO1lBQ2pCLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtZQUNoRCxHQUFHLEVBQUU7Z0JBQ0gsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjO2FBQzdDO1NB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Q0FBQywyQkFBUSxHQUFJLElBQ2xDLEtBQ0QsRUFDdkIsdUJBQUMsY0FBYyx1QkFBSyxZQUFZLEVBQUUsSUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFDL0MsTUFBTTtnQ0FDTCxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUs7b0NBQ3BCLElBQU0sVUFBVSxHQUFHLGFBQWEsYUFBYixhQUFhLHVCQUFiLGFBQWEsQ0FBRSxJQUFJLENBQ3BDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxFQUF0QixDQUFzQixDQUM5QixDQUFDO29DQUNGLE9BQU8sQ0FDTCx3QkFBQyxhQUFhLHFCQUNaLEtBQUssRUFBQyxRQUFRLEVBQ2QsT0FBTyxFQUFDLGVBQWUsRUFDdkIsWUFBWSxFQUFFLEVBQUUsSUFFWixZQUFZLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLGVBRWpDLHVCQUFDLG1CQUFRLHFCQUNQLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN4QixVQUFVLEVBQUUsSUFBSSxFQUNoQixLQUFLLEVBQUUsSUFBSSxnQkFFVixJQUFJLENBQUMsS0FBSyxJQUNGLEVBQ1YsVUFBVSxJQUFJLHVCQUFDLFNBQVMsSUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSwwQkFBYSxHQUFJLE1BVnJELFVBQUcsSUFBSSxDQUFDLEtBQUssU0FBRyxLQUFLLENBQUUsQ0FXZCxDQUNqQixDQUFDO2dDQUNKLENBQUMsQ0FBQyxJQUNXLElBQ2IsS0FDSyxJQUNFLENBQ2xCLENBQUM7QUFDSixDQUFDO0FBdk1ELGtEQXVNQztBQUVELGtCQUFlLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRG93bnNoaWZ0LCB7XG4gIENvbnRyb2xsZXJTdGF0ZUFuZEhlbHBlcnMsXG4gIHVzZU11bHRpcGxlU2VsZWN0aW9uLFxuICB1c2VTZWxlY3QsXG59IGZyb20gJ2Rvd25zaGlmdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2Zhc3QtZGVlcC1lcXVhbCc7XG5cbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IEJvZHlUZXh0IGZyb20gJy4uL2JvZHktdGV4dC9ib2R5LXRleHQnO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi4vc3ZnLWljb24vc3ZnLWljb24nO1xuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSAnLi4vZmxleC1jb2x1bW4vZmxleC1jb2x1bW4nO1xuXG5pbXBvcnQgVXBJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy1hcnJvdy11cC5zdmcnO1xuaW1wb3J0IERvd25JY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy1hcnJvdy1kb3duLnN2Zyc7XG5pbXBvcnQgQ2hlY2ttYXJrSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtY2hlY2ttYXJrLnN2Zyc7XG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtZGVsZXRlLnN2Zyc7XG5cbmNvbnN0IFN0eWxlZERyb3Bkb3duID0gc3R5bGVkLmRpdjx7IGRpc2FibGVkPzogYm9vbGVhbiB9PihcbiAgKHsgdGhlbWUsIGRpc2FibGVkIH0pID0+ICh7XG4gICAgb3V0bGluZTogJ25vbmUnLFxuXG4gICAgLi4uKGRpc2FibGVkICYmIHtcbiAgICAgIG9wYWNpdHk6ICcwLjUnLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIH0pLFxuICB9KVxuKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEZsZXhSb3cpPHsgaXNPcGVuOiBib29sZWFuIH0+KCh7IHRoZW1lLCBpc09wZW4gfSkgPT4gKHtcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGhlaWdodDogMzYsXG4gIHBhZGRpbmc6ICcwIDE2cHgnLFxuICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gICc6aG92ZXIsIDphY3RpdmUnOiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxuICAgIHN2Zzoge1xuICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWQsXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuY29uc3QgSXRlbXNDb250YWluZXIgPSBzdHlsZWQuZGl2PHsgaXNPcGVuOiBib29sZWFuIH0+KCh7IHRoZW1lLCBpc09wZW4gfSkgPT4gKHtcbiAgZGlzcGxheTogaXNPcGVuID8gJ2luaGVyaXQnIDogJ25vbmUnLFxuICBtYXJnaW5Ub3A6IDQsXG4gIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4gIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcbn0pKTtcblxuY29uc3QgSXRlbUNvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KSgoeyB0aGVtZSB9KSA9PiAoe1xuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgbWluSGVpZ2h0OiAzNixcbiAgcGFkZGluZzogJzhweCAxNnB4JyxcbiAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnlCbHVlSG92ZXIsXG4gICAgZm9udFdlaWdodDogNjAwLFxuICB9LFxufSkpO1xuXG5jb25zdCBEZWxldGVTdmdJY29uID0gc3R5bGVkKFN2Z0ljb24pKCh7IHRoZW1lIH0pID0+ICh7XG4gIHBhdGg6IHtcbiAgICBzdHJva2U6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcbiAgfSxcbiAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICBwYXRoOiB7XG4gICAgICBzdHJva2U6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWQsXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuY29uc3QgQ2xlYXJTdmdJY29uID0gc3R5bGVkKFN2Z0ljb24pKCh7IHRoZW1lIH0pID0+ICh7XG4gIHBhdGg6IHtcbiAgICBzdHJva2U6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnlcbiAgfVxufSkpO1xuXG5jb25zdCBNdWx0aVNlbGVjdENvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KTx7IGlzT3BlbjogYm9vbGVhbiB9PihcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICAgIHBhZGRpbmc6ICc4cHgnLFxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcbiAgICAnOmhvdmVyLCA6YWN0aXZlJzoge1xuICAgICAgc3ZnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5UmVkLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuKTtcblxuY29uc3QgUGxhY2Vob2xkZXJXcmFwcGVyID0gc3R5bGVkLnNwYW4oKHsgdGhlbWUgfSkgPT4gKHtcbiAgcGFkZGluZzogJzAgOHB4Jyxcbn0pKTtcblxuY29uc3QgQ2hpcEl0ZW1Db250YWluZXIgPSBzdHlsZWQuc3BhbigoeyB0aGVtZSB9KSA9PiAoe1xuICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgcGFkZGluZzogJzJweCA4cHgnLFxuICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxUZXJ0cmlhcnksXG4gIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxufSkpO1xuXG5jb25zdCBPdmVyZmxvd1dyYXBwZXIgPSBzdHlsZWQuc3BhbigoeyB0aGVtZSB9KSA9PiAoe1xuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG59KSk7XG5cbmNvbnN0IERyb3Bkb3duSWNvbldyYXBwZXIgPSBzdHlsZWQoRmxleFJvdykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgcGFkZGluZ1JpZ2h0OiAnOHB4JyxcbiAgbWFyZ2luTGVmdDogJzhweCcsXG59KSk7XG5cbmNvbnN0IENoZWNrSWNvbiA9IHN0eWxlZChTdmdJY29uKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBwYXRoOiB7XG4gICAgZmlsbDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgfSxcbn0pKTtcblxuY29uc3QgTXVsdGlTZWxlY3REZWxldGVJY29uID0gc3R5bGVkKFN2Z0ljb24pKCh7IHRoZW1lIH0pID0+ICh7XG4gIHBhdGg6IHtcbiAgICBzdHJva2U6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXG4gIH0sXG4gICc6aG92ZXIsIDphY3RpdmUnOiB7XG4gICAgcGF0aDoge1xuICAgICAgc3Ryb2tlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRSZWQsXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IHR5cGUgRHJvcGRvd25WYWx1ZSA9IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9O1xuZXhwb3J0IHR5cGUgRHJvcGRvd25JdGVtPFQgPSBEcm9wZG93blZhbHVlPiA9IFQ7XG5cbmV4cG9ydCB0eXBlIERyb3Bkb3duRXZlbnRWYWx1ZSA9IHtcbiAgdGFyZ2V0OiB7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICB2YWx1ZTogRHJvcGRvd25WYWx1ZSB8IG51bGw7XG4gIH07XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25Qcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XG4gIGl0ZW1zOiBEcm9wZG93blZhbHVlW107XG4gIHZhbHVlPzogRHJvcGRvd25WYWx1ZSB8IG51bGw7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgYXJlSXRlbXNSZW1vdmFibGU/OiBib29sZWFuO1xuICBpc1NlYXJjaGFibGU/OiBib29sZWFuO1xuICBvbkNoYW5nZT86IChldjogRHJvcGRvd25FdmVudFZhbHVlKSA9PiB2b2lkO1xuICBvblNlbGVjdD86IChldjogRHJvcGRvd25FdmVudFZhbHVlKSA9PiB2b2lkO1xuICBvblJlbW92ZT86IChldjogRHJvcGRvd25FdmVudFZhbHVlKSA9PiB2b2lkO1xuXG4gIG5vSXRlbXNNZXNzYWdlPzogc3RyaW5nO1xufVxuXG5jb25zdCBnZXRDaGFuZ2VFdmVudCA9ICh2YWx1ZTogYW55KTogRHJvcGRvd25FdmVudFZhbHVlID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0YXJnZXQ6IHtcbiAgICAgIG5hbWU6IHVuZGVmaW5lZCxcbiAgICAgIHZhbHVlLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gRHJvcGRvd24ocHJvcHM6IERyb3Bkb3duUHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGl0ZW1zLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGxhYmVsLFxuICAgIGFyZUl0ZW1zUmVtb3ZhYmxlLFxuICAgIHZhbHVlLFxuICAgIHN0eWxlLFxuICAgIG9uU2VsZWN0LFxuICAgIG9uUmVtb3ZlLFxuICAgIG5vSXRlbXNNZXNzYWdlID0gJ05vIE9wdGlvbnMhJyxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGdldENoYW5nZUV2ZW50ID0gKHZhbHVlOiBEcm9wZG93blZhbHVlIHwgbnVsbCk6IERyb3Bkb3duRXZlbnRWYWx1ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhcmdldDoge1xuICAgICAgICBuYW1lOiB1bmRlZmluZWQsXG4gICAgICAgIHZhbHVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJlbW92ZUl0ZW0gPSAoXG4gICAgaXRlbTogRHJvcGRvd25JdGVtLFxuICAgIGV2LFxuICAgIGRvd25zaGlmdDogQ29udHJvbGxlclN0YXRlQW5kSGVscGVyczxEcm9wZG93bkl0ZW0+XG4gICkgPT4ge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBjb25zdCB2YWx1ZSA9IGl0ZW0gJiYgaXRlbVZhbHVlR2V0dGVyKGl0ZW0pO1xuICAgIG9uUmVtb3ZlICYmIG9uUmVtb3ZlKGdldENoYW5nZUV2ZW50KHZhbHVlKSk7XG4gIH07XG5cbiAgY29uc3QgaXRlbVZhbHVlR2V0dGVyID0gKGl0ZW0pID0+IGl0ZW0udmFsdWU7XG4gIGNvbnN0IGl0ZW1OYW1lR2V0dGVyID0gKGl0ZW0pID0+IGl0ZW0ubGFiZWw7XG5cbiAgY29uc3QgaGFuZGxlSXRlbVNlbGVjdCA9IChpdGVtKSA9PiB7XG4gICAgb25TZWxlY3QgJiYgb25TZWxlY3QoaXRlbSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0SXRlbVRvU3RyaW5nID0gKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbSA9PT0gbnVsbCkgcmV0dXJuICcnO1xuICAgIHJldHVybiB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycgPyBpdGVtIDogaXRlbS5sYWJlbDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxEb3duc2hpZnRcbiAgICAgIGl0ZW1Ub1N0cmluZz17Z2V0SXRlbVRvU3RyaW5nfVxuICAgICAgb25TZWxlY3Q9e2hhbmRsZUl0ZW1TZWxlY3R9XG4gICAgICBzZWxlY3RlZEl0ZW09e3ZhbHVlfVxuICAgICAgc2VsZWN0ZWRJdGVtQ2hhbmdlZD17KHByZXZJdGVtLCBpdGVtKSA9PiAhaXNFcXVhbChwcmV2SXRlbSwgaXRlbSl9XG4gICAgPlxuICAgICAgeyhkb3duc2hpZnQpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGdldEl0ZW1Qcm9wcyxcbiAgICAgICAgICBnZXRNZW51UHJvcHMsXG4gICAgICAgICAgaXNPcGVuLFxuICAgICAgICAgIHNlbGVjdGVkSXRlbSxcbiAgICAgICAgICBnZXRSb290UHJvcHMsXG4gICAgICAgICAgZ2V0VG9nZ2xlQnV0dG9uUHJvcHMsXG4gICAgICAgIH0gPSBkb3duc2hpZnQ7XG5cbiAgICAgICAgY29uc3Qgbm9JdGVtcyA9ICEoaXRlbXMgJiYgaXRlbXMubGVuZ3RoKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxTdHlsZWREcm9wZG93blxuICAgICAgICAgICAgey4uLmdldFJvb3RQcm9wcyh7IHJlZktleTogJ2lubmVyUmVmJyB9KX1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgICAgIDxCb2R5VGV4dCBsaW5lSGVpZ2h0PXsneHMnfSBzaXplPXsxfT5cbiAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgey4uLmdldFRvZ2dsZUJ1dHRvblByb3BzKCl9XG4gICAgICAgICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICAgICAgICBpdGVtc1NwYWNpbmc9ezEwfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Qm9keVRleHRcbiAgICAgICAgICAgICAgICBzaXplPXszfVxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9eyd4cyd9XG4gICAgICAgICAgICAgICAgdmFyaWF0aW9uPXtzZWxlY3RlZEl0ZW0gPyAnaW5oZXJpdCcgOiAnZGFya0dyYXknfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2l0ZW1OYW1lR2V0dGVyKHNlbGVjdGVkSXRlbSkgfHwgcGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgICAgIDxTdmdJY29uIHNyYz17aXNPcGVuID8gVXBJY29uIDogRG93bkljb259IC8+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDxJdGVtc0NvbnRhaW5lciB7Li4uZ2V0TWVudVByb3BzKCl9IGlzT3Blbj17aXNPcGVufT5cbiAgICAgICAgICAgICAge2lzT3BlbiAmJlxuICAgICAgICAgICAgICAgIChub0l0ZW1zID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnOHB4IDE2cHgnLCBwb2ludGVyRXZlbnRzOiAnbm9uZScgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxCb2R5VGV4dFxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezN9XG4gICAgICAgICAgICAgICAgICAgICAgc2NhbGU9eyd4cyd9XG4gICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodD17J3hzJ31cbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb249XCJkYXJrR3JheVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7bm9JdGVtc01lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IGlzRXF1YWwoaXRlbSwgc2VsZWN0ZWRJdGVtKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxJdGVtQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2l0ZW19LSR7aWR4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1NwYWNpbmc9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldEl0ZW1Qcm9wcyh7IGl0ZW0sIGluZGV4OiBpZHggfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvZHlUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e2lzU2VsZWN0ZWQgPyAxIDogM31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZT17J3hzJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodD17J3hzJ31cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1OYW1lR2V0dGVyKGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb2R5VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthcmVJdGVtc1JlbW92YWJsZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVTdmdJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtEZWxldGVJY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldikgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVJlbW92ZUl0ZW0oaXRlbSwgZXYsIGRvd25zaGlmdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0l0ZW1zQ29udGFpbmVyPlxuICAgICAgICAgIDwvU3R5bGVkRHJvcGRvd24+XG4gICAgICAgICk7XG4gICAgICB9fVxuICAgIDwvRG93bnNoaWZ0PlxuICApO1xufVxuXG5leHBvcnQgdHlwZSBNdWx0aURyb3Bkb3duVmFsdWUgPSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGNoaXBMYWJlbD86IHN0cmluZztcbiAgY2hpcE5hbWU/OiBzdHJpbmc7XG4gIHZhbHVlOiBhbnk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpU2VsZWN0RHJvcGRvd25Qcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XG4gIHZhbHVlPzogTXVsdGlEcm9wZG93blZhbHVlW107XG4gIGl0ZW1zOiBNdWx0aURyb3Bkb3duVmFsdWVbXTtcbiAgbGFiZWw/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgb25DaGFuZ2U/OiAoZXY6IERyb3Bkb3duRXZlbnRWYWx1ZSkgPT4gdm9pZDtcbiAgb25TZWxlY3Q/OiAoZXY6IERyb3Bkb3duRXZlbnRWYWx1ZSkgPT4gdm9pZDtcbiAgb25SZW1vdmU/OiAoZXY6IERyb3Bkb3duRXZlbnRWYWx1ZSkgPT4gdm9pZDtcbiAgb25DbGVhckFsbEl0ZW1zPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNdWx0aVNlbGVjdERyb3Bkb3duKHByb3BzOiBNdWx0aVNlbGVjdERyb3Bkb3duUHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGl0ZW1zLFxuICAgIHZhbHVlLFxuICAgIGxhYmVsLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGRpc2FibGVkLFxuICAgIG9uU2VsZWN0LFxuICAgIG9uQ2hhbmdlLFxuICAgIG9uUmVtb3ZlLFxuICAgIG9uQ2xlYXJBbGxJdGVtcyxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHtcbiAgICBnZXRTZWxlY3RlZEl0ZW1Qcm9wcyxcbiAgICBnZXREcm9wZG93blByb3BzLFxuICAgIGFkZFNlbGVjdGVkSXRlbSxcbiAgICByZW1vdmVTZWxlY3RlZEl0ZW0sXG4gICAgc2VsZWN0ZWRJdGVtcyxcbiAgICBzZXRTZWxlY3RlZEl0ZW1zLFxuICAgIHJlc2V0LFxuICB9ID0gdXNlTXVsdGlwbGVTZWxlY3Rpb248TXVsdGlEcm9wZG93blZhbHVlPih7XG4gICAgaW5pdGlhbFNlbGVjdGVkSXRlbXM6IHZhbHVlLFxuICAgIG9uU2VsZWN0ZWRJdGVtc0NoYW5nZTogKGNoYW5nZXMpID0+IHtcbiAgICAgIG9uU2VsZWN0ICYmIG9uU2VsZWN0KGdldENoYW5nZUV2ZW50KGNoYW5nZXMuc2VsZWN0ZWRJdGVtcykpO1xuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IHtcbiAgICBpc09wZW4sXG4gICAgc2VsZWN0ZWRJdGVtLFxuICAgIGdldFRvZ2dsZUJ1dHRvblByb3BzLFxuICAgIGdldExhYmVsUHJvcHMsXG4gICAgZ2V0TWVudVByb3BzLFxuICAgIGdldEl0ZW1Qcm9wcyxcbiAgfSA9IHVzZVNlbGVjdCh7XG4gICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxuICAgIGRlZmF1bHRIaWdobGlnaHRlZEluZGV4OiAwLCAvLyBhZnRlciBzZWxlY3Rpb24sIGhpZ2hsaWdodCB0aGUgZmlyc3QgaXRlbS5cbiAgICBpdGVtcyxcbiAgICBzdGF0ZVJlZHVjZXI6IChzdGF0ZSwgYWN0aW9uQW5kQ2hhbmdlcykgPT4ge1xuICAgICAgY29uc3QgeyBjaGFuZ2VzLCB0eXBlIH0gPSBhY3Rpb25BbmRDaGFuZ2VzO1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgdXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMuVG9nZ2xlQnV0dG9uS2V5RG93bkVudGVyOlxuICAgICAgICBjYXNlIHVzZVNlbGVjdC5zdGF0ZUNoYW5nZVR5cGVzLlRvZ2dsZUJ1dHRvbktleURvd25TcGFjZUJ1dHRvbjpcbiAgICAgICAgY2FzZSB1c2VTZWxlY3Quc3RhdGVDaGFuZ2VUeXBlcy5JdGVtQ2xpY2s6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmNoYW5nZXMsXG4gICAgICAgICAgICBpc09wZW46IHRydWUsIC8vIGtlZXAgdGhlIG1lbnUgb3BlbiBhZnRlciBzZWxlY3Rpb24uXG4gICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gY2hhbmdlcztcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uU3RhdGVDaGFuZ2U6ICh7IHR5cGUsIHNlbGVjdGVkSXRlbTogbmV3U2VsZWN0ZWRJdGVtIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIHVzZVNlbGVjdC5zdGF0ZUNoYW5nZVR5cGVzLlRvZ2dsZUJ1dHRvbktleURvd25FbnRlcjpcbiAgICAgICAgY2FzZSB1c2VTZWxlY3Quc3RhdGVDaGFuZ2VUeXBlcy5Ub2dnbGVCdXR0b25LZXlEb3duU3BhY2VCdXR0b246XG4gICAgICAgIGNhc2UgdXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMuSXRlbUNsaWNrOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGlzQWxyZWFkeVNlbGVjdGVkID0gc2VsZWN0ZWRJdGVtcy5zb21lKFxuICAgICAgICAgICAgICAoaSkgPT4gaS52YWx1ZSA9PT0gbmV3U2VsZWN0ZWRJdGVtPy52YWx1ZVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKG5ld1NlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgICBpZiAoaXNBbHJlYWR5U2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEl0ZW1zKFxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcy5maWx0ZXIoKGkpID0+IGkudmFsdWUgIT09IG5ld1NlbGVjdGVkSXRlbS52YWx1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIG9uUmVtb3ZlICYmIG9uUmVtb3ZlKGdldENoYW5nZUV2ZW50KG5ld1NlbGVjdGVkSXRlbSkpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZFNlbGVjdGVkSXRlbShuZXdTZWxlY3RlZEl0ZW0pO1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlICYmIG9uQ2hhbmdlKGdldENoYW5nZUV2ZW50KG5ld1NlbGVjdGVkSXRlbSkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sXG4gIH0pO1xuXG4gIC8vQWxpZ24gcmVzZXR0aW5nIHNlbGVjdGVkIHZhbHVlcyBpZiB0aGV5IHdlcmUgcmVzZXQgaW4gcGFyZW50XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZS5sZW5ndGggPCAxKSB7XG4gICAgICByZXNldCgpO1xuICAgIH1cbiAgfSwgW3ZhbHVlXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xlYXJBbGwgPSAoKSA9PiB7XG4gICAgb25DbGVhckFsbEl0ZW1zICYmIG9uQ2xlYXJBbGxJdGVtcyhnZXRDaGFuZ2VFdmVudChudWxsKSk7XG4gICAgcmVzZXQoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWREcm9wZG93biBkaXNhYmxlZD17ZGlzYWJsZWR9PlxuICAgICAgPEZsZXhDb2x1bW4gaXRlbXNTcGFjaW5nPXs0fT5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8Qm9keVRleHQgbGluZUhlaWdodD17J3hzJ30gey4uLmdldExhYmVsUHJvcHMoKX0gc2l6ZT17MX0+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9Cb2R5VGV4dD5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TXVsdGlTZWxlY3RDb250YWluZXJcbiAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgIHsuLi5nZXRUb2dnbGVCdXR0b25Qcm9wcyh7XG4gICAgICAgICAgICAgIC4uLmdldERyb3Bkb3duUHJvcHMoeyBwcmV2ZW50S2V5QWN0aW9uOiBpc09wZW4gfSksXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IChlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpLFxuICAgICAgICAgICAgICBpc09wZW4sXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPEJvZHlUZXh0XG4gICAgICAgICAgICAgICAgbGluZUhlaWdodD17J3hzJ31cbiAgICAgICAgICAgICAgICBzaXplPXszfVxuICAgICAgICAgICAgICAgIHZhcmlhdGlvbj17c2VsZWN0ZWRJdGVtID8gJ2luaGVyaXQnIDogJ2RhcmtHcmF5J31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxPdmVyZmxvd1dyYXBwZXI+XG4gICAgICAgICAgICAgICAgICA8RmxleFJvdyBnYXA9ezh9IHdyYXA9eyd3cmFwJ30+XG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEl0ZW1zLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXJXcmFwcGVyPntwbGFjZWhvbGRlcn08L1BsYWNlaG9sZGVyV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zLm1hcCgoc2VsZWN0ZWRJdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENoaXBJdGVtQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YHNlbGVjdGVkLWl0ZW0tJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0U2VsZWN0ZWRJdGVtUHJvcHMoeyBzZWxlY3RlZEl0ZW0sIGluZGV4IH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleFJvdyBhbGlnbj17J2NlbnRlcid9IGdhcD17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkSXRlbT8uY2hpcE5hbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvZHlUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9eyd4cyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhdGlvbj17J2JsYWNrJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkSXRlbS5jaGlwTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRJdGVtPy5jaGlwTGFiZWwgfHwgc2VsZWN0ZWRJdGVtPy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlTZWxlY3REZWxldGVJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVNlbGVjdGVkSXRlbShzZWxlY3RlZEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlKGdldENoYW5nZUV2ZW50KHNlbGVjdGVkSXRlbSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezE0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtEZWxldGVJY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2hpcEl0ZW1Db250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvRmxleFJvdz5cbiAgICAgICAgICAgICAgICA8L092ZXJmbG93V3JhcHBlcj5cbiAgICAgICAgICAgICAgPC9Cb2R5VGV4dD5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxEcm9wZG93bkljb25XcmFwcGVyPlxuICAgICAgICAgICAgICB7b25DbGVhckFsbEl0ZW1zICYmICEhc2VsZWN0ZWRJdGVtcy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgIDxDbGVhclN2Z0ljb25cbiAgICAgICAgICAgICAgICAgIHNyYz17RGVsZXRlSWNvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsZWFyQWxsfVxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8U3ZnSWNvbiBzaXplPXsxNn0gc3JjPXtpc09wZW4gPyBVcEljb24gOiBEb3duSWNvbn0gLz5cbiAgICAgICAgICAgIDwvRHJvcGRvd25JY29uV3JhcHBlcj5cbiAgICAgICAgICA8L011bHRpU2VsZWN0Q29udGFpbmVyPlxuICAgICAgICAgIDxJdGVtc0NvbnRhaW5lciB7Li4uZ2V0TWVudVByb3BzKCl9IGlzT3Blbj17aXNPcGVufT5cbiAgICAgICAgICAgIHtpc09wZW4gJiZcbiAgICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZEl0ZW1zPy5zb21lKFxuICAgICAgICAgICAgICAgICAgKGkpID0+IGkudmFsdWUgPT09IGl0ZW0udmFsdWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8SXRlbUNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNTcGFjaW5nPXsxMH1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtpdGVtLnZhbHVlfSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgey4uLmdldEl0ZW1Qcm9wcyh7IGl0ZW0sIGluZGV4IH0pfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Qm9keVRleHRcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPXtpc1NlbGVjdGVkID8gMSA6IDN9XG4gICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodD17J3hzJ31cbiAgICAgICAgICAgICAgICAgICAgICBzY2FsZT17J3hzJ31cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgICAgICAgICB7aXNTZWxlY3RlZCAmJiA8Q2hlY2tJY29uIHNpemU9ezE0fSBzcmM9e0NoZWNrbWFya0ljb259IC8+fVxuICAgICAgICAgICAgICAgICAgPC9JdGVtQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvSXRlbXNDb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GbGV4Q29sdW1uPlxuICAgIDwvU3R5bGVkRHJvcGRvd24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuIl19