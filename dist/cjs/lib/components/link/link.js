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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9saW5rL2xpbmsudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLGdGQUF1QztBQUN2QyxxREFBaUQ7QUFJakQsSUFBTSxhQUFhLEdBQUcsVUFBQyxLQUFLLEVBQUUsS0FBWTtJQUN4QyxPQUFPLENBQ0w7UUFDRSxXQUFXLEVBQUU7WUFDWCxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7WUFDekMsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0I7WUFDbEQsTUFBTSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0I7U0FDcEQ7UUFDRCxVQUFVLEVBQUU7WUFDVixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWM7WUFDNUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUI7WUFDakQsTUFBTSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUI7U0FDbkQ7UUFDRCxJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7WUFDekMsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVO1lBQ3hDLE1BQU0sRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CO1NBQ25EO0tBQ0YsQ0FBQyxLQUFLLENBQUMsSUFBSTtRQUNWLEtBQUssRUFBRSxTQUFTO1FBQ2hCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLE1BQU0sRUFBRSxTQUFTO0tBQ2xCLENBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQVdGLElBQU0sVUFBVSxHQUFHLDJCQUFNLENBQUMsQ0FBQyxDQUFZLFVBQUMsRUFBbUM7UUFBakMsS0FBSyxXQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUUsa0JBQWlCLEVBQWpCLFVBQVUsbUJBQUcsSUFBSSxLQUFBO0lBQ3ZFLElBQU0sVUFBVSxHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0MsT0FBTztRQUNMLFVBQVUsRUFBRSxJQUFBLHNCQUFTLEVBQ2pCO1lBQ0UsRUFBRSxFQUFFLFFBQVE7WUFDWixFQUFFLEVBQUUsU0FBUztTQUNkLEVBQ0QsVUFBVSxDQUNiO1FBQ0QsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLO1FBQ3ZCLGFBQWEsRUFBRTtZQUNiLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSztTQUN4QjtRQUNELGNBQWMsRUFBRTtZQUNkLEtBQUssRUFBRSxVQUFVLENBQUMsTUFBTTtTQUN6QjtLQUNGLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQztBQUVVLFFBQUEsSUFBSSxHQUFHLGVBQUssQ0FBQyxVQUFVLENBQWlCLFNBQVMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHO0lBQzNFLE9BQU8sdUJBQUMsVUFBVSxxQkFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBQyxRQUFRLElBQUssS0FBSyxFQUFJLENBQUM7QUFDN0QsQ0FBQyxDQUFDLENBQUM7QUFFSCxrQkFBZSxZQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge21hdGNoU2l6ZX0gZnJvbSBcIi4uLy4uL3V0aWxzL21hdGNoLXNpemVcIjtcblxudHlwZSBDb2xvciA9ICdwcmltYXJ5Qmx1ZScgfCAncHJpbWFyeVJlZCcgfCAnaGFzaCcgfCAnaW5oZXJpdCc7XG5cbmNvbnN0IGdldFN0YXRlQ29sb3IgPSAodGhlbWUsIGNvbG9yOiBDb2xvcikgPT4ge1xuICByZXR1cm4gKFxuICAgIHtcbiAgICAgIHByaW1hcnlCbHVlOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICAgICAgICBob3ZlcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeUJsdWVIb3ZlcixcbiAgICAgICAgYWN0aXZlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5Qmx1ZUNsaWNrLFxuICAgICAgfSxcbiAgICAgIHByaW1hcnlSZWQ6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWQsXG4gICAgICAgIGhvdmVyOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5UmVkSG92ZXIsXG4gICAgICAgIGFjdGl2ZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZENsaWNrLFxuICAgICAgfSxcbiAgICAgIGhhc2g6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXG4gICAgICAgIGhvdmVyOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRSZWQsXG4gICAgICAgIGFjdGl2ZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZENsaWNrLFxuICAgICAgfSxcbiAgICB9W2NvbG9yXSB8fCB7XG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgaG92ZXI6ICdpbmhlcml0JyxcbiAgICAgIGFjdGl2ZTogJ2luaGVyaXQnLFxuICAgIH1cbiAgKTtcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBMaW5rUHJvcHMgZXh0ZW5kcyBSZWFjdC5IVE1MQXR0cmlidXRlczxSZWY+IHtcbiAgaHJlZj86IHN0cmluZztcbiAgdGFyZ2V0Pzogc3RyaW5nO1xuICBjb2xvcjogQ29sb3I7XG4gIGxpbmVIZWlnaHQ/OiAneHMnIHwgJ3NtJztcbn1cblxudHlwZSBSZWYgPSBIVE1MQW5jaG9yRWxlbWVudDtcbmNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuYTxMaW5rUHJvcHM+KCh7IHRoZW1lLCBjb2xvciwgbGluZUhlaWdodCA9ICdzbScgfSkgPT4ge1xuICBjb25zdCBzdGF0ZUNvbG9yID0gZ2V0U3RhdGVDb2xvcih0aGVtZSwgY29sb3IpO1xuICByZXR1cm4ge1xuICAgIGxpbmVIZWlnaHQ6IG1hdGNoU2l6ZShcbiAgICAgICAge1xuICAgICAgICAgIHNtOiAnMS41cmVtJyxcbiAgICAgICAgICB4czogJzEuMjVyZW0nLFxuICAgICAgICB9LFxuICAgICAgICBsaW5lSGVpZ2h0XG4gICAgKSxcbiAgICBjb2xvcjogc3RhdGVDb2xvci5jb2xvcixcbiAgICAnJjpob3ZlciA+IConOiB7XG4gICAgICBjb2xvcjogc3RhdGVDb2xvci5ob3ZlcixcbiAgICB9LFxuICAgICcmOmFjdGl2ZSA+IConOiB7XG4gICAgICBjb2xvcjogc3RhdGVDb2xvci5hY3RpdmUsXG4gICAgfSxcbiAgfTtcbn0pO1xuXG5leHBvcnQgY29uc3QgTGluayA9IFJlYWN0LmZvcndhcmRSZWY8UmVmLCBMaW5rUHJvcHM+KGZ1bmN0aW9uIExpbmsocHJvcHMsIHJlZikge1xuICByZXR1cm4gPFN0eWxlZExpbmsgcmVmPXtyZWZ9IHRhcmdldD1cIl9ibGFua1wiIHsuLi5wcm9wc30gLz47XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTGluaztcbiJdfQ==