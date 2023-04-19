"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainMenu = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
// export const Container = styled.div(({ theme }) =>
//   theme.withMedia({
//     background: theme.styleguideColors.backgroundTertiary,
//     position: 'relative',
//     display: 'flex',
//     // flexDirection: ['column', 'column', 'row'],
//     justifyContent: 'flex-end',
//     maxWidth: theme.maxWidth,
//     width: '100%',
//     height: [undefined, undefined, 72],
//     padding: 0,
//     margin: 0,
//
//     '& > :last-of-type': {
//       paddingRight: 0,
//     },
//   })
// );
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
        padding: ['0', '0', '0px 56px', '0px'],
        margin: [0],
    });
});
var MainMenu = function (_a) {
    var children = _a.children;
    return (0, jsx_runtime_1.jsx)(MenuContainer, { children: children });
};
exports.MainMenu = MainMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vbWFpbi1tZW51L21haW4tbWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxnRkFBdUM7QUFFdkMscURBQXFEO0FBQ3JELHNCQUFzQjtBQUN0Qiw2REFBNkQ7QUFDN0QsNEJBQTRCO0FBQzVCLHVCQUF1QjtBQUN2QixxREFBcUQ7QUFDckQsa0NBQWtDO0FBQ2xDLGdDQUFnQztBQUNoQyxxQkFBcUI7QUFDckIsMENBQTBDO0FBQzFDLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsRUFBRTtBQUNGLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekIsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBRUwsSUFBTSxhQUFhLEdBQUcsMkJBQU0sQ0FBQyxFQUFFLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQ3RDLE9BQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNkLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCO1FBQ3JELE9BQU8sRUFBRSxNQUFNO1FBQ2YsYUFBYSxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUM7UUFDMUMsY0FBYyxFQUFFLGVBQWU7UUFDL0IsVUFBVSxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUM7UUFDOUMsTUFBTSxFQUFFLE1BQU07UUFDZCxLQUFLLEVBQUUsTUFBTTtRQUNiLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQztRQUN0QyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDWixDQUFDO0FBVkYsQ0FVRSxDQUNILENBQUM7QUFJSyxJQUFNLFFBQVEsR0FBRyxVQUFDLEVBQThDO1FBQTVDLFFBQVEsY0FBQTtJQUNqQyxPQUFPLHVCQUFDLGFBQWEsY0FBRSxRQUFRLEdBQWlCLENBQUM7QUFDbkQsQ0FBQyxDQUFDO0FBRlcsUUFBQSxRQUFRLFlBRW5CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8vIGV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+XG4vLyAgIHRoZW1lLndpdGhNZWRpYSh7XG4vLyAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kVGVydGlhcnksXG4vLyAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4vLyAgICAgZGlzcGxheTogJ2ZsZXgnLFxuLy8gICAgIC8vIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgJ2NvbHVtbicsICdyb3cnXSxcbi8vICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbi8vICAgICBtYXhXaWR0aDogdGhlbWUubWF4V2lkdGgsXG4vLyAgICAgd2lkdGg6ICcxMDAlJyxcbi8vICAgICBoZWlnaHQ6IFt1bmRlZmluZWQsIHVuZGVmaW5lZCwgNzJdLFxuLy8gICAgIHBhZGRpbmc6IDAsXG4vLyAgICAgbWFyZ2luOiAwLFxuLy9cbi8vICAgICAnJiA+IDpsYXN0LW9mLXR5cGUnOiB7XG4vLyAgICAgICBwYWRkaW5nUmlnaHQ6IDAsXG4vLyAgICAgfSxcbi8vICAgfSlcbi8vICk7XG5cbmNvbnN0IE1lbnVDb250YWluZXIgPSBzdHlsZWQudWwoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRUZXJ0aWFyeSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCAnY29sdW1uJywgJ3JvdyddLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgYWxpZ25JdGVtczogWydiYXNlbGluZScsICdiYXNlbGluZScsICdjZW50ZXInXSxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBhZGRpbmc6IFsnMCcsICcwJywgJzBweCA1NnB4JywgJzBweCddLFxuICAgIG1hcmdpbjogWzBdLFxuICB9KVxuKTtcblxuZXhwb3J0IGludGVyZmFjZSBNYWluTWVudVByb3BzIHt9XG5cbmV4cG9ydCBjb25zdCBNYWluTWVudSA9ICh7IGNoaWxkcmVuIH06IFByb3BzV2l0aENoaWxkcmVuPE1haW5NZW51UHJvcHM+KSA9PiB7XG4gIHJldHVybiA8TWVudUNvbnRhaW5lcj57Y2hpbGRyZW59PC9NZW51Q29udGFpbmVyPjtcbn07XG4iXX0=