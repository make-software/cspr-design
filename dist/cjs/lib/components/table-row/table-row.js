"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableRow = exports.StyledTableRow = exports.TableRowType = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var TableRowType;
(function (TableRowType) {
    TableRowType["TextSingleLine"] = "TextSingleLine";
    TableRowType["TextWithIcon"] = "TextWithIcon";
    TableRowType["TextWithAvatar"] = "TextWithAvatar";
})(TableRowType = exports.TableRowType || (exports.TableRowType = {}));
exports.StyledTableRow = styled_components_1.default.tr(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, $loading = _a.$loading, isClickable = _a.isClickable;
    return (tslib_1.__assign({ ':hover, :active': {
            background: !$loading ? theme.styleguideColors.fillSecondary : '',
        }, ':not(:first-child):after': {
            content: "''",
            position: 'absolute',
            left: 20,
            right: 20,
            borderBottom: theme.border.tableRowSeparator,
        }, position: 'relative' }, (isClickable && {
        cursor: 'pointer',
    })));
});
function TableRow(_a) {
    var loading = _a.loading, props = tslib_1.__rest(_a, ["loading"]);
    return (0, jsx_runtime_1.jsx)(exports.StyledTableRow, tslib_1.__assign({ "$loading": loading ? loading : false }, props));
}
exports.TableRow = TableRow;
exports.default = TableRow;
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcm93LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlLXJvdy90YWJsZS1yb3cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBV3ZDLElBQVksWUFJWDtBQUpELFdBQVksWUFBWTtJQUN0QixpREFBaUMsQ0FBQTtJQUNqQyw2Q0FBNkIsQ0FBQTtJQUM3QixpREFBaUMsQ0FBQTtBQUNuQyxDQUFDLEVBSlcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFJdkI7QUFFWSxRQUFBLGNBQWMsR0FBRywyQkFBTSxDQUFDLEVBQUUsdUZBR3JDLE1BQ0UsRUFlQSxJQUNILEtBaEJHLFVBQUMsRUFBZ0M7UUFBOUIsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsV0FBVyxpQkFBQTtJQUFPLE9BQUEsb0JBQ3RDLGlCQUFpQixFQUFFO1lBQ2pCLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtTQUNsRSxFQUNELDBCQUEwQixFQUFFO1lBQzFCLE9BQU8sRUFBRSxJQUFJO1lBQ2IsUUFBUSxFQUFFLFVBQVU7WUFDcEIsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRTtZQUNULFlBQVksRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLGlCQUFpQjtTQUM3QyxFQUNELFFBQVEsRUFBRSxVQUFVLElBQ2pCLENBQUMsV0FBVyxJQUFJO1FBQ2pCLE1BQU0sRUFBRSxTQUFTO0tBQ2xCLENBQUMsRUFDRjtBQWZzQyxDQWV0QyxFQUNGO0FBRUYsU0FBZ0IsUUFBUSxDQUFDLEVBQW9DO0lBQWxDLElBQUEsT0FBTyxhQUFBLEVBQUssS0FBSyxzQkFBbkIsV0FBcUIsQ0FBRjtJQUMxQyxPQUFPLHVCQUFDLHNCQUFjLGlDQUFXLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQU0sS0FBSyxFQUFJLENBQUM7QUFDNUUsQ0FBQztBQUZELDRCQUVDO0FBRUQsa0JBQWUsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IE1vdXNlRXZlbnRIYW5kbGVyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlUm93UHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xuICBsb2FkaW5nPzogYm9vbGVhbjtcbiAgaXNDbGlja2FibGU/OiBib29sZWFuO1xuICBvbkNsaWNrPzogTW91c2VFdmVudEhhbmRsZXI8SFRNTFRhYmxlUm93RWxlbWVudD47XG59XG5cbmV4cG9ydCBlbnVtIFRhYmxlUm93VHlwZSB7XG4gIFRleHRTaW5nbGVMaW5lID0gJ1RleHRTaW5nbGVMaW5lJyxcbiAgVGV4dFdpdGhJY29uID0gJ1RleHRXaXRoSWNvbicsXG4gIFRleHRXaXRoQXZhdGFyID0gJ1RleHRXaXRoQXZhdGFyJyxcbn1cblxuZXhwb3J0IGNvbnN0IFN0eWxlZFRhYmxlUm93ID0gc3R5bGVkLnRyPHtcbiAgJGxvYWRpbmc/OiBib29sZWFuO1xuICBpc0NsaWNrYWJsZT86IGJvb2xlYW47XG59PmBcbiAgJHsoeyB0aGVtZSwgJGxvYWRpbmcsIGlzQ2xpY2thYmxlIH0pID0+ICh7XG4gICAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICEkbG9hZGluZyA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSA6ICcnLFxuICAgIH0sXG4gICAgJzpub3QoOmZpcnN0LWNoaWxkKTphZnRlcic6IHtcbiAgICAgIGNvbnRlbnQ6IFwiJydcIixcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbGVmdDogMjAsXG4gICAgICByaWdodDogMjAsXG4gICAgICBib3JkZXJCb3R0b206IHRoZW1lLmJvcmRlci50YWJsZVJvd1NlcGFyYXRvcixcbiAgICB9LFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIC4uLihpc0NsaWNrYWJsZSAmJiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB9KSxcbiAgfSl9XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gVGFibGVSb3coeyBsb2FkaW5nLCAuLi5wcm9wcyB9OiBUYWJsZVJvd1Byb3BzKSB7XG4gIHJldHVybiA8U3R5bGVkVGFibGVSb3cgJGxvYWRpbmc9e2xvYWRpbmcgPyBsb2FkaW5nIDogZmFsc2V9IHsuLi5wcm9wc30gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlUm93O1xuIl19