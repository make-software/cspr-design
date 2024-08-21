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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQXlDO0FBQ3pDLDZEQUltQjtBQUNuQixnRkFBdUM7QUFDdkMsNEVBQXNDO0FBSXRDLDZFQUE4QztBQUM5QywwRUFBMkM7QUFDM0MsMEVBQTJDO0FBQzNDLG1GQUFvRDtBQUVwRCwrRkFBd0Q7QUFDeEQsbUdBQTREO0FBQzVELGlHQUFnRTtBQUNoRSwyRkFBMEQ7QUFFMUQsSUFBTSxjQUFjLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQy9CLFVBQUMsRUFBbUI7UUFBakIsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBO0lBQU8sT0FBQSxvQkFDdkIsT0FBTyxFQUFFLE1BQU0sSUFFWixDQUFDLFFBQVEsSUFBSTtRQUNkLE9BQU8sRUFBRSxLQUFLO1FBQ2QsYUFBYSxFQUFFLE1BQU07S0FDdEIsQ0FBQyxFQUNGO0FBUHVCLENBT3ZCLENBQ0gsQ0FBQztBQUVGLElBQU0sU0FBUyxHQUFHLElBQUEsMkJBQU0sRUFBQyxrQkFBTyxDQUFDLENBQXNCLFVBQUMsRUFBaUI7UUFBZixLQUFLLFdBQUEsRUFBRSxNQUFNLFlBQUE7SUFBTyxPQUFBLENBQUM7UUFDN0UsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSTtRQUNyQyxNQUFNLEVBQUUsTUFBTTtRQUNkLE1BQU0sRUFBRSxFQUFFO1FBQ1YsT0FBTyxFQUFFLFFBQVE7UUFDakIsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1FBQ2hELGlCQUFpQixFQUFFO1lBQ2pCLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtZQUNoRCxHQUFHLEVBQUU7Z0JBQ0gsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjO2FBQzdDO1NB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LENBQUMseUJBQU0sQ0FBQyxDQUFDLENBQUMsMkJBQVEsR0FBSSxJQUNsQyxLQUNELEVBQ3ZCLHVCQUFDLGNBQWMsdUJBQUssWUFBWSxFQUFFLElBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQy9DLE1BQU07Z0NBQ0wsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksRUFBRSxLQUFLO29DQUNwQixJQUFNLFVBQVUsR0FBRyxhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsSUFBSSxDQUNwQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBdEIsQ0FBc0IsQ0FDOUIsQ0FBQztvQ0FDRixPQUFPLENBQ0wsd0JBQUMsYUFBYSxxQkFDWixLQUFLLEVBQUMsUUFBUSxFQUNkLE9BQU8sRUFBQyxlQUFlLEVBQ3ZCLFlBQVksRUFBRSxFQUFFLElBRVosWUFBWSxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxlQUVqQyx1QkFBQyxtQkFBUSxxQkFDUCxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDeEIsVUFBVSxFQUFFLElBQUksRUFDaEIsS0FBSyxFQUFFLElBQUksZ0JBRVYsSUFBSSxDQUFDLEtBQUssSUFDRixFQUNWLFVBQVUsSUFBSSx1QkFBQyxTQUFTLElBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsMEJBQWEsR0FBSSxNQVZyRCxVQUFHLElBQUksQ0FBQyxLQUFLLFNBQUcsS0FBSyxDQUFFLENBV2QsQ0FDakIsQ0FBQztnQ0FDSixDQUFDLENBQUMsSUFDVyxJQUNiLEtBQ0ssSUFDRSxDQUNsQixDQUFDO0FBQ0osQ0FBQztBQXZNRCxrREF1TUM7QUFFRCxrQkFBZSxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERvd25zaGlmdCwge1xuICBDb250cm9sbGVyU3RhdGVBbmRIZWxwZXJzLFxuICB1c2VNdWx0aXBsZVNlbGVjdGlvbixcbiAgdXNlU2VsZWN0LFxufSBmcm9tICdkb3duc2hpZnQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgaXNFcXVhbCBmcm9tICdmYXN0LWRlZXAtZXF1YWwnO1xuXG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmltcG9ydCBCb2R5VGV4dCBmcm9tICcuLi9ib2R5LXRleHQvYm9keS10ZXh0JztcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcbmltcG9ydCBGbGV4Q29sdW1uIGZyb20gJy4uL2ZsZXgtY29sdW1uL2ZsZXgtY29sdW1uJztcblxuaW1wb3J0IFVwSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtYXJyb3ctdXAuc3ZnJztcbmltcG9ydCBEb3duSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtYXJyb3ctZG93bi5zdmcnO1xuaW1wb3J0IENoZWNrbWFya0ljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWNoZWNrbWFyay5zdmcnO1xuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWRlbGV0ZS5zdmcnO1xuXG5jb25zdCBTdHlsZWREcm9wZG93biA9IHN0eWxlZC5kaXY8eyBkaXNhYmxlZD86IGJvb2xlYW4gfT4oXG4gICh7IHRoZW1lLCBkaXNhYmxlZCB9KSA9PiAoe1xuICAgIG91dGxpbmU6ICdub25lJyxcblxuICAgIC4uLihkaXNhYmxlZCAmJiB7XG4gICAgICBvcGFjaXR5OiAnMC41JyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICB9KSxcbiAgfSlcbik7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KTx7IGlzT3BlbjogYm9vbGVhbiB9PigoeyB0aGVtZSwgaXNPcGVuIH0pID0+ICh7XG4gIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBoZWlnaHQ6IDM2LFxuICBwYWRkaW5nOiAnMCAxNnB4JyxcbiAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxuICAnOmhvdmVyLCA6YWN0aXZlJzoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcbiAgICBzdmc6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5UmVkLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmNvbnN0IEl0ZW1zQ29udGFpbmVyID0gc3R5bGVkLmRpdjx7IGlzT3BlbjogYm9vbGVhbiB9PigoeyB0aGVtZSwgaXNPcGVuIH0pID0+ICh7XG4gIGRpc3BsYXk6IGlzT3BlbiA/ICdpbmhlcml0JyA6ICdub25lJyxcbiAgbWFyZ2luVG9wOiA0LFxuICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG59KSk7XG5cbmNvbnN0IEl0ZW1Db250YWluZXIgPSBzdHlsZWQoRmxleFJvdykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIG1pbkhlaWdodDogMzYsXG4gIHBhZGRpbmc6ICc4cHggMTZweCcsXG4gICc6aG92ZXIsIDphY3RpdmUnOiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5Qmx1ZUhvdmVyLFxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgfSxcbn0pKTtcblxuY29uc3QgRGVsZXRlU3ZnSWNvbiA9IHN0eWxlZChTdmdJY29uKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBwYXRoOiB7XG4gICAgc3Ryb2tlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG4gIH0sXG4gICc6aG92ZXIsIDphY3RpdmUnOiB7XG4gICAgcGF0aDoge1xuICAgICAgc3Ryb2tlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5UmVkLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmNvbnN0IENsZWFyU3ZnSWNvbiA9IHN0eWxlZChTdmdJY29uKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBwYXRoOiB7XG4gICAgc3Ryb2tlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5XG4gIH1cbn0pKTtcblxuY29uc3QgTXVsdGlTZWxlY3RDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8eyBpc09wZW46IGJvb2xlYW4gfT4oXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gICAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICAgIHN2Zzoge1xuICAgICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmNvbnN0IFBsYWNlaG9sZGVyV3JhcHBlciA9IHN0eWxlZC5zcGFuKCh7IHRoZW1lIH0pID0+ICh7XG4gIHBhZGRpbmc6ICcwIDhweCcsXG59KSk7XG5cbmNvbnN0IENoaXBJdGVtQ29udGFpbmVyID0gc3R5bGVkLnNwYW4oKHsgdGhlbWUgfSkgPT4gKHtcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIHBhZGRpbmc6ICcycHggOHB4JyxcbiAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsVGVydHJpYXJ5LFxuICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcbn0pKTtcblxuY29uc3QgT3ZlcmZsb3dXcmFwcGVyID0gc3R5bGVkLnNwYW4oKHsgdGhlbWUgfSkgPT4gKHtcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxufSkpO1xuXG5jb25zdCBEcm9wZG93bkljb25XcmFwcGVyID0gc3R5bGVkKEZsZXhSb3cpKCh7IHRoZW1lIH0pID0+ICh7XG4gIHBhZGRpbmdSaWdodDogJzhweCcsXG4gIG1hcmdpbkxlZnQ6ICc4cHgnLFxufSkpO1xuXG5jb25zdCBDaGVja0ljb24gPSBzdHlsZWQoU3ZnSWNvbikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgcGF0aDoge1xuICAgIGZpbGw6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXG4gIH0sXG59KSk7XG5cbmNvbnN0IE11bHRpU2VsZWN0RGVsZXRlSWNvbiA9IHN0eWxlZChTdmdJY29uKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBwYXRoOiB7XG4gICAgc3Ryb2tlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICB9LFxuICAnOmhvdmVyLCA6YWN0aXZlJzoge1xuICAgIHBhdGg6IHtcbiAgICAgIHN0cm9rZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UmVkLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmV4cG9ydCB0eXBlIERyb3Bkb3duVmFsdWUgPSB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfTtcbmV4cG9ydCB0eXBlIERyb3Bkb3duSXRlbTxUID0gRHJvcGRvd25WYWx1ZT4gPSBUO1xuXG5leHBvcnQgdHlwZSBEcm9wZG93bkV2ZW50VmFsdWUgPSB7XG4gIHRhcmdldDoge1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgdmFsdWU6IERyb3Bkb3duVmFsdWUgfCBudWxsO1xuICB9O1xufTtcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xuICBpdGVtczogRHJvcGRvd25WYWx1ZVtdO1xuICB2YWx1ZT86IERyb3Bkb3duVmFsdWUgfCBudWxsO1xuICBsYWJlbD86IHN0cmluZztcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIGFyZUl0ZW1zUmVtb3ZhYmxlPzogYm9vbGVhbjtcbiAgaXNTZWFyY2hhYmxlPzogYm9vbGVhbjtcbiAgb25DaGFuZ2U/OiAoZXY6IERyb3Bkb3duRXZlbnRWYWx1ZSkgPT4gdm9pZDtcbiAgb25TZWxlY3Q/OiAoZXY6IERyb3Bkb3duRXZlbnRWYWx1ZSkgPT4gdm9pZDtcbiAgb25SZW1vdmU/OiAoZXY6IERyb3Bkb3duRXZlbnRWYWx1ZSkgPT4gdm9pZDtcblxuICBub0l0ZW1zTWVzc2FnZT86IHN0cmluZztcbn1cblxuY29uc3QgZ2V0Q2hhbmdlRXZlbnQgPSAodmFsdWU6IGFueSk6IERyb3Bkb3duRXZlbnRWYWx1ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGFyZ2V0OiB7XG4gICAgICBuYW1lOiB1bmRlZmluZWQsXG4gICAgICB2YWx1ZSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIERyb3Bkb3duKHByb3BzOiBEcm9wZG93blByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBpdGVtcyxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBsYWJlbCxcbiAgICBhcmVJdGVtc1JlbW92YWJsZSxcbiAgICB2YWx1ZSxcbiAgICBzdHlsZSxcbiAgICBvblNlbGVjdCxcbiAgICBvblJlbW92ZSxcbiAgICBub0l0ZW1zTWVzc2FnZSA9ICdObyBPcHRpb25zIScsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBnZXRDaGFuZ2VFdmVudCA9ICh2YWx1ZTogRHJvcGRvd25WYWx1ZSB8IG51bGwpOiBEcm9wZG93bkV2ZW50VmFsdWUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgbmFtZTogdW5kZWZpbmVkLFxuICAgICAgICB2YWx1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZW1vdmVJdGVtID0gKFxuICAgIGl0ZW06IERyb3Bkb3duSXRlbSxcbiAgICBldixcbiAgICBkb3duc2hpZnQ6IENvbnRyb2xsZXJTdGF0ZUFuZEhlbHBlcnM8RHJvcGRvd25JdGVtPlxuICApID0+IHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgY29uc3QgdmFsdWUgPSBpdGVtICYmIGl0ZW1WYWx1ZUdldHRlcihpdGVtKTtcbiAgICBvblJlbW92ZSAmJiBvblJlbW92ZShnZXRDaGFuZ2VFdmVudCh2YWx1ZSkpO1xuICB9O1xuXG4gIGNvbnN0IGl0ZW1WYWx1ZUdldHRlciA9IChpdGVtKSA9PiBpdGVtLnZhbHVlO1xuICBjb25zdCBpdGVtTmFtZUdldHRlciA9IChpdGVtKSA9PiBpdGVtLmxhYmVsO1xuXG4gIGNvbnN0IGhhbmRsZUl0ZW1TZWxlY3QgPSAoaXRlbSkgPT4ge1xuICAgIG9uU2VsZWN0ICYmIG9uU2VsZWN0KGl0ZW0pO1xuICB9O1xuXG4gIGNvbnN0IGdldEl0ZW1Ub1N0cmluZyA9IChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0gPT09IG51bGwpIHJldHVybiAnJztcbiAgICByZXR1cm4gdHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnID8gaXRlbSA6IGl0ZW0ubGFiZWw7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RG93bnNoaWZ0XG4gICAgICBpdGVtVG9TdHJpbmc9e2dldEl0ZW1Ub1N0cmluZ31cbiAgICAgIG9uU2VsZWN0PXtoYW5kbGVJdGVtU2VsZWN0fVxuICAgICAgc2VsZWN0ZWRJdGVtPXt2YWx1ZX1cbiAgICAgIHNlbGVjdGVkSXRlbUNoYW5nZWQ9eyhwcmV2SXRlbSwgaXRlbSkgPT4gIWlzRXF1YWwocHJldkl0ZW0sIGl0ZW0pfVxuICAgID5cbiAgICAgIHsoZG93bnNoaWZ0KSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBnZXRJdGVtUHJvcHMsXG4gICAgICAgICAgZ2V0TWVudVByb3BzLFxuICAgICAgICAgIGlzT3BlbixcbiAgICAgICAgICBzZWxlY3RlZEl0ZW0sXG4gICAgICAgICAgZ2V0Um9vdFByb3BzLFxuICAgICAgICAgIGdldFRvZ2dsZUJ1dHRvblByb3BzLFxuICAgICAgICB9ID0gZG93bnNoaWZ0O1xuXG4gICAgICAgIGNvbnN0IG5vSXRlbXMgPSAhKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8U3R5bGVkRHJvcGRvd25cbiAgICAgICAgICAgIHsuLi5nZXRSb290UHJvcHMoeyByZWZLZXk6ICdpbm5lclJlZicgfSl9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICB0YWJJbmRleD1cIjBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgICAgIDxCb2R5VGV4dCBsaW5lSGVpZ2h0PXsneHMnfSBzaXplPXsxfT5cbiAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgIHsuLi5nZXRUb2dnbGVCdXR0b25Qcm9wcygpfVxuICAgICAgICAgICAgICBpdGVtc1NwYWNpbmc9ezEwfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Qm9keVRleHRcbiAgICAgICAgICAgICAgICBzaXplPXszfVxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9eyd4cyd9XG4gICAgICAgICAgICAgICAgdmFyaWF0aW9uPXtzZWxlY3RlZEl0ZW0gPyAnaW5oZXJpdCcgOiAnZGFya0dyYXknfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2l0ZW1OYW1lR2V0dGVyKHNlbGVjdGVkSXRlbSkgfHwgcGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgICAgIDxTdmdJY29uIHNyYz17aXNPcGVuID8gVXBJY29uIDogRG93bkljb259IC8+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDxJdGVtc0NvbnRhaW5lciB7Li4uZ2V0TWVudVByb3BzKCl9IGlzT3Blbj17aXNPcGVufT5cbiAgICAgICAgICAgICAge2lzT3BlbiAmJlxuICAgICAgICAgICAgICAgIChub0l0ZW1zID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnOHB4IDE2cHgnLCBwb2ludGVyRXZlbnRzOiAnbm9uZScgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxCb2R5VGV4dFxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezN9XG4gICAgICAgICAgICAgICAgICAgICAgc2NhbGU9eyd4cyd9XG4gICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodD17J3hzJ31cbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb249XCJkYXJrR3JheVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7bm9JdGVtc01lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IGlzRXF1YWwoaXRlbSwgc2VsZWN0ZWRJdGVtKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxJdGVtQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2l0ZW19LSR7aWR4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1NwYWNpbmc9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRJdGVtUHJvcHMoeyBpdGVtLCBpbmRleDogaWR4IH0pfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2R5VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtpc1NlbGVjdGVkID8gMSA6IDN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU9eyd4cyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9eyd4cyd9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtTmFtZUdldHRlcihpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YXJlSXRlbXNSZW1vdmFibGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlU3ZnSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17RGVsZXRlSWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXYpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVSZW1vdmVJdGVtKGl0ZW0sIGV2LCBkb3duc2hpZnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW1Db250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9JdGVtc0NvbnRhaW5lcj5cbiAgICAgICAgICA8L1N0eWxlZERyb3Bkb3duPlxuICAgICAgICApO1xuICAgICAgfX1cbiAgICA8L0Rvd25zaGlmdD5cbiAgKTtcbn1cblxuZXhwb3J0IHR5cGUgTXVsdGlEcm9wZG93blZhbHVlID0ge1xuICBsYWJlbDogc3RyaW5nO1xuICBjaGlwTGFiZWw/OiBzdHJpbmc7XG4gIGNoaXBOYW1lPzogc3RyaW5nO1xuICB2YWx1ZTogYW55O1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aVNlbGVjdERyb3Bkb3duUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xuICB2YWx1ZT86IE11bHRpRHJvcGRvd25WYWx1ZVtdO1xuICBpdGVtczogTXVsdGlEcm9wZG93blZhbHVlW107XG4gIGxhYmVsPzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG9uQ2hhbmdlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uU2VsZWN0PzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uUmVtb3ZlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uQ2xlYXJBbGxJdGVtcz86IChldjogRHJvcGRvd25FdmVudFZhbHVlKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTXVsdGlTZWxlY3REcm9wZG93bihwcm9wczogTXVsdGlTZWxlY3REcm9wZG93blByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBpdGVtcyxcbiAgICB2YWx1ZSxcbiAgICBsYWJlbCxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBkaXNhYmxlZCxcbiAgICBvblNlbGVjdCxcbiAgICBvbkNoYW5nZSxcbiAgICBvblJlbW92ZSxcbiAgICBvbkNsZWFyQWxsSXRlbXMsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7XG4gICAgZ2V0U2VsZWN0ZWRJdGVtUHJvcHMsXG4gICAgZ2V0RHJvcGRvd25Qcm9wcyxcbiAgICBhZGRTZWxlY3RlZEl0ZW0sXG4gICAgcmVtb3ZlU2VsZWN0ZWRJdGVtLFxuICAgIHNlbGVjdGVkSXRlbXMsXG4gICAgc2V0U2VsZWN0ZWRJdGVtcyxcbiAgICByZXNldCxcbiAgfSA9IHVzZU11bHRpcGxlU2VsZWN0aW9uPE11bHRpRHJvcGRvd25WYWx1ZT4oe1xuICAgIGluaXRpYWxTZWxlY3RlZEl0ZW1zOiB2YWx1ZSxcbiAgICBvblNlbGVjdGVkSXRlbXNDaGFuZ2U6IChjaGFuZ2VzKSA9PiB7XG4gICAgICBvblNlbGVjdCAmJiBvblNlbGVjdChnZXRDaGFuZ2VFdmVudChjaGFuZ2VzLnNlbGVjdGVkSXRlbXMpKTtcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCB7XG4gICAgaXNPcGVuLFxuICAgIHNlbGVjdGVkSXRlbSxcbiAgICBnZXRUb2dnbGVCdXR0b25Qcm9wcyxcbiAgICBnZXRMYWJlbFByb3BzLFxuICAgIGdldE1lbnVQcm9wcyxcbiAgICBnZXRJdGVtUHJvcHMsXG4gIH0gPSB1c2VTZWxlY3Qoe1xuICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcbiAgICBkZWZhdWx0SGlnaGxpZ2h0ZWRJbmRleDogMCwgLy8gYWZ0ZXIgc2VsZWN0aW9uLCBoaWdobGlnaHQgdGhlIGZpcnN0IGl0ZW0uXG4gICAgaXRlbXMsXG4gICAgc3RhdGVSZWR1Y2VyOiAoc3RhdGUsIGFjdGlvbkFuZENoYW5nZXMpID0+IHtcbiAgICAgIGNvbnN0IHsgY2hhbmdlcywgdHlwZSB9ID0gYWN0aW9uQW5kQ2hhbmdlcztcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIHVzZVNlbGVjdC5zdGF0ZUNoYW5nZVR5cGVzLlRvZ2dsZUJ1dHRvbktleURvd25FbnRlcjpcbiAgICAgICAgY2FzZSB1c2VTZWxlY3Quc3RhdGVDaGFuZ2VUeXBlcy5Ub2dnbGVCdXR0b25LZXlEb3duU3BhY2VCdXR0b246XG4gICAgICAgIGNhc2UgdXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMuSXRlbUNsaWNrOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5jaGFuZ2VzLFxuICAgICAgICAgICAgaXNPcGVuOiB0cnVlLCAvLyBrZWVwIHRoZSBtZW51IG9wZW4gYWZ0ZXIgc2VsZWN0aW9uLlxuICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGNoYW5nZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICBvblN0YXRlQ2hhbmdlOiAoeyB0eXBlLCBzZWxlY3RlZEl0ZW06IG5ld1NlbGVjdGVkSXRlbSB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSB1c2VTZWxlY3Quc3RhdGVDaGFuZ2VUeXBlcy5Ub2dnbGVCdXR0b25LZXlEb3duRW50ZXI6XG4gICAgICAgIGNhc2UgdXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMuVG9nZ2xlQnV0dG9uS2V5RG93blNwYWNlQnV0dG9uOlxuICAgICAgICBjYXNlIHVzZVNlbGVjdC5zdGF0ZUNoYW5nZVR5cGVzLkl0ZW1DbGljazpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBpc0FscmVhZHlTZWxlY3RlZCA9IHNlbGVjdGVkSXRlbXMuc29tZShcbiAgICAgICAgICAgICAgKGkpID0+IGkudmFsdWUgPT09IG5ld1NlbGVjdGVkSXRlbT8udmFsdWVcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmIChuZXdTZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgaWYgKGlzQWxyZWFkeVNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJdGVtcyhcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXMuZmlsdGVyKChpKSA9PiBpLnZhbHVlICE9PSBuZXdTZWxlY3RlZEl0ZW0udmFsdWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBvblJlbW92ZSAmJiBvblJlbW92ZShnZXRDaGFuZ2VFdmVudChuZXdTZWxlY3RlZEl0ZW0pKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRTZWxlY3RlZEl0ZW0obmV3U2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSAmJiBvbkNoYW5nZShnZXRDaGFuZ2VFdmVudChuZXdTZWxlY3RlZEl0ZW0pKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuICB9KTtcblxuICAvL0FsaWduIHJlc2V0dGluZyBzZWxlY3RlZCB2YWx1ZXMgaWYgdGhleSB3ZXJlIHJlc2V0IGluIHBhcmVudFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghdmFsdWUgfHwgdmFsdWUubGVuZ3RoIDwgMSkge1xuICAgICAgcmVzZXQoKTtcbiAgICB9XG4gIH0sIFt2YWx1ZV0pO1xuXG4gIGNvbnN0IGhhbmRsZUNsZWFyQWxsID0gKCkgPT4ge1xuICAgIG9uQ2xlYXJBbGxJdGVtcyAmJiBvbkNsZWFyQWxsSXRlbXMoZ2V0Q2hhbmdlRXZlbnQobnVsbCkpO1xuICAgIHJlc2V0KCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkRHJvcGRvd24gZGlzYWJsZWQ9e2Rpc2FibGVkfT5cbiAgICAgIDxGbGV4Q29sdW1uIGl0ZW1zU3BhY2luZz17NH0+XG4gICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgPEJvZHlUZXh0IGxpbmVIZWlnaHQ9eyd4cyd9IHsuLi5nZXRMYWJlbFByb3BzKCl9IHNpemU9ezF9PlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPE11bHRpU2VsZWN0Q29udGFpbmVyXG4gICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICB7Li4uZ2V0VG9nZ2xlQnV0dG9uUHJvcHMoe1xuICAgICAgICAgICAgICAuLi5nZXREcm9wZG93blByb3BzKHsgcHJldmVudEtleUFjdGlvbjogaXNPcGVuIH0pLFxuICAgICAgICAgICAgICBvbkNsaWNrOiAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSxcbiAgICAgICAgICAgICAgaXNPcGVuLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIDxCb2R5VGV4dFxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9eyd4cyd9XG4gICAgICAgICAgICAgICAgc2l6ZT17M31cbiAgICAgICAgICAgICAgICB2YXJpYXRpb249e3NlbGVjdGVkSXRlbSA/ICdpbmhlcml0JyA6ICdkYXJrR3JheSd9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8T3ZlcmZsb3dXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgPEZsZXhSb3cgZ2FwPXs4fSB3cmFwPXsnd3JhcCd9PlxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRJdGVtcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyV3JhcHBlcj57cGxhY2Vob2xkZXJ9PC9QbGFjZWhvbGRlcldyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcy5tYXAoKHNlbGVjdGVkSXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGlwSXRlbUNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BzZWxlY3RlZC1pdGVtLSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldFNlbGVjdGVkSXRlbVByb3BzKHsgc2VsZWN0ZWRJdGVtLCBpbmRleCB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhSb3cgYWxpZ249eydjZW50ZXInfSBnYXA9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEl0ZW0/LmNoaXBOYW1lICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb2R5VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PXsneHMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb249eydibGFjayd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEl0ZW0uY2hpcE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkSXRlbT8uY2hpcExhYmVsIHx8IHNlbGVjdGVkSXRlbT8ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE11bHRpU2VsZWN0RGVsZXRlSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVTZWxlY3RlZEl0ZW0oc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZShnZXRDaGFuZ2VFdmVudChzZWxlY3RlZEl0ZW0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsxNH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17RGVsZXRlSWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NoaXBJdGVtQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgICAgICAgICAgPC9PdmVyZmxvd1dyYXBwZXI+XG4gICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8RHJvcGRvd25JY29uV3JhcHBlcj5cbiAgICAgICAgICAgICAge29uQ2xlYXJBbGxJdGVtcyAmJiAhIXNlbGVjdGVkSXRlbXMubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgICA8Q2xlYXJTdmdJY29uXG4gICAgICAgICAgICAgICAgICBzcmM9e0RlbGV0ZUljb259XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGVhckFsbH1cbiAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPFN2Z0ljb24gc2l6ZT17MTZ9IHNyYz17aXNPcGVuID8gVXBJY29uIDogRG93bkljb259IC8+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duSWNvbldyYXBwZXI+XG4gICAgICAgICAgPC9NdWx0aVNlbGVjdENvbnRhaW5lcj5cbiAgICAgICAgICA8SXRlbXNDb250YWluZXIgey4uLmdldE1lbnVQcm9wcygpfSBpc09wZW49e2lzT3Blbn0+XG4gICAgICAgICAgICB7aXNPcGVuICYmXG4gICAgICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWRJdGVtcz8uc29tZShcbiAgICAgICAgICAgICAgICAgIChpKSA9PiBpLnZhbHVlID09PSBpdGVtLnZhbHVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEl0ZW1Db250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zU3BhY2luZz17MTB9XG4gICAgICAgICAgICAgICAgICAgIGtleT17YCR7aXRlbS52YWx1ZX0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgIHsuLi5nZXRJdGVtUHJvcHMoeyBpdGVtLCBpbmRleCB9KX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEJvZHlUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT17aXNTZWxlY3RlZCA/IDEgOiAzfVxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9eyd4cyd9XG4gICAgICAgICAgICAgICAgICAgICAgc2NhbGU9eyd4cyd9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9Cb2R5VGV4dD5cbiAgICAgICAgICAgICAgICAgICAge2lzU2VsZWN0ZWQgJiYgPENoZWNrSWNvbiBzaXplPXsxNH0gc3JjPXtDaGVja21hcmtJY29ufSAvPn1cbiAgICAgICAgICAgICAgICAgIDwvSXRlbUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L0l0ZW1zQ29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRmxleENvbHVtbj5cbiAgICA8L1N0eWxlZERyb3Bkb3duPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcbiJdfQ==