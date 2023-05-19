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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS1kYXRhL3RhYmxlLWRhdGEudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsZ0ZBQXVDO0FBV3ZDLElBQU0sZUFBZSxHQUFHLDJCQUFNLENBQUMsRUFBRSxDQUMvQixVQUFDLEVBQStDO1FBQTdDLEtBQUssV0FBQSxFQUFFLGFBQWMsRUFBZCxLQUFLLG1CQUFHLE1BQU0sS0FBQSxFQUFFLFVBQVUsZ0JBQUEsRUFBRSxRQUFRLGNBQUE7SUFBTyxPQUFBLG9CQUNuRCxNQUFNLEVBQUUsRUFBRSxFQUNWLE9BQU8sRUFBRSxDQUFDLEVBQ1YsU0FBUyxFQUFFLEtBQUssRUFDaEIsZ0JBQWdCLEVBQUU7WUFDaEIsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ2hDLEVBQ0QsZUFBZSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7U0FDakIsSUFDRSxDQUFDLFVBQVUsSUFBSTtRQUNoQixLQUFLLEVBQUUsSUFBSTtLQUNaLENBQUMsRUFDRjtBQWJtRCxDQWFuRCxDQUNILENBQUM7QUFFRixTQUFnQixTQUFTLENBQUMsS0FBcUI7SUFDN0MsT0FBTyx1QkFBQyxlQUFlLHVCQUFLLEtBQUssRUFBSSxDQUFDO0FBQ3hDLENBQUM7QUFGRCw4QkFFQztBQUVELGtCQUFlLFNBQVMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlRGF0YVByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgYWxpZ24/OiAnbGVmdCcgfCAncmlnaHQnIHwgJ2NlbnRlcic7XG4gIGZpdENvbnRlbnQ/OiBib29sZWFuO1xuICBpbmRlbnRlZD86IGJvb2xlYW47XG4gIGNvbFNwYW4/OiBudW1iZXI7XG4gIHJvd1NwYW4/OiBudW1iZXI7XG59XG5cbmNvbnN0IFN0eWxlZFRhYmxlRGF0YSA9IHN0eWxlZC50ZDxUYWJsZURhdGFQcm9wcz4oXG4gICh7IHRoZW1lLCBhbGlnbiA9ICdsZWZ0JywgZml0Q29udGVudCwgaW5kZW50ZWQgfSkgPT4gKHtcbiAgICBoZWlnaHQ6IDQ4LFxuICAgIHBhZGRpbmc6IDgsXG4gICAgdGV4dEFsaWduOiBhbGlnbixcbiAgICAnOmZpcnN0LW9mLXR5cGUnOiB7XG4gICAgICBwYWRkaW5nTGVmdDogaW5kZW50ZWQgPyA2MCA6IDIwLFxuICAgIH0sXG4gICAgJzpsYXN0LW9mLXR5cGUnOiB7XG4gICAgICBwYWRkaW5nUmlnaHQ6IDIwLFxuICAgIH0sXG4gICAgLi4uKGZpdENvbnRlbnQgJiYge1xuICAgICAgd2lkdGg6ICcxJScsXG4gICAgfSksXG4gIH0pXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gVGFibGVEYXRhKHByb3BzOiBUYWJsZURhdGFQcm9wcykge1xuICByZXR1cm4gPFN0eWxlZFRhYmxlRGF0YSB7Li4ucHJvcHN9IC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZURhdGE7XG4iXX0=