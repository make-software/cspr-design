"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDropdownMenu = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
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
    (0, jsx_runtime_1.jsx)(Container, tslib_1.__assign({ isOpen: opened }, { children: (0, jsx_runtime_1.jsx)(BaseMenuWrapper, { children: children }) })));
};
exports.BaseDropdownMenu = BaseDropdownMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kcm9wZG93bi1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vYmFzZS1kcm9wZG93bi1tZW51L2Jhc2UtZHJvcGRvd24tbWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxnRkFBdUM7QUFDdkMsNkVBQThDO0FBRTlDLElBQU0sU0FBUyxHQUFHLElBQUEsMkJBQU0sRUFBQyxrQkFBTyxDQUFDLENBQXNCLFVBQUMsRUFBaUI7UUFBZixLQUFLLFdBQUEsRUFBRSxNQUFNLFlBQUE7SUFBTyxPQUFBLG9CQUMxRSxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQ2xDLENBQUMsQ0FBQyxNQUFNLElBQUk7UUFDWCxPQUFPLEVBQUUsTUFBTTtLQUNsQixDQUFDLEVBQ0o7QUFMNEUsQ0FLNUUsQ0FBQyxDQUFDO0FBRUosSUFBTSxlQUFlLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQy9DLEtBQUssRUFBRSxhQUFhO1FBQ3BCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7UUFDcEQsTUFBTSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUTtRQUNoQyxTQUFTLEVBQUUsb0JBQWEsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBRTtRQUMvRCxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJO0tBQ3hDLENBQUM7QUFQZ0QsQ0FPaEQsQ0FBQyxDQUFDO0FBRUcsSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLEVBSUY7SUFDN0IsZ0RBQWdEO0lBQ2hELEVBQUU7SUFDRixpQ0FBaUM7SUFDakMsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsT0FBTztJQUNQLE1BQU07SUFDTixFQUFFO0lBQ0Ysb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixnQkFBZ0I7UUFmaEIsY0FBYyxFQUFkLE1BQU0sbUJBQUcsS0FBSyxLQUFBLEVBQ2QsT0FBTyxhQUFBLEVBQ1AsUUFBUSxjQUFBO0lBZVIsT0FBTztJQUNMLHdDQUF3QztJQUN4Qyx1QkFBQyxTQUFTLHFCQUFDLE1BQU0sRUFBRSxNQUFNLGdCQUN2Qix1QkFBQyxlQUFlLGNBQUUsUUFBUSxHQUFtQixJQUNuQyxDQUNiLENBQUM7QUFDSixDQUFDLENBQUM7QUF4QlcsUUFBQSxnQkFBZ0Isb0JBd0IzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2xpY2tBd2F5IH0gZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZS1jbGljay1hd2F5XCI7XG5pbXBvcnQgeyBNZW51UHJvcHMgfSBmcm9tIFwiLi4vZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSBcIi4uLy4uL2ZsZXgtcm93L2ZsZXgtcm93XCI7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KTx7IGlzT3BlbjogYm9vbGVhbiB9PigoeyB0aGVtZSwgaXNPcGVuIH0pID0+ICh7XG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgICAuLi4oIWlzT3BlbiAmJiB7XG4gICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgIH0pLFxufSkpO1xuXG5jb25zdCBCYXNlTWVudVdyYXBwZXIgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcbiAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgZmlsdGVyOiB0aGVtZS5ib3hTaGFkb3cuZHJvcGRvd24sXG4gICAgYm9yZGVyVG9wOiBgNXB4IHNvbGlkICR7dGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZH1gLFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG59KSk7XG5cbmV4cG9ydCBjb25zdCBCYXNlRHJvcGRvd25NZW51ID0gKHtcbiAgb3BlbmVkID0gZmFsc2UsXG4gIG9uQ2xvc2UsXG4gIGNoaWxkcmVuLFxufTogUHJvcHNXaXRoQ2hpbGRyZW48TWVudVByb3BzPikgPT4ge1xuICAvLyBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUob3BlbmVkKTtcbiAgLy9cbiAgLy8gY29uc3QgeyByZWYgfSA9IHVzZUNsaWNrQXdheSh7XG4gIC8vICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgLy8gICAgIHNldElzT3BlbihmYWxzZSk7XG4gIC8vICAgICBvbkNsb3NlICYmIG9uQ2xvc2UoKTtcbiAgLy8gICB9LFxuICAvLyB9KTtcbiAgLy9cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBzZXRJc09wZW4ob3BlbmVkKTtcbiAgLy8gfSwgW29wZW5lZF0pO1xuXG4gIHJldHVybiAoXG4gICAgLy8gPENvbnRhaW5lciBpc09wZW49e2lzT3Blbn0gcmVmPXtyZWZ9PlxuICAgIDxDb250YWluZXIgaXNPcGVuPXtvcGVuZWR9PlxuICAgICAgPEJhc2VNZW51V3JhcHBlcj57Y2hpbGRyZW59PC9CYXNlTWVudVdyYXBwZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59OyJdfQ==