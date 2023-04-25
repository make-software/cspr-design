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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vbWFpbi1tZW51L21haW4tbWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxnRkFBdUM7QUFFdkMsSUFBTSxhQUFhLEdBQUcsMkJBQU0sQ0FBQyxFQUFFLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQ3RDLE9BQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNkLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCO1FBQ3JELE9BQU8sRUFBRSxNQUFNO1FBQ2YsYUFBYSxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUM7UUFDMUMsY0FBYyxFQUFFLGVBQWU7UUFDL0IsVUFBVSxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUM7UUFDOUMsTUFBTSxFQUFFLE1BQU07UUFDZCxLQUFLLEVBQUUsTUFBTTtRQUNiLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNoQixNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDWixDQUFDO0FBVkYsQ0FVRSxDQUNILENBQUM7QUFJSyxJQUFNLFFBQVEsR0FBRyxVQUFDLEVBQThDO1FBQTVDLFFBQVEsY0FBQTtJQUNqQyxPQUFPLHVCQUFDLGFBQWEsY0FBRSxRQUFRLEdBQWlCLENBQUM7QUFDbkQsQ0FBQyxDQUFDO0FBRlcsUUFBQSxRQUFRLFlBRW5CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IE1lbnVDb250YWluZXIgPSBzdHlsZWQudWwoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRUZXJ0aWFyeSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCAnY29sdW1uJywgJ3JvdyddLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgYWxpZ25JdGVtczogWydiYXNlbGluZScsICdiYXNlbGluZScsICdjZW50ZXInXSxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBhZGRpbmc6IFsnMHB4J10sXG4gICAgbWFyZ2luOiBbMF0sXG4gIH0pXG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1haW5NZW51UHJvcHMge31cblxuZXhwb3J0IGNvbnN0IE1haW5NZW51ID0gKHsgY2hpbGRyZW4gfTogUHJvcHNXaXRoQ2hpbGRyZW48TWFpbk1lbnVQcm9wcz4pID0+IHtcbiAgcmV0dXJuIDxNZW51Q29udGFpbmVyPntjaGlsZHJlbn08L01lbnVDb250YWluZXI+O1xufTtcbiJdfQ==