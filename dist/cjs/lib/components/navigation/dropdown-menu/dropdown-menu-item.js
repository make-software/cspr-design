"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownMenuItem = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var flex_row_1 = tslib_1.__importDefault(require("../../flex-row/flex-row"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51LWl0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBQ3ZDLDZFQUE4QztBQUU5QyxJQUFNLGFBQWEsR0FBRyxJQUFBLDJCQUFNLEVBQUMsa0JBQU8sQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUNwRCxLQUFLLEVBQUUsTUFBTTtRQUNiLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLGlCQUFpQixFQUFFO1lBQ2pCLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCO1NBQzFEO0tBQ0YsQ0FBQztBQVBtRCxDQU9uRCxDQUFDLENBQUM7QUFFSixJQUFNLGVBQWUsR0FBRywyQkFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFDeEMsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsT0FBTyxFQUFFLE1BQU07UUFDZixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWM7UUFDNUMsU0FBUyxFQUFFO1lBQ1QsTUFBTSxFQUFFLFNBQVM7WUFDakIsS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRTtvQkFDTCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVztpQkFDbkM7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO2lCQUNuQzthQUNGO1NBQ0Y7S0FDRixDQUFDO0FBZEYsQ0FjRSxDQUNILENBQUM7QUFNSyxJQUFNLGdCQUFnQixHQUFHLFVBQUMsS0FBK0M7SUFDOUUsT0FBTyxDQUNMLHVCQUFDLGVBQWUsdUJBQUssS0FBSyxjQUN4Qix1QkFBQyxhQUFhLGNBQUUsS0FBSyxDQUFDLFFBQVEsR0FBaUIsSUFDL0IsQ0FDbkIsQ0FBQztBQUNKLENBQUMsQ0FBQztBQU5XLFFBQUEsZ0JBQWdCLG9CQU0zQjtBQUVGLGtCQUFlLHdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSBcIi4uLy4uL2ZsZXgtcm93L2ZsZXgtcm93XCI7XG5cbmNvbnN0IEl0ZW1Db250YWluZXIgPSBzdHlsZWQoRmxleFJvdykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICBwYWRkaW5nOiBcIjEycHggMjRweFwiLFxuICBcIjpob3ZlciwgOmFjdGl2ZVwiOiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5Qmx1ZUhvdmVyLFxuICB9LFxufSkpO1xuXG5jb25zdCBNZW51SXRlbVdyYXBwZXIgPSBzdHlsZWQubGkoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIFwiPiAqXCI6IHtcbiAgICAgICAgY29sb3I6IFtcbiAgICAgICAgICB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICAgICAgICBdLFxuICAgICAgICBmaWxsOiBbXG4gICAgICAgICAgdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmludGVyZmFjZSBEcm9wZG93bk1lbnVJdGVtUHJvcHMge1xuICAgIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgRHJvcGRvd25NZW51SXRlbSA9IChwcm9wczogUHJvcHNXaXRoQ2hpbGRyZW48RHJvcGRvd25NZW51SXRlbVByb3BzPikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNZW51SXRlbVdyYXBwZXIgey4uLnByb3BzfT5cbiAgICAgIDxJdGVtQ29udGFpbmVyPntwcm9wcy5jaGlsZHJlbn08L0l0ZW1Db250YWluZXI+XG4gICAgPC9NZW51SXRlbVdyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bk1lbnVJdGVtO1xuIl19