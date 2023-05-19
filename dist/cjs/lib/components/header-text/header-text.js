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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXRleHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaGVhZGVyLXRleHQvaGVhZGVyLXRleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBR3ZDLHFEQUFtRDtBQUNuRCw4REFBK0M7QUFRL0MsSUFBTSxVQUFVLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGNBQUksQ0FBQyxDQUM3QixVQUFDLEVBQW1EO1FBQWpELEtBQUssV0FBQSxFQUFFLFlBQVEsRUFBUixJQUFJLG1CQUFHLENBQUMsS0FBQSxFQUFFLGFBQVksRUFBWixLQUFLLG1CQUFHLElBQUksS0FBQSxFQUFFLGdCQUFnQixFQUFoQixRQUFRLG1CQUFHLEtBQUssS0FBQTtJQUFPLE9BQUEsQ0FBQztRQUN4RCxVQUFVLEVBQUUsUUFBUTtZQUNsQixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTztZQUNyQyxDQUFDLENBQUMsSUFBQSxzQkFBUyxFQUNQO2dCQUNFLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTO2dCQUN4QyxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUztnQkFDeEMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUk7Z0JBQ25DLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUN2QyxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsUUFBUTtnQkFDdkMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFFBQVE7YUFDeEMsRUFDRCxJQUFJLENBQ0w7UUFDTCxRQUFRLEVBQUUsSUFBQSxzQkFBUyxFQUNqQjtZQUNFLEtBQUssRUFBRSxTQUFTO1lBQ2hCLEVBQUUsRUFBRSxVQUFVO1lBQ2QsRUFBRSxFQUFFLFFBQVE7WUFDWixFQUFFLEVBQUUsTUFBTTtZQUNWLEVBQUUsRUFBRSxTQUFTO1NBQ2QsRUFDRCxLQUFLLENBQ047UUFDRCxVQUFVLEVBQUUsSUFBQSxzQkFBUyxFQUNuQjtZQUNFLEtBQUssRUFBRSxRQUFRO1lBQ2YsRUFBRSxFQUFFLE1BQU07WUFDVixFQUFFLEVBQUUsUUFBUTtZQUNaLEVBQUUsRUFBRSxNQUFNO1lBQ1YsRUFBRSxFQUFFLFFBQVE7U0FDYixFQUNELEtBQUssQ0FDTjtLQUNGLENBQUM7QUFsQ3VELENBa0N2RCxDQUNILENBQUM7QUFFRixTQUFnQixVQUFVLENBQUMsS0FBc0I7SUFDL0MsT0FBTyx1QkFBQyxVQUFVLHVCQUFLLEtBQUssRUFBSSxDQUFDO0FBQ25DLENBQUM7QUFGRCxnQ0FFQztBQUVELGtCQUFlLFVBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IFNpemUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmltcG9ydCB7IG1hdGNoU2l6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL21hdGNoLXNpemUnO1xuaW1wb3J0IFRleHQsIHsgVGV4dFByb3BzIH0gZnJvbSAnLi4vdGV4dC90ZXh0JztcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgaW50ZXJmYWNlIEhlYWRlclRleHRQcm9wcyBleHRlbmRzIFRleHRQcm9wcyB7XG4gIHNpemU6IFNpemU7XG4gIHNjYWxlPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcyeGwnO1xufVxuXG5jb25zdCBTdHlsZWRUZXh0ID0gc3R5bGVkKFRleHQpPEhlYWRlclRleHRQcm9wcz4oXG4gICh7IHRoZW1lLCBzaXplID0gMiwgc2NhbGUgPSAnc20nLCBtb25vdHlwZSA9IGZhbHNlIH0pID0+ICh7XG4gICAgZm9udFdlaWdodDogbW9ub3R5cGVcbiAgICAgID8gdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LnJlZ3VsYXJcbiAgICAgIDogbWF0Y2hTaXplKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIDA6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5leHRyYUJvbGQsXG4gICAgICAgICAgICAxOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQuZXh0cmFCb2xkLFxuICAgICAgICAgICAgMjogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LmJvbGQsXG4gICAgICAgICAgICAzOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQuc2VtaUJvbGQsXG4gICAgICAgICAgICA0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQuc2VtaUJvbGQsXG4gICAgICAgICAgICA1OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQuc2VtaUJvbGQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaXplXG4gICAgICAgICksXG4gICAgZm9udFNpemU6IG1hdGNoU2l6ZShcbiAgICAgIHtcbiAgICAgICAgJzJ4bCc6ICczLjI1cmVtJyxcbiAgICAgICAgeGw6ICcyLjg3NXJlbScsXG4gICAgICAgIGxnOiAnMi41cmVtJyxcbiAgICAgICAgbWQ6ICcycmVtJyxcbiAgICAgICAgc206ICcxLjc1cmVtJyxcbiAgICAgIH0sXG4gICAgICBzY2FsZVxuICAgICksXG4gICAgbGluZUhlaWdodDogbWF0Y2hTaXplKFxuICAgICAge1xuICAgICAgICAnMnhsJzogJzQuNXJlbScsXG4gICAgICAgIHhsOiAnNHJlbScsXG4gICAgICAgIGxnOiAnMy41cmVtJyxcbiAgICAgICAgbWQ6ICczcmVtJyxcbiAgICAgICAgc206ICcyLjVyZW0nLFxuICAgICAgfSxcbiAgICAgIHNjYWxlXG4gICAgKSxcbiAgfSlcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXJUZXh0KHByb3BzOiBIZWFkZXJUZXh0UHJvcHMpIHtcbiAgcmV0dXJuIDxTdHlsZWRUZXh0IHsuLi5wcm9wc30gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclRleHQ7XG4iXX0=