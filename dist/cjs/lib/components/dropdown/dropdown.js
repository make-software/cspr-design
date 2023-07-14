"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiSelectDropdown = exports.Dropdown = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var downshift_1 = tslib_1.__importStar(require("downshift"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var fast_deep_equal_1 = tslib_1.__importDefault(require("fast-deep-equal"));
var subtitle_text_1 = tslib_1.__importDefault(require("../subtitle-text/subtitle-text"));
var body_text_1 = tslib_1.__importDefault(require("../body-text/body-text"));
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var svg_icon_1 = tslib_1.__importDefault(require("../svg-icon/svg-icon"));
var StyledDropdown = styled_components_1.default.div(function (_a) {
    var theme = _a.theme;
    return ({
        outline: 'none',
    });
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
        height: 36,
        padding: '0 8px',
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
        padding: '8px',
    });
});
var ChipItemContainer = styled_components_1.default.span(function (_a) {
    var theme = _a.theme;
    return ({
        borderRadius: theme.borderRadius.base,
        cursor: 'pointer',
        padding: '2px 8px',
        background: theme.styleguideColors.fillTertriary,
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
        padding: '12px 12px',
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
            return ((0, jsx_runtime_1.jsxs)(StyledDropdown, tslib_1.__assign({}, getRootProps({ refKey: 'innerRef' }), { style: style, tabIndex: "0" }, { children: [label && (0, jsx_runtime_1.jsx)(subtitle_text_1.default, tslib_1.__assign({ size: 1 }, { children: label })), (0, jsx_runtime_1.jsxs)(Container, tslib_1.__assign({ isOpen: isOpen, align: "center", justify: "space-between" }, getToggleButtonProps(), { itemsSpacing: 10 }, { children: [(0, jsx_runtime_1.jsx)(subtitle_text_1.default, tslib_1.__assign({ size: 2, variation: selectedItem ? 'inherit' : 'darkGray', style: {
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                } }, { children: itemNameGetter(selectedItem) || placeholder })), (0, jsx_runtime_1.jsx)(svg_icon_1.default, { src: isOpen
                                    ? 'assets/icons/ic-arrow-up.svg'
                                    : 'assets/icons/ic-arrow-down.svg' })] })), (0, jsx_runtime_1.jsx)(ItemsContainer, tslib_1.__assign({}, getMenuProps(), { isOpen: isOpen }, { children: isOpen &&
                            (noItems ? ((0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ style: { padding: '8px 16px', pointerEvents: 'none' } }, { children: (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 3, variation: "darkGray" }, { children: noItemsMessage })) }))) : (items.map(function (item, idx) {
                                var isSelected = (0, fast_deep_equal_1.default)(item, selectedItem);
                                return ((0, jsx_runtime_1.jsxs)(ItemContainer, tslib_1.__assign({ align: "center", justify: "space-between", itemsSpacing: 10, isSelected: isSelected }, getItemProps({ item: item, index: idx }), { children: [(0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: isSelected ? 1 : 3, style: {
                                                overflow: 'hidden',
                                                whiteSpace: 'nowrap',
                                                textOverflow: 'ellipsis',
                                            } }, { children: itemNameGetter(item) })), areItemsRemovable && ((0, jsx_runtime_1.jsx)(DeleteIcon, { src: "assets/icons/ic-delete.svg", onClick: function (ev) {
                                                return handleRemoveItem(item, ev, downshift);
                                            } }))] }), "".concat(item, "-").concat(idx)));
                            }))) }))] })));
        } })));
}
exports.Dropdown = Dropdown;
function MultiSelectDropdown(props) {
    var items = props.items, label = props.label, placeholder = props.placeholder, onSelect = props.onSelect, onChange = props.onChange, onRemove = props.onRemove;
    var _a = (0, downshift_1.useMultipleSelection)({
        initialSelectedItems: undefined,
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
    return ((0, jsx_runtime_1.jsxs)(StyledDropdown, { children: [label && ((0, jsx_runtime_1.jsx)(subtitle_text_1.default, tslib_1.__assign({ size: 1 }, getLabelProps(), { children: label }))), (0, jsx_runtime_1.jsxs)(MultiSelectContainer, tslib_1.__assign({ isOpen: isOpen, align: "center", justify: "space-between" }, getToggleButtonProps(getDropdownProps({ preventKeyAction: isOpen })), { children: [(0, jsx_runtime_1.jsx)(OverflowWrapper, { children: (0, jsx_runtime_1.jsx)(subtitle_text_1.default, tslib_1.__assign({ size: 2, variation: selectedItem ? 'inherit' : 'darkGray' }, { children: (0, jsx_runtime_1.jsx)(OverflowWrapper, { children: (0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ gap: 4 }, { children: selectedItems.length === 0 ? ((0, jsx_runtime_1.jsx)(PlaceholderWrapper, { children: placeholder })) : (selectedItems.map(function (selectedItem, index) { return ((0, jsx_runtime_1.jsx)(ChipItemContainer, tslib_1.__assign({}, getSelectedItemProps({ selectedItem: selectedItem, index: index }), { children: (0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ align: 'center', gap: 4 }, { children: [selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.chipLabel, (0, jsx_runtime_1.jsx)(MultiSelectDeleteIcon, { onClick: function (event) {
                                                        event.preventDefault();
                                                        event.stopPropagation();
                                                        removeSelectedItem(selectedItem);
                                                    }, size: 14, src: 'assets/icons/ic-delete.svg' })] })) }), "selected-item-".concat(index))); })) })) }) })) }), (0, jsx_runtime_1.jsx)(DropdownIconWrapper, { children: (0, jsx_runtime_1.jsx)(svg_icon_1.default, { size: 16, src: isOpen
                                ? 'assets/icons/ic-arrow-up.svg'
                                : 'assets/icons/ic-arrow-down.svg' }) })] })), (0, jsx_runtime_1.jsx)(ItemsContainer, tslib_1.__assign({}, getMenuProps(), { isOpen: isOpen }, { children: isOpen &&
                    items.map(function (item, index) {
                        var isSelected = selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.some(function (i) { return i.value === item.value; });
                        return ((0, jsx_runtime_1.jsxs)(ItemContainer, tslib_1.__assign({ align: "center", justify: "space-between", itemsSpacing: 10 }, getItemProps({ item: item, index: index }), { children: [(0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: isSelected ? 1 : 3 }, { children: item.label })), isSelected && ((0, jsx_runtime_1.jsx)(CheckIcon, { size: 14, src: 'assets/icons/ic-checkmark.svg' }))] }), "".concat(item.value).concat(index)));
                    }) }))] }));
}
exports.MultiSelectDropdown = MultiSelectDropdown;
exports.default = Dropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsNkRBSW1CO0FBQ25CLGdGQUF1QztBQUN2Qyw0RUFBc0M7QUFJdEMseUZBQTBEO0FBQzFELDZFQUE4QztBQUM5QywwRUFBMkM7QUFDM0MsMEVBQTJDO0FBRTNDLElBQU0sY0FBYyxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUNoRCxPQUFPLEVBQUUsTUFBTTtLQUNoQixDQUFDO0FBRitDLENBRS9DLENBQUMsQ0FBQztBQUVKLElBQU0sU0FBUyxHQUFHLElBQUEsMkJBQU0sRUFBQyxrQkFBTyxDQUFDLENBQXNCLFVBQUMsRUFBaUI7UUFBZixLQUFLLFdBQUEsRUFBRSxNQUFNLFlBQUE7SUFBTyxPQUFBLENBQUM7UUFDN0UsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSTtRQUNyQyxNQUFNLEVBQUUsTUFBTTtRQUNkLE1BQU0sRUFBRSxFQUFFO1FBQ1YsT0FBTyxFQUFFLFFBQVE7UUFDakIsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1FBQ2hELGlCQUFpQixFQUFFO1lBQ2pCLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtZQUNoRCxHQUFHLEVBQUU7Z0JBQ0gsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjO2FBQzdDO1NBQ0Y7S0FDRixDQUFDO0FBWjRFLENBWTVFLENBQUMsQ0FBQztBQUVKLElBQU0sY0FBYyxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFzQixVQUFDLEVBQWlCO1FBQWYsS0FBSyxXQUFBLEVBQUUsTUFBTSxZQUFBO0lBQU8sT0FBQSxDQUFDO1FBQzdFLE9BQU8s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SSxVQUFHLElBQUksQ0FBQyxLQUFLLFNBQUcsS0FBSyxDQUFFLENBT2QsQ0FDakIsQ0FBQztvQkFDSixDQUFDLENBQUMsSUFDVyxJQUNGLENBQ2xCLENBQUM7QUFDSixDQUFDO0FBeEpELGtEQXdKQztBQUVELGtCQUFlLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRG93bnNoaWZ0LCB7XG4gIENvbnRyb2xsZXJTdGF0ZUFuZEhlbHBlcnMsXG4gIHVzZU11bHRpcGxlU2VsZWN0aW9uLFxuICB1c2VTZWxlY3QsXG59IGZyb20gJ2Rvd25zaGlmdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2Zhc3QtZGVlcC1lcXVhbCc7XG5cbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IFN1YnRpdGxlVGV4dCBmcm9tICcuLi9zdWJ0aXRsZS10ZXh0L3N1YnRpdGxlLXRleHQnO1xuaW1wb3J0IEJvZHlUZXh0IGZyb20gJy4uL2JvZHktdGV4dC9ib2R5LXRleHQnO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi4vc3ZnLWljb24vc3ZnLWljb24nO1xuXG5jb25zdCBTdHlsZWREcm9wZG93biA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcbiAgb3V0bGluZTogJ25vbmUnLFxufSkpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8eyBpc09wZW46IGJvb2xlYW4gfT4oKHsgdGhlbWUsIGlzT3BlbiB9KSA9PiAoe1xuICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICBib3JkZXI6ICdub25lJyxcbiAgaGVpZ2h0OiAzNixcbiAgcGFkZGluZzogJzAgMTZweCcsXG4gIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcbiAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gICAgc3ZnOiB7XG4gICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcbiAgICB9LFxuICB9LFxufSkpO1xuXG5jb25zdCBJdGVtc0NvbnRhaW5lciA9IHN0eWxlZC5kaXY8eyBpc09wZW46IGJvb2xlYW4gfT4oKHsgdGhlbWUsIGlzT3BlbiB9KSA9PiAoe1xuICBkaXNwbGF5OiBpc09wZW4gPyAnaW5oZXJpdCcgOiAnbm9uZScsXG4gIG1hcmdpblRvcDogNCxcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxufSkpO1xuXG5jb25zdCBJdGVtQ29udGFpbmVyID0gc3R5bGVkKEZsZXhSb3cpKCh7IHRoZW1lIH0pID0+ICh7XG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBtaW5IZWlnaHQ6IDM2LFxuICBwYWRkaW5nOiAnOHB4IDE2cHgnLFxuICAnOmhvdmVyLCA6YWN0aXZlJzoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeUJsdWVIb3ZlcixcbiAgICBmb250V2VpZ2h0OiA2MDAsXG4gIH0sXG59KSk7XG5cbmNvbnN0IERlbGV0ZUljb24gPSBzdHlsZWQoU3ZnSWNvbikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgcGF0aDoge1xuICAgIHN0cm9rZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxuICB9LFxuICAnOmhvdmVyLCA6YWN0aXZlJzoge1xuICAgIHBhdGg6IHtcbiAgICAgIHN0cm9rZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcbiAgICB9LFxuICB9LFxufSkpO1xuXG5jb25zdCBNdWx0aVNlbGVjdENvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KTx7IGlzT3BlbjogYm9vbGVhbiB9PihcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICAgIGhlaWdodDogMzYsXG4gICAgcGFkZGluZzogJzAgOHB4JyxcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gICAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICAgIHN2Zzoge1xuICAgICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmNvbnN0IFBsYWNlaG9sZGVyV3JhcHBlciA9IHN0eWxlZC5zcGFuKCh7IHRoZW1lIH0pID0+ICh7XG4gIHBhZGRpbmc6ICc4cHgnLFxufSkpO1xuXG5jb25zdCBDaGlwSXRlbUNvbnRhaW5lciA9IHN0eWxlZC5zcGFuKCh7IHRoZW1lIH0pID0+ICh7XG4gIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBwYWRkaW5nOiAnMnB4IDhweCcsXG4gIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFRlcnRyaWFyeSxcbn0pKTtcblxuY29uc3QgT3ZlcmZsb3dXcmFwcGVyID0gc3R5bGVkLnNwYW4oKHsgdGhlbWUgfSkgPT4gKHtcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxufSkpO1xuXG5jb25zdCBEcm9wZG93bkljb25XcmFwcGVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBwYWRkaW5nOiAnMTJweCAxMnB4Jyxcbn0pKTtcblxuY29uc3QgQ2hlY2tJY29uID0gc3R5bGVkKFN2Z0ljb24pKCh7IHRoZW1lIH0pID0+ICh7XG4gIHBhdGg6IHtcbiAgICBmaWxsOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICB9LFxufSkpO1xuXG5jb25zdCBNdWx0aVNlbGVjdERlbGV0ZUljb24gPSBzdHlsZWQoU3ZnSWNvbikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgcGF0aDoge1xuICAgIHN0cm9rZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgfSxcbiAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICBwYXRoOiB7XG4gICAgICBzdHJva2U6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFJlZCxcbiAgICB9LFxuICB9LFxufSkpO1xuXG5leHBvcnQgdHlwZSBEcm9wZG93blZhbHVlID0geyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH07XG5leHBvcnQgdHlwZSBEcm9wZG93bkl0ZW08VCA9IERyb3Bkb3duVmFsdWU+ID0gVDtcblxuZXhwb3J0IHR5cGUgRHJvcGRvd25FdmVudFZhbHVlID0ge1xuICB0YXJnZXQ6IHtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHZhbHVlOiBEcm9wZG93blZhbHVlIHwgbnVsbDtcbiAgfTtcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBEcm9wZG93blByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgaXRlbXM6IERyb3Bkb3duVmFsdWVbXTtcbiAgdmFsdWU/OiBEcm9wZG93blZhbHVlIHwgbnVsbDtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBhcmVJdGVtc1JlbW92YWJsZT86IGJvb2xlYW47XG4gIGlzU2VhcmNoYWJsZT86IGJvb2xlYW47XG4gIG9uQ2hhbmdlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uU2VsZWN0PzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uUmVtb3ZlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG5cbiAgbm9JdGVtc01lc3NhZ2U/OiBzdHJpbmc7XG59XG5cbmNvbnN0IGdldENoYW5nZUV2ZW50ID0gKHZhbHVlOiBhbnkpOiBEcm9wZG93bkV2ZW50VmFsdWUgPT4ge1xuICByZXR1cm4ge1xuICAgIHRhcmdldDoge1xuICAgICAgbmFtZTogdW5kZWZpbmVkLFxuICAgICAgdmFsdWUsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBEcm9wZG93bihwcm9wczogRHJvcGRvd25Qcm9wcykge1xuICBjb25zdCB7XG4gICAgaXRlbXMsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgbGFiZWwsXG4gICAgYXJlSXRlbXNSZW1vdmFibGUsXG4gICAgdmFsdWUsXG4gICAgc3R5bGUsXG4gICAgb25TZWxlY3QsXG4gICAgb25SZW1vdmUsXG4gICAgbm9JdGVtc01lc3NhZ2UgPSAnTm8gT3B0aW9ucyEnLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZ2V0Q2hhbmdlRXZlbnQgPSAodmFsdWU6IERyb3Bkb3duVmFsdWUgfCBudWxsKTogRHJvcGRvd25FdmVudFZhbHVlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdGFyZ2V0OiB7XG4gICAgICAgIG5hbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgdmFsdWUsXG4gICAgICB9LFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlSXRlbSA9IChcbiAgICBpdGVtOiBEcm9wZG93bkl0ZW0sXG4gICAgZXYsXG4gICAgZG93bnNoaWZ0OiBDb250cm9sbGVyU3RhdGVBbmRIZWxwZXJzPERyb3Bkb3duSXRlbT5cbiAgKSA9PiB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGNvbnN0IHZhbHVlID0gaXRlbSAmJiBpdGVtVmFsdWVHZXR0ZXIoaXRlbSk7XG4gICAgb25SZW1vdmUgJiYgb25SZW1vdmUoZ2V0Q2hhbmdlRXZlbnQodmFsdWUpKTtcbiAgfTtcblxuICBjb25zdCBpdGVtVmFsdWVHZXR0ZXIgPSAoaXRlbSkgPT4gaXRlbS52YWx1ZTtcbiAgY29uc3QgaXRlbU5hbWVHZXR0ZXIgPSAoaXRlbSkgPT4gaXRlbS5sYWJlbDtcblxuICBjb25zdCBoYW5kbGVJdGVtU2VsZWN0ID0gKGl0ZW0pID0+IHtcbiAgICBvblNlbGVjdCAmJiBvblNlbGVjdChpdGVtKTtcbiAgfTtcblxuICBjb25zdCBnZXRJdGVtVG9TdHJpbmcgPSAoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtID09PSBudWxsKSByZXR1cm4gJyc7XG4gICAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyA/IGl0ZW0gOiBpdGVtLmxhYmVsO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERvd25zaGlmdFxuICAgICAgaXRlbVRvU3RyaW5nPXtnZXRJdGVtVG9TdHJpbmd9XG4gICAgICBvblNlbGVjdD17aGFuZGxlSXRlbVNlbGVjdH1cbiAgICAgIHNlbGVjdGVkSXRlbT17dmFsdWV9XG4gICAgICBzZWxlY3RlZEl0ZW1DaGFuZ2VkPXsocHJldkl0ZW0sIGl0ZW0pID0+ICFpc0VxdWFsKHByZXZJdGVtLCBpdGVtKX1cbiAgICA+XG4gICAgICB7KGRvd25zaGlmdCkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgZ2V0SXRlbVByb3BzLFxuICAgICAgICAgIGdldE1lbnVQcm9wcyxcbiAgICAgICAgICBpc09wZW4sXG4gICAgICAgICAgc2VsZWN0ZWRJdGVtLFxuICAgICAgICAgIGdldFJvb3RQcm9wcyxcbiAgICAgICAgICBnZXRUb2dnbGVCdXR0b25Qcm9wcyxcbiAgICAgICAgfSA9IGRvd25zaGlmdDtcblxuICAgICAgICBjb25zdCBub0l0ZW1zID0gIShpdGVtcyAmJiBpdGVtcy5sZW5ndGgpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFN0eWxlZERyb3Bkb3duXG4gICAgICAgICAgICB7Li4uZ2V0Um9vdFByb3BzKHsgcmVmS2V5OiAnaW5uZXJSZWYnIH0pfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGFiZWwgJiYgPFN1YnRpdGxlVGV4dCBzaXplPXsxfT57bGFiZWx9PC9TdWJ0aXRsZVRleHQ+fVxuICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgIHsuLi5nZXRUb2dnbGVCdXR0b25Qcm9wcygpfVxuICAgICAgICAgICAgICBpdGVtc1NwYWNpbmc9ezEwfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U3VidGl0bGVUZXh0XG4gICAgICAgICAgICAgICAgc2l6ZT17Mn1cbiAgICAgICAgICAgICAgICB2YXJpYXRpb249e3NlbGVjdGVkSXRlbSA/ICdpbmhlcml0JyA6ICdkYXJrR3JheSd9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aXRlbU5hbWVHZXR0ZXIoc2VsZWN0ZWRJdGVtKSB8fCBwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgPC9TdWJ0aXRsZVRleHQ+XG4gICAgICAgICAgICAgIDxTdmdJY29uXG4gICAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAgIGlzT3BlblxuICAgICAgICAgICAgICAgICAgICA/ICdhc3NldHMvaWNvbnMvaWMtYXJyb3ctdXAuc3ZnJ1xuICAgICAgICAgICAgICAgICAgICA6ICdhc3NldHMvaWNvbnMvaWMtYXJyb3ctZG93bi5zdmcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8SXRlbXNDb250YWluZXIgey4uLmdldE1lbnVQcm9wcygpfSBpc09wZW49e2lzT3Blbn0+XG4gICAgICAgICAgICAgIHtpc09wZW4gJiZcbiAgICAgICAgICAgICAgICAobm9JdGVtcyA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzhweCAxNnB4JywgcG9pbnRlckV2ZW50czogJ25vbmUnIH19PlxuICAgICAgICAgICAgICAgICAgICA8Qm9keVRleHQgc2l6ZT17M30gdmFyaWF0aW9uPVwiZGFya0dyYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7bm9JdGVtc01lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IGlzRXF1YWwoaXRlbSwgc2VsZWN0ZWRJdGVtKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxJdGVtQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2l0ZW19LSR7aWR4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1NwYWNpbmc9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRJdGVtUHJvcHMoeyBpdGVtLCBpbmRleDogaWR4IH0pfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2R5VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtpc1NlbGVjdGVkID8gMSA6IDN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1OYW1lR2V0dGVyKGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb2R5VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthcmVJdGVtc1JlbW92YWJsZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiYXNzZXRzL2ljb25zL2ljLWRlbGV0ZS5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldikgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVJlbW92ZUl0ZW0oaXRlbSwgZXYsIGRvd25zaGlmdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0l0ZW1zQ29udGFpbmVyPlxuICAgICAgICAgIDwvU3R5bGVkRHJvcGRvd24+XG4gICAgICAgICk7XG4gICAgICB9fVxuICAgIDwvRG93bnNoaWZ0PlxuICApO1xufVxuXG5leHBvcnQgdHlwZSBNdWx0aURyb3Bkb3duVmFsdWUgPSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGNoaXBMYWJlbD86IHN0cmluZztcbiAgdmFsdWU6IGFueTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlTZWxlY3REcm9wZG93blByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgaXRlbXM6IE11bHRpRHJvcGRvd25WYWx1ZVtdO1xuICBsYWJlbD86IHN0cmluZztcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIG9uQ2hhbmdlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uU2VsZWN0PzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uUmVtb3ZlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNdWx0aVNlbGVjdERyb3Bkb3duKHByb3BzOiBNdWx0aVNlbGVjdERyb3Bkb3duUHJvcHMpIHtcbiAgY29uc3QgeyBpdGVtcywgbGFiZWwsIHBsYWNlaG9sZGVyLCBvblNlbGVjdCwgb25DaGFuZ2UsIG9uUmVtb3ZlIH0gPSBwcm9wcztcblxuICBjb25zdCB7XG4gICAgZ2V0U2VsZWN0ZWRJdGVtUHJvcHMsXG4gICAgZ2V0RHJvcGRvd25Qcm9wcyxcbiAgICBhZGRTZWxlY3RlZEl0ZW0sXG4gICAgcmVtb3ZlU2VsZWN0ZWRJdGVtLFxuICAgIHNlbGVjdGVkSXRlbXMsXG4gIH0gPSB1c2VNdWx0aXBsZVNlbGVjdGlvbjxNdWx0aURyb3Bkb3duVmFsdWU+KHtcbiAgICBpbml0aWFsU2VsZWN0ZWRJdGVtczogdW5kZWZpbmVkLFxuICAgIG9uU2VsZWN0ZWRJdGVtc0NoYW5nZTogKGNoYW5nZXMpID0+IHtcbiAgICAgIG9uU2VsZWN0ICYmIG9uU2VsZWN0KGdldENoYW5nZUV2ZW50KGNoYW5nZXMuc2VsZWN0ZWRJdGVtcykpO1xuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IHtcbiAgICBpc09wZW4sXG4gICAgc2VsZWN0ZWRJdGVtLFxuICAgIGdldFRvZ2dsZUJ1dHRvblByb3BzLFxuICAgIGdldExhYmVsUHJvcHMsXG4gICAgZ2V0TWVudVByb3BzLFxuICAgIGdldEl0ZW1Qcm9wcyxcbiAgfSA9IHVzZVNlbGVjdCh7XG4gICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxuICAgIGRlZmF1bHRIaWdobGlnaHRlZEluZGV4OiAwLCAvLyBhZnRlciBzZWxlY3Rpb24sIGhpZ2hsaWdodCB0aGUgZmlyc3QgaXRlbS5cbiAgICBpdGVtcyxcbiAgICBzdGF0ZVJlZHVjZXI6IChzdGF0ZSwgYWN0aW9uQW5kQ2hhbmdlcykgPT4ge1xuICAgICAgY29uc3QgeyBjaGFuZ2VzLCB0eXBlIH0gPSBhY3Rpb25BbmRDaGFuZ2VzO1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgdXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMuVG9nZ2xlQnV0dG9uS2V5RG93bkVudGVyOlxuICAgICAgICBjYXNlIHVzZVNlbGVjdC5zdGF0ZUNoYW5nZVR5cGVzLlRvZ2dsZUJ1dHRvbktleURvd25TcGFjZUJ1dHRvbjpcbiAgICAgICAgY2FzZSB1c2VTZWxlY3Quc3RhdGVDaGFuZ2VUeXBlcy5JdGVtQ2xpY2s6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmNoYW5nZXMsXG4gICAgICAgICAgICBpc09wZW46IHRydWUsIC8vIGtlZXAgdGhlIG1lbnUgb3BlbiBhZnRlciBzZWxlY3Rpb24uXG4gICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gY2hhbmdlcztcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uU3RhdGVDaGFuZ2U6ICh7IHR5cGUsIHNlbGVjdGVkSXRlbTogbmV3U2VsZWN0ZWRJdGVtIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIHVzZVNlbGVjdC5zdGF0ZUNoYW5nZVR5cGVzLlRvZ2dsZUJ1dHRvbktleURvd25FbnRlcjpcbiAgICAgICAgY2FzZSB1c2VTZWxlY3Quc3RhdGVDaGFuZ2VUeXBlcy5Ub2dnbGVCdXR0b25LZXlEb3duU3BhY2VCdXR0b246XG4gICAgICAgIGNhc2UgdXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMuSXRlbUNsaWNrOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGlzQWxyZWFkeVNlbGVjdGVkID0gc2VsZWN0ZWRJdGVtcy5zb21lKFxuICAgICAgICAgICAgICAoaSkgPT4gaS52YWx1ZSA9PT0gbmV3U2VsZWN0ZWRJdGVtPy52YWx1ZVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKG5ld1NlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgICBpZiAoaXNBbHJlYWR5U2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVTZWxlY3RlZEl0ZW0obmV3U2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgICAgICBvblJlbW92ZSAmJiBvblJlbW92ZShnZXRDaGFuZ2VFdmVudChuZXdTZWxlY3RlZEl0ZW0pKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRTZWxlY3RlZEl0ZW0obmV3U2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSAmJiBvbkNoYW5nZShnZXRDaGFuZ2VFdmVudChuZXdTZWxlY3RlZEl0ZW0pKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWREcm9wZG93bj5cbiAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgIDxTdWJ0aXRsZVRleHQgc2l6ZT17MX0gey4uLmdldExhYmVsUHJvcHMoKX0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L1N1YnRpdGxlVGV4dD5cbiAgICAgICl9XG4gICAgICA8TXVsdGlTZWxlY3RDb250YWluZXJcbiAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICB7Li4uZ2V0VG9nZ2xlQnV0dG9uUHJvcHMoXG4gICAgICAgICAgZ2V0RHJvcGRvd25Qcm9wcyh7IHByZXZlbnRLZXlBY3Rpb246IGlzT3BlbiB9KVxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICA8T3ZlcmZsb3dXcmFwcGVyPlxuICAgICAgICAgIDxTdWJ0aXRsZVRleHRcbiAgICAgICAgICAgIHNpemU9ezJ9XG4gICAgICAgICAgICB2YXJpYXRpb249e3NlbGVjdGVkSXRlbSA/ICdpbmhlcml0JyA6ICdkYXJrR3JheSd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE92ZXJmbG93V3JhcHBlcj5cbiAgICAgICAgICAgICAgPEZsZXhSb3cgZ2FwPXs0fT5cbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRJdGVtcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXJXcmFwcGVyPntwbGFjZWhvbGRlcn08L1BsYWNlaG9sZGVyV3JhcHBlcj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcy5tYXAoKHNlbGVjdGVkSXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPENoaXBJdGVtQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtgc2VsZWN0ZWQtaXRlbS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgey4uLmdldFNlbGVjdGVkSXRlbVByb3BzKHsgc2VsZWN0ZWRJdGVtLCBpbmRleCB9KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Um93IGFsaWduPXsnY2VudGVyJ30gZ2FwPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEl0ZW0/LmNoaXBMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aVNlbGVjdERlbGV0ZUljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVTZWxlY3RlZEl0ZW0oc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MTR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17J2Fzc2V0cy9pY29ucy9pYy1kZWxldGUuc3ZnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Um93PlxuICAgICAgICAgICAgICAgICAgICA8L0NoaXBJdGVtQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgICAgICA8L092ZXJmbG93V3JhcHBlcj5cbiAgICAgICAgICA8L1N1YnRpdGxlVGV4dD5cbiAgICAgICAgPC9PdmVyZmxvd1dyYXBwZXI+XG4gICAgICAgIDxEcm9wZG93bkljb25XcmFwcGVyPlxuICAgICAgICAgIDxTdmdJY29uXG4gICAgICAgICAgICBzaXplPXsxNn1cbiAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgIGlzT3BlblxuICAgICAgICAgICAgICAgID8gJ2Fzc2V0cy9pY29ucy9pYy1hcnJvdy11cC5zdmcnXG4gICAgICAgICAgICAgICAgOiAnYXNzZXRzL2ljb25zL2ljLWFycm93LWRvd24uc3ZnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRHJvcGRvd25JY29uV3JhcHBlcj5cbiAgICAgIDwvTXVsdGlTZWxlY3RDb250YWluZXI+XG4gICAgICA8SXRlbXNDb250YWluZXIgey4uLmdldE1lbnVQcm9wcygpfSBpc09wZW49e2lzT3Blbn0+XG4gICAgICAgIHtpc09wZW4gJiZcbiAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWRJdGVtcz8uc29tZShcbiAgICAgICAgICAgICAgKGkpID0+IGkudmFsdWUgPT09IGl0ZW0udmFsdWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8SXRlbUNvbnRhaW5lclxuICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgaXRlbXNTcGFjaW5nPXsxMH1cbiAgICAgICAgICAgICAgICBrZXk9e2Ake2l0ZW0udmFsdWV9JHtpbmRleH1gfVxuICAgICAgICAgICAgICAgIHsuLi5nZXRJdGVtUHJvcHMoeyBpdGVtLCBpbmRleCB9KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCb2R5VGV4dCBzaXplPXtpc1NlbGVjdGVkID8gMSA6IDN9PntpdGVtLmxhYmVsfTwvQm9keVRleHQ+XG4gICAgICAgICAgICAgICAge2lzU2VsZWN0ZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgPENoZWNrSWNvbiBzaXplPXsxNH0gc3JjPXsnYXNzZXRzL2ljb25zL2ljLWNoZWNrbWFyay5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvSXRlbUNvbnRhaW5lcj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICA8L0l0ZW1zQ29udGFpbmVyPlxuICAgIDwvU3R5bGVkRHJvcGRvd24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuIl19