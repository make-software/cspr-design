"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = exports.BackgroundWrapper = exports.isValidAccountHash = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var react_identicons_1 = tslib_1.__importDefault(require("react-identicons"));
// import Skeleton from "react-loading-skeleton";
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var svg_icon_1 = tslib_1.__importDefault(require("../svg-icon/svg-icon"));
var cache_asset_1 = require("../../utils/cache-asset");
var isValidAccountHash = function (accountHash) {
    if (accountHash == null) {
        return false;
    }
    var validHashRegExp = new RegExp('^([0-9A-Fa-f]){64}$');
    return validHashRegExp.test(accountHash.trim());
};
exports.isValidAccountHash = isValidAccountHash;
var getCornerRadius = function (size) {
    if (size === void 0) { size = 'default'; }
    return ({
        small: 2,
        default: 2,
        average: 4,
        medium: 12,
        big: 12,
    }[size]);
};
var getSize = function (size) {
    if (size === void 0) { size = 'default'; }
    return ({
        small: 20,
        default: 32,
        average: 40,
        medium: 80,
        big: 124,
    }[size]);
};
var getBgColor = function (size) {
    if (size === void 0) { size = 'default'; }
    return ({
        small: 'contentTertiary',
        default: 'contentQuaternary',
        average: 'contentQuaternary',
        medium: 'contentQuaternary',
        big: 'contentQuaternary',
    }[size]);
};
var getPadding = function (size) {
    if (size === void 0) { size = 'default'; }
    return ({
        small: 0,
        default: 0,
        average: 0,
        medium: 0,
        big: 0,
    }[size]);
};
var getMargin = function (size) {
    if (size === void 0) { size = 'default'; }
    return ({
        small: 0,
        default: 4,
        average: 4,
        medium: 4,
        big: 0,
    }[size]);
};
exports.BackgroundWrapper = styled_components_1.default.div(function (_a) {
    var theme = _a.theme, size = _a.size, _b = _a.withBgColor, withBgColor = _b === void 0 ? false : _b;
    return ({
        borderRadius: getCornerRadius(size),
        height: getSize(size),
        width: getSize(size),
        padding: getPadding(size),
        margin: getMargin(size),
        backgroundColor: withBgColor
            ? theme.styleguideColors[getBgColor(size)]
            : 'transparent',
        '& > canvas': {
            borderRadius: getCornerRadius(size),
        },
    });
});
var IconHashWrapper = styled_components_1.default.div(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.styleguideColors.contentOnFill,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    });
});
exports.Avatar = react_1.default.forwardRef(function Avatar(_a, ref) {
    var hash = _a.hash, src = _a.src, _b = _a.size, size = _b === void 0 ? 'default' : _b, loading = _a.loading, isErc20 = _a.isErc20, props = tslib_1.__rest(_a, ["hash", "src", "size", "loading", "isErc20"]);
    var RETINA_SCALE = 2;
    var CACHE_TTL = '86400';
    // if (loading || (!hash && !src && !isErc20)) {
    //   return (
    //     <span ref={ref} {...props}>
    //       <Skeleton
    //         style={{
    //           borderRadius: 2,
    //           width: getSize(size),
    //           fontSize: `${getSize(size)}px`,
    //           margin: getMargin(size),
    //         }}
    //       />
    //     </span>
    //   );
    // }
    if (src) {
        var cachedUrl = (0, cache_asset_1.getImageProxyUrl)(src, {
            ttl: CACHE_TTL,
            width: getSize(size) * RETINA_SCALE,
        });
        return ((0, jsx_runtime_1.jsx)("span", tslib_1.__assign({ ref: ref }, props, { children: (0, jsx_runtime_1.jsx)(exports.BackgroundWrapper, tslib_1.__assign({ size: size, style: {
                    background: "url(\"".concat(cachedUrl, "\") center / contain no-repeat"),
                } }, { children: (0, jsx_runtime_1.jsx)("div", { style: { width: getSize(size), height: getSize(size) } }) })) })));
    }
    if (hash && (0, exports.isValidAccountHash)(hash)) {
        return ((0, jsx_runtime_1.jsx)("span", tslib_1.__assign({ ref: ref }, props, { children: (0, jsx_runtime_1.jsx)(exports.BackgroundWrapper, tslib_1.__assign({ size: size, withBgColor: true }, { children: (0, jsx_runtime_1.jsx)(IconHashWrapper, { children: (0, jsx_runtime_1.jsx)(svg_icon_1.default, { src: "assets/icons/ic-hash.svg", size: getSize(size) - 8 }) }) })) })));
    }
    if (isErc20 && !src) {
        return ((0, jsx_runtime_1.jsx)("span", tslib_1.__assign({ ref: ref }, props, { children: (0, jsx_runtime_1.jsx)(exports.BackgroundWrapper, tslib_1.__assign({ size: size, withBgColor: true }, { children: (0, jsx_runtime_1.jsx)(IconHashWrapper, { children: (0, jsx_runtime_1.jsx)(svg_icon_1.default, { src: "assets/icons/ic-erc20-avatar.svg", size: getSize(size) }) }) })) })));
    }
    return ((0, jsx_runtime_1.jsx)("span", tslib_1.__assign({ ref: ref }, props, { children: (0, jsx_runtime_1.jsx)(exports.BackgroundWrapper, tslib_1.__assign({ size: size }, { children: (0, jsx_runtime_1.jsx)(react_identicons_1.default, tslib_1.__assign({ string: hash === null || hash === void 0 ? void 0 : hash.toLowerCase(), size: getSize(size) - getPadding(size), bg: "#fff" }, props)) })) })));
});
exports.default = exports.Avatar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLDhFQUF5QztBQUN6QyxpREFBaUQ7QUFDakQsZ0ZBQXVDO0FBQ3ZDLDBFQUEyQztBQUMzQyx1REFBMkQ7QUFFcEQsSUFBTSxrQkFBa0IsR0FBRyxVQUNoQyxXQUEyQjtJQUUzQixJQUFJLFdBQVcsSUFBSSxJQUFJLEVBQUU7UUFDdkIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQU0sZUFBZSxHQUFHLElBQUksTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDMUQsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2xELENBQUMsQ0FBQztBQVRXLFFBQUEsa0JBQWtCLHNCQVM3QjtBQVdGLElBQU0sZUFBZSxHQUFHLFVBQUMsSUFBcUM7SUFBckMscUJBQUEsRUFBQSxnQkFBcUM7SUFDNUQsT0FBQSxDQUFDO1FBQ0MsS0FBSyxFQUFFLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQztRQUNWLE9BQU8sRUFBRSxDQUFDO1FBQ1YsTUFBTSxFQUFFLEVBQUU7UUFDVixHQUFHLEVBQUUsRUFBRTtLQUNSLENBQUMsSUFBSSxDQUFDLENBQUM7QUFOUixDQU1RLENBQUM7QUFFWCxJQUFNLE9BQU8sR0FBRyxVQUFDLElBQXFDO0lBQXJDLHFCQUFBLEVBQUEsZ0JBQXFDO0lBQ3BELE9BQUEsQ0FBQztRQUNDLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxFQUFFLEVBQUU7UUFDWCxPQUFPLEVBQUUsRUFBRTtRQUNYLE1BQU0sRUFBRSxFQUFFO1FBQ1YsR0FBRyxFQUFFLEdBQUc7S0FDVCxDQUFDLElBQUksQ0FBQyxDQUFDO0FBTlIsQ0FNUSxDQUFDO0FBRVgsSUFBTSxVQUFV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QUFHLEVBQUMsa0NBQWtDLEVBQ3RDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQ25CLEdBQ2MsSUFDQSxJQUNmLENBQ1IsQ0FBQztLQUNIO0lBRUQsT0FBTyxDQUNMLGtEQUFNLEdBQUcsRUFBRSxHQUFHLElBQU0sS0FBSyxjQUN2Qix1QkFBQyx5QkFBaUIscUJBQUMsSUFBSSxFQUFFLElBQUksZ0JBQzNCLHVCQUFDLDBCQUFTLHFCQUNSLE1BQU0sRUFBRSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsV0FBVyxFQUFFLEVBQzNCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUN0QyxFQUFFLEVBQUMsTUFBTSxJQUNMLEtBQUssRUFDVCxJQUNnQixJQUNmLENBQ1IsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBRUgsa0JBQWUsY0FBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJZGVudGljb24gZnJvbSAncmVhY3QtaWRlbnRpY29ucyc7XG4vLyBpbXBvcnQgU2tlbGV0b24gZnJvbSBcInJlYWN0LWxvYWRpbmctc2tlbGV0b25cIjtcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi4vc3ZnLWljb24vc3ZnLWljb24nO1xuaW1wb3J0IHsgZ2V0SW1hZ2VQcm94eVVybCB9IGZyb20gJy4uLy4uL3V0aWxzL2NhY2hlLWFzc2V0JztcblxuZXhwb3J0IGNvbnN0IGlzVmFsaWRBY2NvdW50SGFzaCA9IChcbiAgYWNjb3VudEhhc2g/OiBzdHJpbmcgfCBudWxsXG4pOiBhY2NvdW50SGFzaCBpcyBzdHJpbmcgPT4ge1xuICBpZiAoYWNjb3VudEhhc2ggPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHZhbGlkSGFzaFJlZ0V4cCA9IG5ldyBSZWdFeHAoJ14oWzAtOUEtRmEtZl0pezY0fSQnKTtcbiAgcmV0dXJuIHZhbGlkSGFzaFJlZ0V4cC50ZXN0KGFjY291bnRIYXNoLnRyaW0oKSk7XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXZhdGFyUHJvcHMge1xuICBoYXNoPzogc3RyaW5nIHwgbnVsbDtcbiAgc3JjPzogc3RyaW5nIHwgbnVsbDtcbiAgc2l6ZT86ICdkZWZhdWx0JyB8ICdiaWcnIHwgJ2F2ZXJhZ2UnIHwgJ21lZGl1bScgfCAnc21hbGwnO1xuICBsb2FkaW5nPzogYm9vbGVhbjtcbiAgaXNFcmMyMD86IGJvb2xlYW47XG59XG5cbmNvbnN0IGdldENvcm5lclJhZGl1cyA9IChzaXplOiBBdmF0YXJQcm9wc1snc2l6ZSddID0gJ2RlZmF1bHQnKSA9PlxuICAoe1xuICAgIHNtYWxsOiAyLFxuICAgIGRlZmF1bHQ6IDIsXG4gICAgYXZlcmFnZTogNCxcbiAgICBtZWRpdW06IDEyLFxuICAgIGJpZzogMTIsXG4gIH1bc2l6ZV0pO1xuXG5jb25zdCBnZXRTaXplID0gKHNpemU6IEF2YXRhclByb3BzWydzaXplJ10gPSAnZGVmYXVsdCcpID0+XG4gICh7XG4gICAgc21hbGw6IDIwLFxuICAgIGRlZmF1bHQ6IDMyLFxuICAgIGF2ZXJhZ2U6IDQwLFxuICAgIG1lZGl1bTogODAsXG4gICAgYmlnOiAxMjQsXG4gIH1bc2l6ZV0pO1xuXG5jb25zdCBnZXRCZ0NvbG9yID0gKHNpemU6IEF2YXRhclByb3BzWydzaXplJ10gPSAnZGVmYXVsdCcpID0+XG4gICh7XG4gICAgc21hbGw6ICdjb250ZW50VGVydGlhcnknLFxuICAgIGRlZmF1bHQ6ICdjb250ZW50UXVhdGVybmFyeScsXG4gICAgYXZlcmFnZTogJ2NvbnRlbnRRdWF0ZXJuYXJ5JyxcbiAgICBtZWRpdW06ICdjb250ZW50UXVhdGVybmFyeScsXG4gICAgYmlnOiAnY29udGVudFF1YXRlcm5hcnknLFxuICB9W3NpemVdKTtcblxuY29uc3QgZ2V0UGFkZGluZyA9IChzaXplOiBBdmF0YXJQcm9wc1snc2l6ZSddID0gJ2RlZmF1bHQnKSA9PlxuICAoe1xuICAgIHNtYWxsOiAwLFxuICAgIGRlZmF1bHQ6IDAsXG4gICAgYXZlcmFnZTogMCxcbiAgICBtZWRpdW06IDAsXG4gICAgYmlnOiAwLFxuICB9W3NpemVdKTtcblxuY29uc3QgZ2V0TWFyZ2luID0gKHNpemU6IEF2YXRhclByb3BzWydzaXplJ10gPSAnZGVmYXVsdCcpID0+XG4gICh7XG4gICAgc21hbGw6IDAsXG4gICAgZGVmYXVsdDogNCxcbiAgICBhdmVyYWdlOiA0LFxuICAgIG1lZGl1bTogNCxcbiAgICBiaWc6IDAsXG4gIH1bc2l6ZV0pO1xuXG5leHBvcnQgY29uc3QgQmFja2dyb3VuZFdyYXBwZXIgPSBzdHlsZWQuZGl2PHtcbiAgc2l6ZTogQXZhdGFyUHJvcHNbJ3NpemUnXTtcbiAgd2l0aEJnQ29sb3I/OiBib29sZWFuO1xufT4oKHsgdGhlbWUsIHNpemUsIHdpdGhCZ0NvbG9yID0gZmFsc2UgfSkgPT4gKHtcbiAgYm9yZGVyUmFkaXVzOiBnZXRDb3JuZXJSYWRpdXMoc2l6ZSksXG4gIGhlaWdodDogZ2V0U2l6ZShzaXplKSxcbiAgd2lkdGg6IGdldFNpemUoc2l6ZSksXG4gIHBhZGRpbmc6IGdldFBhZGRpbmcoc2l6ZSksXG4gIG1hcmdpbjogZ2V0TWFyZ2luKHNpemUpLFxuICBiYWNrZ3JvdW5kQ29sb3I6IHdpdGhCZ0NvbG9yXG4gICAgPyB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzW2dldEJnQ29sb3Ioc2l6ZSldXG4gICAgOiAndHJhbnNwYXJlbnQnLFxuICAnJiA+IGNhbnZhcyc6IHtcbiAgICBib3JkZXJSYWRpdXM6IGdldENvcm5lclJhZGl1cyhzaXplKSxcbiAgfSxcbn0pKTtcblxuY29uc3QgSWNvbkhhc2hXcmFwcGVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50T25GaWxsLFxuICBoZWlnaHQ6ICcxMDAlJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxufSkpO1xuXG50eXBlIFJlZiA9IEhUTUxTcGFuRWxlbWVudDtcblxuZXhwb3J0IGNvbnN0IEF2YXRhciA9IFJlYWN0LmZvcndhcmRSZWY8UmVmLCBBdmF0YXJQcm9wcz4oZnVuY3Rpb24gQXZhdGFyKFxuICB7IGhhc2gsIHNyYywgc2l6ZSA9ICdkZWZhdWx0JywgbG9hZGluZywgaXNFcmMyMCwgLi4ucHJvcHMgfTogQXZhdGFyUHJvcHMsXG4gIHJlZlxuKSB7XG4gIGNvbnN0IFJFVElOQV9TQ0FMRSA9IDI7XG4gIGNvbnN0IENBQ0hFX1RUTCA9ICc4NjQwMCc7XG5cbiAgLy8gaWYgKGxvYWRpbmcgfHwgKCFoYXNoICYmICFzcmMgJiYgIWlzRXJjMjApKSB7XG4gIC8vICAgcmV0dXJuIChcbiAgLy8gICAgIDxzcGFuIHJlZj17cmVmfSB7Li4ucHJvcHN9PlxuICAvLyAgICAgICA8U2tlbGV0b25cbiAgLy8gICAgICAgICBzdHlsZT17e1xuICAvLyAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxuICAvLyAgICAgICAgICAgd2lkdGg6IGdldFNpemUoc2l6ZSksXG4gIC8vICAgICAgICAgICBmb250U2l6ZTogYCR7Z2V0U2l6ZShzaXplKX1weGAsXG4gIC8vICAgICAgICAgICBtYXJnaW46IGdldE1hcmdpbihzaXplKSxcbiAgLy8gICAgICAgICB9fVxuICAvLyAgICAgICAvPlxuICAvLyAgICAgPC9zcGFuPlxuICAvLyAgICk7XG4gIC8vIH1cblxuICBpZiAoc3JjKSB7XG4gICAgY29uc3QgY2FjaGVkVXJsID0gZ2V0SW1hZ2VQcm94eVVybChzcmMsIHtcbiAgICAgIHR0bDogQ0FDSEVfVFRMLFxuICAgICAgd2lkdGg6IGdldFNpemUoc2l6ZSkgKiBSRVRJTkFfU0NBTEUsXG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIHJlZj17cmVmfSB7Li4ucHJvcHN9PlxuICAgICAgICA8QmFja2dyb3VuZFdyYXBwZXJcbiAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBgdXJsKFwiJHtjYWNoZWRVcmx9XCIpIGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0YCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogZ2V0U2l6ZShzaXplKSwgaGVpZ2h0OiBnZXRTaXplKHNpemUpIH19IC8+XG4gICAgICAgIDwvQmFja2dyb3VuZFdyYXBwZXI+XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxuICBpZiAoaGFzaCAmJiBpc1ZhbGlkQWNjb3VudEhhc2goaGFzaCkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4gcmVmPXtyZWZ9IHsuLi5wcm9wc30+XG4gICAgICAgIDxCYWNrZ3JvdW5kV3JhcHBlciBzaXplPXtzaXplfSB3aXRoQmdDb2xvcj5cbiAgICAgICAgICA8SWNvbkhhc2hXcmFwcGVyPlxuICAgICAgICAgICAgPFN2Z0ljb24gc3JjPVwiYXNzZXRzL2ljb25zL2ljLWhhc2guc3ZnXCIgc2l6ZT17Z2V0U2l6ZShzaXplKSAtIDh9IC8+XG4gICAgICAgICAgPC9JY29uSGFzaFdyYXBwZXI+XG4gICAgICAgIDwvQmFja2dyb3VuZFdyYXBwZXI+XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChpc0VyYzIwICYmICFzcmMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4gcmVmPXtyZWZ9IHsuLi5wcm9wc30+XG4gICAgICAgIDxCYWNrZ3JvdW5kV3JhcHBlciBzaXplPXtzaXplfSB3aXRoQmdDb2xvcj5cbiAgICAgICAgICA8SWNvbkhhc2hXcmFwcGVyPlxuICAgICAgICAgICAgPFN2Z0ljb25cbiAgICAgICAgICAgICAgc3JjPVwiYXNzZXRzL2ljb25zL2ljLWVyYzIwLWF2YXRhci5zdmdcIlxuICAgICAgICAgICAgICBzaXplPXtnZXRTaXplKHNpemUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0ljb25IYXNoV3JhcHBlcj5cbiAgICAgICAgPC9CYWNrZ3JvdW5kV3JhcHBlcj5cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c3BhbiByZWY9e3JlZn0gey4uLnByb3BzfT5cbiAgICAgIDxCYWNrZ3JvdW5kV3JhcHBlciBzaXplPXtzaXplfT5cbiAgICAgICAgPElkZW50aWNvblxuICAgICAgICAgIHN0cmluZz17aGFzaD8udG9Mb3dlckNhc2UoKX1cbiAgICAgICAgICBzaXplPXtnZXRTaXplKHNpemUpIC0gZ2V0UGFkZGluZyhzaXplKX1cbiAgICAgICAgICBiZz1cIiNmZmZcIlxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgLz5cbiAgICAgIDwvQmFja2dyb3VuZFdyYXBwZXI+XG4gICAgPC9zcGFuPlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEF2YXRhcjtcbiJdfQ==