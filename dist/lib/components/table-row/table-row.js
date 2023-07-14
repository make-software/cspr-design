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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcm93LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlLXJvdy90YWJsZS1yb3cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFXdkMsTUFBTSxDQUFOLElBQVksWUFJWDtBQUpELFdBQVksWUFBWTtJQUN0QixpREFBaUMsQ0FBQTtJQUNqQyw2Q0FBNkIsQ0FBQTtJQUM3QixpREFBaUMsQ0FBQTtBQUNuQyxDQUFDLEVBSlcsWUFBWSxLQUFaLFlBQVksUUFJdkI7QUFFRCxNQUFNLENBQUMsSUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLEVBQUUsK0VBR3JDLE1BQ0UsRUFlQSxJQUNILEtBaEJHLFVBQUMsRUFBZ0M7UUFBOUIsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsV0FBVyxpQkFBQTtJQUFPLE9BQUEsWUFDdEMsaUJBQWlCLEVBQUU7WUFDakIsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ2xFLEVBQ0QsMEJBQTBCLEVBQUU7WUFDMUIsT0FBTyxFQUFFLElBQUk7WUFDYixRQUFRLEVBQUUsVUFBVTtZQUNwQixJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxFQUFFO1lBQ1QsWUFBWSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsaUJBQWlCO1NBQzdDLEVBQ0QsUUFBUSxFQUFFLFVBQVUsSUFDakIsQ0FBQyxXQUFXLElBQUk7UUFDakIsTUFBTSxFQUFFLFNBQVM7S0FDbEIsQ0FBQyxFQUNGO0FBZnNDLENBZXRDLENBQ0gsQ0FBQztBQUVGLE1BQU0sVUFBVSxRQUFRLENBQUMsRUFBb0M7SUFBbEMsSUFBQSxPQUFPLGFBQUEsRUFBSyxLQUFLLGNBQW5CLFdBQXFCLENBQUY7SUFDMUMsT0FBTyxLQUFDLGNBQWMseUJBQVcsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBTSxLQUFLLEVBQUksQ0FBQztBQUM1RSxDQUFDO0FBRUQsZUFBZSxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgTW91c2VFdmVudEhhbmRsZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVSb3dQcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XG4gIGxvYWRpbmc/OiBib29sZWFuO1xuICBpc0NsaWNrYWJsZT86IGJvb2xlYW47XG4gIG9uQ2xpY2s/OiBNb3VzZUV2ZW50SGFuZGxlcjxIVE1MVGFibGVSb3dFbGVtZW50Pjtcbn1cblxuZXhwb3J0IGVudW0gVGFibGVSb3dUeXBlIHtcbiAgVGV4dFNpbmdsZUxpbmUgPSAnVGV4dFNpbmdsZUxpbmUnLFxuICBUZXh0V2l0aEljb24gPSAnVGV4dFdpdGhJY29uJyxcbiAgVGV4dFdpdGhBdmF0YXIgPSAnVGV4dFdpdGhBdmF0YXInLFxufVxuXG5leHBvcnQgY29uc3QgU3R5bGVkVGFibGVSb3cgPSBzdHlsZWQudHI8e1xuICAkbG9hZGluZz86IGJvb2xlYW47XG4gIGlzQ2xpY2thYmxlPzogYm9vbGVhbjtcbn0+YFxuICAkeyh7IHRoZW1lLCAkbG9hZGluZywgaXNDbGlja2FibGUgfSkgPT4gKHtcbiAgICAnOmhvdmVyLCA6YWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZDogISRsb2FkaW5nID8gdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5IDogJycsXG4gICAgfSxcbiAgICAnOm5vdCg6Zmlyc3QtY2hpbGQpOmFmdGVyJzoge1xuICAgICAgY29udGVudDogXCInJ1wiLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBsZWZ0OiAyMCxcbiAgICAgIHJpZ2h0OiAyMCxcbiAgICAgIGJvcmRlckJvdHRvbTogdGhlbWUuYm9yZGVyLnRhYmxlUm93U2VwYXJhdG9yLFxuICAgIH0sXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgLi4uKGlzQ2xpY2thYmxlICYmIHtcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIH0pLFxuICB9KX1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBUYWJsZVJvdyh7IGxvYWRpbmcsIC4uLnByb3BzIH06IFRhYmxlUm93UHJvcHMpIHtcbiAgcmV0dXJuIDxTdHlsZWRUYWJsZVJvdyAkbG9hZGluZz17bG9hZGluZyA/IGxvYWRpbmcgOiBmYWxzZX0gey4uLnByb3BzfSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVSb3c7XG4iXX0=