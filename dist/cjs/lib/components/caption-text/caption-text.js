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
        fontSize: theme.scale('1.1rem'),
        lineHeight: (0, match_size_1.matchSize)({
            1: theme.scale('2rem'),
            2: theme.scale('1.6rem'),
        }, size),
    });
});
function CaptionText(props) {
    return (0, jsx_runtime_1.jsx)(StyledText, tslib_1.__assign({}, props));
}
exports.CaptionText = CaptionText;
exports.default = CaptionText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGlvbi10ZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2NhcHRpb24tdGV4dC9jYXB0aW9uLXRleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBRXZDLHFEQUFtRDtBQUNuRCw4REFBK0M7QUFRL0MsSUFBTSxVQUFVLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGNBQUksQ0FBQyxDQUFtQixVQUFDLEVBQW1CO1FBQWpCLEtBQUssV0FBQSxFQUFFLFlBQVEsRUFBUixJQUFJLG1CQUFHLENBQUMsS0FBQTtJQUFPLE9BQUEsQ0FBQztRQUMxRSxVQUFVLEVBQUUsSUFBQSxzQkFBUyxFQUNuQjtZQUNFLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNO1lBQ3JDLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPO1NBQ3ZDLEVBQ0QsSUFBSSxDQUNMO1FBQ0QsUUFBUSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQy9CLFVBQVUsRUFBRSxJQUFBLHNCQUFTLEVBQ25CO1lBQ0UsQ0FBQyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3RCLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztTQUN6QixFQUNELElBQUksQ0FDTDtLQUNGLENBQUM7QUFoQnlFLENBZ0J6RSxDQUFDLENBQUM7QUFFSixTQUFnQixXQUFXLENBQUMsS0FBdUI7SUFDakQsT0FBTyx1QkFBQyxVQUFVLHVCQUFLLEtBQUssRUFBSSxDQUFDO0FBQ25DLENBQUM7QUFGRCxrQ0FFQztBQUVELGtCQUFlLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgbWF0Y2hTaXplIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWF0Y2gtc2l6ZSc7XG5pbXBvcnQgVGV4dCwgeyBUZXh0UHJvcHMgfSBmcm9tICcuLi90ZXh0L3RleHQnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2FwdGlvblRleHRQcm9wcyBleHRlbmRzIFRleHRQcm9wcyB7XG4gIHNpemU6IDEgfCAyO1xuICBsaW5lSGVpZ2h0PzogMSB8IDI7XG59XG5cbmNvbnN0IFN0eWxlZFRleHQgPSBzdHlsZWQoVGV4dCk8Q2FwdGlvblRleHRQcm9wcz4oKHsgdGhlbWUsIHNpemUgPSAyIH0pID0+ICh7XG4gIGZvbnRXZWlnaHQ6IG1hdGNoU2l6ZShcbiAgICB7XG4gICAgICAxOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQubWVkaXVtLFxuICAgICAgMjogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LnJlZ3VsYXIsXG4gICAgfSxcbiAgICBzaXplXG4gICksXG4gIGZvbnRTaXplOiB0aGVtZS5zY2FsZSgnMS4xcmVtJyksXG4gIGxpbmVIZWlnaHQ6IG1hdGNoU2l6ZShcbiAgICB7XG4gICAgICAxOiB0aGVtZS5zY2FsZSgnMnJlbScpLFxuICAgICAgMjogdGhlbWUuc2NhbGUoJzEuNnJlbScpLFxuICAgIH0sXG4gICAgc2l6ZVxuICApLFxufSkpO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2FwdGlvblRleHQocHJvcHM6IENhcHRpb25UZXh0UHJvcHMpIHtcbiAgcmV0dXJuIDxTdHlsZWRUZXh0IHsuLi5wcm9wc30gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcHRpb25UZXh0O1xuIl19