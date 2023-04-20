import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
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
    // const [isOpen, setIsOpen] = useState(opened);
    //
    // const { ref } = useClickAway({
    //   callback: () => {
    //     setIsOpen(false);
    //     onClose && onClose();
    //   },
    // });
    //
    // useEffect(() => {
    //   setIsOpen(opened);
    // }, [opened]);
    var _b = _a.opened, opened = _b === void 0 ? false : _b, onClose = _a.onClose, children = _a.children;
    return (
    // <Container isOpen={isOpen} ref={ref}>
    _jsx(Container, __assign({ isOpen: opened }, { children: _jsx(BaseMenuWrapper, { children: children }) })));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kcm9wZG93bi1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vYmFzZS1kcm9wZG93bi1tZW51L2Jhc2UtZHJvcGRvd24tbWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxPQUFPLE1BQU0sTUFBTSxtQkFBbUIsQ0FBQztBQUN2QyxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQztBQUU5QyxJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQXNCLFVBQUMsRUFBaUI7UUFBZixLQUFLLFdBQUEsRUFBRSxNQUFNLFlBQUE7SUFBTyxPQUFBLFlBQzFFLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksSUFDbEMsQ0FBQyxDQUFDLE1BQU0sSUFBSTtRQUNYLE9BQU8sRUFBRSxNQUFNO0tBQ2xCLENBQUMsRUFDSjtBQUw0RSxDQUs1RSxDQUFDLENBQUM7QUFFSixJQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUMvQyxLQUFLLEVBQUUsYUFBYTtRQUNwQixNQUFNLEVBQUUsTUFBTTtRQUNkLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO1FBQ3BELE1BQU0sRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVE7UUFDaEMsU0FBUyxFQUFFLG9CQUFhLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUU7UUFDL0QsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSTtLQUN4QyxDQUFDO0FBUGdELENBT2hELENBQUMsQ0FBQztBQUVKLE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUFHLFVBQUMsRUFJRjtJQUM3QixnREFBZ0Q7SUFDaEQsRUFBRTtJQUNGLGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixPQUFPO0lBQ1AsTUFBTTtJQUNOLEVBQUU7SUFDRixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtRQWZoQixjQUFjLEVBQWQsTUFBTSxtQkFBRyxLQUFLLEtBQUEsRUFDZCxPQUFPLGFBQUEsRUFDUCxRQUFRLGNBQUE7SUFlUixPQUFPO0lBQ0wsd0NBQXdDO0lBQ3hDLEtBQUMsU0FBUyxhQUFDLE1BQU0sRUFBRSxNQUFNLGdCQUN2QixLQUFDLGVBQWUsY0FBRSxRQUFRLEdBQW1CLElBQ25DLENBQ2IsQ0FBQztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2xpY2tBd2F5IH0gZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZS1jbGljay1hd2F5XCI7XG5pbXBvcnQgeyBNZW51UHJvcHMgfSBmcm9tIFwiLi4vZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSBcIi4uLy4uL2ZsZXgtcm93L2ZsZXgtcm93XCI7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KTx7IGlzT3BlbjogYm9vbGVhbiB9PigoeyB0aGVtZSwgaXNPcGVuIH0pID0+ICh7XG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgICAuLi4oIWlzT3BlbiAmJiB7XG4gICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgIH0pLFxufSkpO1xuXG5jb25zdCBCYXNlTWVudVdyYXBwZXIgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcbiAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgZmlsdGVyOiB0aGVtZS5ib3hTaGFkb3cuZHJvcGRvd24sXG4gICAgYm9yZGVyVG9wOiBgNXB4IHNvbGlkICR7dGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZH1gLFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG59KSk7XG5cbmV4cG9ydCBjb25zdCBCYXNlRHJvcGRvd25NZW51ID0gKHtcbiAgb3BlbmVkID0gZmFsc2UsXG4gIG9uQ2xvc2UsXG4gIGNoaWxkcmVuLFxufTogUHJvcHNXaXRoQ2hpbGRyZW48TWVudVByb3BzPikgPT4ge1xuICAvLyBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUob3BlbmVkKTtcbiAgLy9cbiAgLy8gY29uc3QgeyByZWYgfSA9IHVzZUNsaWNrQXdheSh7XG4gIC8vICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgLy8gICAgIHNldElzT3BlbihmYWxzZSk7XG4gIC8vICAgICBvbkNsb3NlICYmIG9uQ2xvc2UoKTtcbiAgLy8gICB9LFxuICAvLyB9KTtcbiAgLy9cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBzZXRJc09wZW4ob3BlbmVkKTtcbiAgLy8gfSwgW29wZW5lZF0pO1xuXG4gIHJldHVybiAoXG4gICAgLy8gPENvbnRhaW5lciBpc09wZW49e2lzT3Blbn0gcmVmPXtyZWZ9PlxuICAgIDxDb250YWluZXIgaXNPcGVuPXtvcGVuZWR9PlxuICAgICAgPEJhc2VNZW51V3JhcHBlcj57Y2hpbGRyZW59PC9CYXNlTWVudVdyYXBwZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59OyJdfQ==