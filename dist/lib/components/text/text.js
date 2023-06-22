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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90ZXh0L3RleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sTUFBTSxNQUFNLG1CQUFtQixDQUFDO0FBNkJ2QyxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQzNDLGlCQUFpQixFQUFFLFVBQUMsSUFBSSxFQUFFLGtCQUFrQjtRQUMxQyxPQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDO0lBQXZELENBQXVEO0NBQzFELENBQUMsQ0FDQSxVQUFDLEVBU0E7UUFSQyxLQUFLLFdBQUEsRUFDTCxPQUFPLGFBQUEsRUFDUCxpQkFBcUIsRUFBckIsU0FBUyxtQkFBRyxTQUFTLEtBQUEsRUFDckIsZ0JBQWdCLEVBQWhCLFFBQVEsbUJBQUcsS0FBSyxLQUFBLEVBQ2hCLGNBQWMsRUFBZCxNQUFNLG1CQUFHLEtBQUssS0FBQSxFQUNkLGlCQUFpQixFQUFqQixTQUFTLG1CQUFHLEtBQUssS0FBQSxFQUNqQixrQkFBa0IsRUFBbEIsVUFBVSxtQkFBRyxLQUFLLEtBQUEsRUFDbEIsaUJBQWlCLEVBQWpCLFNBQVMsbUJBQUcsS0FBSyxLQUFBO0lBQ2IsT0FBQSxnREFDSixVQUFVLEVBQUUsUUFBUTtZQUNsQixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSTtZQUNsQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUN2QyxVQUFVLEVBQUUsUUFBUTtZQUNsQixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTztZQUNyQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUN0QyxLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsU0FBUztZQUNsQixTQUFTLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7WUFDakQsYUFBYSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1lBQ25ELElBQUksRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtZQUM1QyxRQUFRLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQjtZQUNqRCxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWM7WUFDNUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1lBQzNDLElBQUksRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVztZQUN4QyxHQUFHLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFVBQVU7WUFDdEMsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZO1NBQzNDLENBQUMsU0FBUyxDQUFDLEVBQ1osVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLElBRXRDLENBQUMsT0FBTyxJQUFJO1FBQ2IsT0FBTyxFQUFFLGNBQWM7UUFDdkIsS0FBSyxFQUFFLE1BQU07S0FDZCxDQUFDLEdBRUMsQ0FBQyxTQUFTLElBQUk7UUFDZixhQUFhLEVBQUUsV0FBVztLQUMzQixDQUFDLEdBQ0MsQ0FBQyxVQUFVLElBQUk7UUFDaEIsYUFBYSxFQUFFLFlBQVk7S0FDNUIsQ0FBQyxHQUNDLENBQUMsU0FBUyxJQUFJO1FBQ2YsU0FBUyxFQUFFLFlBQVk7S0FDeEIsQ0FBQyxLQUNGLDBCQUEwQixFQUFFLE1BQU0sSUFDbEM7QUFwQ0ksQ0FvQ0osQ0FDSCxDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQWlCLFNBQVMsSUFBSSxDQUNoRSxFQUF1QixFQUN2QixHQUFHO1FBREUsS0FBSyxjQUFWLEVBQVksQ0FBRjtJQUdWLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtRQUNqQixPQUFPLENBQ0wsS0FBQyxVQUFVLGFBQUMsR0FBRyxFQUFFLEdBQUcsSUFBTSxLQUFLLGNBQzdCLG9DQUFrQixJQUVQLENBQ2QsQ0FBQztLQUNIO0lBRUQsT0FBTyxLQUFDLFVBQVUsYUFBQyxHQUFHLEVBQUUsR0FBRyxJQUFNLEtBQUssRUFBSSxDQUFDO0FBQzdDLENBQUMsQ0FBQyxDQUFDO0FBRUgsZUFBZSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcclxuXHJcbnR5cGUgUmVmID0gSFRNTFNwYW5FbGVtZW50O1xyXG5cclxuZXhwb3J0IHR5cGUgVGV4dFZhcmlhdGlvbiA9XHJcbiAgfCAnaW5oZXJpdCdcclxuICB8ICdncmF5J1xyXG4gIHwgJ3doaXRlJ1xyXG4gIHwgJ2NvbnRlbnRWaW9sZXQnXHJcbiAgfCAnbGlnaHRHcmF5J1xyXG4gIHwgJ2RhcmtHcmF5J1xyXG4gIHwgJ2JsYWNrJ1xyXG4gIHwgJ2JsdWUnXHJcbiAgfCAncmVkJ1xyXG4gIHwgJ2dyZWVuJztcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFRleHRQcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XHJcbiAgdmFyaWF0aW9uPzogVGV4dFZhcmlhdGlvbjtcclxuICBtb25vdHlwZT86IGJvb2xlYW47XHJcbiAgdXBwZXJjYXNlPzogYm9vbGVhbjtcclxuICBjYXBpdGFsaXplPzogYm9vbGVhbjtcclxuICBub1dyYXA/OiBib29sZWFuO1xyXG4gIGxvYWRpbmc/OiBib29sZWFuO1xyXG4gIHdvcmRCcmVhaz86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IFN0eWxlZFRleHQgPSBzdHlsZWQoJ3NwYW4nKS53aXRoQ29uZmlnKHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3AsIGRlZmF1bHRWYWxpZGF0b3JGbikgPT5cclxuICAgICFbJ2xvYWRpbmcnXS5pbmNsdWRlcyhwcm9wKSAmJiBkZWZhdWx0VmFsaWRhdG9yRm4ocHJvcCksXHJcbn0pPFRleHRQcm9wcz4oXHJcbiAgKHtcclxuICAgIHRoZW1lLFxyXG4gICAgbG9hZGluZyxcclxuICAgIHZhcmlhdGlvbiA9ICdpbmhlcml0JyxcclxuICAgIG1vbm90eXBlID0gZmFsc2UsXHJcbiAgICBub1dyYXAgPSBmYWxzZSxcclxuICAgIHVwcGVyY2FzZSA9IGZhbHNlLFxyXG4gICAgY2FwaXRhbGl6ZSA9IGZhbHNlLFxyXG4gICAgd29yZEJyZWFrID0gZmFsc2UsXHJcbiAgfSkgPT4gKHtcclxuICAgIGZvbnRGYW1pbHk6IG1vbm90eXBlXHJcbiAgICAgID8gdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5Lm1vbm9cclxuICAgICAgOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHkucHJpbWFyeSxcclxuICAgIGZvbnRXZWlnaHQ6IG1vbm90eXBlXHJcbiAgICAgID8gdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LnJlZ3VsYXJcclxuICAgICAgOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQubWVkaXVtLFxyXG4gICAgY29sb3I6IHtcclxuICAgICAgaW5oZXJpdDogJ2luaGVyaXQnLFxyXG4gICAgICBsaWdodEdyYXk6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxyXG4gICAgICBjb250ZW50VmlvbGV0OiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRWaW9sZXQsXHJcbiAgICAgIGdyYXk6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxyXG4gICAgICBkYXJrR3JheTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxyXG4gICAgICBibGFjazogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcclxuICAgICAgd2hpdGU6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudE9uRmlsbCxcclxuICAgICAgYmx1ZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcclxuICAgICAgcmVkOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRSZWQsXHJcbiAgICAgIGdyZWVuOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRHcmVlbixcclxuICAgIH1bdmFyaWF0aW9uXSxcclxuICAgIHdoaXRlU3BhY2U6IG5vV3JhcCA/ICdub3dyYXAnIDogJ2luaXRpYWwnLFxyXG5cclxuICAgIC4uLihsb2FkaW5nICYmIHtcclxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB9KSxcclxuXHJcbiAgICAuLi4odXBwZXJjYXNlICYmIHtcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICB9KSxcclxuICAgIC4uLihjYXBpdGFsaXplICYmIHtcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxyXG4gICAgfSksXHJcbiAgICAuLi4od29yZEJyZWFrICYmIHtcclxuICAgICAgd29yZEJyZWFrOiAnYnJlYWstd29yZCcsXHJcbiAgICB9KSxcclxuICAgICctd2Via2l0LXRleHQtc2l6ZS1hZGp1c3QnOiAnMTAwJScsXHJcbiAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBUZXh0ID0gUmVhY3QuZm9yd2FyZFJlZjxSZWYsIFRleHRQcm9wcz4oZnVuY3Rpb24gVGV4dChcclxuICB7IC4uLnByb3BzIH06IFRleHRQcm9wcyxcclxuICByZWZcclxuKSB7XHJcbiAgaWYgKHByb3BzLmxvYWRpbmcpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTdHlsZWRUZXh0IHJlZj17cmVmfSB7Li4ucHJvcHN9PlxyXG4gICAgICAgIDxkaXY+TG9hZGluZzwvZGl2PlxyXG4gICAgICAgIHsvKjxTa2VsZXRvbiAvPiovfVxyXG4gICAgICA8L1N0eWxlZFRleHQ+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxTdHlsZWRUZXh0IHJlZj17cmVmfSB7Li4ucHJvcHN9IC8+O1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHQ7XHJcbiJdfQ==