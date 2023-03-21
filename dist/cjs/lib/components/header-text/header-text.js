"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderText = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var match_size_1 = require("../../utils/match-size");
var text_1 = tslib_1.__importDefault(require("../text/text"));
var StyledText = (0, styled_components_1.default)(text_1.default)(function (_a) {
    var theme = _a.theme, _b = _a.size, size = _b === void 0 ? 2 : _b, _c = _a.monotype, monotype = _c === void 0 ? false : _c;
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
            0: '3.2rem',
            1: '2.8rem',
            2: '2.4rem',
            3: '2.4rem',
            4: '2rem',
            5: '1.8rem',
        }, size),
        lineHeight: (0, match_size_1.matchSize)({
            0: '4.8rem',
            1: '4rem',
            2: '2.8rem',
            3: '2.8rem',
            4: '2rem',
            5: '2.4rem',
        }, size),
    });
});
function HeaderText(props) {
    return (0, jsx_runtime_1.jsx)(StyledText, tslib_1.__assign({}, props));
}
exports.HeaderText = HeaderText;
exports.default = HeaderText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXRleHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaGVhZGVyLXRleHQvaGVhZGVyLXRleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBR3ZDLHFEQUFtRDtBQUNuRCw4REFBK0M7QUFPL0MsSUFBTSxVQUFVLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGNBQUksQ0FBQyxDQUM3QixVQUFDLEVBQXFDO1FBQW5DLEtBQUssV0FBQSxFQUFFLFlBQVEsRUFBUixJQUFJLG1CQUFHLENBQUMsS0FBQSxFQUFFLGdCQUFnQixFQUFoQixRQUFRLG1CQUFHLEtBQUssS0FBQTtJQUFPLE9BQUEsQ0FBQztRQUMxQyxVQUFVLEVBQUUsUUFBUTtZQUNsQixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTztZQUNyQyxDQUFDLENBQUMsSUFBQSxzQkFBUyxFQUNQO2dCQUNFLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTO2dCQUN4QyxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUztnQkFDeEMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUk7Z0JBQ25DLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUN2QyxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsUUFBUTtnQkFDdkMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFFBQVE7YUFDeEMsRUFDRCxJQUFJLENBQ0w7UUFDTCxRQUFRLEVBQUUsSUFBQSxzQkFBUyxFQUNqQjtZQUNFLENBQUMsRUFBRSxRQUFRO1lBQ1gsQ0FBQyxFQUFFLFFBQVE7WUFDWCxDQUFDLEVBQUUsUUFBUTtZQUNYLENBQUMsRUFBRSxRQUFRO1lBQ1gsQ0FBQyxFQUFFLE1BQU07WUFDVCxDQUFDLEVBQUUsUUFBUTtTQUNaLEVBQ0QsSUFBSSxDQUNMO1FBQ0QsVUFBVSxFQUFFLElBQUEsc0JBQVMsRUFDbkI7WUFDRSxDQUFDLEVBQUUsUUFBUTtZQUNYLENBQUMsRUFBRSxNQUFNO1lBQ1QsQ0FBQyxFQUFFLFFBQVE7WUFDWCxDQUFDLEVBQUUsUUFBUTtZQUNYLENBQUMsRUFBRSxNQUFNO1lBQ1QsQ0FBQyxFQUFFLFFBQVE7U0FDWixFQUNELElBQUksQ0FDTDtLQUNGLENBQUM7QUFwQ3lDLENBb0N6QyxDQUNILENBQUM7QUFFRixTQUFnQixVQUFVLENBQUMsS0FBc0I7SUFDL0MsT0FBTyx1QkFBQyxVQUFVLHVCQUFLLEtBQUssRUFBSSxDQUFDO0FBQ25DLENBQUM7QUFGRCxnQ0FFQztBQUVELGtCQUFlLFVBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IFNpemUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmltcG9ydCB7IG1hdGNoU2l6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL21hdGNoLXNpemUnO1xuaW1wb3J0IFRleHQsIHsgVGV4dFByb3BzIH0gZnJvbSAnLi4vdGV4dC90ZXh0JztcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgaW50ZXJmYWNlIEhlYWRlclRleHRQcm9wcyBleHRlbmRzIFRleHRQcm9wcyB7XG4gIHNpemU6IFNpemU7XG59XG5cbmNvbnN0IFN0eWxlZFRleHQgPSBzdHlsZWQoVGV4dCk8SGVhZGVyVGV4dFByb3BzPihcbiAgKHsgdGhlbWUsIHNpemUgPSAyLCBtb25vdHlwZSA9IGZhbHNlIH0pID0+ICh7XG4gICAgZm9udFdlaWdodDogbW9ub3R5cGVcbiAgICAgID8gdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LnJlZ3VsYXJcbiAgICAgIDogbWF0Y2hTaXplKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIDA6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5leHRyYUJvbGQsXG4gICAgICAgICAgICAxOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQuZXh0cmFCb2xkLFxuICAgICAgICAgICAgMjogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LmJvbGQsXG4gICAgICAgICAgICAzOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQuc2VtaUJvbGQsXG4gICAgICAgICAgICA0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQuc2VtaUJvbGQsXG4gICAgICAgICAgICA1OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQuc2VtaUJvbGQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaXplXG4gICAgICAgICksXG4gICAgZm9udFNpemU6IG1hdGNoU2l6ZShcbiAgICAgIHtcbiAgICAgICAgMDogJzMuMnJlbScsXG4gICAgICAgIDE6ICcyLjhyZW0nLFxuICAgICAgICAyOiAnMi40cmVtJyxcbiAgICAgICAgMzogJzIuNHJlbScsXG4gICAgICAgIDQ6ICcycmVtJyxcbiAgICAgICAgNTogJzEuOHJlbScsXG4gICAgICB9LFxuICAgICAgc2l6ZVxuICAgICksXG4gICAgbGluZUhlaWdodDogbWF0Y2hTaXplKFxuICAgICAge1xuICAgICAgICAwOiAnNC44cmVtJyxcbiAgICAgICAgMTogJzRyZW0nLFxuICAgICAgICAyOiAnMi44cmVtJyxcbiAgICAgICAgMzogJzIuOHJlbScsXG4gICAgICAgIDQ6ICcycmVtJyxcbiAgICAgICAgNTogJzIuNHJlbScsXG4gICAgICB9LFxuICAgICAgc2l6ZVxuICAgICksXG4gIH0pXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVyVGV4dChwcm9wczogSGVhZGVyVGV4dFByb3BzKSB7XG4gIHJldHVybiA8U3R5bGVkVGV4dCB7Li4ucHJvcHN9IC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJUZXh0O1xuIl19