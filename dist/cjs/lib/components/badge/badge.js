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
        fillBlueGradient: theme.styleguideColors.fillBlueGradient,
    }[color]);
};
var StyledBadge = styled_components_1.default.div(function (_a) {
    var theme = _a.theme, bgColor = _a.bgColor, textColor = _a.textColor;
    return ({
        display: 'flex',
        alignItems: 'center',
        width: 'fit-content',
        color: textColor ? textColor : theme.styleguideColors.contentOnFill,
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
    var label = _a.label, _b = _a.variation, variation = _b === void 0 ? 'green' : _b, textColor = _a.textColor, _c = _a.capitalize, capitalize = _c === void 0 ? true : _c, _d = _a.lineHeight, lineHeight = _d === void 0 ? 'sm' : _d;
    return ((0, jsx_runtime_1.jsx)(StyledBadge, tslib_1.__assign({ bgColor: variation, textColor: textColor }, { children: (0, jsx_runtime_1.jsx)(label_1.default, tslib_1.__assign({ size: 2, capitalize: capitalize, lineHeight: lineHeight }, { children: (0, jsx_runtime_1.jsx)(StyledLabelContentWrapper, { children: label }) })) })));
};
exports.Badge = Badge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYmFkZ2UvYmFkZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBQ3ZDLGlFQUFtQztBQWlCbkMsSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLEtBQUssRUFBRSxLQUEyQjtJQUMxRCxPQUFBLENBQUM7UUFDQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFNBQVM7UUFDdkMsTUFBTSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0I7UUFDakQsSUFBSSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO1FBQ3hDLElBQUksRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO1FBQzlDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7S0FDMUQsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQU5ULENBTVMsQ0FBQztBQUVaLElBQU0sV0FBVyxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFtQixVQUFDLEVBQTZCO1FBQTNCLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLFNBQVMsZUFBQTtJQUFPLE9BQUEsQ0FBQztRQUNuRixPQUFPLEVBQUUsTUFBTTtRQUNmLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLEtBQUssRUFBRSxhQUFhO1FBQ3BCLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWE7UUFDbkUsVUFBVSxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7UUFDNUMsWUFBWSxFQUFFLE1BQU07UUFDcEIsU0FBUyxFQUFFLE1BQU07UUFDakIsT0FBTyxFQUFFLGVBQWU7S0FDekIsQ0FBQztBQVRrRixDQVNsRixDQUFDLENBQUM7QUFFSixJQUFNLHlCQUF5QixHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUMzRCxDQUFDLEVBQUU7WUFDRCxNQUFNLEVBQUUsU0FBUztZQUNqQixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWE7U0FDNUM7UUFDRCxTQUFTLEVBQUU7WUFDVCxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtTQUNoRDtLQUNGLENBQUM7QUFSMEQsQ0FRMUQsQ0FBQyxDQUFDO0FBRUcsSUFBTSxLQUFLLEdBQUcsVUFBQyxFQU1UO1FBTFgsS0FBSyxXQUFBLEVBQ0wsaUJBQW1CLEVBQW5CLFNBQVMsbUJBQUcsT0FBTyxLQUFBLEVBQ25CLFNBQVMsZUFBQSxFQUNULGtCQUFpQixFQUFqQixVQUFVLG1CQUFHLElBQUksS0FBQSxFQUNqQixrQkFBaUIsRUFBakIsVUFBVSxtQkFBRyxJQUFJLEtBQUE7SUFFakIsT0FBTyxDQUNMLHVCQUFDLFdBQVcscUJBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxnQkFDbkQsdUJBQUMsZUFBSyxxQkFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsZ0JBQzVELHVCQUFDLHlCQUF5QixjQUFFLEtBQUssR0FBNkIsSUFDeEQsSUFDSSxDQUNmLENBQUM7QUFDSixDQUFDLENBQUM7QUFkVyxRQUFBLEtBQUssU0FjaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vbGFiZWwvbGFiZWwnO1xuXG50eXBlIEJhZGdlQmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJyB8ICd2aW9sZXQnIHwgJ2JsdWUnIHwgJ2dyYXknIHwgJ2ZpbGxCbHVlR3JhZGllbnQnO1xuXG5pbnRlcmZhY2UgU3R5bGVkQmFkZ2VQcm9wcyB7XG4gIGJnQ29sb3I6IEJhZGdlQmFja2dyb3VuZENvbG9yO1xuICB0ZXh0Q29sb3I/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFkZ2VQcm9wcyB7XG4gIGxhYmVsOiBzdHJpbmcgfCBSZWFjdC5SZWFjdE5vZGU7XG4gIHZhcmlhdGlvbj86IEJhZGdlQmFja2dyb3VuZENvbG9yO1xuICB0ZXh0Q29sb3I/OiBzdHJpbmc7XG4gIGNhcGl0YWxpemU/OiBib29sZWFuO1xuICBsaW5lSGVpZ2h0PzogJ3h4cycgfCAneHMnIHwgJ3NtJztcbn1cblxuY29uc3QgZ2V0QmFkZ2VCZ0NvbG9ycyA9ICh0aGVtZSwgY29sb3I6IEJhZGdlQmFja2dyb3VuZENvbG9yKSA9PlxuICAoe1xuICAgIGdyZWVuOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxHcmVlbixcbiAgICB2aW9sZXQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFZpb2xldEdyYWRpZW50LFxuICAgIGJsdWU6IHRoZW1lLmNvbG9yU3BlY2lhbENhc2UuYmx1ZUJhbm5lcjIsXG4gICAgZ3JheTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UXVhdGVybmFyeSxcbiAgICBmaWxsQmx1ZUdyYWRpZW50OiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxCbHVlR3JhZGllbnQsXG4gIH1bY29sb3JdKTtcblxuY29uc3QgU3R5bGVkQmFkZ2UgPSBzdHlsZWQuZGl2PFN0eWxlZEJhZGdlUHJvcHM+KCh7IHRoZW1lLCBiZ0NvbG9yLCB0ZXh0Q29sb3IgfSkgPT4gKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgd2lkdGg6ICdmaXQtY29udGVudCcsXG4gIGNvbG9yOiB0ZXh0Q29sb3IgPyB0ZXh0Q29sb3IgOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRPbkZpbGwsXG4gIGJhY2tncm91bmQ6IGdldEJhZGdlQmdDb2xvcnModGhlbWUsIGJnQ29sb3IpLFxuICBib3JkZXJSYWRpdXM6ICc0MHB4JyxcbiAgbWluSGVpZ2h0OiAnMTdweCcsXG4gIHBhZGRpbmc6ICcwIDZweCAxcHggNnB4Jyxcbn0pKTtcblxuY29uc3QgU3R5bGVkTGFiZWxDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcbiAgYToge1xuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRPbkZpbGwsXG4gIH0sXG4gICdhOmhvdmVyJzoge1xuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRRdWF0ZXJuYXJ5LFxuICB9LFxufSkpO1xuXG5leHBvcnQgY29uc3QgQmFkZ2UgPSAoe1xuICBsYWJlbCxcbiAgdmFyaWF0aW9uID0gJ2dyZWVuJyxcbiAgdGV4dENvbG9yLFxuICBjYXBpdGFsaXplID0gdHJ1ZSxcbiAgbGluZUhlaWdodCA9ICdzbSdcbn06IEJhZGdlUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkQmFkZ2UgYmdDb2xvcj17dmFyaWF0aW9ufSB0ZXh0Q29sb3I9e3RleHRDb2xvcn0+XG4gICAgICA8TGFiZWwgc2l6ZT17Mn0gY2FwaXRhbGl6ZT17Y2FwaXRhbGl6ZX0gbGluZUhlaWdodD17bGluZUhlaWdodH0+XG4gICAgICAgIDxTdHlsZWRMYWJlbENvbnRlbnRXcmFwcGVyPntsYWJlbH08L1N0eWxlZExhYmVsQ29udGVudFdyYXBwZXI+XG4gICAgICA8L0xhYmVsPlxuICAgIDwvU3R5bGVkQmFkZ2U+XG4gICk7XG59O1xuIl19