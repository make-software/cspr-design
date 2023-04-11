"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationContainer = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var SettingsContainer = styled_components_1.default.div(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        background: theme.styleguideColors.backgroundTertiary,
        height: "40px",
        width: "100%",
        display: "flex",
        // flexDirection: ["column"],
        // justifyContent: ["center"],
        // alignItems: ["center"],
    });
});
var NavigationContainer = function (_a) {
    var children = _a.children;
    return (0, jsx_runtime_1.jsx)(SettingsContainer, { children: children });
};
exports.NavigationContainer = NavigationContainer;
exports.default = exports.NavigationContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vY29udGFpbmVyL2NvbnRhaW5lci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnRkFBdUM7QUFHdkMsSUFBTSxpQkFBaUIsR0FBRywyQkFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFDM0MsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0I7UUFDckQsTUFBTSxFQUFFLE1BQU07UUFDZCxLQUFLLEVBQUUsTUFBTTtRQUNiLE9BQU8sRUFBRSxNQUFNO1FBQ2YsNkJBQTZCO1FBQzdCLDhCQUE4QjtRQUM5QiwwQkFBMEI7S0FDM0IsQ0FBQztBQVJGLENBUUUsQ0FDSCxDQUFDO0FBSUssSUFBTSxtQkFBbUIsR0FBRyxVQUFDLEVBQStDO1FBQTdDLFFBQVEsY0FBQTtJQUM1QyxPQUFPLHVCQUFDLGlCQUFpQixjQUFFLFFBQVEsR0FBcUIsQ0FBQztBQUMzRCxDQUFDLENBQUM7QUFGVyxRQUFBLG1CQUFtQix1QkFFOUI7QUFFRixrQkFBZSwyQkFBbUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBTZXR0aW5nc0NvbnRhaW5lciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRUZXJ0aWFyeSxcbiAgICBoZWlnaHQ6IFwiNDBweFwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAvLyBmbGV4RGlyZWN0aW9uOiBbXCJjb2x1bW5cIl0sXG4gICAgLy8ganVzdGlmeUNvbnRlbnQ6IFtcImNlbnRlclwiXSxcbiAgICAvLyBhbGlnbkl0ZW1zOiBbXCJjZW50ZXJcIl0sXG4gIH0pXG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbnRhaW5lclByb3BzIHt9XG5cbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfTogUHJvcHNXaXRoQ2hpbGRyZW48Q29udGFpbmVyUHJvcHM+KSA9PiB7XG4gIHJldHVybiA8U2V0dGluZ3NDb250YWluZXI+e2NoaWxkcmVufTwvU2V0dGluZ3NDb250YWluZXI+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbkNvbnRhaW5lcjsiXX0=