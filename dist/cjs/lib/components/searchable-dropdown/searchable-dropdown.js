"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchableDropdown = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var svg_icon_1 = tslib_1.__importDefault(require("../svg-icon/svg-icon"));
var ic_arrow_up_svg_1 = tslib_1.__importDefault(require("../../assets/icons/ic-arrow-up.svg"));
var ic_arrow_down_svg_1 = tslib_1.__importDefault(require("../../assets/icons/ic-arrow-down.svg"));
var use_click_away_1 = require("../../hooks/use-click-away");
var StyledDropdown = styled_components_1.default.div(function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return (tslib_1.__assign(tslib_1.__assign({ outline: 'none', position: 'relative', borderRadius: theme.borderRadius.base }, (disabled && {
        opacity: '0.5',
        pointerEvents: 'none',
    })), { background: theme.styleguideColors.fillSecondary, ':hover, :active': {
            background: theme.styleguideColors.fillSecondary,
            svg: {
                path: {
                    fill: theme.styleguideColors.fillPrimaryRed,
                },
            },
        } }));
});
var StyledInput = styled_components_1.default.input(function (_a) {
    var theme = _a.theme, fontSize = _a.fontSize, icon = _a.icon;
    return ({
        lineHeight: '1.5',
        fontSize: fontSize,
        height: '36px',
        borderRadius: theme.borderRadius.base,
        outline: 'none',
        padding: icon ? '0 12px' : '0 16px',
        transition: 'all 200ms ease',
        width: '100%',
        color: theme.styleguideColors.contentPrimary,
        border: 'none',
        background: theme.styleguideColors.fillSecondary,
        ':hover': {
            cursor: 'pointer',
        },
    });
});
var ItemContainer = styled_components_1.default.div(function (_a) {
    var theme = _a.theme, isOpen = _a.isOpen, height = _a.height, fontSize = _a.fontSize, maxHeight = _a.maxHeight;
    return ({
        display: isOpen ? 'block' : 'none',
        borderRadius: theme.borderRadius.base,
        fontSize: fontSize,
        paddingLeft: '6px',
        background: theme.styleguideColors.fillSecondary,
        boxShadow: '0 1px 0 rgba(0, 0, 0, 0.06)',
        marginTop: '4px',
        height: height,
        maxHeight: maxHeight,
        overflowY: 'auto',
        position: 'absolute',
        top: '100%',
        width: '100%',
        zIndex: '1000',
    });
});
var Item = styled_components_1.default.div(function (_a) {
    var theme = _a.theme, selected = _a.selected;
    return ({
        display: 'block',
        cursor: 'pointer',
        padding: '8px 10px',
        color: theme.styleguideColors.contentPrimary,
        ':hover, :active': {
            background: theme.styleguideColors.fillSecondaryBlueHover,
        },
        fontWeight: selected ? 600 : 400,
    });
});
var ArrowSvg = (0, styled_components_1.default)(svg_icon_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        marginRight: '16px',
        path: {
            fill: theme.styleguideColors.contentPrimary,
        },
    });
});
var CustomIcon = styled_components_1.default.div(function (_a) {
    var inLoop = _a.inLoop;
    return ({
        margin: inLoop ? '0 12px 0 0' : '0 0 0 16px',
        display: 'inline',
        position: 'relative',
        bottom: inLoop ? '0' : '1px',
    });
});
var SearchableDropdown = function (_a) {
    var items = _a.items, value = _a.value, height = _a.height, fontSize = _a.fontSize, maxHeight = _a.maxHeight, onSelect = _a.onSelect, placeholder = _a.placeholder;
    var _b = (0, react_1.useState)(''), searchedValue = _b[0], setSearchedValue = _b[1];
    var _c = (0, react_1.useState)(false), isOpen = _c[0], setIsOpen = _c[1];
    var _d = (0, react_1.useState)(false), rotate = _d[0], setRotate = _d[1];
    var _e = (0, react_1.useState)(null), icon = _e[0], setIcon = _e[1];
    var inputRef = (0, react_1.useRef)(null);
    var ref = (0, use_click_away_1.useClickAway)({
        callback: function () {
            setIsOpen(false);
        },
    }).ref;
    (0, react_1.useEffect)(function () {
        value.icon && setIcon(value.icon);
    }, [value]);
    (0, react_1.useEffect)(function () {
        if (isOpen === rotate)
            return;
        setRotate(isOpen);
    }, [isOpen]);
    var selectOption = function (option) {
        setSearchedValue('');
        onSelect(option);
        setIsOpen(function (isOpen) { return !isOpen; });
        setIsOpen(!isOpen);
        setIcon(option.icon);
    };
    var handleOpenDropdown = function (e) {
        setIsOpen(true);
    };
    var getDisplayValue = function () {
        if (searchedValue)
            return searchedValue;
        if (value)
            return value.label;
        return '';
    };
    var filterOptionsWithSearchedValue = function (options, searchedValue) {
        return options.filter(function (option) {
            return option.label.toLowerCase().indexOf(searchedValue.toLowerCase()) > -1;
        });
    };
    var searchedItems = filterOptionsWithSearchedValue(items, searchedValue);
    return ((0, jsx_runtime_1.jsxs)(StyledDropdown, tslib_1.__assign({ ref: ref }, { children: [(0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ align: "center", justify: "space-between", onClick: handleOpenDropdown }, { children: [icon && (0, jsx_runtime_1.jsx)(CustomIcon, { children: icon }), (0, jsx_runtime_1.jsx)(StyledInput, { ref: inputRef, placeholder: placeholder, value: getDisplayValue(), onChange: function (e) {
                            setSearchedValue(e.target.value);
                            onSelect({});
                        }, fontSize: fontSize, icon: Boolean(icon) }), (0, jsx_runtime_1.jsx)(ArrowSvg, { src: rotate ? ic_arrow_up_svg_1.default : ic_arrow_down_svg_1.default })] })), (0, jsx_runtime_1.jsx)(ItemContainer, tslib_1.__assign({ isOpen: isOpen, height: height, fontSize: fontSize, maxHeight: maxHeight }, { children: searchedItems.map(function (item, index) {
                    return ((0, jsx_runtime_1.jsxs)(Item, tslib_1.__assign({ onClick: function () { return selectOption(item); }, selected: item.value === value.value }, { children: [item.icon && (0, jsx_runtime_1.jsx)(CustomIcon, tslib_1.__assign({ inLoop: true }, { children: item.icon })), item.label] }), index));
                }) }))] })));
};
exports.SearchableDropdown = SearchableDropdown;
exports.default = exports.SearchableDropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYWJsZS1kcm9wZG93bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9zZWFyY2hhYmxlLWRyb3Bkb3duL3NlYXJjaGFibGUtZHJvcGRvd24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQTJEO0FBQzNELGdGQUF1QztBQUN2QywwRUFBMkM7QUFDM0MsMEVBQTJDO0FBQzNDLCtGQUF3RDtBQUN4RCxtR0FBNEQ7QUFDNUQsNkRBQTBEO0FBRTFELElBQU0sY0FBYyxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUMvQixVQUFDLEVBQW1CO1FBQWpCLEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBQTtJQUFPLE9BQUEscUNBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQ2YsUUFBUSxFQUFFLFVBQVUsRUFDcEIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUVsQyxDQUFDLFFBQVEsSUFBSTtRQUNkLE9BQU8sRUFBRSxLQUFLO1FBQ2QsYUFBYSxFQUFFLE1BQU07S0FDdEIsQ0FBQyxLQUVGLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUNoRCxpQkFBaUIsRUFBRTtZQUNqQixVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWE7WUFDaEQsR0FBRyxFQUFFO2dCQUNILElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWM7aUJBQzVDO2FBQ0Y7U0FDRixJQUNEO0FBbkJ1QixDQW1CdkIsQ0FDSCxDQUFDO0FBRUYsSUFBTSxXQUFXLEdBQUcsMkJBQU0sQ0FBQyxLQUFLLENBQzlCLFVBQUMsRUFBeUI7UUFBdkIsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFBO0lBQU8sT0FBQSxDQUFDO1FBQzlCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFFBQVEsRUFBRSxRQUFR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QUFRLEVBQ2IsV0FBVyxFQUFFLFdBQVcsRUFDeEIsS0FBSyxFQUFFLGVBQWUsRUFBRSxFQUN4QixRQUFRLEVBQUUsVUFBQyxDQUFDOzRCQUNWLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ2pDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDZixDQUFDLEVBQ0QsUUFBUSxFQUFFLFFBQVEsRUFDbEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FDbkIsRUFDRix1QkFBQyxRQUFRLElBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMseUJBQU0sQ0FBQyxDQUFDLENBQUMsMkJBQVEsR0FBSSxLQUNyQyxFQUVWLHVCQUFDLGFBQWEscUJBQ1osTUFBTSxFQUFFLE1BQU0sRUFDZCxNQUFNLEVBQUUsTUFBTSxFQUNkLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLFNBQVMsRUFBRSxTQUFTLGdCQUVuQixhQUFhLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUs7b0JBQzdCLE9BQU8sQ0FDTCx3QkFBQyxJQUFJLHFCQUNILE9BQU8sRUFBRSxjQUFNLE9BQUEsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFsQixDQUFrQixFQUNqQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSyxpQkFHbkMsSUFBSSxDQUFDLElBQUksSUFBSSx1QkFBQyxVQUFVLHFCQUFDLE1BQU0sc0JBQUUsSUFBSSxDQUFDLElBQUksSUFBYyxFQUN4RCxJQUFJLENBQUMsS0FBSyxNQUhOLEtBQUssQ0FJTCxDQUNSLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLElBQ1ksS0FDRCxDQUNsQixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBeEdXLFFBQUEsa0JBQWtCLHNCQXdHN0I7QUFFRixrQkFBZSwwQkFBa0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcbmltcG9ydCBVcEljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWFycm93LXVwLnN2Zyc7XG5pbXBvcnQgRG93bkljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWFycm93LWRvd24uc3ZnJztcbmltcG9ydCB7IHVzZUNsaWNrQXdheSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZS1jbGljay1hd2F5JztcblxuY29uc3QgU3R5bGVkRHJvcGRvd24gPSBzdHlsZWQuZGl2PHsgZGlzYWJsZWQ/OiBib29sZWFuIH0+KFxuICAoeyB0aGVtZSwgZGlzYWJsZWQgfSkgPT4gKHtcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcblxuICAgIC4uLihkaXNhYmxlZCAmJiB7XG4gICAgICBvcGFjaXR5OiAnMC41JyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICB9KSxcblxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcbiAgICAnOmhvdmVyLCA6YWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxuICAgICAgc3ZnOiB7XG4gICAgICAgIHBhdGg6IHtcbiAgICAgICAgICBmaWxsOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5UmVkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuKTtcblxuY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQuaW5wdXQ8eyBmb250U2l6ZT86IHN0cmluZzsgaWNvbj86IGJvb2xlYW4gfT4oXG4gICh7IHRoZW1lLCBmb250U2l6ZSwgaWNvbiB9KSA9PiAoe1xuICAgIGxpbmVIZWlnaHQ6ICcxLjUnLFxuICAgIGZvbnRTaXplOiBmb250U2l6ZSxcbiAgICBoZWlnaHQ6ICczNnB4JyxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBwYWRkaW5nOiBpY29uID8gJzAgMTJweCcgOiAnMCAxNnB4JyxcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDIwMG1zIGVhc2UnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxuICAgICc6aG92ZXInOiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB9LFxuICB9KVxuKTtcblxuY29uc3QgSXRlbUNvbnRhaW5lciA9IHN0eWxlZC5kaXY8e1xuICBpc09wZW4/OiBib29sZWFuO1xuICBoZWlnaHQ/OiBzdHJpbmc7XG4gIG1heEhlaWdodD86IHN0cmluZztcbiAgZm9udFNpemU/OiBzdHJpbmc7XG59PigoeyB0aGVtZSwgaXNPcGVuLCBoZWlnaHQsIGZvbnRTaXplLCBtYXhIZWlnaHQgfSkgPT4gKHtcbiAgZGlzcGxheTogaXNPcGVuID8gJ2Jsb2NrJyA6ICdub25lJyxcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgZm9udFNpemU6IGZvbnRTaXplLFxuICBwYWRkaW5nTGVmdDogJzZweCcsXG4gIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcbiAgYm94U2hhZG93OiAnMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpJyxcbiAgbWFyZ2luVG9wOiAnNHB4JyxcbiAgaGVpZ2h0OiBoZWlnaHQsXG4gIG1heEhlaWdodDogbWF4SGVpZ2h0LFxuICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHRvcDogJzEwMCUnLFxuICB3aWR0aDogJzEwMCUnLFxuICB6SW5kZXg6ICcxMDAwJyxcbn0pKTtcblxuY29uc3QgSXRlbSA9IHN0eWxlZC5kaXY8eyBzZWxlY3RlZDogYm9vbGVhbiB9PigoeyB0aGVtZSwgc2VsZWN0ZWQgfSkgPT4gKHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIHBhZGRpbmc6ICc4cHggMTBweCcsXG4gIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxuICAnOmhvdmVyLCA6YWN0aXZlJzoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeUJsdWVIb3ZlcixcbiAgfSxcbiAgZm9udFdlaWdodDogc2VsZWN0ZWQgPyA2MDAgOiA0MDAsXG59KSk7XG5cbmNvbnN0IEFycm93U3ZnID0gc3R5bGVkKFN2Z0ljb24pKCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpblJpZ2h0OiAnMTZweCcsXG4gIHBhdGg6IHtcbiAgICBmaWxsOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxuICB9LFxufSkpO1xuXG5jb25zdCBDdXN0b21JY29uID0gc3R5bGVkLmRpdjx7IGluTG9vcD86IGJvb2xlYW4gfT4oKHsgaW5Mb29wIH0pID0+ICh7XG4gIG1hcmdpbjogaW5Mb29wID8gJzAgMTJweCAwIDAnIDogJzAgMCAwIDE2cHgnLFxuICBkaXNwbGF5OiAnaW5saW5lJyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIGJvdHRvbTogaW5Mb29wID8gJzAnIDogJzFweCcsXG59KSk7XG5cbmludGVyZmFjZSBJdGVtIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgaWNvbj86IFJlYWN0LlJlYWN0RWxlbWVudCB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoYWJsZURyb3Bkb3duUHJvcHMge1xuICBpdGVtczogSXRlbVtdO1xuICB2YWx1ZTogSXRlbTtcbiAgb25TZWxlY3Q6IChkYXRhOiBhbnkpID0+IHZvaWQ7XG4gIGhlaWdodD86IHN0cmluZztcbiAgbWF4SGVpZ2h0Pzogc3RyaW5nO1xuICBmb250U2l6ZT86IHN0cmluZztcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hhYmxlRHJvcGRvd24gPSAoe1xuICBpdGVtcyxcbiAgdmFsdWUsXG4gIGhlaWdodCxcbiAgZm9udFNpemUsXG4gIG1heEhlaWdodCxcbiAgb25TZWxlY3QsXG4gIHBsYWNlaG9sZGVyLFxufTogU2VhcmNoYWJsZURyb3Bkb3duUHJvcHMpID0+IHtcbiAgY29uc3QgW3NlYXJjaGVkVmFsdWUsIHNldFNlYXJjaGVkVmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcm90YXRlLCBzZXRSb3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaWNvbiwgc2V0SWNvbl0gPSB1c2VTdGF0ZTxSZWFjdC5SZWFjdEVsZW1lbnQgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCB7IHJlZiB9ID0gdXNlQ2xpY2tBd2F5KHtcbiAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgICB9LFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZhbHVlLmljb24gJiYgc2V0SWNvbih2YWx1ZS5pY29uKTtcbiAgfSwgW3ZhbHVlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNPcGVuID09PSByb3RhdGUpIHJldHVybjtcblxuICAgIHNldFJvdGF0ZShpc09wZW4pO1xuICB9LCBbaXNPcGVuXSk7XG5cbiAgY29uc3Qgc2VsZWN0T3B0aW9uID0gKG9wdGlvbikgPT4ge1xuICAgIHNldFNlYXJjaGVkVmFsdWUoJycpO1xuICAgIG9uU2VsZWN0KG9wdGlvbik7XG5cbiAgICBzZXRJc09wZW4oKGlzT3BlbikgPT4gIWlzT3Blbik7XG4gICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuICAgIHNldEljb24ob3B0aW9uLmljb24pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU9wZW5Ecm9wZG93biA9IChlKSA9PiB7XG4gICAgc2V0SXNPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGdldERpc3BsYXlWYWx1ZSA9ICgpID0+IHtcbiAgICBpZiAoc2VhcmNoZWRWYWx1ZSkgcmV0dXJuIHNlYXJjaGVkVmFsdWU7XG4gICAgaWYgKHZhbHVlKSByZXR1cm4gdmFsdWUubGFiZWw7XG5cbiAgICByZXR1cm4gJyc7XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyT3B0aW9uc1dpdGhTZWFyY2hlZFZhbHVlID0gKG9wdGlvbnMsIHNlYXJjaGVkVmFsdWUpID0+IHtcbiAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoXG4gICAgICAob3B0aW9uKSA9PlxuICAgICAgICBvcHRpb24ubGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaGVkVmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMVxuICAgICk7XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoZWRJdGVtcyA9IGZpbHRlck9wdGlvbnNXaXRoU2VhcmNoZWRWYWx1ZShpdGVtcywgc2VhcmNoZWRWYWx1ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkRHJvcGRvd24gcmVmPXtyZWZ9PlxuICAgICAgPEZsZXhSb3dcbiAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9wZW5Ecm9wZG93bn1cbiAgICAgID5cbiAgICAgICAge2ljb24gJiYgPEN1c3RvbUljb24+e2ljb259PC9DdXN0b21JY29uPn1cbiAgICAgICAgPFN0eWxlZElucHV0XG4gICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgdmFsdWU9e2dldERpc3BsYXlWYWx1ZSgpfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgc2V0U2VhcmNoZWRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICBvblNlbGVjdCh7fSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBmb250U2l6ZT17Zm9udFNpemV9XG4gICAgICAgICAgaWNvbj17Qm9vbGVhbihpY29uKX1cbiAgICAgICAgLz5cbiAgICAgICAgPEFycm93U3ZnIHNyYz17cm90YXRlID8gVXBJY29uIDogRG93bkljb259IC8+XG4gICAgICA8L0ZsZXhSb3c+XG5cbiAgICAgIDxJdGVtQ29udGFpbmVyXG4gICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgZm9udFNpemU9e2ZvbnRTaXplfVxuICAgICAgICBtYXhIZWlnaHQ9e21heEhlaWdodH1cbiAgICAgID5cbiAgICAgICAge3NlYXJjaGVkSXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8SXRlbVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3RPcHRpb24oaXRlbSl9XG4gICAgICAgICAgICAgIHNlbGVjdGVkPXtpdGVtLnZhbHVlID09PSB2YWx1ZS52YWx1ZX1cbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2l0ZW0uaWNvbiAmJiA8Q3VzdG9tSWNvbiBpbkxvb3A+e2l0ZW0uaWNvbn08L0N1c3RvbUljb24+fVxuICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cbiAgICAgICAgICAgIDwvSXRlbT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvSXRlbUNvbnRhaW5lcj5cbiAgICA8L1N0eWxlZERyb3Bkb3duPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoYWJsZURyb3Bkb3duO1xuIl19