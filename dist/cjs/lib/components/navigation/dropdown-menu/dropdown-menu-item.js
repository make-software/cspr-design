"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownMenuItem = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var flex_row_1 = tslib_1.__importDefault(require("../../flex-row/flex-row"));
var ItemContainer = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme, padding = _a.padding;
    return ({
        width: '100%',
        cursor: 'pointer',
        padding: padding !== null && padding !== void 0 ? padding : '12px 24px',
        ':hover, :active': {
            background: theme.styleguideColors.fillSecondary,
        },
    });
});
var MenuItemWrapper = styled_components_1.default.li(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        boxSizing: 'border-box',
        display: 'flex',
        color: theme.styleguideColors.contentPrimary,
        '&:hover': {
            cursor: 'pointer',
            '> *': {
                color: [theme.styleguideColors.contentBlue],
                fill: [theme.styleguideColors.contentBlue],
                background: theme.styleguideColors.fillSecondary,
            },
        },
    });
});
var DropdownMenuItem = function (props) {
    return ((0, jsx_runtime_1.jsx)(MenuItemWrapper, tslib_1.__assign({}, props, { children: (0, jsx_runtime_1.jsx)(ItemContainer, tslib_1.__assign({ padding: props.padding }, { children: props.children })) })));
};
exports.DropdownMenuItem = DropdownMenuItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51LWl0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBQ3ZDLDZFQUE4QztBQUU5QyxJQUFNLGFBQWEsR0FBRyxJQUFBLDJCQUFNLEVBQUMsa0JBQU8sQ0FBQyxDQUF1QixVQUFDLEVBQWtCO1FBQWhCLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQTtJQUFPLE9BQUEsQ0FBQztRQUNuRixLQUFLLEVBQUUsTUFBTTtRQUNiLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLE9BQU8sRUFBRSxPQUFPLGFBQVAsT0FBTyxjQUFQLE9BQU8sR0FBSSxXQUFXO1FBQy9CLGlCQUFpQixFQUFFO1lBQ2pCLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtTQUNqRDtLQUNGLENBQUM7QUFQa0YsQ0FPbEYsQ0FBQyxDQUFDO0FBRUosSUFBTSxlQUFlLEdBQUcsMkJBQU0sQ0FBQyxFQUFFLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQ3hDLE9BQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNkLFNBQVMsRUFBRSxZQUFZO1FBQ3ZCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjO1FBQzVDLFNBQVMsRUFBRTtZQUNULE1BQU0sRUFBRSxTQUFTO1lBQ2pCLEtBQUssRUFBRTtnQkFDTCxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO2dCQUMzQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO2dCQUMxQyxVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWE7YUFDakQ7U0FDRjtLQUNGLENBQUM7QUFaRixDQVlFLENBQ0gsQ0FBQztBQU9LLElBQU0sZ0JBQWdCLEdBQUcsVUFDOUIsS0FBK0M7SUFFL0MsT0FBTyxDQUNMLHVCQUFDLGVBQWUsdUJBQUssS0FBSyxjQUN4Qix1QkFBQyxhQUFhLHFCQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxnQkFBRyxLQUFLLENBQUMsUUFBUSxJQUFpQixJQUN2RCxDQUNuQixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBUlcsUUFBQSxnQkFBZ0Isb0JBUTNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgRmxleFJvdyBmcm9tICcuLi8uLi9mbGV4LXJvdy9mbGV4LXJvdyc7XG5cbmNvbnN0IEl0ZW1Db250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8eyBwYWRkaW5nPzogc3RyaW5nIH0+KCh7IHRoZW1lLCBwYWRkaW5nIH0pID0+ICh7XG4gIHdpZHRoOiAnMTAwJScsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBwYWRkaW5nOiBwYWRkaW5nID8/ICcxMnB4IDI0cHgnLFxuICAnOmhvdmVyLCA6YWN0aXZlJzoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcbiAgfSxcbn0pKTtcblxuY29uc3QgTWVudUl0ZW1XcmFwcGVyID0gc3R5bGVkLmxpKCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAnPiAqJzoge1xuICAgICAgICBjb2xvcjogW3RoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWVdLFxuICAgICAgICBmaWxsOiBbdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZV0sXG4gICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmludGVyZmFjZSBEcm9wZG93bk1lbnVJdGVtUHJvcHMge1xuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcbiAgcGFkZGluZz86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IERyb3Bkb3duTWVudUl0ZW0gPSAoXG4gIHByb3BzOiBQcm9wc1dpdGhDaGlsZHJlbjxEcm9wZG93bk1lbnVJdGVtUHJvcHM+XG4pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TWVudUl0ZW1XcmFwcGVyIHsuLi5wcm9wc30+XG4gICAgICA8SXRlbUNvbnRhaW5lciBwYWRkaW5nPXtwcm9wcy5wYWRkaW5nfT57cHJvcHMuY2hpbGRyZW59PC9JdGVtQ29udGFpbmVyPlxuICAgIDwvTWVudUl0ZW1XcmFwcGVyPlxuICApO1xufTtcbiJdfQ==