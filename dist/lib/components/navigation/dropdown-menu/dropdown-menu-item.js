import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
import FlexRow from "../../flex-row/flex-row";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51LWl0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFDdkMsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFFOUMsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUNwRCxLQUFLLEVBQUUsTUFBTTtRQUNiLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLGlCQUFpQixFQUFFO1lBQ2pCLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCO1NBQzFEO0tBQ0YsQ0FBQztBQVBtRCxDQU9uRCxDQUFDLENBQUM7QUFFSixJQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUN4QyxPQUFBLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDZCxPQUFPLEVBQUUsTUFBTTtRQUNmLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYztRQUM1QyxTQUFTLEVBQUU7WUFDVCxNQUFNLEVBQUUsU0FBUztZQUNqQixLQUFLLEVBQUU7Z0JBQ0wsS0FBSyxFQUFFO29CQUNMLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO2lCQUNuQztnQkFDRCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7aUJBQ25DO2FBQ0Y7U0FDRjtLQUNGLENBQUM7QUFkRixDQWNFLENBQ0gsQ0FBQztBQU1GLE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUFHLFVBQUMsS0FBK0M7SUFDOUUsT0FBTyxDQUNMLEtBQUMsZUFBZSxlQUFLLEtBQUssY0FDeEIsS0FBQyxhQUFhLGNBQUUsS0FBSyxDQUFDLFFBQVEsR0FBaUIsSUFDL0IsQ0FDbkIsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLGVBQWUsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgRmxleFJvdyBmcm9tIFwiLi4vLi4vZmxleC1yb3cvZmxleC1yb3dcIjtcblxuY29uc3QgSXRlbUNvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KSgoeyB0aGVtZSB9KSA9PiAoe1xuICB3aWR0aDogXCIxMDAlXCIsXG4gIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gIHBhZGRpbmc6IFwiMTJweCAyNHB4XCIsXG4gIFwiOmhvdmVyLCA6YWN0aXZlXCI6IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnlCbHVlSG92ZXIsXG4gIH0sXG59KSk7XG5cbmNvbnN0IE1lbnVJdGVtV3JhcHBlciA9IHN0eWxlZC5saSgoeyB0aGVtZSB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgXCI+ICpcIjoge1xuICAgICAgICBjb2xvcjogW1xuICAgICAgICAgIHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXG4gICAgICAgIF0sXG4gICAgICAgIGZpbGw6IFtcbiAgICAgICAgICB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuKTtcblxuaW50ZXJmYWNlIERyb3Bkb3duTWVudUl0ZW1Qcm9wcyB7XG4gICAgb25DbGljaz86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBEcm9wZG93bk1lbnVJdGVtID0gKHByb3BzOiBQcm9wc1dpdGhDaGlsZHJlbjxEcm9wZG93bk1lbnVJdGVtUHJvcHM+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPE1lbnVJdGVtV3JhcHBlciB7Li4ucHJvcHN9PlxuICAgICAgPEl0ZW1Db250YWluZXI+e3Byb3BzLmNoaWxkcmVufTwvSXRlbUNvbnRhaW5lcj5cbiAgICA8L01lbnVJdGVtV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duTWVudUl0ZW07XG4iXX0=