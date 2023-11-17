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
        lineHeight: (0, match_size_1.matchSize)({
            1: '1.25rem',
            2: '1rem',
        }, size)
    });
});
function CaptionText(props) {
    return (0, jsx_runtime_1.jsx)(StyledText, tslib_1.__assign({}, props));
}
exports.CaptionText = CaptionText;
exports.default = CaptionText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGlvbi10ZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2NhcHRpb24tdGV4dC9jYXB0aW9uLXRleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBRXZDLHFEQUFtRDtBQUNuRCw4REFBK0M7QUFRL0MsSUFBTSxVQUFVLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGNBQUksQ0FBQyxDQUFtQixVQUFDLEVBQW1CO1FBQWpCLEtBQUssV0FBQSxFQUFFLFlBQVEsRUFBUixJQUFJLG1CQUFHLENBQUMsS0FBQTtJQUFPLE9BQUEsQ0FBQztRQUMxRSxVQUFVLEVBQUUsSUFBQSxzQkFBUyxFQUNuQjtZQUNFLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNO1lBQ3JDLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPO1NBQ3ZDLEVBQ0QsSUFBSSxDQUNMO1FBQ0QsUUFBUSxFQUFFLFVBQVU7UUFDbEIsVUFBVSxFQUFFLElBQUEsc0JBQVMsRUFDakI7WUFDSSxDQUFDLEVBQUUsU0FBUztZQUNaLENBQUMsRUFBRSxNQUFNO1NBQ1osRUFDRCxJQUFJLENBQ1A7S0FDSixDQUFDO0FBaEJ5RSxDQWdCekUsQ0FBQyxDQUFDO0FBRUosU0FBZ0IsV0FBVyxDQUFDLEtBQXVCO0lBQ2pELE9BQU8sdUJBQUMsVUFBVSx1QkFBSyxLQUFLLEVBQUksQ0FBQztBQUNuQyxDQUFDO0FBRkQsa0NBRUM7QUFFRCxrQkFBZSxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IG1hdGNoU2l6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL21hdGNoLXNpemUnO1xyXG5pbXBvcnQgVGV4dCwgeyBUZXh0UHJvcHMgfSBmcm9tICcuLi90ZXh0L3RleHQnO1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FwdGlvblRleHRQcm9wcyBleHRlbmRzIFRleHRQcm9wcyB7XHJcbiAgc2l6ZTogMSB8IDI7XHJcbiAgbGluZUhlaWdodD86IDEgfCAyO1xyXG59XHJcblxyXG5jb25zdCBTdHlsZWRUZXh0ID0gc3R5bGVkKFRleHQpPENhcHRpb25UZXh0UHJvcHM+KCh7IHRoZW1lLCBzaXplID0gMiB9KSA9PiAoe1xyXG4gIGZvbnRXZWlnaHQ6IG1hdGNoU2l6ZShcclxuICAgIHtcclxuICAgICAgMTogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Lm1lZGl1bSxcclxuICAgICAgMjogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LnJlZ3VsYXIsXHJcbiAgICB9LFxyXG4gICAgc2l6ZVxyXG4gICksXHJcbiAgZm9udFNpemU6ICcwLjY4OHJlbScsXHJcbiAgICBsaW5lSGVpZ2h0OiBtYXRjaFNpemUoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAxOiAnMS4yNXJlbScsXHJcbiAgICAgICAgICAgIDI6ICcxcmVtJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNpemVcclxuICAgIClcclxufSkpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENhcHRpb25UZXh0KHByb3BzOiBDYXB0aW9uVGV4dFByb3BzKSB7XHJcbiAgcmV0dXJuIDxTdHlsZWRUZXh0IHsuLi5wcm9wc30gLz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcHRpb25UZXh0O1xyXG4iXX0=