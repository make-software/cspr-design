import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import styled from 'styled-components';
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
    var theme = _a.theme, color = _a.color;
    var stateColor = getStateColor(theme, color);
    return {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9saW5rL2xpbmsudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sTUFBTSxNQUFNLG1CQUFtQixDQUFDO0FBS3ZDLElBQU0sYUFBYSxHQUFHLFVBQUMsS0FBSyxFQUFFLEtBQVk7SUFDeEMsT0FBTyxDQUNMO1FBQ0UsV0FBVyxFQUFFO1lBQ1gsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO1lBQ3pDLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CO1lBQ2xELE1BQU0sRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CO1NBQ3BEO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjO1lBQzVDLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CO1lBQ2pELE1BQU0sRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CO1NBQ25EO1FBQ0QsSUFBSSxFQUFFO1lBQ0osS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO1lBQ3pDLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsVUFBVTtZQUN4QyxNQUFNLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQjtTQUNuRDtLQUNGLENBQUMsS0FBSyxDQUFDLElBQUk7UUFDVixLQUFLLEVBQUUsU0FBUztRQUNoQixLQUFLLEVBQUUsU0FBUztRQUNoQixNQUFNLEVBQUUsU0FBUztLQUNsQixDQUNGLENBQUM7QUFDSixDQUFDLENBQUM7QUFVRixJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFZLFVBQUMsRUFBZ0I7UUFBZCxLQUFLLFdBQUEsRUFBRSxLQUFLLFdBQUE7SUFDcEQsSUFBTSxVQUFVLEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQyxPQUFPO1FBQ0wsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLO1FBQ3ZCLGFBQWEsRUFBRTtZQUNiLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSztTQUN4QjtRQUNELGNBQWMsRUFBRTtZQUNkLEtBQUssRUFBRSxVQUFVLENBQUMsTUFBTTtTQUN6QjtLQUNGLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFpQixTQUFTLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRztJQUMzRSxPQUFPLEtBQUMsVUFBVSxhQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFDLFFBQVEsSUFBSyxLQUFLLEVBQUksQ0FBQztBQUM3RCxDQUFDLENBQUMsQ0FBQztBQUVILGVBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdGhlbWVDb25maWcgfSBmcm9tICcuLi8uLi90aGVtZS1jb25maWcnO1xuXG50eXBlIENvbG9yID0gJ3ByaW1hcnlCbHVlJyB8ICdwcmltYXJ5UmVkJyB8ICdoYXNoJyB8ICdpbmhlcml0JztcblxuY29uc3QgZ2V0U3RhdGVDb2xvciA9ICh0aGVtZSwgY29sb3I6IENvbG9yKSA9PiB7XG4gIHJldHVybiAoXG4gICAge1xuICAgICAgcHJpbWFyeUJsdWU6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXG4gICAgICAgIGhvdmVyOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5Qmx1ZUhvdmVyLFxuICAgICAgICBhY3RpdmU6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlCbHVlQ2xpY2ssXG4gICAgICB9LFxuICAgICAgcHJpbWFyeVJlZDoge1xuICAgICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcbiAgICAgICAgaG92ZXI6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWRIb3ZlcixcbiAgICAgICAgYWN0aXZlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5UmVkQ2xpY2ssXG4gICAgICB9LFxuICAgICAgaGFzaDoge1xuICAgICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgICAgICAgaG92ZXI6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFJlZCxcbiAgICAgICAgYWN0aXZlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5UmVkQ2xpY2ssXG4gICAgICB9LFxuICAgIH1bY29sb3JdIHx8IHtcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICBob3ZlcjogJ2luaGVyaXQnLFxuICAgICAgYWN0aXZlOiAnaW5oZXJpdCcsXG4gICAgfVxuICApO1xufTtcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgaW50ZXJmYWNlIExpbmtQcm9wcyBleHRlbmRzIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPFJlZj4ge1xuICBocmVmPzogc3RyaW5nO1xuICB0YXJnZXQ/OiBzdHJpbmc7XG4gIGNvbG9yOiBDb2xvcjtcbn1cblxudHlwZSBSZWYgPSBIVE1MQW5jaG9yRWxlbWVudDtcbmNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuYTxMaW5rUHJvcHM+KCh7IHRoZW1lLCBjb2xvciB9KSA9PiB7XG4gIGNvbnN0IHN0YXRlQ29sb3IgPSBnZXRTdGF0ZUNvbG9yKHRoZW1lLCBjb2xvcik7XG4gIHJldHVybiB7XG4gICAgY29sb3I6IHN0YXRlQ29sb3IuY29sb3IsXG4gICAgJyY6aG92ZXIgPiAqJzoge1xuICAgICAgY29sb3I6IHN0YXRlQ29sb3IuaG92ZXIsXG4gICAgfSxcbiAgICAnJjphY3RpdmUgPiAqJzoge1xuICAgICAgY29sb3I6IHN0YXRlQ29sb3IuYWN0aXZlLFxuICAgIH0sXG4gIH07XG59KTtcblxuZXhwb3J0IGNvbnN0IExpbmsgPSBSZWFjdC5mb3J3YXJkUmVmPFJlZiwgTGlua1Byb3BzPihmdW5jdGlvbiBMaW5rKHByb3BzLCByZWYpIHtcbiAgcmV0dXJuIDxTdHlsZWRMaW5rIHJlZj17cmVmfSB0YXJnZXQ9XCJfYmxhbmtcIiB7Li4ucHJvcHN9IC8+O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IExpbms7XG4iXX0=