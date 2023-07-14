import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Downshift, { useMultipleSelection, useSelect, } from 'downshift';
import styled from 'styled-components';
import isEqual from 'fast-deep-equal';
import SubtitleText from '../subtitle-text/subtitle-text';
import BodyText from '../body-text/body-text';
import FlexRow from '../flex-row/flex-row';
import SvgIcon from '../svg-icon/svg-icon';
var StyledDropdown = styled.div(function (_a) {
    var theme = _a.theme;
    return ({
        outline: 'none',
    });
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
var PlaceholderWrapper = styled.span(function (_a) {
    var theme = _a.theme;
    return ({
        padding: '8px',
    });
});
var ChipItemContainer = styled.span(function (_a) {
    var theme = _a.theme;
    return ({
        borderRadius: theme.borderRadius.base,
        cursor: 'pointer',
        padding: '2px 8px',
        background: theme.styleguideColors.fillTertriary,
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
        padding: '12px 12px',
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
            return (_jsxs(StyledDropdown, __assign({}, getRootProps({ refKey: 'innerRef' }), { style: style, tabIndex: "0" }, { children: [label && _jsx(SubtitleText, __assign({ size: 1 }, { children: label })), _jsxs(Container, __assign({ isOpen: isOpen, align: "center", justify: "space-between" }, getToggleButtonProps(), { itemsSpacing: 10 }, { children: [_jsx(SubtitleText, __assign({ size: 2, variation: selectedItem ? 'inherit' : 'darkGray', style: {
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                } }, { children: itemNameGetter(selectedItem) || placeholder })), _jsx(SvgIcon, { src: isOpen
                                    ? 'assets/icons/ic-arrow-up.svg'
                                    : 'assets/icons/ic-arrow-down.svg' })] })), _jsx(ItemsContainer, __assign({}, getMenuProps(), { isOpen: isOpen }, { children: isOpen &&
                            (noItems ? (_jsx("div", __assign({ style: { padding: '8px 16px', pointerEvents: 'none' } }, { children: _jsx(BodyText, __assign({ size: 3, variation: "darkGray" }, { children: noItemsMessage })) }))) : (items.map(function (item, idx) {
                                var isSelected = isEqual(item, selectedItem);
                                return (_jsxs(ItemContainer, __assign({ align: "center", justify: "space-between", itemsSpacing: 10, isSelected: isSelected }, getItemProps({ item: item, index: idx }), { children: [_jsx(BodyText, __assign({ size: isSelected ? 1 : 3, style: {
                                                overflow: 'hidden',
                                                whiteSpace: 'nowrap',
                                                textOverflow: 'ellipsis',
                                            } }, { children: itemNameGetter(item) })), areItemsRemovable && (_jsx(DeleteIcon, { src: "assets/icons/ic-delete.svg", onClick: function (ev) {
                                                return handleRemoveItem(item, ev, downshift);
                                            } }))] }), "".concat(item, "-").concat(idx)));
                            }))) }))] })));
        } })));
}
export function MultiSelectDropdown(props) {
    var items = props.items, label = props.label, placeholder = props.placeholder, onSelect = props.onSelect, onChange = props.onChange, onRemove = props.onRemove;
    var _a = useMultipleSelection({
        initialSelectedItems: undefined,
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
    return (_jsxs(StyledDropdown, { children: [label && (_jsx(SubtitleText, __assign({ size: 1 }, getLabelProps(), { children: label }))), _jsxs(MultiSelectContainer, __assign({ isOpen: isOpen, align: "center", justify: "space-between" }, getToggleButtonProps(getDropdownProps({ preventKeyAction: isOpen })), { children: [_jsx(OverflowWrapper, { children: _jsx(SubtitleText, __assign({ size: 2, variation: selectedItem ? 'inherit' : 'darkGray' }, { children: _jsx(OverflowWrapper, { children: _jsx(FlexRow, __assign({ gap: 4 }, { children: selectedItems.length === 0 ? (_jsx(PlaceholderWrapper, { children: placeholder })) : (selectedItems.map(function (selectedItem, index) { return (_jsx(ChipItemContainer, __assign({}, getSelectedItemProps({ selectedItem: selectedItem, index: index }), { children: _jsxs(FlexRow, __assign({ align: 'center', gap: 4 }, { children: [selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.chipLabel, _jsx(MultiSelectDeleteIcon, { onClick: function (event) {
                                                        event.preventDefault();
                                                        event.stopPropagation();
                                                        removeSelectedItem(selectedItem);
                                                    }, size: 14, src: 'assets/icons/ic-delete.svg' })] })) }), "selected-item-".concat(index))); })) })) }) })) }), _jsx(DropdownIconWrapper, { children: _jsx(SvgIcon, { size: 16, src: isOpen
                                ? 'assets/icons/ic-arrow-up.svg'
                                : 'assets/icons/ic-arrow-down.svg' }) })] })), _jsx(ItemsContainer, __assign({}, getMenuProps(), { isOpen: isOpen }, { children: isOpen &&
                    items.map(function (item, index) {
                        var isSelected = selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.some(function (i) { return i.value === item.value; });
                        return (_jsxs(ItemContainer, __assign({ align: "center", justify: "space-between", itemsSpacing: 10 }, getItemProps({ item: item, index: index }), { children: [_jsx(BodyText, __assign({ size: isSelected ? 1 : 3 }, { children: item.label })), isSelected && (_jsx(CheckIcon, { size: 14, src: 'assets/icons/ic-checkmark.svg' }))] }), "".concat(item.value).concat(index)));
                    }) }))] }));
}
export default Dropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxTQUFTLEVBQUUsRUFFaEIsb0JBQW9CLEVBQ3BCLFNBQVMsR0FDVixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLE1BQU0sTUFBTSxtQkFBbUIsQ0FBQztBQUN2QyxPQUFPLE9BQU8sTUFBTSxpQkFBaUIsQ0FBQztBQUl0QyxPQUFPLFlBQVksTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRCxPQUFPLFFBQVEsTUFBTSx3QkFBd0IsQ0FBQztBQUM5QyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUNoRCxPQUFPLEVBQUUsTUFBTTtLQUNoQixDQUFDO0FBRitDLENBRS9DLENBQUMsQ0FBQztBQUVKLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBc0IsVUFBQyxFQUFpQjtRQUFmLEtBQUssV0FBQSxFQUFFLE1BQU0sWUFBQTtJQUFPLE9BQUEsQ0FBQztRQUM3RSxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJO1FBQ3JDLE1BQU0sRUFBRSxNQUFNO1FBQ2QsTUFBTSxFQUFFLEVBQUU7UUFDVixPQUFPLEVBQUUsUUFBUTtRQUNqQixVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWE7UUFDaEQsaUJBQWlCLEVBQUU7WUFDakIsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1lBQ2hELEdBQUcsRUFBRTtnQkFDSCxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFD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RUFBRSwrQkFBK0IsR0FBSSxDQUM5RCxNQU5JLFVBQUcsSUFBSSxDQUFDLEtBQUssU0FBRyxLQUFLLENBQUUsQ0FPZCxDQUNqQixDQUFDO29CQUNKLENBQUMsQ0FBQyxJQUNXLElBQ0YsQ0FDbEIsQ0FBQztBQUNKLENBQUM7QUFFRCxlQUFlLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRG93bnNoaWZ0LCB7XG4gIENvbnRyb2xsZXJTdGF0ZUFuZEhlbHBlcnMsXG4gIHVzZU11bHRpcGxlU2VsZWN0aW9uLFxuICB1c2VTZWxlY3QsXG59IGZyb20gJ2Rvd25zaGlmdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2Zhc3QtZGVlcC1lcXVhbCc7XG5cbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IFN1YnRpdGxlVGV4dCBmcm9tICcuLi9zdWJ0aXRsZS10ZXh0L3N1YnRpdGxlLXRleHQnO1xuaW1wb3J0IEJvZHlUZXh0IGZyb20gJy4uL2JvZHktdGV4dC9ib2R5LXRleHQnO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi4vc3ZnLWljb24vc3ZnLWljb24nO1xuXG5jb25zdCBTdHlsZWREcm9wZG93biA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcbiAgb3V0bGluZTogJ25vbmUnLFxufSkpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8eyBpc09wZW46IGJvb2xlYW4gfT4oKHsgdGhlbWUsIGlzT3BlbiB9KSA9PiAoe1xuICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICBib3JkZXI6ICdub25lJyxcbiAgaGVpZ2h0OiAzNixcbiAgcGFkZGluZzogJzAgMTZweCcsXG4gIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcbiAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gICAgc3ZnOiB7XG4gICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcbiAgICB9LFxuICB9LFxufSkpO1xuXG5jb25zdCBJdGVtc0NvbnRhaW5lciA9IHN0eWxlZC5kaXY8eyBpc09wZW46IGJvb2xlYW4gfT4oKHsgdGhlbWUsIGlzT3BlbiB9KSA9PiAoe1xuICBkaXNwbGF5OiBpc09wZW4gPyAnaW5oZXJpdCcgOiAnbm9uZScsXG4gIG1hcmdpblRvcDogNCxcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxufSkpO1xuXG5jb25zdCBJdGVtQ29udGFpbmVyID0gc3R5bGVkKEZsZXhSb3cpKCh7IHRoZW1lIH0pID0+ICh7XG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBtaW5IZWlnaHQ6IDM2LFxuICBwYWRkaW5nOiAnOHB4IDE2cHgnLFxuICAnOmhvdmVyLCA6YWN0aXZlJzoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeUJsdWVIb3ZlcixcbiAgICBmb250V2VpZ2h0OiA2MDAsXG4gIH0sXG59KSk7XG5cbmNvbnN0IERlbGV0ZUljb24gPSBzdHlsZWQoU3ZnSWNvbikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgcGF0aDoge1xuICAgIHN0cm9rZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxuICB9LFxuICAnOmhvdmVyLCA6YWN0aXZlJzoge1xuICAgIHBhdGg6IHtcbiAgICAgIHN0cm9rZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcbiAgICB9LFxuICB9LFxufSkpO1xuXG5jb25zdCBNdWx0aVNlbGVjdENvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KTx7IGlzT3BlbjogYm9vbGVhbiB9PihcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICAgIGhlaWdodDogMzYsXG4gICAgcGFkZGluZzogJzAgOHB4JyxcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gICAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICAgIHN2Zzoge1xuICAgICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmNvbnN0IFBsYWNlaG9sZGVyV3JhcHBlciA9IHN0eWxlZC5zcGFuKCh7IHRoZW1lIH0pID0+ICh7XG4gIHBhZGRpbmc6ICc4cHgnLFxufSkpO1xuXG5jb25zdCBDaGlwSXRlbUNvbnRhaW5lciA9IHN0eWxlZC5zcGFuKCh7IHRoZW1lIH0pID0+ICh7XG4gIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBwYWRkaW5nOiAnMnB4IDhweCcsXG4gIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFRlcnRyaWFyeSxcbn0pKTtcblxuY29uc3QgT3ZlcmZsb3dXcmFwcGVyID0gc3R5bGVkLnNwYW4oKHsgdGhlbWUgfSkgPT4gKHtcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxufSkpO1xuXG5jb25zdCBEcm9wZG93bkljb25XcmFwcGVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBwYWRkaW5nOiAnMTJweCAxMnB4Jyxcbn0pKTtcblxuY29uc3QgQ2hlY2tJY29uID0gc3R5bGVkKFN2Z0ljb24pKCh7IHRoZW1lIH0pID0+ICh7XG4gIHBhdGg6IHtcbiAgICBmaWxsOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICB9LFxufSkpO1xuXG5jb25zdCBNdWx0aVNlbGVjdERlbGV0ZUljb24gPSBzdHlsZWQoU3ZnSWNvbikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgcGF0aDoge1xuICAgIHN0cm9rZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgfSxcbiAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICBwYXRoOiB7XG4gICAgICBzdHJva2U6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFJlZCxcbiAgICB9LFxuICB9LFxufSkpO1xuXG5leHBvcnQgdHlwZSBEcm9wZG93blZhbHVlID0geyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH07XG5leHBvcnQgdHlwZSBEcm9wZG93bkl0ZW08VCA9IERyb3Bkb3duVmFsdWU+ID0gVDtcblxuZXhwb3J0IHR5cGUgRHJvcGRvd25FdmVudFZhbHVlID0ge1xuICB0YXJnZXQ6IHtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHZhbHVlOiBEcm9wZG93blZhbHVlIHwgbnVsbDtcbiAgfTtcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBEcm9wZG93blByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgaXRlbXM6IERyb3Bkb3duVmFsdWVbXTtcbiAgdmFsdWU/OiBEcm9wZG93blZhbHVlIHwgbnVsbDtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBhcmVJdGVtc1JlbW92YWJsZT86IGJvb2xlYW47XG4gIGlzU2VhcmNoYWJsZT86IGJvb2xlYW47XG4gIG9uQ2hhbmdlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uU2VsZWN0PzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uUmVtb3ZlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG5cbiAgbm9JdGVtc01lc3NhZ2U/OiBzdHJpbmc7XG59XG5cbmNvbnN0IGdldENoYW5nZUV2ZW50ID0gKHZhbHVlOiBhbnkpOiBEcm9wZG93bkV2ZW50VmFsdWUgPT4ge1xuICByZXR1cm4ge1xuICAgIHRhcmdldDoge1xuICAgICAgbmFtZTogdW5kZWZpbmVkLFxuICAgICAgdmFsdWUsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBEcm9wZG93bihwcm9wczogRHJvcGRvd25Qcm9wcykge1xuICBjb25zdCB7XG4gICAgaXRlbXMsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgbGFiZWwsXG4gICAgYXJlSXRlbXNSZW1vdmFibGUsXG4gICAgdmFsdWUsXG4gICAgc3R5bGUsXG4gICAgb25TZWxlY3QsXG4gICAgb25SZW1vdmUsXG4gICAgbm9JdGVtc01lc3NhZ2UgPSAnTm8gT3B0aW9ucyEnLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZ2V0Q2hhbmdlRXZlbnQgPSAodmFsdWU6IERyb3Bkb3duVmFsdWUgfCBudWxsKTogRHJvcGRvd25FdmVudFZhbHVlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdGFyZ2V0OiB7XG4gICAgICAgIG5hbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgdmFsdWUsXG4gICAgICB9LFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlSXRlbSA9IChcbiAgICBpdGVtOiBEcm9wZG93bkl0ZW0sXG4gICAgZXYsXG4gICAgZG93bnNoaWZ0OiBDb250cm9sbGVyU3RhdGVBbmRIZWxwZXJzPERyb3Bkb3duSXRlbT5cbiAgKSA9PiB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGNvbnN0IHZhbHVlID0gaXRlbSAmJiBpdGVtVmFsdWVHZXR0ZXIoaXRlbSk7XG4gICAgb25SZW1vdmUgJiYgb25SZW1vdmUoZ2V0Q2hhbmdlRXZlbnQodmFsdWUpKTtcbiAgfTtcblxuICBjb25zdCBpdGVtVmFsdWVHZXR0ZXIgPSAoaXRlbSkgPT4gaXRlbS52YWx1ZTtcbiAgY29uc3QgaXRlbU5hbWVHZXR0ZXIgPSAoaXRlbSkgPT4gaXRlbS5sYWJlbDtcblxuICBjb25zdCBoYW5kbGVJdGVtU2VsZWN0ID0gKGl0ZW0pID0+IHtcbiAgICBvblNlbGVjdCAmJiBvblNlbGVjdChpdGVtKTtcbiAgfTtcblxuICBjb25zdCBnZXRJdGVtVG9TdHJpbmcgPSAoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtID09PSBudWxsKSByZXR1cm4gJyc7XG4gICAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyA/IGl0ZW0gOiBpdGVtLmxhYmVsO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERvd25zaGlmdFxuICAgICAgaXRlbVRvU3RyaW5nPXtnZXRJdGVtVG9TdHJpbmd9XG4gICAgICBvblNlbGVjdD17aGFuZGxlSXRlbVNlbGVjdH1cbiAgICAgIHNlbGVjdGVkSXRlbT17dmFsdWV9XG4gICAgICBzZWxlY3RlZEl0ZW1DaGFuZ2VkPXsocHJldkl0ZW0sIGl0ZW0pID0+ICFpc0VxdWFsKHByZXZJdGVtLCBpdGVtKX1cbiAgICA+XG4gICAgICB7KGRvd25zaGlmdCkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgZ2V0SXRlbVByb3BzLFxuICAgICAgICAgIGdldE1lbnVQcm9wcyxcbiAgICAgICAgICBpc09wZW4sXG4gICAgICAgICAgc2VsZWN0ZWRJdGVtLFxuICAgICAgICAgIGdldFJvb3RQcm9wcyxcbiAgICAgICAgICBnZXRUb2dnbGVCdXR0b25Qcm9wcyxcbiAgICAgICAgfSA9IGRvd25zaGlmdDtcblxuICAgICAgICBjb25zdCBub0l0ZW1zID0gIShpdGVtcyAmJiBpdGVtcy5sZW5ndGgpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFN0eWxlZERyb3Bkb3duXG4gICAgICAgICAgICB7Li4uZ2V0Um9vdFByb3BzKHsgcmVmS2V5OiAnaW5uZXJSZWYnIH0pfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGFiZWwgJiYgPFN1YnRpdGxlVGV4dCBzaXplPXsxfT57bGFiZWx9PC9TdWJ0aXRsZVRleHQ+fVxuICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgIHsuLi5nZXRUb2dnbGVCdXR0b25Qcm9wcygpfVxuICAgICAgICAgICAgICBpdGVtc1NwYWNpbmc9ezEwfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U3VidGl0bGVUZXh0XG4gICAgICAgICAgICAgICAgc2l6ZT17Mn1cbiAgICAgICAgICAgICAgICB2YXJpYXRpb249e3NlbGVjdGVkSXRlbSA/ICdpbmhlcml0JyA6ICdkYXJrR3JheSd9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aXRlbU5hbWVHZXR0ZXIoc2VsZWN0ZWRJdGVtKSB8fCBwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgPC9TdWJ0aXRsZVRleHQ+XG4gICAgICAgICAgICAgIDxTdmdJY29uXG4gICAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAgIGlzT3BlblxuICAgICAgICAgICAgICAgICAgICA/ICdhc3NldHMvaWNvbnMvaWMtYXJyb3ctdXAuc3ZnJ1xuICAgICAgICAgICAgICAgICAgICA6ICdhc3NldHMvaWNvbnMvaWMtYXJyb3ctZG93bi5zdmcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8SXRlbXNDb250YWluZXIgey4uLmdldE1lbnVQcm9wcygpfSBpc09wZW49e2lzT3Blbn0+XG4gICAgICAgICAgICAgIHtpc09wZW4gJiZcbiAgICAgICAgICAgICAgICAobm9JdGVtcyA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzhweCAxNnB4JywgcG9pbnRlckV2ZW50czogJ25vbmUnIH19PlxuICAgICAgICAgICAgICAgICAgICA8Qm9keVRleHQgc2l6ZT17M30gdmFyaWF0aW9uPVwiZGFya0dyYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7bm9JdGVtc01lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IGlzRXF1YWwoaXRlbSwgc2VsZWN0ZWRJdGVtKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxJdGVtQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2l0ZW19LSR7aWR4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1NwYWNpbmc9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRJdGVtUHJvcHMoeyBpdGVtLCBpbmRleDogaWR4IH0pfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2R5VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtpc1NlbGVjdGVkID8gMSA6IDN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1OYW1lR2V0dGVyKGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb2R5VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthcmVJdGVtc1JlbW92YWJsZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiYXNzZXRzL2ljb25zL2ljLWRlbGV0ZS5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldikgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVJlbW92ZUl0ZW0oaXRlbSwgZXYsIGRvd25zaGlmdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0l0ZW1zQ29udGFpbmVyPlxuICAgICAgICAgIDwvU3R5bGVkRHJvcGRvd24+XG4gICAgICAgICk7XG4gICAgICB9fVxuICAgIDwvRG93bnNoaWZ0PlxuICApO1xufVxuXG5leHBvcnQgdHlwZSBNdWx0aURyb3Bkb3duVmFsdWUgPSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGNoaXBMYWJlbD86IHN0cmluZztcbiAgdmFsdWU6IGFueTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlTZWxlY3REcm9wZG93blByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgaXRlbXM6IE11bHRpRHJvcGRvd25WYWx1ZVtdO1xuICBsYWJlbD86IHN0cmluZztcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIG9uQ2hhbmdlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uU2VsZWN0PzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uUmVtb3ZlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNdWx0aVNlbGVjdERyb3Bkb3duKHByb3BzOiBNdWx0aVNlbGVjdERyb3Bkb3duUHJvcHMpIHtcbiAgY29uc3QgeyBpdGVtcywgbGFiZWwsIHBsYWNlaG9sZGVyLCBvblNlbGVjdCwgb25DaGFuZ2UsIG9uUmVtb3ZlIH0gPSBwcm9wcztcblxuICBjb25zdCB7XG4gICAgZ2V0U2VsZWN0ZWRJdGVtUHJvcHMsXG4gICAgZ2V0RHJvcGRvd25Qcm9wcyxcbiAgICBhZGRTZWxlY3RlZEl0ZW0sXG4gICAgcmVtb3ZlU2VsZWN0ZWRJdGVtLFxuICAgIHNlbGVjdGVkSXRlbXMsXG4gIH0gPSB1c2VNdWx0aXBsZVNlbGVjdGlvbjxNdWx0aURyb3Bkb3duVmFsdWU+KHtcbiAgICBpbml0aWFsU2VsZWN0ZWRJdGVtczogdW5kZWZpbmVkLFxuICAgIG9uU2VsZWN0ZWRJdGVtc0NoYW5nZTogKGNoYW5nZXMpID0+IHtcbiAgICAgIG9uU2VsZWN0ICYmIG9uU2VsZWN0KGdldENoYW5nZUV2ZW50KGNoYW5nZXMuc2VsZWN0ZWRJdGVtcykpO1xuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IHtcbiAgICBpc09wZW4sXG4gICAgc2VsZWN0ZWRJdGVtLFxuICAgIGdldFRvZ2dsZUJ1dHRvblByb3BzLFxuICAgIGdldExhYmVsUHJvcHMsXG4gICAgZ2V0TWVudVByb3BzLFxuICAgIGdldEl0ZW1Qcm9wcyxcbiAgfSA9IHVzZVNlbGVjdCh7XG4gICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxuICAgIGRlZmF1bHRIaWdobGlnaHRlZEluZGV4OiAwLCAvLyBhZnRlciBzZWxlY3Rpb24sIGhpZ2hsaWdodCB0aGUgZmlyc3QgaXRlbS5cbiAgICBpdGVtcyxcbiAgICBzdGF0ZVJlZHVjZXI6IChzdGF0ZSwgYWN0aW9uQW5kQ2hhbmdlcykgPT4ge1xuICAgICAgY29uc3QgeyBjaGFuZ2VzLCB0eXBlIH0gPSBhY3Rpb25BbmRDaGFuZ2VzO1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgdXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMuVG9nZ2xlQnV0dG9uS2V5RG93bkVudGVyOlxuICAgICAgICBjYXNlIHVzZVNlbGVjdC5zdGF0ZUNoYW5nZVR5cGVzLlRvZ2dsZUJ1dHRvbktleURvd25TcGFjZUJ1dHRvbjpcbiAgICAgICAgY2FzZSB1c2VTZWxlY3Quc3RhdGVDaGFuZ2VUeXBlcy5JdGVtQ2xpY2s6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmNoYW5nZXMsXG4gICAgICAgICAgICBpc09wZW46IHRydWUsIC8vIGtlZXAgdGhlIG1lbnUgb3BlbiBhZnRlciBzZWxlY3Rpb24uXG4gICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gY2hhbmdlcztcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uU3RhdGVDaGFuZ2U6ICh7IHR5cGUsIHNlbGVjdGVkSXRlbTogbmV3U2VsZWN0ZWRJdGVtIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIHVzZVNlbGVjdC5zdGF0ZUNoYW5nZVR5cGVzLlRvZ2dsZUJ1dHRvbktleURvd25FbnRlcjpcbiAgICAgICAgY2FzZSB1c2VTZWxlY3Quc3RhdGVDaGFuZ2VUeXBlcy5Ub2dnbGVCdXR0b25LZXlEb3duU3BhY2VCdXR0b246XG4gICAgICAgIGNhc2UgdXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMuSXRlbUNsaWNrOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGlzQWxyZWFkeVNlbGVjdGVkID0gc2VsZWN0ZWRJdGVtcy5zb21lKFxuICAgICAgICAgICAgICAoaSkgPT4gaS52YWx1ZSA9PT0gbmV3U2VsZWN0ZWRJdGVtPy52YWx1ZVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKG5ld1NlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgICBpZiAoaXNBbHJlYWR5U2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVTZWxlY3RlZEl0ZW0obmV3U2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgICAgICBvblJlbW92ZSAmJiBvblJlbW92ZShnZXRDaGFuZ2VFdmVudChuZXdTZWxlY3RlZEl0ZW0pKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRTZWxlY3RlZEl0ZW0obmV3U2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSAmJiBvbkNoYW5nZShnZXRDaGFuZ2VFdmVudChuZXdTZWxlY3RlZEl0ZW0pKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWREcm9wZG93bj5cbiAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgIDxTdWJ0aXRsZVRleHQgc2l6ZT17MX0gey4uLmdldExhYmVsUHJvcHMoKX0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L1N1YnRpdGxlVGV4dD5cbiAgICAgICl9XG4gICAgICA8TXVsdGlTZWxlY3RDb250YWluZXJcbiAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICB7Li4uZ2V0VG9nZ2xlQnV0dG9uUHJvcHMoXG4gICAgICAgICAgZ2V0RHJvcGRvd25Qcm9wcyh7IHByZXZlbnRLZXlBY3Rpb246IGlzT3BlbiB9KVxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICA8T3ZlcmZsb3dXcmFwcGVyPlxuICAgICAgICAgIDxTdWJ0aXRsZVRleHRcbiAgICAgICAgICAgIHNpemU9ezJ9XG4gICAgICAgICAgICB2YXJpYXRpb249e3NlbGVjdGVkSXRlbSA/ICdpbmhlcml0JyA6ICdkYXJrR3JheSd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE92ZXJmbG93V3JhcHBlcj5cbiAgICAgICAgICAgICAgPEZsZXhSb3cgZ2FwPXs0fT5cbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRJdGVtcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXJXcmFwcGVyPntwbGFjZWhvbGRlcn08L1BsYWNlaG9sZGVyV3JhcHBlcj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcy5tYXAoKHNlbGVjdGVkSXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPENoaXBJdGVtQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtgc2VsZWN0ZWQtaXRlbS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgey4uLmdldFNlbGVjdGVkSXRlbVByb3BzKHsgc2VsZWN0ZWRJdGVtLCBpbmRleCB9KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Um93IGFsaWduPXsnY2VudGVyJ30gZ2FwPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEl0ZW0/LmNoaXBMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aVNlbGVjdERlbGV0ZUljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVTZWxlY3RlZEl0ZW0oc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MTR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17J2Fzc2V0cy9pY29ucy9pYy1kZWxldGUuc3ZnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Um93PlxuICAgICAgICAgICAgICAgICAgICA8L0NoaXBJdGVtQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgICAgICA8L092ZXJmbG93V3JhcHBlcj5cbiAgICAgICAgICA8L1N1YnRpdGxlVGV4dD5cbiAgICAgICAgPC9PdmVyZmxvd1dyYXBwZXI+XG4gICAgICAgIDxEcm9wZG93bkljb25XcmFwcGVyPlxuICAgICAgICAgIDxTdmdJY29uXG4gICAgICAgICAgICBzaXplPXsxNn1cbiAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgIGlzT3BlblxuICAgICAgICAgICAgICAgID8gJ2Fzc2V0cy9pY29ucy9pYy1hcnJvdy11cC5zdmcnXG4gICAgICAgICAgICAgICAgOiAnYXNzZXRzL2ljb25zL2ljLWFycm93LWRvd24uc3ZnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRHJvcGRvd25JY29uV3JhcHBlcj5cbiAgICAgIDwvTXVsdGlTZWxlY3RDb250YWluZXI+XG4gICAgICA8SXRlbXNDb250YWluZXIgey4uLmdldE1lbnVQcm9wcygpfSBpc09wZW49e2lzT3Blbn0+XG4gICAgICAgIHtpc09wZW4gJiZcbiAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWRJdGVtcz8uc29tZShcbiAgICAgICAgICAgICAgKGkpID0+IGkudmFsdWUgPT09IGl0ZW0udmFsdWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8SXRlbUNvbnRhaW5lclxuICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgaXRlbXNTcGFjaW5nPXsxMH1cbiAgICAgICAgICAgICAgICBrZXk9e2Ake2l0ZW0udmFsdWV9JHtpbmRleH1gfVxuICAgICAgICAgICAgICAgIHsuLi5nZXRJdGVtUHJvcHMoeyBpdGVtLCBpbmRleCB9KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCb2R5VGV4dCBzaXplPXtpc1NlbGVjdGVkID8gMSA6IDN9PntpdGVtLmxhYmVsfTwvQm9keVRleHQ+XG4gICAgICAgICAgICAgICAge2lzU2VsZWN0ZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgPENoZWNrSWNvbiBzaXplPXsxNH0gc3JjPXsnYXNzZXRzL2ljb25zL2ljLWNoZWNrbWFyay5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvSXRlbUNvbnRhaW5lcj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICA8L0l0ZW1zQ29udGFpbmVyPlxuICAgIDwvU3R5bGVkRHJvcGRvd24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuIl19