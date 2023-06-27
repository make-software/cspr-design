"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableData = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledTableData = styled_components_1.default.td(function (_a) {
    var theme = _a.theme, _b = _a.align, align = _b === void 0 ? 'left' : _b, fitContent = _a.fitContent, indented = _a.indented;
    return (tslib_1.__assign({ height: 48, padding: 8, textAlign: align, ':first-of-type': {
            paddingLeft: indented ? 60 : 20,
        }, ':last-of-type': {
            paddingRight: 20,
        } }, (fitContent && {
        width: '1%',
    })));
});
function TableData(props) {
    return (0, jsx_runtime_1.jsx)(StyledTableData, tslib_1.__assign({}, props));
}
exports.TableData = TableData;
exports.default = TableData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS1kYXRhL3RhYmxlLWRhdGEudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsZ0ZBQXVDO0FBV3ZDLElBQU0sZUFBZSxHQUFHLDJCQUFNLENBQUMsRUFBRSxDQUMvQixVQUFDLEVBQStDO1FBQTdDLEtBQUssV0FBQSxFQUFFLGFBQWMsRUFBZCxLQUFLLG1CQUFHLE1BQU0sS0FBQSxFQUFFLFVBQVUsZ0JBQUEsRUFBRSxRQUFRLGNBQUE7SUFBTyxPQUFBLG9CQUNuRCxNQUFNLEVBQUUsRUFBRSxFQUNWLE9BQU8sRUFBRSxDQUFDLEVBQ1YsU0FBUyxFQUFFLEtBQUssRUFDaEIsZ0JBQWdCLEVBQUU7WUFDaEIsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ2hDLEVBQ0QsZUFBZSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7U0FDakIsSUFDRSxDQUFDLFVBQVUsSUFBSTtRQUNoQixLQUFLLEVBQUUsSUFBSTtLQUNaLENBQUMsRUFDRjtBQWJtRCxDQWFuRCxDQUNILENBQUM7QUFFRixTQUFnQixTQUFTLENBQUMsS0FBcUI7SUFDN0MsT0FBTyx1QkFBQyxlQUFlLHVCQUFLLEtBQUssRUFBSSxDQUFDO0FBQ3hDLENBQUM7QUFGRCw4QkFFQztBQUVELGtCQUFlLFNBQVMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJsZURhdGFQcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XHJcbiAgYWxpZ24/OiAnbGVmdCcgfCAncmlnaHQnIHwgJ2NlbnRlcic7XHJcbiAgZml0Q29udGVudD86IGJvb2xlYW47XHJcbiAgaW5kZW50ZWQ/OiBib29sZWFuO1xyXG4gIGNvbFNwYW4/OiBudW1iZXI7XHJcbiAgcm93U3Bhbj86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgU3R5bGVkVGFibGVEYXRhID0gc3R5bGVkLnRkPFRhYmxlRGF0YVByb3BzPihcclxuICAoeyB0aGVtZSwgYWxpZ24gPSAnbGVmdCcsIGZpdENvbnRlbnQsIGluZGVudGVkIH0pID0+ICh7XHJcbiAgICBoZWlnaHQ6IDQ4LFxyXG4gICAgcGFkZGluZzogOCxcclxuICAgIHRleHRBbGlnbjogYWxpZ24sXHJcbiAgICAnOmZpcnN0LW9mLXR5cGUnOiB7XHJcbiAgICAgIHBhZGRpbmdMZWZ0OiBpbmRlbnRlZCA/IDYwIDogMjAsXHJcbiAgICB9LFxyXG4gICAgJzpsYXN0LW9mLXR5cGUnOiB7XHJcbiAgICAgIHBhZGRpbmdSaWdodDogMjAsXHJcbiAgICB9LFxyXG4gICAgLi4uKGZpdENvbnRlbnQgJiYge1xyXG4gICAgICB3aWR0aDogJzElJyxcclxuICAgIH0pLFxyXG4gIH0pXHJcbik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGFibGVEYXRhKHByb3BzOiBUYWJsZURhdGFQcm9wcykge1xyXG4gIHJldHVybiA8U3R5bGVkVGFibGVEYXRhIHsuLi5wcm9wc30gLz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlRGF0YTtcclxuIl19