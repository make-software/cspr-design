"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownMenu = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var base_dropdown_menu_1 = require("../base-dropdown-menu/base-dropdown-menu");
var flex_column_1 = tslib_1.__importDefault(require("../../flex-column/flex-column"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledFlexColumn = (0, styled_components_1.default)(flex_column_1.default)(function (_a) {
    var theme = _a.theme, multiColumn = _a.multiColumn;
    return (tslib_1.__assign({ padding: '8px 0' }, (multiColumn && {
        padding: '8px',
        '& li:hover > *': {
            borderRadius: theme.borderRadius.base,
        },
    })));
});
var DropdownMenu = function (_a) {
    var children = _a.children, multiColumn = _a.multiColumn, rest = tslib_1.__rest(_a, ["children", "multiColumn"]);
    return ((0, jsx_runtime_1.jsx)(base_dropdown_menu_1.BaseDropdownMenu, tslib_1.__assign({}, rest, { children: (0, jsx_runtime_1.jsx)(StyledFlexColumn, tslib_1.__assign({ multiColumn: multiColumn }, { children: children })) })));
};
exports.DropdownMenu = DropdownMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSwrRUFBNEU7QUFDNUUsc0ZBQXVEO0FBQ3ZELGdGQUF1QztBQUV2QyxJQUFNLGdCQUFnQixHQUFHLElBQUEsMkJBQU0sRUFBQyxxQkFBVSxDQUFDLENBQ3pDLFVBQUMsRUFBc0I7UUFBcEIsS0FBSyxXQUFBLEVBQUUsV0FBVyxpQkFBQTtJQUFPLE9BQUEsb0JBQzFCLE9BQU8sRUFBRSxPQUFPLElBQ2IsQ0FBQyxXQUFXLElBQUk7UUFDakIsT0FBTyxFQUFFLEtBQUs7UUFDZCxnQkFBZ0IsRUFBRTtZQUNoQixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJO1NBQ3RDO0tBQ0YsQ0FBQyxFQUNGO0FBUjBCLENBUTFCLENBQ0gsQ0FBQztBQVFLLElBQU0sWUFBWSxHQUFHLFVBQUMsRUFJUTtJQUhuQyxJQUFBLFFBQVEsY0FBQSxFQUNSLFdBQVcsaUJBQUEsRUFDUixJQUFJLHNCQUhvQiwyQkFJNUIsQ0FEUTtJQUVQLE9BQU8sQ0FDTCx1QkFBQyxxQ0FBZ0IsdUJBQUssSUFBSSxjQUN4Qix1QkFBQyxnQkFBZ0IscUJBQUMsV0FBVyxFQUFFLFdBQVcsZ0JBQUcsUUFBUSxJQUFvQixJQUN4RCxDQUNwQixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBVlcsUUFBQSxZQUFZLGdCQVV2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJhc2VEcm9wZG93bk1lbnUgfSBmcm9tICcuLi9iYXNlLWRyb3Bkb3duLW1lbnUvYmFzZS1kcm9wZG93bi1tZW51JztcbmltcG9ydCBGbGV4Q29sdW1uIGZyb20gJy4uLy4uL2ZsZXgtY29sdW1uL2ZsZXgtY29sdW1uJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBTdHlsZWRGbGV4Q29sdW1uID0gc3R5bGVkKEZsZXhDb2x1bW4pPHsgbXVsdGlDb2x1bW4/OiBib29sZWFuIH0+KFxuICAoeyB0aGVtZSwgbXVsdGlDb2x1bW4gfSkgPT4gKHtcbiAgICBwYWRkaW5nOiAnOHB4IDAnLFxuICAgIC4uLihtdWx0aUNvbHVtbiAmJiB7XG4gICAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICAgICcmIGxpOmhvdmVyID4gKic6IHtcbiAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgICAgIH0sXG4gICAgfSksXG4gIH0pXG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lbnVQcm9wcyB7XG4gIG9wZW5lZD86IGJvb2xlYW47XG4gIG9uQ2xvc2U/OiAoKSA9PiB2b2lkO1xuICBtdWx0aUNvbHVtbj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBEcm9wZG93bk1lbnUgPSAoe1xuICBjaGlsZHJlbixcbiAgbXVsdGlDb2x1bW4sXG4gIC4uLnJlc3Rcbn06IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPE1lbnVQcm9wcz4pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QmFzZURyb3Bkb3duTWVudSB7Li4ucmVzdH0+XG4gICAgICA8U3R5bGVkRmxleENvbHVtbiBtdWx0aUNvbHVtbj17bXVsdGlDb2x1bW59PntjaGlsZHJlbn08L1N0eWxlZEZsZXhDb2x1bW4+XG4gICAgPC9CYXNlRHJvcGRvd25NZW51PlxuICApO1xufTtcbiJdfQ==