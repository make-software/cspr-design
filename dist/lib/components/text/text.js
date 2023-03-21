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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90ZXh0L3RleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxLQUF3QixNQUFNLE9BQU8sQ0FBQztBQUM3QyxPQUFPLE1BQU0sTUFBTSxtQkFBbUIsQ0FBQztBQTZCdkMsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMzQyxpQkFBaUIsRUFBRSxVQUFDLElBQUksRUFBRSxrQkFBa0I7UUFDMUMsT0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQztJQUF2RCxDQUF1RDtDQUMxRCxDQUFDLENBQ0EsVUFBQyxFQVNBO1FBUkMsS0FBSyxXQUFBLEVBQ0wsT0FBTyxhQUFBLEVBQ1AsaUJBQXFCLEVBQXJCLFNBQVMsbUJBQUcsU0FBUyxLQUFBLEVBQ3JCLGdCQUFnQixFQUFoQixRQUFRLG1CQUFHLEtBQUssS0FBQSxFQUNoQixjQUFjLEVBQWQsTUFBTSxtQkFBRyxLQUFLLEtBQUEsRUFDZCxpQkFBaUIsRUFBakIsU0FBUyxtQkFBRyxLQUFLLEtBQUEsRUFDakIsa0JBQWtCLEVBQWxCLFVBQVUsbUJBQUcsS0FBSyxLQUFBLEVBQ2xCLGlCQUFpQixFQUFqQixTQUFTLG1CQUFHLEtBQUssS0FBQTtJQUNiLE9BQUEsZ0RBQ0osVUFBVSxFQUFFLFFBQVE7WUFDbEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUk7WUFDbEMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFDdkMsVUFBVSxFQUFFLFFBQVE7WUFDbEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU87WUFDckMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFDdEMsS0FBSyxFQUFFO1lBQ0wsT0FBTyxFQUFFLFNBQVM7WUFDbEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlO1lBQ2pELGFBQWEsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtZQUNuRCxJQUFJLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7WUFDNUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7WUFDakQsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjO1lBQzVDLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtZQUMzQyxJQUFJLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7WUFDeEMsR0FBRyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVO1lBQ3RDLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsWUFBWTtTQUMzQyxDQUFDLFNBQVMsQ0FBQyxFQUNaLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUV0QyxDQUFDLE9BQU8sSUFBSTtRQUNiLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLEtBQUssRUFBRSxNQUFNO0tBQ2QsQ0FBQyxHQUVDLENBQUMsU0FBUyxJQUFJO1FBQ2YsYUFBYSxFQUFFLFdBQVc7S0FDM0IsQ0FBQyxHQUNDLENBQUMsVUFBVSxJQUFJO1FBQ2hCLGFBQWEsRUFBRSxZQUFZO0tBQzVCLENBQUMsR0FDQyxDQUFDLFNBQVMsSUFBSTtRQUNmLFNBQVMsRUFBRSxZQUFZO0tBQ3hCLENBQUMsS0FDRiwwQkFBMEIsRUFBRSxNQUFNLElBQ2xDO0FBcENJLENBb0NKLENBQ0gsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFpQixTQUFTLElBQUksQ0FDaEUsRUFBdUIsRUFDdkIsR0FBRztRQURFLEtBQUssY0FBVixFQUFZLENBQUY7SUFHVixJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7UUFDakIsT0FBTyxDQUNMLEtBQUMsVUFBVSxhQUFDLEdBQUcsRUFBRSxHQUFHLElBQU0sS0FBSyxjQUM3QixvQ0FBa0IsSUFFUCxDQUNkLENBQUM7S0FDSDtJQUVELE9BQU8sS0FBQyxVQUFVLGFBQUMsR0FBRyxFQUFFLEdBQUcsSUFBTSxLQUFLLEVBQUksQ0FBQztBQUM3QyxDQUFDLENBQUMsQ0FBQztBQUVILGVBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENTU1Byb3BlcnRpZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG50eXBlIFJlZiA9IEhUTUxTcGFuRWxlbWVudDtcblxuZXhwb3J0IHR5cGUgVGV4dFZhcmlhdGlvbiA9XG4gIHwgJ2luaGVyaXQnXG4gIHwgJ2dyYXknXG4gIHwgJ3doaXRlJ1xuICB8ICdjb250ZW50VmlvbGV0J1xuICB8ICdsaWdodEdyYXknXG4gIHwgJ2RhcmtHcmF5J1xuICB8ICdibGFjaydcbiAgfCAnYmx1ZSdcbiAgfCAncmVkJ1xuICB8ICdncmVlbic7XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBUZXh0UHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xuICB2YXJpYXRpb24/OiBUZXh0VmFyaWF0aW9uO1xuICBtb25vdHlwZT86IGJvb2xlYW47XG4gIHVwcGVyY2FzZT86IGJvb2xlYW47XG4gIGNhcGl0YWxpemU/OiBib29sZWFuO1xuICBub1dyYXA/OiBib29sZWFuO1xuICBsb2FkaW5nPzogYm9vbGVhbjtcbiAgd29yZEJyZWFrPzogYm9vbGVhbjtcbn1cblxuY29uc3QgU3R5bGVkVGV4dCA9IHN0eWxlZCgnc3BhbicpLndpdGhDb25maWcoe1xuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3AsIGRlZmF1bHRWYWxpZGF0b3JGbikgPT5cbiAgICAhWydsb2FkaW5nJ10uaW5jbHVkZXMocHJvcCkgJiYgZGVmYXVsdFZhbGlkYXRvckZuKHByb3ApLFxufSk8VGV4dFByb3BzPihcbiAgKHtcbiAgICB0aGVtZSxcbiAgICBsb2FkaW5nLFxuICAgIHZhcmlhdGlvbiA9ICdpbmhlcml0JyxcbiAgICBtb25vdHlwZSA9IGZhbHNlLFxuICAgIG5vV3JhcCA9IGZhbHNlLFxuICAgIHVwcGVyY2FzZSA9IGZhbHNlLFxuICAgIGNhcGl0YWxpemUgPSBmYWxzZSxcbiAgICB3b3JkQnJlYWsgPSBmYWxzZSxcbiAgfSkgPT4gKHtcbiAgICBmb250RmFtaWx5OiBtb25vdHlwZVxuICAgICAgPyB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHkubW9ub1xuICAgICAgOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHkucHJpbWFyeSxcbiAgICBmb250V2VpZ2h0OiBtb25vdHlwZVxuICAgICAgPyB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQucmVndWxhclxuICAgICAgOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQubWVkaXVtLFxuICAgIGNvbG9yOiB7XG4gICAgICBpbmhlcml0OiAnaW5oZXJpdCcsXG4gICAgICBsaWdodEdyYXk6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxuICAgICAgY29udGVudFZpb2xldDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VmlvbGV0LFxuICAgICAgZ3JheTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXG4gICAgICBkYXJrR3JheTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxuICAgICAgYmxhY2s6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXG4gICAgICB3aGl0ZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50T25GaWxsLFxuICAgICAgYmx1ZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgICAgIHJlZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UmVkLFxuICAgICAgZ3JlZW46IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEdyZWVuLFxuICAgIH1bdmFyaWF0aW9uXSxcbiAgICB3aGl0ZVNwYWNlOiBub1dyYXAgPyAnbm93cmFwJyA6ICdpbml0aWFsJyxcblxuICAgIC4uLihsb2FkaW5nICYmIHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9KSxcblxuICAgIC4uLih1cHBlcmNhc2UgJiYge1xuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgfSksXG4gICAgLi4uKGNhcGl0YWxpemUgJiYge1xuICAgICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICAgIH0pLFxuICAgIC4uLih3b3JkQnJlYWsgJiYge1xuICAgICAgd29yZEJyZWFrOiAnYnJlYWstd29yZCcsXG4gICAgfSksXG4gICAgJy13ZWJraXQtdGV4dC1zaXplLWFkanVzdCc6ICcxMDAlJyxcbiAgfSlcbik7XG5cbmV4cG9ydCBjb25zdCBUZXh0ID0gUmVhY3QuZm9yd2FyZFJlZjxSZWYsIFRleHRQcm9wcz4oZnVuY3Rpb24gVGV4dChcbiAgeyAuLi5wcm9wcyB9OiBUZXh0UHJvcHMsXG4gIHJlZlxuKSB7XG4gIGlmIChwcm9wcy5sb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRUZXh0IHJlZj17cmVmfSB7Li4ucHJvcHN9PlxuICAgICAgICA8ZGl2PkxvYWRpbmc8L2Rpdj5cbiAgICAgICAgey8qPFNrZWxldG9uIC8+Ki99XG4gICAgICA8L1N0eWxlZFRleHQ+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiA8U3R5bGVkVGV4dCByZWY9e3JlZn0gey4uLnByb3BzfSAvPjtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0O1xuIl19