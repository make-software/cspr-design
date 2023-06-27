"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderText = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var match_size_1 = require("../../utils/match-size");
var text_1 = tslib_1.__importDefault(require("../text/text"));
var StyledText = (0, styled_components_1.default)(text_1.default)(function (_a) {
    var theme = _a.theme, _b = _a.size, size = _b === void 0 ? 2 : _b, _c = _a.scale, scale = _c === void 0 ? 'sm' : _c, _d = _a.monotype, monotype = _d === void 0 ? false : _d;
    return ({
        fontWeight: monotype
            ? theme.typography.fontWeight.regular
            : (0, match_size_1.matchSize)({
                0: theme.typography.fontWeight.extraBold,
                1: theme.typography.fontWeight.extraBold,
                2: theme.typography.fontWeight.bold,
                3: theme.typography.fontWeight.semiBold,
                4: theme.typography.fontWeight.semiBold,
                5: theme.typography.fontWeight.semiBold,
            }, size),
        fontSize: (0, match_size_1.matchSize)({
            '2xl': '3.25rem',
            xl: '2.875rem',
            lg: '2.5rem',
            md: '2rem',
            sm: '1.75rem',
        }, scale),
        lineHeight: (0, match_size_1.matchSize)({
            '2xl': '4.5rem',
            xl: '4rem',
            lg: '3.5rem',
            md: '3rem',
            sm: '2.5rem',
        }, scale),
    });
});
function HeaderText(props) {
    return (0, jsx_runtime_1.jsx)(StyledText, tslib_1.__assign({}, props));
}
exports.HeaderText = HeaderText;
exports.default = HeaderText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXRleHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaGVhZGVyLXRleHQvaGVhZGVyLXRleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBR3ZDLHFEQUFtRDtBQUNuRCw4REFBK0M7QUFRL0MsSUFBTSxVQUFVLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGNBQUksQ0FBQyxDQUM3QixVQUFDLEVBQW1EO1FBQWpELEtBQUssV0FBQSxFQUFFLFlBQVEsRUFBUixJQUFJLG1CQUFHLENBQUMsS0FBQSxFQUFFLGFBQVksRUFBWixLQUFLLG1CQUFHLElBQUksS0FBQSxFQUFFLGdCQUFnQixFQUFoQixRQUFRLG1CQUFHLEtBQUssS0FBQTtJQUFPLE9BQUEsQ0FBQztRQUN4RCxVQUFVLEVBQUUsUUFBUTtZQUNsQixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTztZQUNyQyxDQUFDLENBQUMsSUFBQSxzQkFBUyxFQUNQO2dCQUNFLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTO2dCQUN4QyxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUztnQkFDeEMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUk7Z0JBQ25DLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUN2QyxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsUUFBUTtnQkFDdkMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFFBQVE7YUFDeEMsRUFDRCxJQUFJLENBQ0w7UUFDTCxRQUFRLEVBQUUsSUFBQSxzQkFBUyxFQUNqQjtZQUNFLEtBQUssRUFBRSxTQUFTO1lBQ2hCLEVBQUUsRUFBRSxVQUFVO1lBQ2QsRUFBRSxFQUFFLFFBQVE7WUFDWixFQUFFLEVBQUUsTUFBTTtZQUNWLEVBQUUsRUFBRSxTQUFTO1NBQ2QsRUFDRCxLQUFLLENBQ047UUFDRCxVQUFVLEVBQUUsSUFBQSxzQkFBUyxFQUNuQjtZQUNFLEtBQUssRUFBRSxRQUFRO1lBQ2YsRUFBRSxFQUFFLE1BQU07WUFDVixFQUFFLEVBQUUsUUFBUTtZQUNaLEVBQUUsRUFBRSxNQUFNO1lBQ1YsRUFBRSxFQUFFLFFBQVE7U0FDYixFQUNELEtBQUssQ0FDTjtLQUNGLENBQUM7QUFsQ3VELENBa0N2RCxDQUNILENBQUM7QUFFRixTQUFnQixVQUFVLENBQUMsS0FBc0I7SUFDL0MsT0FBTyx1QkFBQyxVQUFVLHVCQUFLLEtBQUssRUFBSSxDQUFDO0FBQ25DLENBQUM7QUFGRCxnQ0FFQztBQUVELGtCQUFlLFVBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBTaXplIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5cclxuaW1wb3J0IHsgbWF0Y2hTaXplIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWF0Y2gtc2l6ZSc7XHJcbmltcG9ydCBUZXh0LCB7IFRleHRQcm9wcyB9IGZyb20gJy4uL3RleHQvdGV4dCc7XHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cclxuZXhwb3J0IGludGVyZmFjZSBIZWFkZXJUZXh0UHJvcHMgZXh0ZW5kcyBUZXh0UHJvcHMge1xyXG4gIHNpemU6IFNpemU7XHJcbiAgc2NhbGU/OiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJzJ4bCc7XHJcbn1cclxuXHJcbmNvbnN0IFN0eWxlZFRleHQgPSBzdHlsZWQoVGV4dCk8SGVhZGVyVGV4dFByb3BzPihcclxuICAoeyB0aGVtZSwgc2l6ZSA9IDIsIHNjYWxlID0gJ3NtJywgbW9ub3R5cGUgPSBmYWxzZSB9KSA9PiAoe1xyXG4gICAgZm9udFdlaWdodDogbW9ub3R5cGVcclxuICAgICAgPyB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQucmVndWxhclxyXG4gICAgICA6IG1hdGNoU2l6ZShcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgMDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LmV4dHJhQm9sZCxcclxuICAgICAgICAgICAgMTogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LmV4dHJhQm9sZCxcclxuICAgICAgICAgICAgMjogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LmJvbGQsXHJcbiAgICAgICAgICAgIDM6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5zZW1pQm9sZCxcclxuICAgICAgICAgICAgNDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LnNlbWlCb2xkLFxyXG4gICAgICAgICAgICA1OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQuc2VtaUJvbGQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2l6ZVxyXG4gICAgICAgICksXHJcbiAgICBmb250U2l6ZTogbWF0Y2hTaXplKFxyXG4gICAgICB7XHJcbiAgICAgICAgJzJ4bCc6ICczLjI1cmVtJyxcclxuICAgICAgICB4bDogJzIuODc1cmVtJyxcclxuICAgICAgICBsZzogJzIuNXJlbScsXHJcbiAgICAgICAgbWQ6ICcycmVtJyxcclxuICAgICAgICBzbTogJzEuNzVyZW0nLFxyXG4gICAgICB9LFxyXG4gICAgICBzY2FsZVxyXG4gICAgKSxcclxuICAgIGxpbmVIZWlnaHQ6IG1hdGNoU2l6ZShcclxuICAgICAge1xyXG4gICAgICAgICcyeGwnOiAnNC41cmVtJyxcclxuICAgICAgICB4bDogJzRyZW0nLFxyXG4gICAgICAgIGxnOiAnMy41cmVtJyxcclxuICAgICAgICBtZDogJzNyZW0nLFxyXG4gICAgICAgIHNtOiAnMi41cmVtJyxcclxuICAgICAgfSxcclxuICAgICAgc2NhbGVcclxuICAgICksXHJcbiAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXJUZXh0KHByb3BzOiBIZWFkZXJUZXh0UHJvcHMpIHtcclxuICByZXR1cm4gPFN0eWxlZFRleHQgey4uLnByb3BzfSAvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyVGV4dDtcclxuIl19