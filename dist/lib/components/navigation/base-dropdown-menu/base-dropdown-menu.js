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
export var BaseDropdownMenu = function (_a) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kcm9wZG93bi1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vYmFzZS1kcm9wZG93bi1tZW51L2Jhc2UtZHJvcGRvd24tbWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFjLEVBQXFCLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTdELE9BQU8sTUFBTSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZDLE9BQU8sT0FBTyxNQUFNLHlCQUF5QixDQUFDO0FBRTlDLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBc0IsVUFBQyxFQUFpQjtRQUFmLEtBQUssV0FBQSxFQUFFLE1BQU0sWUFBQTtJQUFPLE9BQUEsWUFDMUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUNsQyxDQUFDLENBQUMsTUFBTSxJQUFJO1FBQ1gsT0FBTyxFQUFFLE1BQU07S0FDbEIsQ0FBQyxFQUNKO0FBTDRFLENBSzVFLENBQUMsQ0FBQztBQUVKLElBQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQy9DLEtBQUssRUFBRSxhQUFhO1FBQ3BCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7UUFDcEQsTUFBTSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUTtRQUNoQyxTQUFTLEVBQUUsb0JBQWEsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBRTtRQUMvRCxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJO0tBQ3hDLENBQUM7QUFQZ0QsQ0FPaEQsQ0FBQyxDQUFDO0FBRUosTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUcsVUFBQyxFQUlGO1FBSDdCLGNBQWMsRUFBZCxNQUFNLG1CQUFHLEtBQUssS0FBQSxFQUNkLE9BQU8sYUFBQSxFQUNQLFFBQVEsY0FBQTtJQUVGLElBQUEsS0FBc0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFyQyxNQUFNLFFBQUEsRUFBRSxTQUFTLFFBQW9CLENBQUM7SUFFckMsSUFBQSxHQUFHLEdBQUssWUFBWSxDQUFDO1FBQzNCLFFBQVEsRUFBRTtZQUNSLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQixPQUFPLElBQUksT0FBTyxFQUFFLENBQUM7UUFDdkIsQ0FBQztLQUNGLENBQUMsSUFMUyxDQUtSO0lBRUgsU0FBUyxDQUFDO1FBQ1IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFYixPQUFPLENBQ0wsS0FBQyxTQUFTLGFBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxnQkFDakMsS0FBQyxlQUFlLGNBQUUsUUFBUSxHQUFtQixJQUNuQyxDQUNiLENBQUM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcHNXaXRoQ2hpbGRyZW4sIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNsaWNrQXdheSB9IGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2UtY2xpY2stYXdheVwiO1xuaW1wb3J0IHsgTWVudVByb3BzIH0gZnJvbSBcIi4uL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBGbGV4Um93IGZyb20gXCIuLi8uLi9mbGV4LXJvdy9mbGV4LXJvd1wiO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8eyBpc09wZW46IGJvb2xlYW4gfT4oKHsgdGhlbWUsIGlzT3BlbiB9KSA9PiAoe1xuICAgIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4gICAgLi4uKCFpc09wZW4gJiYge1xuICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICB9KSxcbn0pKTtcblxuY29uc3QgQmFzZU1lbnVXcmFwcGVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXG4gICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgIGZpbHRlcjogdGhlbWUuYm94U2hhZG93LmRyb3Bkb3duLFxuICAgIGJvcmRlclRvcDogYDVweCBzb2xpZCAke3RoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWR9YCxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxufSkpO1xuXG5leHBvcnQgY29uc3QgQmFzZURyb3Bkb3duTWVudSA9ICh7XG4gIG9wZW5lZCA9IGZhbHNlLFxuICBvbkNsb3NlLFxuICBjaGlsZHJlbixcbn06IFByb3BzV2l0aENoaWxkcmVuPE1lbnVQcm9wcz4pID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKG9wZW5lZCk7XG5cbiAgY29uc3QgeyByZWYgfSA9IHVzZUNsaWNrQXdheSh7XG4gICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgIHNldElzT3BlbihmYWxzZSk7XG4gICAgICBvbkNsb3NlICYmIG9uQ2xvc2UoKTtcbiAgICB9LFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzT3BlbihvcGVuZWQpO1xuICB9LCBbb3BlbmVkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGlzT3Blbj17aXNPcGVufSByZWY9e3JlZn0+XG4gICAgICA8QmFzZU1lbnVXcmFwcGVyPntjaGlsZHJlbn08L0Jhc2VNZW51V3JhcHBlcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07Il19