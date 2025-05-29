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
    var _b = _a.tag, tag = _b === void 0 ? 'span' : _b, props = __rest(_a, ["tag"]);
    var validTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span'].includes(tag) ? tag : 'span';
    if (props.loading) {
        return (_jsx(StyledText, __assign({ ref: ref }, props, { as: validTag }, { children: _jsx(Skeleton, {}) })));
    }
    return _jsx(StyledText, __assign({ ref: ref }, props, { as: validTag }));
});
export default Text;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90ZXh0L3RleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sTUFBTSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZDLE9BQU8sUUFBUSxNQUFNLHdCQUF3QixDQUFDO0FBK0I5QyxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQzNDLGlCQUFpQixFQUFFLFVBQUMsSUFBSSxFQUFFLGtCQUFrQjtRQUMxQyxPQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDO0lBQXZELENBQXVEO0NBQzFELENBQUMsQ0FDQSxVQUFDLEVBVUE7UUFUQyxLQUFLLFdBQUEsRUFDTCxPQUFPLGFBQUEsRUFDUCxpQkFBcUIsRUFBckIsU0FBUyxtQkFBRyxTQUFTLEtBQUEsRUFDckIsZ0JBQWdCLEVBQWhCLFFBQVEsbUJBQUcsS0FBSyxLQUFBLEVBQ2hCLGNBQWMsRUFBZCxNQUFNLG1CQUFHLEtBQUssS0FBQSxFQUNkLGlCQUFpQixFQUFqQixTQUFTLG1CQUFHLEtBQUssS0FBQSxFQUNqQixrQkFBa0IsRUFBbEIsVUFBVSxtQkFBRyxLQUFLLEtBQUEsRUFDbEIsNkJBQTZCLEVBQTdCLHFCQUFxQixtQkFBRyxLQUFLLEtBQUEsRUFDN0IsaUJBQWlCLEVBQWpCLFNBQVMsbUJBQUcsS0FBSyxLQUFBO0lBQ2IsT0FBQSx5REFDSixVQUFVLEVBQUUsUUFBUTtZQUNsQixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSTtZQUNsQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUN2QyxVQUFVLEVBQUUsUUFBUTtZQUNsQixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTztZQUNyQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUN0QyxLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsU0FBUztZQUNsQixTQUFTLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7WUFDakQsYUFBYSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1lBQ25ELElBQUksRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtZQUM1QyxRQUFRLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQjtZQUNqRCxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWM7WUFDNUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1lBQzNDLElBQUksRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVztZQUN4QyxHQUFHLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFVBQVU7WUFDdEMsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZO1NBQzNDLENBQUMsU0FBUyxDQUFDLEVBQ1osVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLElBRXRDLENBQUMsT0FBTyxJQUFJO1FBQ2IsT0FBTyxFQUFFLGNBQWM7UUFDdkIsS0FBSyxFQUFFLE1BQU07S0FDZCxDQUFDLEdBRUMsQ0FBQyxTQUFTLElBQUk7UUFDZixhQUFhLEVBQUUsV0FBVztLQUMzQixDQUFDLEdBQ0MsQ0FBQyxVQUFVLElBQUk7UUFDaEIsYUFBYSxFQUFFLFlBQVk7S0FDNUIsQ0FBQyxHQUNDLENBQUMscUJBQXFCLElBQUk7UUFDM0IsZ0JBQWdCLEVBQUU7WUFDaEIsYUFBYSxFQUFFLFlBQVk7U0FDNUI7S0FDRixDQUFDLEdBQ0MsQ0FBQyxTQUFTLElBQUk7UUFDZixTQUFTLEVBQUUsWUFBWTtLQUN4QixDQUFDLEtBQ0YsMEJBQTBCLEVBQUUsTUFBTSxJQUNsQztBQXpDSSxDQXlDSixDQUNILENBQUM7QUFFRixNQUFNLENBQUMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBaUIsU0FBUyxJQUFJLENBQ2hFLEVBQXFDLEVBQ3JDLEdBQUc7SUFERCxJQUFBLFdBQVksRUFBWixHQUFHLG1CQUFHLE1BQU0sS0FBQSxFQUFLLEtBQUssY0FBeEIsT0FBMEIsQ0FBRjtJQUd4QixJQUFNLFFBQVEsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDM0YsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO1FBQ2pCLE9BQU8sQ0FDTCxLQUFDLFVBQVUsYUFBQyxHQUFHLEVBQUUsR0FBRyxJQUFNLEtBQUssSUFBRSxFQUFFLEVBQUUsUUFBUSxnQkFDM0MsS0FBQyxRQUFRLEtBQUcsSUFDRCxDQUNkLENBQUM7S0FDSDtJQUVELE9BQU8sS0FBQyxVQUFVLGFBQUMsR0FBRyxFQUFFLEdBQUcsSUFBTSxLQUFLLElBQUUsRUFBRSxFQUFFLFFBQVEsSUFBRyxDQUFDO0FBQzFELENBQUMsQ0FBQyxDQUFDO0FBRUgsZUFBZSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgU2tlbGV0b24gZnJvbSAncmVhY3QtbG9hZGluZy1za2VsZXRvbic7XG5cbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxudHlwZSBSZWYgPSBIVE1MU3BhbkVsZW1lbnQ7XG5cbmV4cG9ydCB0eXBlIFRleHRWYXJpYXRpb24gPVxuICB8ICdpbmhlcml0J1xuICB8ICdncmF5J1xuICB8ICd3aGl0ZSdcbiAgfCAnY29udGVudFZpb2xldCdcbiAgfCAnbGlnaHRHcmF5J1xuICB8ICdkYXJrR3JheSdcbiAgfCAnYmxhY2snXG4gIHwgJ2JsdWUnXG4gIHwgJ3JlZCdcbiAgfCAnZ3JlZW4nO1xuXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dFByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgdmFyaWF0aW9uPzogVGV4dFZhcmlhdGlvbjtcbiAgbW9ub3R5cGU/OiBib29sZWFuO1xuICB1cHBlcmNhc2U/OiBib29sZWFuO1xuICBjYXBpdGFsaXplPzogYm9vbGVhbjtcbiAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyPzogYm9vbGVhbjtcbiAgbm9XcmFwPzogYm9vbGVhbjtcbiAgbG9hZGluZz86IGJvb2xlYW47XG4gIHdvcmRCcmVhaz86IGJvb2xlYW47XG4gIHRhZz86ICdoMScgfCAnaDInIHwgJ2gzJyB8ICdoNCcgfCAnaDUnIHwgJ2g2JyB8ICdzcGFuJztcbn1cblxuY29uc3QgU3R5bGVkVGV4dCA9IHN0eWxlZCgnc3BhbicpLndpdGhDb25maWcoe1xuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3AsIGRlZmF1bHRWYWxpZGF0b3JGbikgPT5cbiAgICAhWydsb2FkaW5nJ10uaW5jbHVkZXMocHJvcCkgJiYgZGVmYXVsdFZhbGlkYXRvckZuKHByb3ApLFxufSk8VGV4dFByb3BzPihcbiAgKHtcbiAgICB0aGVtZSxcbiAgICBsb2FkaW5nLFxuICAgIHZhcmlhdGlvbiA9ICdpbmhlcml0JyxcbiAgICBtb25vdHlwZSA9IGZhbHNlLFxuICAgIG5vV3JhcCA9IGZhbHNlLFxuICAgIHVwcGVyY2FzZSA9IGZhbHNlLFxuICAgIGNhcGl0YWxpemUgPSBmYWxzZSxcbiAgICBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSBmYWxzZSxcbiAgICB3b3JkQnJlYWsgPSBmYWxzZSxcbiAgfSkgPT4gKHtcbiAgICBmb250RmFtaWx5OiBtb25vdHlwZVxuICAgICAgPyB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHkubW9ub1xuICAgICAgOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHkucHJpbWFyeSxcbiAgICBmb250V2VpZ2h0OiBtb25vdHlwZVxuICAgICAgPyB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQucmVndWxhclxuICAgICAgOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQubWVkaXVtLFxuICAgIGNvbG9yOiB7XG4gICAgICBpbmhlcml0OiAnaW5oZXJpdCcsXG4gICAgICBsaWdodEdyYXk6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxuICAgICAgY29udGVudFZpb2xldDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VmlvbGV0LFxuICAgICAgZ3JheTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXG4gICAgICBkYXJrR3JheTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxuICAgICAgYmxhY2s6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXG4gICAgICB3aGl0ZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50T25GaWxsLFxuICAgICAgYmx1ZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgICAgIHJlZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UmVkLFxuICAgICAgZ3JlZW46IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEdyZWVuLFxuICAgIH1bdmFyaWF0aW9uXSxcbiAgICB3aGl0ZVNwYWNlOiBub1dyYXAgPyAnbm93cmFwJyA6ICdpbml0aWFsJyxcblxuICAgIC4uLihsb2FkaW5nICYmIHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9KSxcblxuICAgIC4uLih1cHBlcmNhc2UgJiYge1xuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgfSksXG4gICAgLi4uKGNhcGl0YWxpemUgJiYge1xuICAgICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICAgIH0pLFxuICAgIC4uLihjYXBpdGFsaXplRmlyc3RMZXR0ZXIgJiYge1xuICAgICAgJyY6Zmlyc3QtbGV0dGVyJzoge1xuICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIC4uLih3b3JkQnJlYWsgJiYge1xuICAgICAgd29yZEJyZWFrOiAnYnJlYWstd29yZCcsXG4gICAgfSksXG4gICAgJy13ZWJraXQtdGV4dC1zaXplLWFkanVzdCc6ICcxMDAlJyxcbiAgfSlcbik7XG5cbmV4cG9ydCBjb25zdCBUZXh0ID0gUmVhY3QuZm9yd2FyZFJlZjxSZWYsIFRleHRQcm9wcz4oZnVuY3Rpb24gVGV4dChcbiAgeyB0YWcgPSAnc3BhbicsIC4uLnByb3BzIH06IFRleHRQcm9wcyxcbiAgcmVmXG4pIHtcbiAgY29uc3QgdmFsaWRUYWcgPSBbJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ3NwYW4nXS5pbmNsdWRlcyh0YWcpID8gdGFnIDogJ3NwYW4nO1xuICBpZiAocHJvcHMubG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkVGV4dCByZWY9e3JlZn0gey4uLnByb3BzfSBhcz17dmFsaWRUYWd9PlxuICAgICAgICA8U2tlbGV0b24gLz5cbiAgICAgIDwvU3R5bGVkVGV4dD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIDxTdHlsZWRUZXh0IHJlZj17cmVmfSB7Li4ucHJvcHN9IGFzPXt2YWxpZFRhZ30vPjtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0O1xuIl19