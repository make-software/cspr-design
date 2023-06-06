import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
import FlexRow from '../../flex-row/flex-row';
var ItemContainer = styled(FlexRow)(function (_a) {
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
    return (_jsx(MenuItemWrapper, __assign({}, props, { children: _jsx(ItemContainer, __assign({ padding: props.padding }, { children: props.children })) })));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51LWl0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFDdkMsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFFOUMsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUF1QixVQUFDLEVBQWtCO1FBQWhCLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQTtJQUFPLE9BQUEsQ0FBQztRQUNuRixLQUFLLEVBQUUsTUFBTTtRQUNiLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLE9BQU8sRUFBRSxPQUFPLGFBQVAsT0FBTyxjQUFQLE9BQU8sR0FBSSxXQUFXO1FBQy9CLGlCQUFpQixFQUFFO1lBQ2pCLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtTQUNqRDtLQUNGLENBQUM7QUFQa0YsQ0FPbEYsQ0FBQyxDQUFDO0FBRUosSUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFDeEMsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsU0FBUyxFQUFFLFlBQVk7UUFDdkIsT0FBTyxFQUFFLE1BQU07UUFDZixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWM7UUFDNUMsU0FBUyxFQUFFO1lBQ1QsTUFBTSxFQUFFLFNBQVM7WUFDakIsS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7Z0JBQzNDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7Z0JBQzFDLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTthQUNqRDtTQUNGO0tBQ0YsQ0FBQztBQVpGLENBWUUsQ0FDSCxDQUFDO0FBT0YsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUcsVUFDOUIsS0FBK0M7SUFFL0MsT0FBTyxDQUNMLEtBQUMsZUFBZSxlQUFLLEtBQUssY0FDeEIsS0FBQyxhQUFhLGFBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLGdCQUFHLEtBQUssQ0FBQyxRQUFRLElBQWlCLElBQ3ZELENBQ25CLENBQUM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uLy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcblxuY29uc3QgSXRlbUNvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KTx7IHBhZGRpbmc/OiBzdHJpbmcgfT4oKHsgdGhlbWUsIHBhZGRpbmcgfSkgPT4gKHtcbiAgd2lkdGg6ICcxMDAlJyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIHBhZGRpbmc6IHBhZGRpbmcgPz8gJzEycHggMjRweCcsXG4gICc6aG92ZXIsIDphY3RpdmUnOiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxuICB9LFxufSkpO1xuXG5jb25zdCBNZW51SXRlbVdyYXBwZXIgPSBzdHlsZWQubGkoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICc+IConOiB7XG4gICAgICAgIGNvbG9yOiBbdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZV0sXG4gICAgICAgIGZpbGw6IFt0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlXSxcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuKTtcblxuaW50ZXJmYWNlIERyb3Bkb3duTWVudUl0ZW1Qcm9wcyB7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xuICBwYWRkaW5nPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgRHJvcGRvd25NZW51SXRlbSA9IChcbiAgcHJvcHM6IFByb3BzV2l0aENoaWxkcmVuPERyb3Bkb3duTWVudUl0ZW1Qcm9wcz5cbikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNZW51SXRlbVdyYXBwZXIgey4uLnByb3BzfT5cbiAgICAgIDxJdGVtQ29udGFpbmVyIHBhZGRpbmc9e3Byb3BzLnBhZGRpbmd9Pntwcm9wcy5jaGlsZHJlbn08L0l0ZW1Db250YWluZXI+XG4gICAgPC9NZW51SXRlbVdyYXBwZXI+XG4gICk7XG59O1xuIl19