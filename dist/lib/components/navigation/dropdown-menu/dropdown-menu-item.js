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
            background: theme.styleguideColors.fillSecondaryBlueHover,
        },
    });
});
var MenuItemWrapper = styled.li(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        display: 'flex',
        color: theme.styleguideColors.contentPrimary,
        '&:hover': {
            cursor: 'pointer',
            '> *': {
                color: [theme.styleguideColors.contentBlue],
                fill: [theme.styleguideColors.contentBlue],
            },
        },
    });
});
export var DropdownMenuItem = function (props) {
    return (_jsx(MenuItemWrapper, __assign({}, props, { children: _jsx(ItemContainer, { children: props.children }) })));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51LWl0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFDdkMsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFFOUMsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUNwRCxLQUFLLEVBQUUsTUFBTTtRQUNiLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLGlCQUFpQixFQUFFO1lBQ2pCLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCO1NBQzFEO0tBQ0YsQ0FBQztBQVBtRCxDQU9uRCxDQUFDLENBQUM7QUFFSixJQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUN4QyxPQUFBLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDZCxPQUFPLEVBQUUsTUFBTTtRQUNmLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYztRQUM1QyxTQUFTLEVBQUU7WUFDVCxNQUFNLEVBQUUsU0FBUztZQUNqQixLQUFLLEVBQUU7Z0JBQ0wsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztnQkFDM0MsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQzthQUMzQztTQUNGO0tBQ0YsQ0FBQztBQVZGLENBVUUsQ0FDSCxDQUFDO0FBTUYsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUcsVUFDOUIsS0FBK0M7SUFFL0MsT0FBTyxDQUNMLEtBQUMsZUFBZSxlQUFLLEtBQUssY0FDeEIsS0FBQyxhQUFhLGNBQUUsS0FBSyxDQUFDLFFBQVEsR0FBaUIsSUFDL0IsQ0FDbkIsQ0FBQztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuXG5jb25zdCBJdGVtQ29udGFpbmVyID0gc3R5bGVkKEZsZXhSb3cpKCh7IHRoZW1lIH0pID0+ICh7XG4gIHdpZHRoOiAnMTAwJScsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBwYWRkaW5nOiAnMTJweCAyNHB4JyxcbiAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnlCbHVlSG92ZXIsXG4gIH0sXG59KSk7XG5cbmNvbnN0IE1lbnVJdGVtV3JhcHBlciA9IHN0eWxlZC5saSgoeyB0aGVtZSB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgJz4gKic6IHtcbiAgICAgICAgY29sb3I6IFt0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlXSxcbiAgICAgICAgZmlsbDogW3RoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWVdLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuKTtcblxuaW50ZXJmYWNlIERyb3Bkb3duTWVudUl0ZW1Qcm9wcyB7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgRHJvcGRvd25NZW51SXRlbSA9IChcbiAgcHJvcHM6IFByb3BzV2l0aENoaWxkcmVuPERyb3Bkb3duTWVudUl0ZW1Qcm9wcz5cbikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNZW51SXRlbVdyYXBwZXIgey4uLnByb3BzfT5cbiAgICAgIDxJdGVtQ29udGFpbmVyPntwcm9wcy5jaGlsZHJlbn08L0l0ZW1Db250YWluZXI+XG4gICAgPC9NZW51SXRlbVdyYXBwZXI+XG4gICk7XG59O1xuIl19