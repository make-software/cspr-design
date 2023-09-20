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
        padding: padding !== null && padding !== void 0 ? padding : '12px 16px',
        ':hover, :active': {
            borderRadius: theme.borderRadius.base,
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
            borderRadius: theme.borderRadius.base,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51LWl0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBQ3ZDLDZFQUE4QztBQUU5QyxJQUFNLGFBQWEsR0FBRyxJQUFBLDJCQUFNLEVBQUMsa0JBQU8sQ0FBQyxDQUF1QixVQUFDLEVBQWtCO1FBQWhCLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQTtJQUFPLE9BQUEsQ0FBQztRQUNuRixLQUFLLEVBQUUsTUFBTTtRQUNiLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLE9BQU8sRUFBRSxPQUFPLGFBQVAsT0FBTyxjQUFQLE9BQU8sR0FBSSxXQUFXO1FBQy9CLGlCQUFpQixFQUFFO1lBQ2pCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUk7WUFDckMsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1NBQ2pEO0tBQ0YsQ0FBQztBQVJrRixDQVFsRixDQUFDLENBQUM7QUFFSixJQUFNLGVBQWUsR0FBRywyQkFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFDeEMsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsU0FBUyxFQUFFLFlBQVk7UUFDdkIsT0FBTyxFQUFFLE1BQU07UUFDZixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWM7UUFDNUMsU0FBUyxFQUFFO1lBQ1QsTUFBTSxFQUFFLFNBQVM7WUFDakIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSTtZQUNyQyxLQUFLLEVBQUU7Z0JBQ0wsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztnQkFDM0MsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztnQkFDMUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO2FBQ2pEO1NBQ0Y7S0FDRixDQUFDO0FBYkYsQ0FhRSxDQUNILENBQUM7QUFPSyxJQUFNLGdCQUFnQixHQUFHLFVBQzlCLEtBQStDO0lBRS9DLE9BQU8sQ0FDTCx1QkFBQyxlQUFlLHVCQUFLLEtBQUssY0FDeEIsdUJBQUMsYUFBYSxxQkFBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sZ0JBQUcsS0FBSyxDQUFDLFFBQVEsSUFBaUIsSUFDdkQsQ0FDbkIsQ0FBQztBQUNKLENBQUMsQ0FBQztBQVJXLFFBQUEsZ0JBQWdCLG9CQVEzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuXG5jb25zdCBJdGVtQ29udGFpbmVyID0gc3R5bGVkKEZsZXhSb3cpPHsgcGFkZGluZz86IHN0cmluZyB9PigoeyB0aGVtZSwgcGFkZGluZyB9KSA9PiAoe1xuICB3aWR0aDogJzEwMCUnLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgcGFkZGluZzogcGFkZGluZyA/PyAnMTJweCAxNnB4JyxcbiAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcbiAgfSxcbn0pKTtcblxuY29uc3QgTWVudUl0ZW1XcmFwcGVyID0gc3R5bGVkLmxpKCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICAgICAgJz4gKic6IHtcbiAgICAgICAgY29sb3I6IFt0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlXSxcbiAgICAgICAgZmlsbDogW3RoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWVdLFxuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5pbnRlcmZhY2UgRHJvcGRvd25NZW51SXRlbVByb3BzIHtcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG4gIHBhZGRpbmc/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBEcm9wZG93bk1lbnVJdGVtID0gKFxuICBwcm9wczogUHJvcHNXaXRoQ2hpbGRyZW48RHJvcGRvd25NZW51SXRlbVByb3BzPlxuKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPE1lbnVJdGVtV3JhcHBlciB7Li4ucHJvcHN9PlxuICAgICAgPEl0ZW1Db250YWluZXIgcGFkZGluZz17cHJvcHMucGFkZGluZ30+e3Byb3BzLmNoaWxkcmVufTwvSXRlbUNvbnRhaW5lcj5cbiAgICA8L01lbnVJdGVtV3JhcHBlcj5cbiAgKTtcbn07XG4iXX0=