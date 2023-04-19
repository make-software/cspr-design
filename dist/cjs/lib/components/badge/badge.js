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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYmFkZ2UvYmFkZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBQ3ZDLGlFQUFtQztBQWNuQyxJQUFNLGdCQUFnQixHQUFHLFVBQUMsS0FBSyxFQUFFLEtBQWtDO0lBQ2pFLE9BQUEsQ0FBQztRQUNDLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsU0FBUztRQUN2QyxNQUFNLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQjtRQUNqRCxJQUFJLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7S0FDekMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUpULENBSVMsQ0FBQztBQUVaLElBQU0sV0FBVyxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFtQixVQUFDLEVBQWtCO1FBQWhCLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQTtJQUFPLE9BQUEsQ0FBQztRQUN4RSxPQUFPLEVBQUUsTUFBTTtRQUNmLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLEtBQUssRUFBRSxhQUFhO1FBQ3BCLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtRQUMzQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztRQUM1QyxZQUFZLEVBQUUsTUFBTTtRQUNwQixTQUFTLEVBQUUsTUFBTTtRQUNqQixPQUFPLEVBQUUsZUFBZTtLQUN6QixDQUFDO0FBVHVFLENBU3ZFLENBQUMsQ0FBQztBQUVKLElBQU0seUJBQXlCLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQzNELENBQUMsRUFBRTtZQUNELE1BQU0sRUFBRSxTQUFTO1lBQ2pCLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtTQUM1QztRQUNELFNBQVMsRUFBRTtZQUNULEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO1NBQ2hEO0tBQ0YsQ0FBQztBQVIwRCxDQVExRCxDQUFDLENBQUM7QUFFRyxJQUFNLEtBQUssR0FBRyxVQUFDLEVBSVQ7UUFIWCxLQUFLLFdBQUEsRUFDTCxpQkFBbUIsRUFBbkIsU0FBUyxtQkFBRyxPQUFPLEtBQUEsRUFDbkIsa0JBQWlCLEVBQWpCLFVBQVUsbUJBQUcsSUFBSSxLQUFBO0lBRWpCLE9BQU8sQ0FDTCx1QkFBQyxXQUFXLHFCQUFDLE9BQU8sRUFBRSxTQUFTLGdCQUM3Qix1QkFBQyxlQUFLLHFCQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLFVBQVUsZ0JBQ3BDLHVCQUFDLHlCQUF5QixjQUFFLEtBQUssR0FBNkIsSUFDeEQsSUFDSSxDQUNmLENBQUM7QUFDSixDQUFDLENBQUM7QUFaVyxRQUFBLEtBQUssU0FZaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vbGFiZWwvbGFiZWwnO1xuXG50eXBlIEJhZGdlQmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJyB8ICd2aW9sZXQnIHwgJ2JsdWUnO1xuXG5pbnRlcmZhY2UgU3R5bGVkQmFkZ2VQcm9wcyB7XG4gIGJnQ29sb3I6IEJhZGdlQmFja2dyb3VuZENvbG9yO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhZGdlUHJvcHMge1xuICBsYWJlbDogc3RyaW5nIHwgUmVhY3QuUmVhY3ROb2RlO1xuICB2YXJpYXRpb24/OiBCYWRnZUJhY2tncm91bmRDb2xvcjtcbiAgY2FwaXRhbGl6ZT86IGJvb2xlYW47XG59XG5cbmNvbnN0IGdldEJhZGdlQmdDb2xvcnMgPSAodGhlbWUsIGNvbG9yOiAnZ3JlZW4nIHwgJ3Zpb2xldCcgfCAnYmx1ZScpID0+XG4gICh7XG4gICAgZ3JlZW46IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbEdyZWVuLFxuICAgIHZpb2xldDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsVmlvbGV0R3JhZGllbnQsXG4gICAgYmx1ZTogdGhlbWUuY29sb3JTcGVjaWFsQ2FzZS5ibHVlQmFubmVyMixcbiAgfVtjb2xvcl0pO1xuXG5jb25zdCBTdHlsZWRCYWRnZSA9IHN0eWxlZC5kaXY8U3R5bGVkQmFkZ2VQcm9wcz4oKHsgdGhlbWUsIGJnQ29sb3IgfSkgPT4gKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgd2lkdGg6ICdmaXQtY29udGVudCcsXG4gIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRPbkZpbGwsXG4gIGJhY2tncm91bmQ6IGdldEJhZGdlQmdDb2xvcnModGhlbWUsIGJnQ29sb3IpLFxuICBib3JkZXJSYWRpdXM6ICc0MHB4JyxcbiAgbWluSGVpZ2h0OiAnMTdweCcsXG4gIHBhZGRpbmc6ICcwIDZweCAxcHggNnB4Jyxcbn0pKTtcblxuY29uc3QgU3R5bGVkTGFiZWxDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcbiAgYToge1xuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRPbkZpbGwsXG4gIH0sXG4gICdhOmhvdmVyJzoge1xuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRRdWF0ZXJuYXJ5LFxuICB9LFxufSkpO1xuXG5leHBvcnQgY29uc3QgQmFkZ2UgPSAoe1xuICBsYWJlbCxcbiAgdmFyaWF0aW9uID0gJ2dyZWVuJyxcbiAgY2FwaXRhbGl6ZSA9IHRydWUsXG59OiBCYWRnZVByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZEJhZGdlIGJnQ29sb3I9e3ZhcmlhdGlvbn0+XG4gICAgICA8TGFiZWwgc2l6ZT17Mn0gY2FwaXRhbGl6ZT17Y2FwaXRhbGl6ZX0+XG4gICAgICAgIDxTdHlsZWRMYWJlbENvbnRlbnRXcmFwcGVyPntsYWJlbH08L1N0eWxlZExhYmVsQ29udGVudFdyYXBwZXI+XG4gICAgICA8L0xhYmVsPlxuICAgIDwvU3R5bGVkQmFkZ2U+XG4gICk7XG59O1xuIl19