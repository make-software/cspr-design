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
var StyledContentRow = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme, error = _a.error;
    return theme.withMedia({
        width: '100%',
        border: error ? "1px solid ".concat(theme.styleguideColors.contentRed) : 'none',
    });
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
    var items = _a.items, value = _a.value, height = _a.height, isError = _a.isError, fontSize = _a.fontSize, maxHeight = _a.maxHeight, onSelect = _a.onSelect, placeholder = _a.placeholder;
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
    return ((0, jsx_runtime_1.jsxs)(StyledDropdown, tslib_1.__assign({ ref: ref }, { children: [(0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ align: "center", justify: "space-between", onClick: handleOpenDropdown }, { children: (0, jsx_runtime_1.jsxs)(StyledContentRow, tslib_1.__assign({ justify: 'space-around', align: 'center', error: isError }, { children: [icon && (0, jsx_runtime_1.jsx)(CustomIcon, { children: icon }), (0, jsx_runtime_1.jsx)(StyledInput, { ref: inputRef, placeholder: placeholder, value: getDisplayValue(), onChange: function (e) {
                                setSearchedValue(e.target.value);
                                onSelect({});
                            }, fontSize: fontSize, icon: Boolean(icon) }), (0, jsx_runtime_1.jsx)(ArrowSvg, { src: rotate ? ic_arrow_up_svg_1.default : ic_arrow_down_svg_1.default })] })) })), (0, jsx_runtime_1.jsx)(ItemContainer, tslib_1.__assign({ isOpen: isOpen, height: height, fontSize: fontSize, maxHeight: maxHeight }, { children: searchedItems.map(function (item, index) {
                    return ((0, jsx_runtime_1.jsxs)(Item, tslib_1.__assign({ onClick: function () { return selectOption(item); }, selected: item.value === value.value }, { children: [item.icon && (0, jsx_runtime_1.jsx)(CustomIcon, tslib_1.__assign({ inLoop: true }, { children: item.icon })), item.label] }), index));
                }) }))] })));
};
exports.SearchableDropdown = SearchableDropdown;
exports.default = exports.SearchableDropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYWJsZS1kcm9wZG93bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9zZWFyY2hhYmxlLWRyb3Bkb3duL3NlYXJjaGFibGUtZHJvcGRvd24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQTJEO0FBQzNELGdGQUF1QztBQUN2QywwRUFBMkM7QUFDM0MsMEVBQTJDO0FBQzNDLCtGQUF3RDtBQUN4RCxtR0FBNEQ7QUFDNUQsNkRBQTBEO0FBRTFELElBQU0sY0FBYyxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUMvQixVQUFDLEVBQW1CO1FBQWpCLEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBQTtJQUFPLE9BQUEscUNBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQ2YsUUFBUSxFQUFFLFVBQVUsRUFDcEIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUVsQyxDQUFDLFFBQVEsSUFBSTtRQUNkLE9BQU8sRUFBRSxLQUFLO1FBQ2QsYUFBYSxFQUFFLE1BQU07S0FDdEIsQ0FBQyxLQUVGLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUNoRCxpQkFBaUIsRUFBRTtZQUNqQixVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWE7WUFDaEQsR0FBRyxFQUFFO2dCQUNILElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWM7aUJBQzVDO2FBQ0Y7U0FDRixJQUNEO0FBbkJ1QixDQW1CdkIsQ0FDSCxDQUFDO0FBRUYsSUFBTSxnQkFBZ0IsR0FBRyxJQUFBLDJCQUFNLEVBQUMsa0JBQU8sQ0FBQyxDQUN0QyxVQUFDLEVBQWdCO1FBQWQsS0FBSyxXQUFBLEVBQUUsS0FBSyxXQUFBO0lBQ2IsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsS0FBSyxFQUFFLE1BQU07UUFDYixNQUFN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QUMsSUFBSSxDQUFDLEVBQWxCLENBQWtCLEVBQ2pDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLGlCQUduQyxJQUFJLENBQUMsSUFBSSxJQUFJLHVCQUFDLFVBQVUscUJBQUMsTUFBTSxzQkFBRSxJQUFJLENBQUMsSUFBSSxJQUFjLEVBQ3hELElBQUksQ0FBQyxLQUFLLE1BSE4sS0FBSyxDQUlMLENBQ1IsQ0FBQztnQkFDSixDQUFDLENBQUMsSUFDWSxLQUNELENBQ2xCLENBQUM7QUFDSixDQUFDLENBQUM7QUEvR1csUUFBQSxrQkFBa0Isc0JBK0c3QjtBQUVGLGtCQUFlLDBCQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi4vc3ZnLWljb24vc3ZnLWljb24nO1xuaW1wb3J0IFVwSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtYXJyb3ctdXAuc3ZnJztcbmltcG9ydCBEb3duSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtYXJyb3ctZG93bi5zdmcnO1xuaW1wb3J0IHsgdXNlQ2xpY2tBd2F5IH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlLWNsaWNrLWF3YXknO1xuXG5jb25zdCBTdHlsZWREcm9wZG93biA9IHN0eWxlZC5kaXY8eyBkaXNhYmxlZD86IGJvb2xlYW4gfT4oXG4gICh7IHRoZW1lLCBkaXNhYmxlZCB9KSA9PiAoe1xuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuXG4gICAgLi4uKGRpc2FibGVkICYmIHtcbiAgICAgIG9wYWNpdHk6ICcwLjUnLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIH0pLFxuXG4gICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxuICAgICc6aG92ZXIsIDphY3RpdmUnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gICAgICBzdmc6IHtcbiAgICAgICAgcGF0aDoge1xuICAgICAgICAgIGZpbGw6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5jb25zdCBTdHlsZWRDb250ZW50Um93ID0gc3R5bGVkKEZsZXhSb3cpPHsgZXJyb3I/OiBib29sZWFuIH0+KFxuICAoeyB0aGVtZSwgZXJyb3IgfSkgPT5cbiAgICB0aGVtZS53aXRoTWVkaWEoe1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGJvcmRlcjogZXJyb3IgPyBgMXB4IHNvbGlkICR7dGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UmVkfWAgOiAnbm9uZScsXG4gICAgfSlcbik7XG5cbmNvbnN0IFN0eWxlZElucHV0ID0gc3R5bGVkLmlucHV0PHsgZm9udFNpemU/OiBzdHJpbmc7IGljb24/OiBib29sZWFuIH0+KFxuICAoeyB0aGVtZSwgZm9udFNpemUsIGljb24gfSkgPT4gKHtcbiAgICBsaW5lSGVpZ2h0OiAnMS41JyxcbiAgICBmb250U2l6ZTogZm9udFNpemUsXG4gICAgaGVpZ2h0OiAnMzZweCcsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgcGFkZGluZzogaWNvbiA/ICcwIDEycHgnIDogJzAgMTZweCcsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAyMDBtcyBlYXNlJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgfSxcbiAgfSlcbik7XG5cbmNvbnN0IEl0ZW1Db250YWluZXIgPSBzdHlsZWQuZGl2PHtcbiAgaXNPcGVuPzogYm9vbGVhbjtcbiAgaGVpZ2h0Pzogc3RyaW5nO1xuICBtYXhIZWlnaHQ/OiBzdHJpbmc7XG4gIGZvbnRTaXplPzogc3RyaW5nO1xufT4oKHsgdGhlbWUsIGlzT3BlbiwgaGVpZ2h0LCBmb250U2l6ZSwgbWF4SGVpZ2h0IH0pID0+ICh7XG4gIGRpc3BsYXk6IGlzT3BlbiA/ICdibG9jaycgOiAnbm9uZScsXG4gIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4gIGZvbnRTaXplOiBmb250U2l6ZSxcbiAgcGFkZGluZ0xlZnQ6ICc2cHgnLFxuICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gIGJveFNoYWRvdzogJzAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KScsXG4gIG1hcmdpblRvcDogJzRweCcsXG4gIGhlaWdodDogaGVpZ2h0LFxuICBtYXhIZWlnaHQ6IG1heEhlaWdodCxcbiAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB0b3A6ICcxMDAlJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgekluZGV4OiAnMTAwMCcsXG59KSk7XG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQuZGl2PHsgc2VsZWN0ZWQ6IGJvb2xlYW4gfT4oKHsgdGhlbWUsIHNlbGVjdGVkIH0pID0+ICh7XG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBwYWRkaW5nOiAnOHB4IDEwcHgnLFxuICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcbiAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnlCbHVlSG92ZXIsXG4gIH0sXG4gIGZvbnRXZWlnaHQ6IHNlbGVjdGVkID8gNjAwIDogNDAwLFxufSkpO1xuXG5jb25zdCBBcnJvd1N2ZyA9IHN0eWxlZChTdmdJY29uKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW5SaWdodDogJzE2cHgnLFxuICBwYXRoOiB7XG4gICAgZmlsbDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcbiAgfSxcbn0pKTtcblxuY29uc3QgQ3VzdG9tSWNvbiA9IHN0eWxlZC5kaXY8eyBpbkxvb3A/OiBib29sZWFuIH0+KCh7IGluTG9vcCB9KSA9PiAoe1xuICBtYXJnaW46IGluTG9vcCA/ICcwIDEycHggMCAwJyA6ICcwIDAgMCAxNnB4JyxcbiAgZGlzcGxheTogJ2lubGluZScsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICBib3R0b206IGluTG9vcCA/ICcwJyA6ICcxcHgnLFxufSkpO1xuXG5pbnRlcmZhY2UgSXRlbSB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGljb24/OiBSZWFjdC5SZWFjdEVsZW1lbnQgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaGFibGVEcm9wZG93blByb3BzIHtcbiAgaXRlbXM6IEl0ZW1bXTtcbiAgdmFsdWU6IEl0ZW07XG4gIG9uU2VsZWN0OiAoZGF0YTogYW55KSA9PiB2b2lkO1xuICBoZWlnaHQ/OiBzdHJpbmc7XG4gIG1heEhlaWdodD86IHN0cmluZztcbiAgZm9udFNpemU/OiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBpc0Vycm9yPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFNlYXJjaGFibGVEcm9wZG93biA9ICh7XG4gIGl0ZW1zLFxuICB2YWx1ZSxcbiAgaGVpZ2h0LFxuICBpc0Vycm9yLFxuICBmb250U2l6ZSxcbiAgbWF4SGVpZ2h0LFxuICBvblNlbGVjdCxcbiAgcGxhY2Vob2xkZXIsXG59OiBTZWFyY2hhYmxlRHJvcGRvd25Qcm9wcykgPT4ge1xuICBjb25zdCBbc2VhcmNoZWRWYWx1ZSwgc2V0U2VhcmNoZWRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyb3RhdGUsIHNldFJvdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpY29uLCBzZXRJY29uXSA9IHVzZVN0YXRlPFJlYWN0LlJlYWN0RWxlbWVudCB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IHsgcmVmIH0gPSB1c2VDbGlja0F3YXkoe1xuICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICBzZXRJc09wZW4oZmFsc2UpO1xuICAgIH0sXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmFsdWUuaWNvbiAmJiBzZXRJY29uKHZhbHVlLmljb24pO1xuICB9LCBbdmFsdWVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc09wZW4gPT09IHJvdGF0ZSkgcmV0dXJuO1xuXG4gICAgc2V0Um90YXRlKGlzT3Blbik7XG4gIH0sIFtpc09wZW5dKTtcblxuICBjb25zdCBzZWxlY3RPcHRpb24gPSAob3B0aW9uKSA9PiB7XG4gICAgc2V0U2VhcmNoZWRWYWx1ZSgnJyk7XG4gICAgb25TZWxlY3Qob3B0aW9uKTtcblxuICAgIHNldElzT3BlbigoaXNPcGVuKSA9PiAhaXNPcGVuKTtcbiAgICBzZXRJc09wZW4oIWlzT3Blbik7XG4gICAgc2V0SWNvbihvcHRpb24uaWNvbik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlT3BlbkRyb3Bkb3duID0gKGUpID0+IHtcbiAgICBzZXRJc09wZW4odHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0RGlzcGxheVZhbHVlID0gKCkgPT4ge1xuICAgIGlmIChzZWFyY2hlZFZhbHVlKSByZXR1cm4gc2VhcmNoZWRWYWx1ZTtcbiAgICBpZiAodmFsdWUpIHJldHVybiB2YWx1ZS5sYWJlbDtcblxuICAgIHJldHVybiAnJztcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJPcHRpb25zV2l0aFNlYXJjaGVkVmFsdWUgPSAob3B0aW9ucywgc2VhcmNoZWRWYWx1ZSkgPT4ge1xuICAgIHJldHVybiBvcHRpb25zLmZpbHRlcihcbiAgICAgIChvcHRpb24pID0+XG4gICAgICAgIG9wdGlvbi5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoZWRWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBzZWFyY2hlZEl0ZW1zID0gZmlsdGVyT3B0aW9uc1dpdGhTZWFyY2hlZFZhbHVlKGl0ZW1zLCBzZWFyY2hlZFZhbHVlKTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWREcm9wZG93biByZWY9e3JlZn0+XG4gICAgICA8RmxleFJvd1xuICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlT3BlbkRyb3Bkb3dufVxuICAgICAgPlxuICAgICAgICA8U3R5bGVkQ29udGVudFJvd1xuICAgICAgICAgIGp1c3RpZnk9eydzcGFjZS1hcm91bmQnfVxuICAgICAgICAgIGFsaWduPXsnY2VudGVyJ31cbiAgICAgICAgICBlcnJvcj17aXNFcnJvcn1cbiAgICAgICAgPlxuICAgICAgICAgIHtpY29uICYmIDxDdXN0b21JY29uPntpY29ufTwvQ3VzdG9tSWNvbj59XG4gICAgICAgICAgPFN0eWxlZElucHV0XG4gICAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgdmFsdWU9e2dldERpc3BsYXlWYWx1ZSgpfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIHNldFNlYXJjaGVkVmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICBvblNlbGVjdCh7fSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZm9udFNpemU9e2ZvbnRTaXplfVxuICAgICAgICAgICAgaWNvbj17Qm9vbGVhbihpY29uKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxBcnJvd1N2ZyBzcmM9e3JvdGF0ZSA/IFVwSWNvbiA6IERvd25JY29ufSAvPlxuICAgICAgICA8L1N0eWxlZENvbnRlbnRSb3c+XG4gICAgICA8L0ZsZXhSb3c+XG5cbiAgICAgIDxJdGVtQ29udGFpbmVyXG4gICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgZm9udFNpemU9e2ZvbnRTaXplfVxuICAgICAgICBtYXhIZWlnaHQ9e21heEhlaWdodH1cbiAgICAgID5cbiAgICAgICAge3NlYXJjaGVkSXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8SXRlbVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3RPcHRpb24oaXRlbSl9XG4gICAgICAgICAgICAgIHNlbGVjdGVkPXtpdGVtLnZhbHVlID09PSB2YWx1ZS52YWx1ZX1cbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2l0ZW0uaWNvbiAmJiA8Q3VzdG9tSWNvbiBpbkxvb3A+e2l0ZW0uaWNvbn08L0N1c3RvbUljb24+fVxuICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cbiAgICAgICAgICAgIDwvSXRlbT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvSXRlbUNvbnRhaW5lcj5cbiAgICA8L1N0eWxlZERyb3Bkb3duPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoYWJsZURyb3Bkb3duO1xuIl19