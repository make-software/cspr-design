"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
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
var Container = function (_a) {
    var children = _a.children;
    return (0, jsx_runtime_1.jsx)(SettingsContainer, { children: children });
};
exports.Container = Container;
exports.default = exports.Container;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vY29udGFpbmVyL2NvbnRhaW5lci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnRkFBdUM7QUFHdkMsSUFBTSxpQkFBaUIsR0FBRywyQkFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFDM0MsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0I7UUFDckQsTUFBTSxFQUFFLE1BQU07UUFDZCxLQUFLLEVBQUUsTUFBTTtRQUNiLE9BQU8sRUFBRSxNQUFNO1FBQ2YsNkJBQTZCO1FBQzdCLDhCQUE4QjtRQUM5QiwwQkFBMEI7S0FDM0IsQ0FBQztBQVJGLENBUUUsQ0FDSCxDQUFDO0FBSUssSUFBTSxTQUFTLEdBQUcsVUFBQyxFQUErQztRQUE3QyxRQUFRLGNBQUE7SUFDbEMsT0FBTyx1QkFBQyxpQkFBaUIsY0FBRSxRQUFRLEdBQXFCLENBQUM7QUFDM0QsQ0FBQyxDQUFDO0FBRlcsUUFBQSxTQUFTLGFBRXBCO0FBRUYsa0JBQWUsaUJBQVMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBTZXR0aW5nc0NvbnRhaW5lciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRUZXJ0aWFyeSxcbiAgICBoZWlnaHQ6IFwiNDBweFwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAvLyBmbGV4RGlyZWN0aW9uOiBbXCJjb2x1bW5cIl0sXG4gICAgLy8ganVzdGlmeUNvbnRlbnQ6IFtcImNlbnRlclwiXSxcbiAgICAvLyBhbGlnbkl0ZW1zOiBbXCJjZW50ZXJcIl0sXG4gIH0pXG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbnRhaW5lclByb3BzIHt9XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9OiBQcm9wc1dpdGhDaGlsZHJlbjxDb250YWluZXJQcm9wcz4pID0+IHtcbiAgcmV0dXJuIDxTZXR0aW5nc0NvbnRhaW5lcj57Y2hpbGRyZW59PC9TZXR0aW5nc0NvbnRhaW5lcj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7Il19