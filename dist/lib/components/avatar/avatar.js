import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import Identicon from "react-identicons";
// import Skeleton from 'react-loading-skeleton';
import styled from "styled-components";
import SvgIcon from "../svg-icon/svg-icon";
import { getImageProxyUrl } from "../../utils/cache-asset";
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
    if (src) {
        var cachedUrl = getImageProxyUrl(src, {
            ttl: CACHE_TTL,
            width: getSize(size) * RETINA_SCALE,
        });
        return (_jsx("span", __assign({ ref: ref }, props, { children: _jsx(BackgroundWrapper, __assign({ size: size, style: {
                    background: "url(\"".concat(cachedUrl, "\") center no-repeat"),
                    backgroundSize: "contain",
                } }, { children: _jsx("div", { style: { width: getSize(size), height: getSize(size) } }) })) })));
    }
    if (hash && isValidAccountHash(hash)) {
        return (_jsx("span", __assign({ ref: ref }, props, { children: _jsx(BackgroundWrapper, __assign({ size: size, withBgColor: true }, { children: _jsx(IconHashWrapper, { children: _jsx(SvgIcon, { src: "assets/icons/ic-hash.svg", size: getSize(size) - 8 }) }) })) })));
    }
    if (isErc20 && !src) {
        return (_jsx("span", __assign({ ref: ref }, props, { children: _jsx(BackgroundWrapper, __assign({ size: size, withBgColor: true }, { children: _jsx(IconHashWrapper, { children: _jsx(SvgIcon, { src: "assets/icons/ic-erc20-avatar.svg", size: getSize(size) }) }) })) })));
    }
    return (_jsx("span", __assign({ ref: ref }, props, { children: _jsx(BackgroundWrapper, __assign({ size: size }, { children: _jsx(Identicon, __assign({ string: hash === null || hash === void 0 ? void 0 : hash.toLowerCase(), size: getSize(size) - getPadding(size), bg: "#fff" }, props)) })) })));
});
export default Avatar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sU0FBUyxNQUFNLGtCQUFrQixDQUFDO0FBQ3pDLGlEQUFpRDtBQUNqRCxPQUFPLE1BQU0sTUFBTSxtQkFBbUIsQ0FBQztBQUN2QyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUV6RCxNQUFNLENBQUMsSUFBTSxrQkFBa0IsR0FBRyxVQUNoQyxXQUEyQjtJQUUzQixJQUFJLFdBQVcsSUFBSSxJQUFJLEVBQUU7UUFDdkIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQU0sZUFBZSxHQUFHLElBQUksTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDMUQsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2xELENBQUMsQ0FBQztBQVdGLElBQU0sZUFBZSxHQUFHLFVBQUMsSUFBcUM7SUFBckMscUJBQUEsRUFBQSxnQkFBcUM7SUFDNUQsT0FBQSxDQUFDO1FBQ0MsS0FBSyxFQUFFLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQztRQUNWLE1BQU0sRUFBRSxFQUFFO1FBQ1YsR0FBRyxFQUFFLEVBQUU7S0FDUixDQUFDLElBQUksQ0FBQyxDQUFDO0FBTFIsQ0FLUSxDQUFDO0FBRVgsSUFBTSxPQUFPLEdBQUcsVUFBQyxJQUFxQztJQUFyQyxxQkFBQSxFQUFBLGdCQUFxQztJQUNwRCxPQUFBLENBQUM7UUFDQyxLQUFLLEVBQUUsRUFBRTtRQUNULE9BQU8sRUFBRSxFQUFFO1FBQ1gsTUFBTSxFQUFFLEVBQUU7UUFDVixHQUFHLEVBQUUsR0FBRztLQUNU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TixHQUFHLEVBQUMsa0NBQWtDLEVBQ3RDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQ25CLEdBQ2MsSUFDQSxJQUNmLENBQ1IsQ0FBQztLQUNIO0lBRUQsT0FBTyxDQUNMLHdCQUFNLEdBQUcsRUFBRSxHQUFHLElBQU0sS0FBSyxjQUN2QixLQUFDLGlCQUFpQixhQUFDLElBQUksRUFBRSxJQUFJLGdCQUMzQixLQUFDLFNBQVMsYUFDUixNQUFNLEVBQUUsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLFdBQVcsRUFBRSxFQUMzQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFDdEMsRUFBRSxFQUFDLE1BQU0sSUFDTCxLQUFLLEVBQ1QsSUFDZ0IsSUFDZixDQUNSLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQztBQUVILGVBQWUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IElkZW50aWNvbiBmcm9tIFwicmVhY3QtaWRlbnRpY29uc1wiO1xuLy8gaW1wb3J0IFNrZWxldG9uIGZyb20gJ3JlYWN0LWxvYWRpbmctc2tlbGV0b24nO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBTdmdJY29uIGZyb20gXCIuLi9zdmctaWNvbi9zdmctaWNvblwiO1xuaW1wb3J0IHtnZXRJbWFnZVByb3h5VXJsfSBmcm9tIFwiLi4vLi4vdXRpbHMvY2FjaGUtYXNzZXRcIjtcblxuZXhwb3J0IGNvbnN0IGlzVmFsaWRBY2NvdW50SGFzaCA9IChcbiAgYWNjb3VudEhhc2g/OiBzdHJpbmcgfCBudWxsXG4pOiBhY2NvdW50SGFzaCBpcyBzdHJpbmcgPT4ge1xuICBpZiAoYWNjb3VudEhhc2ggPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHZhbGlkSGFzaFJlZ0V4cCA9IG5ldyBSZWdFeHAoXCJeKFswLTlBLUZhLWZdKXs2NH0kXCIpO1xuICByZXR1cm4gdmFsaWRIYXNoUmVnRXhwLnRlc3QoYWNjb3VudEhhc2gudHJpbSgpKTtcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBBdmF0YXJQcm9wcyB7XG4gIGhhc2g/OiBzdHJpbmcgfCBudWxsO1xuICBzcmM/OiBzdHJpbmcgfCBudWxsO1xuICBzaXplPzogXCJkZWZhdWx0XCIgfCBcImJpZ1wiIHwgXCJtZWRpdW1cIiB8IFwic21hbGxcIjtcbiAgbG9hZGluZz86IGJvb2xlYW47XG4gIGlzRXJjMjA/OiBib29sZWFuO1xufVxuXG5jb25zdCBnZXRDb3JuZXJSYWRpdXMgPSAoc2l6ZTogQXZhdGFyUHJvcHNbXCJzaXplXCJdID0gXCJkZWZhdWx0XCIpID0+XG4gICh7XG4gICAgc21hbGw6IDIsXG4gICAgZGVmYXVsdDogMixcbiAgICBtZWRpdW06IDEyLFxuICAgIGJpZzogMTIsXG4gIH1bc2l6ZV0pO1xuXG5jb25zdCBnZXRTaXplID0gKHNpemU6IEF2YXRhclByb3BzW1wic2l6ZVwiXSA9IFwiZGVmYXVsdFwiKSA9PlxuICAoe1xuICAgIHNtYWxsOiAyMCxcbiAgICBkZWZhdWx0OiAzMixcbiAgICBtZWRpdW06IDgwLFxuICAgIGJpZzogMTI0LFxuICB9W3NpemVdKTtcblxuY29uc3QgZ2V0QmdDb2xvciA9IChzaXplOiBBdmF0YXJQcm9wc1tcInNpemVcIl0gPSBcImRlZmF1bHRcIikgPT5cbiAgKHtcbiAgICBzbWFsbDogXCJjb250ZW50VGVydGlhcnlcIixcbiAgICBkZWZhdWx0OiBcImNvbnRlbnRRdWF0ZXJuYXJ5XCIsXG4gICAgbWVkaXVtOiBcImNvbnRlbnRRdWF0ZXJuYXJ5XCIsXG4gICAgYmlnOiBcImNvbnRlbnRRdWF0ZXJuYXJ5XCIsXG4gIH1bc2l6ZV0pO1xuXG5jb25zdCBnZXRQYWRkaW5nID0gKHNpemU6IEF2YXRhclByb3BzW1wic2l6ZVwiXSA9IFwiZGVmYXVsdFwiKSA9PlxuICAoe1xuICAgIHNtYWxsOiAwLFxuICAgIGRlZmF1bHQ6IDAsXG4gICAgbWVkaXVtOiAwLFxuICAgIGJpZzogMCxcbiAgfVtzaXplXSk7XG5cbmNvbnN0IGdldE1hcmdpbiA9IChzaXplOiBBdmF0YXJQcm9wc1tcInNpemVcIl0gPSBcImRlZmF1bHRcIikgPT5cbiAgKHtcbiAgICBzbWFsbDogMCxcbiAgICBkZWZhdWx0OiA0LFxuICAgIG1lZGl1bTogNCxcbiAgICBiaWc6IDAsXG4gIH1bc2l6ZV0pO1xuXG5leHBvcnQgY29uc3QgQmFja2dyb3VuZFdyYXBwZXIgPSBzdHlsZWQuZGl2PHtcbiAgc2l6ZTogQXZhdGFyUHJvcHNbXCJzaXplXCJdO1xuICB3aXRoQmdDb2xvcj86IGJvb2xlYW47XG59PigoeyB0aGVtZSwgc2l6ZSwgd2l0aEJnQ29sb3IgPSBmYWxzZSB9KSA9PiAoe1xuICBib3JkZXJSYWRpdXM6IGdldENvcm5lclJhZGl1cyhzaXplKSxcbiAgaGVpZ2h0OiBnZXRTaXplKHNpemUpLFxuICB3aWR0aDogZ2V0U2l6ZShzaXplKSxcbiAgcGFkZGluZzogZ2V0UGFkZGluZyhzaXplKSxcbiAgbWFyZ2luOiBnZXRNYXJnaW4oc2l6ZSksXG4gIGJhY2tncm91bmRDb2xvcjogd2l0aEJnQ29sb3JcbiAgICA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnNbZ2V0QmdDb2xvcihzaXplKV1cbiAgICA6IFwidHJhbnNwYXJlbnRcIixcbiAgXCImID4gY2FudmFzXCI6IHtcbiAgICBib3JkZXJSYWRpdXM6IGdldENvcm5lclJhZGl1cyhzaXplKSxcbiAgfSxcbn0pKTtcblxuY29uc3QgSWNvbkhhc2hXcmFwcGVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50T25GaWxsLFxuICBoZWlnaHQ6IFwiMTAwJVwiLFxuICBkaXNwbGF5OiBcImZsZXhcIixcbiAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG59KSk7XG5cbnR5cGUgUmVmID0gSFRNTFNwYW5FbGVtZW50O1xuXG5leHBvcnQgY29uc3QgQXZhdGFyID0gUmVhY3QuZm9yd2FyZFJlZjxSZWYsIEF2YXRhclByb3BzPihmdW5jdGlvbiBBdmF0YXIoXG4gIHsgaGFzaCwgc3JjLCBzaXplID0gXCJkZWZhdWx0XCIsIGxvYWRpbmcsIGlzRXJjMjAsIC4uLnByb3BzIH06IEF2YXRhclByb3BzLFxuICByZWZcbikge1xuICBjb25zdCBSRVRJTkFfU0NBTEUgPSAyO1xuICBjb25zdCBDQUNIRV9UVEwgPSBcIjg2NDAwXCI7XG5cbiAgLy8gaWYgKGxvYWRpbmcgfHwgKCFoYXNoICYmICFzcmMgJiYgIWlzRXJjMjApKSB7XG4gIC8vICAgcmV0dXJuIChcbiAgLy8gICAgIDxzcGFuIHJlZj17cmVmfSB7Li4ucHJvcHN9PlxuICAvLyAgICAgICA8U2tlbGV0b25cbiAgLy8gICAgICAgICBzdHlsZT17e1xuICAvLyAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxuICAvLyAgICAgICAgICAgd2lkdGg6IGdldFNpemUoc2l6ZSksXG4gIC8vICAgICAgICAgICBmb250U2l6ZTogYCR7Z2V0U2l6ZShzaXplKX1weGAsXG4gIC8vICAgICAgICAgICBtYXJnaW46IGdldE1hcmdpbihzaXplKSxcbiAgLy8gICAgICAgICB9fVxuICAvLyAgICAgICAvPlxuICAvLyAgICAgPC9zcGFuPlxuICAvLyAgICk7XG4gIC8vIH1cblxuICBpZiAoc3JjKSB7XG4gICAgY29uc3QgY2FjaGVkVXJsID0gZ2V0SW1hZ2VQcm94eVVybChzcmMsIHtcbiAgICAgIHR0bDogQ0FDSEVfVFRMLFxuICAgICAgd2lkdGg6IGdldFNpemUoc2l6ZSkgKiBSRVRJTkFfU0NBTEUsXG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIHJlZj17cmVmfSB7Li4ucHJvcHN9PlxuICAgICAgICA8QmFja2dyb3VuZFdyYXBwZXJcbiAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBgdXJsKFwiJHtjYWNoZWRVcmx9XCIpIGNlbnRlciBuby1yZXBlYXRgLFxuICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IGBjb250YWluYCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogZ2V0U2l6ZShzaXplKSwgaGVpZ2h0OiBnZXRTaXplKHNpemUpIH19IC8+XG4gICAgICAgIDwvQmFja2dyb3VuZFdyYXBwZXI+XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxuICBpZiAoaGFzaCAmJiBpc1ZhbGlkQWNjb3VudEhhc2goaGFzaCkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4gcmVmPXtyZWZ9IHsuLi5wcm9wc30+XG4gICAgICAgIDxCYWNrZ3JvdW5kV3JhcHBlciBzaXplPXtzaXplfSB3aXRoQmdDb2xvcj5cbiAgICAgICAgICA8SWNvbkhhc2hXcmFwcGVyPlxuICAgICAgICAgICAgPFN2Z0ljb24gc3JjPVwiYXNzZXRzL2ljb25zL2ljLWhhc2guc3ZnXCIgc2l6ZT17Z2V0U2l6ZShzaXplKSAtIDh9IC8+XG4gICAgICAgICAgPC9JY29uSGFzaFdyYXBwZXI+XG4gICAgICAgIDwvQmFja2dyb3VuZFdyYXBwZXI+XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChpc0VyYzIwICYmICFzcmMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4gcmVmPXtyZWZ9IHsuLi5wcm9wc30+XG4gICAgICAgIDxCYWNrZ3JvdW5kV3JhcHBlciBzaXplPXtzaXplfSB3aXRoQmdDb2xvcj5cbiAgICAgICAgICA8SWNvbkhhc2hXcmFwcGVyPlxuICAgICAgICAgICAgPFN2Z0ljb25cbiAgICAgICAgICAgICAgc3JjPVwiYXNzZXRzL2ljb25zL2ljLWVyYzIwLWF2YXRhci5zdmdcIlxuICAgICAgICAgICAgICBzaXplPXtnZXRTaXplKHNpemUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0ljb25IYXNoV3JhcHBlcj5cbiAgICAgICAgPC9CYWNrZ3JvdW5kV3JhcHBlcj5cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c3BhbiByZWY9e3JlZn0gey4uLnByb3BzfT5cbiAgICAgIDxCYWNrZ3JvdW5kV3JhcHBlciBzaXplPXtzaXplfT5cbiAgICAgICAgPElkZW50aWNvblxuICAgICAgICAgIHN0cmluZz17aGFzaD8udG9Mb3dlckNhc2UoKX1cbiAgICAgICAgICBzaXplPXtnZXRTaXplKHNpemUpIC0gZ2V0UGFkZGluZyhzaXplKX1cbiAgICAgICAgICBiZz1cIiNmZmZcIlxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgLz5cbiAgICAgIDwvQmFja2dyb3VuZFdyYXBwZXI+XG4gICAgPC9zcGFuPlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEF2YXRhcjtcbiJdfQ==