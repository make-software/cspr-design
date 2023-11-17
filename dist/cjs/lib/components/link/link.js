"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var match_size_1 = require("../../utils/match-size");
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
    var theme = _a.theme, color = _a.color, _b = _a.lineHeight, lineHeight = _b === void 0 ? 'sm' : _b;
    var stateColor = getStateColor(theme, color);
    return {
        lineHeight: (0, match_size_1.matchSize)({
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
exports.Link = react_1.default.forwardRef(function Link(props, ref) {
    return (0, jsx_runtime_1.jsx)(StyledLink, tslib_1.__assign({ ref: ref, target: "_blank" }, props));
});
exports.default = exports.Link;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9saW5rL2xpbmsudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLGdGQUF1QztBQUN2QyxxREFBaUQ7QUFJakQsSUFBTSxhQUFhLEdBQUcsVUFBQyxLQUFLLEVBQUUsS0FBWTtJQUN4QyxPQUFPLENBQ0w7UUFDRSxXQUFXLEVBQUU7WUFDWCxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7WUFDekMsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0I7WUFDbEQsTUFBTSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0I7U0FDcEQ7UUFDRCxVQUFVLEVBQUU7WUFDVixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWM7WUFDNUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUI7WUFDakQsTUFBTSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUI7U0FDbkQ7UUFDRCxJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7WUFDekMsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVO1lBQ3hDLE1BQU0sRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CO1NBQ25EO0tBQ0YsQ0FBQyxLQUFLLENBQUMsSUFBSTtRQUNWLEtBQUssRUFBRSxTQUFTO1FBQ2hCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLE1BQU0sRUFBRSxTQUFTO0tBQ2xCLENBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQVdGLElBQU0sVUFBVSxHQUFHLDJCQUFNLENBQUMsQ0FBQyxDQUFZLFVBQUMsRUFBbUM7UUFBakMsS0FBSyxXQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUUsa0JBQWlCLEVBQWpCLFVBQVUsbUJBQUcsSUFBSSxLQUFBO0lBQ3ZFLElBQU0sVUFBVSxHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0MsT0FBTztRQUNMLFVBQVUsRUFBRSxJQUFBLHNCQUFTLEVBQ2pCO1lBQ0UsRUFBRSxFQUFFLFFBQVE7WUFDWixFQUFFLEVBQUUsU0FBUztTQUNkLEVBQ0QsVUFBVSxDQUNiO1FBQ0QsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLO1FBQ3ZCLGFBQWEsRUFBRTtZQUNiLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSztTQUN4QjtRQUNELGNBQWMsRUFBRTtZQUNkLEtBQUssRUFBRSxVQUFVLENBQUMsTUFBTTtTQUN6QjtLQUNGLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQztBQUVVLFFBQUEsSUFBSSxHQUFHLGVBQUssQ0FBQyxVQUFVLENBQWlCLFNBQVMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHO0lBQzNFLE9BQU8sdUJBQUMsVUFBVSxxQkFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBQyxRQUFRLElBQUssS0FBSyxFQUFJLENBQUM7QUFDN0QsQ0FBQyxDQUFDLENBQUM7QUFFSCxrQkFBZSxZQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHttYXRjaFNpemV9IGZyb20gXCIuLi8uLi91dGlscy9tYXRjaC1zaXplXCI7XHJcblxyXG50eXBlIENvbG9yID0gJ3ByaW1hcnlCbHVlJyB8ICdwcmltYXJ5UmVkJyB8ICdoYXNoJyB8ICdpbmhlcml0JztcclxuXHJcbmNvbnN0IGdldFN0YXRlQ29sb3IgPSAodGhlbWUsIGNvbG9yOiBDb2xvcikgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICB7XHJcbiAgICAgIHByaW1hcnlCbHVlOiB7XHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXHJcbiAgICAgICAgaG92ZXI6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlCbHVlSG92ZXIsXHJcbiAgICAgICAgYWN0aXZlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5Qmx1ZUNsaWNrLFxyXG4gICAgICB9LFxyXG4gICAgICBwcmltYXJ5UmVkOiB7XHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWQsXHJcbiAgICAgICAgaG92ZXI6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWRIb3ZlcixcclxuICAgICAgICBhY3RpdmU6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWRDbGljayxcclxuICAgICAgfSxcclxuICAgICAgaGFzaDoge1xyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxyXG4gICAgICAgIGhvdmVyOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRSZWQsXHJcbiAgICAgICAgYWN0aXZlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5UmVkQ2xpY2ssXHJcbiAgICAgIH0sXHJcbiAgICB9W2NvbG9yXSB8fCB7XHJcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgIGhvdmVyOiAnaW5oZXJpdCcsXHJcbiAgICAgIGFjdGl2ZTogJ2luaGVyaXQnLFxyXG4gICAgfVxyXG4gICk7XHJcbn07XHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cclxuZXhwb3J0IGludGVyZmFjZSBMaW5rUHJvcHMgZXh0ZW5kcyBSZWFjdC5IVE1MQXR0cmlidXRlczxSZWY+IHtcclxuICBocmVmPzogc3RyaW5nO1xyXG4gIHRhcmdldD86IHN0cmluZztcclxuICBjb2xvcjogQ29sb3I7XHJcbiAgbGluZUhlaWdodD86ICd4cycgfCAnc20nO1xyXG59XHJcblxyXG50eXBlIFJlZiA9IEhUTUxBbmNob3JFbGVtZW50O1xyXG5jb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkLmE8TGlua1Byb3BzPigoeyB0aGVtZSwgY29sb3IsIGxpbmVIZWlnaHQgPSAnc20nIH0pID0+IHtcclxuICBjb25zdCBzdGF0ZUNvbG9yID0gZ2V0U3RhdGVDb2xvcih0aGVtZSwgY29sb3IpO1xyXG4gIHJldHVybiB7XHJcbiAgICBsaW5lSGVpZ2h0OiBtYXRjaFNpemUoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc206ICcxLjVyZW0nLFxyXG4gICAgICAgICAgeHM6ICcxLjI1cmVtJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpbmVIZWlnaHRcclxuICAgICksXHJcbiAgICBjb2xvcjogc3RhdGVDb2xvci5jb2xvcixcclxuICAgICcmOmhvdmVyID4gKic6IHtcclxuICAgICAgY29sb3I6IHN0YXRlQ29sb3IuaG92ZXIsXHJcbiAgICB9LFxyXG4gICAgJyY6YWN0aXZlID4gKic6IHtcclxuICAgICAgY29sb3I6IHN0YXRlQ29sb3IuYWN0aXZlLFxyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rID0gUmVhY3QuZm9yd2FyZFJlZjxSZWYsIExpbmtQcm9wcz4oZnVuY3Rpb24gTGluayhwcm9wcywgcmVmKSB7XHJcbiAgcmV0dXJuIDxTdHlsZWRMaW5rIHJlZj17cmVmfSB0YXJnZXQ9XCJfYmxhbmtcIiB7Li4ucHJvcHN9IC8+O1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbms7XHJcbiJdfQ==