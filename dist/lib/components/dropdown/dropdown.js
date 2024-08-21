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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBYyxFQUFFLFNBQVMsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN6QyxPQUFPLFNBQVMsRUFBRSxFQUVoQixvQkFBb0IsRUFDcEIsU0FBUyxHQUNWLE1BQU0sV0FBVyxDQUFDO0FBQ25CLE9BQU8sTUFBTSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZDLE9BQU8sT0FBTyxNQUFNLGlCQUFpQixDQUFDO0FBSXRDLE9BQU8sUUFBUSxNQUFNLHdCQUF3QixDQUFDO0FBQzlDLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBQzNDLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBQzNDLE9BQU8sVUFBVSxNQUFNLDRCQUE0QixDQUFDO0FBRXBELE9BQU8sTUFBTSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hELE9BQU8sUUFBUSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVELE9BQU8sYUFBYSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2hFLE9BQU8sVUFBVSxNQUFNLGtDQUFrQyxDQUFDO0FBRTFELElBQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQy9CLFVBQUMsRUFBbUI7UUFBakIsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBO0lBQU8sT0FBQSxZQUN2QixPQUFPLEVBQUUsTUFBTSxJQUVaLENBQUMsUUFBUSxJQUFJO1FBQ2QsT0FBTyxFQUFFLEtBQUs7UUFDZCxhQUFhLEVBQUUsTUFBTTtLQUN0QixDQUFDLEVBQ0Y7QUFQdUIsQ0FPdkIsQ0FDSCxDQUFDO0FBRUYsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFzQixVQUFDLEVBQWlCO1FBQWYsS0FBSyxXQUFBLEVBQUUsTUFBTSxZQUFBO0lBQU8sT0FBQSxDQUFDO1FBQzdFLFlB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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEb3duc2hpZnQsIHtcbiAgQ29udHJvbGxlclN0YXRlQW5kSGVscGVycyxcbiAgdXNlTXVsdGlwbGVTZWxlY3Rpb24sXG4gIHVzZVNlbGVjdCxcbn0gZnJvbSAnZG93bnNoaWZ0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGlzRXF1YWwgZnJvbSAnZmFzdC1kZWVwLWVxdWFsJztcblxuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQgQm9keVRleHQgZnJvbSAnLi4vYm9keS10ZXh0L2JvZHktdGV4dCc7XG5pbXBvcnQgRmxleFJvdyBmcm9tICcuLi9mbGV4LXJvdy9mbGV4LXJvdyc7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tICcuLi9zdmctaWNvbi9zdmctaWNvbic7XG5pbXBvcnQgRmxleENvbHVtbiBmcm9tICcuLi9mbGV4LWNvbHVtbi9mbGV4LWNvbHVtbic7XG5cbmltcG9ydCBVcEljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWFycm93LXVwLnN2Zyc7XG5pbXBvcnQgRG93bkljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWFycm93LWRvd24uc3ZnJztcbmltcG9ydCBDaGVja21hcmtJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy1jaGVja21hcmsuc3ZnJztcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy1kZWxldGUuc3ZnJztcblxuY29uc3QgU3R5bGVkRHJvcGRvd24gPSBzdHlsZWQuZGl2PHsgZGlzYWJsZWQ/OiBib29sZWFuIH0+KFxuICAoeyB0aGVtZSwgZGlzYWJsZWQgfSkgPT4gKHtcbiAgICBvdXRsaW5lOiAnbm9uZScsXG5cbiAgICAuLi4oZGlzYWJsZWQgJiYge1xuICAgICAgb3BhY2l0eTogJzAuNScsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgfSksXG4gIH0pXG4pO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8eyBpc09wZW46IGJvb2xlYW4gfT4oKHsgdGhlbWUsIGlzT3BlbiB9KSA9PiAoe1xuICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICBib3JkZXI6ICdub25lJyxcbiAgaGVpZ2h0OiAzNixcbiAgcGFkZGluZzogJzAgMTZweCcsXG4gIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcbiAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gICAgc3ZnOiB7XG4gICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcbiAgICB9LFxuICB9LFxufSkpO1xuXG5jb25zdCBJdGVtc0NvbnRhaW5lciA9IHN0eWxlZC5kaXY8eyBpc09wZW46IGJvb2xlYW4gfT4oKHsgdGhlbWUsIGlzT3BlbiB9KSA9PiAoe1xuICBkaXNwbGF5OiBpc09wZW4gPyAnaW5oZXJpdCcgOiAnbm9uZScsXG4gIG1hcmdpblRvcDogNCxcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxufSkpO1xuXG5jb25zdCBJdGVtQ29udGFpbmVyID0gc3R5bGVkKEZsZXhSb3cpKCh7IHRoZW1lIH0pID0+ICh7XG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBtaW5IZWlnaHQ6IDM2LFxuICBwYWRkaW5nOiAnOHB4IDE2cHgnLFxuICAnOmhvdmVyLCA6YWN0aXZlJzoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeUJsdWVIb3ZlcixcbiAgICBmb250V2VpZ2h0OiA2MDAsXG4gIH0sXG59KSk7XG5cbmNvbnN0IERlbGV0ZVN2Z0ljb24gPSBzdHlsZWQoU3ZnSWNvbikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgcGF0aDoge1xuICAgIHN0cm9rZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxuICB9LFxuICAnOmhvdmVyLCA6YWN0aXZlJzoge1xuICAgIHBhdGg6IHtcbiAgICAgIHN0cm9rZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcbiAgICB9LFxuICB9LFxufSkpO1xuXG5jb25zdCBDbGVhclN2Z0ljb24gPSBzdHlsZWQoU3ZnSWNvbikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgcGF0aDoge1xuICAgIHN0cm9rZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeVxuICB9XG59KSk7XG5cbmNvbnN0IE11bHRpU2VsZWN0Q29udGFpbmVyID0gc3R5bGVkKEZsZXhSb3cpPHsgaXNPcGVuOiBib29sZWFuIH0+KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4gICAgcGFkZGluZzogJzhweCcsXG4gICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxuICAgICc6aG92ZXIsIDphY3RpdmUnOiB7XG4gICAgICBzdmc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWQsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5jb25zdCBQbGFjZWhvbGRlcldyYXBwZXIgPSBzdHlsZWQuc3BhbigoeyB0aGVtZSB9KSA9PiAoe1xuICBwYWRkaW5nOiAnMCA4cHgnLFxufSkpO1xuXG5jb25zdCBDaGlwSXRlbUNvbnRhaW5lciA9IHN0eWxlZC5zcGFuKCh7IHRoZW1lIH0pID0+ICh7XG4gIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBwYWRkaW5nOiAnMnB4IDhweCcsXG4gIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFRlcnRyaWFyeSxcbiAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXG59KSk7XG5cbmNvbnN0IE92ZXJmbG93V3JhcHBlciA9IHN0eWxlZC5zcGFuKCh7IHRoZW1lIH0pID0+ICh7XG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbn0pKTtcblxuY29uc3QgRHJvcGRvd25JY29uV3JhcHBlciA9IHN0eWxlZChGbGV4Um93KSgoeyB0aGVtZSB9KSA9PiAoe1xuICBwYWRkaW5nUmlnaHQ6ICc4cHgnLFxuICBtYXJnaW5MZWZ0OiAnOHB4Jyxcbn0pKTtcblxuY29uc3QgQ2hlY2tJY29uID0gc3R5bGVkKFN2Z0ljb24pKCh7IHRoZW1lIH0pID0+ICh7XG4gIHBhdGg6IHtcbiAgICBmaWxsOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICB9LFxufSkpO1xuXG5jb25zdCBNdWx0aVNlbGVjdERlbGV0ZUljb24gPSBzdHlsZWQoU3ZnSWNvbikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgcGF0aDoge1xuICAgIHN0cm9rZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgfSxcbiAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICBwYXRoOiB7XG4gICAgICBzdHJva2U6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFJlZCxcbiAgICB9LFxuICB9LFxufSkpO1xuXG5leHBvcnQgdHlwZSBEcm9wZG93blZhbHVlID0geyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH07XG5leHBvcnQgdHlwZSBEcm9wZG93bkl0ZW08VCA9IERyb3Bkb3duVmFsdWU+ID0gVDtcblxuZXhwb3J0IHR5cGUgRHJvcGRvd25FdmVudFZhbHVlID0ge1xuICB0YXJnZXQ6IHtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHZhbHVlOiBEcm9wZG93blZhbHVlIHwgbnVsbDtcbiAgfTtcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBEcm9wZG93blByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgaXRlbXM6IERyb3Bkb3duVmFsdWVbXTtcbiAgdmFsdWU/OiBEcm9wZG93blZhbHVlIHwgbnVsbDtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBhcmVJdGVtc1JlbW92YWJsZT86IGJvb2xlYW47XG4gIGlzU2VhcmNoYWJsZT86IGJvb2xlYW47XG4gIG9uQ2hhbmdlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uU2VsZWN0PzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG4gIG9uUmVtb3ZlPzogKGV2OiBEcm9wZG93bkV2ZW50VmFsdWUpID0+IHZvaWQ7XG5cbiAgbm9JdGVtc01lc3NhZ2U/OiBzdHJpbmc7XG59XG5cbmNvbnN0IGdldENoYW5nZUV2ZW50ID0gKHZhbHVlOiBhbnkpOiBEcm9wZG93bkV2ZW50VmFsdWUgPT4ge1xuICByZXR1cm4ge1xuICAgIHRhcmdldDoge1xuICAgICAgbmFtZTogdW5kZWZpbmVkLFxuICAgICAgdmFsdWUsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBEcm9wZG93bihwcm9wczogRHJvcGRvd25Qcm9wcykge1xuICBjb25zdCB7XG4gICAgaXRlbXMsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgbGFiZWwsXG4gICAgYXJlSXRlbXNSZW1vdmFibGUsXG4gICAgdmFsdWUsXG4gICAgc3R5bGUsXG4gICAgb25TZWxlY3QsXG4gICAgb25SZW1vdmUsXG4gICAgbm9JdGVtc01lc3NhZ2UgPSAnTm8gT3B0aW9ucyEnLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZ2V0Q2hhbmdlRXZlbnQgPSAodmFsdWU6IERyb3Bkb3duVmFsdWUgfCBudWxsKTogRHJvcGRvd25FdmVudFZhbHVlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdGFyZ2V0OiB7XG4gICAgICAgIG5hbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgdmFsdWUsXG4gICAgICB9LFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlSXRlbSA9IChcbiAgICBpdGVtOiBEcm9wZG93bkl0ZW0sXG4gICAgZXYsXG4gICAgZG93bnNoaWZ0OiBDb250cm9sbGVyU3RhdGVBbmRIZWxwZXJzPERyb3Bkb3duSXRlbT5cbiAgKSA9PiB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGNvbnN0IHZhbHVlID0gaXRlbSAmJiBpdGVtVmFsdWVHZXR0ZXIoaXRlbSk7XG4gICAgb25SZW1vdmUgJiYgb25SZW1vdmUoZ2V0Q2hhbmdlRXZlbnQodmFsdWUpKTtcbiAgfTtcblxuICBjb25zdCBpdGVtVmFsdWVHZXR0ZXIgPSAoaXRlbSkgPT4gaXRlbS52YWx1ZTtcbiAgY29uc3QgaXRlbU5hbWVHZXR0ZXIgPSAoaXRlbSkgPT4gaXRlbS5sYWJlbDtcblxuICBjb25zdCBoYW5kbGVJdGVtU2VsZWN0ID0gKGl0ZW0pID0+IHtcbiAgICBvblNlbGVjdCAmJiBvblNlbGVjdChpdGVtKTtcbiAgfTtcblxuICBjb25zdCBnZXRJdGVtVG9TdHJpbmcgPSAoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtID09PSBudWxsKSByZXR1cm4gJyc7XG4gICAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyA/IGl0ZW0gOiBpdGVtLmxhYmVsO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERvd25zaGlmdFxuICAgICAgaXRlbVRvU3RyaW5nPXtnZXRJdGVtVG9TdHJpbmd9XG4gICAgICBvblNlbGVjdD17aGFuZGxlSXRlbVNlbGVjdH1cbiAgICAgIHNlbGVjdGVkSXRlbT17dmFsdWV9XG4gICAgICBzZWxlY3RlZEl0ZW1DaGFuZ2VkPXsocHJldkl0ZW0sIGl0ZW0pID0+ICFpc0VxdWFsKHByZXZJdGVtLCBpdGVtKX1cbiAgICA+XG4gICAgICB7KGRvd25zaGlmdCkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgZ2V0SXRlbVByb3BzLFxuICAgICAgICAgIGdldE1lbnVQcm9wcyxcbiAgICAgICAgICBpc09wZW4sXG4gICAgICAgICAgc2VsZWN0ZWRJdGVtLFxuICAgICAgICAgIGdldFJvb3RQcm9wcyxcbiAgICAgICAgICBnZXRUb2dnbGVCdXR0b25Qcm9wcyxcbiAgICAgICAgfSA9IGRvd25zaGlmdDtcblxuICAgICAgICBjb25zdCBub0l0ZW1zID0gIShpdGVtcyAmJiBpdGVtcy5sZW5ndGgpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFN0eWxlZERyb3Bkb3duXG4gICAgICAgICAgICB7Li4uZ2V0Um9vdFByb3BzKHsgcmVmS2V5OiAnaW5uZXJSZWYnIH0pfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgICAgICA8Qm9keVRleHQgbGluZUhlaWdodD17J3hzJ30gc2l6ZT17MX0+XG4gICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICB7Li4uZ2V0VG9nZ2xlQnV0dG9uUHJvcHMoKX1cbiAgICAgICAgICAgICAgaXRlbXNTcGFjaW5nPXsxMH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJvZHlUZXh0XG4gICAgICAgICAgICAgICAgc2l6ZT17M31cbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PXsneHMnfVxuICAgICAgICAgICAgICAgIHZhcmlhdGlvbj17c2VsZWN0ZWRJdGVtID8gJ2luaGVyaXQnIDogJ2RhcmtHcmF5J31cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpdGVtTmFtZUdldHRlcihzZWxlY3RlZEl0ZW0pIHx8IHBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgICA8U3ZnSWNvbiBzcmM9e2lzT3BlbiA/IFVwSWNvbiA6IERvd25JY29ufSAvPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8SXRlbXNDb250YWluZXIgey4uLmdldE1lbnVQcm9wcygpfSBpc09wZW49e2lzT3Blbn0+XG4gICAgICAgICAgICAgIHtpc09wZW4gJiZcbiAgICAgICAgICAgICAgICAobm9JdGVtcyA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzhweCAxNnB4JywgcG9pbnRlckV2ZW50czogJ25vbmUnIH19PlxuICAgICAgICAgICAgICAgICAgICA8Qm9keVRleHRcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPXszfVxuICAgICAgICAgICAgICAgICAgICAgIHNjYWxlPXsneHMnfVxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9eyd4cyd9XG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uPVwiZGFya0dyYXlcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge25vSXRlbXNNZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBpc0VxdWFsKGl0ZW0sIHNlbGVjdGVkSXRlbSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8SXRlbUNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtpdGVtfS0ke2lkeH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNTcGFjaW5nPXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0SXRlbVByb3BzKHsgaXRlbSwgaW5kZXg6IGlkeCB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9keVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17aXNTZWxlY3RlZCA/IDEgOiAzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlPXsneHMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PXsneHMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbU5hbWVHZXR0ZXIoaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAge2FyZUl0ZW1zUmVtb3ZhYmxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZVN2Z0ljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e0RlbGV0ZUljb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUmVtb3ZlSXRlbShpdGVtLCBldiwgZG93bnNoaWZ0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9JdGVtQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvSXRlbXNDb250YWluZXI+XG4gICAgICAgICAgPC9TdHlsZWREcm9wZG93bj5cbiAgICAgICAgKTtcbiAgICAgIH19XG4gICAgPC9Eb3duc2hpZnQ+XG4gICk7XG59XG5cbmV4cG9ydCB0eXBlIE11bHRpRHJvcGRvd25WYWx1ZSA9IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgY2hpcExhYmVsPzogc3RyaW5nO1xuICBjaGlwTmFtZT86IHN0cmluZztcbiAgdmFsdWU6IGFueTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlTZWxlY3REcm9wZG93blByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgdmFsdWU/OiBNdWx0aURyb3Bkb3duVmFsdWVbXTtcbiAgaXRlbXM6IE11bHRpRHJvcGRvd25WYWx1ZVtdO1xuICBsYWJlbD86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBvbkNoYW5nZT86IChldjogRHJvcGRvd25FdmVudFZhbHVlKSA9PiB2b2lkO1xuICBvblNlbGVjdD86IChldjogRHJvcGRvd25FdmVudFZhbHVlKSA9PiB2b2lkO1xuICBvblJlbW92ZT86IChldjogRHJvcGRvd25FdmVudFZhbHVlKSA9PiB2b2lkO1xuICBvbkNsZWFyQWxsSXRlbXM/OiAoZXY6IERyb3Bkb3duRXZlbnRWYWx1ZSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE11bHRpU2VsZWN0RHJvcGRvd24ocHJvcHM6IE11bHRpU2VsZWN0RHJvcGRvd25Qcm9wcykge1xuICBjb25zdCB7XG4gICAgaXRlbXMsXG4gICAgdmFsdWUsXG4gICAgbGFiZWwsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgZGlzYWJsZWQsXG4gICAgb25TZWxlY3QsXG4gICAgb25DaGFuZ2UsXG4gICAgb25SZW1vdmUsXG4gICAgb25DbGVhckFsbEl0ZW1zLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3Qge1xuICAgIGdldFNlbGVjdGVkSXRlbVByb3BzLFxuICAgIGdldERyb3Bkb3duUHJvcHMsXG4gICAgYWRkU2VsZWN0ZWRJdGVtLFxuICAgIHJlbW92ZVNlbGVjdGVkSXRlbSxcbiAgICBzZWxlY3RlZEl0ZW1zLFxuICAgIHNldFNlbGVjdGVkSXRlbXMsXG4gICAgcmVzZXQsXG4gIH0gPSB1c2VNdWx0aXBsZVNlbGVjdGlvbjxNdWx0aURyb3Bkb3duVmFsdWU+KHtcbiAgICBpbml0aWFsU2VsZWN0ZWRJdGVtczogdmFsdWUsXG4gICAgb25TZWxlY3RlZEl0ZW1zQ2hhbmdlOiAoY2hhbmdlcykgPT4ge1xuICAgICAgb25TZWxlY3QgJiYgb25TZWxlY3QoZ2V0Q2hhbmdlRXZlbnQoY2hhbmdlcy5zZWxlY3RlZEl0ZW1zKSk7XG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3Qge1xuICAgIGlzT3BlbixcbiAgICBzZWxlY3RlZEl0ZW0sXG4gICAgZ2V0VG9nZ2xlQnV0dG9uUHJvcHMsXG4gICAgZ2V0TGFiZWxQcm9wcyxcbiAgICBnZXRNZW51UHJvcHMsXG4gICAgZ2V0SXRlbVByb3BzLFxuICB9ID0gdXNlU2VsZWN0KHtcbiAgICBzZWxlY3RlZEl0ZW06IG51bGwsXG4gICAgZGVmYXVsdEhpZ2hsaWdodGVkSW5kZXg6IDAsIC8vIGFmdGVyIHNlbGVjdGlvbiwgaGlnaGxpZ2h0IHRoZSBmaXJzdCBpdGVtLlxuICAgIGl0ZW1zLFxuICAgIHN0YXRlUmVkdWNlcjogKHN0YXRlLCBhY3Rpb25BbmRDaGFuZ2VzKSA9PiB7XG4gICAgICBjb25zdCB7IGNoYW5nZXMsIHR5cGUgfSA9IGFjdGlvbkFuZENoYW5nZXM7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSB1c2VTZWxlY3Quc3RhdGVDaGFuZ2VUeXBlcy5Ub2dnbGVCdXR0b25LZXlEb3duRW50ZXI6XG4gICAgICAgIGNhc2UgdXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMuVG9nZ2xlQnV0dG9uS2V5RG93blNwYWNlQnV0dG9uOlxuICAgICAgICBjYXNlIHVzZVNlbGVjdC5zdGF0ZUNoYW5nZVR5cGVzLkl0ZW1DbGljazpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY2hhbmdlcyxcbiAgICAgICAgICAgIGlzT3BlbjogdHJ1ZSwgLy8ga2VlcCB0aGUgbWVudSBvcGVuIGFmdGVyIHNlbGVjdGlvbi5cbiAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBjaGFuZ2VzO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25TdGF0ZUNoYW5nZTogKHsgdHlwZSwgc2VsZWN0ZWRJdGVtOiBuZXdTZWxlY3RlZEl0ZW0gfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgdXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMuVG9nZ2xlQnV0dG9uS2V5RG93bkVudGVyOlxuICAgICAgICBjYXNlIHVzZVNlbGVjdC5zdGF0ZUNoYW5nZVR5cGVzLlRvZ2dsZUJ1dHRvbktleURvd25TcGFjZUJ1dHRvbjpcbiAgICAgICAgY2FzZSB1c2VTZWxlY3Quc3RhdGVDaGFuZ2VUeXBlcy5JdGVtQ2xpY2s6XG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgaXNBbHJlYWR5U2VsZWN0ZWQgPSBzZWxlY3RlZEl0ZW1zLnNvbWUoXG4gICAgICAgICAgICAgIChpKSA9PiBpLnZhbHVlID09PSBuZXdTZWxlY3RlZEl0ZW0/LnZhbHVlXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAobmV3U2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICAgIGlmIChpc0FscmVhZHlTZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkSXRlbXMoXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zLmZpbHRlcigoaSkgPT4gaS52YWx1ZSAhPT0gbmV3U2VsZWN0ZWRJdGVtLnZhbHVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgb25SZW1vdmUgJiYgb25SZW1vdmUoZ2V0Q2hhbmdlRXZlbnQobmV3U2VsZWN0ZWRJdGVtKSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkU2VsZWN0ZWRJdGVtKG5ld1NlbGVjdGVkSXRlbSk7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgJiYgb25DaGFuZ2UoZ2V0Q2hhbmdlRXZlbnQobmV3U2VsZWN0ZWRJdGVtKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSxcbiAgfSk7XG5cbiAgLy9BbGlnbiByZXNldHRpbmcgc2VsZWN0ZWQgdmFsdWVzIGlmIHRoZXkgd2VyZSByZXNldCBpbiBwYXJlbnRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlLmxlbmd0aCA8IDEpIHtcbiAgICAgIHJlc2V0KCk7XG4gICAgfVxuICB9LCBbdmFsdWVdKTtcblxuICBjb25zdCBoYW5kbGVDbGVhckFsbCA9ICgpID0+IHtcbiAgICBvbkNsZWFyQWxsSXRlbXMgJiYgb25DbGVhckFsbEl0ZW1zKGdldENoYW5nZUV2ZW50KG51bGwpKTtcbiAgICByZXNldCgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZERyb3Bkb3duIGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgICA8RmxleENvbHVtbiBpdGVtc1NwYWNpbmc9ezR9PlxuICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgIDxCb2R5VGV4dCBsaW5lSGVpZ2h0PXsneHMnfSB7Li4uZ2V0TGFiZWxQcm9wcygpfSBzaXplPXsxfT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICApfVxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxNdWx0aVNlbGVjdENvbnRhaW5lclxuICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgey4uLmdldFRvZ2dsZUJ1dHRvblByb3BzKHtcbiAgICAgICAgICAgICAgLi4uZ2V0RHJvcGRvd25Qcm9wcyh7IHByZXZlbnRLZXlBY3Rpb246IGlzT3BlbiB9KSxcbiAgICAgICAgICAgICAgb25DbGljazogKGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCksXG4gICAgICAgICAgICAgIGlzT3BlbixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8Qm9keVRleHRcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PXsneHMnfVxuICAgICAgICAgICAgICAgIHNpemU9ezN9XG4gICAgICAgICAgICAgICAgdmFyaWF0aW9uPXtzZWxlY3RlZEl0ZW0gPyAnaW5oZXJpdCcgOiAnZGFya0dyYXknfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE92ZXJmbG93V3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgIDxGbGV4Um93IGdhcD17OH0gd3JhcD17J3dyYXAnfT5cbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkSXRlbXMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlcldyYXBwZXI+e3BsYWNlaG9sZGVyfTwvUGxhY2Vob2xkZXJXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXMubWFwKChzZWxlY3RlZEl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hpcEl0ZW1Db250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgc2VsZWN0ZWQtaXRlbS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRTZWxlY3RlZEl0ZW1Qcm9wcyh7IHNlbGVjdGVkSXRlbSwgaW5kZXggfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Um93IGFsaWduPXsnY2VudGVyJ30gZ2FwPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRJdGVtPy5jaGlwTmFtZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm9keVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodD17J3hzJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uPXsnYmxhY2snfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRJdGVtLmNoaXBOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb2R5VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEl0ZW0/LmNoaXBMYWJlbCB8fCBzZWxlY3RlZEl0ZW0/LmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aVNlbGVjdERlbGV0ZUljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU2VsZWN0ZWRJdGVtKHNlbGVjdGVkSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmUoZ2V0Q2hhbmdlRXZlbnQoc2VsZWN0ZWRJdGVtKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MTR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e0RlbGV0ZUljb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DaGlwSXRlbUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9GbGV4Um93PlxuICAgICAgICAgICAgICAgIDwvT3ZlcmZsb3dXcmFwcGVyPlxuICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPERyb3Bkb3duSWNvbldyYXBwZXI+XG4gICAgICAgICAgICAgIHtvbkNsZWFyQWxsSXRlbXMgJiYgISFzZWxlY3RlZEl0ZW1zLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgICAgPENsZWFyU3ZnSWNvblxuICAgICAgICAgICAgICAgICAgc3JjPXtEZWxldGVJY29ufVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xlYXJBbGx9XG4gICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxTdmdJY29uIHNpemU9ezE2fSBzcmM9e2lzT3BlbiA/IFVwSWNvbiA6IERvd25JY29ufSAvPlxuICAgICAgICAgICAgPC9Ecm9wZG93bkljb25XcmFwcGVyPlxuICAgICAgICAgIDwvTXVsdGlTZWxlY3RDb250YWluZXI+XG4gICAgICAgICAgPEl0ZW1zQ29udGFpbmVyIHsuLi5nZXRNZW51UHJvcHMoKX0gaXNPcGVuPXtpc09wZW59PlxuICAgICAgICAgICAge2lzT3BlbiAmJlxuICAgICAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkSXRlbXM/LnNvbWUoXG4gICAgICAgICAgICAgICAgICAoaSkgPT4gaS52YWx1ZSA9PT0gaXRlbS52YWx1ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxJdGVtQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICBpdGVtc1NwYWNpbmc9ezEwfVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2l0ZW0udmFsdWV9JHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0SXRlbVByb3BzKHsgaXRlbSwgaW5kZXggfSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxCb2R5VGV4dFxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9e2lzU2VsZWN0ZWQgPyAxIDogM31cbiAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PXsneHMnfVxuICAgICAgICAgICAgICAgICAgICAgIHNjYWxlPXsneHMnfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgICAgICAgICAgIHtpc1NlbGVjdGVkICYmIDxDaGVja0ljb24gc2l6ZT17MTR9IHNyYz17Q2hlY2ttYXJrSWNvbn0gLz59XG4gICAgICAgICAgICAgICAgICA8L0l0ZW1Db250YWluZXI+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9JdGVtc0NvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ZsZXhDb2x1bW4+XG4gICAgPC9TdHlsZWREcm9wZG93bj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XG4iXX0=