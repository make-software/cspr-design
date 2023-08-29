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
        return (_jsx(StyledText, __assign({ ref: ref }, props, { children: _jsx(Skeleton, {}) })));
    }
    return _jsx(StyledText, __assign({ ref: ref }, props));
});
export default Text;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90ZXh0L3RleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sTUFBTSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZDLE9BQU8sUUFBUSxNQUFNLHdCQUF3QixDQUFDO0FBNkI5QyxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQzNDLGlCQUFpQixFQUFFLFVBQUMsSUFBSSxFQUFFLGtCQUFrQjtRQUMxQyxPQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDO0lBQXZELENBQXVEO0NBQzFELENBQUMsQ0FDQSxVQUFDLEVBU0E7UUFSQyxLQUFLLFdBQUEsRUFDTCxPQUFPLGFBQUEsRUFDUCxpQkFBcUIsRUFBckIsU0FBUyxtQkFBRyxTQUFTLEtBQUEsRUFDckIsZ0JBQWdCLEVBQWhCLFFBQVEsbUJBQUcsS0FBSyxLQUFBLEVBQ2hCLGNBQWMsRUFBZCxNQUFNLG1CQUFHLEtBQUssS0FBQSxFQUNkLGlCQUFpQixFQUFqQixTQUFTLG1CQUFHLEtBQUssS0FBQSxFQUNqQixrQkFBa0IsRUFBbEIsVUFBVSxtQkFBRyxLQUFLLEtBQUEsRUFDbEIsaUJBQWlCLEVBQWpCLFNBQVMsbUJBQUcsS0FBSyxLQUFBO0lBQ2IsT0FBQSxnREFDSixVQUFVLEVBQUUsUUFBUTtZQUNsQixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSTtZQUNsQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUN2QyxVQUFVLEVBQUUsUUFBUTtZQUNsQixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTztZQUNyQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUN0QyxLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsU0FBUztZQUNsQixTQUFTLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7WUFDakQsYUFBYSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1lBQ25ELElBQUksRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtZQUM1QyxRQUFRLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQjtZQUNqRCxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWM7WUFDNUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1lBQzNDLElBQUksRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVztZQUN4QyxHQUFHLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFVBQVU7WUFDdEMsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZO1NBQzNDLENBQUMsU0FBUyxDQUFDLEVBQ1osVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLElBRXRDLENBQUMsT0FBTyxJQUFJO1FBQ2IsT0FBTyxFQUFFLGNBQWM7UUFDdkIsS0FBSyxFQUFFLE1BQU07S0FDZCxDQUFDLEdBRUMsQ0FBQyxTQUFTLElBQUk7UUFDZixhQUFhLEVBQUUsV0FBVztLQUMzQixDQUFDLEdBQ0MsQ0FBQyxVQUFVLElBQUk7UUFDaEIsYUFBYSxFQUFFLFlBQVk7S0FDNUIsQ0FBQyxHQUNDLENBQUMsU0FBUyxJQUFJO1FBQ2YsU0FBUyxFQUFFLFlBQVk7S0FDeEIsQ0FBQyxLQUNGLDBCQUEwQixFQUFFLE1BQU0sSUFDbEM7QUFwQ0ksQ0FvQ0osQ0FDSCxDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQWlCLFNBQVMsSUFBSSxDQUNoRSxFQUF1QixFQUN2QixHQUFHO1FBREUsS0FBSyxjQUFWLEVBQVksQ0FBRjtJQUdWLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtRQUNqQixPQUFPLENBQ0wsS0FBQyxVQUFVLGFBQUMsR0FBRyxFQUFFLEdBQUcsSUFBTSxLQUFLLGNBQzdCLEtBQUMsUUFBUSxLQUFHLElBQ0QsQ0FDZCxDQUFDO0tBQ0g7SUFFRCxPQUFPLEtBQUMsVUFBVSxhQUFDLEdBQUcsRUFBRSxHQUFHLElBQU0sS0FBSyxFQUFJLENBQUM7QUFDN0MsQ0FBQyxDQUFDLENBQUM7QUFFSCxlQUFlLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdyZWFjdC1sb2FkaW5nLXNrZWxldG9uJztcblxuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG50eXBlIFJlZiA9IEhUTUxTcGFuRWxlbWVudDtcblxuZXhwb3J0IHR5cGUgVGV4dFZhcmlhdGlvbiA9XG4gIHwgJ2luaGVyaXQnXG4gIHwgJ2dyYXknXG4gIHwgJ3doaXRlJ1xuICB8ICdjb250ZW50VmlvbGV0J1xuICB8ICdsaWdodEdyYXknXG4gIHwgJ2RhcmtHcmF5J1xuICB8ICdibGFjaydcbiAgfCAnYmx1ZSdcbiAgfCAncmVkJ1xuICB8ICdncmVlbic7XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBUZXh0UHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xuICB2YXJpYXRpb24/OiBUZXh0VmFyaWF0aW9uO1xuICBtb25vdHlwZT86IGJvb2xlYW47XG4gIHVwcGVyY2FzZT86IGJvb2xlYW47XG4gIGNhcGl0YWxpemU/OiBib29sZWFuO1xuICBub1dyYXA/OiBib29sZWFuO1xuICBsb2FkaW5nPzogYm9vbGVhbjtcbiAgd29yZEJyZWFrPzogYm9vbGVhbjtcbn1cblxuY29uc3QgU3R5bGVkVGV4dCA9IHN0eWxlZCgnc3BhbicpLndpdGhDb25maWcoe1xuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3AsIGRlZmF1bHRWYWxpZGF0b3JGbikgPT5cbiAgICAhWydsb2FkaW5nJ10uaW5jbHVkZXMocHJvcCkgJiYgZGVmYXVsdFZhbGlkYXRvckZuKHByb3ApLFxufSk8VGV4dFByb3BzPihcbiAgKHtcbiAgICB0aGVtZSxcbiAgICBsb2FkaW5nLFxuICAgIHZhcmlhdGlvbiA9ICdpbmhlcml0JyxcbiAgICBtb25vdHlwZSA9IGZhbHNlLFxuICAgIG5vV3JhcCA9IGZhbHNlLFxuICAgIHVwcGVyY2FzZSA9IGZhbHNlLFxuICAgIGNhcGl0YWxpemUgPSBmYWxzZSxcbiAgICB3b3JkQnJlYWsgPSBmYWxzZSxcbiAgfSkgPT4gKHtcbiAgICBmb250RmFtaWx5OiBtb25vdHlwZVxuICAgICAgPyB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHkubW9ub1xuICAgICAgOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHkucHJpbWFyeSxcbiAgICBmb250V2VpZ2h0OiBtb25vdHlwZVxuICAgICAgPyB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQucmVndWxhclxuICAgICAgOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQubWVkaXVtLFxuICAgIGNvbG9yOiB7XG4gICAgICBpbmhlcml0OiAnaW5oZXJpdCcsXG4gICAgICBsaWdodEdyYXk6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxuICAgICAgY29udGVudFZpb2xldDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VmlvbGV0LFxuICAgICAgZ3JheTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXG4gICAgICBkYXJrR3JheTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxuICAgICAgYmxhY2s6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXG4gICAgICB3aGl0ZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50T25GaWxsLFxuICAgICAgYmx1ZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgICAgIHJlZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UmVkLFxuICAgICAgZ3JlZW46IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEdyZWVuLFxuICAgIH1bdmFyaWF0aW9uXSxcbiAgICB3aGl0ZVNwYWNlOiBub1dyYXAgPyAnbm93cmFwJyA6ICdpbml0aWFsJyxcblxuICAgIC4uLihsb2FkaW5nICYmIHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9KSxcblxuICAgIC4uLih1cHBlcmNhc2UgJiYge1xuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgfSksXG4gICAgLi4uKGNhcGl0YWxpemUgJiYge1xuICAgICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICAgIH0pLFxuICAgIC4uLih3b3JkQnJlYWsgJiYge1xuICAgICAgd29yZEJyZWFrOiAnYnJlYWstd29yZCcsXG4gICAgfSksXG4gICAgJy13ZWJraXQtdGV4dC1zaXplLWFkanVzdCc6ICcxMDAlJyxcbiAgfSlcbik7XG5cbmV4cG9ydCBjb25zdCBUZXh0ID0gUmVhY3QuZm9yd2FyZFJlZjxSZWYsIFRleHRQcm9wcz4oZnVuY3Rpb24gVGV4dChcbiAgeyAuLi5wcm9wcyB9OiBUZXh0UHJvcHMsXG4gIHJlZlxuKSB7XG4gIGlmIChwcm9wcy5sb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRUZXh0IHJlZj17cmVmfSB7Li4ucHJvcHN9PlxuICAgICAgICA8U2tlbGV0b24gLz5cbiAgICAgIDwvU3R5bGVkVGV4dD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIDxTdHlsZWRUZXh0IHJlZj17cmVmfSB7Li4ucHJvcHN9IC8+O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iXX0=