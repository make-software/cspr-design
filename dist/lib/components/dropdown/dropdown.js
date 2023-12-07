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
                                } }, { children: itemNameGetter(selectedItem) || placeholder })), _jsx(SvgIcon, { src: isOpen ? UpIcon : DownIcon })] })), _jsx(ItemsContainer, __assign({}, getMenuProps(), { isOpen: isOpen }, { children: isOpen &&
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
                                                                }, size: 14, src: 'assets/icons/ic-delete.svg' })] })) }), "selected-item-".concat(index))); })) })) }) })) }), _jsx(DropdownIconWrapper, { children: _jsx(SvgIcon, { size: 16, src: isOpen ? UpIcon : DownIcon }) })] })), _jsx(ItemsContainer, __assign({}, getMenuProps(), { isOpen: isOpen }, { children: isOpen &&
                                items.map(function (item, index) {
                                    var isSelected = selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.some(function (i) { return i.value === item.value; });
                                    return (_jsxs(ItemContainer, __assign({ align: "center", justify: "space-between", itemsSpacing: 10 }, getItemProps({ item: item, index: index }), { children: [_jsx(BodyText, __assign({ size: isSelected ? 1 : 3, lineHeight: 'xs', scale: 'xs' }, { children: item.label })), isSelected && (_jsx(CheckIcon, { size: 14, src: 'assets/icons/ic-checkmark.svg' }))] }), "".concat(item.value).concat(index)));
                                }) }))] })] })) })));
}
export default Dropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxTQUFTLEVBQUUsRUFFaEIsb0JBQW9CLEVBQ3BCLFNBQVMsR0FDVixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLE1BQU0sTUFBTSxtQkFBbUIsQ0FBQztBQUN2QyxPQUFPLE9BQU8sTUFBTSxpQkFBaUIsQ0FBQztBQUl0QyxPQUFPLFFBQVEsTUFBTSx3QkFBd0IsQ0FBQztBQUM5QyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLFVBQVUsTUFBTSw0QkFBNEIsQ0FBQztBQUVwRCxPQUFPLE1BQU0sTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RCxPQUFPLFFBQVEsTUFBTSxzQ0FBc0MsQ0FBQztBQUU1RCxJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUMvQixVQUFDLEVBQW1CO1FBQWpCLEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBQTtJQUFPLE9BQUEsWUFDdkIsT0FBTyxFQUFFLE1BQU0sSUFFWixDQUFDLFFBQVEsSUFBSTtRQUNkLE9BQU8sRUFBRSxLQUFLO1FBQ2QsYUFBYSxFQUFFLE1BQU07S0FDdEIsQ0FBQyxFQUNGO0FBUHVCLENBT3ZCLENBQ0gsQ0FBQztBQUVGLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBc0IsVUFBQyxFQUFpQjtRQUFmLEtBQUssV0FBQSxFQUFFLE1BQU0sWUFBQTtJQUFPLE9BQUEsQ0FBQztRQUM3RSxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJO1FBQ3JDLE1BQU0sRUFBRSxNQUFNO1FBQ2QsTUFBTSxFQUFFLEVBQUU7UUFDVixPQUFPLEVBQUUsUUFBUTtRQUNqQixVQUFVLEVB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LE1BQU0sZ0JBQy9DLE1BQU07Z0NBQ0wsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksRUFBRSxLQUFLO29DQUNwQixJQUFNLFVBQVUsR0FBRyxhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsSUFBSSxDQUNwQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBdEIsQ0FBc0IsQ0FDOUIsQ0FBQztvQ0FDRixPQUFPLENBQ0wsTUFBQyxhQUFhLGFBQ1osS0FBSyxFQUFDLFFBQVEsRUFDZCxPQUFPLEVBQUMsZUFBZSxFQUN2QixZQUFZLEVBQUUsRUFBRSxJQUVaLFlBQVksQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsZUFFakMsS0FBQyxRQUFRLGFBQ1AsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3hCLFVBQVUsRUFBRSxJQUFJLEVBQ2hCLEtBQUssRUFBRSxJQUFJLGdCQUVWLElBQUksQ0FBQyxLQUFLLElBQ0YsRUFDVixVQUFVLElBQUksQ0FDYixLQUFDLFNBQVMsSUFDUixJQUFJLEVBQUUsRUFBRSxFQUNSLEdBQUcsRUFBRSwrQkFBK0IsR0FDcEMsQ0FDSCxNQWZJLFVBQUcsSUFBSSxDQUFDLEtBQUssU0FBRyxLQUFLLENBQUUsQ0FnQmQsQ0FDakIsQ0FBQztnQ0FDSixDQUFDLENBQUMsSUFDVyxJQUNiLEtBQ0ssSUFDRSxDQUNsQixDQUFDO0FBQ0osQ0FBQztBQUVELGVBQWUsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEb3duc2hpZnQsIHtcbiAgQ29udHJvbGxlclN0YXRlQW5kSGVscGVycyxcbiAgdXNlTXVsdGlwbGVTZWxlY3Rpb24sXG4gIHVzZVNlbGVjdCxcbn0gZnJvbSAnZG93bnNoaWZ0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGlzRXF1YWwgZnJvbSAnZmFzdC1kZWVwLWVxdWFsJztcblxuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQgQm9keVRleHQgZnJvbSAnLi4vYm9keS10ZXh0L2JvZHktdGV4dCc7XG5pbXBvcnQgRmxleFJvdyBmcm9tICcuLi9mbGV4LXJvdy9mbGV4LXJvdyc7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tICcuLi9zdmctaWNvbi9zdmctaWNvbic7XG5pbXBvcnQgRmxleENvbHVtbiBmcm9tICcuLi9mbGV4LWNvbHVtbi9mbGV4LWNvbHVtbic7XG5cbmltcG9ydCBVcEljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWFycm93LXVwLnN2Zyc7XG5pbXBvcnQgRG93bkljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWFycm93LWRvd24uc3ZnJztcblxuY29uc3QgU3R5bGVkRHJvcGRvd24gPSBzdHlsZWQuZGl2PHsgZGlzYWJsZWQ/OiBib29sZWFuIH0+KFxuICAoeyB0aGVtZSwgZGlzYWJsZWQgfSkgPT4gKHtcbiAgICBvdXRsaW5lOiAnbm9uZScsXG5cbiAgICAuLi4oZGlzYWJsZWQgJiYge1xuICAgICAgb3BhY2l0eTogJzAuNScsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgfSksXG4gIH0pXG4pO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8eyBpc09wZW46IGJvb2xlYW4gfT4oKHsgdGhlbWUsIGlzT3BlbiB9KSA9PiAoe1xuICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICBib3JkZXI6ICdub25lJyxcbiAgaGVpZ2h0OiAzNixcbiAgcGFkZGluZzogJzAgMTZweCcsXG4gIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcbiAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gICAgc3ZnOiB7XG4gICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcbiAgICB9LFxuICB9LFxufSkpO1xuXG5jb25zdCBJdGVtc0NvbnRhaW5lciA9IHN0eWxlZC5kaXY8eyBpc09wZW46IGJvb2xlYW4gfT4oKHsgdGhlbWUsIGlzT3BlbiB9KSA9PiAoe1xuICBkaXNwbGF5OiBpc09wZW4gPyAnaW5oZXJpdCcgOiAnbm9uZScsXG4gIG1hcmdpblRvcDogNCxcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxufSkpO1xuXG5jb25zdCBJdGVtQ29udGFpbmVyID0gc3R5bGVkKEZsZXhSb3cpKCh7IHRoZW1lIH0pID0+ICh7XG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBtaW5IZWlnaHQ6IDM2LFxuICBwYWRkaW5nOiAnOHB4IDE2cHgnLFxuICAnOmhvdmVyLCA6YWN0aXZlJzoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeUJsdWVIb3ZlcixcbiAgICBmb250V2VpZ2h0OiA2MDAsXG4gIH0sXG59KSk7XG5cbmNvbnN0IERlbGV0ZUljb24gPSBzdHlsZWQoU3ZnSWNvbikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgcGF0aDoge1xuICAgIHN0cm9rZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxuICB9LFxuICAnOmhvdmVyLCA6YWN0aXZlJzoge1xuICAgIHBhdGg6IHtcbiAgICAgIHN0cm9rZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcbiAgICB9LFxuICB9LFxufSkpO1xuXG5jb25zdCBNdWx0aVNlbGVjdENvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KTx7IGlzT3BlbjogYm9vbGVhbiB9PihcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICAgIHBhZGRpbmc6ICc4cHgnLFxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcbiAgICAnOmhvdmVyLCA6YWN0aXZlJzoge1xuICAgICAgc3ZnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5UmVkLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuKTtcblxuY29uc3QgUGxhY2Vob2xkZXJXcmFwcGVyID0gc3R5bGVkLnNwYW4oKHsgdGhlbWUgfSkgPT4gKHtcbiAgcGFkZGluZzogJzAgOHB4Jyxcbn0pKTtcblxuY29uc3QgQ2hpcEl0ZW1Db250YWluZXIgPSBzdHlsZWQuc3BhbigoeyB0aGVtZSB9KSA9PiAoe1xuICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgcGFkZGluZzogJzJweCA4cHgnLFxuICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxUZXJ0cmlhcnksXG4gIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxufSkpO1xuXG5jb25zdCBPdmVyZmxvd1dyYXBwZXIgPSBzdHlsZWQuc3BhbigoeyB0aGVtZSB9KSA9PiAoe1xuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG59KSk7XG5cbmNvbnN0IERyb3Bkb3duSWNvbldyYXBwZXIgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIHBhZGRpbmdSaWdodDogJzhweCcsXG4gIG1hcmdpbkxlZnQ6ICc4cHgnLFxufSkpO1xuXG5jb25zdCBDaGVja0ljb24gPSBzdHlsZWQoU3ZnSWNvbikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgcGF0aDoge1xuICAgIGZpbGw6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXG4gIH0sXG59KSk7XG5cbmNvbnN0IE11bHRpU2VsZWN0RGVsZXRlSWNvbiA9IHN0eWxlZChTdmdJY29uKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBwYXRoOiB7XG4gICAgc3Ryb2tlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICB9LFxuICAnOmhvdmVyLCA6YWN0aXZlJzoge1xuICAgIHBhdGg6IHtcbiAgICAgIHN0cm9rZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UmVkLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmV4cG9ydCB0eXBlIERyb3Bkb3duVmFsdWUgPSB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfTtcbmV4cG9ydCB0eXBlIERyb3Bkb3duSXRlbTxUID0gRHJvcGRvd25WYWx1ZT4gPSBUO1xuXG5leHBvcnQgdHlwZSBEcm9wZG93bkV2ZW50VmFsdWUgPSB7XG4gIHRhcmdldDoge1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgdmFsdWU6IERyb3Bkb3duVmFsdWUgfCBudWxsO1xuICB9O1xufTtcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xuICBpdGVtczogRHJvcGRvd25WYWx1ZVtdO1xuICB2YWx1ZT86IERyb3Bkb3duVmFsdWUgfCBudWxsO1xuICBsYWJlbD86IHN0cmluZztcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIGFyZUl0ZW1zUmVtb3ZhYmxlPzogYm9vbGVhbjtcbiAgaXNTZWFyY2hhYmxlPzogYm9vbGVhbjtcbiAgb25DaGFuZ2U/OiAoZXY6IERyb3Bkb3duRXZlbnRWYWx1ZSkgPT4gdm9pZDtcbiAgb25TZWxlY3Q/OiAoZXY6IERyb3Bkb3duRXZlbnRWYWx1ZSkgPT4gdm9pZDtcbiAgb25SZW1vdmU/OiAoZXY6IERyb3Bkb3duRXZlbnRWYWx1ZSkgPT4gdm9pZDtcblxuICBub0l0ZW1zTWVzc2FnZT86IHN0cmluZztcbn1cblxuY29uc3QgZ2V0Q2hhbmdlRXZlbnQgPSAodmFsdWU6IGFueSk6IERyb3Bkb3duRXZlbnRWYWx1ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGFyZ2V0OiB7XG4gICAgICBuYW1lOiB1bmRlZmluZWQsXG4gICAgICB2YWx1ZSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIERyb3Bkb3duKHByb3BzOiBEcm9wZG93blByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBpdGVtcyxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBsYWJlbCxcbiAgICBhcmVJdGVtc1JlbW92YWJsZSxcbiAgICB2YWx1ZSxcbiAgICBzdHlsZSxcbiAgICBvblNlbGVjdCxcbiAgICBvblJlbW92ZSxcbiAgICBub0l0ZW1zTWVzc2FnZSA9ICdObyBPcHRpb25zIScsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBnZXRDaGFuZ2VFdmVudCA9ICh2YWx1ZTogRHJvcGRvd25WYWx1ZSB8IG51bGwpOiBEcm9wZG93bkV2ZW50VmFsdWUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgbmFtZTogdW5kZWZpbmVkLFxuICAgICAgICB2YWx1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZW1vdmVJdGVtID0gKFxuICAgIGl0ZW06IERyb3Bkb3duSXRlbSxcbiAgICBldixcbiAgICBkb3duc2hpZnQ6IENvbnRyb2xsZXJTdGF0ZUFuZEhlbHBlcnM8RHJvcGRvd25JdGVtPlxuICApID0+IHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgY29uc3QgdmFsdWUgPSBpdGVtICYmIGl0ZW1WYWx1ZUdldHRlcihpdGVtKTtcbiAgICBvblJlbW92ZSAmJiBvblJlbW92ZShnZXRDaGFuZ2VFdmVudCh2YWx1ZSkpO1xuICB9O1xuXG4gIGNvbnN0IGl0ZW1WYWx1ZUdldHRlciA9IChpdGVtKSA9PiBpdGVtLnZhbHVlO1xuICBjb25zdCBpdGVtTmFtZUdldHRlciA9IChpdGVtKSA9PiBpdGVtLmxhYmVsO1xuXG4gIGNvbnN0IGhhbmRsZUl0ZW1TZWxlY3QgPSAoaXRlbSkgPT4ge1xuICAgIG9uU2VsZWN0ICYmIG9uU2VsZWN0KGl0ZW0pO1xuICB9O1xuXG4gIGNvbnN0IGdldEl0ZW1Ub1N0cmluZyA9IChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0gPT09IG51bGwpIHJldHVybiAnJztcbiAgICByZXR1cm4gdHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnID8gaXRlbSA6IGl0ZW0ubGFiZWw7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RG93bnNoaWZ0XG4gICAgICBpdGVtVG9TdHJpbmc9e2dldEl0ZW1Ub1N0cmluZ31cbiAgICAgIG9uU2VsZWN0PXtoYW5kbGVJdGVtU2VsZWN0fVxuICAgICAgc2VsZWN0ZWRJdGVtPXt2YWx1ZX1cbiAgICAgIHNlbGVjdGVkSXRlbUNoYW5nZWQ9eyhwcmV2SXRlbSwgaXRlbSkgPT4gIWlzRXF1YWwocHJldkl0ZW0sIGl0ZW0pfVxuICAgID5cbiAgICAgIHsoZG93bnNoaWZ0KSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBnZXRJdGVtUHJvcHMsXG4gICAgICAgICAgZ2V0TWVudVByb3BzLFxuICAgICAgICAgIGlzT3BlbixcbiAgICAgICAgICBzZWxlY3RlZEl0ZW0sXG4gICAgICAgICAgZ2V0Um9vdFByb3BzLFxuICAgICAgICAgIGdldFRvZ2dsZUJ1dHRvblByb3BzLFxuICAgICAgICB9ID0gZG93bnNoaWZ0O1xuXG4gICAgICAgIGNvbnN0IG5vSXRlbXMgPSAhKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8U3R5bGVkRHJvcGRvd25cbiAgICAgICAgICAgIHsuLi5nZXRSb290UHJvcHMoeyByZWZLZXk6ICdpbm5lclJlZicgfSl9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICB0YWJJbmRleD1cIjBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgICAgIDxCb2R5VGV4dCBsaW5lSGVpZ2h0PXsneHMnfSBzaXplPXsxfT5cbiAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgIHsuLi5nZXRUb2dnbGVCdXR0b25Qcm9wcygpfVxuICAgICAgICAgICAgICBpdGVtc1NwYWNpbmc9ezEwfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Qm9keVRleHRcbiAgICAgICAgICAgICAgICBzaXplPXszfVxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9eyd4cyd9XG4gICAgICAgICAgICAgICAgdmFyaWF0aW9uPXtzZWxlY3RlZEl0ZW0gPyAnaW5oZXJpdCcgOiAnZGFya0dyYXknfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2l0ZW1OYW1lR2V0dGVyKHNlbGVjdGVkSXRlbSkgfHwgcGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgICAgIDxTdmdJY29uIHNyYz17aXNPcGVuID8gVXBJY29uIDogRG93bkljb259IC8+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDxJdGVtc0NvbnRhaW5lciB7Li4uZ2V0TWVudVByb3BzKCl9IGlzT3Blbj17aXNPcGVufT5cbiAgICAgICAgICAgICAge2lzT3BlbiAmJlxuICAgICAgICAgICAgICAgIChub0l0ZW1zID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnOHB4IDE2cHgnLCBwb2ludGVyRXZlbnRzOiAnbm9uZScgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxCb2R5VGV4dFxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezN9XG4gICAgICAgICAgICAgICAgICAgICAgc2NhbGU9eyd4cyd9XG4gICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodD17J3hzJ31cbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb249XCJkYXJrR3JheVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7bm9JdGVtc01lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IGlzRXF1YWwoaXRlbSwgc2VsZWN0ZWRJdGVtKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxJdGVtQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2l0ZW19LSR7aWR4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1NwYWNpbmc9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRJdGVtUHJvcHMoeyBpdGVtLCBpbmRleDogaWR4IH0pfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2R5VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtpc1NlbGVjdGVkID8gMSA6IDN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU9eyd4cyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9eyd4cyd9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtTmFtZUdldHRlcihpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YXJlSXRlbXNSZW1vdmFibGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImFzc2V0cy9pY29ucy9pYy1kZWxldGUuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXYpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVSZW1vdmVJdGVtKGl0ZW0sIGV2LCBkb3duc2hpZnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW1Db250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9JdGVtc0NvbnRhaW5lcj5cbiAgICAgICAgICA8L1N0eWxlZERyb3Bkb3duPlxuICAgICAgICApO1xuICAgICAgfX1cbiAgICA8L0Rvd25zaGlmdD5cbiAgKTtcbn1cblxuZXhwb3J0IHR5cGUgTXVsdGlEcm9wZG93blZhbHVlID0ge1xuICBsYWJlbDogc3RyaW5nO1xuICBjaGlwTGFiZWw/OiBzdHJpbmc7XG4gIHZhbHVlOiBhbnk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpU2VsZWN0RHJvcGRvd25Qcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XG4gIHZhbHVlPzogTXVsdGlEcm9wZG93blZhbHVlW107XG4gIGl0ZW1zOiBNdWx0aURyb3Bkb3duVmFsdWVbXTtcbiAgbGFiZWw/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgb25DaGFuZ2U/OiAoZXY6IERyb3Bkb3duRXZlbnRWYWx1ZSkgPT4gdm9pZDtcbiAgb25TZWxlY3Q/OiAoZXY6IERyb3Bkb3duRXZlbnRWYWx1ZSkgPT4gdm9pZDtcbiAgb25SZW1vdmU/OiAoZXY6IERyb3Bkb3duRXZlbnRWYWx1ZSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE11bHRpU2VsZWN0RHJvcGRvd24ocHJvcHM6IE11bHRpU2VsZWN0RHJvcGRvd25Qcm9wcykge1xuICBjb25zdCB7XG4gICAgaXRlbXMsXG4gICAgdmFsdWUsXG4gICAgbGFiZWwsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgZGlzYWJsZWQsXG4gICAgb25TZWxlY3QsXG4gICAgb25DaGFuZ2UsXG4gICAgb25SZW1vdmUsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7XG4gICAgZ2V0U2VsZWN0ZWRJdGVtUHJvcHMsXG4gICAgZ2V0RHJvcGRvd25Qcm9wcyxcbiAgICBhZGRTZWxlY3RlZEl0ZW0sXG4gICAgcmVtb3ZlU2VsZWN0ZWRJdGVtLFxuICAgIHNlbGVjdGVkSXRlbXMsXG4gIH0gPSB1c2VNdWx0aXBsZVNlbGVjdGlvbjxNdWx0aURyb3Bkb3duVmFsdWU+KHtcbiAgICBpbml0aWFsU2VsZWN0ZWRJdGVtczogdmFsdWUsXG4gICAgb25TZWxlY3RlZEl0ZW1zQ2hhbmdlOiAoY2hhbmdlcykgPT4ge1xuICAgICAgb25TZWxlY3QgJiYgb25TZWxlY3QoZ2V0Q2hhbmdlRXZlbnQoY2hhbmdlcy5zZWxlY3RlZEl0ZW1zKSk7XG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3Qge1xuICAgIGlzT3BlbixcbiAgICBzZWxlY3RlZEl0ZW0sXG4gICAgZ2V0VG9nZ2xlQnV0dG9uUHJvcHMsXG4gICAgZ2V0TGFiZWxQcm9wcyxcbiAgICBnZXRNZW51UHJvcHMsXG4gICAgZ2V0SXRlbVByb3BzLFxuICB9ID0gdXNlU2VsZWN0KHtcbiAgICBzZWxlY3RlZEl0ZW06IG51bGwsXG4gICAgZGVmYXVsdEhpZ2hsaWdodGVkSW5kZXg6IDAsIC8vIGFmdGVyIHNlbGVjdGlvbiwgaGlnaGxpZ2h0IHRoZSBmaXJzdCBpdGVtLlxuICAgIGl0ZW1zLFxuICAgIHN0YXRlUmVkdWNlcjogKHN0YXRlLCBhY3Rpb25BbmRDaGFuZ2VzKSA9PiB7XG4gICAgICBjb25zdCB7IGNoYW5nZXMsIHR5cGUgfSA9IGFjdGlvbkFuZENoYW5nZXM7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSB1c2VTZWxlY3Quc3RhdGVDaGFuZ2VUeXBlcy5Ub2dnbGVCdXR0b25LZXlEb3duRW50ZXI6XG4gICAgICAgIGNhc2UgdXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMuVG9nZ2xlQnV0dG9uS2V5RG93blNwYWNlQnV0dG9uOlxuICAgICAgICBjYXNlIHVzZVNlbGVjdC5zdGF0ZUNoYW5nZVR5cGVzLkl0ZW1DbGljazpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY2hhbmdlcyxcbiAgICAgICAgICAgIGlzT3BlbjogdHJ1ZSwgLy8ga2VlcCB0aGUgbWVudSBvcGVuIGFmdGVyIHNlbGVjdGlvbi5cbiAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBjaGFuZ2VzO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25TdGF0ZUNoYW5nZTogKHsgdHlwZSwgc2VsZWN0ZWRJdGVtOiBuZXdTZWxlY3RlZEl0ZW0gfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgdXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMuVG9nZ2xlQnV0dG9uS2V5RG93bkVudGVyOlxuICAgICAgICBjYXNlIHVzZVNlbGVjdC5zdGF0ZUNoYW5nZVR5cGVzLlRvZ2dsZUJ1dHRvbktleURvd25TcGFjZUJ1dHRvbjpcbiAgICAgICAgY2FzZSB1c2VTZWxlY3Quc3RhdGVDaGFuZ2VUeXBlcy5JdGVtQ2xpY2s6XG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgaXNBbHJlYWR5U2VsZWN0ZWQgPSBzZWxlY3RlZEl0ZW1zLnNvbWUoXG4gICAgICAgICAgICAgIChpKSA9PiBpLnZhbHVlID09PSBuZXdTZWxlY3RlZEl0ZW0/LnZhbHVlXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAobmV3U2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICAgIGlmIChpc0FscmVhZHlTZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHJlbW92ZVNlbGVjdGVkSXRlbShuZXdTZWxlY3RlZEl0ZW0pO1xuICAgICAgICAgICAgICAgIG9uUmVtb3ZlICYmIG9uUmVtb3ZlKGdldENoYW5nZUV2ZW50KG5ld1NlbGVjdGVkSXRlbSkpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZFNlbGVjdGVkSXRlbShuZXdTZWxlY3RlZEl0ZW0pO1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlICYmIG9uQ2hhbmdlKGdldENoYW5nZUV2ZW50KG5ld1NlbGVjdGVkSXRlbSkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZERyb3Bkb3duIGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgICA8RmxleENvbHVtbiBpdGVtc1NwYWNpbmc9ezR9PlxuICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgIDxCb2R5VGV4dCBsaW5lSGVpZ2h0PXsneHMnfSBzaXplPXsxfSB7Li4uZ2V0TGFiZWxQcm9wcygpfT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICApfVxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxNdWx0aVNlbGVjdENvbnRhaW5lclxuICAgICAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICB7Li4uZ2V0VG9nZ2xlQnV0dG9uUHJvcHMoXG4gICAgICAgICAgICAgIGdldERyb3Bkb3duUHJvcHMoeyBwcmV2ZW50S2V5QWN0aW9uOiBpc09wZW4gfSlcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIDxCb2R5VGV4dFxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9eyd4cyd9XG4gICAgICAgICAgICAgICAgc2l6ZT17M31cbiAgICAgICAgICAgICAgICB2YXJpYXRpb249e3NlbGVjdGVkSXRlbSA/ICdpbmhlcml0JyA6ICdkYXJrR3JheSd9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8T3ZlcmZsb3dXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgPEZsZXhSb3cgZ2FwPXs4fSB3cmFwPXsnd3JhcCd9PlxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRJdGVtcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyV3JhcHBlcj57cGxhY2Vob2xkZXJ9PC9QbGFjZWhvbGRlcldyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcy5tYXAoKHNlbGVjdGVkSXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGlwSXRlbUNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BzZWxlY3RlZC1pdGVtLSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldFNlbGVjdGVkSXRlbVByb3BzKHsgc2VsZWN0ZWRJdGVtLCBpbmRleCB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhSb3cgYWxpZ249eydjZW50ZXInfSBnYXA9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEl0ZW0/LmNoaXBMYWJlbCB8fCBzZWxlY3RlZEl0ZW0/LmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aVNlbGVjdERlbGV0ZUljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU2VsZWN0ZWRJdGVtKHNlbGVjdGVkSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MTR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9eydhc3NldHMvaWNvbnMvaWMtZGVsZXRlLnN2Zyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DaGlwSXRlbUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9GbGV4Um93PlxuICAgICAgICAgICAgICAgIDwvT3ZlcmZsb3dXcmFwcGVyPlxuICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPERyb3Bkb3duSWNvbldyYXBwZXI+XG4gICAgICAgICAgICAgIDxTdmdJY29uIHNpemU9ezE2fSBzcmM9e2lzT3BlbiA/IFVwSWNvbiA6IERvd25JY29ufSAvPlxuICAgICAgICAgICAgPC9Ecm9wZG93bkljb25XcmFwcGVyPlxuICAgICAgICAgIDwvTXVsdGlTZWxlY3RDb250YWluZXI+XG4gICAgICAgICAgPEl0ZW1zQ29udGFpbmVyIHsuLi5nZXRNZW51UHJvcHMoKX0gaXNPcGVuPXtpc09wZW59PlxuICAgICAgICAgICAge2lzT3BlbiAmJlxuICAgICAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkSXRlbXM/LnNvbWUoXG4gICAgICAgICAgICAgICAgICAoaSkgPT4gaS52YWx1ZSA9PT0gaXRlbS52YWx1ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxJdGVtQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICBpdGVtc1NwYWNpbmc9ezEwfVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2l0ZW0udmFsdWV9JHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0SXRlbVByb3BzKHsgaXRlbSwgaW5kZXggfSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxCb2R5VGV4dFxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9e2lzU2VsZWN0ZWQgPyAxIDogM31cbiAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PXsneHMnfVxuICAgICAgICAgICAgICAgICAgICAgIHNjYWxlPXsneHMnfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgICAgICAgICAgIHtpc1NlbGVjdGVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsxNH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17J2Fzc2V0cy9pY29ucy9pYy1jaGVja21hcmsuc3ZnJ31cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9JdGVtQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvSXRlbXNDb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GbGV4Q29sdW1uPlxuICAgIDwvU3R5bGVkRHJvcGRvd24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuIl19