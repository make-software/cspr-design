"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyText = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var match_size_1 = require("../../utils/match-size");
var text_1 = tslib_1.__importDefault(require("../text/text"));
var StyledText = (0, styled_components_1.default)(text_1.default)(function (_a) {
    var theme = _a.theme, _b = _a.size, size = _b === void 0 ? 3 : _b, _c = _a.scale, scale = _c === void 0 ? 'sm' : _c, _d = _a.lineHeight, lineHeight = _d === void 0 ? 'sm' : _d;
    return ({
        fontWeight: (0, match_size_1.matchSize)({
            1: theme.typography.fontWeight.semiBold,
            2: theme.typography.fontWeight.medium,
            3: theme.typography.fontWeight.regular,
            4: theme.typography.fontWeight.light,
        }, size),
        fontSize: (0, match_size_1.matchSize)({
            xl: '1.25rem',
            lg: '1.125rem',
            md: '1rem',
            sm: '0.875rem',
            xs: '0.813rem',
        }, scale),
        lineHeight: (0, match_size_1.matchSize)({
            sm: '1.5rem',
            xs: '1.25rem',
        }, lineHeight),
    });
});
exports.BodyText = react_1.default.forwardRef(function BodyText(props, ref) {
    return (0, jsx_runtime_1.jsx)(StyledText, tslib_1.__assign({ ref: ref }, props));
});
exports.default = exports.BodyText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS10ZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2JvZHktdGV4dC9ib2R5LXRleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLGdGQUF1QztBQUV2QyxxREFBbUQ7QUFDbkQsOERBQStDO0FBVy9DLElBQU0sVUFBVSxHQUFHLElBQUEsMkJBQU0sRUFBQyxjQUFJLENBQUMsQ0FDN0IsVUFBQyxFQUFvRDtRQUFsRCxLQUFLLFdBQUEsRUFBRSxZQUFRLEVBQVIsSUFBSSxtQkFBRyxDQUFDLEtBQUEsRUFBRSxhQUFZLEVBQVosS0FBSyxtQkFBRyxJQUFJLEtBQUEsRUFBRSxrQkFBaUIsRUFBakIsVUFBVSxtQkFBRyxJQUFJLEtBQUE7SUFBTyxPQUFBLENBQUM7UUFDekQsVUFBVSxFQUFFLElBQUEsc0JBQVMsRUFDbkI7WUFDRSxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsUUFBUTtZQUN2QyxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTTtZQUNyQyxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTztZQUN0QyxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSztTQUNyQyxFQUNELElBQUksQ0FDTDtRQUNELFFBQVEsRUFBRSxJQUFBLHNCQUFTLEVBQ2pCO1lBQ0UsRUFBRSxFQUFFLFNBQVM7WUFDYixFQUFFLEVBQUUsVUFBVTtZQUNkLEVBQUUsRUFBRSxNQUFNO1lBQ1YsRUFBRSxFQUFFLFVBQVU7WUFDZCxFQUFFLEVBQUUsVUFBVTtTQUNmLEVBQ0QsS0FBSyxDQUNOO1FBQ0QsVUFBVSxFQUFFLElBQUEsc0JBQVMsRUFDbkI7WUFDRSxFQUFFLEVBQUUsUUFBUTtZQUNaLEVBQUUsRUFBRSxTQUFTO1NBQ2QsRUFDRCxVQUFVLENBQ1g7S0FDRixDQUFDO0FBM0J3RCxDQTJCeEQsQ0FDSCxDQUFDO0FBRVcsUUFBQSxRQUFRLEdBQUcsZUFBSyxDQUFDLFVBQVUsQ0FBcUIsU0FBUyxRQUFRLENBQzVFLEtBQW9CLEVBQ3BCLEdBQUc7SUFFSCxPQUFPLHVCQUFDLFVBQVUscUJBQUMsR0FBRyxFQUFFLEdBQUcsSUFBTSxLQUFLLEVBQUksQ0FBQztBQUM3QyxDQUFDLENBQUMsQ0FBQztBQUVILGtCQUFlLGdCQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IG1hdGNoU2l6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL21hdGNoLXNpemUnO1xuaW1wb3J0IFRleHQsIHsgVGV4dFByb3BzIH0gZnJvbSAnLi4vdGV4dC90ZXh0JztcblxudHlwZSBSZWYgPSBIVE1MU3BhbkVsZW1lbnQ7XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBCb2R5VGV4dFByb3BzIGV4dGVuZHMgVGV4dFByb3BzIHtcbiAgc2l6ZTogMSB8IDIgfCAzIHwgNDtcbiAgc2NhbGU/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJztcbiAgbGluZUhlaWdodD86ICd4cycgfCAnc20nO1xufVxuXG5jb25zdCBTdHlsZWRUZXh0ID0gc3R5bGVkKFRleHQpPEJvZHlUZXh0UHJvcHM+KFxuICAoeyB0aGVtZSwgc2l6ZSA9IDMsIHNjYWxlID0gJ3NtJywgbGluZUhlaWdodCA9ICdzbScgfSkgPT4gKHtcbiAgICBmb250V2VpZ2h0OiBtYXRjaFNpemUoXG4gICAgICB7XG4gICAgICAgIDE6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5zZW1pQm9sZCxcbiAgICAgICAgMjogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Lm1lZGl1bSxcbiAgICAgICAgMzogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LnJlZ3VsYXIsXG4gICAgICAgIDQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5saWdodCxcbiAgICAgIH0sXG4gICAgICBzaXplXG4gICAgKSxcbiAgICBmb250U2l6ZTogbWF0Y2hTaXplKFxuICAgICAge1xuICAgICAgICB4bDogJzEuMjVyZW0nLFxuICAgICAgICBsZzogJzEuMTI1cmVtJyxcbiAgICAgICAgbWQ6ICcxcmVtJyxcbiAgICAgICAgc206ICcwLjg3NXJlbScsXG4gICAgICAgIHhzOiAnMC44MTNyZW0nLFxuICAgICAgfSxcbiAgICAgIHNjYWxlXG4gICAgKSxcbiAgICBsaW5lSGVpZ2h0OiBtYXRjaFNpemUoXG4gICAgICB7XG4gICAgICAgIHNtOiAnMS41cmVtJyxcbiAgICAgICAgeHM6ICcxLjI1cmVtJyxcbiAgICAgIH0sXG4gICAgICBsaW5lSGVpZ2h0XG4gICAgKSxcbiAgfSlcbik7XG5cbmV4cG9ydCBjb25zdCBCb2R5VGV4dCA9IFJlYWN0LmZvcndhcmRSZWY8UmVmLCBCb2R5VGV4dFByb3BzPihmdW5jdGlvbiBCb2R5VGV4dChcbiAgcHJvcHM6IEJvZHlUZXh0UHJvcHMsXG4gIHJlZlxuKSB7XG4gIHJldHVybiA8U3R5bGVkVGV4dCByZWY9e3JlZn0gey4uLnByb3BzfSAvPjtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBCb2R5VGV4dDtcbiJdfQ==