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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1bmNhdGUtYm94LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3RydW5jYXRlLWJveC90cnVuY2F0ZS1ib3gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLGdGQUF1QztBQUd2QyxxREFBbUQ7QUFPbkQsSUFBTSxPQUFPLEdBQUcsVUFBQyxJQUFVO0lBQ3pCLE9BQUEsSUFBQSxzQkFBUyxFQUNQO1FBQ0UsQ0FBQyxFQUFFLEVBQUU7UUFDTCxDQUFDLEVBQUUsRUFBRTtRQUNMLENBQUMsRUFBRSxFQUFFO1FBQ0wsQ0FBQyxFQUFFLEVBQUU7UUFDTCxDQUFDLEVBQUUsRUFBRTtRQUNMLENBQUMsRUFBRSxFQUFFO0tBQ04sRUFDRCxJQUFJLENBQ0w7QUFWRCxDQVVDLENBQUM7QUFFSixJQUFNLGlCQUFpQixHQUFHLElBQUEsMkJBQU0sRUFBQyxLQUFLLENBQUMsQ0FDckMsVUFBQyxFQUFtQjtRQUFqQixLQUFLLFdBQUEsRUFBRSxZQUFRLEVBQVIsSUFBSSxtQkFBRyxDQUFDLEtBQUE7SUFBTyxPQUFBLENBQUM7UUFDeEIsT0FBTyxFQUFFLGNBQWM7UUFDdkIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsWUFBWSxFQUFFLFVBQVU7UUFDeEIsS0FBSyxFQUFFLE1BQU07UUFDYixRQUFRLEVBQUUsVUFBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQUk7UUFDOUIsZ0RBQWdEO1FBQ2hELFNBQVMsRUFBRTtZQUNULE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFLE9BQU87U0FDakI7S0FDRixDQUFDO0FBWnVCLENBWXZCLENBQ0gsQ0FBQztBQUVXLFFBQUEsV0FBVyxHQUFHLGVBQUssQ0FBQyxVQUFVLENBQ3pDLFVBQUMsS0FBSyxFQUFFLEdBQUcsSUFBSyxPQUFBLHVCQUFDLGlCQUFpQixxQkFBQyxHQUFHLEVBQUUsR0FBRyxJQUFNLEtBQUssRUFBSSxFQUExQyxDQUEwQyxDQUMzRCxDQUFDO0FBRUYsa0JBQWUsbUJBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgQmFzZVByb3BzLCBTaXplIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgbWF0Y2hTaXplIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWF0Y2gtc2l6ZSc7XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBUcnVuY2F0ZUJveFByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgc2l6ZT86IFNpemU7XG59XG5cbmNvbnN0IGdldFNpemUgPSAoc2l6ZTogU2l6ZSkgPT5cbiAgbWF0Y2hTaXplKFxuICAgIHtcbiAgICAgIDA6IDEwLFxuICAgICAgMTogMTAsXG4gICAgICAyOiAyMyxcbiAgICAgIDM6IDM1LFxuICAgICAgNDogNDUsXG4gICAgICA1OiA1NSxcbiAgICB9LFxuICAgIHNpemVcbiAgKTtcblxuY29uc3QgU3R5bGVkVHJ1bmNhdGVCb3ggPSBzdHlsZWQoJ2RpdicpPFRydW5jYXRlQm94UHJvcHM+KFxuICAoeyB0aGVtZSwgc2l6ZSA9IDIgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbWF4V2lkdGg6IGAke2dldFNpemUoc2l6ZSl9ZW1gLFxuICAgIC8vIGZpeCBmb3IgVG9vbHRpcCBvdmVyIFRydW5jYXRlZCBUZXh0IGluIFNhZmFyaVxuICAgICcmOmFmdGVyJzoge1xuICAgICAgY29udGVudDogXCInJ1wiLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB9LFxuICB9KVxuKTtcblxuZXhwb3J0IGNvbnN0IFRydW5jYXRlQm94ID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MRGl2RWxlbWVudCwgVHJ1bmNhdGVCb3hQcm9wcz4oXG4gIChwcm9wcywgcmVmKSA9PiA8U3R5bGVkVHJ1bmNhdGVCb3ggcmVmPXtyZWZ9IHsuLi5wcm9wc30gLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFRydW5jYXRlQm94O1xuIl19