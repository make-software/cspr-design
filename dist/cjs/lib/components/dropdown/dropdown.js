"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiSelectDropdown = exports.Dropdown = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var downshift_1 = tslib_1.__importStar(require("downshift"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var fast_deep_equal_1 = tslib_1.__importDefault(require("fast-deep-equal"));
var body_text_1 = tslib_1.__importDefault(require("../body-text/body-text"));
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var svg_icon_1 = tslib_1.__importDefault(require("../svg-icon/svg-icon"));
var flex_column_1 = tslib_1.__importDefault(require("../flex-column/flex-column"));
var ic_arrow_up_svg_1 = tslib_1.__importDefault(require("../../assets/icons/ic-arrow-up.svg"));
var ic_arrow_down_svg_1 = tslib_1.__importDefault(require("../../assets/icons/ic-arrow-down.svg"));
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
var DeleteIcon = (0, styled_components_1.default)(svg_icon_1.default)(function (_a) {
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
var DropdownIconWrapper = styled_components_1.default.div(function (_a) {
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
            return ((0, jsx_runtime_1.jsxs)(StyledDropdown, tslib_1.__assign({}, getRootProps({ refKey: 'innerRef' }), { style: style, tabIndex: "0" }, { children: [label && ((0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ lineHeight: 'xs', size: 1 }, { children: label }))), (0, jsx_runtime_1.jsxs)(Container, tslib_1.__assign({ isOpen: isOpen, align: "center", justify: "space-between" }, getToggleButtonProps(), { itemsSpacing: 10 }, { children: [(0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 3, lineHeight: 'xs', variation: selectedItem ? 'inherit' : 'darkGray', style: {
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                } }, { children: itemNameGetter(selectedItem) || placeholder })), (0, jsx_runtime_1.jsx)(svg_icon_1.default, { src: isOpen ? ic_arrow_up_svg_1.default : ic_arrow_down_svg_1.default })] })), (0, jsx_runtime_1.jsx)(ItemsContainer, tslib_1.__assign({}, getMenuProps(), { isOpen: isOpen }, { children: isOpen &&
                            (noItems ? ((0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ style: { padding: '8px 16px', pointerEvents: 'none' } }, { children: (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 3, scale: 'xs', lineHeight: 'xs', variation: "darkGray" }, { children: noItemsMessage })) }))) : (items.map(function (item, idx) {
                                var isSelected = (0, fast_deep_equal_1.default)(item, selectedItem);
                                return ((0, jsx_runtime_1.jsxs)(ItemContainer, tslib_1.__assign({ align: "center", justify: "space-between", itemsSpacing: 10, isSelected: isSelected }, getItemProps({ item: item, index: idx }), { children: [(0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: isSelected ? 1 : 3, style: {
                                                overflow: 'hidden',
                                                whiteSpace: 'nowrap',
                                                textOverflow: 'ellipsis',
                                            }, scale: 'xs', lineHeight: 'xs' }, { children: itemNameGetter(item) })), areItemsRemovable && ((0, jsx_runtime_1.jsx)(DeleteIcon, { src: "assets/icons/ic-delete.svg", onClick: function (ev) {
                                                return handleRemoveItem(item, ev, downshift);
                                            } }))] }), "".concat(item, "-").concat(idx)));
                            }))) }))] })));
        } })));
}
exports.Dropdown = Dropdown;
function MultiSelectDropdown(props) {
    var items = props.items, value = props.value, label = props.label, placeholder = props.placeholder, disabled = props.disabled, onSelect = props.onSelect, onChange = props.onChange, onRemove = props.onRemove;
    var _a = (0, downshift_1.useMultipleSelection)({
        initialSelectedItems: value,
        onSelectedItemsChange: function (changes) {
            onSelect && onSelect(getChangeEvent(changes.selectedItems));
        },
    }), getSelectedItemProps = _a.getSelectedItemProps, getDropdownProps = _a.getDropdownProps, addSelectedItem = _a.addSelectedItem, removeSelectedItem = _a.removeSelectedItem, selectedItems = _a.selectedItems;
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
                                removeSelectedItem(newSelectedItem);
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
    return ((0, jsx_runtime_1.jsx)(StyledDropdown, tslib_1.__assign({ disabled: disabled }, { children: (0, jsx_runtime_1.jsxs)(flex_column_1.default, tslib_1.__assign({ itemsSpacing: 4 }, { children: [label && ((0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ lineHeight: 'xs', size: 1 }, getLabelProps(), { children: label }))), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)(MultiSelectContainer, tslib_1.__assign({ isOpen: isOpen, align: "center", justify: "space-between" }, getToggleButtonProps(getDropdownProps({ preventKeyAction: isOpen })), { children: [(0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ lineHeight: 'xs', size: 3, variation: selectedItem ? 'inherit' : 'darkGray' }, { children: (0, jsx_runtime_1.jsx)(OverflowWrapper, { children: (0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ gap: 8, wrap: 'wrap' }, { children: selectedItems.length === 0 ? ((0, jsx_runtime_1.jsx)(PlaceholderWrapper, { children: placeholder })) : (selectedItems.map(function (selectedItem, index) { return ((0, jsx_runtime_1.jsx)(ChipItemContainer, tslib_1.__assign({}, getSelectedItemProps({ selectedItem: selectedItem, index: index }), { children: (0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ align: 'center', gap: 4 }, { children: [(selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.chipLabel) || (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.label), (0, jsx_runtime_1.jsx)(MultiSelectDeleteIcon, { onClick: function (event) {
                                                                    event.preventDefault();
                                                                    event.stopPropagation();
                                                                    removeSelectedItem(selectedItem);
                                                                }, size: 14, src: 'assets/icons/ic-delete.svg' })] })) }), "selected-item-".concat(index))); })) })) }) })) }), (0, jsx_runtime_1.jsx)(DropdownIconWrapper, { children: (0, jsx_runtime_1.jsx)(svg_icon_1.default, { size: 16, src: isOpen ? ic_arrow_up_svg_1.default : ic_arrow_down_svg_1.default }) })] })), (0, jsx_runtime_1.jsx)(ItemsContainer, tslib_1.__assign({}, getMenuProps(), { isOpen: isOpen }, { children: isOpen &&
                                items.map(function (item, index) {
                                    var isSelected = selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.some(function (i) { return i.value === item.value; });
                                    return ((0, jsx_runtime_1.jsxs)(ItemContainer, tslib_1.__assign({ align: "center", justify: "space-between", itemsSpacing: 10 }, getItemProps({ item: item, index: index }), { children: [(0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: isSelected ? 1 : 3, lineHeight: 'xs', scale: 'xs' }, { children: item.label })), isSelected && ((0, jsx_runtime_1.jsx)(CheckIcon, { size: 14, src: 'assets/icons/ic-checkmark.svg' }))] }), "".concat(item.value).concat(index)));
                                }) }))] })] })) })));
}
exports.MultiSelectDropdown = MultiSelectDropdown;
exports.default = Dropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsNkRBSW1CO0FBQ25CLGdGQUF1QztBQUN2Qyw0RUFBc0M7QUFJdEMsNkVBQThDO0FBQzlDLDBFQUEyQztBQUMzQywwRUFBMkM7QUFDM0MsbUZBQW9EO0FBRXBELCtGQUF3RDtBQUN4RCxtR0FBNEQ7QUFFNUQsSUFBTSxjQUFjLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQy9CLFVBQUMsRUFBbUI7UUFBakIsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBO0lBQU8sT0FBQSxvQkFDdkIsT0FBTyxFQUFFLE1BQU0sSUFFWixDQUFDLFFBQVEsSUFBSTtRQUNkLE9BQU8sRUFBRSxLQUFLO1FBQ2QsYUFBYSxFQUFFLE1BQU07S0FDdEIsQ0FBQyxFQUNGO0FBUHVCLENBT3ZCLENBQ0gsQ0FBQztBQUVGLElBQU0sU0FBUyxHQUFHLElBQUEsMkJBQU0sRUFBQyxrQkFBTyxDQUFDLENBQXNCLFVBQUMsRUFBaUI7UUFBZixLQUFLLFdBQUEsRUFBRSxNQUFNLFlBQUE7SUFBTyxPQUFBLENBQUM7UUFDN0UsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSTtRQUNyQyxNQUFNLEVBQUUsTUFBTTtRQUNkLE1BQU0sRUFBRSxFQUFFO1FBQ1YsT0FBTyxFQUFFLFFBQVE7UUFDakIsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1FBQ2hELGlCQUFpQixFQUFFO1lBQ2pCLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtZQUNoRCxHQUFHLEVBQUU7Z0JBQ0gsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjO2FBQzdDO1NBQ0Y7S0FDRixDQUFDO0FBWjRFLENBWTVFLENBQUMsQ0FBQztBQUVK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b0NBQ3BCLElBQU0sVUFBVSxHQUFHLGFBQWEsYUFBYixhQUFhLHVCQUFiLGFBQWEsQ0FBRSxJQUFJLENBQ3BDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxFQUF0QixDQUFzQixDQUM5QixDQUFDO29DQUNGLE9BQU8sQ0FDTCx3QkFBQyxhQUFhLHFCQUNaLEtBQUssRUFBQyxRQUFRLEVBQ2QsT0FBTyxFQUFDLGVBQWUsRUFDdkIsWUFBWSxFQUFFLEVBQUUsSUFFWixZQUFZLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLGVBRWpDLHVCQUFDLG1CQUFRLHFCQUNQLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN4QixVQUFVLEVBQUUsSUFBSSxFQUNoQixLQUFLLEVBQUUsSUFBSSxnQkFFVixJQUFJLENBQUMsS0FBSyxJQUNGLEVBQ1YsVUFBVSxJQUFJLENBQ2IsdUJBQUMsU0FBUyxJQUNSLElBQUksRUFBRSxFQUFFLEVBQ1IsR0FBRyxFQUFFLCtCQUErQixHQUNwQyxDQUNILE1BZkksVUFBRyxJQUFJLENBQUMsS0FBSyxTQUFHLEtBQUssQ0FBRSxDQWdCZCxDQUNqQixDQUFDO2dDQUNKLENBQUMsQ0FBQyxJQUNXLElBQ2IsS0FDSyxJQUNFLENBQ2xCLENBQUM7QUFDSixDQUFDO0FBeEtELGtEQXdLQztBQUVELGtCQUFlLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRG93bnNoaWZ0LCB7XG4gIENvbnRyb2xsZXJTdGF0ZUFuZEhlbHBlcnMsXG4gIHVzZU11bHRpcGxlU2VsZWN0aW9uLFxuICB1c2VTZWxlY3QsXG59IGZyb20gJ2Rvd25zaGlmdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2Zhc3QtZGVlcC1lcXVhbCc7XG5cbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IEJvZHlUZXh0IGZyb20gJy4uL2JvZHktdGV4dC9ib2R5LXRleHQnO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi4vc3ZnLWljb24vc3ZnLWljb24nO1xuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSAnLi4vZmxleC1jb2x1bW4vZmxleC1jb2x1bW4nO1xuXG5pbXBvcnQgVXBJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy1hcnJvdy11cC5zdmcnO1xuaW1wb3J0IERvd25JY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy1hcnJvdy1kb3duLnN2Zyc7XG5cbmNvbnN0IFN0eWxlZERyb3Bkb3duID0gc3R5bGVkLmRpdjx7IGRpc2FibGVkPzogYm9vbGVhbiB9PihcbiAgKHsgdGhlbWUsIGRpc2FibGVkIH0pID0+ICh7XG4gICAgb3V0bGluZTogJ25vbmUnLFxuXG4gICAgLi4uKGRpc2FibGVkICYmIHtcbiAgICAgIG9wYWNpdHk6ICcwLjUnLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIH0pLFxuICB9KVxuKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEZsZXhSb3cpPHsgaXNPcGVuOiBib29sZWFuIH0+KCh7IHRoZW1lLCBpc09wZW4gfSkgPT4gKHtcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGhlaWdodDogMzYsXG4gIHBhZGRpbmc6ICcwIDE2cHgnLFxuICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gICc6aG92ZXIsIDphY3RpdmUnOiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxuICAgIHN2Zzoge1xuICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWQsXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuY29uc3QgSXRlbXNDb250YWluZXIgPSBzdHlsZWQuZGl2PHsgaXNPcGVuOiBib29sZWFuIH0+KCh7IHRoZW1lLCBpc09wZW4gfSkgPT4gKHtcbiAgZGlzcGxheTogaXNPcGVuID8gJ2luaGVyaXQnIDogJ25vbmUnLFxuICBtYXJnaW5Ub3A6IDQsXG4gIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4gIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcbn0pKTtcblxuY29uc3QgSXRlbUNvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KSgoeyB0aGVtZSB9KSA9PiAoe1xuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgbWluSGVpZ2h0OiAzNixcbiAgcGFkZGluZzogJzhweCAxNnB4JyxcbiAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnlCbHVlSG92ZXIsXG4gICAgZm9udFdlaWdodDogNjAwLFxuICB9LFxufSkpO1xuXG5jb25zdCBEZWxldGVJY29uID0gc3R5bGVkKFN2Z0ljb24pKCh7IHRoZW1lIH0pID0+ICh7XG4gIHBhdGg6IHtcbiAgICBzdHJva2U6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcbiAgfSxcbiAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICBwYXRoOiB7XG4gICAgICBzdHJva2U6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWQsXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuY29uc3QgTXVsdGlTZWxlY3RDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8eyBpc09wZW46IGJvb2xlYW4gfT4oXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gICAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICAgIHN2Zzoge1xuICAgICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmNvbnN0IFBsYWNlaG9sZGVyV3JhcHBlciA9IHN0eWxlZC5zcGFuKCh7IHRoZW1lIH0pID0+ICh7XG4gIHBhZGRpbmc6ICcwIDhweCcsXG59KSk7XG5cbmNvbnN0IENoaXBJdGVtQ29udGFpbmVyID0gc3R5bGVkLnNwYW4oKHsgdGhlbWUgfSkgPT4gKHtcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIHBhZGRpbmc6ICcycHggOHB4JyxcbiAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsVGVydHJpYXJ5LFxuICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcbn0pKTtcblxuY29uc3QgT3ZlcmZsb3dXcmFwcGVyID0gc3R5bGVkLnNwYW4oKHsgdGhlbWUgfSkgPT4gKHtcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxufSkpO1xuXG5jb25zdCBEcm9wZG93bkljb25XcmFwcGVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBwYWRkaW5nUmlnaHQ6ICc4cHgnLFxuICBtYXJnaW5MZWZ0OiAnOHB4Jyxcbn0pKTtcblxuY29uc3QgQ2hlY2tJY29uID0gc3R5bGVkKFN2Z0ljb24pKCh7IHRoZW1lIH0pID0+ICh7XG4gIHBhdGg6IHtcbiAgICBmaWxsOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICB9LFxufSkpO1xuXG5jb25zdCBNdWx0aVNlbGVjdERlbGV0ZUljb24gPSBzdHlsZWQoU3ZnSWNvbikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgcGF0aDoge1xuICAgIHN0cm9rZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgfSxcbiAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICBwYXRoOiB7XG4gICAgICBzdHJva2U6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFJlZCxcbiAgICB9LFxuICB9LFxufSkpO1xuXG5leHBvcnQgdHlwZSBEcm9wZG93blZhbHVlID0geyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH07XG5leHBvcnQgdHlwZSBEcm9wZG93bkl0ZW08VCA9IERyb3Bkb3duVmFsdWU+ID0gVDtcblxuZXhwb3J0IHR5cGUgRHJvcGRvd25FdmVudFZhbHVlID0ge1xuICB0YXJnZXQ6IHtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHZhbHVlOiBEcm9wZG93blZhbHVlIHwgbnVsbDtcbiAgfTtcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBEcm9wZG93blByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgaXRlbXM6IERyb3Bkb3duVmFsdWVbXTtcbiAgdmFsdWU/OiBEcm9wZG93blZhbHVlIHwgbnVsbDtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBhcmVJdGVtc1JlbW92YWJsZT86IGJvb2xlYW47XG4gIGlzU2VhcmNoYWJsZT86IGJvb2xlYW47XG4gIG9uQ2hhbmdlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uU2VsZWN0PzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uUmVtb3ZlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG5cbiAgbm9JdGVtc01lc3NhZ2U/OiBzdHJpbmc7XG59XG5cbmNvbnN0IGdldENoYW5nZUV2ZW50ID0gKHZhbHVlOiBhbnkpOiBEcm9wZG93bkV2ZW50VmFsdWUgPT4ge1xuICByZXR1cm4ge1xuICAgIHRhcmdldDoge1xuICAgICAgbmFtZTogdW5kZWZpbmVkLFxuICAgICAgdmFsdWUsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBEcm9wZG93bihwcm9wczogRHJvcGRvd25Qcm9wcykge1xuICBjb25zdCB7XG4gICAgaXRlbXMsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgbGFiZWwsXG4gICAgYXJlSXRlbXNSZW1vdmFibGUsXG4gICAgdmFsdWUsXG4gICAgc3R5bGUsXG4gICAgb25TZWxlY3QsXG4gICAgb25SZW1vdmUsXG4gICAgbm9JdGVtc01lc3NhZ2UgPSAnTm8gT3B0aW9ucyEnLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZ2V0Q2hhbmdlRXZlbnQgPSAodmFsdWU6IERyb3Bkb3duVmFsdWUgfCBudWxsKTogRHJvcGRvd25FdmVudFZhbHVlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdGFyZ2V0OiB7XG4gICAgICAgIG5hbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgdmFsdWUsXG4gICAgICB9LFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlSXRlbSA9IChcbiAgICBpdGVtOiBEcm9wZG93bkl0ZW0sXG4gICAgZXYsXG4gICAgZG93bnNoaWZ0OiBDb250cm9sbGVyU3RhdGVBbmRIZWxwZXJzPERyb3Bkb3duSXRlbT5cbiAgKSA9PiB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGNvbnN0IHZhbHVlID0gaXRlbSAmJiBpdGVtVmFsdWVHZXR0ZXIoaXRlbSk7XG4gICAgb25SZW1vdmUgJiYgb25SZW1vdmUoZ2V0Q2hhbmdlRXZlbnQodmFsdWUpKTtcbiAgfTtcblxuICBjb25zdCBpdGVtVmFsdWVHZXR0ZXIgPSAoaXRlbSkgPT4gaXRlbS52YWx1ZTtcbiAgY29uc3QgaXRlbU5hbWVHZXR0ZXIgPSAoaXRlbSkgPT4gaXRlbS5sYWJlbDtcblxuICBjb25zdCBoYW5kbGVJdGVtU2VsZWN0ID0gKGl0ZW0pID0+IHtcbiAgICBvblNlbGVjdCAmJiBvblNlbGVjdChpdGVtKTtcbiAgfTtcblxuICBjb25zdCBnZXRJdGVtVG9TdHJpbmcgPSAoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtID09PSBudWxsKSByZXR1cm4gJyc7XG4gICAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyA/IGl0ZW0gOiBpdGVtLmxhYmVsO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERvd25zaGlmdFxuICAgICAgaXRlbVRvU3RyaW5nPXtnZXRJdGVtVG9TdHJpbmd9XG4gICAgICBvblNlbGVjdD17aGFuZGxlSXRlbVNlbGVjdH1cbiAgICAgIHNlbGVjdGVkSXRlbT17dmFsdWV9XG4gICAgICBzZWxlY3RlZEl0ZW1DaGFuZ2VkPXsocHJldkl0ZW0sIGl0ZW0pID0+ICFpc0VxdWFsKHByZXZJdGVtLCBpdGVtKX1cbiAgICA+XG4gICAgICB7KGRvd25zaGlmdCkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgZ2V0SXRlbVByb3BzLFxuICAgICAgICAgIGdldE1lbnVQcm9wcyxcbiAgICAgICAgICBpc09wZW4sXG4gICAgICAgICAgc2VsZWN0ZWRJdGVtLFxuICAgICAgICAgIGdldFJvb3RQcm9wcyxcbiAgICAgICAgICBnZXRUb2dnbGVCdXR0b25Qcm9wcyxcbiAgICAgICAgfSA9IGRvd25zaGlmdDtcblxuICAgICAgICBjb25zdCBub0l0ZW1zID0gIShpdGVtcyAmJiBpdGVtcy5sZW5ndGgpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFN0eWxlZERyb3Bkb3duXG4gICAgICAgICAgICB7Li4uZ2V0Um9vdFByb3BzKHsgcmVmS2V5OiAnaW5uZXJSZWYnIH0pfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgICAgICA8Qm9keVRleHQgbGluZUhlaWdodD17J3hzJ30gc2l6ZT17MX0+XG4gICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICB7Li4uZ2V0VG9nZ2xlQnV0dG9uUHJvcHMoKX1cbiAgICAgICAgICAgICAgaXRlbXNTcGFjaW5nPXsxMH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJvZHlUZXh0XG4gICAgICAgICAgICAgICAgc2l6ZT17M31cbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PXsneHMnfVxuICAgICAgICAgICAgICAgIHZhcmlhdGlvbj17c2VsZWN0ZWRJdGVtID8gJ2luaGVyaXQnIDogJ2RhcmtHcmF5J31cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpdGVtTmFtZUdldHRlcihzZWxlY3RlZEl0ZW0pIHx8IHBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgICA8U3ZnSWNvbiBzcmM9e2lzT3BlbiA/IFVwSWNvbiA6IERvd25JY29ufSAvPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8SXRlbXNDb250YWluZXIgey4uLmdldE1lbnVQcm9wcygpfSBpc09wZW49e2lzT3Blbn0+XG4gICAgICAgICAgICAgIHtpc09wZW4gJiZcbiAgICAgICAgICAgICAgICAobm9JdGVtcyA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzhweCAxNnB4JywgcG9pbnRlckV2ZW50czogJ25vbmUnIH19PlxuICAgICAgICAgICAgICAgICAgICA8Qm9keVRleHRcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPXszfVxuICAgICAgICAgICAgICAgICAgICAgIHNjYWxlPXsneHMnfVxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9eyd4cyd9XG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uPVwiZGFya0dyYXlcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge25vSXRlbXNNZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBpc0VxdWFsKGl0ZW0sIHNlbGVjdGVkSXRlbSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8SXRlbUNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtpdGVtfS0ke2lkeH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNTcGFjaW5nPXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0SXRlbVByb3BzKHsgaXRlbSwgaW5kZXg6IGlkeCB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9keVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17aXNTZWxlY3RlZCA/IDEgOiAzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlPXsneHMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PXsneHMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbU5hbWVHZXR0ZXIoaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAge2FyZUl0ZW1zUmVtb3ZhYmxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJhc3NldHMvaWNvbnMvaWMtZGVsZXRlLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUmVtb3ZlSXRlbShpdGVtLCBldiwgZG93bnNoaWZ0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9JdGVtQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvSXRlbXNDb250YWluZXI+XG4gICAgICAgICAgPC9TdHlsZWREcm9wZG93bj5cbiAgICAgICAgKTtcbiAgICAgIH19XG4gICAgPC9Eb3duc2hpZnQ+XG4gICk7XG59XG5cbmV4cG9ydCB0eXBlIE11bHRpRHJvcGRvd25WYWx1ZSA9IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgY2hpcExhYmVsPzogc3RyaW5nO1xuICB2YWx1ZTogYW55O1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aVNlbGVjdERyb3Bkb3duUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xuICB2YWx1ZT86IE11bHRpRHJvcGRvd25WYWx1ZVtdO1xuICBpdGVtczogTXVsdGlEcm9wZG93blZhbHVlW107XG4gIGxhYmVsPzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG9uQ2hhbmdlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uU2VsZWN0PzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uUmVtb3ZlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNdWx0aVNlbGVjdERyb3Bkb3duKHByb3BzOiBNdWx0aVNlbGVjdERyb3Bkb3duUHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGl0ZW1zLFxuICAgIHZhbHVlLFxuICAgIGxhYmVsLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGRpc2FibGVkLFxuICAgIG9uU2VsZWN0LFxuICAgIG9uQ2hhbmdlLFxuICAgIG9uUmVtb3ZlLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3Qge1xuICAgIGdldFNlbGVjdGVkSXRlbVByb3BzLFxuICAgIGdldERyb3Bkb3duUHJvcHMsXG4gICAgYWRkU2VsZWN0ZWRJdGVtLFxuICAgIHJlbW92ZVNlbGVjdGVkSXRlbSxcbiAgICBzZWxlY3RlZEl0ZW1zLFxuICB9ID0gdXNlTXVsdGlwbGVTZWxlY3Rpb248TXVsdGlEcm9wZG93blZhbHVlPih7XG4gICAgaW5pdGlhbFNlbGVjdGVkSXRlbXM6IHZhbHVlLFxuICAgIG9uU2VsZWN0ZWRJdGVtc0NoYW5nZTogKGNoYW5nZXMpID0+IHtcbiAgICAgIG9uU2VsZWN0ICYmIG9uU2VsZWN0KGdldENoYW5nZUV2ZW50KGNoYW5nZXMuc2VsZWN0ZWRJdGVtcykpO1xuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IHtcbiAgICBpc09wZW4sXG4gICAgc2VsZWN0ZWRJdGVtLFxuICAgIGdldFRvZ2dsZUJ1dHRvblByb3BzLFxuICAgIGdldExhYmVsUHJvcHMsXG4gICAgZ2V0TWVudVByb3BzLFxuICAgIGdldEl0ZW1Qcm9wcyxcbiAgfSA9IHVzZVNlbGVjdCh7XG4gICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxuICAgIGRlZmF1bHRIaWdobGlnaHRlZEluZGV4OiAwLCAvLyBhZnRlciBzZWxlY3Rpb24sIGhpZ2hsaWdodCB0aGUgZmlyc3QgaXRlbS5cbiAgICBpdGVtcyxcbiAgICBzdGF0ZVJlZHVjZXI6IChzdGF0ZSwgYWN0aW9uQW5kQ2hhbmdlcykgPT4ge1xuICAgICAgY29uc3QgeyBjaGFuZ2VzLCB0eXBlIH0gPSBhY3Rpb25BbmRDaGFuZ2VzO1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgdXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMuVG9nZ2xlQnV0dG9uS2V5RG93bkVudGVyOlxuICAgICAgICBjYXNlIHVzZVNlbGVjdC5zdGF0ZUNoYW5nZVR5cGVzLlRvZ2dsZUJ1dHRvbktleURvd25TcGFjZUJ1dHRvbjpcbiAgICAgICAgY2FzZSB1c2VTZWxlY3Quc3RhdGVDaGFuZ2VUeXBlcy5JdGVtQ2xpY2s6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmNoYW5nZXMsXG4gICAgICAgICAgICBpc09wZW46IHRydWUsIC8vIGtlZXAgdGhlIG1lbnUgb3BlbiBhZnRlciBzZWxlY3Rpb24uXG4gICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gY2hhbmdlcztcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uU3RhdGVDaGFuZ2U6ICh7IHR5cGUsIHNlbGVjdGVkSXRlbTogbmV3U2VsZWN0ZWRJdGVtIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIHVzZVNlbGVjdC5zdGF0ZUNoYW5nZVR5cGVzLlRvZ2dsZUJ1dHRvbktleURvd25FbnRlcjpcbiAgICAgICAgY2FzZSB1c2VTZWxlY3Quc3RhdGVDaGFuZ2VUeXBlcy5Ub2dnbGVCdXR0b25LZXlEb3duU3BhY2VCdXR0b246XG4gICAgICAgIGNhc2UgdXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMuSXRlbUNsaWNrOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGlzQWxyZWFkeVNlbGVjdGVkID0gc2VsZWN0ZWRJdGVtcy5zb21lKFxuICAgICAgICAgICAgICAoaSkgPT4gaS52YWx1ZSA9PT0gbmV3U2VsZWN0ZWRJdGVtPy52YWx1ZVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKG5ld1NlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgICBpZiAoaXNBbHJlYWR5U2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVTZWxlY3RlZEl0ZW0obmV3U2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgICAgICBvblJlbW92ZSAmJiBvblJlbW92ZShnZXRDaGFuZ2VFdmVudChuZXdTZWxlY3RlZEl0ZW0pKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRTZWxlY3RlZEl0ZW0obmV3U2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSAmJiBvbkNoYW5nZShnZXRDaGFuZ2VFdmVudChuZXdTZWxlY3RlZEl0ZW0pKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWREcm9wZG93biBkaXNhYmxlZD17ZGlzYWJsZWR9PlxuICAgICAgPEZsZXhDb2x1bW4gaXRlbXNTcGFjaW5nPXs0fT5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8Qm9keVRleHQgbGluZUhlaWdodD17J3hzJ30gc2l6ZT17MX0gey4uLmdldExhYmVsUHJvcHMoKX0+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9Cb2R5VGV4dD5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TXVsdGlTZWxlY3RDb250YWluZXJcbiAgICAgICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgey4uLmdldFRvZ2dsZUJ1dHRvblByb3BzKFxuICAgICAgICAgICAgICBnZXREcm9wZG93blByb3BzKHsgcHJldmVudEtleUFjdGlvbjogaXNPcGVuIH0pXG4gICAgICAgICAgICApfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8Qm9keVRleHRcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PXsneHMnfVxuICAgICAgICAgICAgICAgIHNpemU9ezN9XG4gICAgICAgICAgICAgICAgdmFyaWF0aW9uPXtzZWxlY3RlZEl0ZW0gPyAnaW5oZXJpdCcgOiAnZGFya0dyYXknfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE92ZXJmbG93V3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgIDxGbGV4Um93IGdhcD17OH0gd3JhcD17J3dyYXAnfT5cbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkSXRlbXMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlcldyYXBwZXI+e3BsYWNlaG9sZGVyfTwvUGxhY2Vob2xkZXJXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXMubWFwKChzZWxlY3RlZEl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hpcEl0ZW1Db250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgc2VsZWN0ZWQtaXRlbS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRTZWxlY3RlZEl0ZW1Qcm9wcyh7IHNlbGVjdGVkSXRlbSwgaW5kZXggfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Um93IGFsaWduPXsnY2VudGVyJ30gZ2FwPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRJdGVtPy5jaGlwTGFiZWwgfHwgc2VsZWN0ZWRJdGVtPy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlTZWxlY3REZWxldGVJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVNlbGVjdGVkSXRlbShzZWxlY3RlZEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezE0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsnYXNzZXRzL2ljb25zL2ljLWRlbGV0ZS5zdmcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2hpcEl0ZW1Db250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvRmxleFJvdz5cbiAgICAgICAgICAgICAgICA8L092ZXJmbG93V3JhcHBlcj5cbiAgICAgICAgICAgICAgPC9Cb2R5VGV4dD5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxEcm9wZG93bkljb25XcmFwcGVyPlxuICAgICAgICAgICAgICA8U3ZnSWNvbiBzaXplPXsxNn0gc3JjPXtpc09wZW4gPyBVcEljb24gOiBEb3duSWNvbn0gLz5cbiAgICAgICAgICAgIDwvRHJvcGRvd25JY29uV3JhcHBlcj5cbiAgICAgICAgICA8L011bHRpU2VsZWN0Q29udGFpbmVyPlxuICAgICAgICAgIDxJdGVtc0NvbnRhaW5lciB7Li4uZ2V0TWVudVByb3BzKCl9IGlzT3Blbj17aXNPcGVufT5cbiAgICAgICAgICAgIHtpc09wZW4gJiZcbiAgICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZEl0ZW1zPy5zb21lKFxuICAgICAgICAgICAgICAgICAgKGkpID0+IGkudmFsdWUgPT09IGl0ZW0udmFsdWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8SXRlbUNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNTcGFjaW5nPXsxMH1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtpdGVtLnZhbHVlfSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgey4uLmdldEl0ZW1Qcm9wcyh7IGl0ZW0sIGluZGV4IH0pfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Qm9keVRleHRcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPXtpc1NlbGVjdGVkID8gMSA6IDN9XG4gICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodD17J3hzJ31cbiAgICAgICAgICAgICAgICAgICAgICBzY2FsZT17J3hzJ31cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgICAgICAgICB7aXNTZWxlY3RlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MTR9XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9eydhc3NldHMvaWNvbnMvaWMtY2hlY2ttYXJrLnN2Zyd9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvSXRlbUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L0l0ZW1zQ29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRmxleENvbHVtbj5cbiAgICA8L1N0eWxlZERyb3Bkb3duPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcbiJdfQ==