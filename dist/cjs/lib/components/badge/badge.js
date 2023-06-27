"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var label_1 = tslib_1.__importDefault(require("../label/label"));
var getBadgeBgColors = function (theme, color) {
    return ({
        green: theme.styleguideColors.fillGreen,
        violet: theme.styleguideColors.fillVioletGradient,
        blue: theme.colorSpecialCase.blueBanner2,
        gray: theme.styleguideColors.contentQuaternary,
    }[color]);
};
var StyledBadge = styled_components_1.default.div(function (_a) {
    var theme = _a.theme, bgColor = _a.bgColor;
    return ({
        display: 'flex',
        alignItems: 'center',
        width: 'fit-content',
        color: theme.styleguideColors.contentOnFill,
        background: getBadgeBgColors(theme, bgColor),
        borderRadius: '40px',
        minHeight: '17px',
        padding: '0 6px 1px 6px',
    });
});
var StyledLabelContentWrapper = styled_components_1.default.div(function (_a) {
    var theme = _a.theme;
    return ({
        a: {
            cursor: 'pointer',
            color: theme.styleguideColors.contentOnFill,
        },
        'a:hover': {
            color: theme.styleguideColors.contentQuaternary,
        },
    });
});
var Badge = function (_a) {
    var label = _a.label, _b = _a.variation, variation = _b === void 0 ? 'green' : _b, _c = _a.capitalize, capitalize = _c === void 0 ? true : _c;
    return ((0, jsx_runtime_1.jsx)(StyledBadge, tslib_1.__assign({ bgColor: variation }, { children: (0, jsx_runtime_1.jsx)(label_1.default, tslib_1.__assign({ size: 2, capitalize: capitalize }, { children: (0, jsx_runtime_1.jsx)(StyledLabelContentWrapper, { children: label }) })) })));
};
exports.Badge = Badge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYmFkZ2UvYmFkZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBQ3ZDLGlFQUFtQztBQWNuQyxJQUFNLGdCQUFnQixHQUFHLFVBQUMsS0FBSyxFQUFFLEtBQTJCO0lBQzFELE9BQUEsQ0FBQztRQUNDLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsU0FBUztRQUN2QyxNQUFNLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQjtRQUNqRCxJQUFJLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7UUFDeEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7S0FDL0MsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUxULENBS1MsQ0FBQztBQUVaLElBQU0sV0FBVyxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFtQixVQUFDLEVBQWtCO1FBQWhCLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQTtJQUFPLE9BQUEsQ0FBQztRQUN4RSxPQUFPLEVBQUUsTUFBTTtRQUNmLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLEtBQUssRUFBRSxhQUFhO1FBQ3BCLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtRQUMzQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztRQUM1QyxZQUFZLEVBQUUsTUFBTTtRQUNwQixTQUFTLEVBQUUsTUFBTTtRQUNqQixPQUFPLEVBQUUsZUFBZTtLQUN6QixDQUFDO0FBVHVFLENBU3ZFLENBQUMsQ0FBQztBQUVKLElBQU0seUJBQXlCLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQzNELENBQUMsRUFBRTtZQUNELE1BQU0sRUFBRSxTQUFTO1lBQ2pCLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtTQUM1QztRQUNELFNBQVMsRUFBRTtZQUNULEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO1NBQ2hEO0tBQ0YsQ0FBQztBQVIwRCxDQVExRCxDQUFDLENBQUM7QUFFRyxJQUFNLEtBQUssR0FBRyxVQUFDLEVBSVQ7UUFIWCxLQUFLLFdBQUEsRUFDTCxpQkFBbUIsRUFBbkIsU0FBUyxtQkFBRyxPQUFPLEtBQUEsRUFDbkIsa0JBQWlCLEVBQWpCLFVBQVUsbUJBQUcsSUFBSSxLQUFBO0lBRWpCLE9BQU8sQ0FDTCx1QkFBQyxXQUFXLHFCQUFDLE9BQU8sRUFBRSxTQUFTLGdCQUM3Qix1QkFBQyxlQUFLLHFCQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLFVBQVUsZ0JBQ3BDLHVCQUFDLHlCQUF5QixjQUFFLEtBQUssR0FBNkIsSUFDeEQsSUFDSSxDQUNmLENBQUM7QUFDSixDQUFDLENBQUM7QUFaVyxRQUFBLEtBQUssU0FZaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExhYmVsIGZyb20gJy4uL2xhYmVsL2xhYmVsJztcclxuXHJcbnR5cGUgQmFkZ2VCYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nIHwgJ3Zpb2xldCcgfCAnYmx1ZScgfCAnZ3JheSc7XHJcblxyXG5pbnRlcmZhY2UgU3R5bGVkQmFkZ2VQcm9wcyB7XHJcbiAgYmdDb2xvcjogQmFkZ2VCYWNrZ3JvdW5kQ29sb3I7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFkZ2VQcm9wcyB7XHJcbiAgbGFiZWw6IHN0cmluZyB8IFJlYWN0LlJlYWN0Tm9kZTtcclxuICB2YXJpYXRpb24/OiBCYWRnZUJhY2tncm91bmRDb2xvcjtcclxuICBjYXBpdGFsaXplPzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgZ2V0QmFkZ2VCZ0NvbG9ycyA9ICh0aGVtZSwgY29sb3I6IEJhZGdlQmFja2dyb3VuZENvbG9yKSA9PlxyXG4gICh7XHJcbiAgICBncmVlbjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsR3JlZW4sXHJcbiAgICB2aW9sZXQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFZpb2xldEdyYWRpZW50LFxyXG4gICAgYmx1ZTogdGhlbWUuY29sb3JTcGVjaWFsQ2FzZS5ibHVlQmFubmVyMixcclxuICAgIGdyYXk6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFF1YXRlcm5hcnksXHJcbiAgfVtjb2xvcl0pO1xyXG5cclxuY29uc3QgU3R5bGVkQmFkZ2UgPSBzdHlsZWQuZGl2PFN0eWxlZEJhZGdlUHJvcHM+KCh7IHRoZW1lLCBiZ0NvbG9yIH0pID0+ICh7XHJcbiAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIHdpZHRoOiAnZml0LWNvbnRlbnQnLFxyXG4gIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRPbkZpbGwsXHJcbiAgYmFja2dyb3VuZDogZ2V0QmFkZ2VCZ0NvbG9ycyh0aGVtZSwgYmdDb2xvciksXHJcbiAgYm9yZGVyUmFkaXVzOiAnNDBweCcsXHJcbiAgbWluSGVpZ2h0OiAnMTdweCcsXHJcbiAgcGFkZGluZzogJzAgNnB4IDFweCA2cHgnLFxyXG59KSk7XHJcblxyXG5jb25zdCBTdHlsZWRMYWJlbENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIGE6IHtcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudE9uRmlsbCxcclxuICB9LFxyXG4gICdhOmhvdmVyJzoge1xyXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFF1YXRlcm5hcnksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJhZGdlID0gKHtcclxuICBsYWJlbCxcclxuICB2YXJpYXRpb24gPSAnZ3JlZW4nLFxyXG4gIGNhcGl0YWxpemUgPSB0cnVlLFxyXG59OiBCYWRnZVByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRCYWRnZSBiZ0NvbG9yPXt2YXJpYXRpb259PlxyXG4gICAgICA8TGFiZWwgc2l6ZT17Mn0gY2FwaXRhbGl6ZT17Y2FwaXRhbGl6ZX0+XHJcbiAgICAgICAgPFN0eWxlZExhYmVsQ29udGVudFdyYXBwZXI+e2xhYmVsfTwvU3R5bGVkTGFiZWxDb250ZW50V3JhcHBlcj5cclxuICAgICAgPC9MYWJlbD5cclxuICAgIDwvU3R5bGVkQmFkZ2U+XHJcbiAgKTtcclxufTtcclxuIl19