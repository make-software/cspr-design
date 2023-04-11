import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useClickAway } from "../../../hooks/use-click-away";
import styled from "styled-components";
import FlexRow from "../../flex-row/flex-row";
var Container = styled(FlexRow)(function (_a) {
    var theme = _a.theme, isOpen = _a.isOpen;
    return (__assign({ borderRadius: theme.borderRadius.base }, (!isOpen && {
        display: "none",
    })));
});
var BaseMenuWrapper = styled.div(function (_a) {
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
export var BaseMenu = function (_a) {
    var _b = _a.opened, opened = _b === void 0 ? false : _b, onClose = _a.onClose, children = _a.children;
    var _c = useState(opened), isOpen = _c[0], setIsOpen = _c[1];
    var ref = useClickAway({
        callback: function () {
            setIsOpen(false);
            onClose && onClose();
        },
    }).ref;
    useEffect(function () {
        setIsOpen(opened);
    }, [opened]);
    return (_jsx(Container, __assign({ isOpen: isOpen, ref: ref }, { children: _jsx(BaseMenuWrapper, { children: children }) })));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vYmFzZS1tZW51L2Jhc2UtbWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFjLEVBQXFCLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTdELE9BQU8sTUFBTSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZDLE9BQU8sT0FBTyxNQUFNLHlCQUF5QixDQUFDO0FBRTlDLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBc0IsVUFBQyxFQUFpQjtRQUFmLEtBQUssV0FBQSxFQUFFLE1BQU0sWUFBQTtJQUFPLE9BQUEsWUFDMUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUNsQyxDQUFDLENBQUMsTUFBTSxJQUFJO1FBQ1gsT0FBTyxFQUFFLE1BQU07S0FDbEIsQ0FBQyxFQUNKO0FBTDRFLENBSzVFLENBQUMsQ0FBQztBQUVKLElBQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQy9DLEtBQUssRUFBRSxhQUFhO1FBQ3BCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7UUFDcEQsTUFBTSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUTtRQUNoQyxTQUFTLEVBQUUsb0JBQWEsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBRTtRQUMvRCxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJO0tBQ3hDLENBQUM7QUFQZ0QsQ0FPaEQsQ0FBQyxDQUFDO0FBRUosTUFBTSxDQUFDLElBQU0sUUFBUSxHQUFHLFVBQUMsRUFJTTtRQUg3QixjQUFjLEVBQWQsTUFBTSxtQkFBRyxLQUFLLEtBQUEsRUFDZCxPQUFPLGFBQUEsRUFDUCxRQUFRLGNBQUE7SUFFRixJQUFBLEtBQXNCLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBckMsTUFBTSxRQUFBLEVBQUUsU0FBUyxRQUFvQixDQUFDO0lBRXJDLElBQUEsR0FBRyxHQUFLLFlBQVksQ0FBQztRQUMzQixRQUFRLEVBQUU7WUFDUixTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakIsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3ZCLENBQUM7S0FDRixDQUFDLElBTFMsQ0FLUjtJQUVILFNBQVMsQ0FBQztRQUNSLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQixDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBRWIsT0FBTyxDQUNMLEtBQUMsU0FBUyxhQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsZ0JBQ2pDLEtBQUMsZUFBZSxjQUFFLFFBQVEsR0FBbUIsSUFDbkMsQ0FDYixDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDbGlja0F3YXkgfSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlLWNsaWNrLWF3YXlcIjtcbmltcG9ydCB7IE1lbnVQcm9wcyB9IGZyb20gXCIuLi9kcm9wZG93bi1tZW51L21lbnUvbWVudVwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBGbGV4Um93IGZyb20gXCIuLi8uLi9mbGV4LXJvdy9mbGV4LXJvd1wiO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8eyBpc09wZW46IGJvb2xlYW4gfT4oKHsgdGhlbWUsIGlzT3BlbiB9KSA9PiAoe1xuICAgIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4gICAgLi4uKCFpc09wZW4gJiYge1xuICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICB9KSxcbn0pKTtcblxuY29uc3QgQmFzZU1lbnVXcmFwcGVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXG4gICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgIGZpbHRlcjogdGhlbWUuYm94U2hhZG93LmRyb3Bkb3duLFxuICAgIGJvcmRlclRvcDogYDVweCBzb2xpZCAke3RoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWR9YCxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxufSkpO1xuXG5leHBvcnQgY29uc3QgQmFzZU1lbnUgPSAoe1xuICBvcGVuZWQgPSBmYWxzZSxcbiAgb25DbG9zZSxcbiAgY2hpbGRyZW4sXG59OiBQcm9wc1dpdGhDaGlsZHJlbjxNZW51UHJvcHM+KSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShvcGVuZWQpO1xuXG4gIGNvbnN0IHsgcmVmIH0gPSB1c2VDbGlja0F3YXkoe1xuICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICBzZXRJc09wZW4oZmFsc2UpO1xuICAgICAgb25DbG9zZSAmJiBvbkNsb3NlKCk7XG4gICAgfSxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc09wZW4ob3BlbmVkKTtcbiAgfSwgW29wZW5lZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBpc09wZW49e2lzT3Blbn0gcmVmPXtyZWZ9PlxuICAgICAgPEJhc2VNZW51V3JhcHBlcj57Y2hpbGRyZW59PC9CYXNlTWVudVdyYXBwZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59OyJdfQ==