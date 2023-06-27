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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSwrRUFBNEU7QUFDNUUsc0ZBQXVEO0FBQ3ZELGdGQUF1QztBQUV2QyxJQUFNLGdCQUFnQixHQUFHLElBQUEsMkJBQU0sRUFBQyxxQkFBVSxDQUFDLENBSXpDLFVBQUMsRUFBK0I7UUFBN0IsS0FBSyxXQUFBLEVBQUUsV0FBVyxpQkFBQSxFQUFFLE9BQU8sYUFBQTtJQUFPLE9BQUEsb0JBQ25DLE9BQU8sRUFBRSxPQUFPLGFBQVAsT0FBTyxjQUFQLE9BQU8sR0FBSSxPQUFPLElBQ3hCLENBQUMsV0FBVyxJQUFJO1FBQ2pCLE9BQU8sRUFBRSxLQUFLO1FBQ2QsZ0JBQWdCLEVBQUU7WUFDaEIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSTtTQUN0QztLQUNGLENBQUMsRUFDRjtBQVJtQyxDQVFuQyxDQUNILENBQUM7QUFTSyxJQUFNLFlBQVksR0FBRyxVQUFDLEVBS1E7SUFKbkMsSUFBQSxRQUFRLGNBQUEsRUFDUixXQUFXLGlCQUFBLEVBQ1gsT0FBTyxhQUFBLEVBQ0osSUFBSSxzQkFKb0Isc0NBSzVCLENBRFE7SUFFUCxPQUFPLENBQ0wsdUJBQUMscUNBQWdCLHVCQUFLLElBQUksY0FDeEIsdUJBQUMsZ0JBQWdCLHFCQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE9BQU8sZ0JBQUcsUUFBUSxJQUFvQixJQUMxRSxDQUNwQixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBWFcsUUFBQSxZQUFZLGdCQVd2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQmFzZURyb3Bkb3duTWVudSB9IGZyb20gJy4uL2Jhc2UtZHJvcGRvd24tbWVudS9iYXNlLWRyb3Bkb3duLW1lbnUnO1xyXG5pbXBvcnQgRmxleENvbHVtbiBmcm9tICcuLi8uLi9mbGV4LWNvbHVtbi9mbGV4LWNvbHVtbic7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgU3R5bGVkRmxleENvbHVtbiA9IHN0eWxlZChGbGV4Q29sdW1uKTx7XHJcbiAgICBtdWx0aUNvbHVtbj86IGJvb2xlYW4sXHJcbiAgICBwYWRkaW5nPzogc3RyaW5nXHJcbn0+KFxyXG4gICh7IHRoZW1lLCBtdWx0aUNvbHVtbiwgcGFkZGluZyB9KSA9PiAoe1xyXG4gICAgcGFkZGluZzogcGFkZGluZyA/PyAnOHB4IDAnLFxyXG4gICAgLi4uKG11bHRpQ29sdW1uICYmIHtcclxuICAgICAgcGFkZGluZzogJzhweCcsXHJcbiAgICAgICcmIGxpOmhvdmVyID4gKic6IHtcclxuICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVudVByb3BzIHtcclxuICBvcGVuZWQ/OiBib29sZWFuO1xyXG4gIG9uQ2xvc2U/OiAoKSA9PiB2b2lkO1xyXG4gIG11bHRpQ29sdW1uPzogYm9vbGVhbjtcclxuICAgIHBhZGRpbmc/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEcm9wZG93bk1lbnUgPSAoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIG11bHRpQ29sdW1uLFxyXG4gIHBhZGRpbmcsXHJcbiAgLi4ucmVzdFxyXG59OiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxNZW51UHJvcHM+KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCYXNlRHJvcGRvd25NZW51IHsuLi5yZXN0fT5cclxuICAgICAgPFN0eWxlZEZsZXhDb2x1bW4gbXVsdGlDb2x1bW49e211bHRpQ29sdW1ufSBwYWRkaW5nPXtwYWRkaW5nfT57Y2hpbGRyZW59PC9TdHlsZWRGbGV4Q29sdW1uPlxyXG4gICAgPC9CYXNlRHJvcGRvd25NZW51PlxyXG4gICk7XHJcbn07XHJcbiJdfQ==