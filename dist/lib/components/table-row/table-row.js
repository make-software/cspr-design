import { __assign, __makeTemplateObject, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
export var TableRowType;
(function (TableRowType) {
    TableRowType["TextSingleLine"] = "TextSingleLine";
    TableRowType["TextWithIcon"] = "TextWithIcon";
    TableRowType["TextWithAvatar"] = "TextWithAvatar";
})(TableRowType || (TableRowType = {}));
export var StyledTableRow = styled.tr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, $loading = _a.$loading, isClickable = _a.isClickable;
    return (__assign({ ':hover, :active': {
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
export function TableRow(_a) {
    var loading = _a.loading, props = __rest(_a, ["loading"]);
    return _jsx(StyledTableRow, __assign({ "$loading": loading ? loading : false }, props));
}
export default TableRow;
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcm93LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlLXJvdy90YWJsZS1yb3cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFXdkMsTUFBTSxDQUFOLElBQVksWUFJWDtBQUpELFdBQVksWUFBWTtJQUN0QixpREFBaUMsQ0FBQTtJQUNqQyw2Q0FBNkIsQ0FBQTtJQUM3QixpREFBaUMsQ0FBQTtBQUNuQyxDQUFDLEVBSlcsWUFBWSxLQUFaLFlBQVksUUFJdkI7QUFFRCxNQUFNLENBQUMsSUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLEVBQUUsK0VBR3JDLE1BQ0UsRUFlQSxJQUNILEtBaEJHLFVBQUMsRUFBZ0M7UUFBOUIsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsV0FBVyxpQkFBQTtJQUFPLE9BQUEsWUFDdEMsaUJBQWlCLEVBQUU7WUFDakIsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ2xFLEVBQ0QsMEJBQTBCLEVBQUU7WUFDMUIsT0FBTyxFQUFFLElBQUk7WUFDYixRQUFRLEVBQUUsVUFBVTtZQUNwQixJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxFQUFFO1lBQ1QsWUFBWSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsaUJBQWlCO1NBQzdDLEVBQ0QsUUFBUSxFQUFFLFVBQVUsSUFDakIsQ0FBQyxXQUFXLElBQUk7UUFDakIsTUFBTSxFQUFFLFNBQVM7S0FDbEIsQ0FBQyxFQUNGO0FBZnNDLENBZXRDLENBQ0gsQ0FBQztBQUVGLE1BQU0sVUFBVSxRQUFRLENBQUMsRUFBb0M7SUFBbEMsSUFBQSxPQUFPLGFBQUEsRUFBSyxLQUFLLGNBQW5CLFdBQXFCLENBQUY7SUFDMUMsT0FBTyxLQUFDLGNBQWMseUJBQVcsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBTSxLQUFLLEVBQUksQ0FBQztBQUM1RSxDQUFDO0FBRUQsZUFBZSxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgTW91c2VFdmVudEhhbmRsZXIgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVSb3dQcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XHJcbiAgbG9hZGluZz86IGJvb2xlYW47XHJcbiAgaXNDbGlja2FibGU/OiBib29sZWFuO1xyXG4gIG9uQ2xpY2s/OiBNb3VzZUV2ZW50SGFuZGxlcjxIVE1MVGFibGVSb3dFbGVtZW50PjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVGFibGVSb3dUeXBlIHtcclxuICBUZXh0U2luZ2xlTGluZSA9ICdUZXh0U2luZ2xlTGluZScsXHJcbiAgVGV4dFdpdGhJY29uID0gJ1RleHRXaXRoSWNvbicsXHJcbiAgVGV4dFdpdGhBdmF0YXIgPSAnVGV4dFdpdGhBdmF0YXInLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkVGFibGVSb3cgPSBzdHlsZWQudHI8e1xyXG4gICRsb2FkaW5nPzogYm9vbGVhbjtcclxuICBpc0NsaWNrYWJsZT86IGJvb2xlYW47XHJcbn0+YFxyXG4gICR7KHsgdGhlbWUsICRsb2FkaW5nLCBpc0NsaWNrYWJsZSB9KSA9PiAoe1xyXG4gICAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcclxuICAgICAgYmFja2dyb3VuZDogISRsb2FkaW5nID8gdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5IDogJycsXHJcbiAgICB9LFxyXG4gICAgJzpub3QoOmZpcnN0LWNoaWxkKTphZnRlcic6IHtcclxuICAgICAgY29udGVudDogXCInJ1wiLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgbGVmdDogMjAsXHJcbiAgICAgIHJpZ2h0OiAyMCxcclxuICAgICAgYm9yZGVyQm90dG9tOiB0aGVtZS5ib3JkZXIudGFibGVSb3dTZXBhcmF0b3IsXHJcbiAgICB9LFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAuLi4oaXNDbGlja2FibGUgJiYge1xyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIH0pLFxyXG4gIH0pfVxyXG5gO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRhYmxlUm93KHsgbG9hZGluZywgLi4ucHJvcHMgfTogVGFibGVSb3dQcm9wcykge1xyXG4gIHJldHVybiA8U3R5bGVkVGFibGVSb3cgJGxvYWRpbmc9e2xvYWRpbmcgPyBsb2FkaW5nIDogZmFsc2V9IHsuLi5wcm9wc30gLz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlUm93O1xyXG4iXX0=