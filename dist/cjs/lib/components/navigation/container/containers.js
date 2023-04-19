"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationSettingsContainer = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
// const MenuContainer = styled.ul(({ theme }) =>
//   theme.withMedia({
//     display: 'flex',
//     flexDirection: ['row'],
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     // maxWidth: theme.maxWidth,
//     // width: '100%',
//     padding: ['19px 16px', '19px 32px', '0px 56px', '0px'],
//     margin: [0],
//   })
// );
var SettingsContainer = styled_components_1.default.div(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        background: theme.styleguideColors.backgroundTertiary,
        height: '40px',
        width: '100%',
        display: 'flex',
        // flexDirection: ["column"],
        // justifyContent: ["center"],
        // alignItems: ["center"],
    });
});
var NavigationSettingsContainer = function (_a) {
    var children = _a.children;
    return (0, jsx_runtime_1.jsx)(SettingsContainer, { children: children });
};
exports.NavigationSettingsContainer = NavigationSettingsContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2NvbnRhaW5lci9jb250YWluZXJzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdGQUF1QztBQUd2QyxpREFBaUQ7QUFDakQsc0JBQXNCO0FBQ3RCLHVCQUF1QjtBQUN2Qiw4QkFBOEI7QUFDOUIsdUNBQXVDO0FBQ3ZDLDRCQUE0QjtBQUM1QixtQ0FBbUM7QUFDbkMsd0JBQXdCO0FBQ3hCLDhEQUE4RDtBQUM5RCxtQkFBbUI7QUFDbkIsT0FBTztBQUNQLEtBQUs7QUFFTCxJQUFNLGlCQUFpQixHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUMzQyxPQUFBLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDZCxVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQjtRQUNyRCxNQUFNLEVBQUUsTUFBTTtRQUNkLEtBQUssRUFBRSxNQUFNO1FBQ2IsT0FBTyxFQUFFLE1BQU07UUFDZiw2QkFBNkI7UUFDN0IsOEJBQThCO1FBQzlCLDBCQUEwQjtLQUMzQixDQUFDO0FBUkYsQ0FRRSxDQUNILENBQUM7QUFJSyxJQUFNLDJCQUEyQixHQUFHLFVBQUMsRUFFUjtRQURsQyxRQUFRLGNBQUE7SUFFUixPQUFPLHVCQUFDLGlCQUFpQixjQUFFLFFBQVEsR0FBcUIsQ0FBQztBQUMzRCxDQUFDLENBQUM7QUFKVyxRQUFBLDJCQUEyQiwrQkFJdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuXG4vLyBjb25zdCBNZW51Q29udGFpbmVyID0gc3R5bGVkLnVsKCh7IHRoZW1lIH0pID0+XG4vLyAgIHRoZW1lLndpdGhNZWRpYSh7XG4vLyAgICAgZGlzcGxheTogJ2ZsZXgnLFxuLy8gICAgIGZsZXhEaXJlY3Rpb246IFsncm93J10sXG4vLyAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbi8vICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbi8vICAgICAvLyBtYXhXaWR0aDogdGhlbWUubWF4V2lkdGgsXG4vLyAgICAgLy8gd2lkdGg6ICcxMDAlJyxcbi8vICAgICBwYWRkaW5nOiBbJzE5cHggMTZweCcsICcxOXB4IDMycHgnLCAnMHB4IDU2cHgnLCAnMHB4J10sXG4vLyAgICAgbWFyZ2luOiBbMF0sXG4vLyAgIH0pXG4vLyApO1xuXG5jb25zdCBTZXR0aW5nc0NvbnRhaW5lciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRUZXJ0aWFyeSxcbiAgICBoZWlnaHQ6ICc0MHB4JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAvLyBmbGV4RGlyZWN0aW9uOiBbXCJjb2x1bW5cIl0sXG4gICAgLy8ganVzdGlmeUNvbnRlbnQ6IFtcImNlbnRlclwiXSxcbiAgICAvLyBhbGlnbkl0ZW1zOiBbXCJjZW50ZXJcIl0sXG4gIH0pXG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbnRhaW5lclByb3BzIHt9XG5cbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uU2V0dGluZ3NDb250YWluZXIgPSAoe1xuICBjaGlsZHJlbixcbn06IFByb3BzV2l0aENoaWxkcmVuPENvbnRhaW5lclByb3BzPikgPT4ge1xuICByZXR1cm4gPFNldHRpbmdzQ29udGFpbmVyPntjaGlsZHJlbn08L1NldHRpbmdzQ29udGFpbmVyPjtcbn07XG5cbi8vIGV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uTWVudUNvbnRhaW5lciA9ICh7XG4vLyAgIGNoaWxkcmVuLFxuLy8gfTogUHJvcHNXaXRoQ2hpbGRyZW48Q29udGFpbmVyUHJvcHM+KSA9PiB7XG4vLyAgIHJldHVybiA8TWVudUNvbnRhaW5lcj57Y2hpbGRyZW59PC9NZW51Q29udGFpbmVyPjtcbi8vIH07XG4iXX0=