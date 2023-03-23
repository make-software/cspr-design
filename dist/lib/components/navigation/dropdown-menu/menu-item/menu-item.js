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
export var MenuItem = function (_a) {
    var children = _a.children;
    return (_jsx(MenuItemWrapper, { children: _jsx(ItemContainer, { children: children }) }));
};
export default MenuItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vZHJvcGRvd24tbWVudS9tZW51LWl0ZW0vbWVudS1pdGVtLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFDdkMsT0FBTyxPQUFPLE1BQU0sNEJBQTRCLENBQUM7QUFFakQsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUNwRCxLQUFLLEVBQUUsTUFBTTtRQUNiLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLGlCQUFpQixFQUFFO1lBQ2pCLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCO1NBQzFEO0tBQ0YsQ0FBQztBQVBtRCxDQU9uRCxDQUFDLENBQUM7QUFFSixJQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUN4QyxPQUFBLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDZCxPQUFPLEVBQUUsTUFBTTtRQUNmLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYztRQUM1QyxTQUFTLEVBQUU7WUFDVCxNQUFNLEVBQUUsU0FBUztZQUNqQixLQUFLLEVBQUU7Z0JBQ0wsS0FBSyxFQUFFO29CQUNMLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO2lCQUNuQztnQkFDRCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7aUJBQ25DO2FBQ0Y7U0FDRjtLQUNGLENBQUM7QUFkRixDQWNFLENBQ0gsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLFFBQVEsR0FBRyxVQUFDLEVBQW9DO1FBQWxDLFFBQVEsY0FBQTtJQUNqQyxPQUFPLENBQ0wsS0FBQyxlQUFlLGNBQ2QsS0FBQyxhQUFhLGNBQUUsUUFBUSxHQUFpQixHQUN6QixDQUNuQixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsZUFBZSxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgRmxleFJvdyBmcm9tIFwiLi4vLi4vLi4vZmxleC1yb3cvZmxleC1yb3dcIjtcblxuY29uc3QgSXRlbUNvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KSgoeyB0aGVtZSB9KSA9PiAoe1xuICB3aWR0aDogXCIxMDAlXCIsXG4gIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gIHBhZGRpbmc6IFwiMTJweCAyNHB4XCIsXG4gIFwiOmhvdmVyLCA6YWN0aXZlXCI6IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnlCbHVlSG92ZXIsXG4gIH0sXG59KSk7XG5cbmNvbnN0IE1lbnVJdGVtV3JhcHBlciA9IHN0eWxlZC5saSgoeyB0aGVtZSB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgXCI+ICpcIjoge1xuICAgICAgICBjb2xvcjogW1xuICAgICAgICAgIHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXG4gICAgICAgIF0sXG4gICAgICAgIGZpbGw6IFtcbiAgICAgICAgICB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuKTtcblxuZXhwb3J0IGNvbnN0IE1lbnVJdGVtID0gKHsgY2hpbGRyZW4gfTogUHJvcHNXaXRoQ2hpbGRyZW48YW55PikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNZW51SXRlbVdyYXBwZXI+XG4gICAgICA8SXRlbUNvbnRhaW5lcj57Y2hpbGRyZW59PC9JdGVtQ29udGFpbmVyPlxuICAgIDwvTWVudUl0ZW1XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudUl0ZW07XG4iXX0=