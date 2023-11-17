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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLDhFQUF5QztBQUN6QyxpREFBaUQ7QUFDakQsZ0ZBQXVDO0FBQ3ZDLDBFQUEyQztBQUMzQyx1REFBeUQ7QUFFbEQsSUFBTSxrQkFBa0IsR0FBRyxVQUNoQyxXQUEyQjtJQUUzQixJQUFJLFdBQVcsSUFBSSxJQUFJLEVBQUU7UUFDdkIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQU0sZUFBZSxHQUFHLElBQUksTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDMUQsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2xELENBQUMsQ0FBQztBQVRXLFFBQUEsa0JBQWtCLHNCQVM3QjtBQVdGLElBQU0sZUFBZSxHQUFHLFVBQUMsSUFBcUM7SUFBckMscUJBQUEsRUFBQSxnQkFBcUM7SUFDNUQsT0FBQSxDQUFDO1FBQ0MsS0FBSyxFQUFFLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQztRQUNWLE9BQU8sRUFBRSxDQUFDO1FBQ1YsTUFBTSxFQUFFLEVBQUU7UUFDVixHQUFHLEVBQUUsRUFBRTtLQUNSLENBQUMsSUFBSSxDQUFDLENBQUM7QUFOUixDQU1RLENBQUM7QUFFWCxJQUFNLE9BQU8sR0FBRyxVQUFDLElBQXFDO0lBQXJDLHFCQUFBLEVBQUEsZ0JBQXFDO0lBQ3BELE9BQUEsQ0FBQztRQUNDLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxFQUFFLEVBQUU7UUFDWCxPQUFPLEVBQUUsRUFBRTtRQUNYLE1BQU0sRUFBRSxFQUFFO1FBQ1YsR0FBRyxFQUFFLEdBQUc7S0FDVCxDQUFDLElBQUksQ0FBQyxDQUFDO0FBTlIsQ0FNUSxDQUFDO0FBRVgsSUFBTSxVQUFV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QUNkLHVCQUFDLGtCQUFPLElBQ04sR0FBRyxFQUFDLGtDQUFrQyxFQUN0QyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUNuQixHQUNjLElBQ0EsSUFDZixDQUNSLENBQUM7S0FDSDtJQUVELE9BQU8sQ0FDTCxrREFBTSxHQUFHLEVBQUUsR0FBRyxJQUFNLEtBQUssY0FDdkIsdUJBQUMseUJBQWlCLHFCQUFDLElBQUksRUFBRSxJQUFJLGdCQUMzQix1QkFBQywwQkFBUyxxQkFDUixNQUFNLEVBQUUsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLFdBQVcsRUFBRSxFQUMzQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFDdEMsRUFBRSxFQUFDLE1BQU0sSUFDTCxLQUFLLEVBQ1QsSUFDZ0IsSUFDZixDQUNSLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQztBQUVILGtCQUFlLGNBQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IElkZW50aWNvbiBmcm9tIFwicmVhY3QtaWRlbnRpY29uc1wiO1xyXG4vLyBpbXBvcnQgU2tlbGV0b24gZnJvbSAncmVhY3QtbG9hZGluZy1za2VsZXRvbic7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBTdmdJY29uIGZyb20gXCIuLi9zdmctaWNvbi9zdmctaWNvblwiO1xyXG5pbXBvcnQge2dldEltYWdlUHJveHlVcmx9IGZyb20gXCIuLi8uLi91dGlscy9jYWNoZS1hc3NldFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzVmFsaWRBY2NvdW50SGFzaCA9IChcclxuICBhY2NvdW50SGFzaD86IHN0cmluZyB8IG51bGxcclxuKTogYWNjb3VudEhhc2ggaXMgc3RyaW5nID0+IHtcclxuICBpZiAoYWNjb3VudEhhc2ggPT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdmFsaWRIYXNoUmVnRXhwID0gbmV3IFJlZ0V4cChcIl4oWzAtOUEtRmEtZl0pezY0fSRcIik7XHJcbiAgcmV0dXJuIHZhbGlkSGFzaFJlZ0V4cC50ZXN0KGFjY291bnRIYXNoLnRyaW0oKSk7XHJcbn07XHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cclxuZXhwb3J0IGludGVyZmFjZSBBdmF0YXJQcm9wcyB7XHJcbiAgaGFzaD86IHN0cmluZyB8IG51bGw7XHJcbiAgc3JjPzogc3RyaW5nIHwgbnVsbDtcclxuICBzaXplPzogXCJkZWZhdWx0XCIgfCBcImJpZ1wiIHwgXCJhdmVyYWdlXCIgfCBcIm1lZGl1bVwiIHwgXCJzbWFsbFwiO1xyXG4gIGxvYWRpbmc/OiBib29sZWFuO1xyXG4gIGlzRXJjMjA/OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBnZXRDb3JuZXJSYWRpdXMgPSAoc2l6ZTogQXZhdGFyUHJvcHNbXCJzaXplXCJdID0gXCJkZWZhdWx0XCIpID0+XHJcbiAgKHtcclxuICAgIHNtYWxsOiAyLFxyXG4gICAgZGVmYXVsdDogMixcclxuICAgIGF2ZXJhZ2U6IDQsXHJcbiAgICBtZWRpdW06IDEyLFxyXG4gICAgYmlnOiAxMixcclxuICB9W3NpemVdKTtcclxuXHJcbmNvbnN0IGdldFNpemUgPSAoc2l6ZTogQXZhdGFyUHJvcHNbXCJzaXplXCJdID0gXCJkZWZhdWx0XCIpID0+XHJcbiAgKHtcclxuICAgIHNtYWxsOiAyMCxcclxuICAgIGRlZmF1bHQ6IDMyLFxyXG4gICAgYXZlcmFnZTogNDAsXHJcbiAgICBtZWRpdW06IDgwLFxyXG4gICAgYmlnOiAxMjQsXHJcbiAgfVtzaXplXSk7XHJcblxyXG5jb25zdCBnZXRCZ0NvbG9yID0gKHNpemU6IEF2YXRhclByb3BzW1wic2l6ZVwiXSA9IFwiZGVmYXVsdFwiKSA9PlxyXG4gICh7XHJcbiAgICBzbWFsbDogXCJjb250ZW50VGVydGlhcnlcIixcclxuICAgIGRlZmF1bHQ6IFwiY29udGVudFF1YXRlcm5hcnlcIixcclxuICAgIGF2ZXJhZ2U6IFwiY29udGVudFF1YXRlcm5hcnlcIixcclxuICAgIG1lZGl1bTogXCJjb250ZW50UXVhdGVybmFyeVwiLFxyXG4gICAgYmlnOiBcImNvbnRlbnRRdWF0ZXJuYXJ5XCIsXHJcbiAgfVtzaXplXSk7XHJcblxyXG5jb25zdCBnZXRQYWRkaW5nID0gKHNpemU6IEF2YXRhclByb3BzW1wic2l6ZVwiXSA9IFwiZGVmYXVsdFwiKSA9PlxyXG4gICh7XHJcbiAgICBzbWFsbDogMCxcclxuICAgIGRlZmF1bHQ6IDAsXHJcbiAgICBhdmVyYWdlOiAwLFxyXG4gICAgbWVkaXVtOiAwLFxyXG4gICAgYmlnOiAwLFxyXG4gIH1bc2l6ZV0pO1xyXG5cclxuY29uc3QgZ2V0TWFyZ2luID0gKHNpemU6IEF2YXRhclByb3BzW1wic2l6ZVwiXSA9IFwiZGVmYXVsdFwiKSA9PlxyXG4gICh7XHJcbiAgICBzbWFsbDogMCxcclxuICAgIGRlZmF1bHQ6IDQsXHJcbiAgICBhdmVyYWdlOiA0LFxyXG4gICAgbWVkaXVtOiA0LFxyXG4gICAgYmlnOiAwLFxyXG4gIH1bc2l6ZV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJhY2tncm91bmRXcmFwcGVyID0gc3R5bGVkLmRpdjx7XHJcbiAgc2l6ZTogQXZhdGFyUHJvcHNbXCJzaXplXCJdO1xyXG4gIHdpdGhCZ0NvbG9yPzogYm9vbGVhbjtcclxufT4oKHsgdGhlbWUsIHNpemUsIHdpdGhCZ0NvbG9yID0gZmFsc2UgfSkgPT4gKHtcclxuICBib3JkZXJSYWRpdXM6IGdldENvcm5lclJhZGl1cyhzaXplKSxcclxuICBoZWlnaHQ6IGdldFNpemUoc2l6ZSksXHJcbiAgd2lkdGg6IGdldFNpemUoc2l6ZSksXHJcbiAgcGFkZGluZzogZ2V0UGFkZGluZyhzaXplKSxcclxuICBtYXJnaW46IGdldE1hcmdpbihzaXplKSxcclxuICBiYWNrZ3JvdW5kQ29sb3I6IHdpdGhCZ0NvbG9yXHJcbiAgICA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnNbZ2V0QmdDb2xvcihzaXplKV1cclxuICAgIDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gIFwiJiA+IGNhbnZhc1wiOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IGdldENvcm5lclJhZGl1cyhzaXplKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBJY29uSGFzaFdyYXBwZXIgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudE9uRmlsbCxcclxuICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbn0pKTtcclxuXHJcbnR5cGUgUmVmID0gSFRNTFNwYW5FbGVtZW50O1xyXG5cclxuZXhwb3J0IGNvbnN0IEF2YXRhciA9IFJlYWN0LmZvcndhcmRSZWY8UmVmLCBBdmF0YXJQcm9wcz4oZnVuY3Rpb24gQXZhdGFyKFxyXG4gIHsgaGFzaCwgc3JjLCBzaXplID0gXCJkZWZhdWx0XCIsIGxvYWRpbmcsIGlzRXJjMjAsIC4uLnByb3BzIH06IEF2YXRhclByb3BzLFxyXG4gIHJlZlxyXG4pIHtcclxuICBjb25zdCBSRVRJTkFfU0NBTEUgPSAyO1xyXG4gIGNvbnN0IENBQ0hFX1RUTCA9IFwiODY0MDBcIjtcclxuXHJcbiAgLy8gaWYgKGxvYWRpbmcgfHwgKCFoYXNoICYmICFzcmMgJiYgIWlzRXJjMjApKSB7XHJcbiAgLy8gICByZXR1cm4gKFxyXG4gIC8vICAgICA8c3BhbiByZWY9e3JlZn0gey4uLnByb3BzfT5cclxuICAvLyAgICAgICA8U2tlbGV0b25cclxuICAvLyAgICAgICAgIHN0eWxlPXt7XHJcbiAgLy8gICAgICAgICAgIGJvcmRlclJhZGl1czogMixcclxuICAvLyAgICAgICAgICAgd2lkdGg6IGdldFNpemUoc2l6ZSksXHJcbiAgLy8gICAgICAgICAgIGZvbnRTaXplOiBgJHtnZXRTaXplKHNpemUpfXB4YCxcclxuICAvLyAgICAgICAgICAgbWFyZ2luOiBnZXRNYXJnaW4oc2l6ZSksXHJcbiAgLy8gICAgICAgICB9fVxyXG4gIC8vICAgICAgIC8+XHJcbiAgLy8gICAgIDwvc3Bhbj5cclxuICAvLyAgICk7XHJcbiAgLy8gfVxyXG5cclxuICBpZiAoc3JjKSB7XHJcbiAgICBjb25zdCBjYWNoZWRVcmwgPSBnZXRJbWFnZVByb3h5VXJsKHNyYywge1xyXG4gICAgICB0dGw6IENBQ0hFX1RUTCxcclxuICAgICAgd2lkdGg6IGdldFNpemUoc2l6ZSkgKiBSRVRJTkFfU0NBTEUsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzcGFuIHJlZj17cmVmfSB7Li4ucHJvcHN9PlxyXG4gICAgICAgIDxCYWNrZ3JvdW5kV3JhcHBlclxyXG4gICAgICAgICAgc2l6ZT17c2l6ZX1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGB1cmwoXCIke2NhY2hlZFVybH1cIikgY2VudGVyIG5vLXJlcGVhdGAsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBgY29udGFpbmAsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IGdldFNpemUoc2l6ZSksIGhlaWdodDogZ2V0U2l6ZShzaXplKSB9fSAvPlxyXG4gICAgICAgIDwvQmFja2dyb3VuZFdyYXBwZXI+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbiAgfVxyXG4gIGlmIChoYXNoICYmIGlzVmFsaWRBY2NvdW50SGFzaChoYXNoKSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNwYW4gcmVmPXtyZWZ9IHsuLi5wcm9wc30+XHJcbiAgICAgICAgPEJhY2tncm91bmRXcmFwcGVyIHNpemU9e3NpemV9IHdpdGhCZ0NvbG9yPlxyXG4gICAgICAgICAgPEljb25IYXNoV3JhcHBlcj5cclxuICAgICAgICAgICAgPFN2Z0ljb24gc3JjPVwiYXNzZXRzL2ljb25zL2ljLWhhc2guc3ZnXCIgc2l6ZT17Z2V0U2l6ZShzaXplKSAtIDh9IC8+XHJcbiAgICAgICAgICA8L0ljb25IYXNoV3JhcHBlcj5cclxuICAgICAgICA8L0JhY2tncm91bmRXcmFwcGVyPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzRXJjMjAgJiYgIXNyYykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNwYW4gcmVmPXtyZWZ9IHsuLi5wcm9wc30+XHJcbiAgICAgICAgPEJhY2tncm91bmRXcmFwcGVyIHNpemU9e3NpemV9IHdpdGhCZ0NvbG9yPlxyXG4gICAgICAgICAgPEljb25IYXNoV3JhcHBlcj5cclxuICAgICAgICAgICAgPFN2Z0ljb25cclxuICAgICAgICAgICAgICBzcmM9XCJhc3NldHMvaWNvbnMvaWMtZXJjMjAtYXZhdGFyLnN2Z1wiXHJcbiAgICAgICAgICAgICAgc2l6ZT17Z2V0U2l6ZShzaXplKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvSWNvbkhhc2hXcmFwcGVyPlxyXG4gICAgICAgIDwvQmFja2dyb3VuZFdyYXBwZXI+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4gcmVmPXtyZWZ9IHsuLi5wcm9wc30+XHJcbiAgICAgIDxCYWNrZ3JvdW5kV3JhcHBlciBzaXplPXtzaXplfT5cclxuICAgICAgICA8SWRlbnRpY29uXHJcbiAgICAgICAgICBzdHJpbmc9e2hhc2g/LnRvTG93ZXJDYXNlKCl9XHJcbiAgICAgICAgICBzaXplPXtnZXRTaXplKHNpemUpIC0gZ2V0UGFkZGluZyhzaXplKX1cclxuICAgICAgICAgIGJnPVwiI2ZmZlwiXHJcbiAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9CYWNrZ3JvdW5kV3JhcHBlcj5cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF2YXRhcjtcclxuIl19