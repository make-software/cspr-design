import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
var MenuItemWrapper = styled.span(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        color: [
            theme.styleguideColors.contentTertiary,
            theme.styleguideColors.contentTertiary,
            theme.styleguideColors.contentPrimary,
        ],
        '&:hover': {
            cursor: 'pointer',
            '> *': {
                color: [
                    theme.styleguideColors.contentOnFill,
                    theme.styleguideColors.contentOnFill,
                    theme.styleguideColors.contentBlue,
                ],
                fill: [
                    theme.styleguideColors.contentOnFill,
                    theme.styleguideColors.contentOnFill,
                    theme.styleguideColors.contentBlue,
                ],
            },
        },
    });
});
export var MenuItem = function (_a) {
    var children = _a.children;
    return _jsx(MenuItemWrapper, { children: children });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vbWVudS1pdGVtL21lbnUtaXRlbS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sTUFBTSxNQUFNLG1CQUFtQixDQUFDO0FBRXZDLElBQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQzFDLE9BQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNkLEtBQUssRUFBRTtZQUNMLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlO1lBQ3RDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlO1lBQ3RDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjO1NBQ3RDO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsTUFBTSxFQUFFLFNBQVM7WUFDakIsS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRTtvQkFDTCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtvQkFDcEMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWE7b0JBQ3BDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO2lCQUNuQztnQkFDRCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWE7b0JBQ3BDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO29CQUNwQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVztpQkFDbkM7YUFDRjtTQUNGO0tBQ0YsQ0FBQztBQXJCRixDQXFCRSxDQUNILENBQUM7QUFFRixNQUFNLENBQUMsSUFBTSxRQUFRLEdBQUcsVUFBQyxFQUFvQztRQUFsQyxRQUFRLGNBQUE7SUFDakMsT0FBTyxLQUFDLGVBQWUsY0FBRSxRQUFRLEdBQW1CLENBQUM7QUFDdkQsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IE1lbnVJdGVtV3JhcHBlciA9IHN0eWxlZC5zcGFuKCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgY29sb3I6IFtcbiAgICAgIHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxuICAgICAgdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXG4gICAgICB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxuICAgIF0sXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICc+IConOiB7XG4gICAgICAgIGNvbG9yOiBbXG4gICAgICAgICAgdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50T25GaWxsLFxuICAgICAgICAgIHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudE9uRmlsbCxcbiAgICAgICAgICB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICAgICAgICBdLFxuICAgICAgICBmaWxsOiBbXG4gICAgICAgICAgdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50T25GaWxsLFxuICAgICAgICAgIHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudE9uRmlsbCxcbiAgICAgICAgICB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuKTtcblxuZXhwb3J0IGNvbnN0IE1lbnVJdGVtID0gKHsgY2hpbGRyZW4gfTogUHJvcHNXaXRoQ2hpbGRyZW48YW55PikgPT4ge1xuICByZXR1cm4gPE1lbnVJdGVtV3JhcHBlcj57Y2hpbGRyZW59PC9NZW51SXRlbVdyYXBwZXI+O1xufTtcbiJdfQ==