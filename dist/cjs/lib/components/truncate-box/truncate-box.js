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
        0: 6.25,
        1: 6.25,
        2: 14.375,
        3: 21.875,
        4: 28.125,
        5: 34.375,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1bmNhdGUtYm94LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3RydW5jYXRlLWJveC90cnVuY2F0ZS1ib3gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLGdGQUF1QztBQUd2QyxxREFBbUQ7QUFRbkQsSUFBTSxPQUFPLEdBQUcsVUFBQyxJQUFVO0lBQ3pCLE9BQUEsSUFBQSxzQkFBUyxFQUNQO1FBQ0UsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxNQUFNO1FBQ1QsQ0FBQyxFQUFFLE1BQU07UUFDVCxDQUFDLEVBQUUsTUFBTTtRQUNULENBQUMsRUFBRSxNQUFNO0tBQ1YsRUFDRCxJQUFJLENBQ0w7QUFWRCxDQVVDLENBQUM7QUFFSixJQUFNLGlCQUFpQixHQUFHLElBQUEsMkJBQU0sRUFBQyxLQUFLLENBQUMsQ0FDckMsVUFBQyxFQUFzQztRQUFwQyxLQUFLLFdBQUEsRUFBRSxZQUFRLEVBQVIsSUFBSSxtQkFBRyxDQUFDLEtBQUEsRUFBRSxrQkFBaUIsRUFBakIsVUFBVSxtQkFBRyxJQUFJLEtBQUE7SUFBTyxPQUFBLENBQUM7UUFDM0MsT0FBTyxFQUFFLGNBQWM7UUFDdkIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsWUFBWSxFQUFFLFVBQVU7UUFDeEIsS0FBSyxFQUFFLE1BQU07UUFDYixRQUFRLEVBQUUsVUFBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQUk7UUFDOUIsZ0RBQWdEO1FBQ2hELFNBQVMsRUFBRTtZQUNULE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFLE9BQU87U0FDakI7UUFDQyxVQUFVLEVBQUUsSUFBQSxzQkFBUyxFQUNqQjtZQUNJLEVBQUUsRUFBRSxRQUFRO1lBQ1osRUFBRSxFQUFFLFNBQVM7U0FDaEIsRUFDRCxVQUFVLENBQ2I7S0FDSixDQUFDO0FBbkIwQyxDQW1CMUMsQ0FDSCxDQUFDO0FBRVcsUUFBQSxXQUFXLEdBQUcsZUFBSyxDQUFDLFVBQVUsQ0FDekMsVUFBQyxLQUFLLEVBQUUsR0FBRyxJQUFLLE9BQUEsdUJBQUMsaUJBQWlCLHFCQUFDLEdBQUcsRUFBRSxHQUFHLElBQU0sS0FBSyxFQUFJLEVBQTFDLENBQTBDLENBQzNELENBQUM7QUFFRixrQkFBZSxtQkFBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBCYXNlUHJvcHMsIFNpemUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBtYXRjaFNpemUgfSBmcm9tICcuLi8uLi91dGlscy9tYXRjaC1zaXplJztcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgaW50ZXJmYWNlIFRydW5jYXRlQm94UHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xuICBzaXplPzogU2l6ZTtcbiAgbGluZUhlaWdodD86ICd4cycgfCAnc20nO1xufVxuXG5jb25zdCBnZXRTaXplID0gKHNpemU6IFNpemUpID0+XG4gIG1hdGNoU2l6ZShcbiAgICB7XG4gICAgICAwOiA2LjI1LFxuICAgICAgMTogNi4yNSxcbiAgICAgIDI6IDE0LjM3NSxcbiAgICAgIDM6IDIxLjg3NSxcbiAgICAgIDQ6IDI4LjEyNSxcbiAgICAgIDU6IDM0LjM3NSxcbiAgICB9LFxuICAgIHNpemVcbiAgKTtcblxuY29uc3QgU3R5bGVkVHJ1bmNhdGVCb3ggPSBzdHlsZWQoJ2RpdicpPFRydW5jYXRlQm94UHJvcHM+KFxuICAoeyB0aGVtZSwgc2l6ZSA9IDIsIGxpbmVIZWlnaHQgPSAnc20nIH0pID0+ICh7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1heFdpZHRoOiBgJHtnZXRTaXplKHNpemUpfWVtYCxcbiAgICAvLyBmaXggZm9yIFRvb2x0aXAgb3ZlciBUcnVuY2F0ZWQgVGV4dCBpbiBTYWZhcmlcbiAgICAnJjphZnRlcic6IHtcbiAgICAgIGNvbnRlbnQ6IFwiJydcIixcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgfSxcbiAgICAgIGxpbmVIZWlnaHQ6IG1hdGNoU2l6ZShcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNtOiAnMS41cmVtJyxcbiAgICAgICAgICAgICAgeHM6ICcxLjI1cmVtJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxpbmVIZWlnaHRcbiAgICAgICksXG4gIH0pXG4pO1xuXG5leHBvcnQgY29uc3QgVHJ1bmNhdGVCb3ggPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxEaXZFbGVtZW50LCBUcnVuY2F0ZUJveFByb3BzPihcbiAgKHByb3BzLCByZWYpID0+IDxTdHlsZWRUcnVuY2F0ZUJveCByZWY9e3JlZn0gey4uLnByb3BzfSAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVHJ1bmNhdGVCb3g7XG4iXX0=