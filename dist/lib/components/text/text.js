import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
var StyledText = styled('span').withConfig({
    shouldForwardProp: function (prop, defaultValidatorFn) {
        return !['loading'].includes(prop) && defaultValidatorFn(prop);
    },
})(function (_a) {
    var theme = _a.theme, loading = _a.loading, _b = _a.variation, variation = _b === void 0 ? 'inherit' : _b, _c = _a.monotype, monotype = _c === void 0 ? false : _c, _d = _a.noWrap, noWrap = _d === void 0 ? false : _d, _e = _a.uppercase, uppercase = _e === void 0 ? false : _e, _f = _a.capitalize, capitalize = _f === void 0 ? false : _f, _g = _a.capitalizeFirstLetter, capitalizeFirstLetter = _g === void 0 ? false : _g, _h = _a.wordBreak, wordBreak = _h === void 0 ? false : _h;
    return (__assign(__assign(__assign(__assign(__assign(__assign({ fontFamily: monotype
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
    })), (capitalizeFirstLetter && {
        '&:first-letter': {
            textTransform: 'capitalize',
        },
    })), (wordBreak && {
        wordBreak: 'break-word',
    })), { '-webkit-text-size-adjust': '100%' }));
});
export var Text = React.forwardRef(function Text(_a, ref) {
    var props = __rest(_a, []);
    if (props.loading) {
        return (_jsx(StyledText, __assign({ ref: ref }, props, { children: _jsx(Skeleton, {}) })));
    }
    return _jsx(StyledText, __assign({ ref: ref }, props));
});
export default Text;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90ZXh0L3RleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sTUFBTSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZDLE9BQU8sUUFBUSxNQUFNLHdCQUF3QixDQUFDO0FBOEI5QyxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQzNDLGlCQUFpQixFQUFFLFVBQUMsSUFBSSxFQUFFLGtCQUFrQjtRQUMxQyxPQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDO0lBQXZELENBQXVEO0NBQzFELENBQUMsQ0FDQSxVQUFDLEVBVUE7UUFUQyxLQUFLLFdBQUEsRUFDTCxPQUFPLGFBQUEsRUFDUCxpQkFBcUIsRUFBckIsU0FBUyxtQkFBRyxTQUFTLEtBQUEsRUFDckIsZ0JBQWdCLEVBQWhCLFFBQVEsbUJBQUcsS0FBSyxLQUFBLEVBQ2hCLGNBQWMsRUFBZCxNQUFNLG1CQUFHLEtBQUssS0FBQSxFQUNkLGlCQUFpQixFQUFqQixTQUFTLG1CQUFHLEtBQUssS0FBQSxFQUNqQixrQkFBa0IsRUFBbEIsVUFBVSxtQkFBRyxLQUFLLEtBQUEsRUFDbEIsNkJBQTZCLEVBQTdCLHFCQUFxQixtQkFBRyxLQUFLLEtBQUEsRUFDN0IsaUJBQWlCLEVBQWpCLFNBQVMsbUJBQUcsS0FBSyxLQUFBO0lBQ2IsT0FBQSx5REFDSixVQUFVLEVBQUUsUUFBUTtZQUNsQixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSTtZQUNsQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUN2QyxVQUFVLEVBQUUsUUFBUTtZQUNsQixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTztZQUNyQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUN0QyxLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsU0FBUztZQUNsQixTQUFTLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7WUFDakQsYUFBYSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1lBQ25ELElBQUksRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtZQUM1QyxRQUFRLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQjtZQUNqRCxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWM7WUFDNUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1lBQzNDLElBQUksRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVztZQUN4QyxHQUFHLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFVBQVU7WUFDdEMsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZO1NBQzNDLENBQUMsU0FBUyxDQUFDLEVBQ1osVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLElBRXRDLENBQUMsT0FBTyxJQUFJO1FBQ2IsT0FBTyxFQUFFLGNBQWM7UUFDdkIsS0FBSyxFQUFFLE1BQU07S0FDZCxDQUFDLEdBRUMsQ0FBQyxTQUFTLElBQUk7UUFDZixhQUFhLEVBQUUsV0FBVztLQUMzQixDQUFDLEdBQ0MsQ0FBQyxVQUFVLElBQUk7UUFDaEIsYUFBYSxFQUFFLFlBQVk7S0FDNUIsQ0FBQyxHQUNDLENBQUMscUJBQXFCLElBQUk7UUFDM0IsZ0JBQWdCLEVBQUU7WUFDaEIsYUFBYSxFQUFFLFlBQVk7U0FDNUI7S0FDRixDQUFDLEdBQ0MsQ0FBQyxTQUFTLElBQUk7UUFDZixTQUFTLEVBQUUsWUFBWTtLQUN4QixDQUFDLEtBQ0YsMEJBQTBCLEVBQUUsTUFBTSxJQUNsQztBQXpDSSxDQXlDSixDQUNILENBQUM7QUFFRixNQUFNLENBQUMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBaUIsU0FBUyxJQUFJLENBQ2hFLEVBQXVCLEVBQ3ZCLEdBQUc7UUFERSxLQUFLLGNBQVYsRUFBWSxDQUFGO0lBR1YsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO1FBQ2pCLE9BQU8sQ0FDTCxLQUFDLFVBQVUsYUFBQyxHQUFHLEVBQUUsR0FBRyxJQUFNLEtBQUssY0FDN0IsS0FBQyxRQUFRLEtBQUcsSUFDRCxDQUNkLENBQUM7S0FDSDtJQUVELE9BQU8sS0FBQyxVQUFVLGFBQUMsR0FBRyxFQUFFLEdBQUcsSUFBTSxLQUFLLEVBQUksQ0FBQztBQUM3QyxDQUFDLENBQUMsQ0FBQztBQUVILGVBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFNrZWxldG9uIGZyb20gJ3JlYWN0LWxvYWRpbmctc2tlbGV0b24nO1xuXG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbnR5cGUgUmVmID0gSFRNTFNwYW5FbGVtZW50O1xuXG5leHBvcnQgdHlwZSBUZXh0VmFyaWF0aW9uID1cbiAgfCAnaW5oZXJpdCdcbiAgfCAnZ3JheSdcbiAgfCAnd2hpdGUnXG4gIHwgJ2NvbnRlbnRWaW9sZXQnXG4gIHwgJ2xpZ2h0R3JheSdcbiAgfCAnZGFya0dyYXknXG4gIHwgJ2JsYWNrJ1xuICB8ICdibHVlJ1xuICB8ICdyZWQnXG4gIHwgJ2dyZWVuJztcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgaW50ZXJmYWNlIFRleHRQcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XG4gIHZhcmlhdGlvbj86IFRleHRWYXJpYXRpb247XG4gIG1vbm90eXBlPzogYm9vbGVhbjtcbiAgdXBwZXJjYXNlPzogYm9vbGVhbjtcbiAgY2FwaXRhbGl6ZT86IGJvb2xlYW47XG4gIGNhcGl0YWxpemVGaXJzdExldHRlcj86IGJvb2xlYW47XG4gIG5vV3JhcD86IGJvb2xlYW47XG4gIGxvYWRpbmc/OiBib29sZWFuO1xuICB3b3JkQnJlYWs/OiBib29sZWFuO1xufVxuXG5jb25zdCBTdHlsZWRUZXh0ID0gc3R5bGVkKCdzcGFuJykud2l0aENvbmZpZyh7XG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCwgZGVmYXVsdFZhbGlkYXRvckZuKSA9PlxuICAgICFbJ2xvYWRpbmcnXS5pbmNsdWRlcyhwcm9wKSAmJiBkZWZhdWx0VmFsaWRhdG9yRm4ocHJvcCksXG59KTxUZXh0UHJvcHM+KFxuICAoe1xuICAgIHRoZW1lLFxuICAgIGxvYWRpbmcsXG4gICAgdmFyaWF0aW9uID0gJ2luaGVyaXQnLFxuICAgIG1vbm90eXBlID0gZmFsc2UsXG4gICAgbm9XcmFwID0gZmFsc2UsXG4gICAgdXBwZXJjYXNlID0gZmFsc2UsXG4gICAgY2FwaXRhbGl6ZSA9IGZhbHNlLFxuICAgIGNhcGl0YWxpemVGaXJzdExldHRlciA9IGZhbHNlLFxuICAgIHdvcmRCcmVhayA9IGZhbHNlLFxuICB9KSA9PiAoe1xuICAgIGZvbnRGYW1pbHk6IG1vbm90eXBlXG4gICAgICA/IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseS5tb25vXG4gICAgICA6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseS5wcmltYXJ5LFxuICAgIGZvbnRXZWlnaHQ6IG1vbm90eXBlXG4gICAgICA/IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5yZWd1bGFyXG4gICAgICA6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5tZWRpdW0sXG4gICAgY29sb3I6IHtcbiAgICAgIGluaGVyaXQ6ICdpbmhlcml0JyxcbiAgICAgIGxpZ2h0R3JheTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXG4gICAgICBjb250ZW50VmlvbGV0OiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRWaW9sZXQsXG4gICAgICBncmF5OiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcbiAgICAgIGRhcmtHcmF5OiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG4gICAgICBibGFjazogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcbiAgICAgIHdoaXRlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRPbkZpbGwsXG4gICAgICBibHVlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICAgICAgcmVkOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRSZWQsXG4gICAgICBncmVlbjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50R3JlZW4sXG4gICAgfVt2YXJpYXRpb25dLFxuICAgIHdoaXRlU3BhY2U6IG5vV3JhcCA/ICdub3dyYXAnIDogJ2luaXRpYWwnLFxuXG4gICAgLi4uKGxvYWRpbmcgJiYge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH0pLFxuXG4gICAgLi4uKHVwcGVyY2FzZSAmJiB7XG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICB9KSxcbiAgICAuLi4oY2FwaXRhbGl6ZSAmJiB7XG4gICAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXG4gICAgfSksXG4gICAgLi4uKGNhcGl0YWxpemVGaXJzdExldHRlciAmJiB7XG4gICAgICAnJjpmaXJzdC1sZXR0ZXInOiB7XG4gICAgICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgLi4uKHdvcmRCcmVhayAmJiB7XG4gICAgICB3b3JkQnJlYWs6ICdicmVhay13b3JkJyxcbiAgICB9KSxcbiAgICAnLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0JzogJzEwMCUnLFxuICB9KVxuKTtcblxuZXhwb3J0IGNvbnN0IFRleHQgPSBSZWFjdC5mb3J3YXJkUmVmPFJlZiwgVGV4dFByb3BzPihmdW5jdGlvbiBUZXh0KFxuICB7IC4uLnByb3BzIH06IFRleHRQcm9wcyxcbiAgcmVmXG4pIHtcbiAgaWYgKHByb3BzLmxvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZFRleHQgcmVmPXtyZWZ9IHsuLi5wcm9wc30+XG4gICAgICAgIDxTa2VsZXRvbiAvPlxuICAgICAgPC9TdHlsZWRUZXh0PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gPFN0eWxlZFRleHQgcmVmPXtyZWZ9IHsuLi5wcm9wc30gLz47XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiJdfQ==