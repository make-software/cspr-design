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
    var _b = _a.opened, opened = _b === void 0 ? false : _b, children = _a.children, className = _a.className;
    var ProductContainer = (0, match_media_1.useMatchMedia)([flex_column_1.default, flex_column_1.default, flex_row_1.default], []);
    return ((0, jsx_runtime_1.jsx)(base_dropdown_menu_1.BaseDropdownMenu, tslib_1.__assign({ opened: opened }, { children: (0, jsx_runtime_1.jsx)(ProductsMenuWrapper, tslib_1.__assign({ className: className }, { children: (0, jsx_runtime_1.jsx)(ProductContainer, tslib_1.__assign({ wrap: 'wrap' }, { children: children })) })) })));
};
exports.ProductsMenu = ProductsMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMtbWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2NzcHItcHJvZHVjdHMtbWVudS9wcm9kdWN0cy1tZW51LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLCtFQUE0RTtBQUM1RSxnRkFBdUM7QUFDdkMsNkVBQThDO0FBQzlDLDBEQUEyRDtBQUMzRCxzRkFBdUQ7QUFPdkQsSUFBTSxtQkFBbUIsR0FBRywyQkFBTSxDQUFDLEVBQUUsQ0FFbEMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ2pCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLE9BQU8sRUFBRSxLQUFLO1FBQ2QsTUFBTSxFQUFFLENBQUM7S0FDVixDQUFDO0FBSmdCLENBSWhCLENBQUMsQ0FBQztBQUVHLElBQU0sWUFBWSxHQUFHLFVBQUMsRUFJVTtRQUhyQyxjQUFjLEVBQWQsTUFBTSxtQkFBRyxLQUFLLEtBQUEsRUFDZCxRQUFRLGNBQUEsRUFDUixTQUFTLGVBQUE7SUFFVCxJQUFNLGdCQUFnQixHQUFHLElBQUEsMkJBQWEsRUFBQyxDQUFDLHFCQUFVLEVBQUUscUJBQVUsRUFBRSxrQkFBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFOUUsT0FBTyxDQUNMLHVCQUFDLHFDQUFnQixxQkFBQyxNQUFNLEVBQUUsTUFBTSxnQkFDOUIsdUJBQUMsbUJBQW1CLHFCQUFDLFNBQVMsRUFBRSxTQUFTLGdCQUN2Qyx1QkFBQyxnQkFBZ0IscUJBQUMsSUFBSSxFQUFFLE1BQU0sZ0JBQUcsUUFBUSxJQUFvQixJQUN6QyxJQUNMLENBQ3BCLENBQUM7QUFDSixDQUFDLENBQUM7QUFkVyxRQUFBLFlBQVksZ0JBY3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQmFzZURyb3Bkb3duTWVudSB9IGZyb20gJy4uL2Jhc2UtZHJvcGRvd24tbWVudS9iYXNlLWRyb3Bkb3duLW1lbnUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgRmxleFJvdyBmcm9tICcuLi8uLi9mbGV4LXJvdy9mbGV4LXJvdyc7XG5pbXBvcnQgeyB1c2VNYXRjaE1lZGlhIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbWF0Y2gtbWVkaWEnO1xuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSAnLi4vLi4vZmxleC1jb2x1bW4vZmxleC1jb2x1bW4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RzTWVudVByb3BzIHtcbiAgb3BlbmVkPzogYm9vbGVhbjtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5jb25zdCBQcm9kdWN0c01lbnVXcmFwcGVyID0gc3R5bGVkLnVsPHtcbiAgY29udGFpbmVyUGFkZGluZz86IHN0cmluZztcbn0+KCh7IHRoZW1lIH0pID0+ICh7XG4gIG1heFdpZHRoOiAnNjIwcHgnLFxuICBwYWRkaW5nOiAnOHB4JyxcbiAgbWFyZ2luOiAwLFxufSkpO1xuXG5leHBvcnQgY29uc3QgUHJvZHVjdHNNZW51ID0gKHtcbiAgb3BlbmVkID0gZmFsc2UsXG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG59OiBQcm9wc1dpdGhDaGlsZHJlbjxQcm9kdWN0c01lbnVQcm9wcz4pID0+IHtcbiAgY29uc3QgUHJvZHVjdENvbnRhaW5lciA9IHVzZU1hdGNoTWVkaWEoW0ZsZXhDb2x1bW4sIEZsZXhDb2x1bW4sIEZsZXhSb3ddLCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QmFzZURyb3Bkb3duTWVudSBvcGVuZWQ9e29wZW5lZH0+XG4gICAgICA8UHJvZHVjdHNNZW51V3JhcHBlciBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIDxQcm9kdWN0Q29udGFpbmVyIHdyYXA9eyd3cmFwJ30+e2NoaWxkcmVufTwvUHJvZHVjdENvbnRhaW5lcj5cbiAgICAgIDwvUHJvZHVjdHNNZW51V3JhcHBlcj5cbiAgICA8L0Jhc2VEcm9wZG93bk1lbnU+XG4gICk7XG59O1xuIl19