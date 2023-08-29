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
        fillBlueGradient: theme.styleguideColors.fillBlueGradient,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYmFkZ2UvYmFkZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFDdkMsT0FBTyxLQUFLLE1BQU0sZ0JBQWdCLENBQUM7QUFjbkMsSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLEtBQUssRUFBRSxLQUEyQjtJQUMxRCxPQUFBLENBQUM7UUFDQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFNBQVM7UUFDdkMsTUFBTSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0I7UUFDakQsSUFBSSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO1FBQ3hDLElBQUksRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO1FBQzlDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7S0FDMUQsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQU5ULENBTVMsQ0FBQztBQUVaLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQW1CLFVBQUMsRUFBa0I7UUFBaEIsS0FBSyxXQUFBLEVBQUUsT0FBTyxhQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ3hFLE9BQU8sRUFBRSxNQUFNO1FBQ2YsVUFBVSxFQUFFLFFBQVE7UUFDcEIsS0FBSyxFQUFFLGFBQWE7UUFDcEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1FBQzNDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO1FBQzVDLFlBQVksRUFBRSxNQUFNO1FBQ3BCLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLE9BQU8sRUFBRSxlQUFlO0tBQ3pCLENBQUM7QUFUdUUsQ0FTdkUsQ0FBQyxDQUFDO0FBRUosSUFBTSx5QkFBeUIsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUMzRCxDQUFDLEVBQUU7WUFDRCxNQUFNLEVBQUUsU0FBUztZQUNqQixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWE7U0FDNUM7UUFDRCxTQUFTLEVBQUU7WUFDVCxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtTQUNoRDtLQUNGLENBQUM7QUFSMEQsQ0FRMUQsQ0FBQyxDQUFDO0FBRUosTUFBTSxDQUFDLElBQU0sS0FBSyxHQUFHLFVBQUMsRUFJVDtRQUhYLEtBQUssV0FBQSxFQUNMLGlCQUFtQixFQUFuQixTQUFTLG1CQUFHLE9BQU8sS0FBQSxFQUNuQixrQkFBaUIsRUFBakIsVUFBVSxtQkFBRyxJQUFJLEtBQUE7SUFFakIsT0FBTyxDQUNMLEtBQUMsV0FBVyxhQUFDLE9BQU8sRUFBRSxTQUFTLGdCQUM3QixLQUFDLEtBQUssYUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxVQUFVLGdCQUNwQyxLQUFDLHlCQUF5QixjQUFFLEtBQUssR0FBNkIsSUFDeEQsSUFDSSxDQUNmLENBQUM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vbGFiZWwvbGFiZWwnO1xuXG50eXBlIEJhZGdlQmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJyB8ICd2aW9sZXQnIHwgJ2JsdWUnIHwgJ2dyYXknIHwgJ2ZpbGxCbHVlR3JhZGllbnQnO1xuXG5pbnRlcmZhY2UgU3R5bGVkQmFkZ2VQcm9wcyB7XG4gIGJnQ29sb3I6IEJhZGdlQmFja2dyb3VuZENvbG9yO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhZGdlUHJvcHMge1xuICBsYWJlbDogc3RyaW5nIHwgUmVhY3QuUmVhY3ROb2RlO1xuICB2YXJpYXRpb24/OiBCYWRnZUJhY2tncm91bmRDb2xvcjtcbiAgY2FwaXRhbGl6ZT86IGJvb2xlYW47XG59XG5cbmNvbnN0IGdldEJhZGdlQmdDb2xvcnMgPSAodGhlbWUsIGNvbG9yOiBCYWRnZUJhY2tncm91bmRDb2xvcikgPT5cbiAgKHtcbiAgICBncmVlbjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsR3JlZW4sXG4gICAgdmlvbGV0OiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxWaW9sZXRHcmFkaWVudCxcbiAgICBibHVlOiB0aGVtZS5jb2xvclNwZWNpYWxDYXNlLmJsdWVCYW5uZXIyLFxuICAgIGdyYXk6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFF1YXRlcm5hcnksXG4gICAgZmlsbEJsdWVHcmFkaWVudDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsQmx1ZUdyYWRpZW50LFxuICB9W2NvbG9yXSk7XG5cbmNvbnN0IFN0eWxlZEJhZGdlID0gc3R5bGVkLmRpdjxTdHlsZWRCYWRnZVByb3BzPigoeyB0aGVtZSwgYmdDb2xvciB9KSA9PiAoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICB3aWR0aDogJ2ZpdC1jb250ZW50JyxcbiAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudE9uRmlsbCxcbiAgYmFja2dyb3VuZDogZ2V0QmFkZ2VCZ0NvbG9ycyh0aGVtZSwgYmdDb2xvciksXG4gIGJvcmRlclJhZGl1czogJzQwcHgnLFxuICBtaW5IZWlnaHQ6ICcxN3B4JyxcbiAgcGFkZGluZzogJzAgNnB4IDFweCA2cHgnLFxufSkpO1xuXG5jb25zdCBTdHlsZWRMYWJlbENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBhOiB7XG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudE9uRmlsbCxcbiAgfSxcbiAgJ2E6aG92ZXInOiB7XG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFF1YXRlcm5hcnksXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBjb25zdCBCYWRnZSA9ICh7XG4gIGxhYmVsLFxuICB2YXJpYXRpb24gPSAnZ3JlZW4nLFxuICBjYXBpdGFsaXplID0gdHJ1ZSxcbn06IEJhZGdlUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkQmFkZ2UgYmdDb2xvcj17dmFyaWF0aW9ufT5cbiAgICAgIDxMYWJlbCBzaXplPXsyfSBjYXBpdGFsaXplPXtjYXBpdGFsaXplfT5cbiAgICAgICAgPFN0eWxlZExhYmVsQ29udGVudFdyYXBwZXI+e2xhYmVsfTwvU3R5bGVkTGFiZWxDb250ZW50V3JhcHBlcj5cbiAgICAgIDwvTGFiZWw+XG4gICAgPC9TdHlsZWRCYWRnZT5cbiAgKTtcbn07XG4iXX0=