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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvbGFiZWwvbGFiZWwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBRXZDLHFEQUFtRDtBQUNuRCw4REFBK0M7QUFXL0MsSUFBTSxVQUFVLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGNBQUksQ0FBQyxDQUM3QixVQUFDLEVBQTJEO1FBQXpELEtBQUssV0FBQSxFQUFFLFlBQVEsRUFBUixJQUFJLG1CQUFHLENBQUMsS0FBQSxFQUFFLGlCQUFtQixFQUFuQixTQUFTLG1CQUFHLE9BQU8sS0FBQSxFQUFFLGtCQUFpQixFQUFqQixVQUFVLG1CQUFHLElBQUksS0FBQTtJQUFPLE9BQUEsQ0FBQztRQUNoRSxVQUFVLEVBQUUsSUFBQSxzQkFBUyxFQUNuQjtZQUNFLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJO1lBQ25DLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNO1NBQ3RDLEVBQ0QsSUFBSSxDQUNMO1FBQ0MsVUFBVSxFQUFFLElBQUEsc0JBQVMsRUFDakI7WUFDSSxFQUFFLEVBQUUsUUFBUTtZQUNaLEVBQUUsRUFBRSxTQUFTO1lBQ2IsR0FBRyxFQUFFLFNBQVM7U0FDakIsRUFDRCxVQUFVLENBQ2I7UUFDSCxRQUFRLEVBQUUsVUFBVTtRQUNwQixhQUFhLEVBQUUsU0FBUztLQUN6QixDQUFDO0FBbEIrRCxDQWtCL0QsQ0FDSCxDQUFDO0FBRUYsU0FBZ0IsS0FBSyxDQUFDLEtBQWlCO0lBQ3JDLE9BQU8sdUJBQUMsVUFBVSx1QkFBSyxLQUFLLEVBQUksQ0FBQztBQUNuQyxDQUFDO0FBRkQsc0JBRUM7QUFFRCxrQkFBZSxLQUFLLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IG1hdGNoU2l6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL21hdGNoLXNpemUnO1xuaW1wb3J0IFRleHQsIHsgVGV4dFByb3BzIH0gZnJvbSAnLi4vdGV4dC90ZXh0JztcblxudHlwZSBUcmFuc2Zvcm0gPSAndXBwZXJjYXNlJyB8ICdjYXBpdGFsaXplJyB8ICd1bnNldCc7XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBMYWJlbFByb3BzIGV4dGVuZHMgVGV4dFByb3BzIHtcbiAgc2l6ZTogMSB8IDI7XG4gIHRyYW5zZm9ybT86IFRyYW5zZm9ybTtcbiAgbGluZUhlaWdodD86ICd4eHMnIHwgJ3hzJyB8ICdzbSc7XG59XG5cbmNvbnN0IFN0eWxlZFRleHQgPSBzdHlsZWQoVGV4dCk8TGFiZWxQcm9wcz4oXG4gICh7IHRoZW1lLCBzaXplID0gMiwgdHJhbnNmb3JtID0gJ3Vuc2V0JywgbGluZUhlaWdodCA9ICdzbScgfSkgPT4gKHtcbiAgICBmb250V2VpZ2h0OiBtYXRjaFNpemUoXG4gICAgICB7XG4gICAgICAgIDE6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5ib2xkLFxuICAgICAgICAyOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQubWVkaXVtLFxuICAgICAgfSxcbiAgICAgIHNpemVcbiAgICApLFxuICAgICAgbGluZUhlaWdodDogbWF0Y2hTaXplKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc206ICcxLjVyZW0nLFxuICAgICAgICAgICAgICB4czogJzEuMjVyZW0nLFxuICAgICAgICAgICAgICB4eHM6ICcwLjc1cmVtJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbGluZUhlaWdodFxuICAgICAgKSxcbiAgICBmb250U2l6ZTogJzAuNjI1cmVtJyxcbiAgICB0ZXh0VHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gIH0pXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gTGFiZWwocHJvcHM6IExhYmVsUHJvcHMpIHtcbiAgcmV0dXJuIDxTdHlsZWRUZXh0IHsuLi5wcm9wc30gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IExhYmVsO1xuIl19