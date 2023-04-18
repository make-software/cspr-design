"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsMenu = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var base_dropdown_menu_1 = require("../base-dropdown-menu/base-dropdown-menu");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var flex_row_1 = tslib_1.__importDefault(require("../../flex-row/flex-row"));
var match_media_1 = require("../../../utils/match-media");
var flex_column_1 = tslib_1.__importDefault(require("../../flex-column/flex-column"));
var ProductsMenuWrapper = styled_components_1.default.ul(function (_a) {
    var theme = _a.theme;
    return ({
        maxWidth: "620px",
        padding: '8px',
        margin: 0
    });
});
var ProductsMenu = function (_a) {
    var _b = _a.opened, opened = _b === void 0 ? false : _b, children = _a.children;
    var ProductContainer = (0, match_media_1.useMatchMedia)([flex_column_1.default, flex_column_1.default, flex_row_1.default], []);
    return ((0, jsx_runtime_1.jsx)(base_dropdown_menu_1.BaseDropdownMenu, tslib_1.__assign({ opened: opened }, { children: (0, jsx_runtime_1.jsx)(ProductsMenuWrapper, { children: (0, jsx_runtime_1.jsx)(ProductContainer, tslib_1.__assign({ wrap: 'wrap' }, { children: children })) }) })));
};
exports.ProductsMenu = ProductsMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMtbWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2NzcHItcHJvZHVjdHMtbWVudS9wcm9kdWN0cy1tZW51LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLCtFQUE0RTtBQUM1RSxnRkFBdUM7QUFDdkMsNkVBQThDO0FBQzlDLDBEQUF5RDtBQUN6RCxzRkFBdUQ7QUFNdkQsSUFBTSxtQkFBbUIsR0FBRywyQkFBTSxDQUFDLEVBQUUsQ0FFbEMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ2pCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLE9BQU8sRUFBRSxLQUFLO1FBQ2QsTUFBTSxFQUFFLENBQUM7S0FDVixDQUFDO0FBSmdCLENBSWhCLENBQUMsQ0FBQztBQUVHLElBQU0sWUFBWSxHQUFHLFVBQUMsRUFHVTtRQUZyQyxjQUFjLEVBQWQsTUFBTSxtQkFBRyxLQUFLLEtBQUEsRUFDZCxRQUFRLGNBQUE7SUFHUixJQUFNLGdCQUFnQixHQUFHLElBQUEsMkJBQWEsRUFBQyxDQUFDLHFCQUFVLEVBQUUscUJBQVUsRUFBRSxrQkFBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFOUUsT0FBTyxDQUNMLHVCQUFDLHFDQUFnQixxQkFBQyxNQUFNLEVBQUUsTUFBTSxnQkFDOUIsdUJBQUMsbUJBQW1CLGNBQ2xCLHVCQUFDLGdCQUFnQixxQkFBQyxJQUFJLEVBQUUsTUFBTSxnQkFBRyxRQUFRLElBQW9CLEdBQ3pDLElBQ0wsQ0FDcEIsQ0FBQztBQUNKLENBQUMsQ0FBQztBQWRXLFFBQUEsWUFBWSxnQkFjdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJhc2VEcm9wZG93bk1lbnUgfSBmcm9tIFwiLi4vYmFzZS1kcm9wZG93bi1tZW51L2Jhc2UtZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBGbGV4Um93IGZyb20gXCIuLi8uLi9mbGV4LXJvdy9mbGV4LXJvd1wiO1xuaW1wb3J0IHt1c2VNYXRjaE1lZGlhfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvbWF0Y2gtbWVkaWFcIjtcbmltcG9ydCBGbGV4Q29sdW1uIGZyb20gXCIuLi8uLi9mbGV4LWNvbHVtbi9mbGV4LWNvbHVtblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RzTWVudVByb3BzIHtcbiAgb3BlbmVkPzogYm9vbGVhbjtcbn1cblxuY29uc3QgUHJvZHVjdHNNZW51V3JhcHBlciA9IHN0eWxlZC51bDx7XG4gIGNvbnRhaW5lclBhZGRpbmc/OiBzdHJpbmc7XG59PigoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXhXaWR0aDogXCI2MjBweFwiLFxuICBwYWRkaW5nOiAnOHB4JyxcbiAgbWFyZ2luOiAwXG59KSk7XG5cbmV4cG9ydCBjb25zdCBQcm9kdWN0c01lbnUgPSAoe1xuICBvcGVuZWQgPSBmYWxzZSxcbiAgY2hpbGRyZW4sXG59OiBQcm9wc1dpdGhDaGlsZHJlbjxQcm9kdWN0c01lbnVQcm9wcz4pID0+IHtcblxuICBjb25zdCBQcm9kdWN0Q29udGFpbmVyID0gdXNlTWF0Y2hNZWRpYShbRmxleENvbHVtbiwgRmxleENvbHVtbiwgRmxleFJvd10sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxCYXNlRHJvcGRvd25NZW51IG9wZW5lZD17b3BlbmVkfT5cbiAgICAgIDxQcm9kdWN0c01lbnVXcmFwcGVyPlxuICAgICAgICA8UHJvZHVjdENvbnRhaW5lciB3cmFwPXsnd3JhcCd9PntjaGlsZHJlbn08L1Byb2R1Y3RDb250YWluZXI+XG4gICAgICA8L1Byb2R1Y3RzTWVudVdyYXBwZXI+XG4gICAgPC9CYXNlRHJvcGRvd25NZW51PlxuICApO1xufTtcbiJdfQ==