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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYmFkZ2UvYmFkZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBQ3ZDLGlFQUFtQztBQWNuQyxJQUFNLGdCQUFnQixHQUFHLFVBQUMsS0FBSyxFQUFFLEtBQWtDO0lBQ2pFLE9BQUEsQ0FBQztRQUNDLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsU0FBUztRQUN2QyxNQUFNLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQjtRQUNqRCxJQUFJLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7S0FDekMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUpULENBSVMsQ0FBQztBQUVaLElBQU0sV0FBVyxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFtQixVQUFDLEVBQWtCO1FBQWhCLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQTtJQUFPLE9BQUEsQ0FBQztRQUN4RSxPQUFPLEVBQUUsTUFBTTtRQUNmLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLEtBQUssRUFBRSxhQUFhO1FBQ3BCLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtRQUMzQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztRQUM1QyxZQUFZLEVBQUUsTUFBTTtRQUNwQixTQUFTLEVBQUUsTUFBTTtRQUNqQixPQUFPLEVBQUUsZUFBZTtLQUN6QixDQUFDO0FBVHVFLENBU3ZFLENBQUMsQ0FBQztBQUVKLElBQU0seUJBQXlCLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQzNELENBQUMsRUFBRTtZQUNELE1BQU0sRUFBRSxTQUFTO1lBQ2pCLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtTQUM1QztRQUNELFNBQVMsRUFBRTtZQUNULEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO1NBQ2hEO0tBQ0YsQ0FBQztBQVIwRCxDQVExRCxDQUFDLENBQUM7QUFFRyxJQUFNLEtBQUssR0FBRyxVQUFDLEVBSVQ7UUFIWCxLQUFLLFdBQUEsRUFDTCxpQkFBbUIsRUFBbkIsU0FBUyxtQkFBRyxPQUFPLEtBQUEsRUFDbkIsa0JBQWlCLEVBQWpCLFVBQVUsbUJBQUcsSUFBSSxLQUFBO0lBRWpCLE9BQU8sQ0FDTCx1QkFBQyxXQUFXLHFCQUFDLE9BQU8sRUFBRSxTQUFTLGdCQUM3Qix1QkFBQyxlQUFLLHFCQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLFVBQVUsZ0JBQ3BDLHVCQUFDLHlCQUF5QixjQUFFLEtBQUssR0FBNkIsSUFDeEQsSUFDSSxDQUNmLENBQUM7QUFDSixDQUFDLENBQUM7QUFaVyxRQUFBLEtBQUssU0FZaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vbGFiZWwvbGFiZWwnO1xuXG50eXBlIEJhZGdlQmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJyB8ICd2aW9sZXQnIHwgJ2JsdWUnO1xuXG5pbnRlcmZhY2UgU3R5bGVkQmFkZ2VQcm9wcyB7XG4gIGJnQ29sb3I6IEJhZGdlQmFja2dyb3VuZENvbG9yO1xufVxuXG5pbnRlcmZhY2UgQmFkZ2VQcm9wcyB7XG4gIGxhYmVsOiBzdHJpbmcgfCBSZWFjdC5SZWFjdE5vZGU7XG4gIHZhcmlhdGlvbj86IEJhZGdlQmFja2dyb3VuZENvbG9yO1xuICBjYXBpdGFsaXplPzogYm9vbGVhbjtcbn1cblxuY29uc3QgZ2V0QmFkZ2VCZ0NvbG9ycyA9ICh0aGVtZSwgY29sb3I6ICdncmVlbicgfCAndmlvbGV0JyB8ICdibHVlJykgPT5cbiAgKHtcbiAgICBncmVlbjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsR3JlZW4sXG4gICAgdmlvbGV0OiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxWaW9sZXRHcmFkaWVudCxcbiAgICBibHVlOiB0aGVtZS5jb2xvclNwZWNpYWxDYXNlLmJsdWVCYW5uZXIyLFxuICB9W2NvbG9yXSk7XG5cbmNvbnN0IFN0eWxlZEJhZGdlID0gc3R5bGVkLmRpdjxTdHlsZWRCYWRnZVByb3BzPigoeyB0aGVtZSwgYmdDb2xvciB9KSA9PiAoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICB3aWR0aDogJ2ZpdC1jb250ZW50JyxcbiAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudE9uRmlsbCxcbiAgYmFja2dyb3VuZDogZ2V0QmFkZ2VCZ0NvbG9ycyh0aGVtZSwgYmdDb2xvciksXG4gIGJvcmRlclJhZGl1czogJzQwcHgnLFxuICBtaW5IZWlnaHQ6ICcxN3B4JyxcbiAgcGFkZGluZzogJzAgNnB4IDFweCA2cHgnLFxufSkpO1xuXG5jb25zdCBTdHlsZWRMYWJlbENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBhOiB7XG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudE9uRmlsbCxcbiAgfSxcbiAgJ2E6aG92ZXInOiB7XG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFF1YXRlcm5hcnksXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBjb25zdCBCYWRnZSA9ICh7XG4gIGxhYmVsLFxuICB2YXJpYXRpb24gPSAnZ3JlZW4nLFxuICBjYXBpdGFsaXplID0gdHJ1ZSxcbn06IEJhZGdlUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkQmFkZ2UgYmdDb2xvcj17dmFyaWF0aW9ufT5cbiAgICAgIDxMYWJlbCBzaXplPXsyfSBjYXBpdGFsaXplPXtjYXBpdGFsaXplfT5cbiAgICAgICAgPFN0eWxlZExhYmVsQ29udGVudFdyYXBwZXI+e2xhYmVsfTwvU3R5bGVkTGFiZWxDb250ZW50V3JhcHBlcj5cbiAgICAgIDwvTGFiZWw+XG4gICAgPC9TdHlsZWRCYWRnZT5cbiAgKTtcbn07XG4iXX0=