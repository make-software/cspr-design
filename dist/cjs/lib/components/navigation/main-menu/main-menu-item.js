"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainMenuItem = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var NavItem = styled_components_1.default.li(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        display: 'flex',
        color: theme.styleguideColors.contentTertiary,
        padding: ['16px 32px', '16px 48px', '0 12px', '0 16px'],
        width: '100%',
        // '&:first-child': {
        //   paddingLeft: ['16px 32px', '16px 48px', '0', '0'],
        // },
        // '&:last-child': {
        //   paddingRight: [undefined, undefined, '0'],
        // },
    });
});
var MainMenuItem = function (_a) {
    var children = _a.children;
    return (0, jsx_runtime_1.jsx)(NavItem, { children: children });
};
exports.MainMenuItem = MainMenuItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1tZW51LWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9tYWluLW1lbnUvbWFpbi1tZW51LWl0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBRXZDLElBQU0sT0FBTyxHQUFHLDJCQUFNLENBQUMsRUFBRSxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUNoQyxPQUFBLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDZCxPQUFPLEVBQUUsTUFBTTtRQUNmLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtRQUM3QyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7UUFDdkQsS0FBSyxFQUFFLE1BQU07UUFDYixxQkFBcUI7UUFDckIsdURBQXVEO1FBQ3ZELEtBQUs7UUFDTCxvQkFBb0I7UUFDcEIsK0NBQStDO1FBQy9DLEtBQUs7S0FDTixDQUFDO0FBWEYsQ0FXRSxDQUNILENBQUM7QUFJSyxJQUFNLFlBQVksR0FBRyxVQUFDLEVBRVU7UUFEckMsUUFBUSxjQUFBO0lBRVIsT0FBTyx1QkFBQyxPQUFPLGNBQUUsUUFBUSxHQUFXLENBQUM7QUFDdkMsQ0FBQyxDQUFDO0FBSlcsUUFBQSxZQUFZLGdCQUl2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBOYXZJdGVtID0gc3R5bGVkLmxpKCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcbiAgICBwYWRkaW5nOiBbJzE2cHggMzJweCcsICcxNnB4IDQ4cHgnLCAnMCAxMnB4JywgJzAgMTZweCddLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgLy8gJyY6Zmlyc3QtY2hpbGQnOiB7XG4gICAgLy8gICBwYWRkaW5nTGVmdDogWycxNnB4IDMycHgnLCAnMTZweCA0OHB4JywgJzAnLCAnMCddLFxuICAgIC8vIH0sXG4gICAgLy8gJyY6bGFzdC1jaGlsZCc6IHtcbiAgICAvLyAgIHBhZGRpbmdSaWdodDogW3VuZGVmaW5lZCwgdW5kZWZpbmVkLCAnMCddLFxuICAgIC8vIH0sXG4gIH0pXG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1haW5NZW51SXRlbVByb3BzIHt9XG5cbmV4cG9ydCBjb25zdCBNYWluTWVudUl0ZW0gPSAoe1xuICBjaGlsZHJlbixcbn06IFByb3BzV2l0aENoaWxkcmVuPE1haW5NZW51SXRlbVByb3BzPikgPT4ge1xuICByZXR1cm4gPE5hdkl0ZW0+e2NoaWxkcmVufTwvTmF2SXRlbT47XG59O1xuIl19