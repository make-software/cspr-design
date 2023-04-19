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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kcm9wZG93bi1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vYmFzZS1kcm9wZG93bi1tZW51L2Jhc2UtZHJvcGRvd24tbWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwrQkFBc0U7QUFDdEUsZ0VBQTZEO0FBRTdELGdGQUF1QztBQUN2Qyw2RUFBOEM7QUFFOUMsSUFBTSxTQUFTLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FBc0IsVUFBQyxFQUFpQjtRQUFmLEtBQUssV0FBQSxFQUFFLE1BQU0sWUFBQTtJQUFPLE9BQUEsb0JBQzFFLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksSUFDbEMsQ0FBQyxDQUFDLE1BQU0sSUFBSTtRQUNYLE9BQU8sRUFBRSxNQUFNO0tBQ2xCLENBQUMsRUFDSjtBQUw0RSxDQUs1RSxDQUFDLENBQUM7QUFFSixJQUFNLGVBQWUsR0FBRywyQkFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDL0MsS0FBSyxFQUFFLGFBQWE7UUFDcEIsTUFBTSxFQUFFLE1BQU07UUFDZCxVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtRQUNwRCxNQUFNLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRO1FBQ2hDLFNBQVMsRUFBRSxvQkFBYSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFFO1FBQy9ELFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUk7S0FDeEMsQ0FBQztBQVBnRCxDQU9oRCxDQUFDLENBQUM7QUFFRyxJQUFNLGdCQUFnQixHQUFHLFVBQUMsRUFJRjtRQUg3QixjQUFjLEVBQWQsTUFBTSxtQkFBRyxLQUFLLEtBQUEsRUFDZCxPQUFPLGFBQUEsRUFDUCxRQUFRLGNBQUE7SUFFRixJQUFBLEtBQXNCLElBQUEsZ0JBQVEsRUFBQyxNQUFNLENBQUMsRUFBckMsTUFBTSxRQUFBLEVBQUUsU0FBUyxRQUFvQixDQUFDO0lBRXJDLElBQUEsR0FBRyxHQUFLLElBQUEsNkJBQVksRUFBQztRQUMzQixRQUFRLEVBQUU7WUFDUixTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakIsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3ZCLENBQUM7S0FDRixDQUFDLElBTFMsQ0FLUjtJQUVILElBQUEsaUJBQVMsRUFBQztRQUNSLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQixDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBRWIsT0FBTyxDQUNMLHVCQUFDLFNBQVMscUJBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxnQkFDakMsdUJBQUMsZUFBZSxjQUFFLFFBQVEsR0FBbUIsSUFDbkMsQ0FDYixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBdkJXLFFBQUEsZ0JBQWdCLG9CQXVCM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcHNXaXRoQ2hpbGRyZW4sIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNsaWNrQXdheSB9IGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2UtY2xpY2stYXdheVwiO1xuaW1wb3J0IHsgTWVudVByb3BzIH0gZnJvbSBcIi4uL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBGbGV4Um93IGZyb20gXCIuLi8uLi9mbGV4LXJvdy9mbGV4LXJvd1wiO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8eyBpc09wZW46IGJvb2xlYW4gfT4oKHsgdGhlbWUsIGlzT3BlbiB9KSA9PiAoe1xuICAgIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4gICAgLi4uKCFpc09wZW4gJiYge1xuICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICB9KSxcbn0pKTtcblxuY29uc3QgQmFzZU1lbnVXcmFwcGVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXG4gICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgIGZpbHRlcjogdGhlbWUuYm94U2hhZG93LmRyb3Bkb3duLFxuICAgIGJvcmRlclRvcDogYDVweCBzb2xpZCAke3RoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWR9YCxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxufSkpO1xuXG5leHBvcnQgY29uc3QgQmFzZURyb3Bkb3duTWVudSA9ICh7XG4gIG9wZW5lZCA9IGZhbHNlLFxuICBvbkNsb3NlLFxuICBjaGlsZHJlbixcbn06IFByb3BzV2l0aENoaWxkcmVuPE1lbnVQcm9wcz4pID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKG9wZW5lZCk7XG5cbiAgY29uc3QgeyByZWYgfSA9IHVzZUNsaWNrQXdheSh7XG4gICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgIHNldElzT3BlbihmYWxzZSk7XG4gICAgICBvbkNsb3NlICYmIG9uQ2xvc2UoKTtcbiAgICB9LFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzT3BlbihvcGVuZWQpO1xuICB9LCBbb3BlbmVkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGlzT3Blbj17aXNPcGVufSByZWY9e3JlZn0+XG4gICAgICA8QmFzZU1lbnVXcmFwcGVyPntjaGlsZHJlbn08L0Jhc2VNZW51V3JhcHBlcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07Il19