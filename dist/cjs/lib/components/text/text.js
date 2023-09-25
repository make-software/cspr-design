"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var react_loading_skeleton_1 = tslib_1.__importDefault(require("react-loading-skeleton"));
var StyledText = (0, styled_components_1.default)('span').withConfig({
    shouldForwardProp: function (prop, defaultValidatorFn) {
        return !['loading'].includes(prop) && defaultValidatorFn(prop);
    },
})(function (_a) {
    var theme = _a.theme, loading = _a.loading, _b = _a.variation, variation = _b === void 0 ? 'inherit' : _b, _c = _a.monotype, monotype = _c === void 0 ? false : _c, _d = _a.noWrap, noWrap = _d === void 0 ? false : _d, _e = _a.uppercase, uppercase = _e === void 0 ? false : _e, _f = _a.capitalize, capitalize = _f === void 0 ? false : _f, _g = _a.capitalizeFirstLetter, capitalizeFirstLetter = _g === void 0 ? false : _g, _h = _a.wordBreak, wordBreak = _h === void 0 ? false : _h;
    return (tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ fontFamily: monotype
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
exports.Text = react_1.default.forwardRef(function Text(_a, ref) {
    var props = tslib_1.__rest(_a, []);
    if (props.loading) {
        return ((0, jsx_runtime_1.jsx)(StyledText, tslib_1.__assign({ ref: ref }, props, { children: (0, jsx_runtime_1.jsx)(react_loading_skeleton_1.default, {}) })));
    }
    return (0, jsx_runtime_1.jsx)(StyledText, tslib_1.__assign({ ref: ref }, props));
});
exports.default = exports.Text;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90ZXh0L3RleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLGdGQUF1QztBQUN2QywwRkFBOEM7QUE4QjlDLElBQU0sVUFBVSxHQUFHLElBQUEsMkJBQU0sRUFBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDM0MsaUJBQWlCLEVBQUUsVUFBQyxJQUFJLEVBQUUsa0JBQWtCO1FBQzFDLE9BQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7SUFBdkQsQ0FBdUQ7Q0FDMUQsQ0FBQyxDQUNBLFVBQUMsRUFVQTtRQVRDLEtBQUssV0FBQSxFQUNMLE9BQU8sYUFBQSxFQUNQLGlCQUFxQixFQUFyQixTQUFTLG1CQUFHLFNBQVMsS0FBQSxFQUNyQixnQkFBZ0IsRUFBaEIsUUFBUSxtQkFBRyxLQUFLLEtBQUEsRUFDaEIsY0FBYyxFQUFkLE1BQU0sbUJBQUcsS0FBSyxLQUFBLEVBQ2QsaUJBQWlCLEVBQWpCLFNBQVMsbUJBQUcsS0FBSyxLQUFBLEVBQ2pCLGtCQUFrQixFQUFsQixVQUFVLG1CQUFHLEtBQUssS0FBQSxFQUNsQiw2QkFBNkIsRUFBN0IscUJBQXFCLG1CQUFHLEtBQUssS0FBQSxFQUM3QixpQkFBaUIsRUFBakIsU0FBUyxtQkFBRyxLQUFLLEtBQUE7SUFDYixPQUFBLHlHQUNKLFVBQVUsRUFBRSxRQUFRO1lBQ2xCLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJO1lBQ2xDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQ3ZDLFVBQVUsRUFBRSxRQUFRO1lBQ2xCLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPO1lBQ3JDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQ3RDLEtBQUssRUFBRTtZQUNMLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFNBQVMsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtZQUNqRCxhQUFhLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWE7WUFDbkQsSUFBSSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlO1lBQzVDLFFBQVEsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCO1lBQ2pELEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYztZQUM1QyxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWE7WUFDM0MsSUFBSSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO1lBQ3hDLEdBQUcsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsVUFBVTtZQUN0QyxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFlBQVk7U0FDM0MsQ0FBQyxTQUFTLENBQUMsRUFDWixVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFFdEMsQ0FBQyxPQUFPLElBQUk7UUFDYixPQUFPLEVBQUUsY0FBYztRQUN2QixLQUFLLEVBQUUsTUFBTTtLQUNkLENBQUMsR0FFQyxDQUFDLFNBQVMsSUFBSTtRQUNmLGFBQWEsRUFBRSxXQUFXO0tBQzNCLENBQUMsR0FDQyxDQUFDLFVBQVUsSUFBSTtRQUNoQixhQUFhLEVBQUUsWUFBWTtLQUM1QixDQUFDLEdBQ0MsQ0FBQyxxQkFBcUIsSUFBSTtRQUMzQixnQkFBZ0IsRUFBRTtZQUNoQixhQUFhLEVBQUUsWUFBWTtTQUM1QjtLQUNGLENBQUMsR0FDQyxDQUFDLFNBQVMsSUFBSTtRQUNmLFNBQVMsRUFBRSxZQUFZO0tBQ3hCLENBQUMsS0FDRiwwQkFBMEIsRUFBRSxNQUFNLElBQ2xDO0FBekNJLENBeUNKLENBQ0gsQ0FBQztBQUVXLFFBQUEsSUFBSSxHQUFHLGVBQUssQ0FBQyxVQUFVLENBQWlCLFNBQVMsSUFBSSxDQUNoRSxFQUF1QixFQUN2QixHQUFHO1FBREUsS0FBSyxzQkFBVixFQUFZLENBQUY7SUFHVixJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7UUFDakIsT0FBTyxDQUNMLHVCQUFDLFVBQVUscUJBQUMsR0FBRyxFQUFFLEdBQUcsSUFBTSxLQUFLLGNBQzdCLHVCQUFDLGdDQUFRLEtBQUcsSUFDRCxDQUNkLENBQUM7S0FDSDtJQUVELE9BQU8sdUJBQUMsVUFBVSxxQkFBQyxHQUFHLEVBQUUsR0FBRyxJQUFNLEtBQUssRUFBSSxDQUFDO0FBQzdDLENBQUMsQ0FBQyxDQUFDO0FBRUgsa0JBQWUsWUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdyZWFjdC1sb2FkaW5nLXNrZWxldG9uJztcclxuXHJcbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcclxuXHJcbnR5cGUgUmVmID0gSFRNTFNwYW5FbGVtZW50O1xyXG5cclxuZXhwb3J0IHR5cGUgVGV4dFZhcmlhdGlvbiA9XHJcbiAgfCAnaW5oZXJpdCdcclxuICB8ICdncmF5J1xyXG4gIHwgJ3doaXRlJ1xyXG4gIHwgJ2NvbnRlbnRWaW9sZXQnXHJcbiAgfCAnbGlnaHRHcmF5J1xyXG4gIHwgJ2RhcmtHcmF5J1xyXG4gIHwgJ2JsYWNrJ1xyXG4gIHwgJ2JsdWUnXHJcbiAgfCAncmVkJ1xyXG4gIHwgJ2dyZWVuJztcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFRleHRQcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XHJcbiAgdmFyaWF0aW9uPzogVGV4dFZhcmlhdGlvbjtcclxuICBtb25vdHlwZT86IGJvb2xlYW47XHJcbiAgdXBwZXJjYXNlPzogYm9vbGVhbjtcclxuICBjYXBpdGFsaXplPzogYm9vbGVhbjtcclxuICBjYXBpdGFsaXplRmlyc3RMZXR0ZXI/OiBib29sZWFuO1xyXG4gIG5vV3JhcD86IGJvb2xlYW47XHJcbiAgbG9hZGluZz86IGJvb2xlYW47XHJcbiAgd29yZEJyZWFrPzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgU3R5bGVkVGV4dCA9IHN0eWxlZCgnc3BhbicpLndpdGhDb25maWcoe1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCwgZGVmYXVsdFZhbGlkYXRvckZuKSA9PlxyXG4gICAgIVsnbG9hZGluZyddLmluY2x1ZGVzKHByb3ApICYmIGRlZmF1bHRWYWxpZGF0b3JGbihwcm9wKSxcclxufSk8VGV4dFByb3BzPihcclxuICAoe1xyXG4gICAgdGhlbWUsXHJcbiAgICBsb2FkaW5nLFxyXG4gICAgdmFyaWF0aW9uID0gJ2luaGVyaXQnLFxyXG4gICAgbW9ub3R5cGUgPSBmYWxzZSxcclxuICAgIG5vV3JhcCA9IGZhbHNlLFxyXG4gICAgdXBwZXJjYXNlID0gZmFsc2UsXHJcbiAgICBjYXBpdGFsaXplID0gZmFsc2UsXHJcbiAgICBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSBmYWxzZSxcclxuICAgIHdvcmRCcmVhayA9IGZhbHNlLFxyXG4gIH0pID0+ICh7XHJcbiAgICBmb250RmFtaWx5OiBtb25vdHlwZVxyXG4gICAgICA/IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseS5tb25vXHJcbiAgICAgIDogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5LnByaW1hcnksXHJcbiAgICBmb250V2VpZ2h0OiBtb25vdHlwZVxyXG4gICAgICA/IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5yZWd1bGFyXHJcbiAgICAgIDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Lm1lZGl1bSxcclxuICAgIGNvbG9yOiB7XHJcbiAgICAgIGluaGVyaXQ6ICdpbmhlcml0JyxcclxuICAgICAgbGlnaHRHcmF5OiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcclxuICAgICAgY29udGVudFZpb2xldDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VmlvbGV0LFxyXG4gICAgICBncmF5OiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcclxuICAgICAgZGFya0dyYXk6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcclxuICAgICAgYmxhY2s6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXHJcbiAgICAgIHdoaXRlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRPbkZpbGwsXHJcbiAgICAgIGJsdWU6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXHJcbiAgICAgIHJlZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UmVkLFxyXG4gICAgICBncmVlbjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50R3JlZW4sXHJcbiAgICB9W3ZhcmlhdGlvbl0sXHJcbiAgICB3aGl0ZVNwYWNlOiBub1dyYXAgPyAnbm93cmFwJyA6ICdpbml0aWFsJyxcclxuXHJcbiAgICAuLi4obG9hZGluZyAmJiB7XHJcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgfSksXHJcblxyXG4gICAgLi4uKHVwcGVyY2FzZSAmJiB7XHJcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG4gICAgfSksXHJcbiAgICAuLi4oY2FwaXRhbGl6ZSAmJiB7XHJcbiAgICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcclxuICAgIH0pLFxyXG4gICAgLi4uKGNhcGl0YWxpemVGaXJzdExldHRlciAmJiB7XHJcbiAgICAgICcmOmZpcnN0LWxldHRlcic6IHtcclxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIC4uLih3b3JkQnJlYWsgJiYge1xyXG4gICAgICB3b3JkQnJlYWs6ICdicmVhay13b3JkJyxcclxuICAgIH0pLFxyXG4gICAgJy13ZWJraXQtdGV4dC1zaXplLWFkanVzdCc6ICcxMDAlJyxcclxuICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRleHQgPSBSZWFjdC5mb3J3YXJkUmVmPFJlZiwgVGV4dFByb3BzPihmdW5jdGlvbiBUZXh0KFxyXG4gIHsgLi4ucHJvcHMgfTogVGV4dFByb3BzLFxyXG4gIHJlZlxyXG4pIHtcclxuICBpZiAocHJvcHMubG9hZGluZykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFN0eWxlZFRleHQgcmVmPXtyZWZ9IHsuLi5wcm9wc30+XHJcbiAgICAgICAgPFNrZWxldG9uIC8+XHJcbiAgICAgIDwvU3R5bGVkVGV4dD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPFN0eWxlZFRleHQgcmVmPXtyZWZ9IHsuLi5wcm9wc30gLz47XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcclxuIl19