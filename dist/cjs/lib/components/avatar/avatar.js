"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = exports.BackgroundWrapper = exports.isValidAccountHash = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var react_identicons_1 = tslib_1.__importDefault(require("react-identicons"));
// import Skeleton from 'react-loading-skeleton';
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var svg_icon_1 = tslib_1.__importDefault(require("../svg-icon/svg-icon"));
var cache_asset_1 = require("../../utils/cache-asset");
var isValidAccountHash = function (accountHash) {
    if (accountHash == null) {
        return false;
    }
    var validHashRegExp = new RegExp("^([0-9A-Fa-f]){64}$");
    return validHashRegExp.test(accountHash.trim());
};
exports.isValidAccountHash = isValidAccountHash;
var getCornerRadius = function (size) {
    if (size === void 0) { size = "default"; }
    return ({
        small: 2,
        default: 2,
        average: 4,
        medium: 12,
        big: 12,
    }[size]);
};
var getSize = function (size) {
    if (size === void 0) { size = "default"; }
    return ({
        small: 20,
        default: 32,
        average: 40,
        medium: 80,
        big: 124,
    }[size]);
};
var getBgColor = function (size) {
    if (size === void 0) { size = "default"; }
    return ({
        small: "contentTertiary",
        default: "contentQuaternary",
        average: "contentQuaternary",
        medium: "contentQuaternary",
        big: "contentQuaternary",
    }[size]);
};
var getPadding = function (size) {
    if (size === void 0) { size = "default"; }
    return ({
        small: 0,
        default: 0,
        average: 0,
        medium: 0,
        big: 0,
    }[size]);
};
var getMargin = function (size) {
    if (size === void 0) { size = "default"; }
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
            : "transparent",
        "& > canvas": {
            borderRadius: getCornerRadius(size),
        },
    });
});
var IconHashWrapper = styled_components_1.default.div(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.styleguideColors.contentOnFill,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    });
});
exports.Avatar = react_1.default.forwardRef(function Avatar(_a, ref) {
    var hash = _a.hash, src = _a.src, _b = _a.size, size = _b === void 0 ? "default" : _b, loading = _a.loading, isErc20 = _a.isErc20, props = tslib_1.__rest(_a, ["hash", "src", "size", "loading", "isErc20"]);
    var RETINA_SCALE = 2;
    var CACHE_TTL = "86400";
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
                    background: "url(\"".concat(cachedUrl, "\") center no-repeat"),
                    backgroundSize: "contain",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLDhFQUF5QztBQUN6QyxpREFBaUQ7QUFDakQsZ0ZBQXVDO0FBQ3ZDLDBFQUEyQztBQUMzQyx1REFBeUQ7QUFFbEQsSUFBTSxrQkFBa0IsR0FBRyxVQUNoQyxXQUEyQjtJQUUzQixJQUFJLFdBQVcsSUFBSSxJQUFJLEVBQUU7UUFDdkIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQU0sZUFBZSxHQUFHLElBQUksTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDMUQsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2xELENBQUMsQ0FBQztBQVRXLFFBQUEsa0JBQWtCLHNCQVM3QjtBQVdGLElBQU0sZUFBZSxHQUFHLFVBQUMsSUFBcUM7SUFBckMscUJBQUEsRUFBQSxnQkFBcUM7SUFDNUQsT0FBQSxDQUFDO1FBQ0MsS0FBSyxFQUFFLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQztRQUNWLE9BQU8sRUFBRSxDQUFDO1FBQ1YsTUFBTSxFQUFFLEVBQUU7UUFDVixHQUFHLEVBQUUsRUFBRTtLQUNSLENBQUMsSUFBSSxDQUFDLENBQUM7QUFOUixDQU1RLENBQUM7QUFFWCxJQUFNLE9BQU8sR0FBRyxVQUFDLElBQXFDO0lBQXJDLHFCQUFBLEVBQUEsZ0JBQXFDO0lBQ3BELE9BQUEsQ0FBQztRQUNDLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxFQUFFLEVBQUU7UUFDWCxPQUFPLEVBQUUsRUFBRTtRQUNYLE1BQU0sRUFBRSxFQUFFO1FBQ1YsR0FBRyxFQUFFLEdBQUc7S0FDVCxDQUFDLElBQUksQ0FBQyxDQUFDO0FBTlIsQ0FNUSxDQUFDO0FBRVgsSUFBTSxVQUFV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QUNkLHVCQUFDLGtCQUFPLElBQ04sR0FBRyxFQUFDLGtDQUFrQyxFQUN0QyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUNuQixHQUNjLElBQ0EsSUFDZixDQUNSLENBQUM7S0FDSDtJQUVELE9BQU8sQ0FDTCxrREFBTSxHQUFHLEVBQUUsR0FBRyxJQUFNLEtBQUssY0FDdkIsdUJBQUMseUJBQWlCLHFCQUFDLElBQUksRUFBRSxJQUFJLGdCQUMzQix1QkFBQywwQkFBUyxxQkFDUixNQUFNLEVBQUUsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLFdBQVcsRUFBRSxFQUMzQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFDdEMsRUFBRSxFQUFDLE1BQU0sSUFDTCxLQUFLLEVBQ1QsSUFDZ0IsSUFDZixDQUNSLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQztBQUVILGtCQUFlLGNBQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJZGVudGljb24gZnJvbSBcInJlYWN0LWlkZW50aWNvbnNcIjtcbi8vIGltcG9ydCBTa2VsZXRvbiBmcm9tICdyZWFjdC1sb2FkaW5nLXNrZWxldG9uJztcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tIFwiLi4vc3ZnLWljb24vc3ZnLWljb25cIjtcbmltcG9ydCB7Z2V0SW1hZ2VQcm94eVVybH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NhY2hlLWFzc2V0XCI7XG5cbmV4cG9ydCBjb25zdCBpc1ZhbGlkQWNjb3VudEhhc2ggPSAoXG4gIGFjY291bnRIYXNoPzogc3RyaW5nIHwgbnVsbFxuKTogYWNjb3VudEhhc2ggaXMgc3RyaW5nID0+IHtcbiAgaWYgKGFjY291bnRIYXNoID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCB2YWxpZEhhc2hSZWdFeHAgPSBuZXcgUmVnRXhwKFwiXihbMC05QS1GYS1mXSl7NjR9JFwiKTtcbiAgcmV0dXJuIHZhbGlkSGFzaFJlZ0V4cC50ZXN0KGFjY291bnRIYXNoLnRyaW0oKSk7XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXZhdGFyUHJvcHMge1xuICBoYXNoPzogc3RyaW5nIHwgbnVsbDtcbiAgc3JjPzogc3RyaW5nIHwgbnVsbDtcbiAgc2l6ZT86IFwiZGVmYXVsdFwiIHwgXCJiaWdcIiB8IFwiYXZlcmFnZVwiIHwgXCJtZWRpdW1cIiB8IFwic21hbGxcIjtcbiAgbG9hZGluZz86IGJvb2xlYW47XG4gIGlzRXJjMjA/OiBib29sZWFuO1xufVxuXG5jb25zdCBnZXRDb3JuZXJSYWRpdXMgPSAoc2l6ZTogQXZhdGFyUHJvcHNbXCJzaXplXCJdID0gXCJkZWZhdWx0XCIpID0+XG4gICh7XG4gICAgc21hbGw6IDIsXG4gICAgZGVmYXVsdDogMixcbiAgICBhdmVyYWdlOiA0LFxuICAgIG1lZGl1bTogMTIsXG4gICAgYmlnOiAxMixcbiAgfVtzaXplXSk7XG5cbmNvbnN0IGdldFNpemUgPSAoc2l6ZTogQXZhdGFyUHJvcHNbXCJzaXplXCJdID0gXCJkZWZhdWx0XCIpID0+XG4gICh7XG4gICAgc21hbGw6IDIwLFxuICAgIGRlZmF1bHQ6IDMyLFxuICAgIGF2ZXJhZ2U6IDQwLFxuICAgIG1lZGl1bTogODAsXG4gICAgYmlnOiAxMjQsXG4gIH1bc2l6ZV0pO1xuXG5jb25zdCBnZXRCZ0NvbG9yID0gKHNpemU6IEF2YXRhclByb3BzW1wic2l6ZVwiXSA9IFwiZGVmYXVsdFwiKSA9PlxuICAoe1xuICAgIHNtYWxsOiBcImNvbnRlbnRUZXJ0aWFyeVwiLFxuICAgIGRlZmF1bHQ6IFwiY29udGVudFF1YXRlcm5hcnlcIixcbiAgICBhdmVyYWdlOiBcImNvbnRlbnRRdWF0ZXJuYXJ5XCIsXG4gICAgbWVkaXVtOiBcImNvbnRlbnRRdWF0ZXJuYXJ5XCIsXG4gICAgYmlnOiBcImNvbnRlbnRRdWF0ZXJuYXJ5XCIsXG4gIH1bc2l6ZV0pO1xuXG5jb25zdCBnZXRQYWRkaW5nID0gKHNpemU6IEF2YXRhclByb3BzW1wic2l6ZVwiXSA9IFwiZGVmYXVsdFwiKSA9PlxuICAoe1xuICAgIHNtYWxsOiAwLFxuICAgIGRlZmF1bHQ6IDAsXG4gICAgYXZlcmFnZTogMCxcbiAgICBtZWRpdW06IDAsXG4gICAgYmlnOiAwLFxuICB9W3NpemVdKTtcblxuY29uc3QgZ2V0TWFyZ2luID0gKHNpemU6IEF2YXRhclByb3BzW1wic2l6ZVwiXSA9IFwiZGVmYXVsdFwiKSA9PlxuICAoe1xuICAgIHNtYWxsOiAwLFxuICAgIGRlZmF1bHQ6IDQsXG4gICAgYXZlcmFnZTogNCxcbiAgICBtZWRpdW06IDQsXG4gICAgYmlnOiAwLFxuICB9W3NpemVdKTtcblxuZXhwb3J0IGNvbnN0IEJhY2tncm91bmRXcmFwcGVyID0gc3R5bGVkLmRpdjx7XG4gIHNpemU6IEF2YXRhclByb3BzW1wic2l6ZVwiXTtcbiAgd2l0aEJnQ29sb3I/OiBib29sZWFuO1xufT4oKHsgdGhlbWUsIHNpemUsIHdpdGhCZ0NvbG9yID0gZmFsc2UgfSkgPT4gKHtcbiAgYm9yZGVyUmFkaXVzOiBnZXRDb3JuZXJSYWRpdXMoc2l6ZSksXG4gIGhlaWdodDogZ2V0U2l6ZShzaXplKSxcbiAgd2lkdGg6IGdldFNpemUoc2l6ZSksXG4gIHBhZGRpbmc6IGdldFBhZGRpbmcoc2l6ZSksXG4gIG1hcmdpbjogZ2V0TWFyZ2luKHNpemUpLFxuICBiYWNrZ3JvdW5kQ29sb3I6IHdpdGhCZ0NvbG9yXG4gICAgPyB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzW2dldEJnQ29sb3Ioc2l6ZSldXG4gICAgOiBcInRyYW5zcGFyZW50XCIsXG4gIFwiJiA+IGNhbnZhc1wiOiB7XG4gICAgYm9yZGVyUmFkaXVzOiBnZXRDb3JuZXJSYWRpdXMoc2l6ZSksXG4gIH0sXG59KSk7XG5cbmNvbnN0IEljb25IYXNoV3JhcHBlciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcbiAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudE9uRmlsbCxcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxufSkpO1xuXG50eXBlIFJlZiA9IEhUTUxTcGFuRWxlbWVudDtcblxuZXhwb3J0IGNvbnN0IEF2YXRhciA9IFJlYWN0LmZvcndhcmRSZWY8UmVmLCBBdmF0YXJQcm9wcz4oZnVuY3Rpb24gQXZhdGFyKFxuICB7IGhhc2gsIHNyYywgc2l6ZSA9IFwiZGVmYXVsdFwiLCBsb2FkaW5nLCBpc0VyYzIwLCAuLi5wcm9wcyB9OiBBdmF0YXJQcm9wcyxcbiAgcmVmXG4pIHtcbiAgY29uc3QgUkVUSU5BX1NDQUxFID0gMjtcbiAgY29uc3QgQ0FDSEVfVFRMID0gXCI4NjQwMFwiO1xuXG4gIC8vIGlmIChsb2FkaW5nIHx8ICghaGFzaCAmJiAhc3JjICYmICFpc0VyYzIwKSkge1xuICAvLyAgIHJldHVybiAoXG4gIC8vICAgICA8c3BhbiByZWY9e3JlZn0gey4uLnByb3BzfT5cbiAgLy8gICAgICAgPFNrZWxldG9uXG4gIC8vICAgICAgICAgc3R5bGU9e3tcbiAgLy8gICAgICAgICAgIGJvcmRlclJhZGl1czogMixcbiAgLy8gICAgICAgICAgIHdpZHRoOiBnZXRTaXplKHNpemUpLFxuICAvLyAgICAgICAgICAgZm9udFNpemU6IGAke2dldFNpemUoc2l6ZSl9cHhgLFxuICAvLyAgICAgICAgICAgbWFyZ2luOiBnZXRNYXJnaW4oc2l6ZSksXG4gIC8vICAgICAgICAgfX1cbiAgLy8gICAgICAgLz5cbiAgLy8gICAgIDwvc3Bhbj5cbiAgLy8gICApO1xuICAvLyB9XG5cbiAgaWYgKHNyYykge1xuICAgIGNvbnN0IGNhY2hlZFVybCA9IGdldEltYWdlUHJveHlVcmwoc3JjLCB7XG4gICAgICB0dGw6IENBQ0hFX1RUTCxcbiAgICAgIHdpZHRoOiBnZXRTaXplKHNpemUpICogUkVUSU5BX1NDQUxFLFxuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8c3BhbiByZWY9e3JlZn0gey4uLnByb3BzfT5cbiAgICAgICAgPEJhY2tncm91bmRXcmFwcGVyXG4gICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYHVybChcIiR7Y2FjaGVkVXJsfVwiKSBjZW50ZXIgbm8tcmVwZWF0YCxcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBgY29udGFpbmAsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IGdldFNpemUoc2l6ZSksIGhlaWdodDogZ2V0U2l6ZShzaXplKSB9fSAvPlxuICAgICAgICA8L0JhY2tncm91bmRXcmFwcGVyPlxuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cbiAgaWYgKGhhc2ggJiYgaXNWYWxpZEFjY291bnRIYXNoKGhhc2gpKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIHJlZj17cmVmfSB7Li4ucHJvcHN9PlxuICAgICAgICA8QmFja2dyb3VuZFdyYXBwZXIgc2l6ZT17c2l6ZX0gd2l0aEJnQ29sb3I+XG4gICAgICAgICAgPEljb25IYXNoV3JhcHBlcj5cbiAgICAgICAgICAgIDxTdmdJY29uIHNyYz1cImFzc2V0cy9pY29ucy9pYy1oYXNoLnN2Z1wiIHNpemU9e2dldFNpemUoc2l6ZSkgLSA4fSAvPlxuICAgICAgICAgIDwvSWNvbkhhc2hXcmFwcGVyPlxuICAgICAgICA8L0JhY2tncm91bmRXcmFwcGVyPlxuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cblxuICBpZiAoaXNFcmMyMCAmJiAhc3JjKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIHJlZj17cmVmfSB7Li4ucHJvcHN9PlxuICAgICAgICA8QmFja2dyb3VuZFdyYXBwZXIgc2l6ZT17c2l6ZX0gd2l0aEJnQ29sb3I+XG4gICAgICAgICAgPEljb25IYXNoV3JhcHBlcj5cbiAgICAgICAgICAgIDxTdmdJY29uXG4gICAgICAgICAgICAgIHNyYz1cImFzc2V0cy9pY29ucy9pYy1lcmMyMC1hdmF0YXIuc3ZnXCJcbiAgICAgICAgICAgICAgc2l6ZT17Z2V0U2l6ZShzaXplKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9JY29uSGFzaFdyYXBwZXI+XG4gICAgICAgIDwvQmFja2dyb3VuZFdyYXBwZXI+XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNwYW4gcmVmPXtyZWZ9IHsuLi5wcm9wc30+XG4gICAgICA8QmFja2dyb3VuZFdyYXBwZXIgc2l6ZT17c2l6ZX0+XG4gICAgICAgIDxJZGVudGljb25cbiAgICAgICAgICBzdHJpbmc9e2hhc2g/LnRvTG93ZXJDYXNlKCl9XG4gICAgICAgICAgc2l6ZT17Z2V0U2l6ZShzaXplKSAtIGdldFBhZGRpbmcoc2l6ZSl9XG4gICAgICAgICAgYmc9XCIjZmZmXCJcbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIC8+XG4gICAgICA8L0JhY2tncm91bmRXcmFwcGVyPlxuICAgIDwvc3Bhbj5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBBdmF0YXI7XG4iXX0=