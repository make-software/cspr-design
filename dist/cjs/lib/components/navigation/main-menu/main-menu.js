"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainMenu = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var MenuContainer = styled_components_1.default.ul(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        background: theme.styleguideColors.backgroundTertiary,
        display: 'flex',
        flexDirection: ['column', 'column', 'row'],
        justifyContent: 'space-between',
        alignItems: ['baseline', 'baseline', 'center'],
        height: '100%',
        width: '100%',
        padding: ['0px'],
        margin: [0],
    });
});
var MainMenu = function (_a) {
    var children = _a.children;
    return (0, jsx_runtime_1.jsx)(MenuContainer, { children: children });
};
exports.MainMenu = MainMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vbWFpbi1tZW51L21haW4tbWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxnRkFBdUM7QUFFdkMsSUFBTSxhQUFhLEdBQUcsMkJBQU0sQ0FBQyxFQUFFLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQ3RDLE9BQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNkLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCO1FBQ3JELE9BQU8sRUFBRSxNQUFNO1FBQ2YsYUFBYSxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUM7UUFDMUMsY0FBYyxFQUFFLGVBQWU7UUFDL0IsVUFBVSxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUM7UUFDOUMsTUFBTSxFQUFFLE1BQU07UUFDZCxLQUFLLEVBQUUsTUFBTTtRQUNiLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNoQixNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDWixDQUFDO0FBVkYsQ0FVRSxDQUNILENBQUM7QUFJSyxJQUFNLFFBQVEsR0FBRyxVQUFDLEVBQThDO1FBQTVDLFFBQVEsY0FBQTtJQUNqQyxPQUFPLHVCQUFDLGFBQWEsY0FBRSxRQUFRLEdBQWlCLENBQUM7QUFDbkQsQ0FBQyxDQUFDO0FBRlcsUUFBQSxRQUFRLFlBRW5CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IE1lbnVDb250YWluZXIgPSBzdHlsZWQudWwoKHsgdGhlbWUgfSkgPT5cclxuICB0aGVtZS53aXRoTWVkaWEoe1xyXG4gICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kVGVydGlhcnksXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsICdjb2x1bW4nLCAncm93J10sXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgYWxpZ25JdGVtczogWydiYXNlbGluZScsICdiYXNlbGluZScsICdjZW50ZXInXSxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHBhZGRpbmc6IFsnMHB4J10sXHJcbiAgICBtYXJnaW46IFswXSxcclxuICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNYWluTWVudVByb3BzIHt9XHJcblxyXG5leHBvcnQgY29uc3QgTWFpbk1lbnUgPSAoeyBjaGlsZHJlbiB9OiBQcm9wc1dpdGhDaGlsZHJlbjxNYWluTWVudVByb3BzPikgPT4ge1xyXG4gIHJldHVybiA8TWVudUNvbnRhaW5lcj57Y2hpbGRyZW59PC9NZW51Q29udGFpbmVyPjtcclxufTtcclxuIl19