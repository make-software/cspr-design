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
    var label = _a.label, _b = _a.variation, variation = _b === void 0 ? 'green' : _b, _c = _a.capitalize, capitalize = _c === void 0 ? true : _c;
    return ((0, jsx_runtime_1.jsx)(StyledBadge, tslib_1.__assign({ bgColor: variation }, { children: (0, jsx_runtime_1.jsx)(label_1.default, tslib_1.__assign({ size: 2, capitalize: capitalize }, { children: (0, jsx_runtime_1.jsx)(StyledLabelContentWrapper, { children: label }) })) })));
};
exports.Badge = Badge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYmFkZ2UvYmFkZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBQ3ZDLGlFQUFtQztBQWNuQyxJQUFNLGdCQUFnQixHQUFHLFVBQUMsS0FBSyxFQUFFLEtBQTJCO0lBQzFELE9BQUEsQ0FBQztRQUNDLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsU0FBUztRQUN2QyxNQUFNLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQjtRQUNqRCxJQUFJLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7UUFDeEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7UUFDOUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQjtLQUMxRCxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBTlQsQ0FNUyxDQUFDO0FBRVosSUFBTSxXQUFXLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQW1CLFVBQUMsRUFBa0I7UUFBaEIsS0FBSyxXQUFBLEVBQUUsT0FBTyxhQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ3hFLE9BQU8sRUFBRSxNQUFNO1FBQ2YsVUFBVSxFQUFFLFFBQVE7UUFDcEIsS0FBSyxFQUFFLGFBQWE7UUFDcEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1FBQzNDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO1FBQzVDLFlBQVksRUFBRSxNQUFNO1FBQ3BCLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLE9BQU8sRUFBRSxlQUFlO0tBQ3pCLENBQUM7QUFUdUUsQ0FTdkUsQ0FBQyxDQUFDO0FBRUosSUFBTSx5QkFBeUIsR0FBRywyQkFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDM0QsQ0FBQyxFQUFFO1lBQ0QsTUFBTSxFQUFFLFNBQVM7WUFDakIsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1NBQzVDO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7U0FDaEQ7S0FDRixDQUFDO0FBUjBELENBUTFELENBQUMsQ0FBQztBQUVHLElBQU0sS0FBSyxHQUFHLFVBQUMsRUFJVDtRQUhYLEtBQUssV0FBQSxFQUNMLGlCQUFtQixFQUFuQixTQUFTLG1CQUFHLE9BQU8sS0FBQSxFQUNuQixrQkFBaUIsRUFBakIsVUFBVSxtQkFBRyxJQUFJLEtBQUE7SUFFakIsT0FBTyxDQUNMLHVCQUFDLFdBQVcscUJBQUMsT0FBTyxFQUFFLFNBQVMsZ0JBQzdCLHVCQUFDLGVBQUsscUJBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsVUFBVSxnQkFDcEMsdUJBQUMseUJBQXlCLGNBQUUsS0FBSyxHQUE2QixJQUN4RCxJQUNJLENBQ2YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQVpXLFFBQUEsS0FBSyxTQVloQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMYWJlbCBmcm9tICcuLi9sYWJlbC9sYWJlbCc7XG5cbnR5cGUgQmFkZ2VCYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nIHwgJ3Zpb2xldCcgfCAnYmx1ZScgfCAnZ3JheScgfCAnZmlsbEJsdWVHcmFkaWVudCc7XG5cbmludGVyZmFjZSBTdHlsZWRCYWRnZVByb3BzIHtcbiAgYmdDb2xvcjogQmFkZ2VCYWNrZ3JvdW5kQ29sb3I7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFkZ2VQcm9wcyB7XG4gIGxhYmVsOiBzdHJpbmcgfCBSZWFjdC5SZWFjdE5vZGU7XG4gIHZhcmlhdGlvbj86IEJhZGdlQmFja2dyb3VuZENvbG9yO1xuICBjYXBpdGFsaXplPzogYm9vbGVhbjtcbn1cblxuY29uc3QgZ2V0QmFkZ2VCZ0NvbG9ycyA9ICh0aGVtZSwgY29sb3I6IEJhZGdlQmFja2dyb3VuZENvbG9yKSA9PlxuICAoe1xuICAgIGdyZWVuOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxHcmVlbixcbiAgICB2aW9sZXQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFZpb2xldEdyYWRpZW50LFxuICAgIGJsdWU6IHRoZW1lLmNvbG9yU3BlY2lhbENhc2UuYmx1ZUJhbm5lcjIsXG4gICAgZ3JheTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UXVhdGVybmFyeSxcbiAgICBmaWxsQmx1ZUdyYWRpZW50OiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxCbHVlR3JhZGllbnQsXG4gIH1bY29sb3JdKTtcblxuY29uc3QgU3R5bGVkQmFkZ2UgPSBzdHlsZWQuZGl2PFN0eWxlZEJhZGdlUHJvcHM+KCh7IHRoZW1lLCBiZ0NvbG9yIH0pID0+ICh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIHdpZHRoOiAnZml0LWNvbnRlbnQnLFxuICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50T25GaWxsLFxuICBiYWNrZ3JvdW5kOiBnZXRCYWRnZUJnQ29sb3JzKHRoZW1lLCBiZ0NvbG9yKSxcbiAgYm9yZGVyUmFkaXVzOiAnNDBweCcsXG4gIG1pbkhlaWdodDogJzE3cHgnLFxuICBwYWRkaW5nOiAnMCA2cHggMXB4IDZweCcsXG59KSk7XG5cbmNvbnN0IFN0eWxlZExhYmVsQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIGE6IHtcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50T25GaWxsLFxuICB9LFxuICAnYTpob3Zlcic6IHtcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UXVhdGVybmFyeSxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGNvbnN0IEJhZGdlID0gKHtcbiAgbGFiZWwsXG4gIHZhcmlhdGlvbiA9ICdncmVlbicsXG4gIGNhcGl0YWxpemUgPSB0cnVlLFxufTogQmFkZ2VQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRCYWRnZSBiZ0NvbG9yPXt2YXJpYXRpb259PlxuICAgICAgPExhYmVsIHNpemU9ezJ9IGNhcGl0YWxpemU9e2NhcGl0YWxpemV9PlxuICAgICAgICA8U3R5bGVkTGFiZWxDb250ZW50V3JhcHBlcj57bGFiZWx9PC9TdHlsZWRMYWJlbENvbnRlbnRXcmFwcGVyPlxuICAgICAgPC9MYWJlbD5cbiAgICA8L1N0eWxlZEJhZGdlPlxuICApO1xufTtcbiJdfQ==