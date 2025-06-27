"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var match_size_1 = require("../../utils/match-size");
var BaseButton = styled_components_1.default.button(function (_a) {
    var theme = _a.theme, disabled = _a.disabled, _b = _a.height, height = _b === void 0 ? '36' : _b, _c = _a.width, width = _c === void 0 ? '100%' : _c, _d = _a.lineHeight, lineHeight = _d === void 0 ? 'sm' : _d, _e = _a.hasOutline, hasOutline = _e === void 0 ? false : _e;
    return (tslib_1.__assign(tslib_1.__assign({ display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', borderRadius: theme.borderRadius.base, fontFamily: theme.typography.fontFamily.primary, fontWeight: (0, match_size_1.matchSize)({
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
        }, width) }, (!hasOutline && {
        ':focus': {
            outline: 'none',
        }
    })), (disabled && {
        pointerEvents: 'none',
    })));
});
var PrimaryBlueButton = (0, styled_components_1.default)(BaseButton)(function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return (tslib_1.__assign({ color: theme.styleguideColors.contentOnFill, background: theme.styleguideColors.fillPrimaryBlue, ': hover': {
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
    return (0, jsx_runtime_1.jsx)(ButtonComponent, tslib_1.__assign({ ref: ref, color: color, "aria-disabled": !!props.disabled, tabIndex: 0 }, props));
});
exports.default = exports.Button;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLGdGQUF1QztBQUV2QyxxREFBbUQ7QUFFbkQsSUFBTSxVQUFVLEdBQUcsMkJBQU0sQ0FBQyxNQUFNLENBQzlCLFVBQUMsRUFBeUY7UUFBdkYsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsY0FBYSxFQUFiLE1BQU0sbUJBQUcsSUFBSSxLQUFBLEVBQUUsYUFBYyxFQUFkLEtBQUssbUJBQUcsTUFBTSxLQUFBLEVBQUUsa0JBQWlCLEVBQWpCLFVBQVUsbUJBQUcsSUFBSSxLQUFBLEVBQUUsa0JBQWtCLEVBQWxCLFVBQVUsbUJBQUcsS0FBSyxLQUFBO0lBQU8sT0FBQSxxQ0FDN0YsT0FBTyxFQUFFLE1BQU0sRUFDZixVQUFVLEVBQUUsUUFBUSxFQUNwQixjQUFjLEVBQUUsUUFBUSxFQUN4QixNQUFNLEVBQUUsTUFBTSxFQUNkLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFDckMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFDL0MsVUFBVSxFQUFFLElBQUEsc0JBQVMsRUFDbkI7WUFDRSxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTTtZQUN4QyxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTTtZQUN4QyxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsUUFBUTtTQUMzQyxFQUNELE1BQU0sQ0FDUCxFQUNELFFBQVEsRUFBRSxJQUFBLHNCQUFTLEVBQ2pCLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxVQUFVLEVB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YWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBtYXRjaFNpemUgfSBmcm9tICcuLi8uLi91dGlscy9tYXRjaC1zaXplJztcblxuY29uc3QgQmFzZUJ1dHRvbiA9IHN0eWxlZC5idXR0b248QnV0dG9uUHJvcHM+KFxuICAoeyB0aGVtZSwgZGlzYWJsZWQsIGhlaWdodCA9ICczNicsIHdpZHRoID0gJzEwMCUnLCBsaW5lSGVpZ2h0ID0gJ3NtJywgaGFzT3V0bGluZSA9IGZhbHNlIH0pID0+ICh7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseS5wcmltYXJ5LFxuICAgIGZvbnRXZWlnaHQ6IG1hdGNoU2l6ZShcbiAgICAgIHtcbiAgICAgICAgJzI0JzogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Lm1lZGl1bSxcbiAgICAgICAgJzM2JzogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Lm1lZGl1bSxcbiAgICAgICAgJzQwJzogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LnNlbWlCb2xkLFxuICAgICAgfSxcbiAgICAgIGhlaWdodFxuICAgICksXG4gICAgZm9udFNpemU6IG1hdGNoU2l6ZShcbiAgICAgIHsgJzI0JzogJzAuNjg4cmVtJywgJzM2JzogJzAuODc1cmVtJywgJzQwJzogJzAuODc1cmVtJyB9LFxuICAgICAgaGVpZ2h0XG4gICAgKSxcbiAgICBtaW5IZWlnaHQ6IG1hdGNoU2l6ZSh7ICcyNCc6IDI0LCAnMzYnOiAzNiwgJzQwJzogNDAgfSwgaGVpZ2h0KSxcbiAgICBsaW5lSGVpZ2h0OiBtYXRjaFNpemUoXG4gICAgICB7XG4gICAgICAgIHNtOiAnMS41cmVtJyxcbiAgICAgICAgeHM6ICcxLjI1cmVtJyxcbiAgICAgIH0sXG4gICAgICBsaW5lSGVpZ2h0XG4gICAgKSxcbiAgICBwYWRkaW5nOiBtYXRjaFNpemUoXG4gICAgICB7ICcyNCc6ICcycHggMTBweCcsICczNic6ICc4cHggMjVweCcsICc0MCc6ICcxMHB4IDMwcHgnIH0sXG4gICAgICBoZWlnaHRcbiAgICApLFxuICAgIHdpZHRoOiBtYXRjaFNpemUoXG4gICAgICB7XG4gICAgICAgICcxMDAnOiAnMTAwcHgnLFxuICAgICAgICAnMTIwJzogJzEyMHB4JyxcbiAgICAgICAgJzE0MCc6ICcxNDBweCcsXG4gICAgICAgICcxNzYnOiAnMTc2cHgnLFxuICAgICAgICAnMTAwJSc6ICcxMDAlJyxcbiAgICAgIH0sXG4gICAgICB3aWR0aFxuICAgICksXG5cbiAgICAuLi4oIWhhc091dGxpbmUgJiYge1xuICAgICAgICAnOmZvY3VzJzoge1xuICAgICAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICB9XG4gICAgfSksXG5cbiAgICAuLi4oZGlzYWJsZWQgJiYge1xuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIH0pLFxuICB9KVxuKTtcblxuY29uc3QgUHJpbWFyeUJsdWVCdXR0b24gPSBzdHlsZWQoQmFzZUJ1dHRvbik8QnV0dG9uUHJvcHM+KFxuICAoeyB0aGVtZSwgZGlzYWJsZWQgfSkgPT4gKHtcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50T25GaWxsLFxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlCbHVlLFxuXG4gICAgJzogaG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5Qmx1ZUhvdmVyLFxuICAgIH0sXG4gICAgJzogYWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeUJsdWVDbGljayxcbiAgICB9LFxuXG4gICAgLi4uKGRpc2FibGVkICYmIHtcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFNlY29uZGFyeSxcbiAgICB9KSxcbiAgfSlcbik7XG5cbmNvbnN0IFByaW1hcnlSZWRCdXR0b24gPSBzdHlsZWQoQmFzZUJ1dHRvbik8QnV0dG9uUHJvcHM+KFxuICAoeyB0aGVtZSwgZGlzYWJsZWQgfSkgPT4gKHtcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50T25GaWxsLFxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWQsXG5cbiAgICAnOiBob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWRIb3ZlcixcbiAgICB9LFxuICAgICc6IGFjdGl2ZSc6IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWRDbGljayxcbiAgICB9LFxuXG4gICAgLi4uKGRpc2FibGVkICYmIHtcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcbiAgICB9KSxcbiAgfSlcbik7XG5cbmNvbnN0IFNlY29uZGFyeUJsdWVCdXR0b24gPSBzdHlsZWQoQmFzZUJ1dHRvbik8QnV0dG9uUHJvcHM+KFxuICAoeyB0aGVtZSwgZGlzYWJsZWQgfSkgPT4gKHtcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRTZWNvbmRhcnksXG5cbiAgICAnOiBob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeUJsdWVIb3ZlcixcbiAgICAgIGJvcmRlckNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIH0sXG4gICAgJzogYWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5Qmx1ZUNsaWNrLFxuICAgICAgYm9yZGVyQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgfSxcblxuICAgIC4uLihkaXNhYmxlZCAmJiB7XG4gICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgIH0pLFxuICB9KVxuKTtcblxuY29uc3QgU2Vjb25kYXJ5UmVkQnV0dG9uID0gc3R5bGVkKEJhc2VCdXR0b24pPEJ1dHRvblByb3BzPihcbiAgKHsgdGhlbWUsIGRpc2FibGVkIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFJlZCxcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG5cbiAgICAnOiBob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeVJlZEhvdmVyLFxuICAgIH0sXG4gICAgJzogYWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5UmVkQ2xpY2ssXG4gICAgfSxcblxuICAgIC4uLihkaXNhYmxlZCAmJiB7XG4gICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gICAgfSksXG4gIH0pXG4pO1xuXG5jb25zdCBVdGlsaXR5QnV0dG9uID0gc3R5bGVkKEJhc2VCdXR0b24pPEJ1dHRvblByb3BzPihcbiAgKHsgdGhlbWUsIGRpc2FibGVkIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWQsXG4gICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kU2Vjb25kYXJ5LFxuXG4gICAgJzogaG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnlSZWRIb3ZlcixcbiAgICB9LFxuICAgICc6IGFjdGl2ZSc6IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeVJlZENsaWNrLFxuICAgIH0sXG5cbiAgICAuLi4oZGlzYWJsZWQgJiYge1xuICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxuICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICB9KSxcbiAgfSlcbik7XG5cbmNvbnN0IENPTVBPTkVOVF9NQVBfQllfQ09MT1IgPSB7XG4gIHByaW1hcnlCbHVlOiBQcmltYXJ5Qmx1ZUJ1dHRvbixcbiAgcHJpbWFyeVJlZDogUHJpbWFyeVJlZEJ1dHRvbixcbiAgc2Vjb25kYXJ5Qmx1ZTogU2Vjb25kYXJ5Qmx1ZUJ1dHRvbixcbiAgc2Vjb25kYXJ5UmVkOiBTZWNvbmRhcnlSZWRCdXR0b24sXG4gIHV0aWxpdHk6IFV0aWxpdHlCdXR0b24sXG59O1xuXG5leHBvcnQgdHlwZSBCdXR0b25TaXplID0gJ3NtYWxsJyB8ICdub3JtYWwnIHwgJ2JpZyc7XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBCdXR0b25Qcm9wc1xuICBleHRlbmRzIFJlYWN0LkJ1dHRvbkhUTUxBdHRyaWJ1dGVzPEhUTUxCdXR0b25FbGVtZW50PiB7XG4gIG9uQ2xpY2s/OiAoZXYpID0+IHZvaWQ7XG4gIGNvbG9yPzpcbiAgICB8ICdwcmltYXJ5Qmx1ZSdcbiAgICB8ICdwcmltYXJ5UmVkJ1xuICAgIHwgJ3NlY29uZGFyeUJsdWUnXG4gICAgfCAnc2Vjb25kYXJ5UmVkJ1xuICAgIHwgJ3V0aWxpdHknO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGhlaWdodD86ICcyNCcgfCAnMzYnIHwgJzQwJztcbiAgd2lkdGg/OiAnMTAwJyB8ICcxMjAnIHwgJzE0MCcgfCAnMTc2JyB8ICcxMDAlJztcbiAgbGluZUhlaWdodD86ICd4cycgfCAnc20nO1xuICBoYXNPdXRsaW5lPzogYm9vbGVhbjtcbn1cblxudHlwZSBSZWYgPSBIVE1MQnV0dG9uRWxlbWVudDtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWY8UmVmLCBCdXR0b25Qcm9wcz4oZnVuY3Rpb24gQnV0dG9uKFxuICB7IGNvbG9yID0gJ3ByaW1hcnlCbHVlJywgLi4ucHJvcHMgfTogQnV0dG9uUHJvcHMsXG4gIHJlZlxuKSB7XG4gIGNvbnN0IEJ1dHRvbkNvbXBvbmVudCA9IENPTVBPTkVOVF9NQVBfQllfQ09MT1JbY29sb3JdIHx8IFByaW1hcnlCbHVlQnV0dG9uO1xuICByZXR1cm4gPEJ1dHRvbkNvbXBvbmVudCByZWY9e3JlZn0gY29sb3I9e2NvbG9yfSBhcmlhLWRpc2FibGVkPXshIXByb3BzLmRpc2FibGVkfSAgdGFiSW5kZXg9ezB9IHsuLi5wcm9wc30gLz47XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl19