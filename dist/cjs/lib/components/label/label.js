"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var match_size_1 = require("../../utils/match-size");
var text_1 = tslib_1.__importDefault(require("../text/text"));
var StyledText = (0, styled_components_1.default)(text_1.default)(function (_a) {
    var theme = _a.theme, _b = _a.size, size = _b === void 0 ? 2 : _b, _c = _a.transform, transform = _c === void 0 ? 'unset' : _c;
    return ({
        fontWeight: (0, match_size_1.matchSize)({
            1: theme.typography.fontWeight.bold,
            2: theme.typography.fontWeight.medium,
        }, size),
        fontSize: '0.625rem',
        textTransform: transform,
    });
});
function Label(props) {
    return (0, jsx_runtime_1.jsx)(StyledText, tslib_1.__assign({}, props));
}
exports.Label = Label;
exports.default = Label;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvbGFiZWwvbGFiZWwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBRXZDLHFEQUFtRDtBQUNuRCw4REFBK0M7QUFVL0MsSUFBTSxVQUFVLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGNBQUksQ0FBQyxDQUM3QixVQUFDLEVBQXdDO1FBQXRDLEtBQUssV0FBQSxFQUFFLFlBQVEsRUFBUixJQUFJLG1CQUFHLENBQUMsS0FBQSxFQUFFLGlCQUFtQixFQUFuQixTQUFTLG1CQUFHLE9BQU8sS0FBQTtJQUFPLE9BQUEsQ0FBQztRQUM3QyxVQUFVLEVBQUUsSUFBQSxzQkFBUyxFQUNuQjtZQUNFLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJO1lBQ25DLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNO1NBQ3RDLEVBQ0QsSUFBSSxDQUNMO1FBQ0QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsYUFBYSxFQUFFLFNBQVM7S0FDekIsQ0FBQztBQVY0QyxDQVU1QyxDQUNILENBQUM7QUFFRixTQUFnQixLQUFLLENBQUMsS0FBaUI7SUFDckMsT0FBTyx1QkFBQyxVQUFVLHVCQUFLLEtBQUssRUFBSSxDQUFDO0FBQ25DLENBQUM7QUFGRCxzQkFFQztBQUVELGtCQUFlLEtBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgbWF0Y2hTaXplIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWF0Y2gtc2l6ZSc7XHJcbmltcG9ydCBUZXh0LCB7IFRleHRQcm9wcyB9IGZyb20gJy4uL3RleHQvdGV4dCc7XHJcblxyXG50eXBlIFRyYW5zZm9ybSA9ICd1cHBlcmNhc2UnIHwgJ2NhcGl0YWxpemUnIHwgJ3Vuc2V0JztcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIExhYmVsUHJvcHMgZXh0ZW5kcyBUZXh0UHJvcHMge1xyXG4gIHNpemU6IDEgfCAyO1xyXG4gIHRyYW5zZm9ybT86IFRyYW5zZm9ybTtcclxufVxyXG5cclxuY29uc3QgU3R5bGVkVGV4dCA9IHN0eWxlZChUZXh0KTxMYWJlbFByb3BzPihcclxuICAoeyB0aGVtZSwgc2l6ZSA9IDIsIHRyYW5zZm9ybSA9ICd1bnNldCcgfSkgPT4gKHtcclxuICAgIGZvbnRXZWlnaHQ6IG1hdGNoU2l6ZShcclxuICAgICAge1xyXG4gICAgICAgIDE6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5ib2xkLFxyXG4gICAgICAgIDI6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5tZWRpdW0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemVcclxuICAgICksXHJcbiAgICBmb250U2l6ZTogJzAuNjI1cmVtJyxcclxuICAgIHRleHRUcmFuc2Zvcm06IHRyYW5zZm9ybSxcclxuICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExhYmVsKHByb3BzOiBMYWJlbFByb3BzKSB7XHJcbiAgcmV0dXJuIDxTdHlsZWRUZXh0IHsuLi5wcm9wc30gLz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhYmVsO1xyXG4iXX0=