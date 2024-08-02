"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownMenu = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var base_dropdown_menu_1 = require("../base-dropdown-menu/base-dropdown-menu");
var flex_column_1 = tslib_1.__importDefault(require("../../flex-column/flex-column"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledFlexColumn = (0, styled_components_1.default)(flex_column_1.default)(function (_a) {
    var theme = _a.theme, multiColumn = _a.multiColumn, padding = _a.padding;
    return (tslib_1.__assign({ padding: padding !== null && padding !== void 0 ? padding : '8px' }, (multiColumn && {
        padding: '8px',
        '& li:hover > *': {
            borderRadius: theme.borderRadius.base,
        },
    })));
});
var DropdownMenu = function (_a) {
    var children = _a.children, multiColumn = _a.multiColumn, padding = _a.padding, rest = tslib_1.__rest(_a, ["children", "multiColumn", "padding"]);
    return ((0, jsx_runtime_1.jsx)(base_dropdown_menu_1.BaseDropdownMenu, tslib_1.__assign({}, rest, { children: (0, jsx_runtime_1.jsx)(StyledFlexColumn, tslib_1.__assign({ multiColumn: multiColumn, padding: padding }, { children: children })) })));
};
exports.DropdownMenu = DropdownMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSwrRUFBNEU7QUFDNUUsc0ZBQXVEO0FBQ3ZELGdGQUF1QztBQUV2QyxJQUFNLGdCQUFnQixHQUFHLElBQUEsMkJBQU0sRUFBQyxxQkFBVSxDQUFDLENBR3hDLFVBQUMsRUFBK0I7UUFBN0IsS0FBSyxXQUFBLEVBQUUsV0FBVyxpQkFBQSxFQUFFLE9BQU8sYUFBQTtJQUFPLE9BQUEsb0JBQ3RDLE9BQU8sRUFBRSxPQUFPLGFBQVAsT0FBTyxjQUFQLE9BQU8sR0FBSSxLQUFLLElBQ3RCLENBQUMsV0FBVyxJQUFJO1FBQ2pCLE9BQU8sRUFBRSxLQUFLO1FBQ2QsZ0JBQWdCLEVBQUU7WUFDaEIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSTtTQUN0QztLQUNGLENBQUMsRUFDRjtBQVJzQyxDQVF0QyxDQUFDLENBQUM7QUFVRyxJQUFNLFlBQVksR0FBRyxVQUFDLEVBS1E7SUFKbkMsSUFBQSxRQUFRLGNBQUEsRUFDUixXQUFXLGlCQUFBLEVBQ1gsT0FBTyxhQUFBLEVBQ0osSUFBSSxzQkFKb0Isc0NBSzVCLENBRFE7SUFFUCxPQUFPLENBQ0wsdUJBQUMscUNBQWdCLHVCQUFLLElBQUksY0FDeEIsdUJBQUMsZ0JBQWdCLHFCQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE9BQU8sZ0JBQ3pELFFBQVEsSUFDUSxJQUNGLENBQ3BCLENBQUM7QUFDSixDQUFDLENBQUM7QUFiVyxRQUFBLFlBQVksZ0JBYXZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQmFzZURyb3Bkb3duTWVudSB9IGZyb20gJy4uL2Jhc2UtZHJvcGRvd24tbWVudS9iYXNlLWRyb3Bkb3duLW1lbnUnO1xuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSAnLi4vLi4vZmxleC1jb2x1bW4vZmxleC1jb2x1bW4nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFN0eWxlZEZsZXhDb2x1bW4gPSBzdHlsZWQoRmxleENvbHVtbik8e1xuICBtdWx0aUNvbHVtbj86IGJvb2xlYW47XG4gIHBhZGRpbmc/OiBzdHJpbmc7XG59PigoeyB0aGVtZSwgbXVsdGlDb2x1bW4sIHBhZGRpbmcgfSkgPT4gKHtcbiAgcGFkZGluZzogcGFkZGluZyA/PyAnOHB4JyxcbiAgLi4uKG11bHRpQ29sdW1uICYmIHtcbiAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICAnJiBsaTpob3ZlciA+IConOiB7XG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICAgIH0sXG4gIH0pLFxufSkpO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lbnVQcm9wcyB7XG4gIG9wZW5lZD86IGJvb2xlYW47XG4gIG9uQ2xvc2U/OiAoKSA9PiB2b2lkO1xuICBtdWx0aUNvbHVtbj86IGJvb2xlYW47XG4gIHBhZGRpbmc/OiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IERyb3Bkb3duTWVudSA9ICh7XG4gIGNoaWxkcmVuLFxuICBtdWx0aUNvbHVtbixcbiAgcGFkZGluZyxcbiAgLi4ucmVzdFxufTogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TWVudVByb3BzPikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCYXNlRHJvcGRvd25NZW51IHsuLi5yZXN0fT5cbiAgICAgIDxTdHlsZWRGbGV4Q29sdW1uIG11bHRpQ29sdW1uPXttdWx0aUNvbHVtbn0gcGFkZGluZz17cGFkZGluZ30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvU3R5bGVkRmxleENvbHVtbj5cbiAgICA8L0Jhc2VEcm9wZG93bk1lbnU+XG4gICk7XG59O1xuIl19