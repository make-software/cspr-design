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
    var theme = _a.theme, _b = _a.size, size = _b === void 0 ? 2 : _b, _c = _a.lineHeight, lineHeight = _c === void 0 ? 'sm' : _c, _d = _a.scale, scale = _d === void 0 ? 'sm' : _d;
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
        fontSize: (0, match_size_1.matchSize)({
            sm: '1rem',
            xs: '0.625rem',
        }, scale),
    });
});
exports.TruncateBox = react_1.default.forwardRef(function (props, ref) { return (0, jsx_runtime_1.jsx)(StyledTruncateBox, tslib_1.__assign({ ref: ref }, props)); });
exports.default = exports.TruncateBox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1bmNhdGUtYm94LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3RydW5jYXRlLWJveC90cnVuY2F0ZS1ib3gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLGdGQUF1QztBQUd2QyxxREFBbUQ7QUFTbkQsSUFBTSxPQUFPLEdBQUcsVUFBQyxJQUFVO0lBQ3pCLE9BQUEsSUFBQSxzQkFBUyxFQUNQO1FBQ0UsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxNQUFNO1FBQ1QsQ0FBQyxFQUFFLE1BQU07UUFDVCxDQUFDLEVBQUUsTUFBTTtRQUNULENBQUMsRUFBRSxNQUFNO0tBQ1YsRUFDRCxJQUFJLENBQ0w7QUFWRCxDQVVDLENBQUM7QUFFSixJQUFNLGlCQUFpQixHQUFHLElBQUEsMkJBQU0sRUFBQyxLQUFLLENBQUMsQ0FDckMsVUFBQyxFQUFvRDtRQUFsRCxLQUFLLFdBQUEsRUFBRSxZQUFRLEVBQVIsSUFBSSxtQkFBRyxDQUFDLEtBQUEsRUFBRSxrQkFBaUIsRUFBakIsVUFBVSxtQkFBRyxJQUFJLEtBQUEsRUFBRSxhQUFZLEVBQVosS0FBSyxtQkFBRyxJQUFJLEtBQUE7SUFBTyxPQUFBLENBQUM7UUFDekQsT0FBTyxFQUFFLGNBQWM7UUFDdkIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsWUFBWSxFQUFFLFVBQVU7UUFDeEIsS0FBSyxFQUFFLE1BQU07UUFDYixRQUFRLEVBQUUsVUFBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQUk7UUFDOUIsZ0RBQWdEO1FBQ2hELFNBQVMsRUFBRTtZQUNULE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFLE9BQU87U0FDakI7UUFDQyxVQUFVLEVBQUUsSUFBQSxzQkFBUyxFQUNqQjtZQUNJLEVBQUUsRUFBRSxRQUFRO1lBQ1osRUFBRSxFQUFFLFNBQVM7U0FDaEIsRUFDRCxVQUFVLENBQ2I7UUFDRCxRQUFRLEVBQUUsSUFBQSxzQkFBUyxFQUNmO1lBQ0ksRUFBRSxFQUFFLE1BQU07WUFDVixFQUFFLEVBQUUsVUFBVTtTQUNqQixFQUNELEtBQUssQ0FDUjtLQUNKLENBQUM7QUExQndELENBMEJ4RCxDQUNILENBQUM7QUFFVyxRQUFBLFdBQVcsR0FBRyxlQUFLLENBQUMsVUFBVSxDQUN6QyxVQUFDLEtBQUssRUFBRSxHQUFHLElBQUssT0FBQSx1QkFBQyxpQkFBaUIscUJBQUMsR0FBRyxFQUFFLEdBQUcsSUFBTSxLQUFLLEVBQUksRUFBMUMsQ0FBMEMsQ0FDM0QsQ0FBQztBQUVGLGtCQUFlLG1CQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEJhc2VQcm9wcywgU2l6ZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IG1hdGNoU2l6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL21hdGNoLXNpemUnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBpbnRlcmZhY2UgVHJ1bmNhdGVCb3hQcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XG4gIHNpemU/OiBTaXplO1xuICBsaW5lSGVpZ2h0PzogJ3hzJyB8ICdzbSc7XG4gIHNjYWxlPzogJ3hzJyB8ICdzbSc7XG59XG5cbmNvbnN0IGdldFNpemUgPSAoc2l6ZTogU2l6ZSkgPT5cbiAgbWF0Y2hTaXplKFxuICAgIHtcbiAgICAgIDA6IDYuMjUsXG4gICAgICAxOiA2LjI1LFxuICAgICAgMjogMTQuMzc1LFxuICAgICAgMzogMjEuODc1LFxuICAgICAgNDogMjguMTI1LFxuICAgICAgNTogMzQuMzc1LFxuICAgIH0sXG4gICAgc2l6ZVxuICApO1xuXG5jb25zdCBTdHlsZWRUcnVuY2F0ZUJveCA9IHN0eWxlZCgnZGl2Jyk8VHJ1bmNhdGVCb3hQcm9wcz4oXG4gICh7IHRoZW1lLCBzaXplID0gMiwgbGluZUhlaWdodCA9ICdzbScsIHNjYWxlID0gJ3NtJyB9KSA9PiAoe1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogYCR7Z2V0U2l6ZShzaXplKX1lbWAsXG4gICAgLy8gZml4IGZvciBUb29sdGlwIG92ZXIgVHJ1bmNhdGVkIFRleHQgaW4gU2FmYXJpXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICBjb250ZW50OiBcIicnXCIsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIH0sXG4gICAgICBsaW5lSGVpZ2h0OiBtYXRjaFNpemUoXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBzbTogJzEuNXJlbScsXG4gICAgICAgICAgICAgIHhzOiAnMS4yNXJlbScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsaW5lSGVpZ2h0XG4gICAgICApLFxuICAgICAgZm9udFNpemU6IG1hdGNoU2l6ZShcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNtOiAnMXJlbScsXG4gICAgICAgICAgICAgIHhzOiAnMC42MjVyZW0nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2NhbGVcbiAgICAgICksXG4gIH0pXG4pO1xuXG5leHBvcnQgY29uc3QgVHJ1bmNhdGVCb3ggPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxEaXZFbGVtZW50LCBUcnVuY2F0ZUJveFByb3BzPihcbiAgKHByb3BzLCByZWYpID0+IDxTdHlsZWRUcnVuY2F0ZUJveCByZWY9e3JlZn0gey4uLnByb3BzfSAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVHJ1bmNhdGVCb3g7XG4iXX0=