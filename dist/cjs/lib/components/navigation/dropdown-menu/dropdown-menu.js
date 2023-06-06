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
    return (tslib_1.__assign({ padding: padding !== null && padding !== void 0 ? padding : '8px 0' }, (multiColumn && {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSwrRUFBNEU7QUFDNUUsc0ZBQXVEO0FBQ3ZELGdGQUF1QztBQUV2QyxJQUFNLGdCQUFnQixHQUFHLElBQUEsMkJBQU0sRUFBQyxxQkFBVSxDQUFDLENBSXpDLFVBQUMsRUFBK0I7UUFBN0IsS0FBSyxXQUFBLEVBQUUsV0FBVyxpQkFBQSxFQUFFLE9BQU8sYUFBQTtJQUFPLE9BQUEsb0JBQ25DLE9BQU8sRUFBRSxPQUFPLGFBQVAsT0FBTyxjQUFQLE9BQU8sR0FBSSxPQUFPLElBQ3hCLENBQUMsV0FBVyxJQUFJO1FBQ2pCLE9BQU8sRUFBRSxLQUFLO1FBQ2QsZ0JBQWdCLEVBQUU7WUFDaEIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSTtTQUN0QztLQUNGLENBQUMsRUFDRjtBQVJtQyxDQVFuQyxDQUNILENBQUM7QUFTSyxJQUFNLFlBQVksR0FBRyxVQUFDLEVBS1E7SUFKbkMsSUFBQSxRQUFRLGNBQUEsRUFDUixXQUFXLGlCQUFBLEVBQ1gsT0FBTyxhQUFBLEVBQ0osSUFBSSxzQkFKb0Isc0NBSzVCLENBRFE7SUFFUCxPQUFPLENBQ0wsdUJBQUMscUNBQWdCLHVCQUFLLElBQUksY0FDeEIsdUJBQUMsZ0JBQWdCLHFCQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE9BQU8sZ0JBQUcsUUFBUSxJQUFvQixJQUMxRSxDQUNwQixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBWFcsUUFBQSxZQUFZLGdCQVd2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJhc2VEcm9wZG93bk1lbnUgfSBmcm9tICcuLi9iYXNlLWRyb3Bkb3duLW1lbnUvYmFzZS1kcm9wZG93bi1tZW51JztcbmltcG9ydCBGbGV4Q29sdW1uIGZyb20gJy4uLy4uL2ZsZXgtY29sdW1uL2ZsZXgtY29sdW1uJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBTdHlsZWRGbGV4Q29sdW1uID0gc3R5bGVkKEZsZXhDb2x1bW4pPHtcbiAgICBtdWx0aUNvbHVtbj86IGJvb2xlYW4sXG4gICAgcGFkZGluZz86IHN0cmluZ1xufT4oXG4gICh7IHRoZW1lLCBtdWx0aUNvbHVtbiwgcGFkZGluZyB9KSA9PiAoe1xuICAgIHBhZGRpbmc6IHBhZGRpbmcgPz8gJzhweCAwJyxcbiAgICAuLi4obXVsdGlDb2x1bW4gJiYge1xuICAgICAgcGFkZGluZzogJzhweCcsXG4gICAgICAnJiBsaTpob3ZlciA+IConOiB7XG4gICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4gICAgICB9LFxuICAgIH0pLFxuICB9KVxuKTtcblxuZXhwb3J0IGludGVyZmFjZSBNZW51UHJvcHMge1xuICBvcGVuZWQ/OiBib29sZWFuO1xuICBvbkNsb3NlPzogKCkgPT4gdm9pZDtcbiAgbXVsdGlDb2x1bW4/OiBib29sZWFuO1xuICAgIHBhZGRpbmc/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBEcm9wZG93bk1lbnUgPSAoe1xuICBjaGlsZHJlbixcbiAgbXVsdGlDb2x1bW4sXG4gIHBhZGRpbmcsXG4gIC4uLnJlc3Rcbn06IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPE1lbnVQcm9wcz4pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QmFzZURyb3Bkb3duTWVudSB7Li4ucmVzdH0+XG4gICAgICA8U3R5bGVkRmxleENvbHVtbiBtdWx0aUNvbHVtbj17bXVsdGlDb2x1bW59IHBhZGRpbmc9e3BhZGRpbmd9PntjaGlsZHJlbn08L1N0eWxlZEZsZXhDb2x1bW4+XG4gICAgPC9CYXNlRHJvcGRvd25NZW51PlxuICApO1xufTtcbiJdfQ==