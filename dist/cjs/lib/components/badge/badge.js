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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYmFkZ2UvYmFkZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBQ3ZDLGlFQUFtQztBQWlCbkMsSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLEtBQUssRUFBRSxLQUEyQjtJQUMxRCxPQUFBLENBQUM7UUFDQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFNBQVM7UUFDdkMsTUFBTSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0I7UUFDakQsSUFBSSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO1FBQ3hDLElBQUksRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO1FBQzlDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7S0FDMUQsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQU5ULENBTVMsQ0FBQztBQUVaLElBQU0sV0FBVyxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFtQixVQUFDLEVBQTZCO1FBQTNCLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLFNBQVMsZUFBQTtJQUFPLE9BQUEsQ0FBQztRQUNuRixPQUFPLEVBQUUsTUFBTTtRQUNmLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLEtBQUssRUFBRSxhQUFhO1FBQ3BCLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWE7UUFDbkUsVUFBVSxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7UUFDNUMsWUFBWSxFQUFFLE1BQU07UUFDcEIsU0FBUyxFQUFFLE1BQU07UUFDakIsT0FBTyxFQUFFLGVBQWU7S0FDekIsQ0FBQztBQVRrRixDQVNsRixDQUFDLENBQUM7QUFFSixJQUFNLHlCQUF5QixHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUMzRCxDQUFDLEVBQUU7WUFDRCxNQUFNLEVBQUUsU0FBUztZQUNqQixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWE7U0FDNUM7UUFDRCxTQUFTLEVBQUU7WUFDVCxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtTQUNoRDtLQUNGLENBQUM7QUFSMEQsQ0FRMUQsQ0FBQyxDQUFDO0FBRUcsSUFBTSxLQUFLLEdBQUcsVUFBQyxFQU1UO1FBTFgsS0FBSyxXQUFBLEVBQ0wsaUJBQW1CLEVBQW5CLFNBQVMsbUJBQUcsT0FBTyxLQUFBLEVBQ25CLFNBQVMsZUFBQSxFQUNULGtCQUFpQixFQUFqQixVQUFVLG1CQUFHLElBQUksS0FBQSxFQUNqQixrQkFBaUIsRUFBakIsVUFBVSxtQkFBRyxJQUFJLEtBQUE7SUFFakIsT0FBTyxDQUNMLHVCQUFDLFdBQVcscUJBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxnQkFDbkQsdUJBQUMsZUFBSyxxQkFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsZ0JBQzVELHVCQUFDLHlCQUF5QixjQUFFLEtBQUssR0FBNkIsSUFDeEQsSUFDSSxDQUNmLENBQUM7QUFDSixDQUFDLENBQUM7QUFkVyxRQUFBLEtBQUssU0FjaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExhYmVsIGZyb20gJy4uL2xhYmVsL2xhYmVsJztcclxuXHJcbnR5cGUgQmFkZ2VCYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nIHwgJ3Zpb2xldCcgfCAnYmx1ZScgfCAnZ3JheScgfCAnZmlsbEJsdWVHcmFkaWVudCc7XHJcblxyXG5pbnRlcmZhY2UgU3R5bGVkQmFkZ2VQcm9wcyB7XHJcbiAgYmdDb2xvcjogQmFkZ2VCYWNrZ3JvdW5kQ29sb3I7XHJcbiAgdGV4dENvbG9yPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhZGdlUHJvcHMge1xyXG4gIGxhYmVsOiBzdHJpbmcgfCBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgdmFyaWF0aW9uPzogQmFkZ2VCYWNrZ3JvdW5kQ29sb3I7XHJcbiAgdGV4dENvbG9yPzogc3RyaW5nO1xyXG4gIGNhcGl0YWxpemU/OiBib29sZWFuO1xyXG4gIGxpbmVIZWlnaHQ/OiAneHhzJyB8ICd4cycgfCAnc20nO1xyXG59XHJcblxyXG5jb25zdCBnZXRCYWRnZUJnQ29sb3JzID0gKHRoZW1lLCBjb2xvcjogQmFkZ2VCYWNrZ3JvdW5kQ29sb3IpID0+XHJcbiAgKHtcclxuICAgIGdyZWVuOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxHcmVlbixcclxuICAgIHZpb2xldDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsVmlvbGV0R3JhZGllbnQsXHJcbiAgICBibHVlOiB0aGVtZS5jb2xvclNwZWNpYWxDYXNlLmJsdWVCYW5uZXIyLFxyXG4gICAgZ3JheTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UXVhdGVybmFyeSxcclxuICAgIGZpbGxCbHVlR3JhZGllbnQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbEJsdWVHcmFkaWVudCxcclxuICB9W2NvbG9yXSk7XHJcblxyXG5jb25zdCBTdHlsZWRCYWRnZSA9IHN0eWxlZC5kaXY8U3R5bGVkQmFkZ2VQcm9wcz4oKHsgdGhlbWUsIGJnQ29sb3IsIHRleHRDb2xvciB9KSA9PiAoe1xyXG4gIGRpc3BsYXk6ICdmbGV4JyxcclxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICB3aWR0aDogJ2ZpdC1jb250ZW50JyxcclxuICBjb2xvcjogdGV4dENvbG9yID8gdGV4dENvbG9yIDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50T25GaWxsLFxyXG4gIGJhY2tncm91bmQ6IGdldEJhZGdlQmdDb2xvcnModGhlbWUsIGJnQ29sb3IpLFxyXG4gIGJvcmRlclJhZGl1czogJzQwcHgnLFxyXG4gIG1pbkhlaWdodDogJzE3cHgnLFxyXG4gIHBhZGRpbmc6ICcwIDZweCAxcHggNnB4JyxcclxufSkpO1xyXG5cclxuY29uc3QgU3R5bGVkTGFiZWxDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBhOiB7XHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRPbkZpbGwsXHJcbiAgfSxcclxuICAnYTpob3Zlcic6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRRdWF0ZXJuYXJ5LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBjb25zdCBCYWRnZSA9ICh7XHJcbiAgbGFiZWwsXHJcbiAgdmFyaWF0aW9uID0gJ2dyZWVuJyxcclxuICB0ZXh0Q29sb3IsXHJcbiAgY2FwaXRhbGl6ZSA9IHRydWUsXHJcbiAgbGluZUhlaWdodCA9ICdzbSdcclxufTogQmFkZ2VQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkQmFkZ2UgYmdDb2xvcj17dmFyaWF0aW9ufSB0ZXh0Q29sb3I9e3RleHRDb2xvcn0+XHJcbiAgICAgIDxMYWJlbCBzaXplPXsyfSBjYXBpdGFsaXplPXtjYXBpdGFsaXplfSBsaW5lSGVpZ2h0PXtsaW5lSGVpZ2h0fT5cclxuICAgICAgICA8U3R5bGVkTGFiZWxDb250ZW50V3JhcHBlcj57bGFiZWx9PC9TdHlsZWRMYWJlbENvbnRlbnRXcmFwcGVyPlxyXG4gICAgICA8L0xhYmVsPlxyXG4gICAgPC9TdHlsZWRCYWRnZT5cclxuICApO1xyXG59O1xyXG4iXX0=