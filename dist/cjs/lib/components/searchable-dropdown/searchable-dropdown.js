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
    var _b = (0, react_1.useState)(''), query = _b[0], setQuery = _b[1];
    var _c = (0, react_1.useState)(false), isOpen = _c[0], setIsOpen = _c[1];
    var _d = (0, react_1.useState)(null), icon = _d[0], setIcon = _d[1];
    (0, react_1.useEffect)(function () {
        value.icon && setIcon(value.icon);
    }, [value]);
    var inputRef = (0, react_1.useRef)(null);
    var ref = (0, use_click_away_1.useClickAway)({
        callback: function () {
            setIsOpen(false);
        },
    }).ref;
    var selectOption = function (option) {
        setQuery(function () { return ''; });
        onSelect(option);
        setIsOpen(function (isOpen) { return !isOpen; });
        setIcon(option.icon);
    };
    var toggle = function (e) {
        setIsOpen(e && e.target === inputRef.current);
    };
    var getDisplayValue = function () {
        if (query)
            return query;
        if (value)
            return value.label;
        return '';
    };
    var filterOptionsWithSearchedValue = function (options, query) {
        return options.filter(function (option) { return option.label.toLowerCase().indexOf(query.toLowerCase()) > -1; });
    };
    var searchedOptions = filterOptionsWithSearchedValue(items, query);
    return ((0, jsx_runtime_1.jsxs)(StyledDropdown, tslib_1.__assign({ ref: ref }, { children: [(0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ align: "center", justify: "space-between" }, { children: [icon && (0, jsx_runtime_1.jsx)(CustomIcon, { children: icon }), (0, jsx_runtime_1.jsx)(StyledInput, { ref: inputRef, placeholder: placeholder, value: getDisplayValue(), onChange: function (e) {
                            setQuery(e.target.value);
                            onSelect({});
                        }, onClick: toggle, fontSize: fontSize, icon: Boolean(icon) }), (0, jsx_runtime_1.jsx)(ArrowSvg, { src: isOpen ? ic_arrow_up_svg_1.default : ic_arrow_down_svg_1.default })] })), (0, jsx_runtime_1.jsx)(ItemContainer, tslib_1.__assign({ isOpen: isOpen, height: height, fontSize: fontSize, maxHeight: maxHeight }, { children: searchedOptions.map(function (item, index) {
                    return ((0, jsx_runtime_1.jsxs)(Item, tslib_1.__assign({ onClick: function () { return selectOption(item); }, selected: item.value === value.value }, { children: [item.icon && (0, jsx_runtime_1.jsx)(CustomIcon, tslib_1.__assign({ inLoop: true }, { children: item.icon })), item.label] }), index));
                }) }))] })));
};
exports.SearchableDropdown = SearchableDropdown;
exports.default = exports.SearchableDropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYWJsZS1kcm9wZG93bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9zZWFyY2hhYmxlLWRyb3Bkb3duL3NlYXJjaGFibGUtZHJvcGRvd24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQTJEO0FBQzNELGdGQUF1QztBQUN2QywwRUFBMkM7QUFDM0MsMEVBQTJDO0FBQzNDLCtGQUF3RDtBQUN4RCxtR0FBNEQ7QUFDNUQsNkRBQTBEO0FBRTFELElBQU0sY0FBYyxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUMvQixVQUFDLEVBQW1CO1FBQWpCLEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBQTtJQUFPLE9BQUEscUNBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQ2YsUUFBUSxFQUFFLFVBQVUsRUFDcEIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUVsQyxDQUFDLFFBQVEsSUFBSTtRQUNkLE9BQU8sRUFBRSxLQUFLO1FBQ2QsYUFBYSxFQUFFLE1BQU07S0FDdEIsQ0FBQyxLQUVGLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUNoRCxpQkFBaUIsRUFBRTtZQUNqQixVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWE7WUFDaEQsR0FBRyxFQUFFO2dCQUNILElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWM7aUJBQzVDO2FBQ0Y7U0FDRixJQUNEO0FBbkJ1QixDQW1CdkIsQ0FDSCxDQUFDO0FBRUYsSUFBTSxXQUFXLEdBQUcsMkJBQU0sQ0FBQyxLQUFLLENBQzlCLFVBQUMsRUFBeUI7UUFBdkIsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFBO0lBQU8sT0FBQSxDQUFDO1FBQzlCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFFBQVEsRUFBRSxRQUFR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QixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUNuQixFQUNGLHVCQUFDLFFBQVEsSUFBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyx5QkFBTSxDQUFDLENBQUMsQ0FBQywyQkFBUSxHQUFJLEtBQ3JDLEVBRVYsdUJBQUMsYUFBYSxxQkFDWixNQUFNLEVBQUUsTUFBTSxFQUNkLE1BQU0sRUFBRSxNQUFNLEVBQ2QsUUFBUSxFQUFFLFFBQVEsRUFDbEIsU0FBUyxFQUFFLFNBQVMsZ0JBRW5CLGVBQWUsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSztvQkFDL0IsT0FBTyxDQUNMLHdCQUFDLElBQUkscUJBQ0gsT0FBTyxFQUFFLGNBQU0sT0FBQSxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQWxCLENBQWtCLEVBQ2pDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLGlCQUduQyxJQUFJLENBQUMsSUFBSSxJQUFJLHVCQUFDLFVBQVUscUJBQUMsTUFBTSxzQkFBRSxJQUFJLENBQUMsSUFBSSxJQUFjLEVBQ3hELElBQUksQ0FBQyxLQUFLLE1BSE4sS0FBSyxDQUlMLENBQ1IsQ0FBQztnQkFDSixDQUFDLENBQUMsSUFDWSxLQUNELENBQ2xCLENBQUM7QUFDSixDQUFDLENBQUM7QUE1RlcsUUFBQSxrQkFBa0Isc0JBNEY3QjtBQUVGLGtCQUFlLDBCQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi4vc3ZnLWljb24vc3ZnLWljb24nO1xuaW1wb3J0IFVwSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtYXJyb3ctdXAuc3ZnJztcbmltcG9ydCBEb3duSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtYXJyb3ctZG93bi5zdmcnO1xuaW1wb3J0IHsgdXNlQ2xpY2tBd2F5IH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlLWNsaWNrLWF3YXknO1xuXG5jb25zdCBTdHlsZWREcm9wZG93biA9IHN0eWxlZC5kaXY8eyBkaXNhYmxlZD86IGJvb2xlYW4gfT4oXG4gICh7IHRoZW1lLCBkaXNhYmxlZCB9KSA9PiAoe1xuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuXG4gICAgLi4uKGRpc2FibGVkICYmIHtcbiAgICAgIG9wYWNpdHk6ICcwLjUnLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIH0pLFxuXG4gICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxuICAgICc6aG92ZXIsIDphY3RpdmUnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gICAgICBzdmc6IHtcbiAgICAgICAgcGF0aDoge1xuICAgICAgICAgIGZpbGw6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5jb25zdCBTdHlsZWRJbnB1dCA9IHN0eWxlZC5pbnB1dDx7IGZvbnRTaXplPzogc3RyaW5nOyBpY29uPzogYm9vbGVhbiB9PihcbiAgKHsgdGhlbWUsIGZvbnRTaXplLCBpY29uIH0pID0+ICh7XG4gICAgbGluZUhlaWdodDogJzEuNScsXG4gICAgZm9udFNpemU6IGZvbnRTaXplLFxuICAgIGhlaWdodDogJzM2cHgnLFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIHBhZGRpbmc6IGljb24gPyAnMCAxMnB4JyA6ICcwIDE2cHgnLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMjAwbXMgZWFzZScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5jb25zdCBJdGVtQ29udGFpbmVyID0gc3R5bGVkLmRpdjx7XG4gIGlzT3Blbj86IGJvb2xlYW47XG4gIGhlaWdodD86IHN0cmluZztcbiAgbWF4SGVpZ2h0Pzogc3RyaW5nO1xuICBmb250U2l6ZT86IHN0cmluZztcbn0+KCh7IHRoZW1lLCBpc09wZW4sIGhlaWdodCwgZm9udFNpemUsIG1heEhlaWdodCB9KSA9PiAoe1xuICBkaXNwbGF5OiBpc09wZW4gPyAnYmxvY2snIDogJ25vbmUnLFxuICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICBmb250U2l6ZTogZm9udFNpemUsXG4gIHBhZGRpbmdMZWZ0OiAnNnB4JyxcbiAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxuICBib3hTaGFkb3c6ICcwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wNiknLFxuICBtYXJnaW5Ub3A6ICc0cHgnLFxuICBoZWlnaHQ6IGhlaWdodCxcbiAgbWF4SGVpZ2h0OiBtYXhIZWlnaHQsXG4gIG92ZXJmbG93WTogJ2F1dG8nLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdG9wOiAnMTAwJScsXG4gIHdpZHRoOiAnMTAwJScsXG4gIHpJbmRleDogJzEwMDAnLFxufSkpO1xuXG5jb25zdCBJdGVtID0gc3R5bGVkLmRpdjx7IHNlbGVjdGVkOiBib29sZWFuIH0+KCh7IHRoZW1lLCBzZWxlY3RlZCB9KSA9PiAoe1xuICBkaXNwbGF5OiAnYmxvY2snLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgcGFkZGluZzogJzhweCAxMHB4JyxcbiAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXG4gICc6aG92ZXIsIDphY3RpdmUnOiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5Qmx1ZUhvdmVyLFxuICB9LFxuICBmb250V2VpZ2h0OiBzZWxlY3RlZCA/IDYwMCA6IDQwMCxcbn0pKTtcblxuY29uc3QgQXJyb3dTdmcgPSBzdHlsZWQoU3ZnSWNvbikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgbWFyZ2luUmlnaHQ6ICcxNnB4JyxcbiAgcGF0aDoge1xuICAgIGZpbGw6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXG4gIH0sXG59KSk7XG5cbmNvbnN0IEN1c3RvbUljb24gPSBzdHlsZWQuZGl2PHsgaW5Mb29wPzogYm9vbGVhbiB9PigoeyBpbkxvb3AgfSkgPT4gKHtcbiAgbWFyZ2luOiBpbkxvb3AgPyAnMCAxMnB4IDAgMCcgOiAnMCAwIDAgMTZweCcsXG4gIGRpc3BsYXk6ICdpbmxpbmUnLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgYm90dG9tOiBpbkxvb3AgPyAnMCcgOiAnMXB4Jyxcbn0pKTtcblxuaW50ZXJmYWNlIEl0ZW0ge1xuICB2YWx1ZTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBpY29uPzogUmVhY3QuUmVhY3RFbGVtZW50IHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hhYmxlRHJvcGRvd25Qcm9wcyB7XG4gIGl0ZW1zOiBJdGVtW107XG4gIHZhbHVlOiBJdGVtO1xuICBvblNlbGVjdDogKGRhdGE6IGFueSkgPT4gdm9pZDtcbiAgaGVpZ2h0Pzogc3RyaW5nO1xuICBtYXhIZWlnaHQ/OiBzdHJpbmc7XG4gIGZvbnRTaXplPzogc3RyaW5nO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFNlYXJjaGFibGVEcm9wZG93biA9ICh7XG4gIGl0ZW1zLFxuICB2YWx1ZSxcbiAgaGVpZ2h0LFxuICBmb250U2l6ZSxcbiAgbWF4SGVpZ2h0LFxuICBvblNlbGVjdCxcbiAgcGxhY2Vob2xkZXIsXG59OiBTZWFyY2hhYmxlRHJvcGRvd25Qcm9wcykgPT4ge1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ljb24sIHNldEljb25dID0gdXNlU3RhdGU8UmVhY3QuUmVhY3RFbGVtZW50IHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YWx1ZS5pY29uICYmIHNldEljb24odmFsdWUuaWNvbik7XG4gIH0sIFt2YWx1ZV0pO1xuXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IHsgcmVmIH0gPSB1c2VDbGlja0F3YXkoe1xuICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICBzZXRJc09wZW4oZmFsc2UpO1xuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IHNlbGVjdE9wdGlvbiA9IChvcHRpb24pID0+IHtcbiAgICBzZXRRdWVyeSgoKSA9PiAnJyk7XG4gICAgb25TZWxlY3Qob3B0aW9uKTtcblxuICAgIHNldElzT3BlbigoaXNPcGVuKSA9PiAhaXNPcGVuKTtcbiAgICBzZXRJY29uKG9wdGlvbi5pY29uKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGUgPSAoZSkgPT4ge1xuICAgIHNldElzT3BlbihlICYmIGUudGFyZ2V0ID09PSBpbnB1dFJlZi5jdXJyZW50KTtcbiAgfTtcblxuICBjb25zdCBnZXREaXNwbGF5VmFsdWUgPSAoKSA9PiB7XG4gICAgaWYgKHF1ZXJ5KSByZXR1cm4gcXVlcnk7XG4gICAgaWYgKHZhbHVlKSByZXR1cm4gdmFsdWUubGFiZWw7XG5cbiAgICByZXR1cm4gJyc7XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyT3B0aW9uc1dpdGhTZWFyY2hlZFZhbHVlID0gKG9wdGlvbnMsIHF1ZXJ5KSA9PiB7XG4gICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKFxuICAgICAgKG9wdGlvbikgPT4gb3B0aW9uLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihxdWVyeS50b0xvd2VyQ2FzZSgpKSA+IC0xXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBzZWFyY2hlZE9wdGlvbnMgPSBmaWx0ZXJPcHRpb25zV2l0aFNlYXJjaGVkVmFsdWUoaXRlbXMsIHF1ZXJ5KTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWREcm9wZG93biByZWY9e3JlZn0+XG4gICAgICA8RmxleFJvdyBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgIHtpY29uICYmIDxDdXN0b21JY29uPntpY29ufTwvQ3VzdG9tSWNvbj59XG4gICAgICAgIDxTdHlsZWRJbnB1dFxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIHZhbHVlPXtnZXREaXNwbGF5VmFsdWUoKX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIG9uU2VsZWN0KHt9KTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZX1cbiAgICAgICAgICBmb250U2l6ZT17Zm9udFNpemV9XG4gICAgICAgICAgaWNvbj17Qm9vbGVhbihpY29uKX1cbiAgICAgICAgLz5cbiAgICAgICAgPEFycm93U3ZnIHNyYz17aXNPcGVuID8gVXBJY29uIDogRG93bkljb259IC8+XG4gICAgICA8L0ZsZXhSb3c+XG5cbiAgICAgIDxJdGVtQ29udGFpbmVyXG4gICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgZm9udFNpemU9e2ZvbnRTaXplfVxuICAgICAgICBtYXhIZWlnaHQ9e21heEhlaWdodH1cbiAgICAgID5cbiAgICAgICAge3NlYXJjaGVkT3B0aW9ucy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxJdGVtXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdE9wdGlvbihpdGVtKX1cbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2l0ZW0udmFsdWUgPT09IHZhbHVlLnZhbHVlfVxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXRlbS5pY29uICYmIDxDdXN0b21JY29uIGluTG9vcD57aXRlbS5pY29ufTwvQ3VzdG9tSWNvbj59XG4gICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgPC9JdGVtPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9JdGVtQ29udGFpbmVyPlxuICAgIDwvU3R5bGVkRHJvcGRvd24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hhYmxlRHJvcGRvd247XG4iXX0=