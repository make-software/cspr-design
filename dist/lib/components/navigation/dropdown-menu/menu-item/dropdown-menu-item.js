import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
import FlexRow from "../../../flex-row/flex-row";
var ItemContainer = styled(FlexRow)(function (_a) {
    var theme = _a.theme;
    return ({
        width: "100%",
        cursor: "pointer",
        padding: "12px 24px",
        ":hover, :active": {
            background: theme.styleguideColors.fillSecondaryBlueHover,
        },
    });
});
var MenuItemWrapper = styled.li(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        display: "flex",
        color: theme.styleguideColors.contentPrimary,
        "&:hover": {
            cursor: "pointer",
            "> *": {
                color: [
                    theme.styleguideColors.contentBlue,
                ],
                fill: [
                    theme.styleguideColors.contentBlue,
                ],
            },
        },
    });
});
export var DropdownMenuItem = function (props) {
    return (_jsx(MenuItemWrapper, __assign({}, props, { children: _jsx(ItemContainer, { children: props.children }) })));
};
export default DropdownMenuItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vZHJvcGRvd24tbWVudS9tZW51LWl0ZW0vZHJvcGRvd24tbWVudS1pdGVtLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE9BQU8sTUFBTSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZDLE9BQU8sT0FBTyxNQUFNLDRCQUE0QixDQUFDO0FBRWpELElBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDcEQsS0FBSyxFQUFFLE1BQU07UUFDYixNQUFNLEVBQUUsU0FBUztRQUNqQixPQUFPLEVBQUUsV0FBVztRQUNwQixpQkFBaUIsRUFBRTtZQUNqQixVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQjtTQUMxRDtLQUNGLENBQUM7QUFQbUQsQ0FPbkQsQ0FBQyxDQUFDO0FBRUosSUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFDeEMsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsT0FBTyxFQUFFLE1BQU07UUFDZixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWM7UUFDNUMsU0FBUyxFQUFFO1lBQ1QsTUFBTSxFQUFFLFNBQVM7WUFDakIsS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRTtvQkFDTCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVztpQkFDbkM7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO2lCQUNuQzthQUNGO1NBQ0Y7S0FDRixDQUFDO0FBZEYsQ0FjRSxDQUNILENBQUM7QUFNRixNQUFNLENBQUMsSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLEtBQStDO0lBQzlFLE9BQU8sQ0FDTCxLQUFDLGVBQWUsZUFBSyxLQUFLLGNBQ3hCLEtBQUMsYUFBYSxjQUFFLEtBQUssQ0FBQyxRQUFRLEdBQWlCLElBQy9CLENBQ25CLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixlQUFlLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSBcIi4uLy4uLy4uL2ZsZXgtcm93L2ZsZXgtcm93XCI7XG5cbmNvbnN0IEl0ZW1Db250YWluZXIgPSBzdHlsZWQoRmxleFJvdykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICBwYWRkaW5nOiBcIjEycHggMjRweFwiLFxuICBcIjpob3ZlciwgOmFjdGl2ZVwiOiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5Qmx1ZUhvdmVyLFxuICB9LFxufSkpO1xuXG5jb25zdCBNZW51SXRlbVdyYXBwZXIgPSBzdHlsZWQubGkoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIFwiPiAqXCI6IHtcbiAgICAgICAgY29sb3I6IFtcbiAgICAgICAgICB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICAgICAgICBdLFxuICAgICAgICBmaWxsOiBbXG4gICAgICAgICAgdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmludGVyZmFjZSBEcm9wZG93bk1lbnVJdGVtUHJvcHMge1xuICAgIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgRHJvcGRvd25NZW51SXRlbSA9IChwcm9wczogUHJvcHNXaXRoQ2hpbGRyZW48RHJvcGRvd25NZW51SXRlbVByb3BzPikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNZW51SXRlbVdyYXBwZXIgey4uLnByb3BzfT5cbiAgICAgIDxJdGVtQ29udGFpbmVyPntwcm9wcy5jaGlsZHJlbn08L0l0ZW1Db250YWluZXI+XG4gICAgPC9NZW51SXRlbVdyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bk1lbnVJdGVtO1xuIl19