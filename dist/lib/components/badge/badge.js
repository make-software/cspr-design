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
    var theme = _a.theme, bgColor = _a.bgColor, textColor = _a.textColor;
    return ({
        display: 'flex',
        alignItems: 'center',
        width: 'fit-content',
        color: textColor ? textColor : theme.styleguideColors.contentOnFill,
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
    var label = _a.label, _b = _a.variation, variation = _b === void 0 ? 'green' : _b, textColor = _a.textColor, _c = _a.capitalize, capitalize = _c === void 0 ? true : _c, _d = _a.lineHeight, lineHeight = _d === void 0 ? 'sm' : _d;
    return (_jsx(StyledBadge, __assign({ bgColor: variation, textColor: textColor }, { children: _jsx(Label, __assign({ size: 2, capitalize: capitalize, lineHeight: lineHeight }, { children: _jsx(StyledLabelContentWrapper, { children: label }) })) })));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYmFkZ2UvYmFkZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFDdkMsT0FBTyxLQUFLLE1BQU0sZ0JBQWdCLENBQUM7QUFpQm5DLElBQU0sZ0JBQWdCLEdBQUcsVUFBQyxLQUFLLEVBQUUsS0FBMkI7SUFDMUQsT0FBQSxDQUFDO1FBQ0MsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTO1FBQ3ZDLE1BQU0sRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCO1FBQ2pELElBQUksRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVztRQUN4QyxJQUFJLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtRQUM5QyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCO0tBQzFELENBQUMsS0FBSyxDQUFDLENBQUM7QUFOVCxDQU1TLENBQUM7QUFFWixJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFtQixVQUFDLEVBQTZCO1FBQTNCLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLFNBQVMsZUFBQTtJQUFPLE9BQUEsQ0FBQztRQUNuRixPQUFPLEVBQUUsTUFBTTtRQUNmLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLEtBQUssRUFBRSxhQUFhO1FBQ3BCLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWE7UUFDbkUsVUFBVSxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7UUFDNUMsWUFBWSxFQUFFLE1BQU07UUFDcEIsU0FBUyxFQUFFLE1BQU07UUFDakIsT0FBTyxFQUFFLGVBQWU7S0FDekIsQ0FBQztBQVRrRixDQVNsRixDQUFDLENBQUM7QUFFSixJQUFNLHlCQUF5QixHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQzNELENBQUMsRUFBRTtZQUNELE1BQU0sRUFBRSxTQUFTO1lBQ2pCLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtTQUM1QztRQUNELFNBQVMsRUFBRTtZQUNULEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO1NBQ2hEO0tBQ0YsQ0FBQztBQVIwRCxDQVExRCxDQUFDLENBQUM7QUFFSixNQUFNLENBQUMsSUFBTSxLQUFLLEdBQUcsVUFBQyxFQU1UO1FBTFgsS0FBSyxXQUFBLEVBQ0wsaUJBQW1CLEVBQW5CLFNBQVMsbUJBQUcsT0FBTyxLQUFBLEVBQ25CLFNBQVMsZUFBQSxFQUNULGtCQUFpQixFQUFqQixVQUFVLG1CQUFHLElBQUksS0FBQSxFQUNqQixrQkFBaUIsRUFBakIsVUFBVSxtQkFBRyxJQUFJLEtBQUE7SUFFakIsT0FBTyxDQUNMLEtBQUMsV0FBVyxhQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsZ0JBQ25ELEtBQUMsS0FBSyxhQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxnQkFDNUQsS0FBQyx5QkFBeUIsY0FBRSxLQUFLLEdBQTZCLElBQ3hELElBQ0ksQ0FDZixDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBMYWJlbCBmcm9tICcuLi9sYWJlbC9sYWJlbCc7XHJcblxyXG50eXBlIEJhZGdlQmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJyB8ICd2aW9sZXQnIHwgJ2JsdWUnIHwgJ2dyYXknIHwgJ2ZpbGxCbHVlR3JhZGllbnQnO1xyXG5cclxuaW50ZXJmYWNlIFN0eWxlZEJhZGdlUHJvcHMge1xyXG4gIGJnQ29sb3I6IEJhZGdlQmFja2dyb3VuZENvbG9yO1xyXG4gIHRleHRDb2xvcj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYWRnZVByb3BzIHtcclxuICBsYWJlbDogc3RyaW5nIHwgUmVhY3QuUmVhY3ROb2RlO1xyXG4gIHZhcmlhdGlvbj86IEJhZGdlQmFja2dyb3VuZENvbG9yO1xyXG4gIHRleHRDb2xvcj86IHN0cmluZztcclxuICBjYXBpdGFsaXplPzogYm9vbGVhbjtcclxuICBsaW5lSGVpZ2h0PzogJ3h4cycgfCAneHMnIHwgJ3NtJztcclxufVxyXG5cclxuY29uc3QgZ2V0QmFkZ2VCZ0NvbG9ycyA9ICh0aGVtZSwgY29sb3I6IEJhZGdlQmFja2dyb3VuZENvbG9yKSA9PlxyXG4gICh7XHJcbiAgICBncmVlbjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsR3JlZW4sXHJcbiAgICB2aW9sZXQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFZpb2xldEdyYWRpZW50LFxyXG4gICAgYmx1ZTogdGhlbWUuY29sb3JTcGVjaWFsQ2FzZS5ibHVlQmFubmVyMixcclxuICAgIGdyYXk6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFF1YXRlcm5hcnksXHJcbiAgICBmaWxsQmx1ZUdyYWRpZW50OiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxCbHVlR3JhZGllbnQsXHJcbiAgfVtjb2xvcl0pO1xyXG5cclxuY29uc3QgU3R5bGVkQmFkZ2UgPSBzdHlsZWQuZGl2PFN0eWxlZEJhZGdlUHJvcHM+KCh7IHRoZW1lLCBiZ0NvbG9yLCB0ZXh0Q29sb3IgfSkgPT4gKHtcclxuICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgd2lkdGg6ICdmaXQtY29udGVudCcsXHJcbiAgY29sb3I6IHRleHRDb2xvciA/IHRleHRDb2xvciA6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudE9uRmlsbCxcclxuICBiYWNrZ3JvdW5kOiBnZXRCYWRnZUJnQ29sb3JzKHRoZW1lLCBiZ0NvbG9yKSxcclxuICBib3JkZXJSYWRpdXM6ICc0MHB4JyxcclxuICBtaW5IZWlnaHQ6ICcxN3B4JyxcclxuICBwYWRkaW5nOiAnMCA2cHggMXB4IDZweCcsXHJcbn0pKTtcclxuXHJcbmNvbnN0IFN0eWxlZExhYmVsQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgYToge1xyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50T25GaWxsLFxyXG4gIH0sXHJcbiAgJ2E6aG92ZXInOiB7XHJcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UXVhdGVybmFyeSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgY29uc3QgQmFkZ2UgPSAoe1xyXG4gIGxhYmVsLFxyXG4gIHZhcmlhdGlvbiA9ICdncmVlbicsXHJcbiAgdGV4dENvbG9yLFxyXG4gIGNhcGl0YWxpemUgPSB0cnVlLFxyXG4gIGxpbmVIZWlnaHQgPSAnc20nXHJcbn06IEJhZGdlUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZEJhZGdlIGJnQ29sb3I9e3ZhcmlhdGlvbn0gdGV4dENvbG9yPXt0ZXh0Q29sb3J9PlxyXG4gICAgICA8TGFiZWwgc2l6ZT17Mn0gY2FwaXRhbGl6ZT17Y2FwaXRhbGl6ZX0gbGluZUhlaWdodD17bGluZUhlaWdodH0+XHJcbiAgICAgICAgPFN0eWxlZExhYmVsQ29udGVudFdyYXBwZXI+e2xhYmVsfTwvU3R5bGVkTGFiZWxDb250ZW50V3JhcHBlcj5cclxuICAgICAgPC9MYWJlbD5cclxuICAgIDwvU3R5bGVkQmFkZ2U+XHJcbiAgKTtcclxufTtcclxuIl19