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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9saW5rL2xpbmsudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sTUFBTSxNQUFNLG1CQUFtQixDQUFDO0FBS3ZDLElBQU0sYUFBYSxHQUFHLFVBQUMsS0FBSyxFQUFFLEtBQVk7SUFDeEMsT0FBTyxDQUNMO1FBQ0UsV0FBVyxFQUFFO1lBQ1gsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO1lBQ3pDLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CO1lBQ2xELE1BQU0sRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CO1NBQ3BEO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjO1lBQzVDLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CO1lBQ2pELE1BQU0sRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CO1NBQ25EO1FBQ0QsSUFBSSxFQUFFO1lBQ0osS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO1lBQ3pDLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsVUFBVTtZQUN4QyxNQUFNLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQjtTQUNuRDtLQUNGLENBQUMsS0FBSyxDQUFDLElBQUk7UUFDVixLQUFLLEVBQUUsU0FBUztRQUNoQixLQUFLLEVBQUUsU0FBUztRQUNoQixNQUFNLEVBQUUsU0FBUztLQUNsQixDQUNGLENBQUM7QUFDSixDQUFDLENBQUM7QUFVRixJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFZLFVBQUMsRUFBZ0I7UUFBZCxLQUFLLFdBQUEsRUFBRSxLQUFLLFdBQUE7SUFDcEQsSUFBTSxVQUFVLEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQyxPQUFPO1FBQ0wsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLO1FBQ3ZCLGFBQWEsRUFBRTtZQUNiLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSztTQUN4QjtRQUNELGNBQWMsRUFBRTtZQUNkLEtBQUssRUFBRSxVQUFVLENBQUMsTUFBTTtTQUN6QjtLQUNGLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFpQixTQUFTLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRztJQUMzRSxPQUFPLEtBQUMsVUFBVSxhQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFDLFFBQVEsSUFBSyxLQUFLLEVBQUksQ0FBQztBQUM3RCxDQUFDLENBQUMsQ0FBQztBQUVILGVBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHRoZW1lQ29uZmlnIH0gZnJvbSAnLi4vLi4vdGhlbWUtY29uZmlnJztcclxuXHJcbnR5cGUgQ29sb3IgPSAncHJpbWFyeUJsdWUnIHwgJ3ByaW1hcnlSZWQnIHwgJ2hhc2gnIHwgJ2luaGVyaXQnO1xyXG5cclxuY29uc3QgZ2V0U3RhdGVDb2xvciA9ICh0aGVtZSwgY29sb3I6IENvbG9yKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIHtcclxuICAgICAgcHJpbWFyeUJsdWU6IHtcclxuICAgICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcclxuICAgICAgICBob3ZlcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeUJsdWVIb3ZlcixcclxuICAgICAgICBhY3RpdmU6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlCbHVlQ2xpY2ssXHJcbiAgICAgIH0sXHJcbiAgICAgIHByaW1hcnlSZWQ6IHtcclxuICAgICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcclxuICAgICAgICBob3ZlcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZEhvdmVyLFxyXG4gICAgICAgIGFjdGl2ZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZENsaWNrLFxyXG4gICAgICB9LFxyXG4gICAgICBoYXNoOiB7XHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXHJcbiAgICAgICAgaG92ZXI6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFJlZCxcclxuICAgICAgICBhY3RpdmU6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWRDbGljayxcclxuICAgICAgfSxcclxuICAgIH1bY29sb3JdIHx8IHtcclxuICAgICAgY29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgaG92ZXI6ICdpbmhlcml0JyxcclxuICAgICAgYWN0aXZlOiAnaW5oZXJpdCcsXHJcbiAgICB9XHJcbiAgKTtcclxufTtcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIExpbmtQcm9wcyBleHRlbmRzIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPFJlZj4ge1xyXG4gIGhyZWY/OiBzdHJpbmc7XHJcbiAgdGFyZ2V0Pzogc3RyaW5nO1xyXG4gIGNvbG9yOiBDb2xvcjtcclxufVxyXG5cclxudHlwZSBSZWYgPSBIVE1MQW5jaG9yRWxlbWVudDtcclxuY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZC5hPExpbmtQcm9wcz4oKHsgdGhlbWUsIGNvbG9yIH0pID0+IHtcclxuICBjb25zdCBzdGF0ZUNvbG9yID0gZ2V0U3RhdGVDb2xvcih0aGVtZSwgY29sb3IpO1xyXG4gIHJldHVybiB7XHJcbiAgICBjb2xvcjogc3RhdGVDb2xvci5jb2xvcixcclxuICAgICcmOmhvdmVyID4gKic6IHtcclxuICAgICAgY29sb3I6IHN0YXRlQ29sb3IuaG92ZXIsXHJcbiAgICB9LFxyXG4gICAgJyY6YWN0aXZlID4gKic6IHtcclxuICAgICAgY29sb3I6IHN0YXRlQ29sb3IuYWN0aXZlLFxyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rID0gUmVhY3QuZm9yd2FyZFJlZjxSZWYsIExpbmtQcm9wcz4oZnVuY3Rpb24gTGluayhwcm9wcywgcmVmKSB7XHJcbiAgcmV0dXJuIDxTdHlsZWRMaW5rIHJlZj17cmVmfSB0YXJnZXQ9XCJfYmxhbmtcIiB7Li4ucHJvcHN9IC8+O1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbms7XHJcbiJdfQ==