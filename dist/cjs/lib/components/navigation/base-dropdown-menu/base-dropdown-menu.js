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
        display: 'none',
    })));
});
var BaseMenuWrapper = styled_components_1.default.div(function (_a) {
    var theme = _a.theme;
    return ({
        width: 'fit-content',
        height: 'auto',
        background: theme.styleguideColors.backgroundPrimary,
        filter: theme.boxShadow.dropdown,
        borderTop: "5px solid ".concat(theme.styleguideColors.fillPrimaryRed),
        borderRadius: theme.borderRadius.base,
    });
});
var BaseDropdownMenu = function (_a) {
    var _b = _a.opened, opened = _b === void 0 ? false : _b, onClose = _a.onClose, children = _a.children, className = _a.className;
    var _c = (0, react_1.useState)(opened), isOpen = _c[0], setIsOpen = _c[1];
    (0, react_1.useEffect)(function () {
        setIsOpen(opened);
    }, [opened]);
    var ref = (0, use_click_away_1.useClickAway)({
        callback: function () {
            setIsOpen(false);
            onClose && onClose();
        },
    }).ref;
    return ((0, jsx_runtime_1.jsx)(Container, tslib_1.__assign({ isOpen: isOpen, ref: ref, className: className }, { children: (0, jsx_runtime_1.jsx)(BaseMenuWrapper, { children: children }) })));
};
exports.BaseDropdownMenu = BaseDropdownMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kcm9wZG93bi1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vYmFzZS1kcm9wZG93bi1tZW51L2Jhc2UtZHJvcGRvd24tbWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwrQkFBc0U7QUFDdEUsZ0VBQTZEO0FBRTdELGdGQUF1QztBQUN2Qyw2RUFBOEM7QUFFOUMsSUFBTSxTQUFTLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FBc0IsVUFBQyxFQUFpQjtRQUFmLEtBQUssV0FBQSxFQUFFLE1BQU0sWUFBQTtJQUFPLE9BQUEsb0JBQzVFLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksSUFDbEMsQ0FBQyxDQUFDLE1BQU0sSUFBSTtRQUNiLE9BQU8sRUFBRSxNQUFNO0tBQ2hCLENBQUMsRUFDRjtBQUw0RSxDQUs1RSxDQUFDLENBQUM7QUFFSixJQUFNLGVBQWUsR0FBRywyQkFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDakQsS0FBSyxFQUFFLGFBQWE7UUFDcEIsTUFBTSxFQUFFLE1BQU07UUFDZCxVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtRQUNwRCxNQUFNLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRO1FBQ2hDLFNBQVMsRUFBRSxvQkFBYSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFFO1FBQy9ELFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUk7S0FDdEMsQ0FBQztBQVBnRCxDQU9oRCxDQUFDLENBQUM7QUFFRyxJQUFNLGdCQUFnQixHQUFHLFVBQUMsRUFLRjtRQUo3QixjQUFjLEVBQWQsTUFBTSxtQkFBRyxLQUFLLEtBQUEsRUFDZCxPQUFPLGFBQUEsRUFDUCxRQUFRLGNBQUEsRUFDUixTQUFTLGVBQUE7SUFFSCxJQUFBLEtBQXNCLElBQUEsZ0JBQVEsRUFBQyxNQUFNLENBQUMsRUFBckMsTUFBTSxRQUFBLEVBQUUsU0FBUyxRQUFvQixDQUFDO0lBRTdDLElBQUEsaUJBQVMsRUFBQztRQUNSLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQixDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBRUwsSUFBQSxHQUFHLEdBQUssSUFBQSw2QkFBWSxFQUFDO1FBQzNCLFFBQVEsRUFBRTtZQUNSLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQixPQUFPLElBQUksT0FBTyxFQUFFLENBQUM7UUFDdkIsQ0FBQztLQUNGLENBQUMsSUFMUyxDQUtSO0lBRUgsT0FBTyxDQUNMLHVCQUFDLFNBQVMscUJBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLGdCQUN2RCx1QkFBQyxlQUFlLGNBQUUsUUFBUSxHQUFtQixJQUNuQyxDQUNiLENBQUM7QUFDSixDQUFDLENBQUM7QUF4QlcsUUFBQSxnQkFBZ0Isb0JBd0IzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNsaWNrQXdheSB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZS1jbGljay1hd2F5JztcbmltcG9ydCB7IE1lbnVQcm9wcyB9IGZyb20gJy4uL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uLy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEZsZXhSb3cpPHsgaXNPcGVuOiBib29sZWFuIH0+KCh7IHRoZW1lLCBpc09wZW4gfSkgPT4gKHtcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgLi4uKCFpc09wZW4gJiYge1xuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgfSksXG59KSk7XG5cbmNvbnN0IEJhc2VNZW51V3JhcHBlciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcbiAgd2lkdGg6ICdmaXQtY29udGVudCcsXG4gIGhlaWdodDogJ2F1dG8nLFxuICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICBmaWx0ZXI6IHRoZW1lLmJveFNoYWRvdy5kcm9wZG93bixcbiAgYm9yZGVyVG9wOiBgNXB4IHNvbGlkICR7dGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZH1gLFxuICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxufSkpO1xuXG5leHBvcnQgY29uc3QgQmFzZURyb3Bkb3duTWVudSA9ICh7XG4gIG9wZW5lZCA9IGZhbHNlLFxuICBvbkNsb3NlLFxuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxufTogUHJvcHNXaXRoQ2hpbGRyZW48TWVudVByb3BzPikgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUob3BlbmVkKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzT3BlbihvcGVuZWQpO1xuICB9LCBbb3BlbmVkXSk7XG5cbiAgY29uc3QgeyByZWYgfSA9IHVzZUNsaWNrQXdheSh7XG4gICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgIHNldElzT3BlbihmYWxzZSk7XG4gICAgICBvbkNsb3NlICYmIG9uQ2xvc2UoKTtcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgaXNPcGVuPXtpc09wZW59IHJlZj17cmVmfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8QmFzZU1lbnVXcmFwcGVyPntjaGlsZHJlbn08L0Jhc2VNZW51V3JhcHBlcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG4iXX0=