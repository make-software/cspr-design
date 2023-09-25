"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var match_size_1 = require("../../utils/match-size");
var text_1 = tslib_1.__importDefault(require("../text/text"));
var StyledText = (0, styled_components_1.default)(text_1.default)(function (_a) {
    var theme = _a.theme, _b = _a.size, size = _b === void 0 ? 2 : _b, _c = _a.transform, transform = _c === void 0 ? 'unset' : _c, _d = _a.lineHeight, lineHeight = _d === void 0 ? 'sm' : _d;
    return ({
        fontWeight: (0, match_size_1.matchSize)({
            1: theme.typography.fontWeight.bold,
            2: theme.typography.fontWeight.medium,
        }, size),
        lineHeight: (0, match_size_1.matchSize)({
            sm: '1.5rem',
            xs: '1.25rem',
            xxs: '0.75rem'
        }, lineHeight),
        fontSize: '0.625rem',
        textTransform: transform,
    });
});
function Label(props) {
    return (0, jsx_runtime_1.jsx)(StyledText, tslib_1.__assign({}, props));
}
exports.Label = Label;
exports.default = Label;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvbGFiZWwvbGFiZWwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBRXZDLHFEQUFtRDtBQUNuRCw4REFBK0M7QUFXL0MsSUFBTSxVQUFVLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGNBQUksQ0FBQyxDQUM3QixVQUFDLEVBQTJEO1FBQXpELEtBQUssV0FBQSxFQUFFLFlBQVEsRUFBUixJQUFJLG1CQUFHLENBQUMsS0FBQSxFQUFFLGlCQUFtQixFQUFuQixTQUFTLG1CQUFHLE9BQU8sS0FBQSxFQUFFLGtCQUFpQixFQUFqQixVQUFVLG1CQUFHLElBQUksS0FBQTtJQUFPLE9BQUEsQ0FBQztRQUNoRSxVQUFVLEVBQUUsSUFBQSxzQkFBUyxFQUNuQjtZQUNFLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJO1lBQ25DLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNO1NBQ3RDLEVBQ0QsSUFBSSxDQUNMO1FBQ0MsVUFBVSxFQUFFLElBQUEsc0JBQVMsRUFDakI7WUFDSSxFQUFFLEVBQUUsUUFBUTtZQUNaLEVBQUUsRUFBRSxTQUFTO1lBQ2IsR0FBRyxFQUFFLFNBQVM7U0FDakIsRUFDRCxVQUFVLENBQ2I7UUFDSCxRQUFRLEVBQUUsVUFBVTtRQUNwQixhQUFhLEVBQUUsU0FBUztLQUN6QixDQUFDO0FBbEIrRCxDQWtCL0QsQ0FDSCxDQUFDO0FBRUYsU0FBZ0IsS0FBSyxDQUFDLEtBQWlCO0lBQ3JDLE9BQU8sdUJBQUMsVUFBVSx1QkFBSyxLQUFLLEVBQUksQ0FBQztBQUNuQyxDQUFDO0FBRkQsc0JBRUM7QUFFRCxrQkFBZSxLQUFLLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IG1hdGNoU2l6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL21hdGNoLXNpemUnO1xyXG5pbXBvcnQgVGV4dCwgeyBUZXh0UHJvcHMgfSBmcm9tICcuLi90ZXh0L3RleHQnO1xyXG5cclxudHlwZSBUcmFuc2Zvcm0gPSAndXBwZXJjYXNlJyB8ICdjYXBpdGFsaXplJyB8ICd1bnNldCc7XHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cclxuZXhwb3J0IGludGVyZmFjZSBMYWJlbFByb3BzIGV4dGVuZHMgVGV4dFByb3BzIHtcclxuICBzaXplOiAxIHwgMjtcclxuICB0cmFuc2Zvcm0/OiBUcmFuc2Zvcm07XHJcbiAgbGluZUhlaWdodD86ICd4eHMnIHwgJ3hzJyB8ICdzbSc7XHJcbn1cclxuXHJcbmNvbnN0IFN0eWxlZFRleHQgPSBzdHlsZWQoVGV4dCk8TGFiZWxQcm9wcz4oXHJcbiAgKHsgdGhlbWUsIHNpemUgPSAyLCB0cmFuc2Zvcm0gPSAndW5zZXQnLCBsaW5lSGVpZ2h0ID0gJ3NtJyB9KSA9PiAoe1xyXG4gICAgZm9udFdlaWdodDogbWF0Y2hTaXplKFxyXG4gICAgICB7XHJcbiAgICAgICAgMTogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LmJvbGQsXHJcbiAgICAgICAgMjogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Lm1lZGl1bSxcclxuICAgICAgfSxcclxuICAgICAgc2l6ZVxyXG4gICAgKSxcclxuICAgICAgbGluZUhlaWdodDogbWF0Y2hTaXplKFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHNtOiAnMS41cmVtJyxcclxuICAgICAgICAgICAgICB4czogJzEuMjVyZW0nLFxyXG4gICAgICAgICAgICAgIHh4czogJzAuNzVyZW0nXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbGluZUhlaWdodFxyXG4gICAgICApLFxyXG4gICAgZm9udFNpemU6ICcwLjYyNXJlbScsXHJcbiAgICB0ZXh0VHJhbnNmb3JtOiB0cmFuc2Zvcm0sXHJcbiAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMYWJlbChwcm9wczogTGFiZWxQcm9wcykge1xyXG4gIHJldHVybiA8U3R5bGVkVGV4dCB7Li4ucHJvcHN9IC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYWJlbDtcclxuIl19