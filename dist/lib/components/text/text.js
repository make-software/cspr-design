import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import styled from 'styled-components';
var StyledText = styled('span').withConfig({
    shouldForwardProp: function (prop, defaultValidatorFn) {
        return !['loading'].includes(prop) && defaultValidatorFn(prop);
    },
})(function (_a) {
    var theme = _a.theme, loading = _a.loading, _b = _a.variation, variation = _b === void 0 ? 'inherit' : _b, _c = _a.monotype, monotype = _c === void 0 ? false : _c, _d = _a.noWrap, noWrap = _d === void 0 ? false : _d, _e = _a.uppercase, uppercase = _e === void 0 ? false : _e, _f = _a.capitalize, capitalize = _f === void 0 ? false : _f, _g = _a.wordBreak, wordBreak = _g === void 0 ? false : _g;
    return (__assign(__assign(__assign(__assign(__assign({ fontFamily: monotype
            ? theme.typography.fontFamily.mono
            : theme.typography.fontFamily.primary, fontWeight: monotype
            ? theme.typography.fontWeight.regular
            : theme.typography.fontWeight.medium, color: {
            inherit: 'inherit',
            lightGray: theme.styleguideColors.contentTertiary,
            contentViolet: theme.styleguideColors.contentViolet,
            gray: theme.styleguideColors.contentTertiary,
            darkGray: theme.styleguideColors.contentSecondary,
            black: theme.styleguideColors.contentPrimary,
            white: theme.styleguideColors.contentOnFill,
            blue: theme.styleguideColors.contentBlue,
            red: theme.styleguideColors.contentRed,
            green: theme.styleguideColors.contentGreen,
        }[variation], whiteSpace: noWrap ? 'nowrap' : 'initial' }, (loading && {
        display: 'inline-block',
        width: '100%',
    })), (uppercase && {
        textTransform: 'uppercase',
    })), (capitalize && {
        textTransform: 'capitalize',
    })), (wordBreak && {
        wordBreak: 'break-word',
    })), { '-webkit-text-size-adjust': '100%' }));
});
export var Text = React.forwardRef(function Text(_a, ref) {
    var props = __rest(_a, []);
    if (props.loading) {
        return (_jsx(StyledText, __assign({ ref: ref }, props, { children: _jsx("div", { children: "Loading" }) })));
    }
    return _jsx(StyledText, __assign({ ref: ref }, props));
});
export default Text;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90ZXh0L3RleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sTUFBTSxNQUFNLG1CQUFtQixDQUFDO0FBNkJ2QyxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQzNDLGlCQUFpQixFQUFFLFVBQUMsSUFBSSxFQUFFLGtCQUFrQjtRQUMxQyxPQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDO0lBQXZELENBQXVEO0NBQzFELENBQUMsQ0FDQSxVQUFDLEVBU0E7UUFSQyxLQUFLLFdBQUEsRUFDTCxPQUFPLGFBQUEsRUFDUCxpQkFBcUIsRUFBckIsU0FBUyxtQkFBRyxTQUFTLEtBQUEsRUFDckIsZ0JBQWdCLEVBQWhCLFFBQVEsbUJBQUcsS0FBSyxLQUFBLEVBQ2hCLGNBQWMsRUFBZCxNQUFNLG1CQUFHLEtBQUssS0FBQSxFQUNkLGlCQUFpQixFQUFqQixTQUFTLG1CQUFHLEtBQUssS0FBQSxFQUNqQixrQkFBa0IsRUFBbEIsVUFBVSxtQkFBRyxLQUFLLEtBQUEsRUFDbEIsaUJBQWlCLEVBQWpCLFNBQVMsbUJBQUcsS0FBSyxLQUFBO0lBQ2IsT0FBQSxnREFDSixVQUFVLEVBQUUsUUFBUTtZQUNsQixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSTtZQUNsQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUN2QyxVQUFVLEVBQUUsUUFBUTtZQUNsQixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTztZQUNyQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUN0QyxLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsU0FBUztZQUNsQixTQUFTLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7WUFDakQsYUFBYSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1lBQ25ELElBQUksRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtZQUM1QyxRQUFRLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQjtZQUNqRCxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWM7WUFDNUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1lBQzNDLElBQUksRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVztZQUN4QyxHQUFHLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFVBQVU7WUFDdEMsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZO1NBQzNDLENBQUMsU0FBUyxDQUFDLEVBQ1osVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLElBRXRDLENBQUMsT0FBTyxJQUFJO1FBQ2IsT0FBTyxFQUFFLGNBQWM7UUFDdkIsS0FBSyxFQUFFLE1BQU07S0FDZCxDQUFDLEdBRUMsQ0FBQyxTQUFTLElBQUk7UUFDZixhQUFhLEVBQUUsV0FBVztLQUMzQixDQUFDLEdBQ0MsQ0FBQyxVQUFVLElBQUk7UUFDaEIsYUFBYSxFQUFFLFlBQVk7S0FDNUIsQ0FBQyxHQUNDLENBQUMsU0FBUyxJQUFJO1FBQ2YsU0FBUyxFQUFFLFlBQVk7S0FDeEIsQ0FBQyxLQUNGLDBCQUEwQixFQUFFLE1BQU0sSUFDbEM7QUFwQ0ksQ0FvQ0osQ0FDSCxDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQWlCLFNBQVMsSUFBSSxDQUNoRSxFQUF1QixFQUN2QixHQUFHO1FBREUsS0FBSyxjQUFWLEVBQVksQ0FBRjtJQUdWLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtRQUNqQixPQUFPLENBQ0wsS0FBQyxVQUFVLGFBQUMsR0FBRyxFQUFFLEdBQUcsSUFBTSxLQUFLLGNBQzdCLG9DQUFrQixJQUVQLENBQ2QsQ0FBQztLQUNIO0lBRUQsT0FBTyxLQUFDLFVBQVUsYUFBQyxHQUFHLEVBQUUsR0FBRyxJQUFNLEtBQUssRUFBSSxDQUFDO0FBQzdDLENBQUMsQ0FBQyxDQUFDO0FBRUgsZUFBZSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxudHlwZSBSZWYgPSBIVE1MU3BhbkVsZW1lbnQ7XG5cbmV4cG9ydCB0eXBlIFRleHRWYXJpYXRpb24gPVxuICB8ICdpbmhlcml0J1xuICB8ICdncmF5J1xuICB8ICd3aGl0ZSdcbiAgfCAnY29udGVudFZpb2xldCdcbiAgfCAnbGlnaHRHcmF5J1xuICB8ICdkYXJrR3JheSdcbiAgfCAnYmxhY2snXG4gIHwgJ2JsdWUnXG4gIHwgJ3JlZCdcbiAgfCAnZ3JlZW4nO1xuXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dFByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgdmFyaWF0aW9uPzogVGV4dFZhcmlhdGlvbjtcbiAgbW9ub3R5cGU/OiBib29sZWFuO1xuICB1cHBlcmNhc2U/OiBib29sZWFuO1xuICBjYXBpdGFsaXplPzogYm9vbGVhbjtcbiAgbm9XcmFwPzogYm9vbGVhbjtcbiAgbG9hZGluZz86IGJvb2xlYW47XG4gIHdvcmRCcmVhaz86IGJvb2xlYW47XG59XG5cbmNvbnN0IFN0eWxlZFRleHQgPSBzdHlsZWQoJ3NwYW4nKS53aXRoQ29uZmlnKHtcbiAgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wLCBkZWZhdWx0VmFsaWRhdG9yRm4pID0+XG4gICAgIVsnbG9hZGluZyddLmluY2x1ZGVzKHByb3ApICYmIGRlZmF1bHRWYWxpZGF0b3JGbihwcm9wKSxcbn0pPFRleHRQcm9wcz4oXG4gICh7XG4gICAgdGhlbWUsXG4gICAgbG9hZGluZyxcbiAgICB2YXJpYXRpb24gPSAnaW5oZXJpdCcsXG4gICAgbW9ub3R5cGUgPSBmYWxzZSxcbiAgICBub1dyYXAgPSBmYWxzZSxcbiAgICB1cHBlcmNhc2UgPSBmYWxzZSxcbiAgICBjYXBpdGFsaXplID0gZmFsc2UsXG4gICAgd29yZEJyZWFrID0gZmFsc2UsXG4gIH0pID0+ICh7XG4gICAgZm9udEZhbWlseTogbW9ub3R5cGVcbiAgICAgID8gdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5Lm1vbm9cbiAgICAgIDogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5LnByaW1hcnksXG4gICAgZm9udFdlaWdodDogbW9ub3R5cGVcbiAgICAgID8gdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LnJlZ3VsYXJcbiAgICAgIDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Lm1lZGl1bSxcbiAgICBjb2xvcjoge1xuICAgICAgaW5oZXJpdDogJ2luaGVyaXQnLFxuICAgICAgbGlnaHRHcmF5OiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcbiAgICAgIGNvbnRlbnRWaW9sZXQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFZpb2xldCxcbiAgICAgIGdyYXk6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxuICAgICAgZGFya0dyYXk6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcbiAgICAgIGJsYWNrOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxuICAgICAgd2hpdGU6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudE9uRmlsbCxcbiAgICAgIGJsdWU6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXG4gICAgICByZWQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFJlZCxcbiAgICAgIGdyZWVuOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRHcmVlbixcbiAgICB9W3ZhcmlhdGlvbl0sXG4gICAgd2hpdGVTcGFjZTogbm9XcmFwID8gJ25vd3JhcCcgOiAnaW5pdGlhbCcsXG5cbiAgICAuLi4obG9hZGluZyAmJiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSksXG5cbiAgICAuLi4odXBwZXJjYXNlICYmIHtcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIH0pLFxuICAgIC4uLihjYXBpdGFsaXplICYmIHtcbiAgICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcbiAgICB9KSxcbiAgICAuLi4od29yZEJyZWFrICYmIHtcbiAgICAgIHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnLFxuICAgIH0pLFxuICAgICctd2Via2l0LXRleHQtc2l6ZS1hZGp1c3QnOiAnMTAwJScsXG4gIH0pXG4pO1xuXG5leHBvcnQgY29uc3QgVGV4dCA9IFJlYWN0LmZvcndhcmRSZWY8UmVmLCBUZXh0UHJvcHM+KGZ1bmN0aW9uIFRleHQoXG4gIHsgLi4ucHJvcHMgfTogVGV4dFByb3BzLFxuICByZWZcbikge1xuICBpZiAocHJvcHMubG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkVGV4dCByZWY9e3JlZn0gey4uLnByb3BzfT5cbiAgICAgICAgPGRpdj5Mb2FkaW5nPC9kaXY+XG4gICAgICAgIHsvKjxTa2VsZXRvbiAvPiovfVxuICAgICAgPC9TdHlsZWRUZXh0PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gPFN0eWxlZFRleHQgcmVmPXtyZWZ9IHsuLi5wcm9wc30gLz47XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiJdfQ==