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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxTQUFTLEVBQUUsRUFFaEIsb0JBQW9CLEVBQ3BCLFNBQVMsR0FDVixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLE1BQU0sTUFBTSxtQkFBbUIsQ0FBQztBQUN2QyxPQUFPLE9BQU8sTUFBTSxpQkFBaUIsQ0FBQztBQUl0QyxPQUFPLFlBQVksTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRCxPQUFPLFFBQVEsTUFBTSx3QkFBd0IsQ0FBQztBQUM5QyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUNoRCxPQUFPLEVBQUUsTUFBTTtLQUNoQixDQUFDO0FBRitDLENBRS9DLENBQUMsQ0FBQztBQUVKLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBc0IsVUFBQyxFQUFpQjtRQUFmLEtBQUssV0FBQSxFQUFFLE1BQU0sWUFBQTtJQUFPLE9BQUEsQ0FBQztRQUM3RSxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJO1FBQ3JDLE1BQU0sRUFBRSxNQUFNO1FBQ2QsTUFBTSxFQUFFLEVBQUU7UUFDVixPQUFPLEVBQUUsUUFBUTtRQUNqQixVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWE7UUFDaEQsaUJBQWlCLEVBQUU7WUFDakIsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1lBQ2hELEdBQUcsRUFBRTtnQkFDSCxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFD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RUFBRSwrQkFBK0IsR0FBSSxDQUM5RCxNQU5JLFVBQUcsSUFBSSxDQUFDLEtBQUssU0FBRyxLQUFLLENBQUUsQ0FPZCxDQUNqQixDQUFDO29CQUNKLENBQUMsQ0FBQyxJQUNXLElBQ0YsQ0FDbEIsQ0FBQztBQUNKLENBQUM7QUFFRCxlQUFlLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBEb3duc2hpZnQsIHtcclxuICBDb250cm9sbGVyU3RhdGVBbmRIZWxwZXJzLFxyXG4gIHVzZU11bHRpcGxlU2VsZWN0aW9uLFxyXG4gIHVzZVNlbGVjdCxcclxufSBmcm9tICdkb3duc2hpZnQnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGlzRXF1YWwgZnJvbSAnZmFzdC1kZWVwLWVxdWFsJztcclxuXHJcbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcclxuXHJcbmltcG9ydCBTdWJ0aXRsZVRleHQgZnJvbSAnLi4vc3VidGl0bGUtdGV4dC9zdWJ0aXRsZS10ZXh0JztcclxuaW1wb3J0IEJvZHlUZXh0IGZyb20gJy4uL2JvZHktdGV4dC9ib2R5LXRleHQnO1xyXG5pbXBvcnQgRmxleFJvdyBmcm9tICcuLi9mbGV4LXJvdy9mbGV4LXJvdyc7XHJcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcclxuXHJcbmNvbnN0IFN0eWxlZERyb3Bkb3duID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIG91dGxpbmU6ICdub25lJyxcclxufSkpO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEZsZXhSb3cpPHsgaXNPcGVuOiBib29sZWFuIH0+KCh7IHRoZW1lLCBpc09wZW4gfSkgPT4gKHtcclxuICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxyXG4gIGJvcmRlcjogJ25vbmUnLFxyXG4gIGhlaWdodDogMzYsXHJcbiAgcGFkZGluZzogJzAgMTZweCcsXHJcbiAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxyXG4gICc6aG92ZXIsIDphY3RpdmUnOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXHJcbiAgICBzdmc6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWQsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEl0ZW1zQ29udGFpbmVyID0gc3R5bGVkLmRpdjx7IGlzT3BlbjogYm9vbGVhbiB9PigoeyB0aGVtZSwgaXNPcGVuIH0pID0+ICh7XHJcbiAgZGlzcGxheTogaXNPcGVuID8gJ2luaGVyaXQnIDogJ25vbmUnLFxyXG4gIG1hcmdpblRvcDogNCxcclxuICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxyXG4gIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcclxufSkpO1xyXG5cclxuY29uc3QgSXRlbUNvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gIG1pbkhlaWdodDogMzYsXHJcbiAgcGFkZGluZzogJzhweCAxNnB4JyxcclxuICAnOmhvdmVyLCA6YWN0aXZlJzoge1xyXG4gICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5Qmx1ZUhvdmVyLFxyXG4gICAgZm9udFdlaWdodDogNjAwLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IERlbGV0ZUljb24gPSBzdHlsZWQoU3ZnSWNvbikoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBwYXRoOiB7XHJcbiAgICBzdHJva2U6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcclxuICB9LFxyXG4gICc6aG92ZXIsIDphY3RpdmUnOiB7XHJcbiAgICBwYXRoOiB7XHJcbiAgICAgIHN0cm9rZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgTXVsdGlTZWxlY3RDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8eyBpc09wZW46IGJvb2xlYW4gfT4oXHJcbiAgKHsgdGhlbWUgfSkgPT4gKHtcclxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXHJcbiAgICBoZWlnaHQ6IDM2LFxyXG4gICAgcGFkZGluZzogJzAgOHB4JyxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcclxuICAgICc6aG92ZXIsIDphY3RpdmUnOiB7XHJcbiAgICAgIHN2Zzoge1xyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5UmVkLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KVxyXG4pO1xyXG5cclxuY29uc3QgUGxhY2Vob2xkZXJXcmFwcGVyID0gc3R5bGVkLnNwYW4oKHsgdGhlbWUgfSkgPT4gKHtcclxuICBwYWRkaW5nOiAnOHB4JyxcclxufSkpO1xyXG5cclxuY29uc3QgQ2hpcEl0ZW1Db250YWluZXIgPSBzdHlsZWQuc3BhbigoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXHJcbiAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgcGFkZGluZzogJzJweCA4cHgnLFxyXG4gIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFRlcnRyaWFyeSxcclxufSkpO1xyXG5cclxuY29uc3QgT3ZlcmZsb3dXcmFwcGVyID0gc3R5bGVkLnNwYW4oKHsgdGhlbWUgfSkgPT4gKHtcclxuICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxyXG59KSk7XHJcblxyXG5jb25zdCBEcm9wZG93bkljb25XcmFwcGVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIHBhZGRpbmc6ICcxMnB4IDEycHgnLFxyXG59KSk7XHJcblxyXG5jb25zdCBDaGVja0ljb24gPSBzdHlsZWQoU3ZnSWNvbikoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBwYXRoOiB7XHJcbiAgICBmaWxsOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IE11bHRpU2VsZWN0RGVsZXRlSWNvbiA9IHN0eWxlZChTdmdJY29uKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIHBhdGg6IHtcclxuICAgIHN0cm9rZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcclxuICB9LFxyXG4gICc6aG92ZXIsIDphY3RpdmUnOiB7XHJcbiAgICBwYXRoOiB7XHJcbiAgICAgIHN0cm9rZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UmVkLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgdHlwZSBEcm9wZG93blZhbHVlID0geyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH07XHJcbmV4cG9ydCB0eXBlIERyb3Bkb3duSXRlbTxUID0gRHJvcGRvd25WYWx1ZT4gPSBUO1xyXG5cclxuZXhwb3J0IHR5cGUgRHJvcGRvd25FdmVudFZhbHVlID0ge1xyXG4gIHRhcmdldDoge1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIHZhbHVlOiBEcm9wZG93blZhbHVlIHwgbnVsbDtcclxuICB9O1xyXG59O1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25Qcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XHJcbiAgaXRlbXM6IERyb3Bkb3duVmFsdWVbXTtcclxuICB2YWx1ZT86IERyb3Bkb3duVmFsdWUgfCBudWxsO1xyXG4gIGxhYmVsPzogc3RyaW5nO1xyXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG4gIGFyZUl0ZW1zUmVtb3ZhYmxlPzogYm9vbGVhbjtcclxuICBpc1NlYXJjaGFibGU/OiBib29sZWFuO1xyXG4gIG9uQ2hhbmdlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XHJcbiAgb25TZWxlY3Q/OiAoZXY6IERyb3Bkb3duRXZlbnRWYWx1ZSkgPT4gdm9pZDtcclxuICBvblJlbW92ZT86IChldjogRHJvcGRvd25FdmVudFZhbHVlKSA9PiB2b2lkO1xyXG5cclxuICBub0l0ZW1zTWVzc2FnZT86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgZ2V0Q2hhbmdlRXZlbnQgPSAodmFsdWU6IGFueSk6IERyb3Bkb3duRXZlbnRWYWx1ZSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRhcmdldDoge1xyXG4gICAgICBuYW1lOiB1bmRlZmluZWQsXHJcbiAgICAgIHZhbHVlLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERyb3Bkb3duKHByb3BzOiBEcm9wZG93blByb3BzKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgaXRlbXMsXHJcbiAgICBwbGFjZWhvbGRlcixcclxuICAgIGxhYmVsLFxyXG4gICAgYXJlSXRlbXNSZW1vdmFibGUsXHJcbiAgICB2YWx1ZSxcclxuICAgIHN0eWxlLFxyXG4gICAgb25TZWxlY3QsXHJcbiAgICBvblJlbW92ZSxcclxuICAgIG5vSXRlbXNNZXNzYWdlID0gJ05vIE9wdGlvbnMhJyxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGdldENoYW5nZUV2ZW50ID0gKHZhbHVlOiBEcm9wZG93blZhbHVlIHwgbnVsbCk6IERyb3Bkb3duRXZlbnRWYWx1ZSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0YXJnZXQ6IHtcclxuICAgICAgICBuYW1lOiB1bmRlZmluZWQsXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlbW92ZUl0ZW0gPSAoXHJcbiAgICBpdGVtOiBEcm9wZG93bkl0ZW0sXHJcbiAgICBldixcclxuICAgIGRvd25zaGlmdDogQ29udHJvbGxlclN0YXRlQW5kSGVscGVyczxEcm9wZG93bkl0ZW0+XHJcbiAgKSA9PiB7XHJcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgY29uc3QgdmFsdWUgPSBpdGVtICYmIGl0ZW1WYWx1ZUdldHRlcihpdGVtKTtcclxuICAgIG9uUmVtb3ZlICYmIG9uUmVtb3ZlKGdldENoYW5nZUV2ZW50KHZhbHVlKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaXRlbVZhbHVlR2V0dGVyID0gKGl0ZW0pID0+IGl0ZW0udmFsdWU7XHJcbiAgY29uc3QgaXRlbU5hbWVHZXR0ZXIgPSAoaXRlbSkgPT4gaXRlbS5sYWJlbDtcclxuXHJcbiAgY29uc3QgaGFuZGxlSXRlbVNlbGVjdCA9IChpdGVtKSA9PiB7XHJcbiAgICBvblNlbGVjdCAmJiBvblNlbGVjdChpdGVtKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRJdGVtVG9TdHJpbmcgPSAoaXRlbSkgPT4ge1xyXG4gICAgaWYgKGl0ZW0gPT09IG51bGwpIHJldHVybiAnJztcclxuICAgIHJldHVybiB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycgPyBpdGVtIDogaXRlbS5sYWJlbDtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERvd25zaGlmdFxyXG4gICAgICBpdGVtVG9TdHJpbmc9e2dldEl0ZW1Ub1N0cmluZ31cclxuICAgICAgb25TZWxlY3Q9e2hhbmRsZUl0ZW1TZWxlY3R9XHJcbiAgICAgIHNlbGVjdGVkSXRlbT17dmFsdWV9XHJcbiAgICAgIHNlbGVjdGVkSXRlbUNoYW5nZWQ9eyhwcmV2SXRlbSwgaXRlbSkgPT4gIWlzRXF1YWwocHJldkl0ZW0sIGl0ZW0pfVxyXG4gICAgPlxyXG4gICAgICB7KGRvd25zaGlmdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgIGdldEl0ZW1Qcm9wcyxcclxuICAgICAgICAgIGdldE1lbnVQcm9wcyxcclxuICAgICAgICAgIGlzT3BlbixcclxuICAgICAgICAgIHNlbGVjdGVkSXRlbSxcclxuICAgICAgICAgIGdldFJvb3RQcm9wcyxcclxuICAgICAgICAgIGdldFRvZ2dsZUJ1dHRvblByb3BzLFxyXG4gICAgICAgIH0gPSBkb3duc2hpZnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IG5vSXRlbXMgPSAhKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8U3R5bGVkRHJvcGRvd25cclxuICAgICAgICAgICAgey4uLmdldFJvb3RQcm9wcyh7IHJlZktleTogJ2lubmVyUmVmJyB9KX1cclxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgICAgICB0YWJJbmRleD1cIjBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bGFiZWwgJiYgPFN1YnRpdGxlVGV4dCBzaXplPXsxfT57bGFiZWx9PC9TdWJ0aXRsZVRleHQ+fVxyXG4gICAgICAgICAgICA8Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgaXNPcGVuPXtpc09wZW59XHJcbiAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICAgICAgICB7Li4uZ2V0VG9nZ2xlQnV0dG9uUHJvcHMoKX1cclxuICAgICAgICAgICAgICBpdGVtc1NwYWNpbmc9ezEwfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFN1YnRpdGxlVGV4dFxyXG4gICAgICAgICAgICAgICAgc2l6ZT17Mn1cclxuICAgICAgICAgICAgICAgIHZhcmlhdGlvbj17c2VsZWN0ZWRJdGVtID8gJ2luaGVyaXQnIDogJ2RhcmtHcmF5J31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW1OYW1lR2V0dGVyKHNlbGVjdGVkSXRlbSkgfHwgcGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgPC9TdWJ0aXRsZVRleHQ+XHJcbiAgICAgICAgICAgICAgPFN2Z0ljb25cclxuICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgIGlzT3BlblxyXG4gICAgICAgICAgICAgICAgICAgID8gJ2Fzc2V0cy9pY29ucy9pYy1hcnJvdy11cC5zdmcnXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnYXNzZXRzL2ljb25zL2ljLWFycm93LWRvd24uc3ZnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8SXRlbXNDb250YWluZXIgey4uLmdldE1lbnVQcm9wcygpfSBpc09wZW49e2lzT3Blbn0+XHJcbiAgICAgICAgICAgICAge2lzT3BlbiAmJlxyXG4gICAgICAgICAgICAgICAgKG5vSXRlbXMgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzhweCAxNnB4JywgcG9pbnRlckV2ZW50czogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb2R5VGV4dCBzaXplPXszfSB2YXJpYXRpb249XCJkYXJrR3JheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge25vSXRlbXNNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm9keVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gaXNFcXVhbChpdGVtLCBzZWxlY3RlZEl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPEl0ZW1Db250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtpdGVtfS0ke2lkeH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNTcGFjaW5nPXsxMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17aXNTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldEl0ZW1Qcm9wcyh7IGl0ZW0sIGluZGV4OiBpZHggfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2R5VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e2lzU2VsZWN0ZWQgPyAxIDogM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtTmFtZUdldHRlcihpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb2R5VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FyZUl0ZW1zUmVtb3ZhYmxlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiYXNzZXRzL2ljb25zL2ljLWRlbGV0ZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVSZW1vdmVJdGVtKGl0ZW0sIGV2LCBkb3duc2hpZnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvSXRlbXNDb250YWluZXI+XHJcbiAgICAgICAgICA8L1N0eWxlZERyb3Bkb3duPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH19XHJcbiAgICA8L0Rvd25zaGlmdD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBNdWx0aURyb3Bkb3duVmFsdWUgPSB7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBjaGlwTGFiZWw/OiBzdHJpbmc7XHJcbiAgdmFsdWU6IGFueTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlTZWxlY3REcm9wZG93blByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcclxuICBpdGVtczogTXVsdGlEcm9wZG93blZhbHVlW107XHJcbiAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbiAgb25DaGFuZ2U/OiAoZXY6IERyb3Bkb3duRXZlbnRWYWx1ZSkgPT4gdm9pZDtcclxuICBvblNlbGVjdD86IChldjogRHJvcGRvd25FdmVudFZhbHVlKSA9PiB2b2lkO1xyXG4gIG9uUmVtb3ZlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNdWx0aVNlbGVjdERyb3Bkb3duKHByb3BzOiBNdWx0aVNlbGVjdERyb3Bkb3duUHJvcHMpIHtcclxuICBjb25zdCB7IGl0ZW1zLCBsYWJlbCwgcGxhY2Vob2xkZXIsIG9uU2VsZWN0LCBvbkNoYW5nZSwgb25SZW1vdmUgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBnZXRTZWxlY3RlZEl0ZW1Qcm9wcyxcclxuICAgIGdldERyb3Bkb3duUHJvcHMsXHJcbiAgICBhZGRTZWxlY3RlZEl0ZW0sXHJcbiAgICByZW1vdmVTZWxlY3RlZEl0ZW0sXHJcbiAgICBzZWxlY3RlZEl0ZW1zLFxyXG4gIH0gPSB1c2VNdWx0aXBsZVNlbGVjdGlvbjxNdWx0aURyb3Bkb3duVmFsdWU+KHtcclxuICAgIGluaXRpYWxTZWxlY3RlZEl0ZW1zOiB1bmRlZmluZWQsXHJcbiAgICBvblNlbGVjdGVkSXRlbXNDaGFuZ2U6IChjaGFuZ2VzKSA9PiB7XHJcbiAgICAgIG9uU2VsZWN0ICYmIG9uU2VsZWN0KGdldENoYW5nZUV2ZW50KGNoYW5nZXMuc2VsZWN0ZWRJdGVtcykpO1xyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgaXNPcGVuLFxyXG4gICAgc2VsZWN0ZWRJdGVtLFxyXG4gICAgZ2V0VG9nZ2xlQnV0dG9uUHJvcHMsXHJcbiAgICBnZXRMYWJlbFByb3BzLFxyXG4gICAgZ2V0TWVudVByb3BzLFxyXG4gICAgZ2V0SXRlbVByb3BzLFxyXG4gIH0gPSB1c2VTZWxlY3Qoe1xyXG4gICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxyXG4gICAgZGVmYXVsdEhpZ2hsaWdodGVkSW5kZXg6IDAsIC8vIGFmdGVyIHNlbGVjdGlvbiwgaGlnaGxpZ2h0IHRoZSBmaXJzdCBpdGVtLlxyXG4gICAgaXRlbXMsXHJcbiAgICBzdGF0ZVJlZHVjZXI6IChzdGF0ZSwgYWN0aW9uQW5kQ2hhbmdlcykgPT4ge1xyXG4gICAgICBjb25zdCB7IGNoYW5nZXMsIHR5cGUgfSA9IGFjdGlvbkFuZENoYW5nZXM7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgdXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMuVG9nZ2xlQnV0dG9uS2V5RG93bkVudGVyOlxyXG4gICAgICAgIGNhc2UgdXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMuVG9nZ2xlQnV0dG9uS2V5RG93blNwYWNlQnV0dG9uOlxyXG4gICAgICAgIGNhc2UgdXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMuSXRlbUNsaWNrOlxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uY2hhbmdlcyxcclxuICAgICAgICAgICAgaXNPcGVuOiB0cnVlLCAvLyBrZWVwIHRoZSBtZW51IG9wZW4gYWZ0ZXIgc2VsZWN0aW9uLlxyXG4gICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIGNoYW5nZXM7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvblN0YXRlQ2hhbmdlOiAoeyB0eXBlLCBzZWxlY3RlZEl0ZW06IG5ld1NlbGVjdGVkSXRlbSB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgdXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMuVG9nZ2xlQnV0dG9uS2V5RG93bkVudGVyOlxyXG4gICAgICAgIGNhc2UgdXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMuVG9nZ2xlQnV0dG9uS2V5RG93blNwYWNlQnV0dG9uOlxyXG4gICAgICAgIGNhc2UgdXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMuSXRlbUNsaWNrOlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBpc0FscmVhZHlTZWxlY3RlZCA9IHNlbGVjdGVkSXRlbXMuc29tZShcclxuICAgICAgICAgICAgICAoaSkgPT4gaS52YWx1ZSA9PT0gbmV3U2VsZWN0ZWRJdGVtPy52YWx1ZVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5ld1NlbGVjdGVkSXRlbSkge1xyXG4gICAgICAgICAgICAgIGlmIChpc0FscmVhZHlTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlU2VsZWN0ZWRJdGVtKG5ld1NlbGVjdGVkSXRlbSk7XHJcbiAgICAgICAgICAgICAgICBvblJlbW92ZSAmJiBvblJlbW92ZShnZXRDaGFuZ2VFdmVudChuZXdTZWxlY3RlZEl0ZW0pKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRkU2VsZWN0ZWRJdGVtKG5ld1NlbGVjdGVkSXRlbSk7XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSAmJiBvbkNoYW5nZShnZXRDaGFuZ2VFdmVudChuZXdTZWxlY3RlZEl0ZW0pKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWREcm9wZG93bj5cclxuICAgICAge2xhYmVsICYmIChcclxuICAgICAgICA8U3VidGl0bGVUZXh0IHNpemU9ezF9IHsuLi5nZXRMYWJlbFByb3BzKCl9PlxyXG4gICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgIDwvU3VidGl0bGVUZXh0PlxyXG4gICAgICApfVxyXG4gICAgICA8TXVsdGlTZWxlY3RDb250YWluZXJcclxuICAgICAgICBpc09wZW49e2lzT3Blbn1cclxuICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgIHsuLi5nZXRUb2dnbGVCdXR0b25Qcm9wcyhcclxuICAgICAgICAgIGdldERyb3Bkb3duUHJvcHMoeyBwcmV2ZW50S2V5QWN0aW9uOiBpc09wZW4gfSlcclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAgPE92ZXJmbG93V3JhcHBlcj5cclxuICAgICAgICAgIDxTdWJ0aXRsZVRleHRcclxuICAgICAgICAgICAgc2l6ZT17Mn1cclxuICAgICAgICAgICAgdmFyaWF0aW9uPXtzZWxlY3RlZEl0ZW0gPyAnaW5oZXJpdCcgOiAnZGFya0dyYXknfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8T3ZlcmZsb3dXcmFwcGVyPlxyXG4gICAgICAgICAgICAgIDxGbGV4Um93IGdhcD17NH0+XHJcbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRJdGVtcy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlcldyYXBwZXI+e3BsYWNlaG9sZGVyfTwvUGxhY2Vob2xkZXJXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcy5tYXAoKHNlbGVjdGVkSXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Q2hpcEl0ZW1Db250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17YHNlbGVjdGVkLWl0ZW0tJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgey4uLmdldFNlbGVjdGVkSXRlbVByb3BzKHsgc2VsZWN0ZWRJdGVtLCBpbmRleCB9KX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RmxleFJvdyBhbGlnbj17J2NlbnRlcid9IGdhcD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEl0ZW0/LmNoaXBMYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE11bHRpU2VsZWN0RGVsZXRlSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU2VsZWN0ZWRJdGVtKHNlbGVjdGVkSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsxNH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9eydhc3NldHMvaWNvbnMvaWMtZGVsZXRlLnN2Zyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DaGlwSXRlbUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9GbGV4Um93PlxyXG4gICAgICAgICAgICA8L092ZXJmbG93V3JhcHBlcj5cclxuICAgICAgICAgIDwvU3VidGl0bGVUZXh0PlxyXG4gICAgICAgIDwvT3ZlcmZsb3dXcmFwcGVyPlxyXG4gICAgICAgIDxEcm9wZG93bkljb25XcmFwcGVyPlxyXG4gICAgICAgICAgPFN2Z0ljb25cclxuICAgICAgICAgICAgc2l6ZT17MTZ9XHJcbiAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgaXNPcGVuXHJcbiAgICAgICAgICAgICAgICA/ICdhc3NldHMvaWNvbnMvaWMtYXJyb3ctdXAuc3ZnJ1xyXG4gICAgICAgICAgICAgICAgOiAnYXNzZXRzL2ljb25zL2ljLWFycm93LWRvd24uc3ZnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRHJvcGRvd25JY29uV3JhcHBlcj5cclxuICAgICAgPC9NdWx0aVNlbGVjdENvbnRhaW5lcj5cclxuICAgICAgPEl0ZW1zQ29udGFpbmVyIHsuLi5nZXRNZW51UHJvcHMoKX0gaXNPcGVuPXtpc09wZW59PlxyXG4gICAgICAgIHtpc09wZW4gJiZcclxuICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkSXRlbXM/LnNvbWUoXHJcbiAgICAgICAgICAgICAgKGkpID0+IGkudmFsdWUgPT09IGl0ZW0udmFsdWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8SXRlbUNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICAgICAgaXRlbXNTcGFjaW5nPXsxMH1cclxuICAgICAgICAgICAgICAgIGtleT17YCR7aXRlbS52YWx1ZX0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICB7Li4uZ2V0SXRlbVByb3BzKHsgaXRlbSwgaW5kZXggfSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJvZHlUZXh0IHNpemU9e2lzU2VsZWN0ZWQgPyAxIDogM30+e2l0ZW0ubGFiZWx9PC9Cb2R5VGV4dD5cclxuICAgICAgICAgICAgICAgIHtpc1NlbGVjdGVkICYmIChcclxuICAgICAgICAgICAgICAgICAgPENoZWNrSWNvbiBzaXplPXsxNH0gc3JjPXsnYXNzZXRzL2ljb25zL2ljLWNoZWNrbWFyay5zdmcnfSAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0l0ZW1Db250YWluZXI+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgPC9JdGVtc0NvbnRhaW5lcj5cclxuICAgIDwvU3R5bGVkRHJvcGRvd24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XHJcbiJdfQ==