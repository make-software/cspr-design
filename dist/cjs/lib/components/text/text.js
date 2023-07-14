"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledText = (0, styled_components_1.default)('span').withConfig({
    shouldForwardProp: function (prop, defaultValidatorFn) {
        return !['loading'].includes(prop) && defaultValidatorFn(prop);
    },
})(function (_a) {
    var theme = _a.theme, loading = _a.loading, _b = _a.variation, variation = _b === void 0 ? 'inherit' : _b, _c = _a.monotype, monotype = _c === void 0 ? false : _c, _d = _a.noWrap, noWrap = _d === void 0 ? false : _d, _e = _a.uppercase, uppercase = _e === void 0 ? false : _e, _f = _a.capitalize, capitalize = _f === void 0 ? false : _f, _g = _a.wordBreak, wordBreak = _g === void 0 ? false : _g;
    return (tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ fontFamily: monotype
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
exports.Text = react_1.default.forwardRef(function Text(_a, ref) {
    var props = tslib_1.__rest(_a, []);
    if (props.loading) {
        return ((0, jsx_runtime_1.jsx)(StyledText, tslib_1.__assign({ ref: ref }, props, { children: (0, jsx_runtime_1.jsx)("div", { children: "Loading" }) })));
    }
    return (0, jsx_runtime_1.jsx)(StyledText, tslib_1.__assign({ ref: ref }, props));
});
exports.default = exports.Text;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90ZXh0L3RleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLGdGQUF1QztBQTZCdkMsSUFBTSxVQUFVLEdBQUcsSUFBQSwyQkFBTSxFQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMzQyxpQkFBaUIsRUFBRSxVQUFDLElBQUksRUFBRSxrQkFBa0I7UUFDMUMsT0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQztJQUF2RCxDQUF1RDtDQUMxRCxDQUFDLENBQ0EsVUFBQyxFQVNBO1FBUkMsS0FBSyxXQUFBLEVBQ0wsT0FBTyxhQUFBLEVBQ1AsaUJBQXFCLEVBQXJCLFNBQVMsbUJBQUcsU0FBUyxLQUFBLEVBQ3JCLGdCQUFnQixFQUFoQixRQUFRLG1CQUFHLEtBQUssS0FBQSxFQUNoQixjQUFjLEVBQWQsTUFBTSxtQkFBRyxLQUFLLEtBQUEsRUFDZCxpQkFBaUIsRUFBakIsU0FBUyxtQkFBRyxLQUFLLEtBQUEsRUFDakIsa0JBQWtCLEVBQWxCLFVBQVUsbUJBQUcsS0FBSyxLQUFBLEVBQ2xCLGlCQUFpQixFQUFqQixTQUFTLG1CQUFHLEtBQUssS0FBQTtJQUNiLE9BQUEsd0ZBQ0osVUFBVSxFQUFFLFFBQVE7WUFDbEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUk7WUFDbEMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFDdkMsVUFBVSxFQUFFLFFBQVE7WUFDbEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU87WUFDckMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFDdEMsS0FBSyxFQUFFO1lBQ0wsT0FBTyxFQUFFLFNBQVM7WUFDbEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlO1lBQ2pELGFBQWEsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtZQUNuRCxJQUFJLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7WUFDNUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7WUFDakQsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjO1lBQzVDLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtZQUMzQyxJQUFJLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7WUFDeEMsR0FBRyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVO1lBQ3RDLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsWUFBWTtTQUMzQyxDQUFDLFNBQVMsQ0FBQyxFQUNaLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUV0QyxDQUFDLE9BQU8sSUFBSTtRQUNiLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLEtBQUssRUFBRSxNQUFNO0tBQ2QsQ0FBQyxHQUVDLENBQUMsU0FBUyxJQUFJO1FBQ2YsYUFBYSxFQUFFLFdBQVc7S0FDM0IsQ0FBQyxHQUNDLENBQUMsVUFBVSxJQUFJO1FBQ2hCLGFBQWEsRUFBRSxZQUFZO0tBQzVCLENBQUMsR0FDQyxDQUFDLFNBQVMsSUFBSTtRQUNmLFNBQVMsRUFBRSxZQUFZO0tBQ3hCLENBQUMsS0FDRiwwQkFBMEIsRUFBRSxNQUFNLElBQ2xDO0FBcENJLENBb0NKLENBQ0gsQ0FBQztBQUVXLFFBQUEsSUFBSSxHQUFHLGVBQUssQ0FBQyxVQUFVLENBQWlCLFNBQVMsSUFBSSxDQUNoRSxFQUF1QixFQUN2QixHQUFHO1FBREUsS0FBSyxzQkFBVixFQUFZLENBQUY7SUFHVixJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7UUFDakIsT0FBTyxDQUNMLHVCQUFDLFVBQVUscUJBQUMsR0FBRyxFQUFFLEdBQUcsSUFBTSxLQUFLLGNBQzdCLHNEQUFrQixJQUVQLENBQ2QsQ0FBQztLQUNIO0lBRUQsT0FBTyx1QkFBQyxVQUFVLHFCQUFDLEdBQUcsRUFBRSxHQUFHLElBQU0sS0FBSyxFQUFJLENBQUM7QUFDN0MsQ0FBQyxDQUFDLENBQUM7QUFFSCxrQkFBZSxZQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxudHlwZSBSZWYgPSBIVE1MU3BhbkVsZW1lbnQ7XG5cbmV4cG9ydCB0eXBlIFRleHRWYXJpYXRpb24gPVxuICB8ICdpbmhlcml0J1xuICB8ICdncmF5J1xuICB8ICd3aGl0ZSdcbiAgfCAnY29udGVudFZpb2xldCdcbiAgfCAnbGlnaHRHcmF5J1xuICB8ICdkYXJrR3JheSdcbiAgfCAnYmxhY2snXG4gIHwgJ2JsdWUnXG4gIHwgJ3JlZCdcbiAgfCAnZ3JlZW4nO1xuXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dFByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgdmFyaWF0aW9uPzogVGV4dFZhcmlhdGlvbjtcbiAgbW9ub3R5cGU/OiBib29sZWFuO1xuICB1cHBlcmNhc2U/OiBib29sZWFuO1xuICBjYXBpdGFsaXplPzogYm9vbGVhbjtcbiAgbm9XcmFwPzogYm9vbGVhbjtcbiAgbG9hZGluZz86IGJvb2xlYW47XG4gIHdvcmRCcmVhaz86IGJvb2xlYW47XG59XG5cbmNvbnN0IFN0eWxlZFRleHQgPSBzdHlsZWQoJ3NwYW4nKS53aXRoQ29uZmlnKHtcbiAgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wLCBkZWZhdWx0VmFsaWRhdG9yRm4pID0+XG4gICAgIVsnbG9hZGluZyddLmluY2x1ZGVzKHByb3ApICYmIGRlZmF1bHRWYWxpZGF0b3JGbihwcm9wKSxcbn0pPFRleHRQcm9wcz4oXG4gICh7XG4gICAgdGhlbWUsXG4gICAgbG9hZGluZyxcbiAgICB2YXJpYXRpb24gPSAnaW5oZXJpdCcsXG4gICAgbW9ub3R5cGUgPSBmYWxzZSxcbiAgICBub1dyYXAgPSBmYWxzZSxcbiAgICB1cHBlcmNhc2UgPSBmYWxzZSxcbiAgICBjYXBpdGFsaXplID0gZmFsc2UsXG4gICAgd29yZEJyZWFrID0gZmFsc2UsXG4gIH0pID0+ICh7XG4gICAgZm9udEZhbWlseTogbW9ub3R5cGVcbiAgICAgID8gdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5Lm1vbm9cbiAgICAgIDogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5LnByaW1hcnksXG4gICAgZm9udFdlaWdodDogbW9ub3R5cGVcbiAgICAgID8gdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LnJlZ3VsYXJcbiAgICAgIDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Lm1lZGl1bSxcbiAgICBjb2xvcjoge1xuICAgICAgaW5oZXJpdDogJ2luaGVyaXQnLFxuICAgICAgbGlnaHRHcmF5OiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcbiAgICAgIGNvbnRlbnRWaW9sZXQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFZpb2xldCxcbiAgICAgIGdyYXk6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxuICAgICAgZGFya0dyYXk6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcbiAgICAgIGJsYWNrOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxuICAgICAgd2hpdGU6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudE9uRmlsbCxcbiAgICAgIGJsdWU6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXG4gICAgICByZWQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFJlZCxcbiAgICAgIGdyZWVuOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRHcmVlbixcbiAgICB9W3ZhcmlhdGlvbl0sXG4gICAgd2hpdGVTcGFjZTogbm9XcmFwID8gJ25vd3JhcCcgOiAnaW5pdGlhbCcsXG5cbiAgICAuLi4obG9hZGluZyAmJiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSksXG5cbiAgICAuLi4odXBwZXJjYXNlICYmIHtcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIH0pLFxuICAgIC4uLihjYXBpdGFsaXplICYmIHtcbiAgICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcbiAgICB9KSxcbiAgICAuLi4od29yZEJyZWFrICYmIHtcbiAgICAgIHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnLFxuICAgIH0pLFxuICAgICctd2Via2l0LXRleHQtc2l6ZS1hZGp1c3QnOiAnMTAwJScsXG4gIH0pXG4pO1xuXG5leHBvcnQgY29uc3QgVGV4dCA9IFJlYWN0LmZvcndhcmRSZWY8UmVmLCBUZXh0UHJvcHM+KGZ1bmN0aW9uIFRleHQoXG4gIHsgLi4ucHJvcHMgfTogVGV4dFByb3BzLFxuICByZWZcbikge1xuICBpZiAocHJvcHMubG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkVGV4dCByZWY9e3JlZn0gey4uLnByb3BzfT5cbiAgICAgICAgPGRpdj5Mb2FkaW5nPC9kaXY+XG4gICAgICAgIHsvKjxTa2VsZXRvbiAvPiovfVxuICAgICAgPC9TdHlsZWRUZXh0PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gPFN0eWxlZFRleHQgcmVmPXtyZWZ9IHsuLi5wcm9wc30gLz47XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiJdfQ==