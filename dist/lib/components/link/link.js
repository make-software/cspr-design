import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import styled from 'styled-components';
import { matchSize } from "../../utils/match-size";
var getStateColor = function (theme, color) {
    return ({
        primaryBlue: {
            color: theme.styleguideColors.contentBlue,
            hover: theme.styleguideColors.fillPrimaryBlueHover,
            active: theme.styleguideColors.fillPrimaryBlueClick,
        },
        primaryRed: {
            color: theme.styleguideColors.fillPrimaryRed,
            hover: theme.styleguideColors.fillPrimaryRedHover,
            active: theme.styleguideColors.fillPrimaryRedClick,
        },
        hash: {
            color: theme.styleguideColors.contentBlue,
            hover: theme.styleguideColors.contentRed,
            active: theme.styleguideColors.fillPrimaryRedClick,
        },
    }[color] || {
        color: 'inherit',
        hover: 'inherit',
        active: 'inherit',
    });
};
var StyledLink = styled.a(function (_a) {
    var theme = _a.theme, color = _a.color, _b = _a.lineHeight, lineHeight = _b === void 0 ? 'sm' : _b;
    var stateColor = getStateColor(theme, color);
    return {
        lineHeight: matchSize({
            sm: '1.5rem',
            xs: '1.25rem',
        }, lineHeight),
        color: stateColor.color,
        '&:hover > *': {
            color: stateColor.hover,
        },
        '&:active > *': {
            color: stateColor.active,
        },
    };
});
export var Link = React.forwardRef(function Link(props, ref) {
    return _jsx(StyledLink, __assign({ ref: ref, target: "_blank" }, props));
});
export default Link;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9saW5rL2xpbmsudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sTUFBTSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUlqRCxJQUFNLGFBQWEsR0FBRyxVQUFDLEtBQUssRUFBRSxLQUFZO0lBQ3hDLE9BQU8sQ0FDTDtRQUNFLFdBQVcsRUFBRTtZQUNYLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVztZQUN6QyxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQjtZQUNsRCxNQUFNLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQjtTQUNwRDtRQUNELFVBQVUsRUFBRTtZQUNWLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYztZQUM1QyxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQjtZQUNqRCxNQUFNLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQjtTQUNuRDtRQUNELElBQUksRUFBRTtZQUNKLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVztZQUN6QyxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFVBQVU7WUFDeEMsTUFBTSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUI7U0FDbkQ7S0FDRixDQUFDLEtBQUssQ0FBQyxJQUFJO1FBQ1YsS0FBSyxFQUFFLFNBQVM7UUFDaEIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsTUFBTSxFQUFFLFNBQVM7S0FDbEIsQ0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBV0YsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBWSxVQUFDLEVBQW1DO1FBQWpDLEtBQUssV0FBQSxFQUFFLEtBQUssV0FBQSxFQUFFLGtCQUFpQixFQUFqQixVQUFVLG1CQUFHLElBQUksS0FBQTtJQUN2RSxJQUFNLFVBQVUsR0FBRyxhQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9DLE9BQU87UUFDTCxVQUFVLEVBQUUsU0FBUyxDQUNqQjtZQUNFLEVBQUUsRUFBRSxRQUFRO1lBQ1osRUFBRSxFQUFFLFNBQVM7U0FDZCxFQUNELFVBQVUsQ0FDYjtRQUNELEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSztRQUN2QixhQUFhLEVBQUU7WUFDYixLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUs7U0FDeEI7UUFDRCxjQUFjLEVBQUU7WUFDZCxLQUFLLEVBQUUsVUFBVSxDQUFDLE1BQU07U0FDekI7S0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBaUIsU0FBUyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUc7SUFDM0UsT0FBTyxLQUFDLFVBQVUsYUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBQyxRQUFRLElBQUssS0FBSyxFQUFJLENBQUM7QUFDN0QsQ0FBQyxDQUFDLENBQUM7QUFFSCxlQUFlLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7bWF0Y2hTaXplfSBmcm9tIFwiLi4vLi4vdXRpbHMvbWF0Y2gtc2l6ZVwiO1xuXG50eXBlIENvbG9yID0gJ3ByaW1hcnlCbHVlJyB8ICdwcmltYXJ5UmVkJyB8ICdoYXNoJyB8ICdpbmhlcml0JztcblxuY29uc3QgZ2V0U3RhdGVDb2xvciA9ICh0aGVtZSwgY29sb3I6IENvbG9yKSA9PiB7XG4gIHJldHVybiAoXG4gICAge1xuICAgICAgcHJpbWFyeUJsdWU6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXG4gICAgICAgIGhvdmVyOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5Qmx1ZUhvdmVyLFxuICAgICAgICBhY3RpdmU6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlCbHVlQ2xpY2ssXG4gICAgICB9LFxuICAgICAgcHJpbWFyeVJlZDoge1xuICAgICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcbiAgICAgICAgaG92ZXI6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWRIb3ZlcixcbiAgICAgICAgYWN0aXZlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5UmVkQ2xpY2ssXG4gICAgICB9LFxuICAgICAgaGFzaDoge1xuICAgICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgICAgICAgaG92ZXI6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFJlZCxcbiAgICAgICAgYWN0aXZlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5UmVkQ2xpY2ssXG4gICAgICB9LFxuICAgIH1bY29sb3JdIHx8IHtcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICBob3ZlcjogJ2luaGVyaXQnLFxuICAgICAgYWN0aXZlOiAnaW5oZXJpdCcsXG4gICAgfVxuICApO1xufTtcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgaW50ZXJmYWNlIExpbmtQcm9wcyBleHRlbmRzIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPFJlZj4ge1xuICBocmVmPzogc3RyaW5nO1xuICB0YXJnZXQ/OiBzdHJpbmc7XG4gIGNvbG9yOiBDb2xvcjtcbiAgbGluZUhlaWdodD86ICd4cycgfCAnc20nO1xufVxuXG50eXBlIFJlZiA9IEhUTUxBbmNob3JFbGVtZW50O1xuY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZC5hPExpbmtQcm9wcz4oKHsgdGhlbWUsIGNvbG9yLCBsaW5lSGVpZ2h0ID0gJ3NtJyB9KSA9PiB7XG4gIGNvbnN0IHN0YXRlQ29sb3IgPSBnZXRTdGF0ZUNvbG9yKHRoZW1lLCBjb2xvcik7XG4gIHJldHVybiB7XG4gICAgbGluZUhlaWdodDogbWF0Y2hTaXplKFxuICAgICAgICB7XG4gICAgICAgICAgc206ICcxLjVyZW0nLFxuICAgICAgICAgIHhzOiAnMS4yNXJlbScsXG4gICAgICAgIH0sXG4gICAgICAgIGxpbmVIZWlnaHRcbiAgICApLFxuICAgIGNvbG9yOiBzdGF0ZUNvbG9yLmNvbG9yLFxuICAgICcmOmhvdmVyID4gKic6IHtcbiAgICAgIGNvbG9yOiBzdGF0ZUNvbG9yLmhvdmVyLFxuICAgIH0sXG4gICAgJyY6YWN0aXZlID4gKic6IHtcbiAgICAgIGNvbG9yOiBzdGF0ZUNvbG9yLmFjdGl2ZSxcbiAgICB9LFxuICB9O1xufSk7XG5cbmV4cG9ydCBjb25zdCBMaW5rID0gUmVhY3QuZm9yd2FyZFJlZjxSZWYsIExpbmtQcm9wcz4oZnVuY3Rpb24gTGluayhwcm9wcywgcmVmKSB7XG4gIHJldHVybiA8U3R5bGVkTGluayByZWY9e3JlZn0gdGFyZ2V0PVwiX2JsYW5rXCIgey4uLnByb3BzfSAvPjtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuIl19