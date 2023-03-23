import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import Identicon from "react-identicons";
// import Skeleton from 'react-loading-skeleton';
import styled from "styled-components";
import SvgIcon from "../svg-icon/svg-icon";
export var isValidAccountHash = function (accountHash) {
    if (accountHash == null) {
        return false;
    }
    var validHashRegExp = new RegExp("^([0-9A-Fa-f]){64}$");
    return validHashRegExp.test(accountHash.trim());
};
var getCornerRadius = function (size) {
    if (size === void 0) { size = "default"; }
    return ({
        small: 2,
        default: 2,
        medium: 12,
        big: 12,
    }[size]);
};
var getSize = function (size) {
    if (size === void 0) { size = "default"; }
    return ({
        small: 20,
        default: 32,
        medium: 80,
        big: 124,
    }[size]);
};
var getBgColor = function (size) {
    if (size === void 0) { size = "default"; }
    return ({
        small: "contentTertiary",
        default: "contentQuaternary",
        medium: "contentQuaternary",
        big: "contentQuaternary",
    }[size]);
};
var getPadding = function (size) {
    if (size === void 0) { size = "default"; }
    return ({
        small: 0,
        default: 0,
        medium: 0,
        big: 0,
    }[size]);
};
var getMargin = function (size) {
    if (size === void 0) { size = "default"; }
    return ({
        small: 0,
        default: 4,
        medium: 4,
        big: 0,
    }[size]);
};
export var BackgroundWrapper = styled.div(function (_a) {
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
var IconHashWrapper = styled.div(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.styleguideColors.contentOnFill,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    });
});
export var Avatar = React.forwardRef(function Avatar(_a, ref) {
    var hash = _a.hash, src = _a.src, _b = _a.size, size = _b === void 0 ? "default" : _b, loading = _a.loading, isErc20 = _a.isErc20, props = __rest(_a, ["hash", "src", "size", "loading", "isErc20"]);
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
    // if (src) {
    //   const cachedUrl = getImageProxyUrl(src, {
    //     ttl: CACHE_TTL,
    //     width: getSize(size) * RETINA_SCALE,
    //   });
    //   return (
    //     <span ref={ref} {...props}>
    //       <BackgroundWrapper
    //         size={size}
    //         style={{
    //           background: `url("${cachedUrl}") center no-repeat`,
    //           backgroundSize: `contain`,
    //         }}
    //       >
    //         <div style={{ width: getSize(size), height: getSize(size) }} />
    //       </BackgroundWrapper>
    //     </span>
    //   );
    // }
    if (hash && isValidAccountHash(hash)) {
        return (_jsx("span", __assign({ ref: ref }, props, { children: _jsx(BackgroundWrapper, __assign({ size: size, withBgColor: true }, { children: _jsx(IconHashWrapper, { children: _jsx(SvgIcon, { src: "assets/icons/ic-hash.svg", size: getSize(size) - 8 }) }) })) })));
    }
    if (isErc20 && !src) {
        return (_jsx("span", __assign({ ref: ref }, props, { children: _jsx(BackgroundWrapper, __assign({ size: size, withBgColor: true }, { children: _jsx(IconHashWrapper, { children: _jsx(SvgIcon, { src: "assets/icons/ic-erc20-avatar.svg", size: getSize(size) }) }) })) })));
    }
    return (_jsx("span", __assign({ ref: ref }, props, { children: _jsx(BackgroundWrapper, __assign({ size: size }, { children: _jsx(Identicon, __assign({ string: hash === null || hash === void 0 ? void 0 : hash.toLowerCase(), size: getSize(size) - getPadding(size), bg: "#fff" }, props)) })) })));
});
export default Avatar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sU0FBUyxNQUFNLGtCQUFrQixDQUFDO0FBQ3pDLGlEQUFpRDtBQUNqRCxPQUFPLE1BQU0sTUFBTSxtQkFBbUIsQ0FBQztBQUN2QyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUczQyxNQUFNLENBQUMsSUFBTSxrQkFBa0IsR0FBRyxVQUNoQyxXQUEyQjtJQUUzQixJQUFJLFdBQVcsSUFBSSxJQUFJLEVBQUU7UUFDdkIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQU0sZUFBZSxHQUFHLElBQUksTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDMUQsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2xELENBQUMsQ0FBQztBQVdGLElBQU0sZUFBZSxHQUFHLFVBQUMsSUFBcUM7SUFBckMscUJBQUEsRUFBQSxnQkFBcUM7SUFDNUQsT0FBQSxDQUFDO1FBQ0MsS0FBSyxFQUFFLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQztRQUNWLE1BQU0sRUFBRSxFQUFFO1FBQ1YsR0FBRyxFQUFFLEVBQUU7S0FDUixDQUFDLElBQUksQ0FBQyxDQUFDO0FBTFIsQ0FLUSxDQUFDO0FBRVgsSUFBTSxPQUFPLEdBQUcsVUFBQyxJQUFxQztJQUFyQyxxQkFBQSxFQUFBLGdCQUFxQztJQUNwRCxPQUFBLENBQUM7UUFDQyxLQUFLLEVBQUUsRUFBRTtRQUNULE9BQU8sRUFBRSxFQUFFO1FBQ1gsTUFBTSxFQUFFLEVBQUU7UUFDVixHQUFHLEVBQUUsR0FBRztLQUNULENBQUMsSUFBSSxDQUFDLENBQUM7QUFMUixDQUtRLENBQUM7QUFFWCxJQUFN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QUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUN0QyxFQUFFLEVBQUMsTUFBTSxJQUNMLEtBQUssRUFDVCxJQUNnQixJQUNmLENBQ1IsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBRUgsZUFBZSxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSWRlbnRpY29uIGZyb20gXCJyZWFjdC1pZGVudGljb25zXCI7XG4vLyBpbXBvcnQgU2tlbGV0b24gZnJvbSAncmVhY3QtbG9hZGluZy1za2VsZXRvbic7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSBcIi4uL3N2Zy1pY29uL3N2Zy1pY29uXCI7XG5pbXBvcnQge2dldEltYWdlUHJveHlVcmx9IGZyb20gXCIuLi8uLi91dGlscy9jYWNoZS1hc3NldFwiO1xuXG5leHBvcnQgY29uc3QgaXNWYWxpZEFjY291bnRIYXNoID0gKFxuICBhY2NvdW50SGFzaD86IHN0cmluZyB8IG51bGxcbik6IGFjY291bnRIYXNoIGlzIHN0cmluZyA9PiB7XG4gIGlmIChhY2NvdW50SGFzaCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgdmFsaWRIYXNoUmVnRXhwID0gbmV3IFJlZ0V4cChcIl4oWzAtOUEtRmEtZl0pezY0fSRcIik7XG4gIHJldHVybiB2YWxpZEhhc2hSZWdFeHAudGVzdChhY2NvdW50SGFzaC50cmltKCkpO1xufTtcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgaW50ZXJmYWNlIEF2YXRhclByb3BzIHtcbiAgaGFzaD86IHN0cmluZyB8IG51bGw7XG4gIHNyYz86IHN0cmluZyB8IG51bGw7XG4gIHNpemU/OiBcImRlZmF1bHRcIiB8IFwiYmlnXCIgfCBcIm1lZGl1bVwiIHwgXCJzbWFsbFwiO1xuICBsb2FkaW5nPzogYm9vbGVhbjtcbiAgaXNFcmMyMD86IGJvb2xlYW47XG59XG5cbmNvbnN0IGdldENvcm5lclJhZGl1cyA9IChzaXplOiBBdmF0YXJQcm9wc1tcInNpemVcIl0gPSBcImRlZmF1bHRcIikgPT5cbiAgKHtcbiAgICBzbWFsbDogMixcbiAgICBkZWZhdWx0OiAyLFxuICAgIG1lZGl1bTogMTIsXG4gICAgYmlnOiAxMixcbiAgfVtzaXplXSk7XG5cbmNvbnN0IGdldFNpemUgPSAoc2l6ZTogQXZhdGFyUHJvcHNbXCJzaXplXCJdID0gXCJkZWZhdWx0XCIpID0+XG4gICh7XG4gICAgc21hbGw6IDIwLFxuICAgIGRlZmF1bHQ6IDMyLFxuICAgIG1lZGl1bTogODAsXG4gICAgYmlnOiAxMjQsXG4gIH1bc2l6ZV0pO1xuXG5jb25zdCBnZXRCZ0NvbG9yID0gKHNpemU6IEF2YXRhclByb3BzW1wic2l6ZVwiXSA9IFwiZGVmYXVsdFwiKSA9PlxuICAoe1xuICAgIHNtYWxsOiBcImNvbnRlbnRUZXJ0aWFyeVwiLFxuICAgIGRlZmF1bHQ6IFwiY29udGVudFF1YXRlcm5hcnlcIixcbiAgICBtZWRpdW06IFwiY29udGVudFF1YXRlcm5hcnlcIixcbiAgICBiaWc6IFwiY29udGVudFF1YXRlcm5hcnlcIixcbiAgfVtzaXplXSk7XG5cbmNvbnN0IGdldFBhZGRpbmcgPSAoc2l6ZTogQXZhdGFyUHJvcHNbXCJzaXplXCJdID0gXCJkZWZhdWx0XCIpID0+XG4gICh7XG4gICAgc21hbGw6IDAsXG4gICAgZGVmYXVsdDogMCxcbiAgICBtZWRpdW06IDAsXG4gICAgYmlnOiAwLFxuICB9W3NpemVdKTtcblxuY29uc3QgZ2V0TWFyZ2luID0gKHNpemU6IEF2YXRhclByb3BzW1wic2l6ZVwiXSA9IFwiZGVmYXVsdFwiKSA9PlxuICAoe1xuICAgIHNtYWxsOiAwLFxuICAgIGRlZmF1bHQ6IDQsXG4gICAgbWVkaXVtOiA0LFxuICAgIGJpZzogMCxcbiAgfVtzaXplXSk7XG5cbmV4cG9ydCBjb25zdCBCYWNrZ3JvdW5kV3JhcHBlciA9IHN0eWxlZC5kaXY8e1xuICBzaXplOiBBdmF0YXJQcm9wc1tcInNpemVcIl07XG4gIHdpdGhCZ0NvbG9yPzogYm9vbGVhbjtcbn0+KCh7IHRoZW1lLCBzaXplLCB3aXRoQmdDb2xvciA9IGZhbHNlIH0pID0+ICh7XG4gIGJvcmRlclJhZGl1czogZ2V0Q29ybmVyUmFkaXVzKHNpemUpLFxuICBoZWlnaHQ6IGdldFNpemUoc2l6ZSksXG4gIHdpZHRoOiBnZXRTaXplKHNpemUpLFxuICBwYWRkaW5nOiBnZXRQYWRkaW5nKHNpemUpLFxuICBtYXJnaW46IGdldE1hcmdpbihzaXplKSxcbiAgYmFja2dyb3VuZENvbG9yOiB3aXRoQmdDb2xvclxuICAgID8gdGhlbWUuc3R5bGVndWlkZUNvbG9yc1tnZXRCZ0NvbG9yKHNpemUpXVxuICAgIDogXCJ0cmFuc3BhcmVudFwiLFxuICBcIiYgPiBjYW52YXNcIjoge1xuICAgIGJvcmRlclJhZGl1czogZ2V0Q29ybmVyUmFkaXVzKHNpemUpLFxuICB9LFxufSkpO1xuXG5jb25zdCBJY29uSGFzaFdyYXBwZXIgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRPbkZpbGwsXG4gIGhlaWdodDogXCIxMDAlXCIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbn0pKTtcblxudHlwZSBSZWYgPSBIVE1MU3BhbkVsZW1lbnQ7XG5cbmV4cG9ydCBjb25zdCBBdmF0YXIgPSBSZWFjdC5mb3J3YXJkUmVmPFJlZiwgQXZhdGFyUHJvcHM+KGZ1bmN0aW9uIEF2YXRhcihcbiAgeyBoYXNoLCBzcmMsIHNpemUgPSBcImRlZmF1bHRcIiwgbG9hZGluZywgaXNFcmMyMCwgLi4ucHJvcHMgfTogQXZhdGFyUHJvcHMsXG4gIHJlZlxuKSB7XG4gIGNvbnN0IFJFVElOQV9TQ0FMRSA9IDI7XG4gIGNvbnN0IENBQ0hFX1RUTCA9IFwiODY0MDBcIjtcblxuICAvLyBpZiAobG9hZGluZyB8fCAoIWhhc2ggJiYgIXNyYyAmJiAhaXNFcmMyMCkpIHtcbiAgLy8gICByZXR1cm4gKFxuICAvLyAgICAgPHNwYW4gcmVmPXtyZWZ9IHsuLi5wcm9wc30+XG4gIC8vICAgICAgIDxTa2VsZXRvblxuICAvLyAgICAgICAgIHN0eWxlPXt7XG4gIC8vICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXG4gIC8vICAgICAgICAgICB3aWR0aDogZ2V0U2l6ZShzaXplKSxcbiAgLy8gICAgICAgICAgIGZvbnRTaXplOiBgJHtnZXRTaXplKHNpemUpfXB4YCxcbiAgLy8gICAgICAgICAgIG1hcmdpbjogZ2V0TWFyZ2luKHNpemUpLFxuICAvLyAgICAgICAgIH19XG4gIC8vICAgICAgIC8+XG4gIC8vICAgICA8L3NwYW4+XG4gIC8vICAgKTtcbiAgLy8gfVxuXG4gIC8vIGlmIChzcmMpIHtcbiAgLy8gICBjb25zdCBjYWNoZWRVcmwgPSBnZXRJbWFnZVByb3h5VXJsKHNyYywge1xuICAvLyAgICAgdHRsOiBDQUNIRV9UVEwsXG4gIC8vICAgICB3aWR0aDogZ2V0U2l6ZShzaXplKSAqIFJFVElOQV9TQ0FMRSxcbiAgLy8gICB9KTtcbiAgLy8gICByZXR1cm4gKFxuICAvLyAgICAgPHNwYW4gcmVmPXtyZWZ9IHsuLi5wcm9wc30+XG4gIC8vICAgICAgIDxCYWNrZ3JvdW5kV3JhcHBlclxuICAvLyAgICAgICAgIHNpemU9e3NpemV9XG4gIC8vICAgICAgICAgc3R5bGU9e3tcbiAgLy8gICAgICAgICAgIGJhY2tncm91bmQ6IGB1cmwoXCIke2NhY2hlZFVybH1cIikgY2VudGVyIG5vLXJlcGVhdGAsXG4gIC8vICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogYGNvbnRhaW5gLFxuICAvLyAgICAgICAgIH19XG4gIC8vICAgICAgID5cbiAgLy8gICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBnZXRTaXplKHNpemUpLCBoZWlnaHQ6IGdldFNpemUoc2l6ZSkgfX0gLz5cbiAgLy8gICAgICAgPC9CYWNrZ3JvdW5kV3JhcHBlcj5cbiAgLy8gICAgIDwvc3Bhbj5cbiAgLy8gICApO1xuICAvLyB9XG4gIGlmIChoYXNoICYmIGlzVmFsaWRBY2NvdW50SGFzaChoYXNoKSkge1xuICAgIHJldHVybiAoXG4gICAgICA8c3BhbiByZWY9e3JlZn0gey4uLnByb3BzfT5cbiAgICAgICAgPEJhY2tncm91bmRXcmFwcGVyIHNpemU9e3NpemV9IHdpdGhCZ0NvbG9yPlxuICAgICAgICAgIDxJY29uSGFzaFdyYXBwZXI+XG4gICAgICAgICAgICA8U3ZnSWNvbiBzcmM9XCJhc3NldHMvaWNvbnMvaWMtaGFzaC5zdmdcIiBzaXplPXtnZXRTaXplKHNpemUpIC0gOH0gLz5cbiAgICAgICAgICA8L0ljb25IYXNoV3JhcHBlcj5cbiAgICAgICAgPC9CYWNrZ3JvdW5kV3JhcHBlcj5cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9XG5cbiAgaWYgKGlzRXJjMjAgJiYgIXNyYykge1xuICAgIHJldHVybiAoXG4gICAgICA8c3BhbiByZWY9e3JlZn0gey4uLnByb3BzfT5cbiAgICAgICAgPEJhY2tncm91bmRXcmFwcGVyIHNpemU9e3NpemV9IHdpdGhCZ0NvbG9yPlxuICAgICAgICAgIDxJY29uSGFzaFdyYXBwZXI+XG4gICAgICAgICAgICA8U3ZnSWNvblxuICAgICAgICAgICAgICBzcmM9XCJhc3NldHMvaWNvbnMvaWMtZXJjMjAtYXZhdGFyLnN2Z1wiXG4gICAgICAgICAgICAgIHNpemU9e2dldFNpemUoc2l6ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvSWNvbkhhc2hXcmFwcGVyPlxuICAgICAgICA8L0JhY2tncm91bmRXcmFwcGVyPlxuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzcGFuIHJlZj17cmVmfSB7Li4ucHJvcHN9PlxuICAgICAgPEJhY2tncm91bmRXcmFwcGVyIHNpemU9e3NpemV9PlxuICAgICAgICA8SWRlbnRpY29uXG4gICAgICAgICAgc3RyaW5nPXtoYXNoPy50b0xvd2VyQ2FzZSgpfVxuICAgICAgICAgIHNpemU9e2dldFNpemUoc2l6ZSkgLSBnZXRQYWRkaW5nKHNpemUpfVxuICAgICAgICAgIGJnPVwiI2ZmZlwiXG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAvPlxuICAgICAgPC9CYWNrZ3JvdW5kV3JhcHBlcj5cbiAgICA8L3NwYW4+XG4gICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyO1xuIl19