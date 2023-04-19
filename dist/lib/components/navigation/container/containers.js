import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
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
var SettingsContainer = styled.div(function (_a) {
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
export var NavigationSettingsContainer = function (_a) {
    var children = _a.children;
    return _jsx(SettingsContainer, { children: children });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2NvbnRhaW5lci9jb250YWluZXJzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFHdkMsaURBQWlEO0FBQ2pELHNCQUFzQjtBQUN0Qix1QkFBdUI7QUFDdkIsOEJBQThCO0FBQzlCLHVDQUF1QztBQUN2Qyw0QkFBNEI7QUFDNUIsbUNBQW1DO0FBQ25DLHdCQUF3QjtBQUN4Qiw4REFBOEQ7QUFDOUQsbUJBQW1CO0FBQ25CLE9BQU87QUFDUCxLQUFLO0FBRUwsSUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUMzQyxPQUFBLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDZCxVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQjtRQUNyRCxNQUFNLEVBQUUsTUFBTTtRQUNkLEtBQUssRUFBRSxNQUFNO1FBQ2IsT0FBTyxFQUFFLE1BQU07UUFDZiw2QkFBNkI7UUFDN0IsOEJBQThCO1FBQzlCLDBCQUEwQjtLQUMzQixDQUFDO0FBUkYsQ0FRRSxDQUNILENBQUM7QUFJRixNQUFNLENBQUMsSUFBTSwyQkFBMkIsR0FBRyxVQUFDLEVBRVI7UUFEbEMsUUFBUSxjQUFBO0lBRVIsT0FBTyxLQUFDLGlCQUFpQixjQUFFLFFBQVEsR0FBcUIsQ0FBQztBQUMzRCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuXG4vLyBjb25zdCBNZW51Q29udGFpbmVyID0gc3R5bGVkLnVsKCh7IHRoZW1lIH0pID0+XG4vLyAgIHRoZW1lLndpdGhNZWRpYSh7XG4vLyAgICAgZGlzcGxheTogJ2ZsZXgnLFxuLy8gICAgIGZsZXhEaXJlY3Rpb246IFsncm93J10sXG4vLyAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbi8vICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbi8vICAgICAvLyBtYXhXaWR0aDogdGhlbWUubWF4V2lkdGgsXG4vLyAgICAgLy8gd2lkdGg6ICcxMDAlJyxcbi8vICAgICBwYWRkaW5nOiBbJzE5cHggMTZweCcsICcxOXB4IDMycHgnLCAnMHB4IDU2cHgnLCAnMHB4J10sXG4vLyAgICAgbWFyZ2luOiBbMF0sXG4vLyAgIH0pXG4vLyApO1xuXG5jb25zdCBTZXR0aW5nc0NvbnRhaW5lciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRUZXJ0aWFyeSxcbiAgICBoZWlnaHQ6ICc0MHB4JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAvLyBmbGV4RGlyZWN0aW9uOiBbXCJjb2x1bW5cIl0sXG4gICAgLy8ganVzdGlmeUNvbnRlbnQ6IFtcImNlbnRlclwiXSxcbiAgICAvLyBhbGlnbkl0ZW1zOiBbXCJjZW50ZXJcIl0sXG4gIH0pXG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbnRhaW5lclByb3BzIHt9XG5cbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uU2V0dGluZ3NDb250YWluZXIgPSAoe1xuICBjaGlsZHJlbixcbn06IFByb3BzV2l0aENoaWxkcmVuPENvbnRhaW5lclByb3BzPikgPT4ge1xuICByZXR1cm4gPFNldHRpbmdzQ29udGFpbmVyPntjaGlsZHJlbn08L1NldHRpbmdzQ29udGFpbmVyPjtcbn07XG5cbi8vIGV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uTWVudUNvbnRhaW5lciA9ICh7XG4vLyAgIGNoaWxkcmVuLFxuLy8gfTogUHJvcHNXaXRoQ2hpbGRyZW48Q29udGFpbmVyUHJvcHM+KSA9PiB7XG4vLyAgIHJldHVybiA8TWVudUNvbnRhaW5lcj57Y2hpbGRyZW59PC9NZW51Q29udGFpbmVyPjtcbi8vIH07XG4iXX0=