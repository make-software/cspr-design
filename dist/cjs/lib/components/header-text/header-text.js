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
            xs: '1.5rem',
        }, scale),
        lineHeight: (0, match_size_1.matchSize)({
            '2xl': '4.5rem',
            xl: '4rem',
            lg: '3.5rem',
            md: '3rem',
            sm: '2.5rem',
            xs: '1.75rem',
        }, scale),
    });
});
function HeaderText(props) {
    return (0, jsx_runtime_1.jsx)(StyledText, tslib_1.__assign({}, props));
}
exports.HeaderText = HeaderText;
exports.default = HeaderText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXRleHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaGVhZGVyLXRleHQvaGVhZGVyLXRleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBR3ZDLHFEQUFtRDtBQUNuRCw4REFBK0M7QUFRL0MsSUFBTSxVQUFVLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGNBQUksQ0FBQyxDQUM3QixVQUFDLEVBQW1EO1FBQWpELEtBQUssV0FBQSxFQUFFLFlBQVEsRUFBUixJQUFJLG1CQUFHLENBQUMsS0FBQSxFQUFFLGFBQVksRUFBWixLQUFLLG1CQUFHLElBQUksS0FBQSxFQUFFLGdCQUFnQixFQUFoQixRQUFRLG1CQUFHLEtBQUssS0FBQTtJQUFPLE9BQUEsQ0FBQztRQUN4RCxVQUFVLEVBQUUsUUFBUTtZQUNsQixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTztZQUNyQyxDQUFDLENBQUMsSUFBQSxzQkFBUyxFQUNQO2dCQUNFLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTO2dCQUN4QyxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUztnQkFDeEMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUk7Z0JBQ25DLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUN2QyxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsUUFBUTtnQkFDdkMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFFBQVE7YUFDeEMsRUFDRCxJQUFJLENBQ0w7UUFDTCxRQUFRLEVBQUUsSUFBQSxzQkFBUyxFQUNqQjtZQUNFLEtBQUssRUFBRSxTQUFTO1lBQ2hCLEVBQUUsRUFBRSxVQUFVO1lBQ2QsRUFBRSxFQUFFLFFBQVE7WUFDWixFQUFFLEVBQUUsTUFBTTtZQUNWLEVBQUUsRUFBRSxTQUFTO1lBQ2IsRUFBRSxFQUFFLFFBQVE7U0FDYixFQUNELEtBQUssQ0FDTjtRQUNELFVBQVUsRUFBRSxJQUFBLHNCQUFTLEVBQ25CO1lBQ0UsS0FBSyxFQUFFLFFBQVE7WUFDZixFQUFFLEVBQUUsTUFBTTtZQUNWLEVBQUUsRUFBRSxRQUFRO1lBQ1osRUFBRSxFQUFFLE1BQU07WUFDVixFQUFFLEVBQUUsUUFBUTtZQUNaLEVBQUUsRUFBRSxTQUFTO1NBQ2QsRUFDRCxLQUFLLENBQ047S0FDRixDQUFDO0FBcEN1RCxDQW9DdkQsQ0FDSCxDQUFDO0FBRUYsU0FBZ0IsVUFBVSxDQUFDLEtBQXNCO0lBQy9DLE9BQU8sdUJBQUMsVUFBVSx1QkFBSyxLQUFLLEVBQUksQ0FBQztBQUNuQyxDQUFDO0FBRkQsZ0NBRUM7QUFFRCxrQkFBZSxVQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgU2l6ZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcclxuXHJcbmltcG9ydCB7IG1hdGNoU2l6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL21hdGNoLXNpemUnO1xyXG5pbXBvcnQgVGV4dCwgeyBUZXh0UHJvcHMgfSBmcm9tICcuLi90ZXh0L3RleHQnO1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGVhZGVyVGV4dFByb3BzIGV4dGVuZHMgVGV4dFByb3BzIHtcclxuICBzaXplOiBTaXplO1xyXG4gIHNjYWxlPzogJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAnMnhsJztcclxufVxyXG5cclxuY29uc3QgU3R5bGVkVGV4dCA9IHN0eWxlZChUZXh0KTxIZWFkZXJUZXh0UHJvcHM+KFxyXG4gICh7IHRoZW1lLCBzaXplID0gMiwgc2NhbGUgPSAnc20nLCBtb25vdHlwZSA9IGZhbHNlIH0pID0+ICh7XHJcbiAgICBmb250V2VpZ2h0OiBtb25vdHlwZVxyXG4gICAgICA/IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5yZWd1bGFyXHJcbiAgICAgIDogbWF0Y2hTaXplKFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAwOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQuZXh0cmFCb2xkLFxyXG4gICAgICAgICAgICAxOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQuZXh0cmFCb2xkLFxyXG4gICAgICAgICAgICAyOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQuYm9sZCxcclxuICAgICAgICAgICAgMzogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LnNlbWlCb2xkLFxyXG4gICAgICAgICAgICA0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQuc2VtaUJvbGQsXHJcbiAgICAgICAgICAgIDU6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5zZW1pQm9sZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzaXplXHJcbiAgICAgICAgKSxcclxuICAgIGZvbnRTaXplOiBtYXRjaFNpemUoXHJcbiAgICAgIHtcclxuICAgICAgICAnMnhsJzogJzMuMjVyZW0nLFxyXG4gICAgICAgIHhsOiAnMi44NzVyZW0nLFxyXG4gICAgICAgIGxnOiAnMi41cmVtJyxcclxuICAgICAgICBtZDogJzJyZW0nLFxyXG4gICAgICAgIHNtOiAnMS43NXJlbScsXHJcbiAgICAgICAgeHM6ICcxLjVyZW0nLFxyXG4gICAgICB9LFxyXG4gICAgICBzY2FsZVxyXG4gICAgKSxcclxuICAgIGxpbmVIZWlnaHQ6IG1hdGNoU2l6ZShcclxuICAgICAge1xyXG4gICAgICAgICcyeGwnOiAnNC41cmVtJyxcclxuICAgICAgICB4bDogJzRyZW0nLFxyXG4gICAgICAgIGxnOiAnMy41cmVtJyxcclxuICAgICAgICBtZDogJzNyZW0nLFxyXG4gICAgICAgIHNtOiAnMi41cmVtJyxcclxuICAgICAgICB4czogJzEuNzVyZW0nLFxyXG4gICAgICB9LFxyXG4gICAgICBzY2FsZVxyXG4gICAgKSxcclxuICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRlclRleHQocHJvcHM6IEhlYWRlclRleHRQcm9wcykge1xyXG4gIHJldHVybiA8U3R5bGVkVGV4dCB7Li4ucHJvcHN9IC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJUZXh0O1xyXG4iXX0=