import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
import FlexRow from '../../flex-row/flex-row';
var ItemContainer = styled(FlexRow)(function (_a) {
    var theme = _a.theme;
    return ({
        width: '100%',
        cursor: 'pointer',
        padding: '12px 24px',
        ':hover, :active': {
            background: theme.styleguideColors.fillSecondary,
        },
    });
});
var MenuItemWrapper = styled.li(function (_a) {
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
export var DropdownMenuItem = function (props) {
    return (_jsx(MenuItemWrapper, __assign({}, props, { children: _jsx(ItemContainer, { children: props.children }) })));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51LWl0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFDdkMsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFFOUMsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUNwRCxLQUFLLEVBQUUsTUFBTTtRQUNiLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLGlCQUFpQixFQUFFO1lBQ2pCLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtTQUNqRDtLQUNGLENBQUM7QUFQbUQsQ0FPbkQsQ0FBQyxDQUFDO0FBRUosSUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFDeEMsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsU0FBUyxFQUFFLFlBQVk7UUFDdkIsT0FBTyxFQUFFLE1BQU07UUFDZixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWM7UUFDNUMsU0FBUyxFQUFFO1lBQ1QsTUFBTSxFQUFFLFNBQVM7WUFDakIsS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7Z0JBQzNDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7Z0JBQzFDLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTthQUNqRDtTQUNGO0tBQ0YsQ0FBQztBQVpGLENBWUUsQ0FDSCxDQUFDO0FBTUYsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUcsVUFDOUIsS0FBK0M7SUFFL0MsT0FBTyxDQUNMLEtBQUMsZUFBZSxlQUFLLEtBQUssY0FDeEIsS0FBQyxhQUFhLGNBQUUsS0FBSyxDQUFDLFFBQVEsR0FBaUIsSUFDL0IsQ0FDbkIsQ0FBQztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuXG5jb25zdCBJdGVtQ29udGFpbmVyID0gc3R5bGVkKEZsZXhSb3cpKCh7IHRoZW1lIH0pID0+ICh7XG4gIHdpZHRoOiAnMTAwJScsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBwYWRkaW5nOiAnMTJweCAyNHB4JyxcbiAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gIH0sXG59KSk7XG5cbmNvbnN0IE1lbnVJdGVtV3JhcHBlciA9IHN0eWxlZC5saSgoeyB0aGVtZSB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgJz4gKic6IHtcbiAgICAgICAgY29sb3I6IFt0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlXSxcbiAgICAgICAgZmlsbDogW3RoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWVdLFxuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5pbnRlcmZhY2UgRHJvcGRvd25NZW51SXRlbVByb3BzIHtcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBEcm9wZG93bk1lbnVJdGVtID0gKFxuICBwcm9wczogUHJvcHNXaXRoQ2hpbGRyZW48RHJvcGRvd25NZW51SXRlbVByb3BzPlxuKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPE1lbnVJdGVtV3JhcHBlciB7Li4ucHJvcHN9PlxuICAgICAgPEl0ZW1Db250YWluZXI+e3Byb3BzLmNoaWxkcmVufTwvSXRlbUNvbnRhaW5lcj5cbiAgICA8L01lbnVJdGVtV3JhcHBlcj5cbiAgKTtcbn07XG4iXX0=