"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaptionText = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var match_size_1 = require("../../utils/match-size");
var text_1 = tslib_1.__importDefault(require("../text/text"));
var StyledText = (0, styled_components_1.default)(text_1.default)(function (_a) {
    var theme = _a.theme, _b = _a.size, size = _b === void 0 ? 2 : _b;
    return ({
        fontWeight: (0, match_size_1.matchSize)({
            1: theme.typography.fontWeight.medium,
            2: theme.typography.fontWeight.regular,
        }, size),
        fontSize: '0.688rem',
        lineHeight: '1rem',
    });
});
function CaptionText(props) {
    return (0, jsx_runtime_1.jsx)(StyledText, tslib_1.__assign({}, props));
}
exports.CaptionText = CaptionText;
exports.default = CaptionText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGlvbi10ZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2NhcHRpb24tdGV4dC9jYXB0aW9uLXRleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBRXZDLHFEQUFtRDtBQUNuRCw4REFBK0M7QUFRL0MsSUFBTSxVQUFVLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGNBQUksQ0FBQyxDQUFtQixVQUFDLEVBQW1CO1FBQWpCLEtBQUssV0FBQSxFQUFFLFlBQVEsRUFBUixJQUFJLG1CQUFHLENBQUMsS0FBQTtJQUFPLE9BQUEsQ0FBQztRQUMxRSxVQUFVLEVBQUUsSUFBQSxzQkFBUyxFQUNuQjtZQUNFLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNO1lBQ3JDLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPO1NBQ3ZDLEVBQ0QsSUFBSSxDQUNMO1FBQ0QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztBQVZ5RSxDQVV6RSxDQUFDLENBQUM7QUFFSixTQUFnQixXQUFXLENBQUMsS0FBdUI7SUFDakQsT0FBTyx1QkFBQyxVQUFVLHVCQUFLLEtBQUssRUFBSSxDQUFDO0FBQ25DLENBQUM7QUFGRCxrQ0FFQztBQUVELGtCQUFlLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgbWF0Y2hTaXplIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWF0Y2gtc2l6ZSc7XG5pbXBvcnQgVGV4dCwgeyBUZXh0UHJvcHMgfSBmcm9tICcuLi90ZXh0L3RleHQnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2FwdGlvblRleHRQcm9wcyBleHRlbmRzIFRleHRQcm9wcyB7XG4gIHNpemU6IDEgfCAyO1xuICBsaW5lSGVpZ2h0PzogMSB8IDI7XG59XG5cbmNvbnN0IFN0eWxlZFRleHQgPSBzdHlsZWQoVGV4dCk8Q2FwdGlvblRleHRQcm9wcz4oKHsgdGhlbWUsIHNpemUgPSAyIH0pID0+ICh7XG4gIGZvbnRXZWlnaHQ6IG1hdGNoU2l6ZShcbiAgICB7XG4gICAgICAxOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQubWVkaXVtLFxuICAgICAgMjogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LnJlZ3VsYXIsXG4gICAgfSxcbiAgICBzaXplXG4gICksXG4gIGZvbnRTaXplOiAnMC42ODhyZW0nLFxuICBsaW5lSGVpZ2h0OiAnMXJlbScsXG59KSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXB0aW9uVGV4dChwcm9wczogQ2FwdGlvblRleHRQcm9wcykge1xuICByZXR1cm4gPFN0eWxlZFRleHQgey4uLnByb3BzfSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FwdGlvblRleHQ7XG4iXX0=