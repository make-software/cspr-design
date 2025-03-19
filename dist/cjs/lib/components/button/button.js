"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var match_size_1 = require("../../utils/match-size");
var BaseButton = styled_components_1.default.button(function (_a) {
    var theme = _a.theme, disabled = _a.disabled, _b = _a.height, height = _b === void 0 ? '36' : _b, _c = _a.width, width = _c === void 0 ? '100%' : _c, _d = _a.lineHeight, lineHeight = _d === void 0 ? 'sm' : _d;
    return (tslib_1.__assign({ display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', borderRadius: theme.borderRadius.base, fontFamily: theme.typography.fontFamily.primary, fontWeight: (0, match_size_1.matchSize)({
            '24': theme.typography.fontWeight.medium,
            '36': theme.typography.fontWeight.medium,
            '40': theme.typography.fontWeight.semiBold,
        }, height), fontSize: (0, match_size_1.matchSize)({ '24': '0.688rem', '36': '0.875rem', '40': '0.875rem' }, height), minHeight: (0, match_size_1.matchSize)({ '24': 24, '36': 36, '40': 40 }, height), lineHeight: (0, match_size_1.matchSize)({
            sm: '1.5rem',
            xs: '1.25rem',
        }, lineHeight), padding: (0, match_size_1.matchSize)({ '24': '2px 10px', '36': '8px 25px', '40': '10px 30px' }, height), width: (0, match_size_1.matchSize)({
            '100': '100px',
            '120': '120px',
            '140': '140px',
            '176': '176px',
            '100%': '100%',
        }, width), ':focus': {
            outline: 'none',
        } }, (disabled && {
        pointerEvents: 'none',
    })));
});
var PrimaryBlueButton = (0, styled_components_1.default)(BaseButton)(function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return (tslib_1.__assign({ color: theme.styleguideColors.contentOnFill, background: theme.styleguideColors.contentBlue, ': hover': {
            background: theme.styleguideColors.fillPrimaryBlueHover,
        }, ': active': {
            background: theme.styleguideColors.fillPrimaryBlueClick,
        } }, (disabled && {
        color: theme.styleguideColors.contentTertiary,
        background: theme.styleguideColors.backgroundSecondary,
    })));
});
var PrimaryRedButton = (0, styled_components_1.default)(BaseButton)(function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return (tslib_1.__assign({ color: theme.styleguideColors.contentOnFill, background: theme.styleguideColors.fillPrimaryRed, ': hover': {
            background: theme.styleguideColors.fillPrimaryRedHover,
        }, ': active': {
            background: theme.styleguideColors.fillPrimaryRedClick,
        } }, (disabled && {
        color: theme.styleguideColors.contentTertiary,
        background: theme.styleguideColors.fillSecondary,
    })));
});
var SecondaryBlueButton = (0, styled_components_1.default)(BaseButton)(function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return (tslib_1.__assign({ color: theme.styleguideColors.contentBlue, background: theme.styleguideColors.backgroundSecondary, ': hover': {
            background: theme.styleguideColors.fillSecondaryBlueHover,
            borderColor: 'transparent',
        }, ': active': {
            background: theme.styleguideColors.fillSecondaryBlueClick,
            borderColor: 'transparent',
        } }, (disabled && {
        color: theme.styleguideColors.contentTertiary,
        background: theme.styleguideColors.backgroundPrimary,
    })));
});
var SecondaryRedButton = (0, styled_components_1.default)(BaseButton)(function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return (tslib_1.__assign({ color: theme.styleguideColors.contentRed, background: theme.styleguideColors.fillSecondary, ': hover': {
            background: theme.styleguideColors.fillSecondaryRedHover,
        }, ': active': {
            background: theme.styleguideColors.fillSecondaryRedClick,
        } }, (disabled && {
        color: theme.styleguideColors.contentTertiary,
        background: theme.styleguideColors.fillSecondary,
    })));
});
var UtilityButton = (0, styled_components_1.default)(BaseButton)(function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return (tslib_1.__assign({ color: theme.styleguideColors.fillPrimaryRed, background: theme.styleguideColors.backgroundSecondary, ': hover': {
            background: theme.styleguideColors.fillSecondaryRedHover,
        }, ': active': {
            background: theme.styleguideColors.fillSecondaryRedClick,
        } }, (disabled && {
        color: theme.styleguideColors.contentTertiary,
        background: theme.styleguideColors.backgroundPrimary,
    })));
});
var COMPONENT_MAP_BY_COLOR = {
    primaryBlue: PrimaryBlueButton,
    primaryRed: PrimaryRedButton,
    secondaryBlue: SecondaryBlueButton,
    secondaryRed: SecondaryRedButton,
    utility: UtilityButton,
};
exports.Button = react_1.default.forwardRef(function Button(_a, ref) {
    var _b = _a.color, color = _b === void 0 ? 'primaryBlue' : _b, props = tslib_1.__rest(_a, ["color"]);
    var ButtonComponent = COMPONENT_MAP_BY_COLOR[color] || PrimaryBlueButton;
    return (0, jsx_runtime_1.jsx)(ButtonComponent, tslib_1.__assign({ ref: ref, color: color }, props));
});
exports.default = exports.Button;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLGdGQUF1QztBQUV2QyxxREFBbUQ7QUFFbkQsSUFBTSxVQUFVLEdBQUcsMkJBQU0sQ0FBQyxNQUFNLENBQzlCLFVBQUMsRUFBcUU7UUFBbkUsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsY0FBYSxFQUFiLE1BQU0sbUJBQUcsSUFBSSxLQUFBLEVBQUUsYUFBYyxFQUFkLEtBQUssbUJBQUcsTUFBTSxLQUFBLEVBQUUsa0JBQWlCLEVBQWpCLFVBQVUsbUJBQUcsSUFBSSxLQUFBO0lBQU8sT0FBQSxvQkFDekUsT0FBTyxFQUFFLE1BQU0sRUFDZixVQUFVLEVBQUUsUUFBUSxFQUNwQixjQUFjLEVBQUUsUUFBUSxFQUN4QixNQUFNLEVBQUUsTUFBTSxFQUNkLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFDckMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFDL0MsVUFBVSxFQUFFLElBQUEsc0JBQVMsRUFDbkI7WUFDRSxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTTtZQUN4QyxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTTtZQUN4QyxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsUUFBUTtTQUMzQyxFQUNELE1BQU0sQ0FDUCxFQUNELFFBQVEsRUFBRSxJQUFBLHNCQUFTLEVBQ2pCLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFDeEQsTUFBTSxDQUNQLEVBQ0QsU0FBUyxFQUFFLElBQUEs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LFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCO1NBQ3pELEVBQ0QsVUFBVSxFQUFFO1lBQ1YsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUI7U0FDekQsSUFFRSxDQUFDLFFBQVEsSUFBSTtRQUNkLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtRQUM3QyxVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtLQUNyRCxDQUFDLEVBQ0Y7QUFmdUIsQ0FldkIsQ0FDSCxDQUFDO0FBRUYsSUFBTSxzQkFBc0IsR0FBRztJQUM3QixXQUFXLEVBQUUsaUJBQWlCO0lBQzlCLFVBQVUsRUFBRSxnQkFBZ0I7SUFDNUIsYUFBYSxFQUFFLG1CQUFtQjtJQUNsQyxZQUFZLEVBQUUsa0JBQWtCO0lBQ2hDLE9BQU8sRUFBRSxhQUFhO0NBQ3ZCLENBQUM7QUFzQlcsUUFBQSxNQUFNLEdBQUcsZUFBSyxDQUFDLFVBQVUsQ0FBbUIsU0FBUyxNQUFNLENBQ3RFLEVBQWdELEVBQ2hELEdBQUc7SUFERCxJQUFBLGFBQXFCLEVBQXJCLEtBQUssbUJBQUcsYUFBYSxLQUFBLEVBQUssS0FBSyxzQkFBakMsU0FBbUMsQ0FBRjtJQUdqQyxJQUFNLGVBQWUsR0FBRyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxpQkFBaUIsQ0FBQztJQUMzRSxPQUFPLHVCQUFDLGVBQWUscUJBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxJQUFNLEtBQUssRUFBSSxDQUFDO0FBQ2hFLENBQUMsQ0FBQyxDQUFDO0FBRUgsa0JBQWUsY0FBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBtYXRjaFNpemUgfSBmcm9tICcuLi8uLi91dGlscy9tYXRjaC1zaXplJztcblxuY29uc3QgQmFzZUJ1dHRvbiA9IHN0eWxlZC5idXR0b248QnV0dG9uUHJvcHM+KFxuICAoeyB0aGVtZSwgZGlzYWJsZWQsIGhlaWdodCA9ICczNicsIHdpZHRoID0gJzEwMCUnLCBsaW5lSGVpZ2h0ID0gJ3NtJyB9KSA9PiAoe1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHkucHJpbWFyeSxcbiAgICBmb250V2VpZ2h0OiBtYXRjaFNpemUoXG4gICAgICB7XG4gICAgICAgICcyNCc6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5tZWRpdW0sXG4gICAgICAgICczNic6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5tZWRpdW0sXG4gICAgICAgICc0MCc6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5zZW1pQm9sZCxcbiAgICAgIH0sXG4gICAgICBoZWlnaHRcbiAgICApLFxuICAgIGZvbnRTaXplOiBtYXRjaFNpemUoXG4gICAgICB7ICcyNCc6ICcwLjY4OHJlbScsICczNic6ICcwLjg3NXJlbScsICc0MCc6ICcwLjg3NXJlbScgfSxcbiAgICAgIGhlaWdodFxuICAgICksXG4gICAgbWluSGVpZ2h0OiBtYXRjaFNpemUoeyAnMjQnOiAyNCwgJzM2JzogMzYsICc0MCc6IDQwIH0sIGhlaWdodCksXG4gICAgbGluZUhlaWdodDogbWF0Y2hTaXplKFxuICAgICAge1xuICAgICAgICBzbTogJzEuNXJlbScsXG4gICAgICAgIHhzOiAnMS4yNXJlbScsXG4gICAgICB9LFxuICAgICAgbGluZUhlaWdodFxuICAgICksXG4gICAgcGFkZGluZzogbWF0Y2hTaXplKFxuICAgICAgeyAnMjQnOiAnMnB4IDEwcHgnLCAnMzYnOiAnOHB4IDI1cHgnLCAnNDAnOiAnMTBweCAzMHB4JyB9LFxuICAgICAgaGVpZ2h0XG4gICAgKSxcbiAgICB3aWR0aDogbWF0Y2hTaXplKFxuICAgICAge1xuICAgICAgICAnMTAwJzogJzEwMHB4JyxcbiAgICAgICAgJzEyMCc6ICcxMjBweCcsXG4gICAgICAgICcxNDAnOiAnMTQwcHgnLFxuICAgICAgICAnMTc2JzogJzE3NnB4JyxcbiAgICAgICAgJzEwMCUnOiAnMTAwJScsXG4gICAgICB9LFxuICAgICAgd2lkdGhcbiAgICApLFxuXG4gICAgJzpmb2N1cyc6IHtcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICB9LFxuXG4gICAgLi4uKGRpc2FibGVkICYmIHtcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICB9KSxcbiAgfSlcbik7XG5cbmNvbnN0IFByaW1hcnlCbHVlQnV0dG9uID0gc3R5bGVkKEJhc2VCdXR0b24pPEJ1dHRvblByb3BzPihcbiAgKHsgdGhlbWUsIGRpc2FibGVkIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudE9uRmlsbCxcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuXG4gICAgJzogaG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5Qmx1ZUhvdmVyLFxuICAgIH0sXG4gICAgJzogYWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeUJsdWVDbGljayxcbiAgICB9LFxuXG4gICAgLi4uKGRpc2FibGVkICYmIHtcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFNlY29uZGFyeSxcbiAgICB9KSxcbiAgfSlcbik7XG5cbmNvbnN0IFByaW1hcnlSZWRCdXR0b24gPSBzdHlsZWQoQmFzZUJ1dHRvbik8QnV0dG9uUHJvcHM+KFxuICAoeyB0aGVtZSwgZGlzYWJsZWQgfSkgPT4gKHtcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50T25GaWxsLFxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWQsXG5cbiAgICAnOiBob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWRIb3ZlcixcbiAgICB9LFxuICAgICc6IGFjdGl2ZSc6IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWRDbGljayxcbiAgICB9LFxuXG4gICAgLi4uKGRpc2FibGVkICYmIHtcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcbiAgICB9KSxcbiAgfSlcbik7XG5cbmNvbnN0IFNlY29uZGFyeUJsdWVCdXR0b24gPSBzdHlsZWQoQmFzZUJ1dHRvbik8QnV0dG9uUHJvcHM+KFxuICAoeyB0aGVtZSwgZGlzYWJsZWQgfSkgPT4gKHtcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRTZWNvbmRhcnksXG5cbiAgICAnOiBob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeUJsdWVIb3ZlcixcbiAgICAgIGJvcmRlckNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIH0sXG4gICAgJzogYWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5Qmx1ZUNsaWNrLFxuICAgICAgYm9yZGVyQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgfSxcblxuICAgIC4uLihkaXNhYmxlZCAmJiB7XG4gICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgIH0pLFxuICB9KVxuKTtcblxuY29uc3QgU2Vjb25kYXJ5UmVkQnV0dG9uID0gc3R5bGVkKEJhc2VCdXR0b24pPEJ1dHRvblByb3BzPihcbiAgKHsgdGhlbWUsIGRpc2FibGVkIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFJlZCxcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG5cbiAgICAnOiBob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeVJlZEhvdmVyLFxuICAgIH0sXG4gICAgJzogYWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5UmVkQ2xpY2ssXG4gICAgfSxcblxuICAgIC4uLihkaXNhYmxlZCAmJiB7XG4gICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gICAgfSksXG4gIH0pXG4pO1xuXG5jb25zdCBVdGlsaXR5QnV0dG9uID0gc3R5bGVkKEJhc2VCdXR0b24pPEJ1dHRvblByb3BzPihcbiAgKHsgdGhlbWUsIGRpc2FibGVkIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWQsXG4gICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kU2Vjb25kYXJ5LFxuXG4gICAgJzogaG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnlSZWRIb3ZlcixcbiAgICB9LFxuICAgICc6IGFjdGl2ZSc6IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeVJlZENsaWNrLFxuICAgIH0sXG5cbiAgICAuLi4oZGlzYWJsZWQgJiYge1xuICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxuICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICB9KSxcbiAgfSlcbik7XG5cbmNvbnN0IENPTVBPTkVOVF9NQVBfQllfQ09MT1IgPSB7XG4gIHByaW1hcnlCbHVlOiBQcmltYXJ5Qmx1ZUJ1dHRvbixcbiAgcHJpbWFyeVJlZDogUHJpbWFyeVJlZEJ1dHRvbixcbiAgc2Vjb25kYXJ5Qmx1ZTogU2Vjb25kYXJ5Qmx1ZUJ1dHRvbixcbiAgc2Vjb25kYXJ5UmVkOiBTZWNvbmRhcnlSZWRCdXR0b24sXG4gIHV0aWxpdHk6IFV0aWxpdHlCdXR0b24sXG59O1xuXG5leHBvcnQgdHlwZSBCdXR0b25TaXplID0gJ3NtYWxsJyB8ICdub3JtYWwnIHwgJ2JpZyc7XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBCdXR0b25Qcm9wc1xuICBleHRlbmRzIFJlYWN0LkJ1dHRvbkhUTUxBdHRyaWJ1dGVzPEhUTUxCdXR0b25FbGVtZW50PiB7XG4gIG9uQ2xpY2s/OiAoZXYpID0+IHZvaWQ7XG4gIGNvbG9yPzpcbiAgICB8ICdwcmltYXJ5Qmx1ZSdcbiAgICB8ICdwcmltYXJ5UmVkJ1xuICAgIHwgJ3NlY29uZGFyeUJsdWUnXG4gICAgfCAnc2Vjb25kYXJ5UmVkJ1xuICAgIHwgJ3V0aWxpdHknO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGhlaWdodD86ICcyNCcgfCAnMzYnIHwgJzQwJztcbiAgd2lkdGg/OiAnMTAwJyB8ICcxMjAnIHwgJzE0MCcgfCAnMTc2JyB8ICcxMDAlJztcbiAgbGluZUhlaWdodD86ICd4cycgfCAnc20nO1xufVxuXG50eXBlIFJlZiA9IEhUTUxCdXR0b25FbGVtZW50O1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZjxSZWYsIEJ1dHRvblByb3BzPihmdW5jdGlvbiBCdXR0b24oXG4gIHsgY29sb3IgPSAncHJpbWFyeUJsdWUnLCAuLi5wcm9wcyB9OiBCdXR0b25Qcm9wcyxcbiAgcmVmXG4pIHtcbiAgY29uc3QgQnV0dG9uQ29tcG9uZW50ID0gQ09NUE9ORU5UX01BUF9CWV9DT0xPUltjb2xvcl0gfHwgUHJpbWFyeUJsdWVCdXR0b247XG4gIHJldHVybiA8QnV0dG9uQ29tcG9uZW50IHJlZj17cmVmfSBjb2xvcj17Y29sb3J9IHsuLi5wcm9wc30gLz47XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl19