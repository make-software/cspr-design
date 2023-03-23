import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useClickAway } from "../../../../hooks/use-click-away";
import styled from "styled-components";
import FlexRow from "../../../flex-row/flex-row";
var Container = styled(FlexRow)(function (_a) {
    var theme = _a.theme, isOpen = _a.isOpen;
    return (__assign({ borderRadius: theme.borderRadius.base }, (!isOpen && {
        display: "none",
    })));
});
// const ItemsContainer = styled.div<{ isOpen: boolean }>(({ theme, isOpen }) => ({
//   display: isOpen ? "inherit" : "none",
//   marginTop: 4,
//   borderRadius: theme.borderRadius.base,
//   background: theme.styleguideColors.fillSecondary,
// }));
var BaseMenuWrapper = styled.ul(function (_a) {
    var theme = _a.theme, containerPadding = _a.containerPadding;
    return ({
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
        height: "auto",
        padding: "16px 0",
        background: theme.styleguideColors.backgroundPrimary,
        filter: theme.boxShadow.dropdown,
        borderTop: "5px solid ".concat(theme.styleguideColors.fillPrimaryRed),
        borderRadius: theme.borderRadius.base,
    });
});
var BaseMenu = function (_a) {
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
export var Menu = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return _jsx(BaseMenu, __assign({}, rest, { children: children }));
};
export default Menu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2Ryb3Bkb3duLW1lbnUvbWVudS9tZW51LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQWMsRUFBRSxRQUFRLEVBQXFCLFNBQVMsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDaEUsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFDdkMsT0FBTyxPQUFPLE1BQU0sNEJBQTRCLENBQUM7QUFFakQsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFzQixVQUFDLEVBQWlCO1FBQWYsS0FBSyxXQUFBLEVBQUUsTUFBTSxZQUFBO0lBQU8sT0FBQSxZQUM1RSxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLElBV2xDLENBQUMsQ0FBQyxNQUFNLElBQUk7UUFDYixPQUFPLEVBQUUsTUFBTTtLQUNoQixDQUFDLEVBQ0Y7QUFmNEUsQ0FlNUUsQ0FBQyxDQUFDO0FBRUosbUZBQW1GO0FBQ25GLDBDQUEwQztBQUMxQyxrQkFBa0I7QUFDbEIsMkNBQTJDO0FBQzNDLHNEQUFzRDtBQUN0RCxPQUFPO0FBRVAsSUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FFOUIsVUFBQyxFQUEyQjtRQUF6QixLQUFLLFdBQUEsRUFBRSxnQkFBZ0Isc0JBQUE7SUFBTyxPQUFBLENBQUM7UUFDbkMsT0FBTyxFQUFFLE1BQU07UUFDZixhQUFhLEVBQUUsUUFBUTtRQUN2QixLQUFLLEVBQUUsYUFBYTtRQUNwQixNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO1FBQ3BELE1BQU0sRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVE7UUFDaEMsU0FBUyxFQUFFLG9CQUFhLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUU7UUFDL0QsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSTtLQUN0QyxDQUFDO0FBVmtDLENBVWxDLENBQUMsQ0FBQztBQU9KLElBQU0sUUFBUSxHQUFHLFVBQUMsRUFJYTtRQUg3QixjQUFjLEVBQWQsTUFBTSxtQkFBRyxLQUFLLEtBQUEsRUFDZCxPQUFPLGFBQUEsRUFDUCxRQUFRLGNBQUE7SUFFRixJQUFBLEtBQXNCLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBckMsTUFBTSxRQUFBLEVBQUUsU0FBUyxRQUFvQixDQUFDO0lBRXJDLElBQUEsR0FBRyxHQUFLLFlBQVksQ0FBQztRQUMzQixRQUFRLEVBQUU7WUFDUixTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakIsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3ZCLENBQUM7S0FDRixDQUFDLElBTFMsQ0FLUjtJQUVILFNBQVMsQ0FBQztRQUNSLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQixDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBRWIsT0FBTyxDQUNMLEtBQUMsU0FBUyxhQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsZ0JBQ2pDLEtBQUMsZUFBZSxjQUFFLFFBQVEsR0FBbUIsSUFDbkMsQ0FDYixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0sSUFBSSxHQUFHLFVBQUMsRUFBbUQ7SUFBakQsSUFBQSxRQUFRLGNBQUEsRUFBSyxJQUFJLGNBQW5CLFlBQXFCLENBQUY7SUFDdEMsT0FBTyxLQUFDLFFBQVEsZUFBSyxJQUFJLGNBQUcsUUFBUSxJQUFZLENBQUM7QUFDbkQsQ0FBQyxDQUFDO0FBRUYsZUFBZSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIFByb3BzV2l0aENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNsaWNrQXdheSB9IGZyb20gXCIuLi8uLi8uLi8uLi9ob29rcy91c2UtY2xpY2stYXdheVwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBGbGV4Um93IGZyb20gXCIuLi8uLi8uLi9mbGV4LXJvdy9mbGV4LXJvd1wiO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8eyBpc09wZW46IGJvb2xlYW4gfT4oKHsgdGhlbWUsIGlzT3BlbiB9KSA9PiAoe1xuICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICAvLyBib3JkZXI6IFwibm9uZVwiLFxuICAvLyBoZWlnaHQ6IDM2LFxuICAvLyBwYWRkaW5nOiBcIjAgMTZweFwiLFxuICAvLyBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gIC8vIFwiOmhvdmVyLCA6YWN0aXZlXCI6IHtcbiAgLy8gICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gIC8vICAgc3ZnOiB7XG4gIC8vICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcbiAgLy8gICB9LFxuICAvLyB9LFxuICAuLi4oIWlzT3BlbiAmJiB7XG4gICAgZGlzcGxheTogXCJub25lXCIsXG4gIH0pLFxufSkpO1xuXG4vLyBjb25zdCBJdGVtc0NvbnRhaW5lciA9IHN0eWxlZC5kaXY8eyBpc09wZW46IGJvb2xlYW4gfT4oKHsgdGhlbWUsIGlzT3BlbiB9KSA9PiAoe1xuLy8gICBkaXNwbGF5OiBpc09wZW4gPyBcImluaGVyaXRcIiA6IFwibm9uZVwiLFxuLy8gICBtYXJnaW5Ub3A6IDQsXG4vLyAgIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4vLyAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcbi8vIH0pKTtcblxuY29uc3QgQmFzZU1lbnVXcmFwcGVyID0gc3R5bGVkLnVsPHtcbiAgY29udGFpbmVyUGFkZGluZz86IHN0cmluZztcbn0+KCh7IHRoZW1lLCBjb250YWluZXJQYWRkaW5nIH0pID0+ICh7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxuICBoZWlnaHQ6IFwiYXV0b1wiLFxuICBwYWRkaW5nOiBcIjE2cHggMFwiLFxuICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICBmaWx0ZXI6IHRoZW1lLmJveFNoYWRvdy5kcm9wZG93bixcbiAgYm9yZGVyVG9wOiBgNXB4IHNvbGlkICR7dGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZH1gLFxuICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxufSkpO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lbnVQcm9wcyB7XG4gIG9wZW5lZD86IGJvb2xlYW47XG4gIG9uQ2xvc2U/OiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBCYXNlTWVudSA9ICh7XG4gIG9wZW5lZCA9IGZhbHNlLFxuICBvbkNsb3NlLFxuICBjaGlsZHJlbixcbn06IFByb3BzV2l0aENoaWxkcmVuPE1lbnVQcm9wcz4pID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKG9wZW5lZCk7XG5cbiAgY29uc3QgeyByZWYgfSA9IHVzZUNsaWNrQXdheSh7XG4gICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgIHNldElzT3BlbihmYWxzZSk7XG4gICAgICBvbkNsb3NlICYmIG9uQ2xvc2UoKTtcbiAgICB9LFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzT3BlbihvcGVuZWQpO1xuICB9LCBbb3BlbmVkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGlzT3Blbj17aXNPcGVufSByZWY9e3JlZn0+XG4gICAgICA8QmFzZU1lbnVXcmFwcGVyPntjaGlsZHJlbn08L0Jhc2VNZW51V3JhcHBlcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBNZW51ID0gKHsgY2hpbGRyZW4sIC4uLnJlc3QgfTogUHJvcHNXaXRoQ2hpbGRyZW48TWVudVByb3BzPikgPT4ge1xuICByZXR1cm4gPEJhc2VNZW51IHsuLi5yZXN0fT57Y2hpbGRyZW59PC9CYXNlTWVudT47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIl19