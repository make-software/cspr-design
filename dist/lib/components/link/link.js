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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9saW5rL2xpbmsudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sTUFBTSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUlqRCxJQUFNLGFBQWEsR0FBRyxVQUFDLEtBQUssRUFBRSxLQUFZO0lBQ3hDLE9BQU8sQ0FDTDtRQUNFLFdBQVcsRUFBRTtZQUNYLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVztZQUN6QyxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQjtZQUNsRCxNQUFNLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQjtTQUNwRDtRQUNELFVBQVUsRUFBRTtZQUNWLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYztZQUM1QyxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQjtZQUNqRCxNQUFNLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQjtTQUNuRDtRQUNELElBQUksRUFBRTtZQUNKLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVztZQUN6QyxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFVBQVU7WUFDeEMsTUFBTSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUI7U0FDbkQ7S0FDRixDQUFDLEtBQUssQ0FBQyxJQUFJO1FBQ1YsS0FBSyxFQUFFLFNBQVM7UUFDaEIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsTUFBTSxFQUFFLFNBQVM7S0FDbEIsQ0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBV0YsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBWSxVQUFDLEVBQW1DO1FBQWpDLEtBQUssV0FBQSxFQUFFLEtBQUssV0FBQSxFQUFFLGtCQUFpQixFQUFqQixVQUFVLG1CQUFHLElBQUksS0FBQTtJQUN2RSxJQUFNLFVBQVUsR0FBRyxhQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9DLE9BQU87UUFDTCxVQUFVLEVBQUUsU0FBUyxDQUNqQjtZQUNFLEVBQUUsRUFBRSxRQUFRO1lBQ1osRUFBRSxFQUFFLFNBQVM7U0FDZCxFQUNELFVBQVUsQ0FDYjtRQUNELEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSztRQUN2QixhQUFhLEVBQUU7WUFDYixLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUs7U0FDeEI7UUFDRCxjQUFjLEVBQUU7WUFDZCxLQUFLLEVBQUUsVUFBVSxDQUFDLE1BQU07U0FDekI7S0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBaUIsU0FBUyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUc7SUFDM0UsT0FBTyxLQUFDLFVBQVUsYUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBQyxRQUFRLElBQUssS0FBSyxFQUFJLENBQUM7QUFDN0QsQ0FBQyxDQUFDLENBQUM7QUFFSCxlQUFlLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge21hdGNoU2l6ZX0gZnJvbSBcIi4uLy4uL3V0aWxzL21hdGNoLXNpemVcIjtcclxuXHJcbnR5cGUgQ29sb3IgPSAncHJpbWFyeUJsdWUnIHwgJ3ByaW1hcnlSZWQnIHwgJ2hhc2gnIHwgJ2luaGVyaXQnO1xyXG5cclxuY29uc3QgZ2V0U3RhdGVDb2xvciA9ICh0aGVtZSwgY29sb3I6IENvbG9yKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIHtcclxuICAgICAgcHJpbWFyeUJsdWU6IHtcclxuICAgICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcclxuICAgICAgICBob3ZlcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeUJsdWVIb3ZlcixcclxuICAgICAgICBhY3RpdmU6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlCbHVlQ2xpY2ssXHJcbiAgICAgIH0sXHJcbiAgICAgIHByaW1hcnlSZWQ6IHtcclxuICAgICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcclxuICAgICAgICBob3ZlcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZEhvdmVyLFxyXG4gICAgICAgIGFjdGl2ZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZENsaWNrLFxyXG4gICAgICB9LFxyXG4gICAgICBoYXNoOiB7XHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXHJcbiAgICAgICAgaG92ZXI6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFJlZCxcclxuICAgICAgICBhY3RpdmU6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWRDbGljayxcclxuICAgICAgfSxcclxuICAgIH1bY29sb3JdIHx8IHtcclxuICAgICAgY29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgaG92ZXI6ICdpbmhlcml0JyxcclxuICAgICAgYWN0aXZlOiAnaW5oZXJpdCcsXHJcbiAgICB9XHJcbiAgKTtcclxufTtcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIExpbmtQcm9wcyBleHRlbmRzIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPFJlZj4ge1xyXG4gIGhyZWY/OiBzdHJpbmc7XHJcbiAgdGFyZ2V0Pzogc3RyaW5nO1xyXG4gIGNvbG9yOiBDb2xvcjtcclxuICBsaW5lSGVpZ2h0PzogJ3hzJyB8ICdzbSc7XHJcbn1cclxuXHJcbnR5cGUgUmVmID0gSFRNTEFuY2hvckVsZW1lbnQ7XHJcbmNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuYTxMaW5rUHJvcHM+KCh7IHRoZW1lLCBjb2xvciwgbGluZUhlaWdodCA9ICdzbScgfSkgPT4ge1xyXG4gIGNvbnN0IHN0YXRlQ29sb3IgPSBnZXRTdGF0ZUNvbG9yKHRoZW1lLCBjb2xvcik7XHJcbiAgcmV0dXJuIHtcclxuICAgIGxpbmVIZWlnaHQ6IG1hdGNoU2l6ZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzbTogJzEuNXJlbScsXHJcbiAgICAgICAgICB4czogJzEuMjVyZW0nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGluZUhlaWdodFxyXG4gICAgKSxcclxuICAgIGNvbG9yOiBzdGF0ZUNvbG9yLmNvbG9yLFxyXG4gICAgJyY6aG92ZXIgPiAqJzoge1xyXG4gICAgICBjb2xvcjogc3RhdGVDb2xvci5ob3ZlcixcclxuICAgIH0sXHJcbiAgICAnJjphY3RpdmUgPiAqJzoge1xyXG4gICAgICBjb2xvcjogc3RhdGVDb2xvci5hY3RpdmUsXHJcbiAgICB9LFxyXG4gIH07XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpbmsgPSBSZWFjdC5mb3J3YXJkUmVmPFJlZiwgTGlua1Byb3BzPihmdW5jdGlvbiBMaW5rKHByb3BzLCByZWYpIHtcclxuICByZXR1cm4gPFN0eWxlZExpbmsgcmVmPXtyZWZ9IHRhcmdldD1cIl9ibGFua1wiIHsuLi5wcm9wc30gLz47XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGluaztcclxuIl19