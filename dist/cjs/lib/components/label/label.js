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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvbGFiZWwvbGFiZWwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBRXZDLHFEQUFtRDtBQUNuRCw4REFBK0M7QUFXL0MsSUFBTSxVQUFVLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGNBQUksQ0FBQyxDQUM3QixVQUFDLEVBQTJEO1FBQXpELEtBQUssV0FBQSxFQUFFLFlBQVEsRUFBUixJQUFJLG1CQUFHLENBQUMsS0FBQSxFQUFFLGlCQUFtQixFQUFuQixTQUFTLG1CQUFHLE9BQU8sS0FBQSxFQUFFLGtCQUFpQixFQUFqQixVQUFVLG1CQUFHLElBQUksS0FBQTtJQUFPLE9BQUEsQ0FBQztRQUNoRSxVQUFVLEVBQUUsSUFBQSxzQkFBUyxFQUNuQjtZQUNFLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJO1lBQ25DLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNO1NBQ3RDLEVBQ0QsSUFBSSxDQUNMO1FBQ0MsVUFBVSxFQUFFLElBQUEsc0JBQVMsRUFDakI7WUFDSSxFQUFFLEVBQUUsUUFBUTtZQUNaLEVBQUUsRUFBRSxTQUFTO1NBQ2hCLEVBQ0QsVUFBVSxDQUNiO1FBQ0gsUUFBUSxFQUFFLFVBQVU7UUFDcEIsYUFBYSxFQUFFLFNBQVM7S0FDekIsQ0FBQztBQWpCK0QsQ0FpQi9ELENBQ0gsQ0FBQztBQUVGLFNBQWdCLEtBQUssQ0FBQyxLQUFpQjtJQUNyQyxPQUFPLHVCQUFDLFVBQVUsdUJBQUssS0FBSyxFQUFJLENBQUM7QUFDbkMsQ0FBQztBQUZELHNCQUVDO0FBRUQsa0JBQWUsS0FBSyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBtYXRjaFNpemUgfSBmcm9tICcuLi8uLi91dGlscy9tYXRjaC1zaXplJztcbmltcG9ydCBUZXh0LCB7IFRleHRQcm9wcyB9IGZyb20gJy4uL3RleHQvdGV4dCc7XG5cbnR5cGUgVHJhbnNmb3JtID0gJ3VwcGVyY2FzZScgfCAnY2FwaXRhbGl6ZScgfCAndW5zZXQnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBpbnRlcmZhY2UgTGFiZWxQcm9wcyBleHRlbmRzIFRleHRQcm9wcyB7XG4gIHNpemU6IDEgfCAyO1xuICB0cmFuc2Zvcm0/OiBUcmFuc2Zvcm07XG4gIGxpbmVIZWlnaHQ/OiAneHMnIHwgJ3NtJztcbn1cblxuY29uc3QgU3R5bGVkVGV4dCA9IHN0eWxlZChUZXh0KTxMYWJlbFByb3BzPihcbiAgKHsgdGhlbWUsIHNpemUgPSAyLCB0cmFuc2Zvcm0gPSAndW5zZXQnLCBsaW5lSGVpZ2h0ID0gJ3NtJyB9KSA9PiAoe1xuICAgIGZvbnRXZWlnaHQ6IG1hdGNoU2l6ZShcbiAgICAgIHtcbiAgICAgICAgMTogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LmJvbGQsXG4gICAgICAgIDI6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5tZWRpdW0sXG4gICAgICB9LFxuICAgICAgc2l6ZVxuICAgICksXG4gICAgICBsaW5lSGVpZ2h0OiBtYXRjaFNpemUoXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBzbTogJzEuNXJlbScsXG4gICAgICAgICAgICAgIHhzOiAnMS4yNXJlbScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsaW5lSGVpZ2h0XG4gICAgICApLFxuICAgIGZvbnRTaXplOiAnMC42MjVyZW0nLFxuICAgIHRleHRUcmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgfSlcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBMYWJlbChwcm9wczogTGFiZWxQcm9wcykge1xuICByZXR1cm4gPFN0eWxlZFRleHQgey4uLnByb3BzfSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFiZWw7XG4iXX0=