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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYmFkZ2UvYmFkZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFDdkMsT0FBTyxLQUFLLE1BQU0sZ0JBQWdCLENBQUM7QUFjbkMsSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLEtBQUssRUFBRSxLQUEyQjtJQUMxRCxPQUFBLENBQUM7UUFDQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFNBQVM7UUFDdkMsTUFBTSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0I7UUFDakQsSUFBSSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO1FBQ3hDLElBQUksRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO0tBQy9DLENBQUMsS0FBSyxDQUFDLENBQUM7QUFMVCxDQUtTLENBQUM7QUFFWixJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFtQixVQUFDLEVBQWtCO1FBQWhCLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQTtJQUFPLE9BQUEsQ0FBQztRQUN4RSxPQUFPLEVBQUUsTUFBTTtRQUNmLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLEtBQUssRUFBRSxhQUFhO1FBQ3BCLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtRQUMzQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztRQUM1QyxZQUFZLEVBQUUsTUFBTTtRQUNwQixTQUFTLEVBQUUsTUFBTTtRQUNqQixPQUFPLEVBQUUsZUFBZTtLQUN6QixDQUFDO0FBVHVFLENBU3ZFLENBQUMsQ0FBQztBQUVKLElBQU0seUJBQXlCLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDM0QsQ0FBQyxFQUFFO1lBQ0QsTUFBTSxFQUFFLFNBQVM7WUFDakIsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1NBQzVDO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7U0FDaEQ7S0FDRixDQUFDO0FBUjBELENBUTFELENBQUMsQ0FBQztBQUVKLE1BQU0sQ0FBQyxJQUFNLEtBQUssR0FBRyxVQUFDLEVBSVQ7UUFIWCxLQUFLLFdBQUEsRUFDTCxpQkFBbUIsRUFBbkIsU0FBUyxtQkFBRyxPQUFPLEtBQUEsRUFDbkIsa0JBQWlCLEVBQWpCLFVBQVUsbUJBQUcsSUFBSSxLQUFBO0lBRWpCLE9BQU8sQ0FDTCxLQUFDLFdBQVcsYUFBQyxPQUFPLEVBQUUsU0FBUyxnQkFDN0IsS0FBQyxLQUFLLGFBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsVUFBVSxnQkFDcEMsS0FBQyx5QkFBeUIsY0FBRSxLQUFLLEdBQTZCLElBQ3hELElBQ0ksQ0FDZixDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBMYWJlbCBmcm9tICcuLi9sYWJlbC9sYWJlbCc7XHJcblxyXG50eXBlIEJhZGdlQmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJyB8ICd2aW9sZXQnIHwgJ2JsdWUnIHwgJ2dyYXknO1xyXG5cclxuaW50ZXJmYWNlIFN0eWxlZEJhZGdlUHJvcHMge1xyXG4gIGJnQ29sb3I6IEJhZGdlQmFja2dyb3VuZENvbG9yO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhZGdlUHJvcHMge1xyXG4gIGxhYmVsOiBzdHJpbmcgfCBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgdmFyaWF0aW9uPzogQmFkZ2VCYWNrZ3JvdW5kQ29sb3I7XHJcbiAgY2FwaXRhbGl6ZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IGdldEJhZGdlQmdDb2xvcnMgPSAodGhlbWUsIGNvbG9yOiBCYWRnZUJhY2tncm91bmRDb2xvcikgPT5cclxuICAoe1xyXG4gICAgZ3JlZW46IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbEdyZWVuLFxyXG4gICAgdmlvbGV0OiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxWaW9sZXRHcmFkaWVudCxcclxuICAgIGJsdWU6IHRoZW1lLmNvbG9yU3BlY2lhbENhc2UuYmx1ZUJhbm5lcjIsXHJcbiAgICBncmF5OiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRRdWF0ZXJuYXJ5LFxyXG4gIH1bY29sb3JdKTtcclxuXHJcbmNvbnN0IFN0eWxlZEJhZGdlID0gc3R5bGVkLmRpdjxTdHlsZWRCYWRnZVByb3BzPigoeyB0aGVtZSwgYmdDb2xvciB9KSA9PiAoe1xyXG4gIGRpc3BsYXk6ICdmbGV4JyxcclxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICB3aWR0aDogJ2ZpdC1jb250ZW50JyxcclxuICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50T25GaWxsLFxyXG4gIGJhY2tncm91bmQ6IGdldEJhZGdlQmdDb2xvcnModGhlbWUsIGJnQ29sb3IpLFxyXG4gIGJvcmRlclJhZGl1czogJzQwcHgnLFxyXG4gIG1pbkhlaWdodDogJzE3cHgnLFxyXG4gIHBhZGRpbmc6ICcwIDZweCAxcHggNnB4JyxcclxufSkpO1xyXG5cclxuY29uc3QgU3R5bGVkTGFiZWxDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBhOiB7XHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRPbkZpbGwsXHJcbiAgfSxcclxuICAnYTpob3Zlcic6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRRdWF0ZXJuYXJ5LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBjb25zdCBCYWRnZSA9ICh7XHJcbiAgbGFiZWwsXHJcbiAgdmFyaWF0aW9uID0gJ2dyZWVuJyxcclxuICBjYXBpdGFsaXplID0gdHJ1ZSxcclxufTogQmFkZ2VQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkQmFkZ2UgYmdDb2xvcj17dmFyaWF0aW9ufT5cclxuICAgICAgPExhYmVsIHNpemU9ezJ9IGNhcGl0YWxpemU9e2NhcGl0YWxpemV9PlxyXG4gICAgICAgIDxTdHlsZWRMYWJlbENvbnRlbnRXcmFwcGVyPntsYWJlbH08L1N0eWxlZExhYmVsQ29udGVudFdyYXBwZXI+XHJcbiAgICAgIDwvTGFiZWw+XHJcbiAgICA8L1N0eWxlZEJhZGdlPlxyXG4gICk7XHJcbn07XHJcbiJdfQ==