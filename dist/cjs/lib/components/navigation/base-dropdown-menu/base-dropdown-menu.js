"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDropdownMenu = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var use_click_away_1 = require("../../../hooks/use-click-away");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var flex_row_1 = tslib_1.__importDefault(require("../../flex-row/flex-row"));
var Container = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme, isOpen = _a.isOpen;
    return (tslib_1.__assign({ borderRadius: theme.borderRadius.base }, (!isOpen && {
        display: "none",
    })));
});
var BaseMenuWrapper = styled_components_1.default.div(function (_a) {
    var theme = _a.theme;
    return ({
        width: "fit-content",
        height: "auto",
        background: theme.styleguideColors.backgroundPrimary,
        filter: theme.boxShadow.dropdown,
        borderTop: "5px solid ".concat(theme.styleguideColors.fillPrimaryRed),
        borderRadius: theme.borderRadius.base,
    });
});
var BaseDropdownMenu = function (_a) {
    var _b = _a.opened, opened = _b === void 0 ? false : _b, onClose = _a.onClose, children = _a.children;
    var _c = (0, react_1.useState)(opened), isOpen = _c[0], setIsOpen = _c[1];
    var ref = (0, use_click_away_1.useClickAway)({
        callback: function () {
            setIsOpen(false);
            onClose && onClose();
        },
    }).ref;
    (0, react_1.useEffect)(function () {
        setIsOpen(opened);
    }, [opened]);
    return ((0, jsx_runtime_1.jsx)(Container, tslib_1.__assign({ isOpen: isOpen, ref: ref }, { children: (0, jsx_runtime_1.jsx)(BaseMenuWrapper, { children: children }) })));
};
exports.BaseDropdownMenu = BaseDropdownMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kcm9wZG93bi1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vYmFzZS1kcm9wZG93bi1tZW51L2Jhc2UtZHJvcGRvd24tbWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwrQkFBc0U7QUFDdEUsZ0VBQTZEO0FBRTdELGdGQUF1QztBQUN2Qyw2RUFBOEM7QUFFOUMsSUFBTSxTQUFTLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FBc0IsVUFBQyxFQUFpQjtRQUFmLEtBQUssV0FBQSxFQUFFLE1BQU0sWUFBQTtJQUFPLE9BQUEsb0JBQzFFLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksSUFDbEMsQ0FBQyxDQUFDLE1BQU0sSUFBSTtRQUNYLE9BQU8sRUFBRSxNQUFNO0tBQ2xCLENBQUMsRUFDSjtBQUw0RSxDQUs1RSxDQUFDLENBQUM7QUFFSixJQUFNLGVBQWUsR0FBRywyQkFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDL0MsS0FBSyxFQUFFLGFBQWE7UUFDcEIsTUFBTSxFQUFFLE1BQU07UUFDZCxVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtRQUNwRCxNQUFNLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRO1FBQ2hDLFNBQVMsRUFBRSxvQkFBYSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFFO1FBQy9ELFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUk7S0FDeEMsQ0FBQztBQVBnRCxDQU9oRCxDQUFDLENBQUM7QUFFRyxJQUFNLGdCQUFnQixHQUFHLFVBQUMsRUFJRjtRQUg3QixjQUFjLEVBQWQsTUFBTSxtQkFBRyxLQUFLLEtBQUEsRUFDZCxPQUFPLGFBQUEsRUFDUCxRQUFRLGNBQUE7SUFFRixJQUFBLEtBQXNCLElBQUEsZ0JBQVEsRUFBQyxNQUFNLENBQUMsRUFBckMsTUFBTSxRQUFBLEVBQUUsU0FBUyxRQUFvQixDQUFDO0lBRXJDLElBQUEsR0FBRyxHQUFLLElBQUEsNkJBQVksRUFBQztRQUMzQixRQUFRLEVBQUU7WUFDUixTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakIsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3ZCLENBQUM7S0FDRixDQUFDLElBTFMsQ0FLUjtJQUVILElBQUEsaUJBQVMsRUFBQztRQUNSLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQixDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBRWIsT0FBTyxDQUNMLHVCQUFDLFNBQVMscUJBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxnQkFDakMsdUJBQUMsZUFBZSxjQUFFLFFBQVEsR0FBbUIsSUFDbkMsQ0FDYixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBdkJXLFFBQUEsZ0JBQWdCLG9CQXVCM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcHNXaXRoQ2hpbGRyZW4sIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNsaWNrQXdheSB9IGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2UtY2xpY2stYXdheVwiO1xuaW1wb3J0IHsgTWVudVByb3BzIH0gZnJvbSBcIi4uL2Ryb3Bkb3duLW1lbnUvbWVudS9kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSBcIi4uLy4uL2ZsZXgtcm93L2ZsZXgtcm93XCI7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KTx7IGlzT3BlbjogYm9vbGVhbiB9PigoeyB0aGVtZSwgaXNPcGVuIH0pID0+ICh7XG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgICAuLi4oIWlzT3BlbiAmJiB7XG4gICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgIH0pLFxufSkpO1xuXG5jb25zdCBCYXNlTWVudVdyYXBwZXIgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcbiAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgZmlsdGVyOiB0aGVtZS5ib3hTaGFkb3cuZHJvcGRvd24sXG4gICAgYm9yZGVyVG9wOiBgNXB4IHNvbGlkICR7dGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZH1gLFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG59KSk7XG5cbmV4cG9ydCBjb25zdCBCYXNlRHJvcGRvd25NZW51ID0gKHtcbiAgb3BlbmVkID0gZmFsc2UsXG4gIG9uQ2xvc2UsXG4gIGNoaWxkcmVuLFxufTogUHJvcHNXaXRoQ2hpbGRyZW48TWVudVByb3BzPikgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUob3BlbmVkKTtcblxuICBjb25zdCB7IHJlZiB9ID0gdXNlQ2xpY2tBd2F5KHtcbiAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgICAgIG9uQ2xvc2UgJiYgb25DbG9zZSgpO1xuICAgIH0sXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNPcGVuKG9wZW5lZCk7XG4gIH0sIFtvcGVuZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgaXNPcGVuPXtpc09wZW59IHJlZj17cmVmfT5cbiAgICAgIDxCYXNlTWVudVdyYXBwZXI+e2NoaWxkcmVufTwvQmFzZU1lbnVXcmFwcGVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTsiXX0=