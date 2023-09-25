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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYmFkZ2UvYmFkZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBQ3ZDLGlFQUFtQztBQWVuQyxJQUFNLGdCQUFnQixHQUFHLFVBQUMsS0FBSyxFQUFFLEtBQTJCO0lBQzFELE9BQUEsQ0FBQztRQUNDLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsU0FBUztRQUN2QyxNQUFNLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQjtRQUNqRCxJQUFJLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7UUFDeEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7UUFDOUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQjtLQUMxRCxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBTlQsQ0FNUyxDQUFDO0FBRVosSUFBTSxXQUFXLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQW1CLFVBQUMsRUFBa0I7UUFBaEIsS0FBSyxXQUFBLEVBQUUsT0FBTyxhQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ3hFLE9BQU8sRUFBRSxNQUFNO1FBQ2YsVUFBVSxFQUFFLFFBQVE7UUFDcEIsS0FBSyxFQUFFLGFBQWE7UUFDcEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1FBQzNDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO1FBQzVDLFlBQVksRUFBRSxNQUFNO1FBQ3BCLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLE9BQU8sRUFBRSxlQUFlO0tBQ3pCLENBQUM7QUFUdUUsQ0FTdkUsQ0FBQyxDQUFDO0FBRUosSUFBTSx5QkFBeUIsR0FBRywyQkFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDM0QsQ0FBQyxFQUFFO1lBQ0QsTUFBTSxFQUFFLFNBQVM7WUFDakIsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1NBQzVDO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7U0FDaEQ7S0FDRixDQUFDO0FBUjBELENBUTFELENBQUMsQ0FBQztBQUVHLElBQU0sS0FBSyxHQUFHLFVBQUMsRUFLVDtRQUpYLEtBQUssV0FBQSxFQUNMLGlCQUFtQixFQUFuQixTQUFTLG1CQUFHLE9BQU8sS0FBQSxFQUNuQixrQkFBaUIsRUFBakIsVUFBVSxtQkFBRyxJQUFJLEtBQUEsRUFDakIsa0JBQWlCLEVBQWpCLFVBQVUsbUJBQUcsSUFBSSxLQUFBO0lBRWpCLE9BQU8sQ0FDTCx1QkFBQyxXQUFXLHFCQUFDLE9BQU8sRUFBRSxTQUFTLGdCQUM3Qix1QkFBQyxlQUFLLHFCQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxnQkFDNUQsdUJBQUMseUJBQXlCLGNBQUUsS0FBSyxHQUE2QixJQUN4RCxJQUNJLENBQ2YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQWJXLFFBQUEsS0FBSyxTQWFoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vbGFiZWwvbGFiZWwnO1xyXG5cclxudHlwZSBCYWRnZUJhY2tncm91bmRDb2xvciA9ICdncmVlbicgfCAndmlvbGV0JyB8ICdibHVlJyB8ICdncmF5JyB8ICdmaWxsQmx1ZUdyYWRpZW50JztcclxuXHJcbmludGVyZmFjZSBTdHlsZWRCYWRnZVByb3BzIHtcclxuICBiZ0NvbG9yOiBCYWRnZUJhY2tncm91bmRDb2xvcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYWRnZVByb3BzIHtcclxuICBsYWJlbDogc3RyaW5nIHwgUmVhY3QuUmVhY3ROb2RlO1xyXG4gIHZhcmlhdGlvbj86IEJhZGdlQmFja2dyb3VuZENvbG9yO1xyXG4gIGNhcGl0YWxpemU/OiBib29sZWFuO1xyXG4gIGxpbmVIZWlnaHQ/OiAneHhzJyB8ICd4cycgfCAnc20nO1xyXG59XHJcblxyXG5jb25zdCBnZXRCYWRnZUJnQ29sb3JzID0gKHRoZW1lLCBjb2xvcjogQmFkZ2VCYWNrZ3JvdW5kQ29sb3IpID0+XHJcbiAgKHtcclxuICAgIGdyZWVuOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxHcmVlbixcclxuICAgIHZpb2xldDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsVmlvbGV0R3JhZGllbnQsXHJcbiAgICBibHVlOiB0aGVtZS5jb2xvclNwZWNpYWxDYXNlLmJsdWVCYW5uZXIyLFxyXG4gICAgZ3JheTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UXVhdGVybmFyeSxcclxuICAgIGZpbGxCbHVlR3JhZGllbnQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbEJsdWVHcmFkaWVudCxcclxuICB9W2NvbG9yXSk7XHJcblxyXG5jb25zdCBTdHlsZWRCYWRnZSA9IHN0eWxlZC5kaXY8U3R5bGVkQmFkZ2VQcm9wcz4oKHsgdGhlbWUsIGJnQ29sb3IgfSkgPT4gKHtcclxuICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgd2lkdGg6ICdmaXQtY29udGVudCcsXHJcbiAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudE9uRmlsbCxcclxuICBiYWNrZ3JvdW5kOiBnZXRCYWRnZUJnQ29sb3JzKHRoZW1lLCBiZ0NvbG9yKSxcclxuICBib3JkZXJSYWRpdXM6ICc0MHB4JyxcclxuICBtaW5IZWlnaHQ6ICcxN3B4JyxcclxuICBwYWRkaW5nOiAnMCA2cHggMXB4IDZweCcsXHJcbn0pKTtcclxuXHJcbmNvbnN0IFN0eWxlZExhYmVsQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgYToge1xyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50T25GaWxsLFxyXG4gIH0sXHJcbiAgJ2E6aG92ZXInOiB7XHJcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UXVhdGVybmFyeSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgY29uc3QgQmFkZ2UgPSAoe1xyXG4gIGxhYmVsLFxyXG4gIHZhcmlhdGlvbiA9ICdncmVlbicsXHJcbiAgY2FwaXRhbGl6ZSA9IHRydWUsXHJcbiAgbGluZUhlaWdodCA9ICdzbSdcclxufTogQmFkZ2VQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkQmFkZ2UgYmdDb2xvcj17dmFyaWF0aW9ufT5cclxuICAgICAgPExhYmVsIHNpemU9ezJ9IGNhcGl0YWxpemU9e2NhcGl0YWxpemV9IGxpbmVIZWlnaHQ9e2xpbmVIZWlnaHR9PlxyXG4gICAgICAgIDxTdHlsZWRMYWJlbENvbnRlbnRXcmFwcGVyPntsYWJlbH08L1N0eWxlZExhYmVsQ29udGVudFdyYXBwZXI+XHJcbiAgICAgIDwvTGFiZWw+XHJcbiAgICA8L1N0eWxlZEJhZGdlPlxyXG4gICk7XHJcbn07XHJcbiJdfQ==