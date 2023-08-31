"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruncateBox = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var match_size_1 = require("../../utils/match-size");
var getSize = function (size) {
    return (0, match_size_1.matchSize)({
        0: 10,
        1: 10,
        2: 23,
        3: 35,
        4: 45,
        5: 55,
    }, size);
};
var StyledTruncateBox = (0, styled_components_1.default)('div')(function (_a) {
    var theme = _a.theme, _b = _a.size, size = _b === void 0 ? 2 : _b, _c = _a.lineHeight, lineHeight = _c === void 0 ? 'sm' : _c;
    return ({
        display: 'inline-block',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '100%',
        maxWidth: "".concat(getSize(size), "em"),
        // fix for Tooltip over Truncated Text in Safari
        '&:after': {
            content: "''",
            display: 'block',
        },
        lineHeight: (0, match_size_1.matchSize)({
            sm: '1.5rem',
            xs: '1.25rem',
        }, lineHeight),
    });
});
exports.TruncateBox = react_1.default.forwardRef(function (props, ref) { return (0, jsx_runtime_1.jsx)(StyledTruncateBox, tslib_1.__assign({ ref: ref }, props)); });
exports.default = exports.TruncateBox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1bmNhdGUtYm94LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3RydW5jYXRlLWJveC90cnVuY2F0ZS1ib3gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLGdGQUF1QztBQUd2QyxxREFBbUQ7QUFRbkQsSUFBTSxPQUFPLEdBQUcsVUFBQyxJQUFVO0lBQ3pCLE9BQUEsSUFBQSxzQkFBUyxFQUNQO1FBQ0UsQ0FBQyxFQUFFLEVBQUU7UUFDTCxDQUFDLEVBQUUsRUFBRTtRQUNMLENBQUMsRUFBRSxFQUFFO1FBQ0wsQ0FBQyxFQUFFLEVBQUU7UUFDTCxDQUFDLEVBQUUsRUFBRTtRQUNMLENBQUMsRUFBRSxFQUFFO0tBQ04sRUFDRCxJQUFJLENBQ0w7QUFWRCxDQVVDLENBQUM7QUFFSixJQUFNLGlCQUFpQixHQUFHLElBQUEsMkJBQU0sRUFBQyxLQUFLLENBQUMsQ0FDckMsVUFBQyxFQUFzQztRQUFwQyxLQUFLLFdBQUEsRUFBRSxZQUFRLEVBQVIsSUFBSSxtQkFBRyxDQUFDLEtBQUEsRUFBRSxrQkFBaUIsRUFBakIsVUFBVSxtQkFBRyxJQUFJLEtBQUE7SUFBTyxPQUFBLENBQUM7UUFDM0MsT0FBTyxFQUFFLGNBQWM7UUFDdkIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsWUFBWSxFQUFFLFVBQVU7UUFDeEIsS0FBSyxFQUFFLE1BQU07UUFDYixRQUFRLEVBQUUsVUFBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQUk7UUFDOUIsZ0RBQWdEO1FBQ2hELFNBQVMsRUFBRTtZQUNULE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFLE9BQU87U0FDakI7UUFDQyxVQUFVLEVBQUUsSUFBQSxzQkFBUyxFQUNqQjtZQUNJLEVBQUUsRUFBRSxRQUFRO1lBQ1osRUFBRSxFQUFFLFNBQVM7U0FDaEIsRUFDRCxVQUFVLENBQ2I7S0FDSixDQUFDO0FBbkIwQyxDQW1CMUMsQ0FDSCxDQUFDO0FBRVcsUUFBQSxXQUFXLEdBQUcsZUFBSyxDQUFDLFVBQVUsQ0FDekMsVUFBQyxLQUFLLEVBQUUsR0FBRyxJQUFLLE9BQUEsdUJBQUMsaUJBQWlCLHFCQUFDLEdBQUcsRUFBRSxHQUFHLElBQU0sS0FBSyxFQUFJLEVBQTFDLENBQTBDLENBQzNELENBQUM7QUFFRixrQkFBZSxtQkFBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBCYXNlUHJvcHMsIFNpemUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBtYXRjaFNpemUgfSBmcm9tICcuLi8uLi91dGlscy9tYXRjaC1zaXplJztcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgaW50ZXJmYWNlIFRydW5jYXRlQm94UHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xuICBzaXplPzogU2l6ZTtcbiAgbGluZUhlaWdodD86ICd4cycgfCAnc20nO1xufVxuXG5jb25zdCBnZXRTaXplID0gKHNpemU6IFNpemUpID0+XG4gIG1hdGNoU2l6ZShcbiAgICB7XG4gICAgICAwOiAxMCxcbiAgICAgIDE6IDEwLFxuICAgICAgMjogMjMsXG4gICAgICAzOiAzNSxcbiAgICAgIDQ6IDQ1LFxuICAgICAgNTogNTUsXG4gICAgfSxcbiAgICBzaXplXG4gICk7XG5cbmNvbnN0IFN0eWxlZFRydW5jYXRlQm94ID0gc3R5bGVkKCdkaXYnKTxUcnVuY2F0ZUJveFByb3BzPihcbiAgKHsgdGhlbWUsIHNpemUgPSAyLCBsaW5lSGVpZ2h0ID0gJ3NtJyB9KSA9PiAoe1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogYCR7Z2V0U2l6ZShzaXplKX1lbWAsXG4gICAgLy8gZml4IGZvciBUb29sdGlwIG92ZXIgVHJ1bmNhdGVkIFRleHQgaW4gU2FmYXJpXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICBjb250ZW50OiBcIicnXCIsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIH0sXG4gICAgICBsaW5lSGVpZ2h0OiBtYXRjaFNpemUoXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBzbTogJzEuNXJlbScsXG4gICAgICAgICAgICAgIHhzOiAnMS4yNXJlbScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsaW5lSGVpZ2h0XG4gICAgICApLFxuICB9KVxuKTtcblxuZXhwb3J0IGNvbnN0IFRydW5jYXRlQm94ID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MRGl2RWxlbWVudCwgVHJ1bmNhdGVCb3hQcm9wcz4oXG4gIChwcm9wcywgcmVmKSA9PiA8U3R5bGVkVHJ1bmNhdGVCb3ggcmVmPXtyZWZ9IHsuLi5wcm9wc30gLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFRydW5jYXRlQm94O1xuIl19