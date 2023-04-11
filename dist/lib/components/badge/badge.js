import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
import Label from '../label/label';
var getBadgeBgColors = function (theme, color) {
    return ({
        green: theme.styleguideColors.fillGreen,
        violet: theme.styleguideColors.fillVioletGradient,
        blue: theme.colorSpecialCase.blueBanner2,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYmFkZ2UvYmFkZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFDdkMsT0FBTyxLQUFLLE1BQU0sZ0JBQWdCLENBQUM7QUFjbkMsSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLEtBQUssRUFBRSxLQUFrQztJQUNqRSxPQUFBLENBQUM7UUFDQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFNBQVM7UUFDdkMsTUFBTSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0I7UUFDakQsSUFBSSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO0tBQ3pDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFKVCxDQUlTLENBQUM7QUFFWixJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFtQixVQUFDLEVBQWtCO1FBQWhCLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQTtJQUFPLE9BQUEsQ0FBQztRQUN4RSxPQUFPLEVBQUUsTUFBTTtRQUNmLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLEtBQUssRUFBRSxhQUFhO1FBQ3BCLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtRQUMzQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztRQUM1QyxZQUFZLEVBQUUsTUFBTTtRQUNwQixTQUFTLEVBQUUsTUFBTTtRQUNqQixPQUFPLEVBQUUsZUFBZTtLQUN6QixDQUFDO0FBVHVFLENBU3ZFLENBQUMsQ0FBQztBQUVKLElBQU0seUJBQXlCLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDM0QsQ0FBQyxFQUFFO1lBQ0QsTUFBTSxFQUFFLFNBQVM7WUFDakIsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1NBQzVDO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7U0FDaEQ7S0FDRixDQUFDO0FBUjBELENBUTFELENBQUMsQ0FBQztBQUVKLE1BQU0sQ0FBQyxJQUFNLEtBQUssR0FBRyxVQUFDLEVBSVQ7UUFIWCxLQUFLLFdBQUEsRUFDTCxpQkFBbUIsRUFBbkIsU0FBUyxtQkFBRyxPQUFPLEtBQUEsRUFDbkIsa0JBQWlCLEVBQWpCLFVBQVUsbUJBQUcsSUFBSSxLQUFBO0lBRWpCLE9BQU8sQ0FDTCxLQUFDLFdBQVcsYUFBQyxPQUFPLEVBQUUsU0FBUyxnQkFDN0IsS0FBQyxLQUFLLGFBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsVUFBVSxnQkFDcEMsS0FBQyx5QkFBeUIsY0FBRSxLQUFLLEdBQTZCLElBQ3hELElBQ0ksQ0FDZixDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4uL2xhYmVsL2xhYmVsJztcblxudHlwZSBCYWRnZUJhY2tncm91bmRDb2xvciA9ICdncmVlbicgfCAndmlvbGV0JyB8ICdibHVlJztcblxuaW50ZXJmYWNlIFN0eWxlZEJhZGdlUHJvcHMge1xuICBiZ0NvbG9yOiBCYWRnZUJhY2tncm91bmRDb2xvcjtcbn1cblxuaW50ZXJmYWNlIEJhZGdlUHJvcHMge1xuICBsYWJlbDogc3RyaW5nIHwgUmVhY3QuUmVhY3ROb2RlO1xuICB2YXJpYXRpb24/OiBCYWRnZUJhY2tncm91bmRDb2xvcjtcbiAgY2FwaXRhbGl6ZT86IGJvb2xlYW47XG59XG5cbmNvbnN0IGdldEJhZGdlQmdDb2xvcnMgPSAodGhlbWUsIGNvbG9yOiAnZ3JlZW4nIHwgJ3Zpb2xldCcgfCAnYmx1ZScpID0+XG4gICh7XG4gICAgZ3JlZW46IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbEdyZWVuLFxuICAgIHZpb2xldDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsVmlvbGV0R3JhZGllbnQsXG4gICAgYmx1ZTogdGhlbWUuY29sb3JTcGVjaWFsQ2FzZS5ibHVlQmFubmVyMixcbiAgfVtjb2xvcl0pO1xuXG5jb25zdCBTdHlsZWRCYWRnZSA9IHN0eWxlZC5kaXY8U3R5bGVkQmFkZ2VQcm9wcz4oKHsgdGhlbWUsIGJnQ29sb3IgfSkgPT4gKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgd2lkdGg6ICdmaXQtY29udGVudCcsXG4gIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRPbkZpbGwsXG4gIGJhY2tncm91bmQ6IGdldEJhZGdlQmdDb2xvcnModGhlbWUsIGJnQ29sb3IpLFxuICBib3JkZXJSYWRpdXM6ICc0MHB4JyxcbiAgbWluSGVpZ2h0OiAnMTdweCcsXG4gIHBhZGRpbmc6ICcwIDZweCAxcHggNnB4Jyxcbn0pKTtcblxuY29uc3QgU3R5bGVkTGFiZWxDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcbiAgYToge1xuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRPbkZpbGwsXG4gIH0sXG4gICdhOmhvdmVyJzoge1xuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRRdWF0ZXJuYXJ5LFxuICB9LFxufSkpO1xuXG5leHBvcnQgY29uc3QgQmFkZ2UgPSAoe1xuICBsYWJlbCxcbiAgdmFyaWF0aW9uID0gJ2dyZWVuJyxcbiAgY2FwaXRhbGl6ZSA9IHRydWUsXG59OiBCYWRnZVByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZEJhZGdlIGJnQ29sb3I9e3ZhcmlhdGlvbn0+XG4gICAgICA8TGFiZWwgc2l6ZT17Mn0gY2FwaXRhbGl6ZT17Y2FwaXRhbGl6ZX0+XG4gICAgICAgIDxTdHlsZWRMYWJlbENvbnRlbnRXcmFwcGVyPntsYWJlbH08L1N0eWxlZExhYmVsQ29udGVudFdyYXBwZXI+XG4gICAgICA8L0xhYmVsPlxuICAgIDwvU3R5bGVkQmFkZ2U+XG4gICk7XG59O1xuIl19