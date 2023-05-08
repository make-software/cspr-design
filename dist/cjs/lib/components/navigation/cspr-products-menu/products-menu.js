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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMtbWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2NzcHItcHJvZHVjdHMtbWVudS9wcm9kdWN0cy1tZW51LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLCtFQUE0RTtBQUM1RSxnRkFBdUM7QUFDdkMsNkVBQThDO0FBQzlDLDBEQUEyRDtBQUMzRCxzRkFBdUQ7QUFNdkQsSUFBTSxtQkFBbUIsR0FBRywyQkFBTSxDQUFDLEVBQUUsQ0FFbEMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ2pCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLE9BQU8sRUFBRSxLQUFLO1FBQ2QsTUFBTSxFQUFFLENBQUM7S0FDVixDQUFDO0FBSmdCLENBSWhCLENBQUMsQ0FBQztBQUVHLElBQU0sWUFBWSxHQUFHLFVBQUMsRUFHVTtRQUZyQyxjQUFjLEVBQWQsTUFBTSxtQkFBRyxLQUFLLEtBQUEsRUFDZCxRQUFRLGNBQUE7SUFFUixJQUFNLGdCQUFnQixHQUFHLElBQUEsMkJBQWEsRUFBQyxDQUFDLHFCQUFVLEVBQUUscUJBQVUsRUFBRSxrQkFBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFOUUsT0FBTyxDQUNMLHVCQUFDLHFDQUFnQixxQkFBQyxNQUFNLEVBQUUsTUFBTSxnQkFDOUIsdUJBQUMsbUJBQW1CLGNBQ2xCLHVCQUFDLGdCQUFnQixxQkFBQyxJQUFJLEVBQUUsTUFBTSxnQkFBRyxRQUFRLElBQW9CLEdBQ3pDLElBQ0wsQ0FDcEIsQ0FBQztBQUNKLENBQUMsQ0FBQztBQWJXLFFBQUEsWUFBWSxnQkFhdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCYXNlRHJvcGRvd25NZW51IH0gZnJvbSAnLi4vYmFzZS1kcm9wZG93bi1tZW51L2Jhc2UtZHJvcGRvd24tbWVudSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uLy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCB7IHVzZU1hdGNoTWVkaWEgfSBmcm9tICcuLi8uLi8uLi91dGlscy9tYXRjaC1tZWRpYSc7XG5pbXBvcnQgRmxleENvbHVtbiBmcm9tICcuLi8uLi9mbGV4LWNvbHVtbi9mbGV4LWNvbHVtbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdHNNZW51UHJvcHMge1xuICBvcGVuZWQ/OiBib29sZWFuO1xufVxuXG5jb25zdCBQcm9kdWN0c01lbnVXcmFwcGVyID0gc3R5bGVkLnVsPHtcbiAgY29udGFpbmVyUGFkZGluZz86IHN0cmluZztcbn0+KCh7IHRoZW1lIH0pID0+ICh7XG4gIG1heFdpZHRoOiAnNjIwcHgnLFxuICBwYWRkaW5nOiAnOHB4JyxcbiAgbWFyZ2luOiAwLFxufSkpO1xuXG5leHBvcnQgY29uc3QgUHJvZHVjdHNNZW51ID0gKHtcbiAgb3BlbmVkID0gZmFsc2UsXG4gIGNoaWxkcmVuLFxufTogUHJvcHNXaXRoQ2hpbGRyZW48UHJvZHVjdHNNZW51UHJvcHM+KSA9PiB7XG4gIGNvbnN0IFByb2R1Y3RDb250YWluZXIgPSB1c2VNYXRjaE1lZGlhKFtGbGV4Q29sdW1uLCBGbGV4Q29sdW1uLCBGbGV4Um93XSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEJhc2VEcm9wZG93bk1lbnUgb3BlbmVkPXtvcGVuZWR9PlxuICAgICAgPFByb2R1Y3RzTWVudVdyYXBwZXI+XG4gICAgICAgIDxQcm9kdWN0Q29udGFpbmVyIHdyYXA9eyd3cmFwJ30+e2NoaWxkcmVufTwvUHJvZHVjdENvbnRhaW5lcj5cbiAgICAgIDwvUHJvZHVjdHNNZW51V3JhcHBlcj5cbiAgICA8L0Jhc2VEcm9wZG93bk1lbnU+XG4gICk7XG59O1xuIl19