"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
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
var StyledLink = styled_components_1.default.a(function (_a) {
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
exports.Link = react_1.default.forwardRef(function Link(props, ref) {
    return (0, jsx_runtime_1.jsx)(StyledLink, tslib_1.__assign({ ref: ref, target: "_blank" }, props));
});
exports.default = exports.Link;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9saW5rL2xpbmsudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLGdGQUF1QztBQUt2QyxJQUFNLGFBQWEsR0FBRyxVQUFDLEtBQUssRUFBRSxLQUFZO0lBQ3hDLE9BQU8sQ0FDTDtRQUNFLFdBQVcsRUFBRTtZQUNYLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVztZQUN6QyxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQjtZQUNsRCxNQUFNLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQjtTQUNwRDtRQUNELFVBQVUsRUFBRTtZQUNWLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYztZQUM1QyxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQjtZQUNqRCxNQUFNLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQjtTQUNuRDtRQUNELElBQUksRUFBRTtZQUNKLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVztZQUN6QyxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFVBQVU7WUFDeEMsTUFBTSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUI7U0FDbkQ7S0FDRixDQUFDLEtBQUssQ0FBQyxJQUFJO1FBQ1YsS0FBSyxFQUFFLFNBQVM7UUFDaEIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsTUFBTSxFQUFFLFNBQVM7S0FDbEIsQ0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBVUYsSUFBTSxVQUFVLEdBQUcsMkJBQU0sQ0FBQyxDQUFDLENBQVksVUFBQyxFQUFnQjtRQUFkLEtBQUssV0FBQSxFQUFFLEtBQUssV0FBQTtJQUNwRCxJQUFNLFVBQVUsR0FBRyxhQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9DLE9BQU87UUFDTCxLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUs7UUFDdkIsYUFBYSxFQUFFO1lBQ2IsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLO1NBQ3hCO1FBQ0QsY0FBYyxFQUFFO1lBQ2QsS0FBSyxFQUFFLFVBQVUsQ0FBQyxNQUFNO1NBQ3pCO0tBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBRVUsUUFBQSxJQUFJLEdBQUcsZUFBSyxDQUFDLFVBQVUsQ0FBaUIsU0FBUyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUc7SUFDM0UsT0FBTyx1QkFBQyxVQUFVLHFCQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFDLFFBQVEsSUFBSyxLQUFLLEVBQUksQ0FBQztBQUM3RCxDQUFDLENBQUMsQ0FBQztBQUVILGtCQUFlLFlBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZUNvbmZpZyB9IGZyb20gJy4uLy4uL3RoZW1lLWNvbmZpZyc7XHJcblxyXG50eXBlIENvbG9yID0gJ3ByaW1hcnlCbHVlJyB8ICdwcmltYXJ5UmVkJyB8ICdoYXNoJyB8ICdpbmhlcml0JztcclxuXHJcbmNvbnN0IGdldFN0YXRlQ29sb3IgPSAodGhlbWUsIGNvbG9yOiBDb2xvcikgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICB7XHJcbiAgICAgIHByaW1hcnlCbHVlOiB7XHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXHJcbiAgICAgICAgaG92ZXI6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlCbHVlSG92ZXIsXHJcbiAgICAgICAgYWN0aXZlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5Qmx1ZUNsaWNrLFxyXG4gICAgICB9LFxyXG4gICAgICBwcmltYXJ5UmVkOiB7XHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWQsXHJcbiAgICAgICAgaG92ZXI6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWRIb3ZlcixcclxuICAgICAgICBhY3RpdmU6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWRDbGljayxcclxuICAgICAgfSxcclxuICAgICAgaGFzaDoge1xyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxyXG4gICAgICAgIGhvdmVyOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRSZWQsXHJcbiAgICAgICAgYWN0aXZlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5UmVkQ2xpY2ssXHJcbiAgICAgIH0sXHJcbiAgICB9W2NvbG9yXSB8fCB7XHJcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgIGhvdmVyOiAnaW5oZXJpdCcsXHJcbiAgICAgIGFjdGl2ZTogJ2luaGVyaXQnLFxyXG4gICAgfVxyXG4gICk7XHJcbn07XHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cclxuZXhwb3J0IGludGVyZmFjZSBMaW5rUHJvcHMgZXh0ZW5kcyBSZWFjdC5IVE1MQXR0cmlidXRlczxSZWY+IHtcclxuICBocmVmPzogc3RyaW5nO1xyXG4gIHRhcmdldD86IHN0cmluZztcclxuICBjb2xvcjogQ29sb3I7XHJcbn1cclxuXHJcbnR5cGUgUmVmID0gSFRNTEFuY2hvckVsZW1lbnQ7XHJcbmNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuYTxMaW5rUHJvcHM+KCh7IHRoZW1lLCBjb2xvciB9KSA9PiB7XHJcbiAgY29uc3Qgc3RhdGVDb2xvciA9IGdldFN0YXRlQ29sb3IodGhlbWUsIGNvbG9yKTtcclxuICByZXR1cm4ge1xyXG4gICAgY29sb3I6IHN0YXRlQ29sb3IuY29sb3IsXHJcbiAgICAnJjpob3ZlciA+IConOiB7XHJcbiAgICAgIGNvbG9yOiBzdGF0ZUNvbG9yLmhvdmVyLFxyXG4gICAgfSxcclxuICAgICcmOmFjdGl2ZSA+IConOiB7XHJcbiAgICAgIGNvbG9yOiBzdGF0ZUNvbG9yLmFjdGl2ZSxcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgTGluayA9IFJlYWN0LmZvcndhcmRSZWY8UmVmLCBMaW5rUHJvcHM+KGZ1bmN0aW9uIExpbmsocHJvcHMsIHJlZikge1xyXG4gIHJldHVybiA8U3R5bGVkTGluayByZWY9e3JlZn0gdGFyZ2V0PVwiX2JsYW5rXCIgey4uLnByb3BzfSAvPjtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xyXG4iXX0=