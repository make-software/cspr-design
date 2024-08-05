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
    }), getSelectedItemProps = _a.getSelectedItemProps, getDropdownProps = _a.getDropdownProps, addSelectedItem = _a.addSelectedItem, removeSelectedItem = _a.removeSelectedItem, selectedItems = _a.selectedItems, setSelectedItems = _a.setSelectedItems;
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
    var handleClearAll = function () {
        onClearAllItems && onClearAllItems(getChangeEvent(null));
        setSelectedItems([]);
    };
    return ((0, jsx_runtime_1.jsx)(StyledDropdown, tslib_1.__assign({ disabled: disabled }, { children: (0, jsx_runtime_1.jsxs)(flex_column_1.default, tslib_1.__assign({ itemsSpacing: 4 }, { children: [label && ((0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ lineHeight: 'xs', size: 1 }, getLabelProps(), { children: label }))), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)(MultiSelectContainer, tslib_1.__assign({ isOpen: isOpen, align: "center", justify: "space-between" }, getToggleButtonProps(getDropdownProps({ preventKeyAction: isOpen })), { children: [(0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ lineHeight: 'xs', size: 3, variation: selectedItem ? 'inherit' : 'darkGray' }, { children: (0, jsx_runtime_1.jsx)(OverflowWrapper, { children: (0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ gap: 8, wrap: 'wrap' }, { children: selectedItems.length === 0 ? ((0, jsx_runtime_1.jsx)(PlaceholderWrapper, { children: placeholder })) : (selectedItems.map(function (selectedItem, index) { return ((0, jsx_runtime_1.jsx)(ChipItemContainer, tslib_1.__assign({}, getSelectedItemProps({ selectedItem: selectedItem, index: index }), { children: (0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ align: 'center', gap: 4 }, { children: [(selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.chipLabel) || (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.label), (0, jsx_runtime_1.jsx)(MultiSelectDeleteIcon, { onClick: function (event) {
                                                                    event.preventDefault();
                                                                    event.stopPropagation();
                                                                    removeSelectedItem(selectedItem);
                                                                }, size: 14, src: ic_delete_svg_1.default })] })) }), "selected-item-".concat(index))); })) })) }) })) }), (0, jsx_runtime_1.jsxs)(DropdownIconWrapper, { children: [onClearAllItems && ((0, jsx_runtime_1.jsx)(ClearSvgIcon, { src: ic_delete_svg_1.default, onClick: handleClearAll, marginRight: true })), (0, jsx_runtime_1.jsx)(svg_icon_1.default, { size: 16, src: isOpen ? ic_arrow_up_svg_1.default : ic_arrow_down_svg_1.default })] })] })), (0, jsx_runtime_1.jsx)(ItemsContainer, tslib_1.__assign({}, getMenuProps(), { isOpen: isOpen }, { children: isOpen &&
                                items.map(function (item, index) {
                                    var isSelected = selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.some(function (i) { return i.value === item.value; });
                                    return ((0, jsx_runtime_1.jsxs)(ItemContainer, tslib_1.__assign({ align: "center", justify: "space-between", itemsSpacing: 10 }, getItemProps({ item: item, index: index }), { children: [(0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: isSelected ? 1 : 3, lineHeight: 'xs', scale: 'xs' }, { children: item.label })), isSelected && ((0, jsx_runtime_1.jsx)(CheckIcon, { size: 14, src: ic_checkmark_svg_1.default }))] }), "".concat(item.value).concat(index)));
                                }) }))] })] })) })));
}
exports.MultiSelectDropdown = MultiSelectDropdown;
exports.default = Dropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsNkRBSW1CO0FBQ25CLGdGQUF1QztBQUN2Qyw0RUFBc0M7QUFJdEMsNkVBQThDO0FBQzlDLDBFQUEyQztBQUMzQywwRUFBMkM7QUFDM0MsbUZBQW9EO0FBRXBELCtGQUF3RDtBQUN4RCxtR0FBNEQ7QUFDNUQsaUdBQWdFO0FBQ2hFLDJGQUEwRDtBQUUxRCxJQUFNLGNBQWMsR0FBRywyQkFBTSxDQUFDLEdBQUcsQ0FDL0IsVUFBQyxFQUFtQjtRQUFqQixLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUE7SUFBTyxPQUFBLG9CQUN2QixPQUFPLEVBQUUsTUFBTSxJQUVaLENBQUMsUUFBUSxJQUFJO1FBQ2QsT0FBTyxFQUFFLEtBQUs7UUFDZCxhQUFhLEVBQUUsTUFBTTtLQUN0QixDQUFDLEVBQ0Y7QUFQdUIsQ0FPdkIsQ0FDSCxDQUFDO0FBRUYsSUFBTSxTQUFTLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FBc0IsVUFBQyxFQUFpQjtRQUFmLEtBQUssV0FBQSxFQUFFLE1BQU0sWUFBQTtJQUFPLE9BQUEsQ0FBQztRQUM3RSxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJO1FBQ3JDLE1BQU0sRUFBRSxNQUFNO1FBQ2QsTUFBTSxFQUFFLEVBQUU7UUFDVixPQUFPLEVBQUUsUUFBUTtRQUNqQixVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWE7UUFDaEQsaUJBQWlCLEVBQUU7WUFDakIsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1lBQ2hELEdBQUcsRUFBRTtnQkFDSCxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWM7YUFDN0M7U0FDRjtLQUNGLENBQUM7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LElBQ0YsRUFDVixVQUFVLElBQUksQ0FDYix1QkFBQyxTQUFTLElBQ1IsSUFBSSxFQUFFLEVBQUUsRUFDUixHQUFHLEVBQUUsMEJBQWEsR0FDbEIsQ0FDSCxNQWZJLFVBQUcsSUFBSSxDQUFDLEtBQUssU0FBRyxLQUFLLENBQUUsQ0FnQmQsQ0FDakIsQ0FBQztnQ0FDSixDQUFDLENBQUMsSUFDVyxJQUNiLEtBQ0ssSUFDRSxDQUNsQixDQUFDO0FBQ0osQ0FBQztBQWhMRCxrREFnTEM7QUFFRCxrQkFBZSxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IERvd25zaGlmdCwge1xuICBDb250cm9sbGVyU3RhdGVBbmRIZWxwZXJzLFxuICB1c2VNdWx0aXBsZVNlbGVjdGlvbixcbiAgdXNlU2VsZWN0LFxufSBmcm9tICdkb3duc2hpZnQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgaXNFcXVhbCBmcm9tICdmYXN0LWRlZXAtZXF1YWwnO1xuXG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmltcG9ydCBCb2R5VGV4dCBmcm9tICcuLi9ib2R5LXRleHQvYm9keS10ZXh0JztcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcbmltcG9ydCBGbGV4Q29sdW1uIGZyb20gJy4uL2ZsZXgtY29sdW1uL2ZsZXgtY29sdW1uJztcblxuaW1wb3J0IFVwSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtYXJyb3ctdXAuc3ZnJztcbmltcG9ydCBEb3duSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtYXJyb3ctZG93bi5zdmcnO1xuaW1wb3J0IENoZWNrbWFya0ljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWNoZWNrbWFyay5zdmcnO1xuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWRlbGV0ZS5zdmcnO1xuXG5jb25zdCBTdHlsZWREcm9wZG93biA9IHN0eWxlZC5kaXY8eyBkaXNhYmxlZD86IGJvb2xlYW4gfT4oXG4gICh7IHRoZW1lLCBkaXNhYmxlZCB9KSA9PiAoe1xuICAgIG91dGxpbmU6ICdub25lJyxcblxuICAgIC4uLihkaXNhYmxlZCAmJiB7XG4gICAgICBvcGFjaXR5OiAnMC41JyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICB9KSxcbiAgfSlcbik7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KTx7IGlzT3BlbjogYm9vbGVhbiB9PigoeyB0aGVtZSwgaXNPcGVuIH0pID0+ICh7XG4gIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBoZWlnaHQ6IDM2LFxuICBwYWRkaW5nOiAnMCAxNnB4JyxcbiAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxuICAnOmhvdmVyLCA6YWN0aXZlJzoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcbiAgICBzdmc6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5UmVkLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmNvbnN0IEl0ZW1zQ29udGFpbmVyID0gc3R5bGVkLmRpdjx7IGlzT3BlbjogYm9vbGVhbiB9PigoeyB0aGVtZSwgaXNPcGVuIH0pID0+ICh7XG4gIGRpc3BsYXk6IGlzT3BlbiA/ICdpbmhlcml0JyA6ICdub25lJyxcbiAgbWFyZ2luVG9wOiA0LFxuICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG59KSk7XG5cbmNvbnN0IEl0ZW1Db250YWluZXIgPSBzdHlsZWQoRmxleFJvdykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIG1pbkhlaWdodDogMzYsXG4gIHBhZGRpbmc6ICc4cHggMTZweCcsXG4gICc6aG92ZXIsIDphY3RpdmUnOiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5Qmx1ZUhvdmVyLFxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgfSxcbn0pKTtcblxuY29uc3QgRGVsZXRlU3ZnSWNvbiA9IHN0eWxlZChTdmdJY29uKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBwYXRoOiB7XG4gICAgc3Ryb2tlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG4gIH0sXG4gICc6aG92ZXIsIDphY3RpdmUnOiB7XG4gICAgcGF0aDoge1xuICAgICAgc3Ryb2tlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5UmVkLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmNvbnN0IENsZWFyU3ZnSWNvbiA9IHN0eWxlZChTdmdJY29uKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBwYXRoOiB7XG4gICAgc3Ryb2tlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5XG4gIH1cbn0pKTtcblxuY29uc3QgTXVsdGlTZWxlY3RDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8eyBpc09wZW46IGJvb2xlYW4gfT4oXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gICAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICAgIHN2Zzoge1xuICAgICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmNvbnN0IFBsYWNlaG9sZGVyV3JhcHBlciA9IHN0eWxlZC5zcGFuKCh7IHRoZW1lIH0pID0+ICh7XG4gIHBhZGRpbmc6ICcwIDhweCcsXG59KSk7XG5cbmNvbnN0IENoaXBJdGVtQ29udGFpbmVyID0gc3R5bGVkLnNwYW4oKHsgdGhlbWUgfSkgPT4gKHtcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIHBhZGRpbmc6ICcycHggOHB4JyxcbiAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsVGVydHJpYXJ5LFxuICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcbn0pKTtcblxuY29uc3QgT3ZlcmZsb3dXcmFwcGVyID0gc3R5bGVkLnNwYW4oKHsgdGhlbWUgfSkgPT4gKHtcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxufSkpO1xuXG5jb25zdCBEcm9wZG93bkljb25XcmFwcGVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBwYWRkaW5nUmlnaHQ6ICc4cHgnLFxuICBtYXJnaW5MZWZ0OiAnOHB4Jyxcbn0pKTtcblxuY29uc3QgQ2hlY2tJY29uID0gc3R5bGVkKFN2Z0ljb24pKCh7IHRoZW1lIH0pID0+ICh7XG4gIHBhdGg6IHtcbiAgICBmaWxsOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICB9LFxufSkpO1xuXG5jb25zdCBNdWx0aVNlbGVjdERlbGV0ZUljb24gPSBzdHlsZWQoU3ZnSWNvbikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgcGF0aDoge1xuICAgIHN0cm9rZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgfSxcbiAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICBwYXRoOiB7XG4gICAgICBzdHJva2U6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFJlZCxcbiAgICB9LFxuICB9LFxufSkpO1xuXG5leHBvcnQgdHlwZSBEcm9wZG93blZhbHVlID0geyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH07XG5leHBvcnQgdHlwZSBEcm9wZG93bkl0ZW08VCA9IERyb3Bkb3duVmFsdWU+ID0gVDtcblxuZXhwb3J0IHR5cGUgRHJvcGRvd25FdmVudFZhbHVlID0ge1xuICB0YXJnZXQ6IHtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHZhbHVlOiBEcm9wZG93blZhbHVlIHwgbnVsbDtcbiAgfTtcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBEcm9wZG93blByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgaXRlbXM6IERyb3Bkb3duVmFsdWVbXTtcbiAgdmFsdWU/OiBEcm9wZG93blZhbHVlIHwgbnVsbDtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBhcmVJdGVtc1JlbW92YWJsZT86IGJvb2xlYW47XG4gIGlzU2VhcmNoYWJsZT86IGJvb2xlYW47XG4gIG9uQ2hhbmdlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uU2VsZWN0PzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uUmVtb3ZlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG5cbiAgbm9JdGVtc01lc3NhZ2U/OiBzdHJpbmc7XG59XG5cbmNvbnN0IGdldENoYW5nZUV2ZW50ID0gKHZhbHVlOiBhbnkpOiBEcm9wZG93bkV2ZW50VmFsdWUgPT4ge1xuICByZXR1cm4ge1xuICAgIHRhcmdldDoge1xuICAgICAgbmFtZTogdW5kZWZpbmVkLFxuICAgICAgdmFsdWUsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBEcm9wZG93bihwcm9wczogRHJvcGRvd25Qcm9wcykge1xuICBjb25zdCB7XG4gICAgaXRlbXMsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgbGFiZWwsXG4gICAgYXJlSXRlbXNSZW1vdmFibGUsXG4gICAgdmFsdWUsXG4gICAgc3R5bGUsXG4gICAgb25TZWxlY3QsXG4gICAgb25SZW1vdmUsXG4gICAgbm9JdGVtc01lc3NhZ2UgPSAnTm8gT3B0aW9ucyEnLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZ2V0Q2hhbmdlRXZlbnQgPSAodmFsdWU6IERyb3Bkb3duVmFsdWUgfCBudWxsKTogRHJvcGRvd25FdmVudFZhbHVlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdGFyZ2V0OiB7XG4gICAgICAgIG5hbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgdmFsdWUsXG4gICAgICB9LFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlSXRlbSA9IChcbiAgICBpdGVtOiBEcm9wZG93bkl0ZW0sXG4gICAgZXYsXG4gICAgZG93bnNoaWZ0OiBDb250cm9sbGVyU3RhdGVBbmRIZWxwZXJzPERyb3Bkb3duSXRlbT5cbiAgKSA9PiB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGNvbnN0IHZhbHVlID0gaXRlbSAmJiBpdGVtVmFsdWVHZXR0ZXIoaXRlbSk7XG4gICAgb25SZW1vdmUgJiYgb25SZW1vdmUoZ2V0Q2hhbmdlRXZlbnQodmFsdWUpKTtcbiAgfTtcblxuICBjb25zdCBpdGVtVmFsdWVHZXR0ZXIgPSAoaXRlbSkgPT4gaXRlbS52YWx1ZTtcbiAgY29uc3QgaXRlbU5hbWVHZXR0ZXIgPSAoaXRlbSkgPT4gaXRlbS5sYWJlbDtcblxuICBjb25zdCBoYW5kbGVJdGVtU2VsZWN0ID0gKGl0ZW0pID0+IHtcbiAgICBvblNlbGVjdCAmJiBvblNlbGVjdChpdGVtKTtcbiAgfTtcblxuICBjb25zdCBnZXRJdGVtVG9TdHJpbmcgPSAoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtID09PSBudWxsKSByZXR1cm4gJyc7XG4gICAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyA/IGl0ZW0gOiBpdGVtLmxhYmVsO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERvd25zaGlmdFxuICAgICAgaXRlbVRvU3RyaW5nPXtnZXRJdGVtVG9TdHJpbmd9XG4gICAgICBvblNlbGVjdD17aGFuZGxlSXRlbVNlbGVjdH1cbiAgICAgIHNlbGVjdGVkSXRlbT17dmFsdWV9XG4gICAgICBzZWxlY3RlZEl0ZW1DaGFuZ2VkPXsocHJldkl0ZW0sIGl0ZW0pID0+ICFpc0VxdWFsKHByZXZJdGVtLCBpdGVtKX1cbiAgICA+XG4gICAgICB7KGRvd25zaGlmdCkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgZ2V0SXRlbVByb3BzLFxuICAgICAgICAgIGdldE1lbnVQcm9wcyxcbiAgICAgICAgICBpc09wZW4sXG4gICAgICAgICAgc2VsZWN0ZWRJdGVtLFxuICAgICAgICAgIGdldFJvb3RQcm9wcyxcbiAgICAgICAgICBnZXRUb2dnbGVCdXR0b25Qcm9wcyxcbiAgICAgICAgfSA9IGRvd25zaGlmdDtcblxuICAgICAgICBjb25zdCBub0l0ZW1zID0gIShpdGVtcyAmJiBpdGVtcy5sZW5ndGgpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFN0eWxlZERyb3Bkb3duXG4gICAgICAgICAgICB7Li4uZ2V0Um9vdFByb3BzKHsgcmVmS2V5OiAnaW5uZXJSZWYnIH0pfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgICAgICA8Qm9keVRleHQgbGluZUhlaWdodD17J3hzJ30gc2l6ZT17MX0+XG4gICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICB7Li4uZ2V0VG9nZ2xlQnV0dG9uUHJvcHMoKX1cbiAgICAgICAgICAgICAgaXRlbXNTcGFjaW5nPXsxMH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJvZHlUZXh0XG4gICAgICAgICAgICAgICAgc2l6ZT17M31cbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PXsneHMnfVxuICAgICAgICAgICAgICAgIHZhcmlhdGlvbj17c2VsZWN0ZWRJdGVtID8gJ2luaGVyaXQnIDogJ2RhcmtHcmF5J31cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpdGVtTmFtZUdldHRlcihzZWxlY3RlZEl0ZW0pIHx8IHBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgICA8U3ZnSWNvbiBzcmM9e2lzT3BlbiA/IFVwSWNvbiA6IERvd25JY29ufSAvPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8SXRlbXNDb250YWluZXIgey4uLmdldE1lbnVQcm9wcygpfSBpc09wZW49e2lzT3Blbn0+XG4gICAgICAgICAgICAgIHtpc09wZW4gJiZcbiAgICAgICAgICAgICAgICAobm9JdGVtcyA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzhweCAxNnB4JywgcG9pbnRlckV2ZW50czogJ25vbmUnIH19PlxuICAgICAgICAgICAgICAgICAgICA8Qm9keVRleHRcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPXszfVxuICAgICAgICAgICAgICAgICAgICAgIHNjYWxlPXsneHMnfVxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9eyd4cyd9XG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uPVwiZGFya0dyYXlcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge25vSXRlbXNNZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBpc0VxdWFsKGl0ZW0sIHNlbGVjdGVkSXRlbSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8SXRlbUNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtpdGVtfS0ke2lkeH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNTcGFjaW5nPXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0SXRlbVByb3BzKHsgaXRlbSwgaW5kZXg6IGlkeCB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9keVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17aXNTZWxlY3RlZCA/IDEgOiAzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlPXsneHMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PXsneHMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbU5hbWVHZXR0ZXIoaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAge2FyZUl0ZW1zUmVtb3ZhYmxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZVN2Z0ljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e0RlbGV0ZUljb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUmVtb3ZlSXRlbShpdGVtLCBldiwgZG93bnNoaWZ0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9JdGVtQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvSXRlbXNDb250YWluZXI+XG4gICAgICAgICAgPC9TdHlsZWREcm9wZG93bj5cbiAgICAgICAgKTtcbiAgICAgIH19XG4gICAgPC9Eb3duc2hpZnQ+XG4gICk7XG59XG5cbmV4cG9ydCB0eXBlIE11bHRpRHJvcGRvd25WYWx1ZSA9IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgY2hpcExhYmVsPzogc3RyaW5nO1xuICB2YWx1ZTogYW55O1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aVNlbGVjdERyb3Bkb3duUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xuICB2YWx1ZT86IE11bHRpRHJvcGRvd25WYWx1ZVtdO1xuICBpdGVtczogTXVsdGlEcm9wZG93blZhbHVlW107XG4gIGxhYmVsPzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG9uQ2hhbmdlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uU2VsZWN0PzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uUmVtb3ZlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uQ2xlYXJBbGxJdGVtcz86IChldjogRHJvcGRvd25FdmVudFZhbHVlKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTXVsdGlTZWxlY3REcm9wZG93bihwcm9wczogTXVsdGlTZWxlY3REcm9wZG93blByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBpdGVtcyxcbiAgICB2YWx1ZSxcbiAgICBsYWJlbCxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBkaXNhYmxlZCxcbiAgICBvblNlbGVjdCxcbiAgICBvbkNoYW5nZSxcbiAgICBvblJlbW92ZSxcbiAgICBvbkNsZWFyQWxsSXRlbXNcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHtcbiAgICBnZXRTZWxlY3RlZEl0ZW1Qcm9wcyxcbiAgICBnZXREcm9wZG93blByb3BzLFxuICAgIGFkZFNlbGVjdGVkSXRlbSxcbiAgICByZW1vdmVTZWxlY3RlZEl0ZW0sXG4gICAgc2VsZWN0ZWRJdGVtcyxcbiAgICBzZXRTZWxlY3RlZEl0ZW1zLFxuICB9ID0gdXNlTXVsdGlwbGVTZWxlY3Rpb248TXVsdGlEcm9wZG93blZhbHVlPih7XG4gICAgaW5pdGlhbFNlbGVjdGVkSXRlbXM6IHZhbHVlLFxuICAgIG9uU2VsZWN0ZWRJdGVtc0NoYW5nZTogKGNoYW5nZXMpID0+IHtcbiAgICAgIG9uU2VsZWN0ICYmIG9uU2VsZWN0KGdldENoYW5nZUV2ZW50KGNoYW5nZXMuc2VsZWN0ZWRJdGVtcykpO1xuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IHtcbiAgICBpc09wZW4sXG4gICAgc2VsZWN0ZWRJdGVtLFxuICAgIGdldFRvZ2dsZUJ1dHRvblByb3BzLFxuICAgIGdldExhYmVsUHJvcHMsXG4gICAgZ2V0TWVudVByb3BzLFxuICAgIGdldEl0ZW1Qcm9wcyxcbiAgfSA9IHVzZVNlbGVjdCh7XG4gICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxuICAgIGRlZmF1bHRIaWdobGlnaHRlZEluZGV4OiAwLCAvLyBhZnRlciBzZWxlY3Rpb24sIGhpZ2hsaWdodCB0aGUgZmlyc3QgaXRlbS5cbiAgICBpdGVtcyxcbiAgICBzdGF0ZVJlZHVjZXI6IChzdGF0ZSwgYWN0aW9uQW5kQ2hhbmdlcykgPT4ge1xuICAgICAgY29uc3QgeyBjaGFuZ2VzLCB0eXBlIH0gPSBhY3Rpb25BbmRDaGFuZ2VzO1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgdXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMuVG9nZ2xlQnV0dG9uS2V5RG93bkVudGVyOlxuICAgICAgICBjYXNlIHVzZVNlbGVjdC5zdGF0ZUNoYW5nZVR5cGVzLlRvZ2dsZUJ1dHRvbktleURvd25TcGFjZUJ1dHRvbjpcbiAgICAgICAgY2FzZSB1c2VTZWxlY3Quc3RhdGVDaGFuZ2VUeXBlcy5JdGVtQ2xpY2s6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmNoYW5nZXMsXG4gICAgICAgICAgICBpc09wZW46IHRydWUsIC8vIGtlZXAgdGhlIG1lbnUgb3BlbiBhZnRlciBzZWxlY3Rpb24uXG4gICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gY2hhbmdlcztcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uU3RhdGVDaGFuZ2U6ICh7IHR5cGUsIHNlbGVjdGVkSXRlbTogbmV3U2VsZWN0ZWRJdGVtIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIHVzZVNlbGVjdC5zdGF0ZUNoYW5nZVR5cGVzLlRvZ2dsZUJ1dHRvbktleURvd25FbnRlcjpcbiAgICAgICAgY2FzZSB1c2VTZWxlY3Quc3RhdGVDaGFuZ2VUeXBlcy5Ub2dnbGVCdXR0b25LZXlEb3duU3BhY2VCdXR0b246XG4gICAgICAgIGNhc2UgdXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMuSXRlbUNsaWNrOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGlzQWxyZWFkeVNlbGVjdGVkID0gc2VsZWN0ZWRJdGVtcy5zb21lKFxuICAgICAgICAgICAgICAoaSkgPT4gaS52YWx1ZSA9PT0gbmV3U2VsZWN0ZWRJdGVtPy52YWx1ZVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKG5ld1NlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgICBpZiAoaXNBbHJlYWR5U2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVTZWxlY3RlZEl0ZW0obmV3U2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgICAgICBvblJlbW92ZSAmJiBvblJlbW92ZShnZXRDaGFuZ2VFdmVudChuZXdTZWxlY3RlZEl0ZW0pKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRTZWxlY3RlZEl0ZW0obmV3U2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSAmJiBvbkNoYW5nZShnZXRDaGFuZ2VFdmVudChuZXdTZWxlY3RlZEl0ZW0pKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVDbGVhckFsbCA9ICgpID0+IHtcbiAgICBvbkNsZWFyQWxsSXRlbXMgJiYgb25DbGVhckFsbEl0ZW1zKGdldENoYW5nZUV2ZW50KG51bGwpKTtcbiAgICBzZXRTZWxlY3RlZEl0ZW1zKFtdKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWREcm9wZG93biBkaXNhYmxlZD17ZGlzYWJsZWR9PlxuICAgICAgPEZsZXhDb2x1bW4gaXRlbXNTcGFjaW5nPXs0fT5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8Qm9keVRleHQgbGluZUhlaWdodD17J3hzJ30gc2l6ZT17MX0gey4uLmdldExhYmVsUHJvcHMoKX0+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9Cb2R5VGV4dD5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TXVsdGlTZWxlY3RDb250YWluZXJcbiAgICAgICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgey4uLmdldFRvZ2dsZUJ1dHRvblByb3BzKFxuICAgICAgICAgICAgICBnZXREcm9wZG93blByb3BzKHsgcHJldmVudEtleUFjdGlvbjogaXNPcGVuIH0pXG4gICAgICAgICAgICApfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8Qm9keVRleHRcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PXsneHMnfVxuICAgICAgICAgICAgICAgIHNpemU9ezN9XG4gICAgICAgICAgICAgICAgdmFyaWF0aW9uPXtzZWxlY3RlZEl0ZW0gPyAnaW5oZXJpdCcgOiAnZGFya0dyYXknfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE92ZXJmbG93V3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgIDxGbGV4Um93IGdhcD17OH0gd3JhcD17J3dyYXAnfT5cbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkSXRlbXMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlcldyYXBwZXI+e3BsYWNlaG9sZGVyfTwvUGxhY2Vob2xkZXJXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXMubWFwKChzZWxlY3RlZEl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hpcEl0ZW1Db250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgc2VsZWN0ZWQtaXRlbS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRTZWxlY3RlZEl0ZW1Qcm9wcyh7IHNlbGVjdGVkSXRlbSwgaW5kZXggfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Um93IGFsaWduPXsnY2VudGVyJ30gZ2FwPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRJdGVtPy5jaGlwTGFiZWwgfHwgc2VsZWN0ZWRJdGVtPy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlTZWxlY3REZWxldGVJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVNlbGVjdGVkSXRlbShzZWxlY3RlZEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezE0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtEZWxldGVJY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2hpcEl0ZW1Db250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvRmxleFJvdz5cbiAgICAgICAgICAgICAgICA8L092ZXJmbG93V3JhcHBlcj5cbiAgICAgICAgICAgICAgPC9Cb2R5VGV4dD5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxEcm9wZG93bkljb25XcmFwcGVyPlxuICAgICAgICAgICAgICB7b25DbGVhckFsbEl0ZW1zICYmICg8Q2xlYXJTdmdJY29uIHNyYz17RGVsZXRlSWNvbn0gb25DbGljaz17aGFuZGxlQ2xlYXJBbGx9IG1hcmdpblJpZ2h0Lz4pfVxuICAgICAgICAgICAgICA8U3ZnSWNvbiBzaXplPXsxNn0gc3JjPXtpc09wZW4gPyBVcEljb24gOiBEb3duSWNvbn0gLz5cbiAgICAgICAgICAgIDwvRHJvcGRvd25JY29uV3JhcHBlcj5cbiAgICAgICAgICA8L011bHRpU2VsZWN0Q29udGFpbmVyPlxuICAgICAgICAgIDxJdGVtc0NvbnRhaW5lciB7Li4uZ2V0TWVudVByb3BzKCl9IGlzT3Blbj17aXNPcGVufT5cbiAgICAgICAgICAgIHtpc09wZW4gJiZcbiAgICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZEl0ZW1zPy5zb21lKFxuICAgICAgICAgICAgICAgICAgKGkpID0+IGkudmFsdWUgPT09IGl0ZW0udmFsdWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8SXRlbUNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNTcGFjaW5nPXsxMH1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtpdGVtLnZhbHVlfSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgey4uLmdldEl0ZW1Qcm9wcyh7IGl0ZW0sIGluZGV4IH0pfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Qm9keVRleHRcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPXtpc1NlbGVjdGVkID8gMSA6IDN9XG4gICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodD17J3hzJ31cbiAgICAgICAgICAgICAgICAgICAgICBzY2FsZT17J3hzJ31cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgICAgICAgICB7aXNTZWxlY3RlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MTR9XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e0NoZWNrbWFya0ljb259XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvSXRlbUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L0l0ZW1zQ29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRmxleENvbHVtbj5cbiAgICA8L1N0eWxlZERyb3Bkb3duPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcbiJdfQ==