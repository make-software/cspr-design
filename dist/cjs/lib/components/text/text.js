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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90ZXh0L3RleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTZDO0FBQzdDLGdGQUF1QztBQTZCdkMsSUFBTSxVQUFVLEdBQUcsSUFBQSwyQkFBTSxFQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMzQyxpQkFBaUIsRUFBRSxVQUFDLElBQUksRUFBRSxrQkFBa0I7UUFDMUMsT0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQztJQUF2RCxDQUF1RDtDQUMxRCxDQUFDLENBQ0EsVUFBQyxFQVNBO1FBUkMsS0FBSyxXQUFBLEVBQ0wsT0FBTyxhQUFBLEVBQ1AsaUJBQXFCLEVBQXJCLFNBQVMsbUJBQUcsU0FBUyxLQUFBLEVBQ3JCLGdCQUFnQixFQUFoQixRQUFRLG1CQUFHLEtBQUssS0FBQSxFQUNoQixjQUFjLEVBQWQsTUFBTSxtQkFBRyxLQUFLLEtBQUEsRUFDZCxpQkFBaUIsRUFBakIsU0FBUyxtQkFBRyxLQUFLLEtBQUEsRUFDakIsa0JBQWtCLEVBQWxCLFVBQVUsbUJBQUcsS0FBSyxLQUFBLEVBQ2xCLGlCQUFpQixFQUFqQixTQUFTLG1CQUFHLEtBQUssS0FBQTtJQUNiLE9BQUEsd0ZBQ0osVUFBVSxFQUFFLFFBQVE7WUFDbEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUk7WUFDbEMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFDdkMsVUFBVSxFQUFFLFFBQVE7WUFDbEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU87WUFDckMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFDdEMsS0FBSyxFQUFFO1lBQ0wsT0FBTyxFQUFFLFNBQVM7WUFDbEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlO1lBQ2pELGFBQWEsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtZQUNuRCxJQUFJLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7WUFDNUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7WUFDakQsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjO1lBQzVDLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtZQUMzQyxJQUFJLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7WUFDeEMsR0FBRyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVO1lBQ3RDLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsWUFBWTtTQUMzQyxDQUFDLFNBQVMsQ0FBQyxFQUNaLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUV0QyxDQUFDLE9BQU8sSUFBSTtRQUNiLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLEtBQUssRUFBRSxNQUFNO0tBQ2QsQ0FBQyxHQUVDLENBQUMsU0FBUyxJQUFJO1FBQ2YsYUFBYSxFQUFFLFdBQVc7S0FDM0IsQ0FBQyxHQUNDLENBQUMsVUFBVSxJQUFJO1FBQ2hCLGFBQWEsRUFBRSxZQUFZO0tBQzVCLENBQUMsR0FDQyxDQUFDLFNBQVMsSUFBSTtRQUNmLFNBQVMsRUFBRSxZQUFZO0tBQ3hCLENBQUMsS0FDRiwwQkFBMEIsRUFBRSxNQUFNLElBQ2xDO0FBcENJLENBb0NKLENBQ0gsQ0FBQztBQUVXLFFBQUEsSUFBSSxHQUFHLGVBQUssQ0FBQyxVQUFVLENBQWlCLFNBQVMsSUFBSSxDQUNoRSxFQUF1QixFQUN2QixHQUFHO1FBREUsS0FBSyxzQkFBVixFQUFZLENBQUY7SUFHVixJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7UUFDakIsT0FBTyxDQUNMLHVCQUFDLFVBQVUscUJBQUMsR0FBRyxFQUFFLEdBQUcsSUFBTSxLQUFLLGNBQzdCLHNEQUFrQixJQUVQLENBQ2QsQ0FBQztLQUNIO0lBRUQsT0FBTyx1QkFBQyxVQUFVLHFCQUFDLEdBQUcsRUFBRSxHQUFHLElBQU0sS0FBSyxFQUFJLENBQUM7QUFDN0MsQ0FBQyxDQUFDLENBQUM7QUFFSCxrQkFBZSxZQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ1NTUHJvcGVydGllcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbnR5cGUgUmVmID0gSFRNTFNwYW5FbGVtZW50O1xuXG5leHBvcnQgdHlwZSBUZXh0VmFyaWF0aW9uID1cbiAgfCAnaW5oZXJpdCdcbiAgfCAnZ3JheSdcbiAgfCAnd2hpdGUnXG4gIHwgJ2NvbnRlbnRWaW9sZXQnXG4gIHwgJ2xpZ2h0R3JheSdcbiAgfCAnZGFya0dyYXknXG4gIHwgJ2JsYWNrJ1xuICB8ICdibHVlJ1xuICB8ICdyZWQnXG4gIHwgJ2dyZWVuJztcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgaW50ZXJmYWNlIFRleHRQcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XG4gIHZhcmlhdGlvbj86IFRleHRWYXJpYXRpb247XG4gIG1vbm90eXBlPzogYm9vbGVhbjtcbiAgdXBwZXJjYXNlPzogYm9vbGVhbjtcbiAgY2FwaXRhbGl6ZT86IGJvb2xlYW47XG4gIG5vV3JhcD86IGJvb2xlYW47XG4gIGxvYWRpbmc/OiBib29sZWFuO1xuICB3b3JkQnJlYWs/OiBib29sZWFuO1xufVxuXG5jb25zdCBTdHlsZWRUZXh0ID0gc3R5bGVkKCdzcGFuJykud2l0aENvbmZpZyh7XG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCwgZGVmYXVsdFZhbGlkYXRvckZuKSA9PlxuICAgICFbJ2xvYWRpbmcnXS5pbmNsdWRlcyhwcm9wKSAmJiBkZWZhdWx0VmFsaWRhdG9yRm4ocHJvcCksXG59KTxUZXh0UHJvcHM+KFxuICAoe1xuICAgIHRoZW1lLFxuICAgIGxvYWRpbmcsXG4gICAgdmFyaWF0aW9uID0gJ2luaGVyaXQnLFxuICAgIG1vbm90eXBlID0gZmFsc2UsXG4gICAgbm9XcmFwID0gZmFsc2UsXG4gICAgdXBwZXJjYXNlID0gZmFsc2UsXG4gICAgY2FwaXRhbGl6ZSA9IGZhbHNlLFxuICAgIHdvcmRCcmVhayA9IGZhbHNlLFxuICB9KSA9PiAoe1xuICAgIGZvbnRGYW1pbHk6IG1vbm90eXBlXG4gICAgICA/IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseS5tb25vXG4gICAgICA6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseS5wcmltYXJ5LFxuICAgIGZvbnRXZWlnaHQ6IG1vbm90eXBlXG4gICAgICA/IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5yZWd1bGFyXG4gICAgICA6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5tZWRpdW0sXG4gICAgY29sb3I6IHtcbiAgICAgIGluaGVyaXQ6ICdpbmhlcml0JyxcbiAgICAgIGxpZ2h0R3JheTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXG4gICAgICBjb250ZW50VmlvbGV0OiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRWaW9sZXQsXG4gICAgICBncmF5OiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcbiAgICAgIGRhcmtHcmF5OiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG4gICAgICBibGFjazogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcbiAgICAgIHdoaXRlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRPbkZpbGwsXG4gICAgICBibHVlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICAgICAgcmVkOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRSZWQsXG4gICAgICBncmVlbjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50R3JlZW4sXG4gICAgfVt2YXJpYXRpb25dLFxuICAgIHdoaXRlU3BhY2U6IG5vV3JhcCA/ICdub3dyYXAnIDogJ2luaXRpYWwnLFxuXG4gICAgLi4uKGxvYWRpbmcgJiYge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH0pLFxuXG4gICAgLi4uKHVwcGVyY2FzZSAmJiB7XG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICB9KSxcbiAgICAuLi4oY2FwaXRhbGl6ZSAmJiB7XG4gICAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXG4gICAgfSksXG4gICAgLi4uKHdvcmRCcmVhayAmJiB7XG4gICAgICB3b3JkQnJlYWs6ICdicmVhay13b3JkJyxcbiAgICB9KSxcbiAgICAnLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0JzogJzEwMCUnLFxuICB9KVxuKTtcblxuZXhwb3J0IGNvbnN0IFRleHQgPSBSZWFjdC5mb3J3YXJkUmVmPFJlZiwgVGV4dFByb3BzPihmdW5jdGlvbiBUZXh0KFxuICB7IC4uLnByb3BzIH06IFRleHRQcm9wcyxcbiAgcmVmXG4pIHtcbiAgaWYgKHByb3BzLmxvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZFRleHQgcmVmPXtyZWZ9IHsuLi5wcm9wc30+XG4gICAgICAgIDxkaXY+TG9hZGluZzwvZGl2PlxuICAgICAgICB7Lyo8U2tlbGV0b24gLz4qL31cbiAgICAgIDwvU3R5bGVkVGV4dD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIDxTdHlsZWRUZXh0IHJlZj17cmVmfSB7Li4ucHJvcHN9IC8+O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iXX0=