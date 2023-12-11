"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var label_1 = tslib_1.__importDefault(require("../label/label"));
var getBadgeBgColors = function (theme, color) {
    var bgColor = {
        green: theme.styleguideColors.fillGreen,
        violet: theme.styleguideColors.fillVioletGradient,
        blue: theme.colorSpecialCase.blueBanner2,
        gray: theme.styleguideColors.contentQuaternary,
        fillBlueGradient: theme.styleguideColors.fillBlueGradient,
    }[color];
    return bgColor || color;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYmFkZ2UvYmFkZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBQ3ZDLGlFQUFtQztBQWlCbkMsSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLEtBQUssRUFBRSxLQUEyQjtJQUMxRCxJQUFNLE9BQU8sR0FBRztRQUNkLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsU0FBUztRQUN2QyxNQUFNLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQjtRQUNqRCxJQUFJLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7UUFDeEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7UUFDOUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQjtLQUMxRCxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ1QsT0FBTyxPQUFPLElBQUksS0FBSyxDQUFDO0FBQzFCLENBQUMsQ0FBQTtBQUVELElBQU0sV0FBVyxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFtQixVQUFDLEVBQTZCO1FBQTNCLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLFNBQVMsZUFBQTtJQUFPLE9BQUEsQ0FBQztRQUNuRixPQUFPLEVBQUUsTUFBTTtRQUNmLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLEtBQUssRUFBRSxhQUFhO1FBQ3BCLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWE7UUFDbkUsVUFBVSxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7UUFDNUMsWUFBWSxFQUFFLE1BQU07UUFDcEIsU0FBUyxFQUFFLE1BQU07UUFDakIsT0FBTyxFQUFFLGVBQWU7S0FDekIsQ0FBQztBQVRrRixDQVNsRixDQUFDLENBQUM7QUFFSixJQUFNLHlCQUF5QixHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUMzRCxDQUFDLEVBQUU7WUFDRCxNQUFNLEVBQUUsU0FBUztZQUNqQixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWE7U0FDNUM7UUFDRCxTQUFTLEVBQUU7WUFDVCxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtTQUNoRDtLQUNGLENBQUM7QUFSMEQsQ0FRMUQsQ0FBQyxDQUFDO0FBRUcsSUFBTSxLQUFLLEdBQUcsVUFBQyxFQU1UO1FBTFgsS0FBSyxXQUFBLEVBQ0wsaUJBQW1CLEVBQW5CLFNBQVMsbUJBQUcsT0FBTyxLQUFBLEVBQ25CLFNBQVMsZUFBQSxFQUNULGtCQUFpQixFQUFqQixVQUFVLG1CQUFHLElBQUksS0FBQSxFQUNqQixrQkFBaUIsRUFBakIsVUFBVSxtQkFBRyxJQUFJLEtBQUE7SUFFakIsT0FBTyxDQUNMLHVCQUFDLFdBQVcscUJBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxnQkFDbkQsdUJBQUMsZUFBSyxxQkFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsZ0JBQzVELHVCQUFDLHlCQUF5QixjQUFFLEtBQUssR0FBNkIsSUFDeEQsSUFDSSxDQUNmLENBQUM7QUFDSixDQUFDLENBQUM7QUFkVyxRQUFBLEtBQUssU0FjaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vbGFiZWwvbGFiZWwnO1xuXG50eXBlIEJhZGdlQmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJyB8ICd2aW9sZXQnIHwgJ2JsdWUnIHwgJ2dyYXknIHwgJ2ZpbGxCbHVlR3JhZGllbnQnIHwgc3RyaW5nO1xuXG5pbnRlcmZhY2UgU3R5bGVkQmFkZ2VQcm9wcyB7XG4gIGJnQ29sb3I6IEJhZGdlQmFja2dyb3VuZENvbG9yO1xuICB0ZXh0Q29sb3I/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFkZ2VQcm9wcyB7XG4gIGxhYmVsOiBzdHJpbmcgfCBSZWFjdC5SZWFjdE5vZGU7XG4gIHZhcmlhdGlvbj86IEJhZGdlQmFja2dyb3VuZENvbG9yO1xuICB0ZXh0Q29sb3I/OiBzdHJpbmc7XG4gIGNhcGl0YWxpemU/OiBib29sZWFuO1xuICBsaW5lSGVpZ2h0PzogJ3h4cycgfCAneHMnIHwgJ3NtJztcbn1cblxuY29uc3QgZ2V0QmFkZ2VCZ0NvbG9ycyA9ICh0aGVtZSwgY29sb3I6IEJhZGdlQmFja2dyb3VuZENvbG9yKSA9PiB7XG4gIGNvbnN0IGJnQ29sb3IgPSB7XG4gICAgZ3JlZW46IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbEdyZWVuLFxuICAgIHZpb2xldDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsVmlvbGV0R3JhZGllbnQsXG4gICAgYmx1ZTogdGhlbWUuY29sb3JTcGVjaWFsQ2FzZS5ibHVlQmFubmVyMixcbiAgICBncmF5OiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRRdWF0ZXJuYXJ5LFxuICAgIGZpbGxCbHVlR3JhZGllbnQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbEJsdWVHcmFkaWVudCxcbiAgfVtjb2xvcl07XG4gIHJldHVybiBiZ0NvbG9yIHx8IGNvbG9yO1xufVxuXG5jb25zdCBTdHlsZWRCYWRnZSA9IHN0eWxlZC5kaXY8U3R5bGVkQmFkZ2VQcm9wcz4oKHsgdGhlbWUsIGJnQ29sb3IsIHRleHRDb2xvciB9KSA9PiAoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICB3aWR0aDogJ2ZpdC1jb250ZW50JyxcbiAgY29sb3I6IHRleHRDb2xvciA/IHRleHRDb2xvciA6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudE9uRmlsbCxcbiAgYmFja2dyb3VuZDogZ2V0QmFkZ2VCZ0NvbG9ycyh0aGVtZSwgYmdDb2xvciksXG4gIGJvcmRlclJhZGl1czogJzQwcHgnLFxuICBtaW5IZWlnaHQ6ICcxN3B4JyxcbiAgcGFkZGluZzogJzAgNnB4IDFweCA2cHgnLFxufSkpO1xuXG5jb25zdCBTdHlsZWRMYWJlbENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBhOiB7XG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudE9uRmlsbCxcbiAgfSxcbiAgJ2E6aG92ZXInOiB7XG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFF1YXRlcm5hcnksXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBjb25zdCBCYWRnZSA9ICh7XG4gIGxhYmVsLFxuICB2YXJpYXRpb24gPSAnZ3JlZW4nLFxuICB0ZXh0Q29sb3IsXG4gIGNhcGl0YWxpemUgPSB0cnVlLFxuICBsaW5lSGVpZ2h0ID0gJ3NtJ1xufTogQmFkZ2VQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRCYWRnZSBiZ0NvbG9yPXt2YXJpYXRpb259IHRleHRDb2xvcj17dGV4dENvbG9yfT5cbiAgICAgIDxMYWJlbCBzaXplPXsyfSBjYXBpdGFsaXplPXtjYXBpdGFsaXplfSBsaW5lSGVpZ2h0PXtsaW5lSGVpZ2h0fT5cbiAgICAgICAgPFN0eWxlZExhYmVsQ29udGVudFdyYXBwZXI+e2xhYmVsfTwvU3R5bGVkTGFiZWxDb250ZW50V3JhcHBlcj5cbiAgICAgIDwvTGFiZWw+XG4gICAgPC9TdHlsZWRCYWRnZT5cbiAgKTtcbn07XG4iXX0=