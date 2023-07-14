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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9saW5rL2xpbmsudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLGdGQUF1QztBQUt2QyxJQUFNLGFBQWEsR0FBRyxVQUFDLEtBQUssRUFBRSxLQUFZO0lBQ3hDLE9BQU8sQ0FDTDtRQUNFLFdBQVcsRUFBRTtZQUNYLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVztZQUN6QyxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQjtZQUNsRCxNQUFNLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQjtTQUNwRDtRQUNELFVBQVUsRUFBRTtZQUNWLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYztZQUM1QyxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQjtZQUNqRCxNQUFNLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQjtTQUNuRDtRQUNELElBQUksRUFBRTtZQUNKLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVztZQUN6QyxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFVBQVU7WUFDeEMsTUFBTSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUI7U0FDbkQ7S0FDRixDQUFDLEtBQUssQ0FBQyxJQUFJO1FBQ1YsS0FBSyxFQUFFLFNBQVM7UUFDaEIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsTUFBTSxFQUFFLFNBQVM7S0FDbEIsQ0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBVUYsSUFBTSxVQUFVLEdBQUcsMkJBQU0sQ0FBQyxDQUFDLENBQVksVUFBQyxFQUFnQjtRQUFkLEtBQUssV0FBQSxFQUFFLEtBQUssV0FBQTtJQUNwRCxJQUFNLFVBQVUsR0FBRyxhQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9DLE9BQU87UUFDTCxLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUs7UUFDdkIsYUFBYSxFQUFFO1lBQ2IsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLO1NBQ3hCO1FBQ0QsY0FBYyxFQUFFO1lBQ2QsS0FBSyxFQUFFLFVBQVUsQ0FBQyxNQUFNO1NBQ3pCO0tBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBRVUsUUFBQSxJQUFJLEdBQUcsZUFBSyxDQUFDLFVBQVUsQ0FBaUIsU0FBUyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUc7SUFDM0UsT0FBTyx1QkFBQyxVQUFVLHFCQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFDLFFBQVEsSUFBSyxLQUFLLEVBQUksQ0FBQztBQUM3RCxDQUFDLENBQUMsQ0FBQztBQUVILGtCQUFlLFlBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHRoZW1lQ29uZmlnIH0gZnJvbSAnLi4vLi4vdGhlbWUtY29uZmlnJztcblxudHlwZSBDb2xvciA9ICdwcmltYXJ5Qmx1ZScgfCAncHJpbWFyeVJlZCcgfCAnaGFzaCcgfCAnaW5oZXJpdCc7XG5cbmNvbnN0IGdldFN0YXRlQ29sb3IgPSAodGhlbWUsIGNvbG9yOiBDb2xvcikgPT4ge1xuICByZXR1cm4gKFxuICAgIHtcbiAgICAgIHByaW1hcnlCbHVlOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICAgICAgICBob3ZlcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeUJsdWVIb3ZlcixcbiAgICAgICAgYWN0aXZlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5Qmx1ZUNsaWNrLFxuICAgICAgfSxcbiAgICAgIHByaW1hcnlSZWQ6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWQsXG4gICAgICAgIGhvdmVyOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5UmVkSG92ZXIsXG4gICAgICAgIGFjdGl2ZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZENsaWNrLFxuICAgICAgfSxcbiAgICAgIGhhc2g6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXG4gICAgICAgIGhvdmVyOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRSZWQsXG4gICAgICAgIGFjdGl2ZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZENsaWNrLFxuICAgICAgfSxcbiAgICB9W2NvbG9yXSB8fCB7XG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgaG92ZXI6ICdpbmhlcml0JyxcbiAgICAgIGFjdGl2ZTogJ2luaGVyaXQnLFxuICAgIH1cbiAgKTtcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBMaW5rUHJvcHMgZXh0ZW5kcyBSZWFjdC5IVE1MQXR0cmlidXRlczxSZWY+IHtcbiAgaHJlZj86IHN0cmluZztcbiAgdGFyZ2V0Pzogc3RyaW5nO1xuICBjb2xvcjogQ29sb3I7XG59XG5cbnR5cGUgUmVmID0gSFRNTEFuY2hvckVsZW1lbnQ7XG5jb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkLmE8TGlua1Byb3BzPigoeyB0aGVtZSwgY29sb3IgfSkgPT4ge1xuICBjb25zdCBzdGF0ZUNvbG9yID0gZ2V0U3RhdGVDb2xvcih0aGVtZSwgY29sb3IpO1xuICByZXR1cm4ge1xuICAgIGNvbG9yOiBzdGF0ZUNvbG9yLmNvbG9yLFxuICAgICcmOmhvdmVyID4gKic6IHtcbiAgICAgIGNvbG9yOiBzdGF0ZUNvbG9yLmhvdmVyLFxuICAgIH0sXG4gICAgJyY6YWN0aXZlID4gKic6IHtcbiAgICAgIGNvbG9yOiBzdGF0ZUNvbG9yLmFjdGl2ZSxcbiAgICB9LFxuICB9O1xufSk7XG5cbmV4cG9ydCBjb25zdCBMaW5rID0gUmVhY3QuZm9yd2FyZFJlZjxSZWYsIExpbmtQcm9wcz4oZnVuY3Rpb24gTGluayhwcm9wcywgcmVmKSB7XG4gIHJldHVybiA8U3R5bGVkTGluayByZWY9e3JlZn0gdGFyZ2V0PVwiX2JsYW5rXCIgey4uLnByb3BzfSAvPjtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuIl19