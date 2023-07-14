import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
import Label from '../label/label';
var getBadgeBgColors = function (theme, color) {
    return ({
        green: theme.styleguideColors.fillGreen,
        violet: theme.styleguideColors.fillVioletGradient,
        blue: theme.colorSpecialCase.blueBanner2,
        gray: theme.styleguideColors.contentQuaternary,
    }[color]);
};
var StyledBadge = styled.div(function (_a) {
    var theme = _a.theme, bgColor = _a.bgColor;
    return ({
        display: 'flex',
        alignItems: 'center',
        width: 'fit-content',
        color: theme.styleguideColors.contentOnFill,
        background: getBadgeBgColors(theme, bgColor),
        borderRadius: '40px',
        minHeight: '17px',
        padding: '0 6px 1px 6px',
    });
});
var StyledLabelContentWrapper = styled.div(function (_a) {
    var theme = _a.theme;
    return ({
        a: {
            cursor: 'pointer',
            color: theme.styleguideColors.contentOnFill,
        },
        'a:hover': {
            color: theme.styleguideColors.contentQuaternary,
        },
    });
});
export var Badge = function (_a) {
    var label = _a.label, _b = _a.variation, variation = _b === void 0 ? 'green' : _b, _c = _a.capitalize, capitalize = _c === void 0 ? true : _c;
    return (_jsx(StyledBadge, __assign({ bgColor: variation }, { children: _jsx(Label, __assign({ size: 2, capitalize: capitalize }, { children: _jsx(StyledLabelContentWrapper, { children: label }) })) })));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYmFkZ2UvYmFkZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFDdkMsT0FBTyxLQUFLLE1BQU0sZ0JBQWdCLENBQUM7QUFjbkMsSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLEtBQUssRUFBRSxLQUEyQjtJQUMxRCxPQUFBLENBQUM7UUFDQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFNBQVM7UUFDdkMsTUFBTSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0I7UUFDakQsSUFBSSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO1FBQ3hDLElBQUksRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO0tBQy9DLENBQUMsS0FBSyxDQUFDLENBQUM7QUFMVCxDQUtTLENBQUM7QUFFWixJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFtQixVQUFDLEVBQWtCO1FBQWhCLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQTtJQUFPLE9BQUEsQ0FBQztRQUN4RSxPQUFPLEVBQUUsTUFBTTtRQUNmLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLEtBQUssRUFBRSxhQUFhO1FBQ3BCLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtRQUMzQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztRQUM1QyxZQUFZLEVBQUUsTUFBTTtRQUNwQixTQUFTLEVBQUUsTUFBTTtRQUNqQixPQUFPLEVBQUUsZUFBZTtLQUN6QixDQUFDO0FBVHVFLENBU3ZFLENBQUMsQ0FBQztBQUVKLElBQU0seUJBQXlCLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDM0QsQ0FBQyxFQUFFO1lBQ0QsTUFBTSxFQUFFLFNBQVM7WUFDakIsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1NBQzVDO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7U0FDaEQ7S0FDRixDQUFDO0FBUjBELENBUTFELENBQUMsQ0FBQztBQUVKLE1BQU0sQ0FBQyxJQUFNLEtBQUssR0FBRyxVQUFDLEVBSVQ7UUFIWCxLQUFLLFdBQUEsRUFDTCxpQkFBbUIsRUFBbkIsU0FBUyxtQkFBRyxPQUFPLEtBQUEsRUFDbkIsa0JBQWlCLEVBQWpCLFVBQVUsbUJBQUcsSUFBSSxLQUFBO0lBRWpCLE9BQU8sQ0FDTCxLQUFDLFdBQVcsYUFBQyxPQUFPLEVBQUUsU0FBUyxnQkFDN0IsS0FBQyxLQUFLLGFBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsVUFBVSxnQkFDcEMsS0FBQyx5QkFBeUIsY0FBRSxLQUFLLEdBQTZCLElBQ3hELElBQ0ksQ0FDZixDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4uL2xhYmVsL2xhYmVsJztcblxudHlwZSBCYWRnZUJhY2tncm91bmRDb2xvciA9ICdncmVlbicgfCAndmlvbGV0JyB8ICdibHVlJyB8ICdncmF5JztcblxuaW50ZXJmYWNlIFN0eWxlZEJhZGdlUHJvcHMge1xuICBiZ0NvbG9yOiBCYWRnZUJhY2tncm91bmRDb2xvcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYWRnZVByb3BzIHtcbiAgbGFiZWw6IHN0cmluZyB8IFJlYWN0LlJlYWN0Tm9kZTtcbiAgdmFyaWF0aW9uPzogQmFkZ2VCYWNrZ3JvdW5kQ29sb3I7XG4gIGNhcGl0YWxpemU/OiBib29sZWFuO1xufVxuXG5jb25zdCBnZXRCYWRnZUJnQ29sb3JzID0gKHRoZW1lLCBjb2xvcjogQmFkZ2VCYWNrZ3JvdW5kQ29sb3IpID0+XG4gICh7XG4gICAgZ3JlZW46IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbEdyZWVuLFxuICAgIHZpb2xldDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsVmlvbGV0R3JhZGllbnQsXG4gICAgYmx1ZTogdGhlbWUuY29sb3JTcGVjaWFsQ2FzZS5ibHVlQmFubmVyMixcbiAgICBncmF5OiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRRdWF0ZXJuYXJ5LFxuICB9W2NvbG9yXSk7XG5cbmNvbnN0IFN0eWxlZEJhZGdlID0gc3R5bGVkLmRpdjxTdHlsZWRCYWRnZVByb3BzPigoeyB0aGVtZSwgYmdDb2xvciB9KSA9PiAoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICB3aWR0aDogJ2ZpdC1jb250ZW50JyxcbiAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudE9uRmlsbCxcbiAgYmFja2dyb3VuZDogZ2V0QmFkZ2VCZ0NvbG9ycyh0aGVtZSwgYmdDb2xvciksXG4gIGJvcmRlclJhZGl1czogJzQwcHgnLFxuICBtaW5IZWlnaHQ6ICcxN3B4JyxcbiAgcGFkZGluZzogJzAgNnB4IDFweCA2cHgnLFxufSkpO1xuXG5jb25zdCBTdHlsZWRMYWJlbENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBhOiB7XG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudE9uRmlsbCxcbiAgfSxcbiAgJ2E6aG92ZXInOiB7XG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFF1YXRlcm5hcnksXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBjb25zdCBCYWRnZSA9ICh7XG4gIGxhYmVsLFxuICB2YXJpYXRpb24gPSAnZ3JlZW4nLFxuICBjYXBpdGFsaXplID0gdHJ1ZSxcbn06IEJhZGdlUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkQmFkZ2UgYmdDb2xvcj17dmFyaWF0aW9ufT5cbiAgICAgIDxMYWJlbCBzaXplPXsyfSBjYXBpdGFsaXplPXtjYXBpdGFsaXplfT5cbiAgICAgICAgPFN0eWxlZExhYmVsQ29udGVudFdyYXBwZXI+e2xhYmVsfTwvU3R5bGVkTGFiZWxDb250ZW50V3JhcHBlcj5cbiAgICAgIDwvTGFiZWw+XG4gICAgPC9TdHlsZWRCYWRnZT5cbiAgKTtcbn07XG4iXX0=