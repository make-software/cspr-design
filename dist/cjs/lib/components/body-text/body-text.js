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
    var theme = _a.theme, _b = _a.size, size = _b === void 0 ? 3 : _b;
    return ({
        fontWeight: (0, match_size_1.matchSize)({
            1: theme.typography.fontWeight.semiBold,
            2: theme.typography.fontWeight.medium,
            3: theme.typography.fontWeight.regular,
        }, size),
        fontSize: theme.scale('1.3rem'),
        lineHeight: theme.scale('2rem'),
    });
});
exports.BodyText = react_1.default.forwardRef(function BodyText(props, ref) {
    return (0, jsx_runtime_1.jsx)(StyledText, tslib_1.__assign({ ref: ref }, props));
});
exports.default = exports.BodyText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS10ZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2JvZHktdGV4dC9ib2R5LXRleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLGdGQUF1QztBQUV2QyxxREFBbUQ7QUFDbkQsOERBQStDO0FBUy9DLElBQU0sVUFBVSxHQUFHLElBQUEsMkJBQU0sRUFBQyxjQUFJLENBQUMsQ0FBZ0IsVUFBQyxFQUFtQjtRQUFqQixLQUFLLFdBQUEsRUFBRSxZQUFRLEVBQVIsSUFBSSxtQkFBRyxDQUFDLEtBQUE7SUFBTyxPQUFBLENBQUM7UUFDdkUsVUFBVSxFQUFFLElBQUEsc0JBQVMsRUFDbkI7WUFDRSxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsUUFBUTtZQUN2QyxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTTtZQUNyQyxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTztTQUN2QyxFQUNELElBQUksQ0FDTDtRQUNELFFBQVEsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUMvQixVQUFVLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7S0FDaEMsQ0FBQztBQVhzRSxDQVd0RSxDQUFDLENBQUM7QUFFUyxRQUFBLFFBQVEsR0FBRyxlQUFLLENBQUMsVUFBVSxDQUFxQixTQUFTLFFBQVEsQ0FDNUUsS0FBb0IsRUFDcEIsR0FBRztJQUVILE9BQU8sdUJBQUMsVUFBVSxxQkFBQyxHQUFHLEVBQUUsR0FBRyxJQUFNLEtBQUssRUFBSSxDQUFDO0FBQzdDLENBQUMsQ0FBQyxDQUFDO0FBRUgsa0JBQWUsZ0JBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgbWF0Y2hTaXplIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWF0Y2gtc2l6ZSc7XG5pbXBvcnQgVGV4dCwgeyBUZXh0UHJvcHMgfSBmcm9tICcuLi90ZXh0L3RleHQnO1xuXG50eXBlIFJlZiA9IEhUTUxTcGFuRWxlbWVudDtcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgaW50ZXJmYWNlIEJvZHlUZXh0UHJvcHMgZXh0ZW5kcyBUZXh0UHJvcHMge1xuICBzaXplOiAxIHwgMiB8IDM7XG59XG5cbmNvbnN0IFN0eWxlZFRleHQgPSBzdHlsZWQoVGV4dCk8Qm9keVRleHRQcm9wcz4oKHsgdGhlbWUsIHNpemUgPSAzIH0pID0+ICh7XG4gIGZvbnRXZWlnaHQ6IG1hdGNoU2l6ZShcbiAgICB7XG4gICAgICAxOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQuc2VtaUJvbGQsXG4gICAgICAyOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQubWVkaXVtLFxuICAgICAgMzogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LnJlZ3VsYXIsXG4gICAgfSxcbiAgICBzaXplXG4gICksXG4gIGZvbnRTaXplOiB0aGVtZS5zY2FsZSgnMS4zcmVtJyksXG4gIGxpbmVIZWlnaHQ6IHRoZW1lLnNjYWxlKCcycmVtJyksXG59KSk7XG5cbmV4cG9ydCBjb25zdCBCb2R5VGV4dCA9IFJlYWN0LmZvcndhcmRSZWY8UmVmLCBCb2R5VGV4dFByb3BzPihmdW5jdGlvbiBCb2R5VGV4dChcbiAgcHJvcHM6IEJvZHlUZXh0UHJvcHMsXG4gIHJlZlxuKSB7XG4gIHJldHVybiA8U3R5bGVkVGV4dCByZWY9e3JlZn0gey4uLnByb3BzfSAvPjtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBCb2R5VGV4dDtcbiJdfQ==