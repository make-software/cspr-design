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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51LWl0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBQ3ZDLDZFQUE4QztBQUU5QyxJQUFNLGFBQWEsR0FBRyxJQUFBLDJCQUFNLEVBQUMsa0JBQU8sQ0FBQyxDQUF1QixVQUFDLEVBQWtCO1FBQWhCLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQTtJQUFPLE9BQUEsQ0FBQztRQUNuRixLQUFLLEVBQUUsTUFBTTtRQUNiLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLE9BQU8sRUFBRSxPQUFPLGFBQVAsT0FBTyxjQUFQLE9BQU8sR0FBSSxXQUFXO1FBQy9CLGlCQUFpQixFQUFFO1lBQ2pCLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtTQUNqRDtLQUNGLENBQUM7QUFQa0YsQ0FPbEYsQ0FBQyxDQUFDO0FBRUosSUFBTSxlQUFlLEdBQUcsMkJBQU0sQ0FBQyxFQUFFLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQ3hDLE9BQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNkLFNBQVMsRUFBRSxZQUFZO1FBQ3ZCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjO1FBQzVDLFNBQVMsRUFBRTtZQUNULE1BQU0sRUFBRSxTQUFTO1lBQ2pCLEtBQUssRUFBRTtnQkFDTCxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO2dCQUMzQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO2dCQUMxQyxVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWE7YUFDakQ7U0FDRjtLQUNGLENBQUM7QUFaRixDQVlFLENBQ0gsQ0FBQztBQU9LLElBQU0sZ0JBQWdCLEdBQUcsVUFDOUIsS0FBK0M7SUFFL0MsT0FBTyxDQUNMLHVCQUFDLGVBQWUsdUJBQUssS0FBSyxjQUN4Qix1QkFBQyxhQUFhLHFCQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxnQkFBRyxLQUFLLENBQUMsUUFBUSxJQUFpQixJQUN2RCxDQUNuQixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBUlcsUUFBQSxnQkFBZ0Isb0JBUTNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vLi4vZmxleC1yb3cvZmxleC1yb3cnO1xyXG5cclxuY29uc3QgSXRlbUNvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KTx7IHBhZGRpbmc/OiBzdHJpbmcgfT4oKHsgdGhlbWUsIHBhZGRpbmcgfSkgPT4gKHtcclxuICB3aWR0aDogJzEwMCUnLFxyXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gIHBhZGRpbmc6IHBhZGRpbmcgPz8gJzEycHggMjRweCcsXHJcbiAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBNZW51SXRlbVdyYXBwZXIgPSBzdHlsZWQubGkoKHsgdGhlbWUgfSkgPT5cclxuICB0aGVtZS53aXRoTWVkaWEoe1xyXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgJz4gKic6IHtcclxuICAgICAgICBjb2xvcjogW3RoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWVdLFxyXG4gICAgICAgIGZpbGw6IFt0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlXSxcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pXHJcbik7XHJcblxyXG5pbnRlcmZhY2UgRHJvcGRvd25NZW51SXRlbVByb3BzIHtcclxuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcclxuICBwYWRkaW5nPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRHJvcGRvd25NZW51SXRlbSA9IChcclxuICBwcm9wczogUHJvcHNXaXRoQ2hpbGRyZW48RHJvcGRvd25NZW51SXRlbVByb3BzPlxyXG4pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPE1lbnVJdGVtV3JhcHBlciB7Li4ucHJvcHN9PlxyXG4gICAgICA8SXRlbUNvbnRhaW5lciBwYWRkaW5nPXtwcm9wcy5wYWRkaW5nfT57cHJvcHMuY2hpbGRyZW59PC9JdGVtQ29udGFpbmVyPlxyXG4gICAgPC9NZW51SXRlbVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuIl19