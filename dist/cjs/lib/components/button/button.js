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
        }, width) }, (hasOutline && {
        ':focus': {
            outline: 'none',
        }
    })), (disabled && {
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
    return (0, jsx_runtime_1.jsx)(ButtonComponent, tslib_1.__assign({ ref: ref, color: color, "aria-disabled": !!props.disabled, tabIndex: 0 }, props));
});
exports.default = exports.Button;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLGdGQUF1QztBQUV2QyxxREFBbUQ7QUFFbkQsSUFBTSxVQUFVLEdBQUcsMkJBQU0sQ0FBQyxNQUFNLENBQzlCLFVBQUMsRUFBeUY7UUFBdkYsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsY0FBYSxFQUFiLE1BQU0sbUJBQUcsSUFBSSxLQUFBLEVBQUUsYUFBYyxFQUFkLEtBQUssbUJBQUcsTUFBTSxLQUFBLEVBQUUsa0JBQWlCLEVBQWpCLFVBQVUsbUJBQUcsSUFBSSxLQUFBLEVBQUUsa0JBQWtCLEVBQWxCLFVBQVUsbUJBQUcsS0FBSyxLQUFBO0lBQU8sT0FBQSxxQ0FDN0YsT0FBTyxFQUFFLE1BQU0sRUFDZixVQUFVLEVBQUUsUUFBUSxFQUNwQixjQUFjLEVBQUUsUUFBUSxFQUN4QixNQUFNLEVBQUUsTUFBTSxFQUNkLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFDckMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFDL0MsVUFBVSxFQUFFLElBQUEsc0JBQVMsRUFDbkI7WUFDRSxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTTtZQUN4QyxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTTtZQUN4QyxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsUUFBUTtTQUMzQyxFQUNELE1BQU0sQ0FDUCxFQUNELFFBQVEsRUFBRSxJQUFBLHNCQUFTLEVBQ2pCLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxVQUFVLEVB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XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgbWF0Y2hTaXplIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWF0Y2gtc2l6ZSc7XG5cbmNvbnN0IEJhc2VCdXR0b24gPSBzdHlsZWQuYnV0dG9uPEJ1dHRvblByb3BzPihcbiAgKHsgdGhlbWUsIGRpc2FibGVkLCBoZWlnaHQgPSAnMzYnLCB3aWR0aCA9ICcxMDAlJywgbGluZUhlaWdodCA9ICdzbScsIGhhc091dGxpbmUgPSBmYWxzZSB9KSA9PiAoe1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHkucHJpbWFyeSxcbiAgICBmb250V2VpZ2h0OiBtYXRjaFNpemUoXG4gICAgICB7XG4gICAgICAgICcyNCc6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5tZWRpdW0sXG4gICAgICAgICczNic6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5tZWRpdW0sXG4gICAgICAgICc0MCc6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5zZW1pQm9sZCxcbiAgICAgIH0sXG4gICAgICBoZWlnaHRcbiAgICApLFxuICAgIGZvbnRTaXplOiBtYXRjaFNpemUoXG4gICAgICB7ICcyNCc6ICcwLjY4OHJlbScsICczNic6ICcwLjg3NXJlbScsICc0MCc6ICcwLjg3NXJlbScgfSxcbiAgICAgIGhlaWdodFxuICAgICksXG4gICAgbWluSGVpZ2h0OiBtYXRjaFNpemUoeyAnMjQnOiAyNCwgJzM2JzogMzYsICc0MCc6IDQwIH0sIGhlaWdodCksXG4gICAgbGluZUhlaWdodDogbWF0Y2hTaXplKFxuICAgICAge1xuICAgICAgICBzbTogJzEuNXJlbScsXG4gICAgICAgIHhzOiAnMS4yNXJlbScsXG4gICAgICB9LFxuICAgICAgbGluZUhlaWdodFxuICAgICksXG4gICAgcGFkZGluZzogbWF0Y2hTaXplKFxuICAgICAgeyAnMjQnOiAnMnB4IDEwcHgnLCAnMzYnOiAnOHB4IDI1cHgnLCAnNDAnOiAnMTBweCAzMHB4JyB9LFxuICAgICAgaGVpZ2h0XG4gICAgKSxcbiAgICB3aWR0aDogbWF0Y2hTaXplKFxuICAgICAge1xuICAgICAgICAnMTAwJzogJzEwMHB4JyxcbiAgICAgICAgJzEyMCc6ICcxMjBweCcsXG4gICAgICAgICcxNDAnOiAnMTQwcHgnLFxuICAgICAgICAnMTc2JzogJzE3NnB4JyxcbiAgICAgICAgJzEwMCUnOiAnMTAwJScsXG4gICAgICB9LFxuICAgICAgd2lkdGhcbiAgICApLFxuXG4gICAgLi4uKGhhc091dGxpbmUgJiYge1xuICAgICAgICAnOmZvY3VzJzoge1xuICAgICAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICB9XG4gICAgfSksXG5cbiAgICAuLi4oZGlzYWJsZWQgJiYge1xuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIH0pLFxuICB9KVxuKTtcblxuY29uc3QgUHJpbWFyeUJsdWVCdXR0b24gPSBzdHlsZWQoQmFzZUJ1dHRvbik8QnV0dG9uUHJvcHM+KFxuICAoeyB0aGVtZSwgZGlzYWJsZWQgfSkgPT4gKHtcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50T25GaWxsLFxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXG5cbiAgICAnOiBob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlCbHVlSG92ZXIsXG4gICAgfSxcbiAgICAnOiBhY3RpdmUnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5Qmx1ZUNsaWNrLFxuICAgIH0sXG5cbiAgICAuLi4oZGlzYWJsZWQgJiYge1xuICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxuICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kU2Vjb25kYXJ5LFxuICAgIH0pLFxuICB9KVxuKTtcblxuY29uc3QgUHJpbWFyeVJlZEJ1dHRvbiA9IHN0eWxlZChCYXNlQnV0dG9uKTxCdXR0b25Qcm9wcz4oXG4gICh7IHRoZW1lLCBkaXNhYmxlZCB9KSA9PiAoe1xuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRPbkZpbGwsXG4gICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcblxuICAgICc6IGhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZEhvdmVyLFxuICAgIH0sXG4gICAgJzogYWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZENsaWNrLFxuICAgIH0sXG5cbiAgICAuLi4oZGlzYWJsZWQgJiYge1xuICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxuICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxuICAgIH0pLFxuICB9KVxuKTtcblxuY29uc3QgU2Vjb25kYXJ5Qmx1ZUJ1dHRvbiA9IHN0eWxlZChCYXNlQnV0dG9uKTxCdXR0b25Qcm9wcz4oXG4gICh7IHRoZW1lLCBkaXNhYmxlZCB9KSA9PiAoe1xuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFNlY29uZGFyeSxcblxuICAgICc6IGhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5Qmx1ZUhvdmVyLFxuICAgICAgYm9yZGVyQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgfSxcbiAgICAnOiBhY3RpdmUnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnlCbHVlQ2xpY2ssXG4gICAgICBib3JkZXJDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICB9LFxuXG4gICAgLi4uKGRpc2FibGVkICYmIHtcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgfSksXG4gIH0pXG4pO1xuXG5jb25zdCBTZWNvbmRhcnlSZWRCdXR0b24gPSBzdHlsZWQoQmFzZUJ1dHRvbik8QnV0dG9uUHJvcHM+KFxuICAoeyB0aGVtZSwgZGlzYWJsZWQgfSkgPT4gKHtcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UmVkLFxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcblxuICAgICc6IGhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5UmVkSG92ZXIsXG4gICAgfSxcbiAgICAnOiBhY3RpdmUnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnlSZWRDbGljayxcbiAgICB9LFxuXG4gICAgLi4uKGRpc2FibGVkICYmIHtcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcbiAgICB9KSxcbiAgfSlcbik7XG5cbmNvbnN0IFV0aWxpdHlCdXR0b24gPSBzdHlsZWQoQmFzZUJ1dHRvbik8QnV0dG9uUHJvcHM+KFxuICAoeyB0aGVtZSwgZGlzYWJsZWQgfSkgPT4gKHtcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRTZWNvbmRhcnksXG5cbiAgICAnOiBob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeVJlZEhvdmVyLFxuICAgIH0sXG4gICAgJzogYWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5UmVkQ2xpY2ssXG4gICAgfSxcblxuICAgIC4uLihkaXNhYmxlZCAmJiB7XG4gICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgIH0pLFxuICB9KVxuKTtcblxuY29uc3QgQ09NUE9ORU5UX01BUF9CWV9DT0xPUiA9IHtcbiAgcHJpbWFyeUJsdWU6IFByaW1hcnlCbHVlQnV0dG9uLFxuICBwcmltYXJ5UmVkOiBQcmltYXJ5UmVkQnV0dG9uLFxuICBzZWNvbmRhcnlCbHVlOiBTZWNvbmRhcnlCbHVlQnV0dG9uLFxuICBzZWNvbmRhcnlSZWQ6IFNlY29uZGFyeVJlZEJ1dHRvbixcbiAgdXRpbGl0eTogVXRpbGl0eUJ1dHRvbixcbn07XG5cbmV4cG9ydCB0eXBlIEJ1dHRvblNpemUgPSAnc21hbGwnIHwgJ25vcm1hbCcgfCAnYmlnJztcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvblByb3BzXG4gIGV4dGVuZHMgUmVhY3QuQnV0dG9uSFRNTEF0dHJpYnV0ZXM8SFRNTEJ1dHRvbkVsZW1lbnQ+IHtcbiAgb25DbGljaz86IChldikgPT4gdm9pZDtcbiAgY29sb3I/OlxuICAgIHwgJ3ByaW1hcnlCbHVlJ1xuICAgIHwgJ3ByaW1hcnlSZWQnXG4gICAgfCAnc2Vjb25kYXJ5Qmx1ZSdcbiAgICB8ICdzZWNvbmRhcnlSZWQnXG4gICAgfCAndXRpbGl0eSc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgaGVpZ2h0PzogJzI0JyB8ICczNicgfCAnNDAnO1xuICB3aWR0aD86ICcxMDAnIHwgJzEyMCcgfCAnMTQwJyB8ICcxNzYnIHwgJzEwMCUnO1xuICBsaW5lSGVpZ2h0PzogJ3hzJyB8ICdzbSc7XG4gIGhhc091dGxpbmU/OiBib29sZWFuO1xufVxuXG50eXBlIFJlZiA9IEhUTUxCdXR0b25FbGVtZW50O1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZjxSZWYsIEJ1dHRvblByb3BzPihmdW5jdGlvbiBCdXR0b24oXG4gIHsgY29sb3IgPSAncHJpbWFyeUJsdWUnLCAuLi5wcm9wcyB9OiBCdXR0b25Qcm9wcyxcbiAgcmVmXG4pIHtcbiAgY29uc3QgQnV0dG9uQ29tcG9uZW50ID0gQ09NUE9ORU5UX01BUF9CWV9DT0xPUltjb2xvcl0gfHwgUHJpbWFyeUJsdWVCdXR0b247XG4gIHJldHVybiA8QnV0dG9uQ29tcG9uZW50IHJlZj17cmVmfSBjb2xvcj17Y29sb3J9IGFyaWEtZGlzYWJsZWQ9eyEhcHJvcHMuZGlzYWJsZWR9ICB0YWJJbmRleD17MH0gey4uLnByb3BzfSAvPjtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iXX0=