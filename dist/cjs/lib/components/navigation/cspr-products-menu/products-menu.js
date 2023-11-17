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
        maxWidth: '620px',
        padding: '8px',
        margin: 0,
    });
});
var ProductsMenu = function (_a) {
    var _b = _a.opened, opened = _b === void 0 ? false : _b, children = _a.children;
    var ProductContainer = (0, match_media_1.useMatchMedia)([flex_column_1.default, flex_column_1.default, flex_row_1.default], []);
    return ((0, jsx_runtime_1.jsx)(base_dropdown_menu_1.BaseDropdownMenu, tslib_1.__assign({ opened: opened }, { children: (0, jsx_runtime_1.jsx)(ProductsMenuWrapper, { children: (0, jsx_runtime_1.jsx)(ProductContainer, tslib_1.__assign({ wrap: 'wrap' }, { children: children })) }) })));
};
exports.ProductsMenu = ProductsMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMtbWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2NzcHItcHJvZHVjdHMtbWVudS9wcm9kdWN0cy1tZW51LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLCtFQUE0RTtBQUM1RSxnRkFBdUM7QUFDdkMsNkVBQThDO0FBQzlDLDBEQUEyRDtBQUMzRCxzRkFBdUQ7QUFNdkQsSUFBTSxtQkFBbUIsR0FBRywyQkFBTSxDQUFDLEVBQUUsQ0FFbEMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ2pCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLE9BQU8sRUFBRSxLQUFLO1FBQ2QsTUFBTSxFQUFFLENBQUM7S0FDVixDQUFDO0FBSmdCLENBSWhCLENBQUMsQ0FBQztBQUVHLElBQU0sWUFBWSxHQUFHLFVBQUMsRUFHVTtRQUZyQyxjQUFjLEVBQWQsTUFBTSxtQkFBRyxLQUFLLEtBQUEsRUFDZCxRQUFRLGNBQUE7SUFFUixJQUFNLGdCQUFnQixHQUFHLElBQUEsMkJBQWEsRUFBQyxDQUFDLHFCQUFVLEVBQUUscUJBQVUsRUFBRSxrQkFBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFOUUsT0FBTyxDQUNMLHVCQUFDLHFDQUFnQixxQkFBQyxNQUFNLEVBQUUsTUFBTSxnQkFDOUIsdUJBQUMsbUJBQW1CLGNBQ2xCLHVCQUFDLGdCQUFnQixxQkFBQyxJQUFJLEVBQUUsTUFBTSxnQkFBRyxRQUFRLElBQW9CLEdBQ3pDLElBQ0wsQ0FDcEIsQ0FBQztBQUNKLENBQUMsQ0FBQztBQWJXLFFBQUEsWUFBWSxnQkFhdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJhc2VEcm9wZG93bk1lbnUgfSBmcm9tICcuLi9iYXNlLWRyb3Bkb3duLW1lbnUvYmFzZS1kcm9wZG93bi1tZW51JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uLy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcclxuaW1wb3J0IHsgdXNlTWF0Y2hNZWRpYSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL21hdGNoLW1lZGlhJztcclxuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSAnLi4vLi4vZmxleC1jb2x1bW4vZmxleC1jb2x1bW4nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0c01lbnVQcm9wcyB7XHJcbiAgb3BlbmVkPzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgUHJvZHVjdHNNZW51V3JhcHBlciA9IHN0eWxlZC51bDx7XHJcbiAgY29udGFpbmVyUGFkZGluZz86IHN0cmluZztcclxufT4oKHsgdGhlbWUgfSkgPT4gKHtcclxuICBtYXhXaWR0aDogJzYyMHB4JyxcclxuICBwYWRkaW5nOiAnOHB4JyxcclxuICBtYXJnaW46IDAsXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0c01lbnUgPSAoe1xyXG4gIG9wZW5lZCA9IGZhbHNlLFxyXG4gIGNoaWxkcmVuLFxyXG59OiBQcm9wc1dpdGhDaGlsZHJlbjxQcm9kdWN0c01lbnVQcm9wcz4pID0+IHtcclxuICBjb25zdCBQcm9kdWN0Q29udGFpbmVyID0gdXNlTWF0Y2hNZWRpYShbRmxleENvbHVtbiwgRmxleENvbHVtbiwgRmxleFJvd10sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCYXNlRHJvcGRvd25NZW51IG9wZW5lZD17b3BlbmVkfT5cclxuICAgICAgPFByb2R1Y3RzTWVudVdyYXBwZXI+XHJcbiAgICAgICAgPFByb2R1Y3RDb250YWluZXIgd3JhcD17J3dyYXAnfT57Y2hpbGRyZW59PC9Qcm9kdWN0Q29udGFpbmVyPlxyXG4gICAgICA8L1Byb2R1Y3RzTWVudVdyYXBwZXI+XHJcbiAgICA8L0Jhc2VEcm9wZG93bk1lbnU+XHJcbiAgKTtcclxufTtcclxuIl19