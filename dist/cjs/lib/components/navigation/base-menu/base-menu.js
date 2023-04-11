"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseMenu = void 0;
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
var BaseMenu = function (_a) {
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
exports.BaseMenu = BaseMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vYmFzZS1tZW51L2Jhc2UtbWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwrQkFBc0U7QUFDdEUsZ0VBQTZEO0FBRTdELGdGQUF1QztBQUN2Qyw2RUFBOEM7QUFFOUMsSUFBTSxTQUFTLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FBc0IsVUFBQyxFQUFpQjtRQUFmLEtBQUssV0FBQSxFQUFFLE1BQU0sWUFBQTtJQUFPLE9BQUEsb0JBQzFFLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksSUFDbEMsQ0FBQyxDQUFDLE1BQU0sSUFBSTtRQUNYLE9BQU8sRUFBRSxNQUFNO0tBQ2xCLENBQUMsRUFDSjtBQUw0RSxDQUs1RSxDQUFDLENBQUM7QUFFSixJQUFNLGVBQWUsR0FBRywyQkFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDL0MsS0FBSyxFQUFFLGFBQWE7UUFDcEIsTUFBTSxFQUFFLE1BQU07UUFDZCxVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtRQUNwRCxNQUFNLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRO1FBQ2hDLFNBQVMsRUFBRSxvQkFBYSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFFO1FBQy9ELFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUk7S0FDeEMsQ0FBQztBQVBnRCxDQU9oRCxDQUFDLENBQUM7QUFFRyxJQUFNLFFBQVEsR0FBRyxVQUFDLEVBSU07UUFIN0IsY0FBYyxFQUFkLE1BQU0sbUJBQUcsS0FBSyxLQUFBLEVBQ2QsT0FBTyxhQUFBLEVBQ1AsUUFBUSxjQUFBO0lBRUYsSUFBQSxLQUFzQixJQUFBLGdCQUFRLEVBQUMsTUFBTSxDQUFDLEVBQXJDLE1BQU0sUUFBQSxFQUFFLFNBQVMsUUFBb0IsQ0FBQztJQUVyQyxJQUFBLEdBQUcsR0FBSyxJQUFBLDZCQUFZLEVBQUM7UUFDM0IsUUFBUSxFQUFFO1lBQ1IsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pCLE9BQU8sSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN2QixDQUFDO0tBQ0YsQ0FBQyxJQUxTLENBS1I7SUFFSCxJQUFBLGlCQUFTLEVBQUM7UUFDUixTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEIsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUViLE9BQU8sQ0FDTCx1QkFBQyxTQUFTLHFCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsZ0JBQ2pDLHVCQUFDLGVBQWUsY0FBRSxRQUFRLEdBQW1CLElBQ25DLENBQ2IsQ0FBQztBQUNKLENBQUMsQ0FBQztBQXZCVyxRQUFBLFFBQVEsWUF1Qm5CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDbGlja0F3YXkgfSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlLWNsaWNrLWF3YXlcIjtcbmltcG9ydCB7IE1lbnVQcm9wcyB9IGZyb20gXCIuLi9kcm9wZG93bi1tZW51L21lbnUvbWVudVwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBGbGV4Um93IGZyb20gXCIuLi8uLi9mbGV4LXJvdy9mbGV4LXJvd1wiO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8eyBpc09wZW46IGJvb2xlYW4gfT4oKHsgdGhlbWUsIGlzT3BlbiB9KSA9PiAoe1xuICAgIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4gICAgLi4uKCFpc09wZW4gJiYge1xuICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICB9KSxcbn0pKTtcblxuY29uc3QgQmFzZU1lbnVXcmFwcGVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXG4gICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgIGZpbHRlcjogdGhlbWUuYm94U2hhZG93LmRyb3Bkb3duLFxuICAgIGJvcmRlclRvcDogYDVweCBzb2xpZCAke3RoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWR9YCxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxufSkpO1xuXG5leHBvcnQgY29uc3QgQmFzZU1lbnUgPSAoe1xuICBvcGVuZWQgPSBmYWxzZSxcbiAgb25DbG9zZSxcbiAgY2hpbGRyZW4sXG59OiBQcm9wc1dpdGhDaGlsZHJlbjxNZW51UHJvcHM+KSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShvcGVuZWQpO1xuXG4gIGNvbnN0IHsgcmVmIH0gPSB1c2VDbGlja0F3YXkoe1xuICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICBzZXRJc09wZW4oZmFsc2UpO1xuICAgICAgb25DbG9zZSAmJiBvbkNsb3NlKCk7XG4gICAgfSxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc09wZW4ob3BlbmVkKTtcbiAgfSwgW29wZW5lZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBpc09wZW49e2lzT3Blbn0gcmVmPXtyZWZ9PlxuICAgICAgPEJhc2VNZW51V3JhcHBlcj57Y2hpbGRyZW59PC9CYXNlTWVudVdyYXBwZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59OyJdfQ==