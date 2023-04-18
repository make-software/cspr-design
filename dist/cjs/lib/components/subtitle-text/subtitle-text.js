"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtitleText = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var match_size_1 = require("../../utils/match-size");
var text_1 = tslib_1.__importDefault(require("../text/text"));
var StyledText = (0, styled_components_1.default)(text_1.default)(function (_a) {
    var theme = _a.theme, size = _a.size, _b = _a.monotype, monotype = _b === void 0 ? false : _b;
    return ({
        fontWeight: monotype
            ? theme.typography.fontWeight.regular
            : (0, match_size_1.matchSize)({
                1: theme.typography.fontWeight.semiBold,
                2: theme.typography.fontWeight.regular,
                3: theme.typography.fontWeight.light,
            }, size),
        fontSize: theme.scale('1.4rem'),
        lineHeight: theme.scale('2.0rem'),
    });
});
exports.SubtitleText = react_1.default.forwardRef(function (props, ref) {
    return (0, jsx_runtime_1.jsx)(StyledText, tslib_1.__assign({ ref: ref }, props));
});
exports.default = exports.SubtitleText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VidGl0bGUtdGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9zdWJ0aXRsZS10ZXh0L3N1YnRpdGxlLXRleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLGdGQUF1QztBQUV2QyxxREFBbUQ7QUFDbkQsOERBQStDO0FBUy9DLElBQU0sVUFBVSxHQUFHLElBQUEsMkJBQU0sRUFBQyxjQUFJLENBQUMsQ0FDN0IsVUFBQyxFQUFpQztRQUEvQixLQUFLLFdBQUEsRUFBRSxJQUFJLFVBQUEsRUFBRSxnQkFBZ0IsRUFBaEIsUUFBUSxtQkFBRyxLQUFLLEtBQUE7SUFBTyxPQUFBLENBQUM7UUFDdEMsVUFBVSxFQUFFLFFBQVE7WUFDbEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU87WUFDckMsQ0FBQyxDQUFDLElBQUEsc0JBQVMsRUFDUDtnQkFDRSxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsUUFBUTtnQkFDdkMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU87Z0JBQ3RDLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLO2FBQ3JDLEVBQ0QsSUFBSSxDQUNMO1FBQ0wsUUFBUSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQy9CLFVBQVUsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztLQUNsQyxDQUFDO0FBYnFDLENBYXJDLENBQ0gsQ0FBQztBQUVXLFFBQUEsWUFBWSxHQUFHLGVBQUssQ0FBQyxVQUFVLENBQzFDLFVBQUMsS0FBd0IsRUFBRSxHQUFHO0lBQzVCLE9BQU8sdUJBQUMsVUFBVSxxQkFBQyxHQUFHLEVBQUUsR0FBRyxJQUFNLEtBQUssRUFBSSxDQUFDO0FBQzdDLENBQUMsQ0FDRixDQUFDO0FBRUYsa0JBQWUsb0JBQVksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgbWF0Y2hTaXplIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWF0Y2gtc2l6ZSc7XG5pbXBvcnQgVGV4dCwgeyBUZXh0UHJvcHMgfSBmcm9tICcuLi90ZXh0L3RleHQnO1xuXG50eXBlIFJlZiA9IEhUTUxTcGFuRWxlbWVudDtcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgaW50ZXJmYWNlIFN1YnRpdGxlVGV4dFByb3BzIGV4dGVuZHMgVGV4dFByb3BzIHtcbiAgc2l6ZTogMSB8IDIgfCAzO1xufVxuXG5jb25zdCBTdHlsZWRUZXh0ID0gc3R5bGVkKFRleHQpPFN1YnRpdGxlVGV4dFByb3BzPihcbiAgKHsgdGhlbWUsIHNpemUsIG1vbm90eXBlID0gZmFsc2UgfSkgPT4gKHtcbiAgICBmb250V2VpZ2h0OiBtb25vdHlwZVxuICAgICAgPyB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQucmVndWxhclxuICAgICAgOiBtYXRjaFNpemUoXG4gICAgICAgICAge1xuICAgICAgICAgICAgMTogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LnNlbWlCb2xkLFxuICAgICAgICAgICAgMjogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LnJlZ3VsYXIsXG4gICAgICAgICAgICAzOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQubGlnaHQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaXplXG4gICAgICAgICksXG4gICAgZm9udFNpemU6IHRoZW1lLnNjYWxlKCcxLjRyZW0nKSxcbiAgICBsaW5lSGVpZ2h0OiB0aGVtZS5zY2FsZSgnMi4wcmVtJyksXG4gIH0pXG4pO1xuXG5leHBvcnQgY29uc3QgU3VidGl0bGVUZXh0ID0gUmVhY3QuZm9yd2FyZFJlZjxSZWYsIFN1YnRpdGxlVGV4dFByb3BzPihcbiAgKHByb3BzOiBTdWJ0aXRsZVRleHRQcm9wcywgcmVmKSA9PiB7XG4gICAgcmV0dXJuIDxTdHlsZWRUZXh0IHJlZj17cmVmfSB7Li4ucHJvcHN9IC8+O1xuICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTdWJ0aXRsZVRleHQ7XG4iXX0=