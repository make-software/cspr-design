import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
import FlexRow from '../../flex-row/flex-row';
var ItemContainer = styled(FlexRow)(function (_a) {
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
var MenuItemWrapper = styled.li(function (_a) {
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
export var DropdownMenuItem = function (props) {
    return (_jsx(MenuItemWrapper, __assign({}, props, { children: _jsx(ItemContainer, __assign({ padding: props.padding }, { children: props.children })) })));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51LWl0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFDdkMsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFFOUMsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUF1QixVQUFDLEVBQWtCO1FBQWhCLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQTtJQUFPLE9BQUEsQ0FBQztRQUNuRixLQUFLLEVBQUUsTUFBTTtRQUNiLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLE9BQU8sRUFBRSxPQUFPLGFBQVAsT0FBTyxjQUFQLE9BQU8sR0FBSSxXQUFXO1FBQy9CLGlCQUFpQixFQUFFO1lBQ2pCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUk7WUFDckMsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1NBQ2pEO0tBQ0YsQ0FBQztBQVJrRixDQVFsRixDQUFDLENBQUM7QUFFSixJQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUN4QyxPQUFBLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDZCxTQUFTLEVBQUUsWUFBWTtRQUN2QixPQUFPLEVBQUUsTUFBTTtRQUNmLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYztRQUM1QyxTQUFTLEVBQUU7WUFDVCxNQUFNLEVBQUUsU0FBUztZQUNqQixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJO1lBQ3JDLEtBQUssRUFBRTtnQkFDTCxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO2dCQUMzQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO2dCQUMxQyxVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWE7YUFDakQ7U0FDRjtLQUNGLENBQUM7QUFiRixDQWFFLENBQ0gsQ0FBQztBQU9GLE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUFHLFVBQzlCLEtBQStDO0lBRS9DLE9BQU8sQ0FDTCxLQUFDLGVBQWUsZUFBSyxLQUFLLGNBQ3hCLEtBQUMsYUFBYSxhQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxnQkFBRyxLQUFLLENBQUMsUUFBUSxJQUFpQixJQUN2RCxDQUNuQixDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vLi4vZmxleC1yb3cvZmxleC1yb3cnO1xyXG5cclxuY29uc3QgSXRlbUNvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KTx7IHBhZGRpbmc/OiBzdHJpbmcgfT4oKHsgdGhlbWUsIHBhZGRpbmcgfSkgPT4gKHtcclxuICB3aWR0aDogJzEwMCUnLFxyXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gIHBhZGRpbmc6IHBhZGRpbmcgPz8gJzEycHggMTZweCcsXHJcbiAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcclxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgTWVudUl0ZW1XcmFwcGVyID0gc3R5bGVkLmxpKCh7IHRoZW1lIH0pID0+XHJcbiAgdGhlbWUud2l0aE1lZGlhKHtcclxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXHJcbiAgICAgICc+IConOiB7XHJcbiAgICAgICAgY29sb3I6IFt0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlXSxcclxuICAgICAgICBmaWxsOiBbdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZV0sXHJcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KVxyXG4pO1xyXG5cclxuaW50ZXJmYWNlIERyb3Bkb3duTWVudUl0ZW1Qcm9wcyB7XHJcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XHJcbiAgcGFkZGluZz86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERyb3Bkb3duTWVudUl0ZW0gPSAoXHJcbiAgcHJvcHM6IFByb3BzV2l0aENoaWxkcmVuPERyb3Bkb3duTWVudUl0ZW1Qcm9wcz5cclxuKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNZW51SXRlbVdyYXBwZXIgey4uLnByb3BzfT5cclxuICAgICAgPEl0ZW1Db250YWluZXIgcGFkZGluZz17cHJvcHMucGFkZGluZ30+e3Byb3BzLmNoaWxkcmVufTwvSXRlbUNvbnRhaW5lcj5cclxuICAgIDwvTWVudUl0ZW1XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcbiJdfQ==