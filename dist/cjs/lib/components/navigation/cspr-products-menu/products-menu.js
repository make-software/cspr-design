"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsMenu = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var base_menu_1 = require("../base-menu/base-menu");
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
    return ((0, jsx_runtime_1.jsx)(base_menu_1.BaseMenu, tslib_1.__assign({ opened: opened }, { children: (0, jsx_runtime_1.jsx)(ProductsMenuWrapper, { children: (0, jsx_runtime_1.jsx)(ProductContainer, tslib_1.__assign({ wrap: 'wrap' }, { children: children })) }) })));
};
exports.ProductsMenu = ProductsMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMtbWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2NzcHItcHJvZHVjdHMtbWVudS9wcm9kdWN0cy1tZW51LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLG9EQUFrRDtBQUNsRCxnRkFBdUM7QUFDdkMsNkVBQThDO0FBQzlDLDBEQUF5RDtBQUN6RCxzRkFBdUQ7QUFNdkQsSUFBTSxtQkFBbUIsR0FBRywyQkFBTSxDQUFDLEVBQUUsQ0FFbEMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ2pCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLE9BQU8sRUFBRSxLQUFLO1FBQ2QsTUFBTSxFQUFFLENBQUM7S0FDVixDQUFDO0FBSmdCLENBSWhCLENBQUMsQ0FBQztBQUVHLElBQU0sWUFBWSxHQUFHLFVBQUMsRUFHVTtRQUZyQyxjQUFjLEVBQWQsTUFBTSxtQkFBRyxLQUFLLEtBQUEsRUFDZCxRQUFRLGNBQUE7SUFHUixJQUFNLGdCQUFnQixHQUFHLElBQUEsMkJBQWEsRUFBQyxDQUFDLHFCQUFVLEVBQUUscUJBQVUsRUFBRSxrQkFBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFOUUsT0FBTyxDQUNMLHVCQUFDLG9CQUFRLHFCQUFDLE1BQU0sRUFBRSxNQUFNLGdCQUN0Qix1QkFBQyxtQkFBbUIsY0FDbEIsdUJBQUMsZ0JBQWdCLHFCQUFDLElBQUksRUFBRSxNQUFNLGdCQUFHLFFBQVEsSUFBb0IsR0FDekMsSUFDYixDQUNaLENBQUM7QUFDSixDQUFDLENBQUM7QUFkVyxRQUFBLFlBQVksZ0JBY3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCYXNlTWVudSB9IGZyb20gXCIuLi9iYXNlLW1lbnUvYmFzZS1tZW51XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSBcIi4uLy4uL2ZsZXgtcm93L2ZsZXgtcm93XCI7XG5pbXBvcnQge3VzZU1hdGNoTWVkaWF9IGZyb20gXCIuLi8uLi8uLi91dGlscy9tYXRjaC1tZWRpYVwiO1xuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSBcIi4uLy4uL2ZsZXgtY29sdW1uL2ZsZXgtY29sdW1uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdHNNZW51UHJvcHMge1xuICBvcGVuZWQ/OiBib29sZWFuO1xufVxuXG5jb25zdCBQcm9kdWN0c01lbnVXcmFwcGVyID0gc3R5bGVkLnVsPHtcbiAgY29udGFpbmVyUGFkZGluZz86IHN0cmluZztcbn0+KCh7IHRoZW1lIH0pID0+ICh7XG4gIG1heFdpZHRoOiBcIjYyMHB4XCIsXG4gIHBhZGRpbmc6ICc4cHgnLFxuICBtYXJnaW46IDBcbn0pKTtcblxuZXhwb3J0IGNvbnN0IFByb2R1Y3RzTWVudSA9ICh7XG4gIG9wZW5lZCA9IGZhbHNlLFxuICBjaGlsZHJlbixcbn06IFByb3BzV2l0aENoaWxkcmVuPFByb2R1Y3RzTWVudVByb3BzPikgPT4ge1xuXG4gIGNvbnN0IFByb2R1Y3RDb250YWluZXIgPSB1c2VNYXRjaE1lZGlhKFtGbGV4Q29sdW1uLCBGbGV4Q29sdW1uLCBGbGV4Um93XSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEJhc2VNZW51IG9wZW5lZD17b3BlbmVkfT5cbiAgICAgIDxQcm9kdWN0c01lbnVXcmFwcGVyPlxuICAgICAgICA8UHJvZHVjdENvbnRhaW5lciB3cmFwPXsnd3JhcCd9PntjaGlsZHJlbn08L1Byb2R1Y3RDb250YWluZXI+XG4gICAgICA8L1Byb2R1Y3RzTWVudVdyYXBwZXI+XG4gICAgPC9CYXNlTWVudT5cbiAgKTtcbn07XG4iXX0=