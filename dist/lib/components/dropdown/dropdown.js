import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import Downshift, { useMultipleSelection, useSelect, } from 'downshift';
import styled from 'styled-components';
import isEqual from 'fast-deep-equal';
import BodyText from '../body-text/body-text';
import FlexRow from '../flex-row/flex-row';
import SvgIcon from '../svg-icon/svg-icon';
import FlexColumn from '../flex-column/flex-column';
import UpIcon from '../../assets/icons/ic-arrow-up.svg';
import DownIcon from '../../assets/icons/ic-arrow-down.svg';
import CheckmarkIcon from '../../assets/icons/ic-checkmark.svg';
import DeleteIcon from '../../assets/icons/ic-delete.svg';
var StyledDropdown = styled.div(function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return (__assign({ outline: 'none' }, (disabled && {
        opacity: '0.5',
        pointerEvents: 'none',
    })));
});
var Container = styled(FlexRow)(function (_a) {
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
var ItemsContainer = styled.div(function (_a) {
    var theme = _a.theme, isOpen = _a.isOpen;
    return ({
        display: isOpen ? 'inherit' : 'none',
        marginTop: 4,
        borderRadius: theme.borderRadius.base,
        background: theme.styleguideColors.fillSecondary,
    });
});
var ItemContainer = styled(FlexRow)(function (_a) {
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
var DeleteSvgIcon = styled(SvgIcon)(function (_a) {
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
var ClearSvgIcon = styled(SvgIcon)(function (_a) {
    var theme = _a.theme;
    return ({
        path: {
            stroke: theme.styleguideColors.contentPrimary
        }
    });
});
var MultiSelectContainer = styled(FlexRow)(function (_a) {
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
var PlaceholderWrapper = styled.span(function (_a) {
    var theme = _a.theme;
    return ({
        padding: '0 8px',
    });
});
var ChipItemContainer = styled.span(function (_a) {
    var theme = _a.theme;
    return ({
        borderRadius: theme.borderRadius.base,
        cursor: 'pointer',
        padding: '2px 8px',
        background: theme.styleguideColors.fillTertriary,
        color: theme.styleguideColors.contentPrimary,
    });
});
var OverflowWrapper = styled.span(function (_a) {
    var theme = _a.theme;
    return ({
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    });
});
var DropdownIconWrapper = styled(FlexRow)(function (_a) {
    var theme = _a.theme;
    return ({
        paddingRight: '8px',
        marginLeft: '8px',
    });
});
var CheckIcon = styled(SvgIcon)(function (_a) {
    var theme = _a.theme;
    return ({
        path: {
            fill: theme.styleguideColors.contentBlue,
        },
    });
});
var MultiSelectDeleteIcon = styled(SvgIcon)(function (_a) {
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
export function Dropdown(props) {
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
    return (_jsx(Downshift, __assign({ itemToString: getItemToString, onSelect: handleItemSelect, selectedItem: value, selectedItemChanged: function (prevItem, item) { return !isEqual(prevItem, item); } }, { children: function (downshift) {
            var getItemProps = downshift.getItemProps, getMenuProps = downshift.getMenuProps, isOpen = downshift.isOpen, selectedItem = downshift.selectedItem, getRootProps = downshift.getRootProps, getToggleButtonProps = downshift.getToggleButtonProps;
            var noItems = !(items && items.length);
            return (_jsxs(StyledDropdown, __assign({}, getRootProps({ refKey: 'innerRef' }), { style: style, tabIndex: 0 }, { children: [label && (_jsx(BodyText, __assign({ lineHeight: 'xs', size: 1 }, { children: label }))), _jsxs(Container, __assign({ align: "center", justify: "space-between" }, getToggleButtonProps(), { isOpen: isOpen, itemsSpacing: 10 }, { children: [_jsx(BodyText, __assign({ size: 3, lineHeight: 'xs', variation: selectedItem ? 'inherit' : 'darkGray', style: {
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                } }, { children: itemNameGetter(selectedItem) || placeholder })), _jsx(SvgIcon, { src: isOpen ? UpIcon : DownIcon })] })), _jsx(ItemsContainer, __assign({}, getMenuProps(), { isOpen: isOpen }, { children: isOpen &&
                            (noItems ? (_jsx("div", __assign({ style: { padding: '8px 16px', pointerEvents: 'none' } }, { children: _jsx(BodyText, __assign({ size: 3, scale: 'xs', lineHeight: 'xs', variation: "darkGray" }, { children: noItemsMessage })) }))) : (items.map(function (item, idx) {
                                var isSelected = isEqual(item, selectedItem);
                                return (_jsxs(ItemContainer, __assign({ align: "center", justify: "space-between", itemsSpacing: 10 }, getItemProps({ item: item, index: idx }), { children: [_jsx(BodyText, __assign({ size: isSelected ? 1 : 3, style: {
                                                overflow: 'hidden',
                                                whiteSpace: 'nowrap',
                                                textOverflow: 'ellipsis',
                                            }, scale: 'xs', lineHeight: 'xs' }, { children: itemNameGetter(item) })), areItemsRemovable && (_jsx(DeleteSvgIcon, { src: DeleteIcon, onClick: function (ev) {
                                                return handleRemoveItem(item, ev, downshift);
                                            } }))] }), "".concat(item, "-").concat(idx)));
                            }))) }))] })));
        } })));
}
export function MultiSelectDropdown(props) {
    var items = props.items, value = props.value, label = props.label, placeholder = props.placeholder, disabled = props.disabled, onSelect = props.onSelect, onChange = props.onChange, onRemove = props.onRemove, onClearAllItems = props.onClearAllItems;
    var _a = useMultipleSelection({
        initialSelectedItems: value,
        onSelectedItemsChange: function (changes) {
            onSelect && onSelect(getChangeEvent(changes.selectedItems));
        },
    }), getSelectedItemProps = _a.getSelectedItemProps, getDropdownProps = _a.getDropdownProps, addSelectedItem = _a.addSelectedItem, removeSelectedItem = _a.removeSelectedItem, selectedItems = _a.selectedItems, setSelectedItems = _a.setSelectedItems, reset = _a.reset;
    var _b = useSelect({
        selectedItem: null,
        defaultHighlightedIndex: 0,
        items: items,
        stateReducer: function (state, actionAndChanges) {
            var changes = actionAndChanges.changes, type = actionAndChanges.type;
            switch (type) {
                case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
                case useSelect.stateChangeTypes.ToggleButtonKeyDownSpaceButton:
                case useSelect.stateChangeTypes.ItemClick:
                    return __assign(__assign({}, changes), { isOpen: true });
                default:
                    return changes;
            }
        },
        onStateChange: function (_a) {
            var type = _a.type, newSelectedItem = _a.selectedItem;
            switch (type) {
                case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
                case useSelect.stateChangeTypes.ToggleButtonKeyDownSpaceButton:
                case useSelect.stateChangeTypes.ItemClick:
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
    useEffect(function () {
        if (!value || value.length < 1) {
            reset();
        }
    }, [value]);
    var handleClearAll = function () {
        onClearAllItems && onClearAllItems(getChangeEvent(null));
        reset();
    };
    return (_jsx(StyledDropdown, __assign({ disabled: disabled }, { children: _jsxs(FlexColumn, __assign({ itemsSpacing: 4 }, { children: [label && (_jsx(BodyText, __assign({ lineHeight: 'xs' }, getLabelProps(), { size: 1 }, { children: label }))), _jsxs("div", { children: [_jsxs(MultiSelectContainer, __assign({ align: "center", justify: "space-between" }, getToggleButtonProps(__assign(__assign({}, getDropdownProps({ preventKeyAction: isOpen })), { onClick: function (e) { return e.stopPropagation(); }, isOpen: isOpen })), { children: [_jsx("span", { children: _jsx(BodyText, __assign({ lineHeight: 'xs', size: 3, variation: selectedItem ? 'inherit' : 'darkGray' }, { children: _jsx(OverflowWrapper, { children: _jsx(FlexRow, __assign({ gap: 8, wrap: 'wrap' }, { children: selectedItems.length === 0 ? (_jsx(PlaceholderWrapper, { children: placeholder })) : (selectedItems.map(function (selectedItem, index) { return (_jsx(ChipItemContainer, __assign({}, getSelectedItemProps({ selectedItem: selectedItem, index: index }), { children: _jsxs(FlexRow, __assign({ align: 'center', gap: 4 }, { children: [(selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.chipName) && (_jsx(BodyText, __assign({ lineHeight: 'xs', size: 1, variation: 'black' }, { children: selectedItem.chipName }))), (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.chipLabel) || (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.label), _jsx(MultiSelectDeleteIcon, { onClick: function (event) {
                                                                    event.preventDefault();
                                                                    event.stopPropagation();
                                                                    removeSelectedItem(selectedItem);
                                                                    onRemove &&
                                                                        onRemove(getChangeEvent(selectedItem));
                                                                }, size: 14, src: DeleteIcon })] })) }), "selected-item-".concat(index))); })) })) }) })) }), _jsxs(DropdownIconWrapper, { children: [onClearAllItems && !!selectedItems.length && (_jsx(ClearSvgIcon, { src: DeleteIcon, onClick: handleClearAll, marginRight: true })), _jsx(SvgIcon, { size: 16, src: isOpen ? UpIcon : DownIcon })] })] })), _jsx(ItemsContainer, __assign({}, getMenuProps(), { isOpen: isOpen }, { children: isOpen &&
                                items.map(function (item, index) {
                                    var isSelected = selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.some(function (i) { return i.value === item.value; });
                                    return (_jsxs(ItemContainer, __assign({ align: "center", justify: "space-between", itemsSpacing: 10 }, getItemProps({ item: item, index: index }), { children: [_jsx(BodyText, __assign({ size: isSelected ? 1 : 3, lineHeight: 'xs', scale: 'xs' }, { children: item.label })), isSelected && _jsx(CheckIcon, { size: 14, src: CheckmarkIcon })] }), "".concat(item.value).concat(index)));
                                }) }))] })] })) })));
}
export default Dropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBYyxFQUFFLFNBQVMsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN6QyxPQUFPLFNBQVMsRUFBRSxFQUVoQixvQkFBb0IsRUFDcEIsU0FBUyxHQUNWLE1BQU0sV0FBVyxDQUFDO0FBQ25CLE9BQU8sTUFBTSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZDLE9BQU8sT0FBTyxNQUFNLGlCQUFpQixDQUFDO0FBSXRDLE9BQU8sUUFBUSxNQUFNLHdCQUF3QixDQUFDO0FBQzlDLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBQzNDLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBQzNDLE9BQU8sVUFBVSxNQUFNLDRCQUE0QixDQUFDO0FBRXBELE9BQU8sTUFBTSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hELE9BQU8sUUFBUSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVELE9BQU8sYUFBYSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2hFLE9BQU8sVUFBVSxNQUFNLGtDQUFrQyxDQUFDO0FBRTFELElBQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQy9CLFVBQUMsRUFBbUI7UUFBakIsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBO0lBQU8sT0FBQSxZQUN2QixPQUFPLEVBQUUsTUFBTSxJQUVaLENBQUMsUUFBUSxJQUFJO1FBQ2QsT0FBTyxFQUFFLEtBQUs7UUFDZCxhQUFhLEVBQUUsTUFBTTtLQUN0QixDQUFDLEVBQ0Y7QUFQdUIsQ0FPdkIsQ0FDSCxDQUFDO0FBRUYsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFzQixVQUFDLEVBQWlCO1FBQWYsS0FBSyxXQUFBLEVBQUUsTUFBTSxZQUFBO0lBQU8sT0FBQSxDQUFDO1FBQzdFLFlB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cnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERvd25zaGlmdCwge1xuICBDb250cm9sbGVyU3RhdGVBbmRIZWxwZXJzLFxuICB1c2VNdWx0aXBsZVNlbGVjdGlvbixcbiAgdXNlU2VsZWN0LFxufSBmcm9tICdkb3duc2hpZnQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgaXNFcXVhbCBmcm9tICdmYXN0LWRlZXAtZXF1YWwnO1xuXG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmltcG9ydCBCb2R5VGV4dCBmcm9tICcuLi9ib2R5LXRleHQvYm9keS10ZXh0JztcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcbmltcG9ydCBGbGV4Q29sdW1uIGZyb20gJy4uL2ZsZXgtY29sdW1uL2ZsZXgtY29sdW1uJztcblxuaW1wb3J0IFVwSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtYXJyb3ctdXAuc3ZnJztcbmltcG9ydCBEb3duSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtYXJyb3ctZG93bi5zdmcnO1xuaW1wb3J0IENoZWNrbWFya0ljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWNoZWNrbWFyay5zdmcnO1xuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWRlbGV0ZS5zdmcnO1xuXG5jb25zdCBTdHlsZWREcm9wZG93biA9IHN0eWxlZC5kaXY8eyBkaXNhYmxlZD86IGJvb2xlYW4gfT4oXG4gICh7IHRoZW1lLCBkaXNhYmxlZCB9KSA9PiAoe1xuICAgIG91dGxpbmU6ICdub25lJyxcblxuICAgIC4uLihkaXNhYmxlZCAmJiB7XG4gICAgICBvcGFjaXR5OiAnMC41JyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICB9KSxcbiAgfSlcbik7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KTx7IGlzT3BlbjogYm9vbGVhbiB9PigoeyB0aGVtZSwgaXNPcGVuIH0pID0+ICh7XG4gIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBoZWlnaHQ6IDM2LFxuICBwYWRkaW5nOiAnMCAxNnB4JyxcbiAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxuICAnOmhvdmVyLCA6YWN0aXZlJzoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcbiAgICBzdmc6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5UmVkLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmNvbnN0IEl0ZW1zQ29udGFpbmVyID0gc3R5bGVkLmRpdjx7IGlzT3BlbjogYm9vbGVhbiB9PigoeyB0aGVtZSwgaXNPcGVuIH0pID0+ICh7XG4gIGRpc3BsYXk6IGlzT3BlbiA/ICdpbmhlcml0JyA6ICdub25lJyxcbiAgbWFyZ2luVG9wOiA0LFxuICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG59KSk7XG5cbmNvbnN0IEl0ZW1Db250YWluZXIgPSBzdHlsZWQoRmxleFJvdykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIG1pbkhlaWdodDogMzYsXG4gIHBhZGRpbmc6ICc4cHggMTZweCcsXG4gICc6aG92ZXIsIDphY3RpdmUnOiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5Qmx1ZUhvdmVyLFxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgfSxcbn0pKTtcblxuY29uc3QgRGVsZXRlU3ZnSWNvbiA9IHN0eWxlZChTdmdJY29uKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBwYXRoOiB7XG4gICAgc3Ryb2tlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG4gIH0sXG4gICc6aG92ZXIsIDphY3RpdmUnOiB7XG4gICAgcGF0aDoge1xuICAgICAgc3Ryb2tlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5UmVkLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmNvbnN0IENsZWFyU3ZnSWNvbiA9IHN0eWxlZChTdmdJY29uKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBwYXRoOiB7XG4gICAgc3Ryb2tlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5XG4gIH1cbn0pKTtcblxuY29uc3QgTXVsdGlTZWxlY3RDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8eyBpc09wZW46IGJvb2xlYW4gfT4oXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gICAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICAgIHN2Zzoge1xuICAgICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmNvbnN0IFBsYWNlaG9sZGVyV3JhcHBlciA9IHN0eWxlZC5zcGFuKCh7IHRoZW1lIH0pID0+ICh7XG4gIHBhZGRpbmc6ICcwIDhweCcsXG59KSk7XG5cbmNvbnN0IENoaXBJdGVtQ29udGFpbmVyID0gc3R5bGVkLnNwYW4oKHsgdGhlbWUgfSkgPT4gKHtcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIHBhZGRpbmc6ICcycHggOHB4JyxcbiAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsVGVydHJpYXJ5LFxuICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcbn0pKTtcblxuY29uc3QgT3ZlcmZsb3dXcmFwcGVyID0gc3R5bGVkLnNwYW4oKHsgdGhlbWUgfSkgPT4gKHtcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxufSkpO1xuXG5jb25zdCBEcm9wZG93bkljb25XcmFwcGVyID0gc3R5bGVkKEZsZXhSb3cpKCh7IHRoZW1lIH0pID0+ICh7XG4gIHBhZGRpbmdSaWdodDogJzhweCcsXG4gIG1hcmdpbkxlZnQ6ICc4cHgnLFxufSkpO1xuXG5jb25zdCBDaGVja0ljb24gPSBzdHlsZWQoU3ZnSWNvbikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgcGF0aDoge1xuICAgIGZpbGw6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXG4gIH0sXG59KSk7XG5cbmNvbnN0IE11bHRpU2VsZWN0RGVsZXRlSWNvbiA9IHN0eWxlZChTdmdJY29uKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBwYXRoOiB7XG4gICAgc3Ryb2tlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICB9LFxuICAnOmhvdmVyLCA6YWN0aXZlJzoge1xuICAgIHBhdGg6IHtcbiAgICAgIHN0cm9rZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UmVkLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmV4cG9ydCB0eXBlIERyb3Bkb3duVmFsdWUgPSB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfTtcbmV4cG9ydCB0eXBlIERyb3Bkb3duSXRlbTxUID0gRHJvcGRvd25WYWx1ZT4gPSBUO1xuXG5leHBvcnQgdHlwZSBEcm9wZG93bkV2ZW50VmFsdWUgPSB7XG4gIHRhcmdldDoge1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgdmFsdWU6IERyb3Bkb3duVmFsdWUgfCBudWxsO1xuICB9O1xufTtcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xuICBpdGVtczogRHJvcGRvd25WYWx1ZVtdO1xuICB2YWx1ZT86IERyb3Bkb3duVmFsdWUgfCBudWxsO1xuICBsYWJlbD86IHN0cmluZztcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIGFyZUl0ZW1zUmVtb3ZhYmxlPzogYm9vbGVhbjtcbiAgaXNTZWFyY2hhYmxlPzogYm9vbGVhbjtcbiAgb25DaGFuZ2U/OiAoZXY6IERyb3Bkb3duRXZlbnRWYWx1ZSkgPT4gdm9pZDtcbiAgb25TZWxlY3Q/OiAoZXY6IERyb3Bkb3duRXZlbnRWYWx1ZSkgPT4gdm9pZDtcbiAgb25SZW1vdmU/OiAoZXY6IERyb3Bkb3duRXZlbnRWYWx1ZSkgPT4gdm9pZDtcblxuICBub0l0ZW1zTWVzc2FnZT86IHN0cmluZztcbn1cblxuY29uc3QgZ2V0Q2hhbmdlRXZlbnQgPSAodmFsdWU6IGFueSk6IERyb3Bkb3duRXZlbnRWYWx1ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGFyZ2V0OiB7XG4gICAgICBuYW1lOiB1bmRlZmluZWQsXG4gICAgICB2YWx1ZSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIERyb3Bkb3duKHByb3BzOiBEcm9wZG93blByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBpdGVtcyxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBsYWJlbCxcbiAgICBhcmVJdGVtc1JlbW92YWJsZSxcbiAgICB2YWx1ZSxcbiAgICBzdHlsZSxcbiAgICBvblNlbGVjdCxcbiAgICBvblJlbW92ZSxcbiAgICBub0l0ZW1zTWVzc2FnZSA9ICdObyBPcHRpb25zIScsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBnZXRDaGFuZ2VFdmVudCA9ICh2YWx1ZTogRHJvcGRvd25WYWx1ZSB8IG51bGwpOiBEcm9wZG93bkV2ZW50VmFsdWUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgbmFtZTogdW5kZWZpbmVkLFxuICAgICAgICB2YWx1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZW1vdmVJdGVtID0gKFxuICAgIGl0ZW06IERyb3Bkb3duSXRlbSxcbiAgICBldixcbiAgICBkb3duc2hpZnQ6IENvbnRyb2xsZXJTdGF0ZUFuZEhlbHBlcnM8RHJvcGRvd25JdGVtPlxuICApID0+IHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgY29uc3QgdmFsdWUgPSBpdGVtICYmIGl0ZW1WYWx1ZUdldHRlcihpdGVtKTtcbiAgICBvblJlbW92ZSAmJiBvblJlbW92ZShnZXRDaGFuZ2VFdmVudCh2YWx1ZSkpO1xuICB9O1xuXG4gIGNvbnN0IGl0ZW1WYWx1ZUdldHRlciA9IChpdGVtKSA9PiBpdGVtLnZhbHVlO1xuICBjb25zdCBpdGVtTmFtZUdldHRlciA9IChpdGVtKSA9PiBpdGVtLmxhYmVsO1xuXG4gIGNvbnN0IGhhbmRsZUl0ZW1TZWxlY3QgPSAoaXRlbSkgPT4ge1xuICAgIG9uU2VsZWN0ICYmIG9uU2VsZWN0KGl0ZW0pO1xuICB9O1xuXG4gIGNvbnN0IGdldEl0ZW1Ub1N0cmluZyA9IChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0gPT09IG51bGwpIHJldHVybiAnJztcbiAgICByZXR1cm4gdHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnID8gaXRlbSA6IGl0ZW0ubGFiZWw7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RG93bnNoaWZ0XG4gICAgICBpdGVtVG9TdHJpbmc9e2dldEl0ZW1Ub1N0cmluZ31cbiAgICAgIG9uU2VsZWN0PXtoYW5kbGVJdGVtU2VsZWN0fVxuICAgICAgc2VsZWN0ZWRJdGVtPXt2YWx1ZX1cbiAgICAgIHNlbGVjdGVkSXRlbUNoYW5nZWQ9eyhwcmV2SXRlbSwgaXRlbSkgPT4gIWlzRXF1YWwocHJldkl0ZW0sIGl0ZW0pfVxuICAgID5cbiAgICAgIHsoZG93bnNoaWZ0KSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBnZXRJdGVtUHJvcHMsXG4gICAgICAgICAgZ2V0TWVudVByb3BzLFxuICAgICAgICAgIGlzT3BlbixcbiAgICAgICAgICBzZWxlY3RlZEl0ZW0sXG4gICAgICAgICAgZ2V0Um9vdFByb3BzLFxuICAgICAgICAgIGdldFRvZ2dsZUJ1dHRvblByb3BzLFxuICAgICAgICB9ID0gZG93bnNoaWZ0O1xuXG4gICAgICAgIGNvbnN0IG5vSXRlbXMgPSAhKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8U3R5bGVkRHJvcGRvd25cbiAgICAgICAgICAgIHsuLi5nZXRSb290UHJvcHMoeyByZWZLZXk6ICdpbm5lclJlZicgfSl9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgICAgICA8Qm9keVRleHQgbGluZUhlaWdodD17J3hzJ30gc2l6ZT17MX0+XG4gICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgIHsuLi5nZXRUb2dnbGVCdXR0b25Qcm9wcygpfVxuICAgICAgICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgICAgICAgaXRlbXNTcGFjaW5nPXsxMH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJvZHlUZXh0XG4gICAgICAgICAgICAgICAgc2l6ZT17M31cbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PXsneHMnfVxuICAgICAgICAgICAgICAgIHZhcmlhdGlvbj17c2VsZWN0ZWRJdGVtID8gJ2luaGVyaXQnIDogJ2RhcmtHcmF5J31cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpdGVtTmFtZUdldHRlcihzZWxlY3RlZEl0ZW0pIHx8IHBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgICA8U3ZnSWNvbiBzcmM9e2lzT3BlbiA/IFVwSWNvbiA6IERvd25JY29ufSAvPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8SXRlbXNDb250YWluZXIgey4uLmdldE1lbnVQcm9wcygpfSBpc09wZW49e2lzT3Blbn0+XG4gICAgICAgICAgICAgIHtpc09wZW4gJiZcbiAgICAgICAgICAgICAgICAobm9JdGVtcyA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzhweCAxNnB4JywgcG9pbnRlckV2ZW50czogJ25vbmUnIH19PlxuICAgICAgICAgICAgICAgICAgICA8Qm9keVRleHRcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPXszfVxuICAgICAgICAgICAgICAgICAgICAgIHNjYWxlPXsneHMnfVxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9eyd4cyd9XG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uPVwiZGFya0dyYXlcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge25vSXRlbXNNZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBpc0VxdWFsKGl0ZW0sIHNlbGVjdGVkSXRlbSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8SXRlbUNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtpdGVtfS0ke2lkeH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNTcGFjaW5nPXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRJdGVtUHJvcHMoeyBpdGVtLCBpbmRleDogaWR4IH0pfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2R5VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtpc1NlbGVjdGVkID8gMSA6IDN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU9eyd4cyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9eyd4cyd9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtTmFtZUdldHRlcihpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YXJlSXRlbXNSZW1vdmFibGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlU3ZnSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17RGVsZXRlSWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXYpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVSZW1vdmVJdGVtKGl0ZW0sIGV2LCBkb3duc2hpZnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW1Db250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9JdGVtc0NvbnRhaW5lcj5cbiAgICAgICAgICA8L1N0eWxlZERyb3Bkb3duPlxuICAgICAgICApO1xuICAgICAgfX1cbiAgICA8L0Rvd25zaGlmdD5cbiAgKTtcbn1cblxuZXhwb3J0IHR5cGUgTXVsdGlEcm9wZG93blZhbHVlID0ge1xuICBsYWJlbDogc3RyaW5nO1xuICBjaGlwTGFiZWw/OiBzdHJpbmc7XG4gIGNoaXBOYW1lPzogc3RyaW5nO1xuICB2YWx1ZTogYW55O1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aVNlbGVjdERyb3Bkb3duUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xuICB2YWx1ZT86IE11bHRpRHJvcGRvd25WYWx1ZVtdO1xuICBpdGVtczogTXVsdGlEcm9wZG93blZhbHVlW107XG4gIGxhYmVsPzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG9uQ2hhbmdlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uU2VsZWN0PzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uUmVtb3ZlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uQ2xlYXJBbGxJdGVtcz86IChldjogRHJvcGRvd25FdmVudFZhbHVlKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTXVsdGlTZWxlY3REcm9wZG93bihwcm9wczogTXVsdGlTZWxlY3REcm9wZG93blByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBpdGVtcyxcbiAgICB2YWx1ZSxcbiAgICBsYWJlbCxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBkaXNhYmxlZCxcbiAgICBvblNlbGVjdCxcbiAgICBvbkNoYW5nZSxcbiAgICBvblJlbW92ZSxcbiAgICBvbkNsZWFyQWxsSXRlbXMsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7XG4gICAgZ2V0U2VsZWN0ZWRJdGVtUHJvcHMsXG4gICAgZ2V0RHJvcGRvd25Qcm9wcyxcbiAgICBhZGRTZWxlY3RlZEl0ZW0sXG4gICAgcmVtb3ZlU2VsZWN0ZWRJdGVtLFxuICAgIHNlbGVjdGVkSXRlbXMsXG4gICAgc2V0U2VsZWN0ZWRJdGVtcyxcbiAgICByZXNldCxcbiAgfSA9IHVzZU11bHRpcGxlU2VsZWN0aW9uPE11bHRpRHJvcGRvd25WYWx1ZT4oe1xuICAgIGluaXRpYWxTZWxlY3RlZEl0ZW1zOiB2YWx1ZSxcbiAgICBvblNlbGVjdGVkSXRlbXNDaGFuZ2U6IChjaGFuZ2VzKSA9PiB7XG4gICAgICBvblNlbGVjdCAmJiBvblNlbGVjdChnZXRDaGFuZ2VFdmVudChjaGFuZ2VzLnNlbGVjdGVkSXRlbXMpKTtcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCB7XG4gICAgaXNPcGVuLFxuICAgIHNlbGVjdGVkSXRlbSxcbiAgICBnZXRUb2dnbGVCdXR0b25Qcm9wcyxcbiAgICBnZXRMYWJlbFByb3BzLFxuICAgIGdldE1lbnVQcm9wcyxcbiAgICBnZXRJdGVtUHJvcHMsXG4gIH0gPSB1c2VTZWxlY3Qoe1xuICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcbiAgICBkZWZhdWx0SGlnaGxpZ2h0ZWRJbmRleDogMCwgLy8gYWZ0ZXIgc2VsZWN0aW9uLCBoaWdobGlnaHQgdGhlIGZpcnN0IGl0ZW0uXG4gICAgaXRlbXMsXG4gICAgc3RhdGVSZWR1Y2VyOiAoc3RhdGUsIGFjdGlvbkFuZENoYW5nZXMpID0+IHtcbiAgICAgIGNvbnN0IHsgY2hhbmdlcywgdHlwZSB9ID0gYWN0aW9uQW5kQ2hhbmdlcztcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIHVzZVNlbGVjdC5zdGF0ZUNoYW5nZVR5cGVzLlRvZ2dsZUJ1dHRvbktleURvd25FbnRlcjpcbiAgICAgICAgY2FzZSB1c2VTZWxlY3Quc3RhdGVDaGFuZ2VUeXBlcy5Ub2dnbGVCdXR0b25LZXlEb3duU3BhY2VCdXR0b246XG4gICAgICAgIGNhc2UgdXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMuSXRlbUNsaWNrOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5jaGFuZ2VzLFxuICAgICAgICAgICAgaXNPcGVuOiB0cnVlLCAvLyBrZWVwIHRoZSBtZW51IG9wZW4gYWZ0ZXIgc2VsZWN0aW9uLlxuICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGNoYW5nZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICBvblN0YXRlQ2hhbmdlOiAoeyB0eXBlLCBzZWxlY3RlZEl0ZW06IG5ld1NlbGVjdGVkSXRlbSB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSB1c2VTZWxlY3Quc3RhdGVDaGFuZ2VUeXBlcy5Ub2dnbGVCdXR0b25LZXlEb3duRW50ZXI6XG4gICAgICAgIGNhc2UgdXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMuVG9nZ2xlQnV0dG9uS2V5RG93blNwYWNlQnV0dG9uOlxuICAgICAgICBjYXNlIHVzZVNlbGVjdC5zdGF0ZUNoYW5nZVR5cGVzLkl0ZW1DbGljazpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBpc0FscmVhZHlTZWxlY3RlZCA9IHNlbGVjdGVkSXRlbXMuc29tZShcbiAgICAgICAgICAgICAgKGkpID0+IGkudmFsdWUgPT09IG5ld1NlbGVjdGVkSXRlbT8udmFsdWVcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmIChuZXdTZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgaWYgKGlzQWxyZWFkeVNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJdGVtcyhcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXMuZmlsdGVyKChpKSA9PiBpLnZhbHVlICE9PSBuZXdTZWxlY3RlZEl0ZW0udmFsdWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBvblJlbW92ZSAmJiBvblJlbW92ZShnZXRDaGFuZ2VFdmVudChuZXdTZWxlY3RlZEl0ZW0pKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRTZWxlY3RlZEl0ZW0obmV3U2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSAmJiBvbkNoYW5nZShnZXRDaGFuZ2VFdmVudChuZXdTZWxlY3RlZEl0ZW0pKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuICB9KTtcblxuICAvL0FsaWduIHJlc2V0dGluZyBzZWxlY3RlZCB2YWx1ZXMgaWYgdGhleSB3ZXJlIHJlc2V0IGluIHBhcmVudFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghdmFsdWUgfHwgdmFsdWUubGVuZ3RoIDwgMSkge1xuICAgICAgcmVzZXQoKTtcbiAgICB9XG4gIH0sIFt2YWx1ZV0pO1xuXG4gIGNvbnN0IGhhbmRsZUNsZWFyQWxsID0gKCkgPT4ge1xuICAgIG9uQ2xlYXJBbGxJdGVtcyAmJiBvbkNsZWFyQWxsSXRlbXMoZ2V0Q2hhbmdlRXZlbnQobnVsbCkpO1xuICAgIHJlc2V0KCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkRHJvcGRvd24gZGlzYWJsZWQ9e2Rpc2FibGVkfT5cbiAgICAgIDxGbGV4Q29sdW1uIGl0ZW1zU3BhY2luZz17NH0+XG4gICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgPEJvZHlUZXh0IGxpbmVIZWlnaHQ9eyd4cyd9IHsuLi5nZXRMYWJlbFByb3BzKCl9IHNpemU9ezF9PlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPE11bHRpU2VsZWN0Q29udGFpbmVyXG4gICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICB7Li4uZ2V0VG9nZ2xlQnV0dG9uUHJvcHMoe1xuICAgICAgICAgICAgICAuLi5nZXREcm9wZG93blByb3BzKHsgcHJldmVudEtleUFjdGlvbjogaXNPcGVuIH0pLFxuICAgICAgICAgICAgICBvbkNsaWNrOiAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSxcbiAgICAgICAgICAgICAgaXNPcGVuLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIDxCb2R5VGV4dFxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9eyd4cyd9XG4gICAgICAgICAgICAgICAgc2l6ZT17M31cbiAgICAgICAgICAgICAgICB2YXJpYXRpb249e3NlbGVjdGVkSXRlbSA/ICdpbmhlcml0JyA6ICdkYXJrR3JheSd9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8T3ZlcmZsb3dXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgPEZsZXhSb3cgZ2FwPXs4fSB3cmFwPXsnd3JhcCd9PlxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRJdGVtcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyV3JhcHBlcj57cGxhY2Vob2xkZXJ9PC9QbGFjZWhvbGRlcldyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcy5tYXAoKHNlbGVjdGVkSXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGlwSXRlbUNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BzZWxlY3RlZC1pdGVtLSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldFNlbGVjdGVkSXRlbVByb3BzKHsgc2VsZWN0ZWRJdGVtLCBpbmRleCB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhSb3cgYWxpZ249eydjZW50ZXInfSBnYXA9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEl0ZW0/LmNoaXBOYW1lICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb2R5VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PXsneHMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb249eydibGFjayd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEl0ZW0uY2hpcE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkSXRlbT8uY2hpcExhYmVsIHx8IHNlbGVjdGVkSXRlbT8ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE11bHRpU2VsZWN0RGVsZXRlSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVTZWxlY3RlZEl0ZW0oc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZShnZXRDaGFuZ2VFdmVudChzZWxlY3RlZEl0ZW0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsxNH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17RGVsZXRlSWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NoaXBJdGVtQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgICAgICAgICAgPC9PdmVyZmxvd1dyYXBwZXI+XG4gICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8RHJvcGRvd25JY29uV3JhcHBlcj5cbiAgICAgICAgICAgICAge29uQ2xlYXJBbGxJdGVtcyAmJiAhIXNlbGVjdGVkSXRlbXMubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgICA8Q2xlYXJTdmdJY29uXG4gICAgICAgICAgICAgICAgICBzcmM9e0RlbGV0ZUljb259XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGVhckFsbH1cbiAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPFN2Z0ljb24gc2l6ZT17MTZ9IHNyYz17aXNPcGVuID8gVXBJY29uIDogRG93bkljb259IC8+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duSWNvbldyYXBwZXI+XG4gICAgICAgICAgPC9NdWx0aVNlbGVjdENvbnRhaW5lcj5cbiAgICAgICAgICA8SXRlbXNDb250YWluZXIgey4uLmdldE1lbnVQcm9wcygpfSBpc09wZW49e2lzT3Blbn0+XG4gICAgICAgICAgICB7aXNPcGVuICYmXG4gICAgICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWRJdGVtcz8uc29tZShcbiAgICAgICAgICAgICAgICAgIChpKSA9PiBpLnZhbHVlID09PSBpdGVtLnZhbHVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEl0ZW1Db250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zU3BhY2luZz17MTB9XG4gICAgICAgICAgICAgICAgICAgIGtleT17YCR7aXRlbS52YWx1ZX0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgIHsuLi5nZXRJdGVtUHJvcHMoeyBpdGVtLCBpbmRleCB9KX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEJvZHlUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT17aXNTZWxlY3RlZCA/IDEgOiAzfVxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9eyd4cyd9XG4gICAgICAgICAgICAgICAgICAgICAgc2NhbGU9eyd4cyd9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9Cb2R5VGV4dD5cbiAgICAgICAgICAgICAgICAgICAge2lzU2VsZWN0ZWQgJiYgPENoZWNrSWNvbiBzaXplPXsxNH0gc3JjPXtDaGVja21hcmtJY29ufSAvPn1cbiAgICAgICAgICAgICAgICAgIDwvSXRlbUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L0l0ZW1zQ29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRmxleENvbHVtbj5cbiAgICA8L1N0eWxlZERyb3Bkb3duPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcbiJdfQ==