"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDropdownMenu = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
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
    var _b = _a.opened, opened = _b === void 0 ? false : _b, onClose = _a.onClose, children = _a.children;
    var _c = (0, react_1.useState)(opened), isOpen = _c[0], setIsOpen = _c[1];
    (0, react_1.useEffect)(function () {
        setIsOpen(opened);
    }, [opened]);
    // const { ref } = useClickAway({
    //   callback: () => {
    //     setIsOpen(false);
    //     onClose && onClose();
    //   },
    // });
    return (
    // <Container isOpen={isOpen} ref={ref}>
    (0, jsx_runtime_1.jsx)(Container, tslib_1.__assign({ isOpen: isOpen }, { children: (0, jsx_runtime_1.jsx)(BaseMenuWrapper, { children: children }) })));
};
exports.BaseDropdownMenu = BaseDropdownMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kcm9wZG93bi1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vYmFzZS1kcm9wZG93bi1tZW51L2Jhc2UtZHJvcGRvd24tbWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwrQkFBc0U7QUFHdEUsZ0ZBQXVDO0FBQ3ZDLDZFQUE4QztBQUU5QyxJQUFNLFNBQVMsR0FBRyxJQUFBLDJCQUFNLEVBQUMsa0JBQU8sQ0FBQyxDQUFzQixVQUFDLEVBQWlCO1FBQWYsS0FBSyxXQUFBLEVBQUUsTUFBTSxZQUFBO0lBQU8sT0FBQSxvQkFDNUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUNsQyxDQUFDLENBQUMsTUFBTSxJQUFJO1FBQ2IsT0FBTyxFQUFFLE1BQU07S0FDaEIsQ0FBQyxFQUNGO0FBTDRFLENBSzVFLENBQUMsQ0FBQztBQUVKLElBQU0sZUFBZSxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUNqRCxLQUFLLEVBQUUsYUFBYTtRQUNwQixNQUFNLEVBQUUsTUFBTTtRQUNkLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO1FBQ3BELE1BQU0sRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVE7UUFDaEMsU0FBUyxFQUFFLG9CQUFhLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUU7UUFDL0QsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSTtLQUN0QyxDQUFDO0FBUGdELENBT2hELENBQUMsQ0FBQztBQUVHLElBQU0sZ0JBQWdCLEdBQUcsVUFBQyxFQUlGO1FBSDdCLGNBQWMsRUFBZCxNQUFNLG1CQUFHLEtBQUssS0FBQSxFQUNkLE9BQU8sYUFBQSxFQUNQLFFBQVEsY0FBQTtJQUVGLElBQUEsS0FBc0IsSUFBQSxnQkFBUSxFQUFDLE1BQU0sQ0FBQyxFQUFyQyxNQUFNLFFBQUEsRUFBRSxTQUFTLFFBQW9CLENBQUM7SUFFN0MsSUFBQSxpQkFBUyxFQUFDO1FBQ1IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFYixpQ0FBaUM7SUFDakMsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsT0FBTztJQUNQLE1BQU07SUFFTixPQUFPO0lBQ0wsd0NBQXdDO0lBQ3hDLHVCQUFDLFNBQVMscUJBQUMsTUFBTSxFQUFFLE1BQU0sZ0JBQ3ZCLHVCQUFDLGVBQWUsY0FBRSxRQUFRLEdBQW1CLElBQ25DLENBQ2IsQ0FBQztBQUNKLENBQUMsQ0FBQztBQXhCVyxRQUFBLGdCQUFnQixvQkF3QjNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ2xpY2tBd2F5IH0gZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlLWNsaWNrLWF3YXknO1xuaW1wb3J0IHsgTWVudVByb3BzIH0gZnJvbSAnLi4vZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8eyBpc09wZW46IGJvb2xlYW4gfT4oKHsgdGhlbWUsIGlzT3BlbiB9KSA9PiAoe1xuICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICAuLi4oIWlzT3BlbiAmJiB7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICB9KSxcbn0pKTtcblxuY29uc3QgQmFzZU1lbnVXcmFwcGVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICB3aWR0aDogJ2ZpdC1jb250ZW50JyxcbiAgaGVpZ2h0OiAnYXV0bycsXG4gIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gIGZpbHRlcjogdGhlbWUuYm94U2hhZG93LmRyb3Bkb3duLFxuICBib3JkZXJUb3A6IGA1cHggc29saWQgJHt0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5UmVkfWAsXG4gIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG59KSk7XG5cbmV4cG9ydCBjb25zdCBCYXNlRHJvcGRvd25NZW51ID0gKHtcbiAgb3BlbmVkID0gZmFsc2UsXG4gIG9uQ2xvc2UsXG4gIGNoaWxkcmVuLFxufTogUHJvcHNXaXRoQ2hpbGRyZW48TWVudVByb3BzPikgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUob3BlbmVkKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzT3BlbihvcGVuZWQpO1xuICB9LCBbb3BlbmVkXSk7XG5cbiAgLy8gY29uc3QgeyByZWYgfSA9IHVzZUNsaWNrQXdheSh7XG4gIC8vICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgLy8gICAgIHNldElzT3BlbihmYWxzZSk7XG4gIC8vICAgICBvbkNsb3NlICYmIG9uQ2xvc2UoKTtcbiAgLy8gICB9LFxuICAvLyB9KTtcblxuICByZXR1cm4gKFxuICAgIC8vIDxDb250YWluZXIgaXNPcGVuPXtpc09wZW59IHJlZj17cmVmfT5cbiAgICA8Q29udGFpbmVyIGlzT3Blbj17aXNPcGVufT5cbiAgICAgIDxCYXNlTWVudVdyYXBwZXI+e2NoaWxkcmVufTwvQmFzZU1lbnVXcmFwcGVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcbiJdfQ==