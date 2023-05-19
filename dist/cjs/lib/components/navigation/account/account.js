"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var flex_row_1 = tslib_1.__importDefault(require("../../flex-row/flex-row"));
var formatters_1 = require("../../../utils/formatters");
var avatar_1 = tslib_1.__importDefault(require("../../avatar/avatar"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var body_text_1 = tslib_1.__importDefault(require("../../body-text/body-text"));
var StyledBodyText = (0, styled_components_1.default)(body_text_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.styleguideColors.contentTertiary,
    });
});
var Account = function (_a) {
    var hash = _a.hash, logo = _a.logo;
    return ((0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ itemsSpacing: 8, align: "center" }, { children: [logo ? ((0, jsx_runtime_1.jsx)(avatar_1.default, { src: logo, size: "small" })) : ((0, jsx_runtime_1.jsx)(avatar_1.default, { hash: hash, size: "small" })), (0, jsx_runtime_1.jsx)(StyledBodyText, tslib_1.__assign({ size: 2, monotype: true }, { children: (0, formatters_1.formatHash)(hash) }))] })));
};
exports.Account = Account;
exports.default = exports.Account;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2FjY291bnQvYWNjb3VudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2RUFBOEM7QUFDOUMsd0RBQXVEO0FBQ3ZELHVFQUF5QztBQUN6QyxnRkFBdUM7QUFDdkMsZ0ZBQWlEO0FBRWpELElBQU0sY0FBYyxHQUFHLElBQUEsMkJBQU0sRUFBQyxtQkFBUSxDQUFDLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ3RELEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtLQUM5QyxDQUFDO0FBRnFELENBRXJELENBQUMsQ0FBQztBQU9HLElBQU0sT0FBTyxHQUFHLFVBQUMsRUFBNEI7UUFBMUIsSUFBSSxVQUFBLEVBQUUsSUFBSSxVQUFBO0lBQ2xDLE9BQU8sQ0FDTCx3QkFBQyxrQkFBTyxxQkFBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBQyxRQUFRLGlCQUNyQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ04sdUJBQUMsZ0JBQU0sSUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyxPQUFPLEdBQUcsQ0FDbkMsQ0FBQyxDQUFDLENBQUMsQ0FDRix1QkFBQyxnQkFBTSxJQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLE9BQU8sR0FBRyxDQUNwQyxFQUNELHVCQUFDLGNBQWMscUJBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxRQUFRLHNCQUM5QixJQUFBLHVCQUFVLEVBQUMsSUFBSSxDQUFDLElBQ0YsS0FDVCxDQUNYLENBQUM7QUFDSixDQUFDLENBQUM7QUFiVyxRQUFBLE9BQU8sV0FhbEI7QUFFRixrQkFBZSxlQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmxleFJvdyBmcm9tIFwiLi4vLi4vZmxleC1yb3cvZmxleC1yb3dcIjtcbmltcG9ydCB7IGZvcm1hdEhhc2ggfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZm9ybWF0dGVyc1wiO1xuaW1wb3J0IEF2YXRhciBmcm9tIFwiLi4vLi4vYXZhdGFyL2F2YXRhclwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBCb2R5VGV4dCBmcm9tIFwiLi4vLi4vYm9keS10ZXh0L2JvZHktdGV4dFwiO1xuXG5jb25zdCBTdHlsZWRCb2R5VGV4dCA9IHN0eWxlZChCb2R5VGV4dCkoKHsgdGhlbWUgfSkgPT4gKHtcbiAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxufSkpO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjY291bnRQcm9wcyB7XG4gIGhhc2g6IHN0cmluZztcbiAgbG9nbz86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEFjY291bnQgPSAoeyBoYXNoLCBsb2dvIH06IEFjY291bnRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGbGV4Um93IGl0ZW1zU3BhY2luZz17OH0gYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgIHtsb2dvID8gKFxuICAgICAgICA8QXZhdGFyIHNyYz17bG9nb30gc2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxBdmF0YXIgaGFzaD17aGFzaH0gc2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICl9XG4gICAgICA8U3R5bGVkQm9keVRleHQgc2l6ZT17Mn0gbW9ub3R5cGU+XG4gICAgICAgIHtmb3JtYXRIYXNoKGhhc2gpfVxuICAgICAgPC9TdHlsZWRCb2R5VGV4dD5cbiAgICA8L0ZsZXhSb3c+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50O1xuIl19