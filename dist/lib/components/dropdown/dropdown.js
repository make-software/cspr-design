import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Downshift, { useMultipleSelection, useSelect, } from 'downshift';
import styled from 'styled-components';
import isEqual from 'fast-deep-equal';
import BodyText from '../body-text/body-text';
import FlexRow from '../flex-row/flex-row';
import SvgIcon from '../svg-icon/svg-icon';
import FlexColumn from "../flex-column/flex-column";
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
var DeleteIcon = styled(SvgIcon)(function (_a) {
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
                                } }, { children: itemNameGetter(selectedItem) || placeholder })), _jsx(SvgIcon, { src: isOpen
                                    ? 'assets/icons/ic-arrow-up.svg'
                                    : 'assets/icons/ic-arrow-down.svg' })] })), _jsx(ItemsContainer, __assign({}, getMenuProps(), { isOpen: isOpen }, { children: isOpen &&
                            (noItems ? (_jsx("div", __assign({ style: { padding: '8px 16px', pointerEvents: 'none' } }, { children: _jsx(BodyText, __assign({ size: 3, scale: 'xs', lineHeight: 'xs', variation: "darkGray" }, { children: noItemsMessage })) }))) : (items.map(function (item, idx) {
                                var isSelected = isEqual(item, selectedItem);
                                return (_jsxs(ItemContainer, __assign({ align: "center", justify: "space-between", itemsSpacing: 10, isSelected: isSelected }, getItemProps({ item: item, index: idx }), { children: [_jsx(BodyText, __assign({ size: isSelected ? 1 : 3, style: {
                                                overflow: 'hidden',
                                                whiteSpace: 'nowrap',
                                                textOverflow: 'ellipsis',
                                            }, scale: 'xs', lineHeight: 'xs' }, { children: itemNameGetter(item) })), areItemsRemovable && (_jsx(DeleteIcon, { src: "assets/icons/ic-delete.svg", onClick: function (ev) {
                                                return handleRemoveItem(item, ev, downshift);
                                            } }))] }), "".concat(item, "-").concat(idx)));
                            }))) }))] })));
        } })));
}
export function MultiSelectDropdown(props) {
    var items = props.items, value = props.value, label = props.label, placeholder = props.placeholder, disabled = props.disabled, onSelect = props.onSelect, onChange = props.onChange, onRemove = props.onRemove;
    var _a = useMultipleSelection({
        initialSelectedItems: value,
        onSelectedItemsChange: function (changes) {
            onSelect && onSelect(getChangeEvent(changes.selectedItems));
        },
    }), getSelectedItemProps = _a.getSelectedItemProps, getDropdownProps = _a.getDropdownProps, addSelectedItem = _a.addSelectedItem, removeSelectedItem = _a.removeSelectedItem, selectedItems = _a.selectedItems;
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
    return (_jsx(StyledDropdown, __assign({ disabled: disabled }, { children: _jsxs(FlexColumn, __assign({ itemsSpacing: 4 }, { children: [label && (_jsx(BodyText, __assign({ lineHeight: 'xs', size: 1 }, getLabelProps(), { children: label }))), _jsxs("div", { children: [_jsxs(MultiSelectContainer, __assign({ isOpen: isOpen, align: "center", justify: "space-between" }, getToggleButtonProps(getDropdownProps({ preventKeyAction: isOpen })), { children: [_jsx("span", { children: _jsx(BodyText, __assign({ lineHeight: 'xs', size: 3, variation: selectedItem ? 'inherit' : 'darkGray' }, { children: _jsx(OverflowWrapper, { children: _jsx(FlexRow, __assign({ gap: 8, wrap: 'wrap' }, { children: selectedItems.length === 0 ? (_jsx(PlaceholderWrapper, { children: placeholder })) : (selectedItems.map(function (selectedItem, index) { return (_jsx(ChipItemContainer, __assign({}, getSelectedItemProps({ selectedItem: selectedItem, index: index }), { children: _jsxs(FlexRow, __assign({ align: 'center', gap: 4 }, { children: [(selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.chipLabel) || (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.label), _jsx(MultiSelectDeleteIcon, { onClick: function (event) {
                                                                    event.preventDefault();
                                                                    event.stopPropagation();
                                                                    removeSelectedItem(selectedItem);
                                                                }, size: 14, src: 'assets/icons/ic-delete.svg' })] })) }), "selected-item-".concat(index))); })) })) }) })) }), _jsx(DropdownIconWrapper, { children: _jsx(SvgIcon, { size: 16, src: isOpen
                                            ? 'assets/icons/ic-arrow-up.svg'
                                            : 'assets/icons/ic-arrow-down.svg' }) })] })), _jsx(ItemsContainer, __assign({}, getMenuProps(), { isOpen: isOpen }, { children: isOpen &&
                                items.map(function (item, index) {
                                    var isSelected = selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.some(function (i) { return i.value === item.value; });
                                    return (_jsxs(ItemContainer, __assign({ align: "center", justify: "space-between", itemsSpacing: 10 }, getItemProps({ item: item, index: index }), { children: [_jsx(BodyText, __assign({ size: isSelected ? 1 : 3, lineHeight: 'xs', scale: 'xs' }, { children: item.label })), isSelected && (_jsx(CheckIcon, { size: 14, src: 'assets/icons/ic-checkmark.svg' }))] }), "".concat(item.value).concat(index)));
                                }) }))] })] })) })));
}
export default Dropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxTQUFTLEVBQUUsRUFFaEIsb0JBQW9CLEVBQ3BCLFNBQVMsR0FDVixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLE1BQU0sTUFBTSxtQkFBbUIsQ0FBQztBQUN2QyxPQUFPLE9BQU8sTUFBTSxpQkFBaUIsQ0FBQztBQUl0QyxPQUFPLFFBQVEsTUFBTSx3QkFBd0IsQ0FBQztBQUM5QyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLFVBQVUsTUFBTSw0QkFBNEIsQ0FBQztBQUVwRCxJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUM3QixVQUFDLEVBQW1CO1FBQWpCLEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBQTtJQUFPLE9BQUEsWUFDdkIsT0FBTyxFQUFFLE1BQU0sSUFFWixDQUFDLFFBQVEsSUFBSTtRQUNkLE9BQU8sRUFBRSxLQUFLO1FBQ2QsYUFBYSxFQUFFLE1BQU07S0FDdEIsQ0FBQyxFQUNGO0FBUHVCLENBT3ZCLENBQ0wsQ0FBQztBQUVGLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBc0IsVUFBQyxFQUFpQjtRQUFmLEtBQUssV0FBQSxFQUFFLE1BQU0sWUFBQTtJQUFPLE9BQUEsQ0FBQztRQUM3RSxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJO1FBQ3JDLE1BQU0sRUFBRSxNQUFNO1FBQ2QsTUFBTSxFQUFFLEVBQUU7UUFDVixPQUFPLEVBQUUsUUFBUTtRQUNqQixVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWE7UUFDaEQsaUJBQWlCLEVBQUU7WUFDakIsVUFBVSxFQUFFLEtB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QUFJLEVBQUUsS0FBSztvQ0FDcEIsSUFBTSxVQUFVLEdBQUcsYUFBYSxhQUFiLGFBQWEsdUJBQWIsYUFBYSxDQUFFLElBQUksQ0FDbEMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQXRCLENBQXNCLENBQ2hDLENBQUM7b0NBQ0YsT0FBTyxDQUNILE1BQUMsYUFBYSxhQUNWLEtBQUssRUFBQyxRQUFRLEVBQ2QsT0FBTyxFQUFDLGVBQWUsRUFDdkIsWUFBWSxFQUFFLEVBQUUsSUFFWixZQUFZLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLGVBRW5DLEtBQUMsUUFBUSxhQUNMLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN4QixVQUFVLEVBQUUsSUFBSSxFQUNoQixLQUFLLEVBQUUsSUFBSSxnQkFFWixJQUFJLENBQUMsS0FBSyxJQUNGLEVBQ1YsVUFBVSxJQUFJLENBQ1gsS0FBQyxTQUFTLElBQ04sSUFBSSxFQUFFLEVBQUUsRUFDUixHQUFHLEVBQUUsK0JBQStCLEdBQ3RDLENBQ0wsTUFmTSxVQUFHLElBQUksQ0FBQyxLQUFLLFNBQUcsS0FBSyxDQUFFLENBZ0JoQixDQUNuQixDQUFDO2dDQUNKLENBQUMsQ0FBQyxJQUNTLElBQ2IsS0FDSyxJQUNFLENBQ3BCLENBQUM7QUFDSixDQUFDO0FBRUQsZUFBZSxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IERvd25zaGlmdCwge1xuICBDb250cm9sbGVyU3RhdGVBbmRIZWxwZXJzLFxuICB1c2VNdWx0aXBsZVNlbGVjdGlvbixcbiAgdXNlU2VsZWN0LFxufSBmcm9tICdkb3duc2hpZnQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgaXNFcXVhbCBmcm9tICdmYXN0LWRlZXAtZXF1YWwnO1xuXG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmltcG9ydCBCb2R5VGV4dCBmcm9tICcuLi9ib2R5LXRleHQvYm9keS10ZXh0JztcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcbmltcG9ydCBGbGV4Q29sdW1uIGZyb20gXCIuLi9mbGV4LWNvbHVtbi9mbGV4LWNvbHVtblwiO1xuXG5jb25zdCBTdHlsZWREcm9wZG93biA9IHN0eWxlZC5kaXY8eyBkaXNhYmxlZD86IGJvb2xlYW4gfT4oXG4gICAgKHsgdGhlbWUsIGRpc2FibGVkIH0pID0+ICh7XG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG5cbiAgICAgIC4uLihkaXNhYmxlZCAmJiB7XG4gICAgICAgIG9wYWNpdHk6ICcwLjUnLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICB9KSxcbiAgICB9KVxuKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEZsZXhSb3cpPHsgaXNPcGVuOiBib29sZWFuIH0+KCh7IHRoZW1lLCBpc09wZW4gfSkgPT4gKHtcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGhlaWdodDogMzYsXG4gIHBhZGRpbmc6ICcwIDE2cHgnLFxuICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gICc6aG92ZXIsIDphY3RpdmUnOiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxuICAgIHN2Zzoge1xuICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWQsXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuY29uc3QgSXRlbXNDb250YWluZXIgPSBzdHlsZWQuZGl2PHsgaXNPcGVuOiBib29sZWFuIH0+KCh7IHRoZW1lLCBpc09wZW4gfSkgPT4gKHtcbiAgZGlzcGxheTogaXNPcGVuID8gJ2luaGVyaXQnIDogJ25vbmUnLFxuICBtYXJnaW5Ub3A6IDQsXG4gIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4gIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcbn0pKTtcblxuY29uc3QgSXRlbUNvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KSgoeyB0aGVtZSB9KSA9PiAoe1xuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgbWluSGVpZ2h0OiAzNixcbiAgcGFkZGluZzogJzhweCAxNnB4JyxcbiAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnlCbHVlSG92ZXIsXG4gICAgZm9udFdlaWdodDogNjAwLFxuICB9LFxufSkpO1xuXG5jb25zdCBEZWxldGVJY29uID0gc3R5bGVkKFN2Z0ljb24pKCh7IHRoZW1lIH0pID0+ICh7XG4gIHBhdGg6IHtcbiAgICBzdHJva2U6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcbiAgfSxcbiAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICBwYXRoOiB7XG4gICAgICBzdHJva2U6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWQsXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuY29uc3QgTXVsdGlTZWxlY3RDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8eyBpc09wZW46IGJvb2xlYW4gfT4oXG4gICAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4gICAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcbiAgICAgICc6aG92ZXIsIDphY3RpdmUnOiB7XG4gICAgICAgIHN2Zzoge1xuICAgICAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5UmVkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KVxuKTtcblxuY29uc3QgUGxhY2Vob2xkZXJXcmFwcGVyID0gc3R5bGVkLnNwYW4oKHsgdGhlbWUgfSkgPT4gKHtcbiAgcGFkZGluZzogJzAgOHB4Jyxcbn0pKTtcblxuY29uc3QgQ2hpcEl0ZW1Db250YWluZXIgPSBzdHlsZWQuc3BhbigoeyB0aGVtZSB9KSA9PiAoe1xuICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgcGFkZGluZzogJzJweCA4cHgnLFxuICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxUZXJ0cmlhcnksXG4gIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxufSkpO1xuXG5jb25zdCBPdmVyZmxvd1dyYXBwZXIgPSBzdHlsZWQuc3BhbigoeyB0aGVtZSB9KSA9PiAoe1xuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG59KSk7XG5cbmNvbnN0IERyb3Bkb3duSWNvbldyYXBwZXIgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIHBhZGRpbmdSaWdodDogJzhweCcsXG4gIG1hcmdpbkxlZnQ6ICc4cHgnLFxufSkpO1xuXG5jb25zdCBDaGVja0ljb24gPSBzdHlsZWQoU3ZnSWNvbikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgcGF0aDoge1xuICAgIGZpbGw6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXG4gIH0sXG59KSk7XG5cbmNvbnN0IE11bHRpU2VsZWN0RGVsZXRlSWNvbiA9IHN0eWxlZChTdmdJY29uKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBwYXRoOiB7XG4gICAgc3Ryb2tlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICB9LFxuICAnOmhvdmVyLCA6YWN0aXZlJzoge1xuICAgIHBhdGg6IHtcbiAgICAgIHN0cm9rZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UmVkLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmV4cG9ydCB0eXBlIERyb3Bkb3duVmFsdWUgPSB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfTtcbmV4cG9ydCB0eXBlIERyb3Bkb3duSXRlbTxUID0gRHJvcGRvd25WYWx1ZT4gPSBUO1xuXG5leHBvcnQgdHlwZSBEcm9wZG93bkV2ZW50VmFsdWUgPSB7XG4gIHRhcmdldDoge1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgdmFsdWU6IERyb3Bkb3duVmFsdWUgfCBudWxsO1xuICB9O1xufTtcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xuICBpdGVtczogRHJvcGRvd25WYWx1ZVtdO1xuICB2YWx1ZT86IERyb3Bkb3duVmFsdWUgfCBudWxsO1xuICBsYWJlbD86IHN0cmluZztcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIGFyZUl0ZW1zUmVtb3ZhYmxlPzogYm9vbGVhbjtcbiAgaXNTZWFyY2hhYmxlPzogYm9vbGVhbjtcbiAgb25DaGFuZ2U/OiAoZXY6IERyb3Bkb3duRXZlbnRWYWx1ZSkgPT4gdm9pZDtcbiAgb25TZWxlY3Q/OiAoZXY6IERyb3Bkb3duRXZlbnRWYWx1ZSkgPT4gdm9pZDtcbiAgb25SZW1vdmU/OiAoZXY6IERyb3Bkb3duRXZlbnRWYWx1ZSkgPT4gdm9pZDtcblxuICBub0l0ZW1zTWVzc2FnZT86IHN0cmluZztcbn1cblxuY29uc3QgZ2V0Q2hhbmdlRXZlbnQgPSAodmFsdWU6IGFueSk6IERyb3Bkb3duRXZlbnRWYWx1ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGFyZ2V0OiB7XG4gICAgICBuYW1lOiB1bmRlZmluZWQsXG4gICAgICB2YWx1ZSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIERyb3Bkb3duKHByb3BzOiBEcm9wZG93blByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBpdGVtcyxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBsYWJlbCxcbiAgICBhcmVJdGVtc1JlbW92YWJsZSxcbiAgICB2YWx1ZSxcbiAgICBzdHlsZSxcbiAgICBvblNlbGVjdCxcbiAgICBvblJlbW92ZSxcbiAgICBub0l0ZW1zTWVzc2FnZSA9ICdObyBPcHRpb25zIScsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBnZXRDaGFuZ2VFdmVudCA9ICh2YWx1ZTogRHJvcGRvd25WYWx1ZSB8IG51bGwpOiBEcm9wZG93bkV2ZW50VmFsdWUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgbmFtZTogdW5kZWZpbmVkLFxuICAgICAgICB2YWx1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZW1vdmVJdGVtID0gKFxuICAgICAgaXRlbTogRHJvcGRvd25JdGVtLFxuICAgICAgZXYsXG4gICAgICBkb3duc2hpZnQ6IENvbnRyb2xsZXJTdGF0ZUFuZEhlbHBlcnM8RHJvcGRvd25JdGVtPlxuICApID0+IHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgY29uc3QgdmFsdWUgPSBpdGVtICYmIGl0ZW1WYWx1ZUdldHRlcihpdGVtKTtcbiAgICBvblJlbW92ZSAmJiBvblJlbW92ZShnZXRDaGFuZ2VFdmVudCh2YWx1ZSkpO1xuICB9O1xuXG4gIGNvbnN0IGl0ZW1WYWx1ZUdldHRlciA9IChpdGVtKSA9PiBpdGVtLnZhbHVlO1xuICBjb25zdCBpdGVtTmFtZUdldHRlciA9IChpdGVtKSA9PiBpdGVtLmxhYmVsO1xuXG4gIGNvbnN0IGhhbmRsZUl0ZW1TZWxlY3QgPSAoaXRlbSkgPT4ge1xuICAgIG9uU2VsZWN0ICYmIG9uU2VsZWN0KGl0ZW0pO1xuICB9O1xuXG4gIGNvbnN0IGdldEl0ZW1Ub1N0cmluZyA9IChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0gPT09IG51bGwpIHJldHVybiAnJztcbiAgICByZXR1cm4gdHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnID8gaXRlbSA6IGl0ZW0ubGFiZWw7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICAgIDxEb3duc2hpZnRcbiAgICAgICAgICBpdGVtVG9TdHJpbmc9e2dldEl0ZW1Ub1N0cmluZ31cbiAgICAgICAgICBvblNlbGVjdD17aGFuZGxlSXRlbVNlbGVjdH1cbiAgICAgICAgICBzZWxlY3RlZEl0ZW09e3ZhbHVlfVxuICAgICAgICAgIHNlbGVjdGVkSXRlbUNoYW5nZWQ9eyhwcmV2SXRlbSwgaXRlbSkgPT4gIWlzRXF1YWwocHJldkl0ZW0sIGl0ZW0pfVxuICAgICAgPlxuICAgICAgICB7KGRvd25zaGlmdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGdldEl0ZW1Qcm9wcyxcbiAgICAgICAgICAgIGdldE1lbnVQcm9wcyxcbiAgICAgICAgICAgIGlzT3BlbixcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbSxcbiAgICAgICAgICAgIGdldFJvb3RQcm9wcyxcbiAgICAgICAgICAgIGdldFRvZ2dsZUJ1dHRvblByb3BzLFxuICAgICAgICAgIH0gPSBkb3duc2hpZnQ7XG5cbiAgICAgICAgICBjb25zdCBub0l0ZW1zID0gIShpdGVtcyAmJiBpdGVtcy5sZW5ndGgpO1xuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFN0eWxlZERyb3Bkb3duXG4gICAgICAgICAgICAgICAgICB7Li4uZ2V0Um9vdFByb3BzKHsgcmVmS2V5OiAnaW5uZXJSZWYnIH0pfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxCb2R5VGV4dCBsaW5lSGVpZ2h0PXsneHMnfSBzaXplPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgey4uLmdldFRvZ2dsZUJ1dHRvblByb3BzKCl9XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zU3BhY2luZz17MTB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJvZHlUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT17M31cbiAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PXsneHMnfVxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhdGlvbj17c2VsZWN0ZWRJdGVtID8gJ2luaGVyaXQnIDogJ2RhcmtHcmF5J31cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW1OYW1lR2V0dGVyKHNlbGVjdGVkSXRlbSkgfHwgcGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgICAgICAgPFN2Z0ljb25cbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNPcGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYXNzZXRzL2ljb25zL2ljLWFycm93LXVwLnN2ZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdhc3NldHMvaWNvbnMvaWMtYXJyb3ctZG93bi5zdmcnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8SXRlbXNDb250YWluZXIgey4uLmdldE1lbnVQcm9wcygpfSBpc09wZW49e2lzT3Blbn0+XG4gICAgICAgICAgICAgICAgICB7aXNPcGVuICYmXG4gICAgICAgICAgICAgICAgICAgICAgKG5vSXRlbXMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzhweCAxNnB4JywgcG9pbnRlckV2ZW50czogJ25vbmUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb2R5VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZT17J3hzJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodD17J3hzJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uPVwiZGFya0dyYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub0l0ZW1zTWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBpc0VxdWFsKGl0ZW0sIHNlbGVjdGVkSXRlbSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbUNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtpdGVtfS0ke2lkeH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNTcGFjaW5nPXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0SXRlbVByb3BzKHsgaXRlbSwgaW5kZXg6IGlkeCB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb2R5VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtpc1NlbGVjdGVkID8gMSA6IDN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU9eyd4cyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9eyd4cyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1OYW1lR2V0dGVyKGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FyZUl0ZW1zUmVtb3ZhYmxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImFzc2V0cy9pY29ucy9pYy1kZWxldGUuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldikgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVSZW1vdmVJdGVtKGl0ZW0sIGV2LCBkb3duc2hpZnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9JdGVtc0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9TdHlsZWREcm9wZG93bj5cbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPC9Eb3duc2hpZnQ+XG4gICk7XG59XG5cbmV4cG9ydCB0eXBlIE11bHRpRHJvcGRvd25WYWx1ZSA9IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgY2hpcExhYmVsPzogc3RyaW5nO1xuICB2YWx1ZTogYW55O1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aVNlbGVjdERyb3Bkb3duUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xuICB2YWx1ZT86IE11bHRpRHJvcGRvd25WYWx1ZVtdO1xuICBpdGVtczogTXVsdGlEcm9wZG93blZhbHVlW107XG4gIGxhYmVsPzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG9uQ2hhbmdlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uU2VsZWN0PzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uUmVtb3ZlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNdWx0aVNlbGVjdERyb3Bkb3duKHByb3BzOiBNdWx0aVNlbGVjdERyb3Bkb3duUHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGl0ZW1zLFxuICAgIHZhbHVlLFxuICAgIGxhYmVsLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGRpc2FibGVkLFxuICAgIG9uU2VsZWN0LFxuICAgIG9uQ2hhbmdlLFxuICAgIG9uUmVtb3ZlLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3Qge1xuICAgIGdldFNlbGVjdGVkSXRlbVByb3BzLFxuICAgIGdldERyb3Bkb3duUHJvcHMsXG4gICAgYWRkU2VsZWN0ZWRJdGVtLFxuICAgIHJlbW92ZVNlbGVjdGVkSXRlbSxcbiAgICBzZWxlY3RlZEl0ZW1zLFxuICB9ID0gdXNlTXVsdGlwbGVTZWxlY3Rpb248TXVsdGlEcm9wZG93blZhbHVlPih7XG4gICAgaW5pdGlhbFNlbGVjdGVkSXRlbXM6IHZhbHVlLFxuICAgIG9uU2VsZWN0ZWRJdGVtc0NoYW5nZTogKGNoYW5nZXMpID0+IHtcbiAgICAgIG9uU2VsZWN0ICYmIG9uU2VsZWN0KGdldENoYW5nZUV2ZW50KGNoYW5nZXMuc2VsZWN0ZWRJdGVtcykpO1xuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IHtcbiAgICBpc09wZW4sXG4gICAgc2VsZWN0ZWRJdGVtLFxuICAgIGdldFRvZ2dsZUJ1dHRvblByb3BzLFxuICAgIGdldExhYmVsUHJvcHMsXG4gICAgZ2V0TWVudVByb3BzLFxuICAgIGdldEl0ZW1Qcm9wcyxcbiAgfSA9IHVzZVNlbGVjdCh7XG4gICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxuICAgIGRlZmF1bHRIaWdobGlnaHRlZEluZGV4OiAwLCAvLyBhZnRlciBzZWxlY3Rpb24sIGhpZ2hsaWdodCB0aGUgZmlyc3QgaXRlbS5cbiAgICBpdGVtcyxcbiAgICBzdGF0ZVJlZHVjZXI6IChzdGF0ZSwgYWN0aW9uQW5kQ2hhbmdlcykgPT4ge1xuICAgICAgY29uc3QgeyBjaGFuZ2VzLCB0eXBlIH0gPSBhY3Rpb25BbmRDaGFuZ2VzO1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgdXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMuVG9nZ2xlQnV0dG9uS2V5RG93bkVudGVyOlxuICAgICAgICBjYXNlIHVzZVNlbGVjdC5zdGF0ZUNoYW5nZVR5cGVzLlRvZ2dsZUJ1dHRvbktleURvd25TcGFjZUJ1dHRvbjpcbiAgICAgICAgY2FzZSB1c2VTZWxlY3Quc3RhdGVDaGFuZ2VUeXBlcy5JdGVtQ2xpY2s6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmNoYW5nZXMsXG4gICAgICAgICAgICBpc09wZW46IHRydWUsIC8vIGtlZXAgdGhlIG1lbnUgb3BlbiBhZnRlciBzZWxlY3Rpb24uXG4gICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gY2hhbmdlcztcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uU3RhdGVDaGFuZ2U6ICh7IHR5cGUsIHNlbGVjdGVkSXRlbTogbmV3U2VsZWN0ZWRJdGVtIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIHVzZVNlbGVjdC5zdGF0ZUNoYW5nZVR5cGVzLlRvZ2dsZUJ1dHRvbktleURvd25FbnRlcjpcbiAgICAgICAgY2FzZSB1c2VTZWxlY3Quc3RhdGVDaGFuZ2VUeXBlcy5Ub2dnbGVCdXR0b25LZXlEb3duU3BhY2VCdXR0b246XG4gICAgICAgIGNhc2UgdXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMuSXRlbUNsaWNrOlxuICAgICAgICB7XG4gICAgICAgICAgY29uc3QgaXNBbHJlYWR5U2VsZWN0ZWQgPSBzZWxlY3RlZEl0ZW1zLnNvbWUoXG4gICAgICAgICAgICAgIChpKSA9PiBpLnZhbHVlID09PSBuZXdTZWxlY3RlZEl0ZW0/LnZhbHVlXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChuZXdTZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpc0FscmVhZHlTZWxlY3RlZCkge1xuICAgICAgICAgICAgICByZW1vdmVTZWxlY3RlZEl0ZW0obmV3U2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgICAgb25SZW1vdmUgJiYgb25SZW1vdmUoZ2V0Q2hhbmdlRXZlbnQobmV3U2VsZWN0ZWRJdGVtKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhZGRTZWxlY3RlZEl0ZW0obmV3U2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgICAgb25DaGFuZ2UgJiYgb25DaGFuZ2UoZ2V0Q2hhbmdlRXZlbnQobmV3U2VsZWN0ZWRJdGVtKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWREcm9wZG93biBkaXNhYmxlZD17ZGlzYWJsZWR9PlxuICAgICAgICA8RmxleENvbHVtbiBpdGVtc1NwYWNpbmc9ezR9PlxuICAgICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgICAgIDxCb2R5VGV4dCBsaW5lSGVpZ2h0PXsneHMnfSBzaXplPXsxfSB7Li4uZ2V0TGFiZWxQcm9wcygpfT5cbiAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE11bHRpU2VsZWN0Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICB7Li4uZ2V0VG9nZ2xlQnV0dG9uUHJvcHMoXG4gICAgICAgICAgICAgICAgICAgIGdldERyb3Bkb3duUHJvcHMoeyBwcmV2ZW50S2V5QWN0aW9uOiBpc09wZW4gfSlcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIDxCb2R5VGV4dFxuICAgICAgICAgICAgICAgICAgbGluZUhlaWdodD17J3hzJ31cbiAgICAgICAgICAgICAgICAgIHNpemU9ezN9XG4gICAgICAgICAgICAgICAgICB2YXJpYXRpb249e3NlbGVjdGVkSXRlbSA/ICdpbmhlcml0JyA6ICdkYXJrR3JheSd9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8T3ZlcmZsb3dXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgPEZsZXhSb3cgZ2FwPXs4fSB3cmFwPXsnd3JhcCd9PlxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRJdGVtcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXJXcmFwcGVyPntwbGFjZWhvbGRlcn08L1BsYWNlaG9sZGVyV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXMubWFwKChzZWxlY3RlZEl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoaXBJdGVtQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YHNlbGVjdGVkLWl0ZW0tJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0U2VsZWN0ZWRJdGVtUHJvcHMoeyBzZWxlY3RlZEl0ZW0sIGluZGV4IH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Um93IGFsaWduPXsnY2VudGVyJ30gZ2FwPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkSXRlbT8uY2hpcExhYmVsIHx8IHNlbGVjdGVkSXRlbT8ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aVNlbGVjdERlbGV0ZUljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU2VsZWN0ZWRJdGVtKHNlbGVjdGVkSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MTR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9eydhc3NldHMvaWNvbnMvaWMtZGVsZXRlLnN2Zyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DaGlwSXRlbUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgICAgICAgICAgPC9PdmVyZmxvd1dyYXBwZXI+XG4gICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkljb25XcmFwcGVyPlxuICAgICAgICAgICAgICAgIDxTdmdJY29uXG4gICAgICAgICAgICAgICAgICAgIHNpemU9ezE2fVxuICAgICAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgICAgIGlzT3BlblxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdhc3NldHMvaWNvbnMvaWMtYXJyb3ctdXAuc3ZnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdhc3NldHMvaWNvbnMvaWMtYXJyb3ctZG93bi5zdmcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSWNvbldyYXBwZXI+XG4gICAgICAgICAgICA8L011bHRpU2VsZWN0Q29udGFpbmVyPlxuICAgICAgICAgICAgPEl0ZW1zQ29udGFpbmVyIHsuLi5nZXRNZW51UHJvcHMoKX0gaXNPcGVuPXtpc09wZW59PlxuICAgICAgICAgICAgICB7aXNPcGVuICYmXG4gICAgICAgICAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZEl0ZW1zPy5zb21lKFxuICAgICAgICAgICAgICAgICAgICAgICAgKGkpID0+IGkudmFsdWUgPT09IGl0ZW0udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1NwYWNpbmc9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7aXRlbS52YWx1ZX0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldEl0ZW1Qcm9wcyh7IGl0ZW0sIGluZGV4IH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm9keVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e2lzU2VsZWN0ZWQgPyAxIDogM31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9eyd4cyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZT17J3hzJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNTZWxlY3RlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MTR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsnYXNzZXRzL2ljb25zL2ljLWNoZWNrbWFyay5zdmcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9JdGVtc0NvbnRhaW5lcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GbGV4Q29sdW1uPlxuICAgICAgPC9TdHlsZWREcm9wZG93bj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XG4iXX0=