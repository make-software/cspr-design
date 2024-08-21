"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiSelectInput = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var downshift_1 = require("downshift");
var ic_arrow_down_svg_1 = tslib_1.__importDefault(require("assets/icons/ic-arrow-down.svg"));
var ic_search_svg_1 = tslib_1.__importDefault(require("assets/icons/ic-search.svg"));
var ic_delete_svg_1 = tslib_1.__importDefault(require("assets/icons/ic-delete.svg"));
var use_click_and_touch_away_1 = require("../../hooks/use-click-and-touch-away");
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var flex_column_1 = tslib_1.__importDefault(require("../flex-column/flex-column"));
var body_text_1 = tslib_1.__importDefault(require("../body-text/body-text"));
var svg_icon_1 = tslib_1.__importDefault(require("../svg-icon/svg-icon"));
var input_1 = tslib_1.__importDefault(require("../input/input"));
var DropdownContainer = styled_components_1.default.div(function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return (tslib_1.__assign({ outline: 'none' }, (disabled && {
        opacity: '0.5',
        pointerEvents: 'none',
    })));
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
var InputContainer = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        width: '100%',
    });
});
var StyledInput = (0, styled_components_1.default)(input_1.default)(function () { return ({
    width: '100%',
    border: 'none',
    height: '24px',
    '> div': {
        padding: '0 8px',
    },
}); });
var DropdownIconWrapper = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        paddingRight: '8px',
        marginLeft: '8px',
    });
});
var ArrowSvgIcon = (0, styled_components_1.default)(svg_icon_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        path: {
            fill: theme.styleguideColors.contentPrimary,
        },
    });
});
var ClearSvgIcon = (0, styled_components_1.default)(svg_icon_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        path: {
            stroke: theme.styleguideColors.contentPrimary,
        },
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
        wordBreak: 'break-word',
    });
});
var ItemsContainer = styled_components_1.default.div(function (_a) {
    var theme = _a.theme, isOpen = _a.isOpen;
    return ({
        display: isOpen ? 'inherit' : 'none',
        marginTop: 4,
        borderRadius: theme.borderRadius.base,
        background: theme.styleguideColors.fillSecondary,
        maxHeight: '250px',
        overflowY: 'scroll',
    });
});
var ItemsContainerEmpty = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        padding: '32px 16px',
        pointerEvents: 'none',
        justifyContent: 'center',
    });
});
var ItemContainer = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        cursor: 'pointer',
        minHeight: 36,
        padding: '8px 16px',
        wordBreak: 'break-word',
        ':hover, :active': {
            background: theme.styleguideColors.fillSecondaryBlueHover,
            fontWeight: 600,
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
function MultiSelectInput(props) {
    var items = props.items, value = props.value, label = props.label, placeholder = props.placeholder, _a = props.disabled, disabled = _a === void 0 ? false : _a, onSelectItem = props.onSelectItem, onAddItem = props.onAddItem, onRemoveItem = props.onRemoveItem, onChangeInput = props.onChangeInput;
    var _b = (0, react_1.useState)(''), inputValue = _b[0], setInputValue = _b[1];
    var _c = (0, downshift_1.useMultipleSelection)({
        initialSelectedItems: value,
        onSelectedItemsChange: function (changes) {
            onSelectItem && onSelectItem(getChangeEvent(changes.selectedItems));
        },
    }), getSelectedItemProps = _c.getSelectedItemProps, getDropdownProps = _c.getDropdownProps, addSelectedItem = _c.addSelectedItem, removeSelectedItem = _c.removeSelectedItem, selectedItems = _c.selectedItems, setSelectedItems = _c.setSelectedItems, reset = _c.reset;
    var inputValueItem = (inputValue === null || inputValue === void 0 ? void 0 : inputValue.length) >= 3
        ? [
            {
                id: inputValue,
                label: inputValue,
                value: inputValue,
                chipLabel: inputValue,
            },
        ]
        : [];
    var itemsWithCustomInputValue = tslib_1.__spreadArray(tslib_1.__spreadArray([], inputValueItem, true), items, true);
    var _d = (0, downshift_1.useCombobox)({
        inputValue: inputValue,
        items: itemsWithCustomInputValue,
        onStateChange: function (_a) {
            var inputValue = _a.inputValue, type = _a.type, newSelectedItem = _a.selectedItem;
            switch (type) {
                case downshift_1.useCombobox.stateChangeTypes.InputChange:
                    setInputValue(inputValue || '');
                    onChangeInput && onChangeInput(inputValue || '');
                    break;
                case downshift_1.useCombobox.stateChangeTypes.InputKeyDownEnter:
                case downshift_1.useCombobox.stateChangeTypes.ItemClick:
                case downshift_1.useCombobox.stateChangeTypes.InputBlur:
                    var isAlreadySelected = selectedItems.some(function (i) { return i.value === (newSelectedItem === null || newSelectedItem === void 0 ? void 0 : newSelectedItem.value); });
                    if (newSelectedItem) {
                        if (isAlreadySelected) {
                            setSelectedItems(selectedItems.filter(function (i) { return i.value !== newSelectedItem.value; }));
                            onRemoveItem && onRemoveItem(getChangeEvent(newSelectedItem));
                        }
                        else {
                            addSelectedItem(newSelectedItem);
                            onAddItem && onAddItem(getChangeEvent(newSelectedItem));
                        }
                    }
                    break;
                case downshift_1.useCombobox.stateChangeTypes.FunctionCloseMenu:
                    handleClearInput();
                    break;
                default:
                    break;
            }
        },
        stateReducer: function (state, actionAndChanges) {
            var changes = actionAndChanges.changes, type = actionAndChanges.type;
            switch (type) {
                case downshift_1.useCombobox.stateChangeTypes.InputKeyDownEnter:
                case downshift_1.useCombobox.stateChangeTypes.ItemClick:
                    return tslib_1.__assign(tslib_1.__assign({}, changes), { isOpen: state.isOpen });
                default:
                    return changes;
            }
        },
    }), isOpen = _d.isOpen, getToggleButtonProps = _d.getToggleButtonProps, getLabelProps = _d.getLabelProps, getMenuProps = _d.getMenuProps, getInputProps = _d.getInputProps, getItemProps = _d.getItemProps, openMenu = _d.openMenu;
    var outerClickRef = (0, use_click_and_touch_away_1.useClickAndTouchAway)({
        callback: function () {
            if (isOpen) {
                handleClearInput();
            }
        },
    }).ref;
    //Align resetting selected values if they were reset in parent
    (0, react_1.useEffect)(function () {
        if (!value || value.length < 1) {
            reset();
        }
    }, [value]);
    var handleClearInput = function () {
        setInputValue('');
        onChangeInput && onChangeInput('');
    };
    var handleClearAll = function () {
        handleClearInput();
        onSelectItem && onSelectItem(getChangeEvent(null));
        reset();
    };
    var showInput = isOpen || selectedItems.length === 0;
    return ((0, jsx_runtime_1.jsx)(DropdownContainer, tslib_1.__assign({ disabled: disabled, ref: outerClickRef }, { children: (0, jsx_runtime_1.jsxs)(flex_column_1.default, tslib_1.__assign({ itemsSpacing: 4 }, { children: [label && ((0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ lineHeight: 'xs' }, getLabelProps(), { size: 1 }, { children: label }))), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)(MultiSelectContainer, tslib_1.__assign({ isOpen: isOpen, align: "center", justify: "space-between" }, getToggleButtonProps(getDropdownProps({ preventKeyAction: isOpen })), { children: [(0, jsx_runtime_1.jsxs)(InputContainer, tslib_1.__assign({ gap: 8, wrap: 'wrap' }, { children: [selectedItems.map(function (selectedItem, index) { return ((0, jsx_runtime_1.jsx)(ChipItemContainer, tslib_1.__assign({}, getSelectedItemProps({ selectedItem: selectedItem, index: index }), { children: (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ lineHeight: 'xs', size: 3, variation: selectedItem ? 'inherit' : 'darkGray' }, { children: (0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ align: 'center', gap: 4 }, { children: [(selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.chipLabel) || (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.label), (0, jsx_runtime_1.jsx)(MultiSelectDeleteIcon, { onClick: function (event) {
                                                                event.preventDefault();
                                                                event.stopPropagation();
                                                                removeSelectedItem(selectedItem);
                                                            }, size: 14, src: ic_delete_svg_1.default })] })) })) }), "selected-item-".concat(index))); }), showInput ? ((0, jsx_runtime_1.jsx)(StyledInput, tslib_1.__assign({}, getInputProps({
                                            placeholder: placeholder,
                                            value: inputValue || '',
                                            disabled: disabled,
                                            onFocus: function () {
                                                openMenu();
                                            },
                                        }, { suppressRefError: true }), { prefixIcon: (0, jsx_runtime_1.jsx)(svg_icon_1.default, { src: ic_search_svg_1.default }) }))) : null] })), (0, jsx_runtime_1.jsxs)(DropdownIconWrapper, { children: [!!selectedItems.length && ((0, jsx_runtime_1.jsx)(ClearSvgIcon, { src: ic_delete_svg_1.default, onClick: handleClearAll, marginRight: true })), (0, jsx_runtime_1.jsx)(ArrowSvgIcon, { src: ic_arrow_down_svg_1.default, rotate: isOpen })] })] })), (0, jsx_runtime_1.jsx)(ItemsContainer, tslib_1.__assign({}, getMenuProps(), { isOpen: isOpen }, { children: isOpen &&
                                (!(itemsWithCustomInputValue && itemsWithCustomInputValue.length) ? ((0, jsx_runtime_1.jsx)(ItemsContainerEmpty, { children: (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 3, lineHeight: 'xs', scale: 'xs' }, { children: "No items found" })) })) : (itemsWithCustomInputValue.map(function (item, index) { return ((0, jsx_runtime_1.jsx)(ItemContainer, tslib_1.__assign({ align: "center", justify: "space-between", itemsSpacing: 10 }, getItemProps({
                                    item: item,
                                    index: index,
                                    'aria-selected': selectedItems.includes(item),
                                }), { children: (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 3, lineHeight: 'xs', scale: 'xs' }, { children: item.label })) }), "".concat(item.value).concat(index))); }))) }))] })] })) })));
}
exports.MultiSelectInput = MultiSelectInput;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlzZWxlY3QtaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvbXVsdGlzZWxlY3QtaW5wdXQvbXVsdGlzZWxlY3QtaW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQW1EO0FBQ25ELGdGQUF1QztBQUN2Qyx1Q0FBOEQ7QUFDOUQsNkZBQXNEO0FBQ3RELHFGQUFvRDtBQUNwRCxxRkFBb0Q7QUFDcEQsaUZBQTRFO0FBQzVFLDBFQUEyQztBQUMzQyxtRkFBb0Q7QUFDcEQsNkVBQThDO0FBRTlDLDBFQUEyQztBQUMzQyxpRUFBbUM7QUFFbkMsSUFBTSxpQkFBaUIsR0FBRywyQkFBTSxDQUFDLEdBQUcsQ0FDbEMsVUFBQyxFQUFtQjtRQUFqQixLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUE7SUFBTyxPQUFBLG9CQUN2QixPQUFPLEVBQUUsTUFBTSxJQUVaLENBQUMsUUFBUSxJQUFJO1FBQ2QsT0FBTyxFQUFFLEtBQUs7UUFDZCxhQUFhLEVBQUUsTUFBTTtLQUN0QixDQUFDLEVBQ0Y7QUFQdUIsQ0FPdkIsQ0FDSCxDQUFDO0FBRUYsSUFBTSxvQkFBb0IsR0FBRyxJQUFBLDJCQUFNLEVBQUMsa0JBQU8sQ0FBQyxDQUMxQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDZCxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJO1FBQ3JDLE9BQU8sRUFBRSxLQUFLO1FBQ2QsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1FBQ2hELGlCQUFpQixFQUFFO1lBQ2pCLEdBQUcsRUFBRTtnQkFDSCxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWM7YUFDN0M7U0FDRjtLQUNGLENBQUM7QUFUYSxDQVNiLENBQ0gsQ0FBQztBQUVGLElBQU0sY0FBYyxHQUFHLElBQUEsMkJBQU0sRUFBQyxr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RUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLG9DQUVyQyxHQUNTLENBQ3ZCLENBQUMsQ0FBQyxDQUFDLENBQ0YseUJBQXlCLENBQUMsR0FBRyxDQUMzQixVQUFDLElBQThCLEVBQUUsS0FBYSxJQUFLLE9BQUEsQ0FDakQsdUJBQUMsYUFBYSxxQkFDWixLQUFLLEVBQUMsUUFBUSxFQUNkLE9BQU8sRUFBQyxlQUFlLEVBQ3ZCLFlBQVksRUFBRSxFQUFFLElBRVosWUFBWSxDQUFDO29DQUNmLElBQUksTUFBQTtvQ0FDSixLQUFLLE9BQUE7b0NBQ0wsZUFBZSxFQUFFLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2lDQUM5QyxDQUFDLGNBRUYsdUJBQUMsbUJBQVEscUJBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLGdCQUM3QyxJQUFJLENBQUMsS0FBSyxJQUNGLEtBVE4sVUFBRyxJQUFJLENBQUMsS0FBSyxTQUFHLEtBQUssQ0FBRSxDQVVkLENBQ2pCLEVBaEJrRCxDQWdCbEQsQ0FDRixDQUNGLENBQUMsSUFDVyxJQUNiLEtBQ0ssSUFDSyxDQUNyQixDQUFDO0FBQ0osQ0FBQztBQTdPRCw0Q0E2T0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlTXVsdGlwbGVTZWxlY3Rpb24sIHVzZUNvbWJvYm94IH0gZnJvbSAnZG93bnNoaWZ0JztcbmltcG9ydCBEb3duSWNvbiBmcm9tICdhc3NldHMvaWNvbnMvaWMtYXJyb3ctZG93bi5zdmcnO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnYXNzZXRzL2ljb25zL2ljLXNlYXJjaC5zdmcnO1xuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnYXNzZXRzL2ljb25zL2ljLWRlbGV0ZS5zdmcnO1xuaW1wb3J0IHsgdXNlQ2xpY2tBbmRUb3VjaEF3YXkgfSBmcm9tICcuLi8uLi9ob29rcy91c2UtY2xpY2stYW5kLXRvdWNoLWF3YXknO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSAnLi4vZmxleC1jb2x1bW4vZmxleC1jb2x1bW4nO1xuaW1wb3J0IEJvZHlUZXh0IGZyb20gJy4uL2JvZHktdGV4dC9ib2R5LXRleHQnO1xuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi4vc3ZnLWljb24vc3ZnLWljb24nO1xuaW1wb3J0IElucHV0IGZyb20gJy4uL2lucHV0L2lucHV0JztcblxuY29uc3QgRHJvcGRvd25Db250YWluZXIgPSBzdHlsZWQuZGl2PHsgZGlzYWJsZWQ/OiBib29sZWFuIH0+KFxuICAoeyB0aGVtZSwgZGlzYWJsZWQgfSkgPT4gKHtcbiAgICBvdXRsaW5lOiAnbm9uZScsXG5cbiAgICAuLi4oZGlzYWJsZWQgJiYge1xuICAgICAgb3BhY2l0eTogJzAuNScsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgfSksXG4gIH0pXG4pO1xuXG5jb25zdCBNdWx0aVNlbGVjdENvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KTx7IGlzT3BlbjogYm9vbGVhbiB9PihcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICAgIHBhZGRpbmc6ICc4cHgnLFxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcbiAgICAnOmhvdmVyLCA6YWN0aXZlJzoge1xuICAgICAgc3ZnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5UmVkLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuKTtcblxuY29uc3QgSW5wdXRDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgd2lkdGg6ICcxMDAlJyxcbn0pKTtcblxuY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQoSW5wdXQpKCgpID0+ICh7XG4gIHdpZHRoOiAnMTAwJScsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBoZWlnaHQ6ICcyNHB4JyxcbiAgJz4gZGl2Jzoge1xuICAgIHBhZGRpbmc6ICcwIDhweCcsXG4gIH0sXG59KSk7XG5cbmNvbnN0IERyb3Bkb3duSWNvbldyYXBwZXIgPSBzdHlsZWQoRmxleFJvdykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgcGFkZGluZ1JpZ2h0OiAnOHB4JyxcbiAgbWFyZ2luTGVmdDogJzhweCcsXG59KSk7XG5cbmNvbnN0IEFycm93U3ZnSWNvbiA9IHN0eWxlZChTdmdJY29uKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBwYXRoOiB7XG4gICAgZmlsbDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcbiAgfSxcbn0pKTtcblxuY29uc3QgQ2xlYXJTdmdJY29uID0gc3R5bGVkKFN2Z0ljb24pKCh7IHRoZW1lIH0pID0+ICh7XG4gIHBhdGg6IHtcbiAgICBzdHJva2U6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXG4gIH0sXG59KSk7XG5cbmNvbnN0IENoaXBJdGVtQ29udGFpbmVyID0gc3R5bGVkLnNwYW4oKHsgdGhlbWUgfSkgPT4gKHtcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIHBhZGRpbmc6ICcycHggOHB4JyxcbiAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsVGVydHJpYXJ5LFxuICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcbiAgd29yZEJyZWFrOiAnYnJlYWstd29yZCcsXG59KSk7XG5cbmNvbnN0IEl0ZW1zQ29udGFpbmVyID0gc3R5bGVkLmRpdjx7IGlzT3BlbjogYm9vbGVhbiB9PigoeyB0aGVtZSwgaXNPcGVuIH0pID0+ICh7XG4gIGRpc3BsYXk6IGlzT3BlbiA/ICdpbmhlcml0JyA6ICdub25lJyxcbiAgbWFyZ2luVG9wOiA0LFxuICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gIG1heEhlaWdodDogJzI1MHB4JyxcbiAgb3ZlcmZsb3dZOiAnc2Nyb2xsJyxcbn0pKTtcblxuY29uc3QgSXRlbXNDb250YWluZXJFbXB0eSA9IHN0eWxlZChGbGV4Um93KSgoeyB0aGVtZSB9KSA9PiAoe1xuICBwYWRkaW5nOiAnMzJweCAxNnB4JyxcbiAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG59KSk7XG5cbmNvbnN0IEl0ZW1Db250YWluZXIgPSBzdHlsZWQoRmxleFJvdykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIG1pbkhlaWdodDogMzYsXG4gIHBhZGRpbmc6ICc4cHggMTZweCcsXG4gIHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnLFxuICAnOmhvdmVyLCA6YWN0aXZlJzoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeUJsdWVIb3ZlcixcbiAgICBmb250V2VpZ2h0OiA2MDAsXG4gIH0sXG59KSk7XG5cbmNvbnN0IE11bHRpU2VsZWN0RGVsZXRlSWNvbiA9IHN0eWxlZChTdmdJY29uKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBwYXRoOiB7XG4gICAgc3Ryb2tlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICB9LFxuICAnOmhvdmVyLCA6YWN0aXZlJzoge1xuICAgIHBhdGg6IHtcbiAgICAgIHN0cm9rZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UmVkLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmV4cG9ydCB0eXBlIE11bHRpU2VsZWN0RHJvcGRvd25WYWx1ZSA9IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgY2hpcExhYmVsPzogc3RyaW5nO1xuICB2YWx1ZTogYW55O1xufTtcblxuZXhwb3J0IHR5cGUgTXVsdGlTZWxlY3REcm9wZG93bkV2ZW50VmFsdWUgPSB7XG4gIHRhcmdldDoge1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgdmFsdWU6IE11bHRpU2VsZWN0RHJvcGRvd25WYWx1ZSB8IG51bGw7XG4gIH07XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpU2VsZWN0SW5wdXRQcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XG4gIHZhbHVlPzogTXVsdGlTZWxlY3REcm9wZG93blZhbHVlW107XG4gIGl0ZW1zOiBNdWx0aVNlbGVjdERyb3Bkb3duVmFsdWVbXTtcbiAgbGFiZWw/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgb25BZGRJdGVtPzogKGV2OiBNdWx0aVNlbGVjdERyb3Bkb3duRXZlbnRWYWx1ZSkgPT4gdm9pZDtcbiAgb25TZWxlY3RJdGVtPzogKGV2OiBNdWx0aVNlbGVjdERyb3Bkb3duRXZlbnRWYWx1ZSkgPT4gdm9pZDtcbiAgb25SZW1vdmVJdGVtPzogKGV2OiBNdWx0aVNlbGVjdERyb3Bkb3duRXZlbnRWYWx1ZSkgPT4gdm9pZDtcbiAgb25DaGFuZ2VJbnB1dD86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5jb25zdCBnZXRDaGFuZ2VFdmVudCA9ICh2YWx1ZTogYW55KTogTXVsdGlTZWxlY3REcm9wZG93bkV2ZW50VmFsdWUgPT4ge1xuICByZXR1cm4ge1xuICAgIHRhcmdldDoge1xuICAgICAgbmFtZTogdW5kZWZpbmVkLFxuICAgICAgdmFsdWUsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBNdWx0aVNlbGVjdElucHV0KHByb3BzOiBNdWx0aVNlbGVjdElucHV0UHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGl0ZW1zLFxuICAgIHZhbHVlLFxuICAgIGxhYmVsLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGRpc2FibGVkID0gZmFsc2UsXG4gICAgb25TZWxlY3RJdGVtLFxuICAgIG9uQWRkSXRlbSxcbiAgICBvblJlbW92ZUl0ZW0sXG4gICAgb25DaGFuZ2VJbnB1dCxcbiAgfSA9IHByb3BzO1xuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcblxuICBjb25zdCB7XG4gICAgZ2V0U2VsZWN0ZWRJdGVtUHJvcHMsXG4gICAgZ2V0RHJvcGRvd25Qcm9wcyxcbiAgICBhZGRTZWxlY3RlZEl0ZW0sXG4gICAgcmVtb3ZlU2VsZWN0ZWRJdGVtLFxuICAgIHNlbGVjdGVkSXRlbXMsXG4gICAgc2V0U2VsZWN0ZWRJdGVtcyxcbiAgICByZXNldCxcbiAgfSA9IHVzZU11bHRpcGxlU2VsZWN0aW9uPE11bHRpU2VsZWN0RHJvcGRvd25WYWx1ZT4oe1xuICAgIGluaXRpYWxTZWxlY3RlZEl0ZW1zOiB2YWx1ZSxcbiAgICBvblNlbGVjdGVkSXRlbXNDaGFuZ2U6IChjaGFuZ2VzKSA9PiB7XG4gICAgICBvblNlbGVjdEl0ZW0gJiYgb25TZWxlY3RJdGVtKGdldENoYW5nZUV2ZW50KGNoYW5nZXMuc2VsZWN0ZWRJdGVtcykpO1xuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGlucHV0VmFsdWVJdGVtID1cbiAgICBpbnB1dFZhbHVlPy5sZW5ndGggPj0gM1xuICAgICAgPyBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IGlucHV0VmFsdWUsXG4gICAgICAgICAgICBsYWJlbDogaW5wdXRWYWx1ZSxcbiAgICAgICAgICAgIHZhbHVlOiBpbnB1dFZhbHVlLFxuICAgICAgICAgICAgY2hpcExhYmVsOiBpbnB1dFZhbHVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICAgIDogW107XG5cbiAgY29uc3QgaXRlbXNXaXRoQ3VzdG9tSW5wdXRWYWx1ZSA9IFsuLi5pbnB1dFZhbHVlSXRlbSwgLi4uaXRlbXNdO1xuXG4gIGNvbnN0IHtcbiAgICBpc09wZW4sXG4gICAgZ2V0VG9nZ2xlQnV0dG9uUHJvcHMsXG4gICAgZ2V0TGFiZWxQcm9wcyxcbiAgICBnZXRNZW51UHJvcHMsXG4gICAgZ2V0SW5wdXRQcm9wcyxcbiAgICBnZXRJdGVtUHJvcHMsXG4gICAgb3Blbk1lbnUsXG4gIH0gPSB1c2VDb21ib2JveDxNdWx0aVNlbGVjdERyb3Bkb3duVmFsdWU+KHtcbiAgICBpbnB1dFZhbHVlLFxuICAgIGl0ZW1zOiBpdGVtc1dpdGhDdXN0b21JbnB1dFZhbHVlLFxuICAgIG9uU3RhdGVDaGFuZ2U6ICh7IGlucHV0VmFsdWUsIHR5cGUsIHNlbGVjdGVkSXRlbTogbmV3U2VsZWN0ZWRJdGVtIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIHVzZUNvbWJvYm94LnN0YXRlQ2hhbmdlVHlwZXMuSW5wdXRDaGFuZ2U6XG4gICAgICAgICAgc2V0SW5wdXRWYWx1ZShpbnB1dFZhbHVlIHx8ICcnKTtcbiAgICAgICAgICBvbkNoYW5nZUlucHV0ICYmIG9uQ2hhbmdlSW5wdXQoaW5wdXRWYWx1ZSB8fCAnJyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSB1c2VDb21ib2JveC5zdGF0ZUNoYW5nZVR5cGVzLklucHV0S2V5RG93bkVudGVyOlxuICAgICAgICBjYXNlIHVzZUNvbWJvYm94LnN0YXRlQ2hhbmdlVHlwZXMuSXRlbUNsaWNrOlxuICAgICAgICBjYXNlIHVzZUNvbWJvYm94LnN0YXRlQ2hhbmdlVHlwZXMuSW5wdXRCbHVyOlxuICAgICAgICAgIGNvbnN0IGlzQWxyZWFkeVNlbGVjdGVkID0gc2VsZWN0ZWRJdGVtcy5zb21lKFxuICAgICAgICAgICAgKGkpID0+IGkudmFsdWUgPT09IG5ld1NlbGVjdGVkSXRlbT8udmFsdWVcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKG5ld1NlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgaWYgKGlzQWxyZWFkeVNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkSXRlbXMoXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcy5maWx0ZXIoKGkpID0+IGkudmFsdWUgIT09IG5ld1NlbGVjdGVkSXRlbS52YWx1ZSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgb25SZW1vdmVJdGVtICYmIG9uUmVtb3ZlSXRlbShnZXRDaGFuZ2VFdmVudChuZXdTZWxlY3RlZEl0ZW0pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFkZFNlbGVjdGVkSXRlbShuZXdTZWxlY3RlZEl0ZW0pO1xuICAgICAgICAgICAgICBvbkFkZEl0ZW0gJiYgb25BZGRJdGVtKGdldENoYW5nZUV2ZW50KG5ld1NlbGVjdGVkSXRlbSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSB1c2VDb21ib2JveC5zdGF0ZUNoYW5nZVR5cGVzLkZ1bmN0aW9uQ2xvc2VNZW51OlxuICAgICAgICAgIGhhbmRsZUNsZWFySW5wdXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuICAgIHN0YXRlUmVkdWNlcjogKHN0YXRlLCBhY3Rpb25BbmRDaGFuZ2VzKSA9PiB7XG4gICAgICBjb25zdCB7IGNoYW5nZXMsIHR5cGUgfSA9IGFjdGlvbkFuZENoYW5nZXM7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSB1c2VDb21ib2JveC5zdGF0ZUNoYW5nZVR5cGVzLklucHV0S2V5RG93bkVudGVyOlxuICAgICAgICBjYXNlIHVzZUNvbWJvYm94LnN0YXRlQ2hhbmdlVHlwZXMuSXRlbUNsaWNrOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5jaGFuZ2VzLFxuICAgICAgICAgICAgaXNPcGVuOiBzdGF0ZS5pc09wZW4sIC8vIGtlZXAgdGhlIG1lbnUgb3BlbiBhZnRlciBzZWxlY3Rpb24uXG4gICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gY2hhbmdlcztcbiAgICAgIH1cbiAgICB9LFxuICB9KTtcblxuICBjb25zdCB7IHJlZjogb3V0ZXJDbGlja1JlZiB9ID0gdXNlQ2xpY2tBbmRUb3VjaEF3YXkoe1xuICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgIGhhbmRsZUNsZWFySW5wdXQoKTtcbiAgICAgIH1cbiAgICB9LFxuICB9KTtcblxuICAvL0FsaWduIHJlc2V0dGluZyBzZWxlY3RlZCB2YWx1ZXMgaWYgdGhleSB3ZXJlIHJlc2V0IGluIHBhcmVudFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghdmFsdWUgfHwgdmFsdWUubGVuZ3RoIDwgMSkge1xuICAgICAgcmVzZXQoKTtcbiAgICB9XG4gIH0sIFt2YWx1ZV0pO1xuXG4gIGNvbnN0IGhhbmRsZUNsZWFySW5wdXQgPSAoKSA9PiB7XG4gICAgc2V0SW5wdXRWYWx1ZSgnJyk7XG4gICAgb25DaGFuZ2VJbnB1dCAmJiBvbkNoYW5nZUlucHV0KCcnKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGVhckFsbCA9ICgpID0+IHtcbiAgICBoYW5kbGVDbGVhcklucHV0KCk7XG4gICAgb25TZWxlY3RJdGVtICYmIG9uU2VsZWN0SXRlbShnZXRDaGFuZ2VFdmVudChudWxsKSk7XG4gICAgcmVzZXQoKTtcbiAgfTtcblxuICBjb25zdCBzaG93SW5wdXQgPSBpc09wZW4gfHwgc2VsZWN0ZWRJdGVtcy5sZW5ndGggPT09IDA7XG5cbiAgcmV0dXJuIChcbiAgICA8RHJvcGRvd25Db250YWluZXIgZGlzYWJsZWQ9e2Rpc2FibGVkfSByZWY9e291dGVyQ2xpY2tSZWZ9PlxuICAgICAgPEZsZXhDb2x1bW4gaXRlbXNTcGFjaW5nPXs0fT5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8Qm9keVRleHQgbGluZUhlaWdodD17J3hzJ30gey4uLmdldExhYmVsUHJvcHMoKX0gc2l6ZT17MX0+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9Cb2R5VGV4dD5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TXVsdGlTZWxlY3RDb250YWluZXJcbiAgICAgICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgey4uLmdldFRvZ2dsZUJ1dHRvblByb3BzKFxuICAgICAgICAgICAgICBnZXREcm9wZG93blByb3BzKHsgcHJldmVudEtleUFjdGlvbjogaXNPcGVuIH0pXG4gICAgICAgICAgICApfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dENvbnRhaW5lciBnYXA9ezh9IHdyYXA9eyd3cmFwJ30+XG4gICAgICAgICAgICAgIHtzZWxlY3RlZEl0ZW1zLm1hcCgoc2VsZWN0ZWRJdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxDaGlwSXRlbUNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAga2V5PXtgc2VsZWN0ZWQtaXRlbS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICB7Li4uZ2V0U2VsZWN0ZWRJdGVtUHJvcHMoeyBzZWxlY3RlZEl0ZW0sIGluZGV4IH0pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCb2R5VGV4dFxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PXsneHMnfVxuICAgICAgICAgICAgICAgICAgICBzaXplPXszfVxuICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb249e3NlbGVjdGVkSXRlbSA/ICdpbmhlcml0JyA6ICdkYXJrR3JheSd9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4Um93IGFsaWduPXsnY2VudGVyJ30gZ2FwPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRJdGVtPy5jaGlwTGFiZWwgfHwgc2VsZWN0ZWRJdGVtPy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlTZWxlY3REZWxldGVJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVNlbGVjdGVkSXRlbShzZWxlY3RlZEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezE0fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtEZWxldGVJY29ufVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleFJvdz5cbiAgICAgICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgICAgICAgPC9DaGlwSXRlbUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIHtzaG93SW5wdXQgPyAoXG4gICAgICAgICAgICAgICAgPFN0eWxlZElucHV0XG4gICAgICAgICAgICAgICAgICB7Li4uZ2V0SW5wdXRQcm9wcyhcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpbnB1dFZhbHVlIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXMoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuTWVudSgpO1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgc3VwcHJlc3NSZWZFcnJvcjogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgcHJlZml4SWNvbj17PFN2Z0ljb24gc3JjPXtTZWFyY2hJY29ufSAvPn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvSW5wdXRDb250YWluZXI+XG4gICAgICAgICAgICA8RHJvcGRvd25JY29uV3JhcHBlcj5cbiAgICAgICAgICAgICAgeyEhc2VsZWN0ZWRJdGVtcy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgIDxDbGVhclN2Z0ljb25cbiAgICAgICAgICAgICAgICAgIHNyYz17RGVsZXRlSWNvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsZWFyQWxsfVxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8QXJyb3dTdmdJY29uIHNyYz17RG93bkljb259IHJvdGF0ZT17aXNPcGVufSAvPlxuICAgICAgICAgICAgPC9Ecm9wZG93bkljb25XcmFwcGVyPlxuICAgICAgICAgIDwvTXVsdGlTZWxlY3RDb250YWluZXI+XG4gICAgICAgICAgPEl0ZW1zQ29udGFpbmVyIHsuLi5nZXRNZW51UHJvcHMoKX0gaXNPcGVuPXtpc09wZW59PlxuICAgICAgICAgICAge2lzT3BlbiAmJlxuICAgICAgICAgICAgICAoIShcbiAgICAgICAgICAgICAgICBpdGVtc1dpdGhDdXN0b21JbnB1dFZhbHVlICYmIGl0ZW1zV2l0aEN1c3RvbUlucHV0VmFsdWUubGVuZ3RoXG4gICAgICAgICAgICAgICkgPyAoXG4gICAgICAgICAgICAgICAgPEl0ZW1zQ29udGFpbmVyRW1wdHk+XG4gICAgICAgICAgICAgICAgICA8Qm9keVRleHQgc2l6ZT17M30gbGluZUhlaWdodD17J3hzJ30gc2NhbGU9eyd4cyd9PlxuICAgICAgICAgICAgICAgICAgICBObyBpdGVtcyBmb3VuZFxuICAgICAgICAgICAgICAgICAgPC9Cb2R5VGV4dD5cbiAgICAgICAgICAgICAgICA8L0l0ZW1zQ29udGFpbmVyRW1wdHk+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgaXRlbXNXaXRoQ3VzdG9tSW5wdXRWYWx1ZS5tYXAoXG4gICAgICAgICAgICAgICAgICAoaXRlbTogTXVsdGlTZWxlY3REcm9wZG93blZhbHVlLCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxJdGVtQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtc1NwYWNpbmc9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7aXRlbS52YWx1ZX0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgey4uLmdldEl0ZW1Qcm9wcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IHNlbGVjdGVkSXRlbXMuaW5jbHVkZXMoaXRlbSksXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8Qm9keVRleHQgc2l6ZT17M30gbGluZUhlaWdodD17J3hzJ30gc2NhbGU9eyd4cyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgPC9Cb2R5VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9JdGVtQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9JdGVtc0NvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ZsZXhDb2x1bW4+XG4gICAgPC9Ecm9wZG93bkNvbnRhaW5lcj5cbiAgKTtcbn1cbiJdfQ==