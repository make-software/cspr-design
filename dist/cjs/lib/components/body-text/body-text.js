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
    var theme = _a.theme, _b = _a.size, size = _b === void 0 ? 3 : _b, _c = _a.scale, scale = _c === void 0 ? 'sm' : _c;
    return ({
        fontWeight: (0, match_size_1.matchSize)({
            1: theme.typography.fontWeight.semiBold,
            2: theme.typography.fontWeight.medium,
            3: theme.typography.fontWeight.regular,
        }, size),
        fontSize: (0, match_size_1.matchSize)({
            xs: '0.813rem',
            sm: '0.875rem',
            md: '1rem',
            lg: '1.125rem',
        }, scale),
        lineHeight: '1.5rem',
    });
});
exports.BodyText = react_1.default.forwardRef(function BodyText(props, ref) {
    return (0, jsx_runtime_1.jsx)(StyledText, tslib_1.__assign({ ref: ref }, props));
});
exports.default = exports.BodyText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS10ZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2JvZHktdGV4dC9ib2R5LXRleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLGdGQUF1QztBQUV2QyxxREFBbUQ7QUFDbkQsOERBQStDO0FBVS9DLElBQU0sVUFBVSxHQUFHLElBQUEsMkJBQU0sRUFBQyxjQUFJLENBQUMsQ0FDN0IsVUFBQyxFQUFpQztRQUEvQixLQUFLLFdBQUEsRUFBRSxZQUFRLEVBQVIsSUFBSSxtQkFBRyxDQUFDLEtBQUEsRUFBRSxhQUFZLEVBQVosS0FBSyxtQkFBRyxJQUFJLEtBQUE7SUFBTyxPQUFBLENBQUM7UUFDdEMsVUFBVSxFQUFFLElBQUEsc0JBQVMsRUFDbkI7WUFDRSxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsUUFBUTtZQUN2QyxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTTtZQUNyQyxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTztTQUN2QyxFQUNELElBQUksQ0FDTDtRQUNELFFBQVEsRUFBRSxJQUFBLHNCQUFTLEVBQ2pCO1lBQ0UsRUFBRSxFQUFFLFVBQVU7WUFDZCxFQUFFLEVBQUUsVUFBVTtZQUNkLEVBQUUsRUFBRSxNQUFNO1lBQ1YsRUFBRSxFQUFFLFVBQVU7U0FDZixFQUNELEtBQUssQ0FDTjtRQUNELFVBQVUsRUFBRSxRQUFRO0tBQ3JCLENBQUM7QUFuQnFDLENBbUJyQyxDQUNILENBQUM7QUFFVyxRQUFBLFFBQVEsR0FBRyxlQUFLLENBQUMsVUFBVSxDQUFxQixTQUFTLFFBQVEsQ0FDNUUsS0FBb0IsRUFDcEIsR0FBRztJQUVILE9BQU8sdUJBQUMsVUFBVSxxQkFBQyxHQUFHLEVBQUUsR0FBRyxJQUFNLEtBQUssRUFBSSxDQUFDO0FBQzdDLENBQUMsQ0FBQyxDQUFDO0FBRUgsa0JBQWUsZ0JBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgbWF0Y2hTaXplIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWF0Y2gtc2l6ZSc7XG5pbXBvcnQgVGV4dCwgeyBUZXh0UHJvcHMgfSBmcm9tICcuLi90ZXh0L3RleHQnO1xuXG50eXBlIFJlZiA9IEhUTUxTcGFuRWxlbWVudDtcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgaW50ZXJmYWNlIEJvZHlUZXh0UHJvcHMgZXh0ZW5kcyBUZXh0UHJvcHMge1xuICBzaXplOiAxIHwgMiB8IDM7XG4gIHNjYWxlPzogJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJztcbn1cblxuY29uc3QgU3R5bGVkVGV4dCA9IHN0eWxlZChUZXh0KTxCb2R5VGV4dFByb3BzPihcbiAgKHsgdGhlbWUsIHNpemUgPSAzLCBzY2FsZSA9ICdzbScgfSkgPT4gKHtcbiAgICBmb250V2VpZ2h0OiBtYXRjaFNpemUoXG4gICAgICB7XG4gICAgICAgIDE6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5zZW1pQm9sZCxcbiAgICAgICAgMjogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Lm1lZGl1bSxcbiAgICAgICAgMzogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LnJlZ3VsYXIsXG4gICAgICB9LFxuICAgICAgc2l6ZVxuICAgICksXG4gICAgZm9udFNpemU6IG1hdGNoU2l6ZShcbiAgICAgIHtcbiAgICAgICAgeHM6ICcwLjgxM3JlbScsXG4gICAgICAgIHNtOiAnMC44NzVyZW0nLFxuICAgICAgICBtZDogJzFyZW0nLFxuICAgICAgICBsZzogJzEuMTI1cmVtJyxcbiAgICAgIH0sXG4gICAgICBzY2FsZVxuICAgICksXG4gICAgbGluZUhlaWdodDogJzEuNXJlbScsXG4gIH0pXG4pO1xuXG5leHBvcnQgY29uc3QgQm9keVRleHQgPSBSZWFjdC5mb3J3YXJkUmVmPFJlZiwgQm9keVRleHRQcm9wcz4oZnVuY3Rpb24gQm9keVRleHQoXG4gIHByb3BzOiBCb2R5VGV4dFByb3BzLFxuICByZWZcbikge1xuICByZXR1cm4gPFN0eWxlZFRleHQgcmVmPXtyZWZ9IHsuLi5wcm9wc30gLz47XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQm9keVRleHQ7XG4iXX0=