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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYmFkZ2UvYmFkZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFDdkMsT0FBTyxLQUFLLE1BQU0sZ0JBQWdCLENBQUM7QUFpQm5DLElBQU0sZ0JBQWdCLEdBQUcsVUFBQyxLQUFLLEVBQUUsS0FBMkI7SUFDMUQsT0FBQSxDQUFDO1FBQ0MsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTO1FBQ3ZDLE1BQU0sRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCO1FBQ2pELElBQUksRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVztRQUN4QyxJQUFJLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtRQUM5QyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCO0tBQzFELENBQUMsS0FBSyxDQUFDLENBQUM7QUFOVCxDQU1TLENBQUM7QUFFWixJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFtQixVQUFDLEVBQTZCO1FBQTNCLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLFNBQVMsZUFBQTtJQUFPLE9BQUEsQ0FBQztRQUNuRixPQUFPLEVBQUUsTUFBTTtRQUNmLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLEtBQUssRUFBRSxhQUFhO1FBQ3BCLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWE7UUFDbkUsVUFBVSxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7UUFDNUMsWUFBWSxFQUFFLE1BQU07UUFDcEIsU0FBUyxFQUFFLE1BQU07UUFDakIsT0FBTyxFQUFFLGVBQWU7S0FDekIsQ0FBQztBQVRrRixDQVNsRixDQUFDLENBQUM7QUFFSixJQUFNLHlCQUF5QixHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQzNELENBQUMsRUFBRTtZQUNELE1BQU0sRUFBRSxTQUFTO1lBQ2pCLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtTQUM1QztRQUNELFNBQVMsRUFBRTtZQUNULEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO1NBQ2hEO0tBQ0YsQ0FBQztBQVIwRCxDQVExRCxDQUFDLENBQUM7QUFFSixNQUFNLENBQUMsSUFBTSxLQUFLLEdBQUcsVUFBQyxFQU1UO1FBTFgsS0FBSyxXQUFBLEVBQ0wsaUJBQW1CLEVBQW5CLFNBQVMsbUJBQUcsT0FBTyxLQUFBLEVBQ25CLFNBQVMsZUFBQSxFQUNULGtCQUFpQixFQUFqQixVQUFVLG1CQUFHLElBQUksS0FBQSxFQUNqQixrQkFBaUIsRUFBakIsVUFBVSxtQkFBRyxJQUFJLEtBQUE7SUFFakIsT0FBTyxDQUNMLEtBQUMsV0FBVyxhQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsZ0JBQ25ELEtBQUMsS0FBSyxhQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxnQkFDNUQsS0FBQyx5QkFBeUIsY0FBRSxLQUFLLEdBQTZCLElBQ3hELElBQ0ksQ0FDZixDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4uL2xhYmVsL2xhYmVsJztcblxudHlwZSBCYWRnZUJhY2tncm91bmRDb2xvciA9ICdncmVlbicgfCAndmlvbGV0JyB8ICdibHVlJyB8ICdncmF5JyB8ICdmaWxsQmx1ZUdyYWRpZW50JztcblxuaW50ZXJmYWNlIFN0eWxlZEJhZGdlUHJvcHMge1xuICBiZ0NvbG9yOiBCYWRnZUJhY2tncm91bmRDb2xvcjtcbiAgdGV4dENvbG9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhZGdlUHJvcHMge1xuICBsYWJlbDogc3RyaW5nIHwgUmVhY3QuUmVhY3ROb2RlO1xuICB2YXJpYXRpb24/OiBCYWRnZUJhY2tncm91bmRDb2xvcjtcbiAgdGV4dENvbG9yPzogc3RyaW5nO1xuICBjYXBpdGFsaXplPzogYm9vbGVhbjtcbiAgbGluZUhlaWdodD86ICd4eHMnIHwgJ3hzJyB8ICdzbSc7XG59XG5cbmNvbnN0IGdldEJhZGdlQmdDb2xvcnMgPSAodGhlbWUsIGNvbG9yOiBCYWRnZUJhY2tncm91bmRDb2xvcikgPT5cbiAgKHtcbiAgICBncmVlbjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsR3JlZW4sXG4gICAgdmlvbGV0OiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxWaW9sZXRHcmFkaWVudCxcbiAgICBibHVlOiB0aGVtZS5jb2xvclNwZWNpYWxDYXNlLmJsdWVCYW5uZXIyLFxuICAgIGdyYXk6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFF1YXRlcm5hcnksXG4gICAgZmlsbEJsdWVHcmFkaWVudDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsQmx1ZUdyYWRpZW50LFxuICB9W2NvbG9yXSk7XG5cbmNvbnN0IFN0eWxlZEJhZGdlID0gc3R5bGVkLmRpdjxTdHlsZWRCYWRnZVByb3BzPigoeyB0aGVtZSwgYmdDb2xvciwgdGV4dENvbG9yIH0pID0+ICh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIHdpZHRoOiAnZml0LWNvbnRlbnQnLFxuICBjb2xvcjogdGV4dENvbG9yID8gdGV4dENvbG9yIDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50T25GaWxsLFxuICBiYWNrZ3JvdW5kOiBnZXRCYWRnZUJnQ29sb3JzKHRoZW1lLCBiZ0NvbG9yKSxcbiAgYm9yZGVyUmFkaXVzOiAnNDBweCcsXG4gIG1pbkhlaWdodDogJzE3cHgnLFxuICBwYWRkaW5nOiAnMCA2cHggMXB4IDZweCcsXG59KSk7XG5cbmNvbnN0IFN0eWxlZExhYmVsQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIGE6IHtcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50T25GaWxsLFxuICB9LFxuICAnYTpob3Zlcic6IHtcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UXVhdGVybmFyeSxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGNvbnN0IEJhZGdlID0gKHtcbiAgbGFiZWwsXG4gIHZhcmlhdGlvbiA9ICdncmVlbicsXG4gIHRleHRDb2xvcixcbiAgY2FwaXRhbGl6ZSA9IHRydWUsXG4gIGxpbmVIZWlnaHQgPSAnc20nXG59OiBCYWRnZVByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZEJhZGdlIGJnQ29sb3I9e3ZhcmlhdGlvbn0gdGV4dENvbG9yPXt0ZXh0Q29sb3J9PlxuICAgICAgPExhYmVsIHNpemU9ezJ9IGNhcGl0YWxpemU9e2NhcGl0YWxpemV9IGxpbmVIZWlnaHQ9e2xpbmVIZWlnaHR9PlxuICAgICAgICA8U3R5bGVkTGFiZWxDb250ZW50V3JhcHBlcj57bGFiZWx9PC9TdHlsZWRMYWJlbENvbnRlbnRXcmFwcGVyPlxuICAgICAgPC9MYWJlbD5cbiAgICA8L1N0eWxlZEJhZGdlPlxuICApO1xufTtcbiJdfQ==