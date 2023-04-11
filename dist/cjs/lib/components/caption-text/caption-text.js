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
        fontSize: '1.1rem',
        lineHeight: (0, match_size_1.matchSize)({
            1: '2rem',
            2: '1.6rem',
        }, size),
    });
});
function CaptionText(props) {
    return (0, jsx_runtime_1.jsx)(StyledText, tslib_1.__assign({}, props));
}
exports.CaptionText = CaptionText;
exports.default = CaptionText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGlvbi10ZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2NhcHRpb24tdGV4dC9jYXB0aW9uLXRleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBRXZDLHFEQUFtRDtBQUNuRCw4REFBK0M7QUFRL0MsSUFBTSxVQUFVLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGNBQUksQ0FBQyxDQUFtQixVQUFDLEVBQW1CO1FBQWpCLEtBQUssV0FBQSxFQUFFLFlBQVEsRUFBUixJQUFJLG1CQUFHLENBQUMsS0FBQTtJQUFPLE9BQUEsQ0FBQztRQUMxRSxVQUFVLEVBQUUsSUFBQSxzQkFBUyxFQUNuQjtZQUNFLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNO1lBQ3JDLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPO1NBQ3ZDLEVBQ0QsSUFBSSxDQUNMO1FBQ0QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsVUFBVSxFQUFFLElBQUEsc0JBQVMsRUFDbkI7WUFDRSxDQUFDLEVBQUUsTUFBTTtZQUNULENBQUMsRUFBRSxRQUFRO1NBQ1osRUFDRCxJQUFJLENBQ0w7S0FDRixDQUFDO0FBaEJ5RSxDQWdCekUsQ0FBQyxDQUFDO0FBRUosU0FBZ0IsV0FBVyxDQUFDLEtBQXVCO0lBQ2pELE9BQU8sdUJBQUMsVUFBVSx1QkFBSyxLQUFLLEVBQUksQ0FBQztBQUNuQyxDQUFDO0FBRkQsa0NBRUM7QUFFRCxrQkFBZSxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IG1hdGNoU2l6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL21hdGNoLXNpemUnO1xuaW1wb3J0IFRleHQsIHsgVGV4dFByb3BzIH0gZnJvbSAnLi4vdGV4dC90ZXh0JztcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgaW50ZXJmYWNlIENhcHRpb25UZXh0UHJvcHMgZXh0ZW5kcyBUZXh0UHJvcHMge1xuICBzaXplOiAxIHwgMjtcbiAgbGluZUhlaWdodD86IDEgfCAyO1xufVxuXG5jb25zdCBTdHlsZWRUZXh0ID0gc3R5bGVkKFRleHQpPENhcHRpb25UZXh0UHJvcHM+KCh7IHRoZW1lLCBzaXplID0gMiB9KSA9PiAoe1xuICBmb250V2VpZ2h0OiBtYXRjaFNpemUoXG4gICAge1xuICAgICAgMTogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Lm1lZGl1bSxcbiAgICAgIDI6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5yZWd1bGFyLFxuICAgIH0sXG4gICAgc2l6ZVxuICApLFxuICBmb250U2l6ZTogJzEuMXJlbScsXG4gIGxpbmVIZWlnaHQ6IG1hdGNoU2l6ZShcbiAgICB7XG4gICAgICAxOiAnMnJlbScsXG4gICAgICAyOiAnMS42cmVtJyxcbiAgICB9LFxuICAgIHNpemVcbiAgKSxcbn0pKTtcblxuZXhwb3J0IGZ1bmN0aW9uIENhcHRpb25UZXh0KHByb3BzOiBDYXB0aW9uVGV4dFByb3BzKSB7XG4gIHJldHVybiA8U3R5bGVkVGV4dCB7Li4ucHJvcHN9IC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXB0aW9uVGV4dDtcbiJdfQ==