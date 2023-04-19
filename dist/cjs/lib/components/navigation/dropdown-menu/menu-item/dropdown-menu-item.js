"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownMenuItem = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var flex_row_1 = tslib_1.__importDefault(require("../../../flex-row/flex-row"));
var ItemContainer = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
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
var MenuItemWrapper = styled_components_1.default.li(function (_a) {
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
var DropdownMenuItem = function (props) {
    return ((0, jsx_runtime_1.jsx)(MenuItemWrapper, tslib_1.__assign({}, props, { children: (0, jsx_runtime_1.jsx)(ItemContainer, { children: props.children }) })));
};
exports.DropdownMenuItem = DropdownMenuItem;
exports.default = exports.DropdownMenuItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vZHJvcGRvd24tbWVudS9tZW51LWl0ZW0vZHJvcGRvd24tbWVudS1pdGVtLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGdGQUF1QztBQUN2QyxnRkFBaUQ7QUFFakQsSUFBTSxhQUFhLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDcEQsS0FBSyxFQUFFLE1BQU07UUFDYixNQUFNLEVBQUUsU0FBUztRQUNqQixPQUFPLEVBQUUsV0FBVztRQUNwQixpQkFBaUIsRUFBRTtZQUNqQixVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQjtTQUMxRDtLQUNGLENBQUM7QUFQbUQsQ0FPbkQsQ0FBQyxDQUFDO0FBRUosSUFBTSxlQUFlLEdBQUcsMkJBQU0sQ0FBQyxFQUFFLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQ3hDLE9BQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNkLE9BQU8sRUFBRSxNQUFNO1FBQ2YsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjO1FBQzVDLFNBQVMsRUFBRTtZQUNULE1BQU0sRUFBRSxTQUFTO1lBQ2pCLEtBQUssRUFBRTtnQkFDTCxLQUFLLEVBQUU7b0JBQ0wsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7aUJBQ25DO2dCQUNELElBQUksRUFBRTtvQkFDSixLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVztpQkFDbkM7YUFDRjtTQUNGO0tBQ0YsQ0FBQztBQWRGLENBY0UsQ0FDSCxDQUFDO0FBTUssSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLEtBQStDO0lBQzlFLE9BQU8sQ0FDTCx1QkFBQyxlQUFlLHVCQUFLLEtBQUssY0FDeEIsdUJBQUMsYUFBYSxjQUFFLEtBQUssQ0FBQyxRQUFRLEdBQWlCLElBQy9CLENBQ25CLENBQUM7QUFDSixDQUFDLENBQUM7QUFOVyxRQUFBLGdCQUFnQixvQkFNM0I7QUFFRixrQkFBZSx3QkFBZ0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBGbGV4Um93IGZyb20gXCIuLi8uLi8uLi9mbGV4LXJvdy9mbGV4LXJvd1wiO1xuXG5jb25zdCBJdGVtQ29udGFpbmVyID0gc3R5bGVkKEZsZXhSb3cpKCh7IHRoZW1lIH0pID0+ICh7XG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgcGFkZGluZzogXCIxMnB4IDI0cHhcIixcbiAgXCI6aG92ZXIsIDphY3RpdmVcIjoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeUJsdWVIb3ZlcixcbiAgfSxcbn0pKTtcblxuY29uc3QgTWVudUl0ZW1XcmFwcGVyID0gc3R5bGVkLmxpKCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICBcIj4gKlwiOiB7XG4gICAgICAgIGNvbG9yOiBbXG4gICAgICAgICAgdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgICAgICAgXSxcbiAgICAgICAgZmlsbDogW1xuICAgICAgICAgIHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5pbnRlcmZhY2UgRHJvcGRvd25NZW51SXRlbVByb3BzIHtcbiAgICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IERyb3Bkb3duTWVudUl0ZW0gPSAocHJvcHM6IFByb3BzV2l0aENoaWxkcmVuPERyb3Bkb3duTWVudUl0ZW1Qcm9wcz4pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TWVudUl0ZW1XcmFwcGVyIHsuLi5wcm9wc30+XG4gICAgICA8SXRlbUNvbnRhaW5lcj57cHJvcHMuY2hpbGRyZW59PC9JdGVtQ29udGFpbmVyPlxuICAgIDwvTWVudUl0ZW1XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25NZW51SXRlbTtcbiJdfQ==