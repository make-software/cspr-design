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
    var label = _a.label, _b = _a.variation, variation = _b === void 0 ? 'green' : _b, _c = _a.capitalize, capitalize = _c === void 0 ? true : _c, _d = _a.lineHeight, lineHeight = _d === void 0 ? 'sm' : _d;
    return (_jsx(StyledBadge, __assign({ bgColor: variation }, { children: _jsx(Label, __assign({ size: 2, capitalize: capitalize, lineHeight: lineHeight }, { children: _jsx(StyledLabelContentWrapper, { children: label }) })) })));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYmFkZ2UvYmFkZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFDdkMsT0FBTyxLQUFLLE1BQU0sZ0JBQWdCLENBQUM7QUFlbkMsSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLEtBQUssRUFBRSxLQUEyQjtJQUMxRCxPQUFBLENBQUM7UUFDQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFNBQVM7UUFDdkMsTUFBTSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0I7UUFDakQsSUFBSSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO1FBQ3hDLElBQUksRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO1FBQzlDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7S0FDMUQsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQU5ULENBTVMsQ0FBQztBQUVaLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQW1CLFVBQUMsRUFBa0I7UUFBaEIsS0FBSyxXQUFBLEVBQUUsT0FBTyxhQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ3hFLE9BQU8sRUFBRSxNQUFNO1FBQ2YsVUFBVSxFQUFFLFFBQVE7UUFDcEIsS0FBSyxFQUFFLGFBQWE7UUFDcEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1FBQzNDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO1FBQzVDLFlBQVksRUFBRSxNQUFNO1FBQ3BCLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLE9BQU8sRUFBRSxlQUFlO0tBQ3pCLENBQUM7QUFUdUUsQ0FTdkUsQ0FBQyxDQUFDO0FBRUosSUFBTSx5QkFBeUIsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUMzRCxDQUFDLEVBQUU7WUFDRCxNQUFNLEVBQUUsU0FBUztZQUNqQixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWE7U0FDNUM7UUFDRCxTQUFTLEVBQUU7WUFDVCxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtTQUNoRDtLQUNGLENBQUM7QUFSMEQsQ0FRMUQsQ0FBQyxDQUFDO0FBRUosTUFBTSxDQUFDLElBQU0sS0FBSyxHQUFHLFVBQUMsRUFLVDtRQUpYLEtBQUssV0FBQSxFQUNMLGlCQUFtQixFQUFuQixTQUFTLG1CQUFHLE9BQU8sS0FBQSxFQUNuQixrQkFBaUIsRUFBakIsVUFBVSxtQkFBRyxJQUFJLEtBQUEsRUFDakIsa0JBQWlCLEVBQWpCLFVBQVUsbUJBQUcsSUFBSSxLQUFBO0lBRWpCLE9BQU8sQ0FDTCxLQUFDLFdBQVcsYUFBQyxPQUFPLEVBQUUsU0FBUyxnQkFDN0IsS0FBQyxLQUFLLGFBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLGdCQUM1RCxLQUFDLHlCQUF5QixjQUFFLEtBQUssR0FBNkIsSUFDeEQsSUFDSSxDQUNmLENBQUM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExhYmVsIGZyb20gJy4uL2xhYmVsL2xhYmVsJztcclxuXHJcbnR5cGUgQmFkZ2VCYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nIHwgJ3Zpb2xldCcgfCAnYmx1ZScgfCAnZ3JheScgfCAnZmlsbEJsdWVHcmFkaWVudCc7XHJcblxyXG5pbnRlcmZhY2UgU3R5bGVkQmFkZ2VQcm9wcyB7XHJcbiAgYmdDb2xvcjogQmFkZ2VCYWNrZ3JvdW5kQ29sb3I7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFkZ2VQcm9wcyB7XHJcbiAgbGFiZWw6IHN0cmluZyB8IFJlYWN0LlJlYWN0Tm9kZTtcclxuICB2YXJpYXRpb24/OiBCYWRnZUJhY2tncm91bmRDb2xvcjtcclxuICBjYXBpdGFsaXplPzogYm9vbGVhbjtcclxuICBsaW5lSGVpZ2h0PzogJ3h4cycgfCAneHMnIHwgJ3NtJztcclxufVxyXG5cclxuY29uc3QgZ2V0QmFkZ2VCZ0NvbG9ycyA9ICh0aGVtZSwgY29sb3I6IEJhZGdlQmFja2dyb3VuZENvbG9yKSA9PlxyXG4gICh7XHJcbiAgICBncmVlbjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsR3JlZW4sXHJcbiAgICB2aW9sZXQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFZpb2xldEdyYWRpZW50LFxyXG4gICAgYmx1ZTogdGhlbWUuY29sb3JTcGVjaWFsQ2FzZS5ibHVlQmFubmVyMixcclxuICAgIGdyYXk6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFF1YXRlcm5hcnksXHJcbiAgICBmaWxsQmx1ZUdyYWRpZW50OiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxCbHVlR3JhZGllbnQsXHJcbiAgfVtjb2xvcl0pO1xyXG5cclxuY29uc3QgU3R5bGVkQmFkZ2UgPSBzdHlsZWQuZGl2PFN0eWxlZEJhZGdlUHJvcHM+KCh7IHRoZW1lLCBiZ0NvbG9yIH0pID0+ICh7XHJcbiAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIHdpZHRoOiAnZml0LWNvbnRlbnQnLFxyXG4gIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRPbkZpbGwsXHJcbiAgYmFja2dyb3VuZDogZ2V0QmFkZ2VCZ0NvbG9ycyh0aGVtZSwgYmdDb2xvciksXHJcbiAgYm9yZGVyUmFkaXVzOiAnNDBweCcsXHJcbiAgbWluSGVpZ2h0OiAnMTdweCcsXHJcbiAgcGFkZGluZzogJzAgNnB4IDFweCA2cHgnLFxyXG59KSk7XHJcblxyXG5jb25zdCBTdHlsZWRMYWJlbENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIGE6IHtcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudE9uRmlsbCxcclxuICB9LFxyXG4gICdhOmhvdmVyJzoge1xyXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFF1YXRlcm5hcnksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJhZGdlID0gKHtcclxuICBsYWJlbCxcclxuICB2YXJpYXRpb24gPSAnZ3JlZW4nLFxyXG4gIGNhcGl0YWxpemUgPSB0cnVlLFxyXG4gIGxpbmVIZWlnaHQgPSAnc20nXHJcbn06IEJhZGdlUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZEJhZGdlIGJnQ29sb3I9e3ZhcmlhdGlvbn0+XHJcbiAgICAgIDxMYWJlbCBzaXplPXsyfSBjYXBpdGFsaXplPXtjYXBpdGFsaXplfSBsaW5lSGVpZ2h0PXtsaW5lSGVpZ2h0fT5cclxuICAgICAgICA8U3R5bGVkTGFiZWxDb250ZW50V3JhcHBlcj57bGFiZWx9PC9TdHlsZWRMYWJlbENvbnRlbnRXcmFwcGVyPlxyXG4gICAgICA8L0xhYmVsPlxyXG4gICAgPC9TdHlsZWRCYWRnZT5cclxuICApO1xyXG59O1xyXG4iXX0=