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
    var label = _a.label, _b = _a.variation, variation = _b === void 0 ? 'green' : _b, _c = _a.capitalize, capitalize = _c === void 0 ? true : _c, _d = _a.lineHeight, lineHeight = _d === void 0 ? 'sm' : _d;
    return ((0, jsx_runtime_1.jsx)(StyledBadge, tslib_1.__assign({ bgColor: variation }, { children: (0, jsx_runtime_1.jsx)(label_1.default, tslib_1.__assign({ size: 2, capitalize: capitalize, lineHeight: lineHeight }, { children: (0, jsx_runtime_1.jsx)(StyledLabelContentWrapper, { children: label }) })) })));
};
exports.Badge = Badge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYmFkZ2UvYmFkZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBQ3ZDLGlFQUFtQztBQWVuQyxJQUFNLGdCQUFnQixHQUFHLFVBQUMsS0FBSyxFQUFFLEtBQTJCO0lBQzFELE9BQUEsQ0FBQztRQUNDLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsU0FBUztRQUN2QyxNQUFNLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQjtRQUNqRCxJQUFJLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7UUFDeEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7UUFDOUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQjtLQUMxRCxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBTlQsQ0FNUyxDQUFDO0FBRVosSUFBTSxXQUFXLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQW1CLFVBQUMsRUFBa0I7UUFBaEIsS0FBSyxXQUFBLEVBQUUsT0FBTyxhQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ3hFLE9BQU8sRUFBRSxNQUFNO1FBQ2YsVUFBVSxFQUFFLFFBQVE7UUFDcEIsS0FBSyxFQUFFLGFBQWE7UUFDcEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1FBQzNDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO1FBQzVDLFlBQVksRUFBRSxNQUFNO1FBQ3BCLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLE9BQU8sRUFBRSxlQUFlO0tBQ3pCLENBQUM7QUFUdUUsQ0FTdkUsQ0FBQyxDQUFDO0FBRUosSUFBTSx5QkFBeUIsR0FBRywyQkFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDM0QsQ0FBQyxFQUFFO1lBQ0QsTUFBTSxFQUFFLFNBQVM7WUFDakIsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1NBQzVDO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7U0FDaEQ7S0FDRixDQUFDO0FBUjBELENBUTFELENBQUMsQ0FBQztBQUVHLElBQU0sS0FBSyxHQUFHLFVBQUMsRUFLVDtRQUpYLEtBQUssV0FBQSxFQUNMLGlCQUFtQixFQUFuQixTQUFTLG1CQUFHLE9BQU8sS0FBQSxFQUNuQixrQkFBaUIsRUFBakIsVUFBVSxtQkFBRyxJQUFJLEtBQUEsRUFDakIsa0JBQWlCLEVBQWpCLFVBQVUsbUJBQUcsSUFBSSxLQUFBO0lBRWpCLE9BQU8sQ0FDTCx1QkFBQyxXQUFXLHFCQUFDLE9BQU8sRUFBRSxTQUFTLGdCQUM3Qix1QkFBQyxlQUFLLHFCQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxnQkFDNUQsdUJBQUMseUJBQXlCLGNBQUUsS0FBSyxHQUE2QixJQUN4RCxJQUNJLENBQ2YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQWJXLFFBQUEsS0FBSyxTQWFoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMYWJlbCBmcm9tICcuLi9sYWJlbC9sYWJlbCc7XG5cbnR5cGUgQmFkZ2VCYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nIHwgJ3Zpb2xldCcgfCAnYmx1ZScgfCAnZ3JheScgfCAnZmlsbEJsdWVHcmFkaWVudCc7XG5cbmludGVyZmFjZSBTdHlsZWRCYWRnZVByb3BzIHtcbiAgYmdDb2xvcjogQmFkZ2VCYWNrZ3JvdW5kQ29sb3I7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFkZ2VQcm9wcyB7XG4gIGxhYmVsOiBzdHJpbmcgfCBSZWFjdC5SZWFjdE5vZGU7XG4gIHZhcmlhdGlvbj86IEJhZGdlQmFja2dyb3VuZENvbG9yO1xuICBjYXBpdGFsaXplPzogYm9vbGVhbjtcbiAgbGluZUhlaWdodD86ICd4eHMnIHwgJ3hzJyB8ICdzbSc7XG59XG5cbmNvbnN0IGdldEJhZGdlQmdDb2xvcnMgPSAodGhlbWUsIGNvbG9yOiBCYWRnZUJhY2tncm91bmRDb2xvcikgPT5cbiAgKHtcbiAgICBncmVlbjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsR3JlZW4sXG4gICAgdmlvbGV0OiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxWaW9sZXRHcmFkaWVudCxcbiAgICBibHVlOiB0aGVtZS5jb2xvclNwZWNpYWxDYXNlLmJsdWVCYW5uZXIyLFxuICAgIGdyYXk6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFF1YXRlcm5hcnksXG4gICAgZmlsbEJsdWVHcmFkaWVudDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsQmx1ZUdyYWRpZW50LFxuICB9W2NvbG9yXSk7XG5cbmNvbnN0IFN0eWxlZEJhZGdlID0gc3R5bGVkLmRpdjxTdHlsZWRCYWRnZVByb3BzPigoeyB0aGVtZSwgYmdDb2xvciB9KSA9PiAoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICB3aWR0aDogJ2ZpdC1jb250ZW50JyxcbiAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudE9uRmlsbCxcbiAgYmFja2dyb3VuZDogZ2V0QmFkZ2VCZ0NvbG9ycyh0aGVtZSwgYmdDb2xvciksXG4gIGJvcmRlclJhZGl1czogJzQwcHgnLFxuICBtaW5IZWlnaHQ6ICcxN3B4JyxcbiAgcGFkZGluZzogJzAgNnB4IDFweCA2cHgnLFxufSkpO1xuXG5jb25zdCBTdHlsZWRMYWJlbENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBhOiB7XG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudE9uRmlsbCxcbiAgfSxcbiAgJ2E6aG92ZXInOiB7XG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFF1YXRlcm5hcnksXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBjb25zdCBCYWRnZSA9ICh7XG4gIGxhYmVsLFxuICB2YXJpYXRpb24gPSAnZ3JlZW4nLFxuICBjYXBpdGFsaXplID0gdHJ1ZSxcbiAgbGluZUhlaWdodCA9ICdzbSdcbn06IEJhZGdlUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkQmFkZ2UgYmdDb2xvcj17dmFyaWF0aW9ufT5cbiAgICAgIDxMYWJlbCBzaXplPXsyfSBjYXBpdGFsaXplPXtjYXBpdGFsaXplfSBsaW5lSGVpZ2h0PXtsaW5lSGVpZ2h0fT5cbiAgICAgICAgPFN0eWxlZExhYmVsQ29udGVudFdyYXBwZXI+e2xhYmVsfTwvU3R5bGVkTGFiZWxDb250ZW50V3JhcHBlcj5cbiAgICAgIDwvTGFiZWw+XG4gICAgPC9TdHlsZWRCYWRnZT5cbiAgKTtcbn07XG4iXX0=