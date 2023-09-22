import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
var NavItem = styled.li(function (_a) {
    var theme = _a.theme, selected = _a.selected;
    return theme.withMedia(__assign(__assign({ display: 'flex', color: theme.styleguideColors.contentTertiary, padding: ['16px 32px', '16px 48px', '0 32px 0 0', '0 32px 0 0'], height: '100%', alignItems: 'center' }, (selected && {
        color: theme.styleguideColors.contentOnFill,
    })), { '& > *:hover': {
            cursor: 'pointer',
            color: theme.styleguideColors.contentOnFill,
        } }));
});
export var MainMenuItem = function (_a) {
    var _b = _a.selected, selected = _b === void 0 ? false : _b, children = _a.children;
    return _jsx(NavItem, __assign({ selected: selected }, { children: children }));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1tZW51LWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9tYWluLW1lbnUvbWFpbi1tZW51LWl0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFFdkMsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBeUIsVUFBQyxFQUFtQjtRQUFqQixLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUE7SUFDbEUsT0FBQSxLQUFLLENBQUMsU0FBUyxxQkFDYixPQUFPLEVBQUUsTUFBTSxFQUNmLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUM3QyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsRUFDL0QsTUFBTSxFQUFFLE1BQU0sRUFDZCxVQUFVLEVBQUUsUUFBUSxJQUNqQixDQUFDLFFBQVEsSUFBSTtRQUNkLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtLQUM1QyxDQUFDLEtBQ0YsYUFBYSxFQUFFO1lBQ2IsTUFBTSxFQUFFLFNBQVM7WUFDakIsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1NBQzVDLElBQ0Q7QUFiRixDQWFFLENBQ0gsQ0FBQztBQU1GLE1BQU0sQ0FBQyxJQUFNLFlBQVksR0FBRyxVQUFDLEVBR1U7UUFGckMsZ0JBQWdCLEVBQWhCLFFBQVEsbUJBQUcsS0FBSyxLQUFBLEVBQ2hCLFFBQVEsY0FBQTtJQUVSLE9BQU8sS0FBQyxPQUFPLGFBQUMsUUFBUSxFQUFFLFFBQVEsZ0JBQUcsUUFBUSxJQUFXLENBQUM7QUFDM0QsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQubGk8eyBzZWxlY3RlZD86IGJvb2xlYW4gfT4oKHsgdGhlbWUsIHNlbGVjdGVkIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcbiAgICBwYWRkaW5nOiBbJzE2cHggMzJweCcsICcxNnB4IDQ4cHgnLCAnMCAzMnB4IDAgMCcsICcwIDMycHggMCAwJ10sXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgLi4uKHNlbGVjdGVkICYmIHtcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRPbkZpbGwsXG4gICAgfSksXG4gICAgJyYgPiAqOmhvdmVyJzoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50T25GaWxsLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1haW5NZW51SXRlbVByb3BzIHtcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgTWFpbk1lbnVJdGVtID0gKHtcbiAgc2VsZWN0ZWQgPSBmYWxzZSxcbiAgY2hpbGRyZW4sXG59OiBQcm9wc1dpdGhDaGlsZHJlbjxNYWluTWVudUl0ZW1Qcm9wcz4pID0+IHtcbiAgcmV0dXJuIDxOYXZJdGVtIHNlbGVjdGVkPXtzZWxlY3RlZH0+e2NoaWxkcmVufTwvTmF2SXRlbT47XG59O1xuIl19