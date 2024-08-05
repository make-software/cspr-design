import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
var DropdownIconWrapper = styled.div(function (_a) {
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
            return (_jsxs(StyledDropdown, __assign({}, getRootProps({ refKey: 'innerRef' }), { style: style, tabIndex: "0" }, { children: [label && (_jsx(BodyText, __assign({ lineHeight: 'xs', size: 1 }, { children: label }))), _jsxs(Container, __assign({ isOpen: isOpen, align: "center", justify: "space-between" }, getToggleButtonProps(), { itemsSpacing: 10 }, { children: [_jsx(BodyText, __assign({ size: 3, lineHeight: 'xs', variation: selectedItem ? 'inherit' : 'darkGray', style: {
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                } }, { children: itemNameGetter(selectedItem) || placeholder })), _jsx(SvgIcon, { src: isOpen ? UpIcon : DownIcon })] })), _jsx(ItemsContainer, __assign({}, getMenuProps(), { isOpen: isOpen }, { children: isOpen &&
                            (noItems ? (_jsx("div", __assign({ style: { padding: '8px 16px', pointerEvents: 'none' } }, { children: _jsx(BodyText, __assign({ size: 3, scale: 'xs', lineHeight: 'xs', variation: "darkGray" }, { children: noItemsMessage })) }))) : (items.map(function (item, idx) {
                                var isSelected = isEqual(item, selectedItem);
                                return (_jsxs(ItemContainer, __assign({ align: "center", justify: "space-between", itemsSpacing: 10, isSelected: isSelected }, getItemProps({ item: item, index: idx }), { children: [_jsx(BodyText, __assign({ size: isSelected ? 1 : 3, style: {
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
    }), getSelectedItemProps = _a.getSelectedItemProps, getDropdownProps = _a.getDropdownProps, addSelectedItem = _a.addSelectedItem, removeSelectedItem = _a.removeSelectedItem, selectedItems = _a.selectedItems, setSelectedItems = _a.setSelectedItems;
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
    return (_jsx(StyledDropdown, __assign({ disabled: disabled }, { children: _jsxs(FlexColumn, __assign({ itemsSpacing: 4 }, { children: [label && (_jsx(BodyText, __assign({ lineHeight: 'xs', size: 1 }, getLabelProps(), { children: label }))), _jsxs("div", { children: [_jsxs(MultiSelectContainer, __assign({ isOpen: isOpen, align: "center", justify: "space-between" }, getToggleButtonProps(getDropdownProps({ preventKeyAction: isOpen })), { children: [_jsx("span", { children: _jsx(BodyText, __assign({ lineHeight: 'xs', size: 3, variation: selectedItem ? 'inherit' : 'darkGray' }, { children: _jsx(OverflowWrapper, { children: _jsx(FlexRow, __assign({ gap: 8, wrap: 'wrap' }, { children: selectedItems.length === 0 ? (_jsx(PlaceholderWrapper, { children: placeholder })) : (selectedItems.map(function (selectedItem, index) { return (_jsx(ChipItemContainer, __assign({}, getSelectedItemProps({ selectedItem: selectedItem, index: index }), { children: _jsxs(FlexRow, __assign({ align: 'center', gap: 4 }, { children: [(selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.chipLabel) || (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.label), _jsx(MultiSelectDeleteIcon, { onClick: function (event) {
                                                                    event.preventDefault();
                                                                    event.stopPropagation();
                                                                    removeSelectedItem(selectedItem);
                                                                }, size: 14, src: DeleteIcon })] })) }), "selected-item-".concat(index))); })) })) }) })) }), _jsxs(DropdownIconWrapper, { children: [onClearAllItems && (_jsx(ClearSvgIcon, { src: DeleteIcon, onClick: handleClearAll, marginRight: true })), _jsx(SvgIcon, { size: 16, src: isOpen ? UpIcon : DownIcon })] })] })), _jsx(ItemsContainer, __assign({}, getMenuProps(), { isOpen: isOpen }, { children: isOpen &&
                                items.map(function (item, index) {
                                    var isSelected = selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.some(function (i) { return i.value === item.value; });
                                    return (_jsxs(ItemContainer, __assign({ align: "center", justify: "space-between", itemsSpacing: 10 }, getItemProps({ item: item, index: index }), { children: [_jsx(BodyText, __assign({ size: isSelected ? 1 : 3, lineHeight: 'xs', scale: 'xs' }, { children: item.label })), isSelected && (_jsx(CheckIcon, { size: 14, src: CheckmarkIcon }))] }), "".concat(item.value).concat(index)));
                                }) }))] })] })) })));
}
export default Dropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxTQUFTLEVBQUUsRUFFaEIsb0JBQW9CLEVBQ3BCLFNBQVMsR0FDVixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLE1BQU0sTUFBTSxtQkFBbUIsQ0FBQztBQUN2QyxPQUFPLE9BQU8sTUFBTSxpQkFBaUIsQ0FBQztBQUl0QyxPQUFPLFFBQVEsTUFBTSx3QkFBd0IsQ0FBQztBQUM5QyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLFVBQVUsTUFBTSw0QkFBNEIsQ0FBQztBQUVwRCxPQUFPLE1BQU0sTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RCxPQUFPLFFBQVEsTUFBTSxzQ0FBc0MsQ0FBQztBQUM1RCxPQUFPLGFBQWEsTUFBTSxxQ0FBcUMsQ0FBQztBQUNoRSxPQUFPLFVBQVUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUxRCxJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUMvQixVQUFDLEVBQW1CO1FBQWpCLEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBQTtJQUFPLE9BQUEsWUFDdkIsT0FBTyxFQUFFLE1BQU0sSUFFWixDQUFDLFFBQVEsSUFBSTtRQUNkLE9BQU8sRUFBRSxLQUFLO1FBQ2QsYUFBYSxFQUFFLE1BQU07S0FDdEIsQ0FBQyxFQUNGO0FBUHVCLENBT3ZCLENBQ0gsQ0FBQztBQUVGLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBc0IsVUFBQyxFQUFpQjtRQUFmLEtBQUssV0FBQSxFQUFFLE1BQU0sWUFBQTtJQUFPLE9BQUEsQ0FBQztRQUM3RSxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJO1FBQ3JDLE1B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LENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN4QixVQUFVLEVBQUUsSUFBSSxFQUNoQixLQUFLLEVBQUUsSUFBSSxnQkFFVixJQUFJLENBQUMsS0FBSyxJQUNGLEVBQ1YsVUFBVSxJQUFJLENBQ2IsS0FBQyxTQUFTLElBQ1IsSUFBSSxFQUFFLEVBQUUsRUFDUixHQUFHLEVBQUUsYUFBYSxHQUNsQixDQUNILE1BZkksVUFBRyxJQUFJLENBQUMsS0FBSyxTQUFHLEtBQUssQ0FBRSxDQWdCZCxDQUNqQixDQUFDO2dDQUNKLENBQUMsQ0FBQyxJQUNXLElBQ2IsS0FDSyxJQUNFLENBQ2xCLENBQUM7QUFDSixDQUFDO0FBRUQsZUFBZSxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IERvd25zaGlmdCwge1xuICBDb250cm9sbGVyU3RhdGVBbmRIZWxwZXJzLFxuICB1c2VNdWx0aXBsZVNlbGVjdGlvbixcbiAgdXNlU2VsZWN0LFxufSBmcm9tICdkb3duc2hpZnQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgaXNFcXVhbCBmcm9tICdmYXN0LWRlZXAtZXF1YWwnO1xuXG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmltcG9ydCBCb2R5VGV4dCBmcm9tICcuLi9ib2R5LXRleHQvYm9keS10ZXh0JztcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcbmltcG9ydCBGbGV4Q29sdW1uIGZyb20gJy4uL2ZsZXgtY29sdW1uL2ZsZXgtY29sdW1uJztcblxuaW1wb3J0IFVwSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtYXJyb3ctdXAuc3ZnJztcbmltcG9ydCBEb3duSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtYXJyb3ctZG93bi5zdmcnO1xuaW1wb3J0IENoZWNrbWFya0ljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWNoZWNrbWFyay5zdmcnO1xuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWRlbGV0ZS5zdmcnO1xuXG5jb25zdCBTdHlsZWREcm9wZG93biA9IHN0eWxlZC5kaXY8eyBkaXNhYmxlZD86IGJvb2xlYW4gfT4oXG4gICh7IHRoZW1lLCBkaXNhYmxlZCB9KSA9PiAoe1xuICAgIG91dGxpbmU6ICdub25lJyxcblxuICAgIC4uLihkaXNhYmxlZCAmJiB7XG4gICAgICBvcGFjaXR5OiAnMC41JyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICB9KSxcbiAgfSlcbik7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KTx7IGlzT3BlbjogYm9vbGVhbiB9PigoeyB0aGVtZSwgaXNPcGVuIH0pID0+ICh7XG4gIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBoZWlnaHQ6IDM2LFxuICBwYWRkaW5nOiAnMCAxNnB4JyxcbiAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxuICAnOmhvdmVyLCA6YWN0aXZlJzoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcbiAgICBzdmc6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5UmVkLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmNvbnN0IEl0ZW1zQ29udGFpbmVyID0gc3R5bGVkLmRpdjx7IGlzT3BlbjogYm9vbGVhbiB9PigoeyB0aGVtZSwgaXNPcGVuIH0pID0+ICh7XG4gIGRpc3BsYXk6IGlzT3BlbiA/ICdpbmhlcml0JyA6ICdub25lJyxcbiAgbWFyZ2luVG9wOiA0LFxuICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG59KSk7XG5cbmNvbnN0IEl0ZW1Db250YWluZXIgPSBzdHlsZWQoRmxleFJvdykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIG1pbkhlaWdodDogMzYsXG4gIHBhZGRpbmc6ICc4cHggMTZweCcsXG4gICc6aG92ZXIsIDphY3RpdmUnOiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5Qmx1ZUhvdmVyLFxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgfSxcbn0pKTtcblxuY29uc3QgRGVsZXRlU3ZnSWNvbiA9IHN0eWxlZChTdmdJY29uKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBwYXRoOiB7XG4gICAgc3Ryb2tlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG4gIH0sXG4gICc6aG92ZXIsIDphY3RpdmUnOiB7XG4gICAgcGF0aDoge1xuICAgICAgc3Ryb2tlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5UmVkLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmNvbnN0IENsZWFyU3ZnSWNvbiA9IHN0eWxlZChTdmdJY29uKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBwYXRoOiB7XG4gICAgc3Ryb2tlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5XG4gIH1cbn0pKTtcblxuY29uc3QgTXVsdGlTZWxlY3RDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8eyBpc09wZW46IGJvb2xlYW4gfT4oXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gICAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICAgIHN2Zzoge1xuICAgICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmNvbnN0IFBsYWNlaG9sZGVyV3JhcHBlciA9IHN0eWxlZC5zcGFuKCh7IHRoZW1lIH0pID0+ICh7XG4gIHBhZGRpbmc6ICcwIDhweCcsXG59KSk7XG5cbmNvbnN0IENoaXBJdGVtQ29udGFpbmVyID0gc3R5bGVkLnNwYW4oKHsgdGhlbWUgfSkgPT4gKHtcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIHBhZGRpbmc6ICcycHggOHB4JyxcbiAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsVGVydHJpYXJ5LFxuICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcbn0pKTtcblxuY29uc3QgT3ZlcmZsb3dXcmFwcGVyID0gc3R5bGVkLnNwYW4oKHsgdGhlbWUgfSkgPT4gKHtcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxufSkpO1xuXG5jb25zdCBEcm9wZG93bkljb25XcmFwcGVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBwYWRkaW5nUmlnaHQ6ICc4cHgnLFxuICBtYXJnaW5MZWZ0OiAnOHB4Jyxcbn0pKTtcblxuY29uc3QgQ2hlY2tJY29uID0gc3R5bGVkKFN2Z0ljb24pKCh7IHRoZW1lIH0pID0+ICh7XG4gIHBhdGg6IHtcbiAgICBmaWxsOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICB9LFxufSkpO1xuXG5jb25zdCBNdWx0aVNlbGVjdERlbGV0ZUljb24gPSBzdHlsZWQoU3ZnSWNvbikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgcGF0aDoge1xuICAgIHN0cm9rZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgfSxcbiAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICBwYXRoOiB7XG4gICAgICBzdHJva2U6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFJlZCxcbiAgICB9LFxuICB9LFxufSkpO1xuXG5leHBvcnQgdHlwZSBEcm9wZG93blZhbHVlID0geyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH07XG5leHBvcnQgdHlwZSBEcm9wZG93bkl0ZW08VCA9IERyb3Bkb3duVmFsdWU+ID0gVDtcblxuZXhwb3J0IHR5cGUgRHJvcGRvd25FdmVudFZhbHVlID0ge1xuICB0YXJnZXQ6IHtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHZhbHVlOiBEcm9wZG93blZhbHVlIHwgbnVsbDtcbiAgfTtcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBEcm9wZG93blByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgaXRlbXM6IERyb3Bkb3duVmFsdWVbXTtcbiAgdmFsdWU/OiBEcm9wZG93blZhbHVlIHwgbnVsbDtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBhcmVJdGVtc1JlbW92YWJsZT86IGJvb2xlYW47XG4gIGlzU2VhcmNoYWJsZT86IGJvb2xlYW47XG4gIG9uQ2hhbmdlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uU2VsZWN0PzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uUmVtb3ZlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG5cbiAgbm9JdGVtc01lc3NhZ2U/OiBzdHJpbmc7XG59XG5cbmNvbnN0IGdldENoYW5nZUV2ZW50ID0gKHZhbHVlOiBhbnkpOiBEcm9wZG93bkV2ZW50VmFsdWUgPT4ge1xuICByZXR1cm4ge1xuICAgIHRhcmdldDoge1xuICAgICAgbmFtZTogdW5kZWZpbmVkLFxuICAgICAgdmFsdWUsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBEcm9wZG93bihwcm9wczogRHJvcGRvd25Qcm9wcykge1xuICBjb25zdCB7XG4gICAgaXRlbXMsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgbGFiZWwsXG4gICAgYXJlSXRlbXNSZW1vdmFibGUsXG4gICAgdmFsdWUsXG4gICAgc3R5bGUsXG4gICAgb25TZWxlY3QsXG4gICAgb25SZW1vdmUsXG4gICAgbm9JdGVtc01lc3NhZ2UgPSAnTm8gT3B0aW9ucyEnLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZ2V0Q2hhbmdlRXZlbnQgPSAodmFsdWU6IERyb3Bkb3duVmFsdWUgfCBudWxsKTogRHJvcGRvd25FdmVudFZhbHVlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdGFyZ2V0OiB7XG4gICAgICAgIG5hbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgdmFsdWUsXG4gICAgICB9LFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlSXRlbSA9IChcbiAgICBpdGVtOiBEcm9wZG93bkl0ZW0sXG4gICAgZXYsXG4gICAgZG93bnNoaWZ0OiBDb250cm9sbGVyU3RhdGVBbmRIZWxwZXJzPERyb3Bkb3duSXRlbT5cbiAgKSA9PiB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGNvbnN0IHZhbHVlID0gaXRlbSAmJiBpdGVtVmFsdWVHZXR0ZXIoaXRlbSk7XG4gICAgb25SZW1vdmUgJiYgb25SZW1vdmUoZ2V0Q2hhbmdlRXZlbnQodmFsdWUpKTtcbiAgfTtcblxuICBjb25zdCBpdGVtVmFsdWVHZXR0ZXIgPSAoaXRlbSkgPT4gaXRlbS52YWx1ZTtcbiAgY29uc3QgaXRlbU5hbWVHZXR0ZXIgPSAoaXRlbSkgPT4gaXRlbS5sYWJlbDtcblxuICBjb25zdCBoYW5kbGVJdGVtU2VsZWN0ID0gKGl0ZW0pID0+IHtcbiAgICBvblNlbGVjdCAmJiBvblNlbGVjdChpdGVtKTtcbiAgfTtcblxuICBjb25zdCBnZXRJdGVtVG9TdHJpbmcgPSAoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtID09PSBudWxsKSByZXR1cm4gJyc7XG4gICAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyA/IGl0ZW0gOiBpdGVtLmxhYmVsO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERvd25zaGlmdFxuICAgICAgaXRlbVRvU3RyaW5nPXtnZXRJdGVtVG9TdHJpbmd9XG4gICAgICBvblNlbGVjdD17aGFuZGxlSXRlbVNlbGVjdH1cbiAgICAgIHNlbGVjdGVkSXRlbT17dmFsdWV9XG4gICAgICBzZWxlY3RlZEl0ZW1DaGFuZ2VkPXsocHJldkl0ZW0sIGl0ZW0pID0+ICFpc0VxdWFsKHByZXZJdGVtLCBpdGVtKX1cbiAgICA+XG4gICAgICB7KGRvd25zaGlmdCkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgZ2V0SXRlbVByb3BzLFxuICAgICAgICAgIGdldE1lbnVQcm9wcyxcbiAgICAgICAgICBpc09wZW4sXG4gICAgICAgICAgc2VsZWN0ZWRJdGVtLFxuICAgICAgICAgIGdldFJvb3RQcm9wcyxcbiAgICAgICAgICBnZXRUb2dnbGVCdXR0b25Qcm9wcyxcbiAgICAgICAgfSA9IGRvd25zaGlmdDtcblxuICAgICAgICBjb25zdCBub0l0ZW1zID0gIShpdGVtcyAmJiBpdGVtcy5sZW5ndGgpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFN0eWxlZERyb3Bkb3duXG4gICAgICAgICAgICB7Li4uZ2V0Um9vdFByb3BzKHsgcmVmS2V5OiAnaW5uZXJSZWYnIH0pfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgICAgICA8Qm9keVRleHQgbGluZUhlaWdodD17J3hzJ30gc2l6ZT17MX0+XG4gICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICB7Li4uZ2V0VG9nZ2xlQnV0dG9uUHJvcHMoKX1cbiAgICAgICAgICAgICAgaXRlbXNTcGFjaW5nPXsxMH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJvZHlUZXh0XG4gICAgICAgICAgICAgICAgc2l6ZT17M31cbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PXsneHMnfVxuICAgICAgICAgICAgICAgIHZhcmlhdGlvbj17c2VsZWN0ZWRJdGVtID8gJ2luaGVyaXQnIDogJ2RhcmtHcmF5J31cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpdGVtTmFtZUdldHRlcihzZWxlY3RlZEl0ZW0pIHx8IHBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgICA8U3ZnSWNvbiBzcmM9e2lzT3BlbiA/IFVwSWNvbiA6IERvd25JY29ufSAvPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8SXRlbXNDb250YWluZXIgey4uLmdldE1lbnVQcm9wcygpfSBpc09wZW49e2lzT3Blbn0+XG4gICAgICAgICAgICAgIHtpc09wZW4gJiZcbiAgICAgICAgICAgICAgICAobm9JdGVtcyA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzhweCAxNnB4JywgcG9pbnRlckV2ZW50czogJ25vbmUnIH19PlxuICAgICAgICAgICAgICAgICAgICA8Qm9keVRleHRcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPXszfVxuICAgICAgICAgICAgICAgICAgICAgIHNjYWxlPXsneHMnfVxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9eyd4cyd9XG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uPVwiZGFya0dyYXlcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge25vSXRlbXNNZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBpc0VxdWFsKGl0ZW0sIHNlbGVjdGVkSXRlbSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8SXRlbUNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtpdGVtfS0ke2lkeH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNTcGFjaW5nPXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0SXRlbVByb3BzKHsgaXRlbSwgaW5kZXg6IGlkeCB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9keVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17aXNTZWxlY3RlZCA/IDEgOiAzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlPXsneHMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PXsneHMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbU5hbWVHZXR0ZXIoaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAge2FyZUl0ZW1zUmVtb3ZhYmxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZVN2Z0ljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e0RlbGV0ZUljb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUmVtb3ZlSXRlbShpdGVtLCBldiwgZG93bnNoaWZ0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9JdGVtQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvSXRlbXNDb250YWluZXI+XG4gICAgICAgICAgPC9TdHlsZWREcm9wZG93bj5cbiAgICAgICAgKTtcbiAgICAgIH19XG4gICAgPC9Eb3duc2hpZnQ+XG4gICk7XG59XG5cbmV4cG9ydCB0eXBlIE11bHRpRHJvcGRvd25WYWx1ZSA9IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgY2hpcExhYmVsPzogc3RyaW5nO1xuICB2YWx1ZTogYW55O1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aVNlbGVjdERyb3Bkb3duUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xuICB2YWx1ZT86IE11bHRpRHJvcGRvd25WYWx1ZVtdO1xuICBpdGVtczogTXVsdGlEcm9wZG93blZhbHVlW107XG4gIGxhYmVsPzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG9uQ2hhbmdlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uU2VsZWN0PzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uUmVtb3ZlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uQ2xlYXJBbGxJdGVtcz86IChldjogRHJvcGRvd25FdmVudFZhbHVlKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTXVsdGlTZWxlY3REcm9wZG93bihwcm9wczogTXVsdGlTZWxlY3REcm9wZG93blByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBpdGVtcyxcbiAgICB2YWx1ZSxcbiAgICBsYWJlbCxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBkaXNhYmxlZCxcbiAgICBvblNlbGVjdCxcbiAgICBvbkNoYW5nZSxcbiAgICBvblJlbW92ZSxcbiAgICBvbkNsZWFyQWxsSXRlbXNcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHtcbiAgICBnZXRTZWxlY3RlZEl0ZW1Qcm9wcyxcbiAgICBnZXREcm9wZG93blByb3BzLFxuICAgIGFkZFNlbGVjdGVkSXRlbSxcbiAgICByZW1vdmVTZWxlY3RlZEl0ZW0sXG4gICAgc2VsZWN0ZWRJdGVtcyxcbiAgICBzZXRTZWxlY3RlZEl0ZW1zLFxuICB9ID0gdXNlTXVsdGlwbGVTZWxlY3Rpb248TXVsdGlEcm9wZG93blZhbHVlPih7XG4gICAgaW5pdGlhbFNlbGVjdGVkSXRlbXM6IHZhbHVlLFxuICAgIG9uU2VsZWN0ZWRJdGVtc0NoYW5nZTogKGNoYW5nZXMpID0+IHtcbiAgICAgIG9uU2VsZWN0ICYmIG9uU2VsZWN0KGdldENoYW5nZUV2ZW50KGNoYW5nZXMuc2VsZWN0ZWRJdGVtcykpO1xuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IHtcbiAgICBpc09wZW4sXG4gICAgc2VsZWN0ZWRJdGVtLFxuICAgIGdldFRvZ2dsZUJ1dHRvblByb3BzLFxuICAgIGdldExhYmVsUHJvcHMsXG4gICAgZ2V0TWVudVByb3BzLFxuICAgIGdldEl0ZW1Qcm9wcyxcbiAgfSA9IHVzZVNlbGVjdCh7XG4gICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxuICAgIGRlZmF1bHRIaWdobGlnaHRlZEluZGV4OiAwLCAvLyBhZnRlciBzZWxlY3Rpb24sIGhpZ2hsaWdodCB0aGUgZmlyc3QgaXRlbS5cbiAgICBpdGVtcyxcbiAgICBzdGF0ZVJlZHVjZXI6IChzdGF0ZSwgYWN0aW9uQW5kQ2hhbmdlcykgPT4ge1xuICAgICAgY29uc3QgeyBjaGFuZ2VzLCB0eXBlIH0gPSBhY3Rpb25BbmRDaGFuZ2VzO1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgdXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMuVG9nZ2xlQnV0dG9uS2V5RG93bkVudGVyOlxuICAgICAgICBjYXNlIHVzZVNlbGVjdC5zdGF0ZUNoYW5nZVR5cGVzLlRvZ2dsZUJ1dHRvbktleURvd25TcGFjZUJ1dHRvbjpcbiAgICAgICAgY2FzZSB1c2VTZWxlY3Quc3RhdGVDaGFuZ2VUeXBlcy5JdGVtQ2xpY2s6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmNoYW5nZXMsXG4gICAgICAgICAgICBpc09wZW46IHRydWUsIC8vIGtlZXAgdGhlIG1lbnUgb3BlbiBhZnRlciBzZWxlY3Rpb24uXG4gICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gY2hhbmdlcztcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uU3RhdGVDaGFuZ2U6ICh7IHR5cGUsIHNlbGVjdGVkSXRlbTogbmV3U2VsZWN0ZWRJdGVtIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIHVzZVNlbGVjdC5zdGF0ZUNoYW5nZVR5cGVzLlRvZ2dsZUJ1dHRvbktleURvd25FbnRlcjpcbiAgICAgICAgY2FzZSB1c2VTZWxlY3Quc3RhdGVDaGFuZ2VUeXBlcy5Ub2dnbGVCdXR0b25LZXlEb3duU3BhY2VCdXR0b246XG4gICAgICAgIGNhc2UgdXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMuSXRlbUNsaWNrOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGlzQWxyZWFkeVNlbGVjdGVkID0gc2VsZWN0ZWRJdGVtcy5zb21lKFxuICAgICAgICAgICAgICAoaSkgPT4gaS52YWx1ZSA9PT0gbmV3U2VsZWN0ZWRJdGVtPy52YWx1ZVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKG5ld1NlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgICBpZiAoaXNBbHJlYWR5U2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVTZWxlY3RlZEl0ZW0obmV3U2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgICAgICBvblJlbW92ZSAmJiBvblJlbW92ZShnZXRDaGFuZ2VFdmVudChuZXdTZWxlY3RlZEl0ZW0pKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRTZWxlY3RlZEl0ZW0obmV3U2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSAmJiBvbkNoYW5nZShnZXRDaGFuZ2VFdmVudChuZXdTZWxlY3RlZEl0ZW0pKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVDbGVhckFsbCA9ICgpID0+IHtcbiAgICBvbkNsZWFyQWxsSXRlbXMgJiYgb25DbGVhckFsbEl0ZW1zKGdldENoYW5nZUV2ZW50KG51bGwpKTtcbiAgICBzZXRTZWxlY3RlZEl0ZW1zKFtdKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWREcm9wZG93biBkaXNhYmxlZD17ZGlzYWJsZWR9PlxuICAgICAgPEZsZXhDb2x1bW4gaXRlbXNTcGFjaW5nPXs0fT5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8Qm9keVRleHQgbGluZUhlaWdodD17J3hzJ30gc2l6ZT17MX0gey4uLmdldExhYmVsUHJvcHMoKX0+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9Cb2R5VGV4dD5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TXVsdGlTZWxlY3RDb250YWluZXJcbiAgICAgICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgey4uLmdldFRvZ2dsZUJ1dHRvblByb3BzKFxuICAgICAgICAgICAgICBnZXREcm9wZG93blByb3BzKHsgcHJldmVudEtleUFjdGlvbjogaXNPcGVuIH0pXG4gICAgICAgICAgICApfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8Qm9keVRleHRcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PXsneHMnfVxuICAgICAgICAgICAgICAgIHNpemU9ezN9XG4gICAgICAgICAgICAgICAgdmFyaWF0aW9uPXtzZWxlY3RlZEl0ZW0gPyAnaW5oZXJpdCcgOiAnZGFya0dyYXknfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE92ZXJmbG93V3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgIDxGbGV4Um93IGdhcD17OH0gd3JhcD17J3dyYXAnfT5cbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkSXRlbXMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlcldyYXBwZXI+e3BsYWNlaG9sZGVyfTwvUGxhY2Vob2xkZXJXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXMubWFwKChzZWxlY3RlZEl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hpcEl0ZW1Db250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgc2VsZWN0ZWQtaXRlbS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRTZWxlY3RlZEl0ZW1Qcm9wcyh7IHNlbGVjdGVkSXRlbSwgaW5kZXggfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Um93IGFsaWduPXsnY2VudGVyJ30gZ2FwPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRJdGVtPy5jaGlwTGFiZWwgfHwgc2VsZWN0ZWRJdGVtPy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlTZWxlY3REZWxldGVJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVNlbGVjdGVkSXRlbShzZWxlY3RlZEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezE0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtEZWxldGVJY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2hpcEl0ZW1Db250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvRmxleFJvdz5cbiAgICAgICAgICAgICAgICA8L092ZXJmbG93V3JhcHBlcj5cbiAgICAgICAgICAgICAgPC9Cb2R5VGV4dD5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxEcm9wZG93bkljb25XcmFwcGVyPlxuICAgICAgICAgICAgICB7b25DbGVhckFsbEl0ZW1zICYmICg8Q2xlYXJTdmdJY29uIHNyYz17RGVsZXRlSWNvbn0gb25DbGljaz17aGFuZGxlQ2xlYXJBbGx9IG1hcmdpblJpZ2h0Lz4pfVxuICAgICAgICAgICAgICA8U3ZnSWNvbiBzaXplPXsxNn0gc3JjPXtpc09wZW4gPyBVcEljb24gOiBEb3duSWNvbn0gLz5cbiAgICAgICAgICAgIDwvRHJvcGRvd25JY29uV3JhcHBlcj5cbiAgICAgICAgICA8L011bHRpU2VsZWN0Q29udGFpbmVyPlxuICAgICAgICAgIDxJdGVtc0NvbnRhaW5lciB7Li4uZ2V0TWVudVByb3BzKCl9IGlzT3Blbj17aXNPcGVufT5cbiAgICAgICAgICAgIHtpc09wZW4gJiZcbiAgICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZEl0ZW1zPy5zb21lKFxuICAgICAgICAgICAgICAgICAgKGkpID0+IGkudmFsdWUgPT09IGl0ZW0udmFsdWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8SXRlbUNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNTcGFjaW5nPXsxMH1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtpdGVtLnZhbHVlfSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgey4uLmdldEl0ZW1Qcm9wcyh7IGl0ZW0sIGluZGV4IH0pfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Qm9keVRleHRcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPXtpc1NlbGVjdGVkID8gMSA6IDN9XG4gICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodD17J3hzJ31cbiAgICAgICAgICAgICAgICAgICAgICBzY2FsZT17J3hzJ31cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgICAgICAgICB7aXNTZWxlY3RlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MTR9XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e0NoZWNrbWFya0ljb259XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvSXRlbUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L0l0ZW1zQ29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRmxleENvbHVtbj5cbiAgICA8L1N0eWxlZERyb3Bkb3duPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcbiJdfQ==