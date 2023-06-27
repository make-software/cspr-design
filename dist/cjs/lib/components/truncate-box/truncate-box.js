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
    var theme = _a.theme, _b = _a.size, size = _b === void 0 ? 2 : _b;
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
    });
});
exports.TruncateBox = react_1.default.forwardRef(function (props, ref) { return (0, jsx_runtime_1.jsx)(StyledTruncateBox, tslib_1.__assign({ ref: ref }, props)); });
exports.default = exports.TruncateBox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1bmNhdGUtYm94LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3RydW5jYXRlLWJveC90cnVuY2F0ZS1ib3gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLGdGQUF1QztBQUd2QyxxREFBbUQ7QUFPbkQsSUFBTSxPQUFPLEdBQUcsVUFBQyxJQUFVO0lBQ3pCLE9BQUEsSUFBQSxzQkFBUyxFQUNQO1FBQ0UsQ0FBQyxFQUFFLEVBQUU7UUFDTCxDQUFDLEVBQUUsRUFBRTtRQUNMLENBQUMsRUFBRSxFQUFFO1FBQ0wsQ0FBQyxFQUFFLEVBQUU7UUFDTCxDQUFDLEVBQUUsRUFBRTtRQUNMLENBQUMsRUFBRSxFQUFFO0tBQ04sRUFDRCxJQUFJLENBQ0w7QUFWRCxDQVVDLENBQUM7QUFFSixJQUFNLGlCQUFpQixHQUFHLElBQUEsMkJBQU0sRUFBQyxLQUFLLENBQUMsQ0FDckMsVUFBQyxFQUFtQjtRQUFqQixLQUFLLFdBQUEsRUFBRSxZQUFRLEVBQVIsSUFBSSxtQkFBRyxDQUFDLEtBQUE7SUFBTyxPQUFBLENBQUM7UUFDeEIsT0FBTyxFQUFFLGNBQWM7UUFDdkIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsWUFBWSxFQUFFLFVBQVU7UUFDeEIsS0FBSyxFQUFFLE1BQU07UUFDYixRQUFRLEVBQUUsVUFBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQUk7UUFDOUIsZ0RBQWdEO1FBQ2hELFNBQVMsRUFBRTtZQUNULE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFLE9BQU87U0FDakI7S0FDRixDQUFDO0FBWnVCLENBWXZCLENBQ0gsQ0FBQztBQUVXLFFBQUEsV0FBVyxHQUFHLGVBQUssQ0FBQyxVQUFVLENBQ3pDLFVBQUMsS0FBSyxFQUFFLEdBQUcsSUFBSyxPQUFBLHVCQUFDLGlCQUFpQixxQkFBQyxHQUFHLEVBQUUsR0FBRyxJQUFNLEtBQUssRUFBSSxFQUExQyxDQUEwQyxDQUMzRCxDQUFDO0FBRUYsa0JBQWUsbUJBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgQmFzZVByb3BzLCBTaXplIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBtYXRjaFNpemUgfSBmcm9tICcuLi8uLi91dGlscy9tYXRjaC1zaXplJztcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFRydW5jYXRlQm94UHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xyXG4gIHNpemU/OiBTaXplO1xyXG59XHJcblxyXG5jb25zdCBnZXRTaXplID0gKHNpemU6IFNpemUpID0+XHJcbiAgbWF0Y2hTaXplKFxyXG4gICAge1xyXG4gICAgICAwOiAxMCxcclxuICAgICAgMTogMTAsXHJcbiAgICAgIDI6IDIzLFxyXG4gICAgICAzOiAzNSxcclxuICAgICAgNDogNDUsXHJcbiAgICAgIDU6IDU1LFxyXG4gICAgfSxcclxuICAgIHNpemVcclxuICApO1xyXG5cclxuY29uc3QgU3R5bGVkVHJ1bmNhdGVCb3ggPSBzdHlsZWQoJ2RpdicpPFRydW5jYXRlQm94UHJvcHM+KFxyXG4gICh7IHRoZW1lLCBzaXplID0gMiB9KSA9PiAoe1xyXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBtYXhXaWR0aDogYCR7Z2V0U2l6ZShzaXplKX1lbWAsXHJcbiAgICAvLyBmaXggZm9yIFRvb2x0aXAgb3ZlciBUcnVuY2F0ZWQgVGV4dCBpbiBTYWZhcmlcclxuICAgICcmOmFmdGVyJzoge1xyXG4gICAgICBjb250ZW50OiBcIicnXCIsXHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICB9LFxyXG4gIH0pXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgVHJ1bmNhdGVCb3ggPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxEaXZFbGVtZW50LCBUcnVuY2F0ZUJveFByb3BzPihcclxuICAocHJvcHMsIHJlZikgPT4gPFN0eWxlZFRydW5jYXRlQm94IHJlZj17cmVmfSB7Li4ucHJvcHN9IC8+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcnVuY2F0ZUJveDtcclxuIl19