"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainMenuItem = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var NavItem = styled_components_1.default.li(function (_a) {
    var theme = _a.theme, selected = _a.selected;
    return theme.withMedia(tslib_1.__assign(tslib_1.__assign({ display: 'flex', color: theme.styleguideColors.contentTertiary, padding: ['16px 32px', '16px 48px', '0 12px', '0 16px'], width: '100%', height: '100%', alignItems: 'center' }, (selected && {
        color: theme.styleguideColors.contentOnFill,
    })), { '& > *:hover': {
            cursor: 'pointer',
            color: theme.styleguideColors.contentOnFill,
        } }));
});
var MainMenuItem = function (_a) {
    var _b = _a.selected, selected = _b === void 0 ? false : _b, children = _a.children;
    return (0, jsx_runtime_1.jsx)(NavItem, tslib_1.__assign({ selected: selected }, { children: children }));
};
exports.MainMenuItem = MainMenuItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1tZW51LWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9tYWluLW1lbnUvbWFpbi1tZW51LWl0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBRXZDLElBQU0sT0FBTyxHQUFHLDJCQUFNLENBQUMsRUFBRSxDQUF5QixVQUFDLEVBQW1CO1FBQWpCLEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBQTtJQUNsRSxPQUFBLEtBQUssQ0FBQyxTQUFTLHFDQUNiLE9BQU8sRUFBRSxNQUFNLEVBQ2YsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQzdDLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxFQUN2RCxLQUFLLEVBQUUsTUFBTSxFQUNiLE1BQU0sRUFBRSxNQUFNLEVBQ2QsVUFBVSxFQUFFLFFBQVEsSUFDakIsQ0FBQyxRQUFRLElBQUk7UUFDZCxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWE7S0FDNUMsQ0FBQyxLQUNGLGFBQWEsRUFBRTtZQUNiLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtTQUM1QyxJQUNEO0FBZEYsQ0FjRSxDQUNILENBQUM7QUFNSyxJQUFNLFlBQVksR0FBRyxVQUFDLEVBR1U7UUFGckMsZ0JBQWdCLEVBQWhCLFFBQVEsbUJBQUcsS0FBSyxLQUFBLEVBQ2hCLFFBQVEsY0FBQTtJQUVSLE9BQU8sdUJBQUMsT0FBTyxxQkFBQyxRQUFRLEVBQUUsUUFBUSxnQkFBRyxRQUFRLElBQVcsQ0FBQztBQUMzRCxDQUFDLENBQUM7QUFMVyxRQUFBLFlBQVksZ0JBS3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQubGk8eyBzZWxlY3RlZD86IGJvb2xlYW4gfT4oKHsgdGhlbWUsIHNlbGVjdGVkIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcbiAgICBwYWRkaW5nOiBbJzE2cHggMzJweCcsICcxNnB4IDQ4cHgnLCAnMCAxMnB4JywgJzAgMTZweCddLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgLi4uKHNlbGVjdGVkICYmIHtcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRPbkZpbGwsXG4gICAgfSksXG4gICAgJyYgPiAqOmhvdmVyJzoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50T25GaWxsLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1haW5NZW51SXRlbVByb3BzIHtcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgTWFpbk1lbnVJdGVtID0gKHtcbiAgc2VsZWN0ZWQgPSBmYWxzZSxcbiAgY2hpbGRyZW4sXG59OiBQcm9wc1dpdGhDaGlsZHJlbjxNYWluTWVudUl0ZW1Qcm9wcz4pID0+IHtcbiAgcmV0dXJuIDxOYXZJdGVtIHNlbGVjdGVkPXtzZWxlY3RlZH0+e2NoaWxkcmVufTwvTmF2SXRlbT47XG59O1xuIl19