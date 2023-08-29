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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXRleHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaGVhZGVyLXRleHQvaGVhZGVyLXRleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBR3ZDLHFEQUFtRDtBQUNuRCw4REFBK0M7QUFRL0MsSUFBTSxVQUFVLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGNBQUksQ0FBQyxDQUM3QixVQUFDLEVBQW1EO1FBQWpELEtBQUssV0FBQSxFQUFFLFlBQVEsRUFBUixJQUFJLG1CQUFHLENBQUMsS0FBQSxFQUFFLGFBQVksRUFBWixLQUFLLG1CQUFHLElBQUksS0FBQSxFQUFFLGdCQUFnQixFQUFoQixRQUFRLG1CQUFHLEtBQUssS0FBQTtJQUFPLE9BQUEsQ0FBQztRQUN4RCxVQUFVLEVBQUUsUUFBUTtZQUNsQixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTztZQUNyQyxDQUFDLENBQUMsSUFBQSxzQkFBUyxFQUNQO2dCQUNFLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTO2dCQUN4QyxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUztnQkFDeEMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUk7Z0JBQ25DLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUN2QyxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsUUFBUTtnQkFDdkMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFFBQVE7YUFDeEMsRUFDRCxJQUFJLENBQ0w7UUFDTCxRQUFRLEVBQUUsSUFBQSxzQkFBUyxFQUNqQjtZQUNFLEtBQUssRUFBRSxTQUFTO1lBQ2hCLEVBQUUsRUFBRSxVQUFVO1lBQ2QsRUFBRSxFQUFFLFFBQVE7WUFDWixFQUFFLEVBQUUsTUFBTTtZQUNWLEVBQUUsRUFBRSxTQUFTO1lBQ2IsRUFBRSxFQUFFLFFBQVE7U0FDYixFQUNELEtBQUssQ0FDTjtRQUNELFVBQVUsRUFBRSxJQUFBLHNCQUFTLEVBQ25CO1lBQ0UsS0FBSyxFQUFFLFFBQVE7WUFDZixFQUFFLEVBQUUsTUFBTTtZQUNWLEVBQUUsRUFBRSxRQUFRO1lBQ1osRUFBRSxFQUFFLE1BQU07WUFDVixFQUFFLEVBQUUsUUFBUTtZQUNaLEVBQUUsRUFBRSxTQUFTO1NBQ2QsRUFDRCxLQUFLLENBQ047S0FDRixDQUFDO0FBcEN1RCxDQW9DdkQsQ0FDSCxDQUFDO0FBRUYsU0FBZ0IsVUFBVSxDQUFDLEtBQXNCO0lBQy9DLE9BQU8sdUJBQUMsVUFBVSx1QkFBSyxLQUFLLEVBQUksQ0FBQztBQUNuQyxDQUFDO0FBRkQsZ0NBRUM7QUFFRCxrQkFBZSxVQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBTaXplIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBtYXRjaFNpemUgfSBmcm9tICcuLi8uLi91dGlscy9tYXRjaC1zaXplJztcbmltcG9ydCBUZXh0LCB7IFRleHRQcm9wcyB9IGZyb20gJy4uL3RleHQvdGV4dCc7XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBIZWFkZXJUZXh0UHJvcHMgZXh0ZW5kcyBUZXh0UHJvcHMge1xuICBzaXplOiBTaXplO1xuICBzY2FsZT86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJzJ4bCc7XG59XG5cbmNvbnN0IFN0eWxlZFRleHQgPSBzdHlsZWQoVGV4dCk8SGVhZGVyVGV4dFByb3BzPihcbiAgKHsgdGhlbWUsIHNpemUgPSAyLCBzY2FsZSA9ICdzbScsIG1vbm90eXBlID0gZmFsc2UgfSkgPT4gKHtcbiAgICBmb250V2VpZ2h0OiBtb25vdHlwZVxuICAgICAgPyB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQucmVndWxhclxuICAgICAgOiBtYXRjaFNpemUoXG4gICAgICAgICAge1xuICAgICAgICAgICAgMDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LmV4dHJhQm9sZCxcbiAgICAgICAgICAgIDE6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5leHRyYUJvbGQsXG4gICAgICAgICAgICAyOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQuYm9sZCxcbiAgICAgICAgICAgIDM6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5zZW1pQm9sZCxcbiAgICAgICAgICAgIDQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5zZW1pQm9sZCxcbiAgICAgICAgICAgIDU6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5zZW1pQm9sZCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNpemVcbiAgICAgICAgKSxcbiAgICBmb250U2l6ZTogbWF0Y2hTaXplKFxuICAgICAge1xuICAgICAgICAnMnhsJzogJzMuMjVyZW0nLFxuICAgICAgICB4bDogJzIuODc1cmVtJyxcbiAgICAgICAgbGc6ICcyLjVyZW0nLFxuICAgICAgICBtZDogJzJyZW0nLFxuICAgICAgICBzbTogJzEuNzVyZW0nLFxuICAgICAgICB4czogJzEuNXJlbScsXG4gICAgICB9LFxuICAgICAgc2NhbGVcbiAgICApLFxuICAgIGxpbmVIZWlnaHQ6IG1hdGNoU2l6ZShcbiAgICAgIHtcbiAgICAgICAgJzJ4bCc6ICc0LjVyZW0nLFxuICAgICAgICB4bDogJzRyZW0nLFxuICAgICAgICBsZzogJzMuNXJlbScsXG4gICAgICAgIG1kOiAnM3JlbScsXG4gICAgICAgIHNtOiAnMi41cmVtJyxcbiAgICAgICAgeHM6ICcxLjc1cmVtJyxcbiAgICAgIH0sXG4gICAgICBzY2FsZVxuICAgICksXG4gIH0pXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVyVGV4dChwcm9wczogSGVhZGVyVGV4dFByb3BzKSB7XG4gIHJldHVybiA8U3R5bGVkVGV4dCB7Li4ucHJvcHN9IC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJUZXh0O1xuIl19