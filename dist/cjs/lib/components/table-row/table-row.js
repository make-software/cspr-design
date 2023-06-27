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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcm93LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlLXJvdy90YWJsZS1yb3cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBV3ZDLElBQVksWUFJWDtBQUpELFdBQVksWUFBWTtJQUN0QixpREFBaUMsQ0FBQTtJQUNqQyw2Q0FBNkIsQ0FBQTtJQUM3QixpREFBaUMsQ0FBQTtBQUNuQyxDQUFDLEVBSlcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFJdkI7QUFFWSxRQUFBLGNBQWMsR0FBRywyQkFBTSxDQUFDLEVBQUUsdUZBR3JDLE1BQ0UsRUFlQSxJQUNILEtBaEJHLFVBQUMsRUFBZ0M7UUFBOUIsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsV0FBVyxpQkFBQTtJQUFPLE9BQUEsb0JBQ3RDLGlCQUFpQixFQUFFO1lBQ2pCLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtTQUNsRSxFQUNELDBCQUEwQixFQUFFO1lBQzFCLE9BQU8sRUFBRSxJQUFJO1lBQ2IsUUFBUSxFQUFFLFVBQVU7WUFDcEIsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRTtZQUNULFlBQVksRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLGlCQUFpQjtTQUM3QyxFQUNELFFBQVEsRUFBRSxVQUFVLElBQ2pCLENBQUMsV0FBVyxJQUFJO1FBQ2pCLE1BQU0sRUFBRSxTQUFTO0tBQ2xCLENBQUMsRUFDRjtBQWZzQyxDQWV0QyxFQUNGO0FBRUYsU0FBZ0IsUUFBUSxDQUFDLEVBQW9DO0lBQWxDLElBQUEsT0FBTyxhQUFBLEVBQUssS0FBSyxzQkFBbkIsV0FBcUIsQ0FBRjtJQUMxQyxPQUFPLHVCQUFDLHNCQUFjLGlDQUFXLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQU0sS0FBSyxFQUFJLENBQUM7QUFDNUUsQ0FBQztBQUZELDRCQUVDO0FBRUQsa0JBQWUsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IE1vdXNlRXZlbnRIYW5kbGVyIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlUm93UHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xyXG4gIGxvYWRpbmc/OiBib29sZWFuO1xyXG4gIGlzQ2xpY2thYmxlPzogYm9vbGVhbjtcclxuICBvbkNsaWNrPzogTW91c2VFdmVudEhhbmRsZXI8SFRNTFRhYmxlUm93RWxlbWVudD47XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRhYmxlUm93VHlwZSB7XHJcbiAgVGV4dFNpbmdsZUxpbmUgPSAnVGV4dFNpbmdsZUxpbmUnLFxyXG4gIFRleHRXaXRoSWNvbiA9ICdUZXh0V2l0aEljb24nLFxyXG4gIFRleHRXaXRoQXZhdGFyID0gJ1RleHRXaXRoQXZhdGFyJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFRhYmxlUm93ID0gc3R5bGVkLnRyPHtcclxuICAkbG9hZGluZz86IGJvb2xlYW47XHJcbiAgaXNDbGlja2FibGU/OiBib29sZWFuO1xyXG59PmBcclxuICAkeyh7IHRoZW1lLCAkbG9hZGluZywgaXNDbGlja2FibGUgfSkgPT4gKHtcclxuICAgICc6aG92ZXIsIDphY3RpdmUnOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICEkbG9hZGluZyA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSA6ICcnLFxyXG4gICAgfSxcclxuICAgICc6bm90KDpmaXJzdC1jaGlsZCk6YWZ0ZXInOiB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiJydcIixcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGxlZnQ6IDIwLFxyXG4gICAgICByaWdodDogMjAsXHJcbiAgICAgIGJvcmRlckJvdHRvbTogdGhlbWUuYm9yZGVyLnRhYmxlUm93U2VwYXJhdG9yLFxyXG4gICAgfSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgLi4uKGlzQ2xpY2thYmxlICYmIHtcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICB9KSxcclxuICB9KX1cclxuYDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUYWJsZVJvdyh7IGxvYWRpbmcsIC4uLnByb3BzIH06IFRhYmxlUm93UHJvcHMpIHtcclxuICByZXR1cm4gPFN0eWxlZFRhYmxlUm93ICRsb2FkaW5nPXtsb2FkaW5nID8gbG9hZGluZyA6IGZhbHNlfSB7Li4ucHJvcHN9IC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZVJvdztcclxuIl19