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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2FjY291bnQvYWNjb3VudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2RUFBOEM7QUFDOUMsd0RBQXVEO0FBQ3ZELHVFQUF5QztBQUN6QyxnRkFBdUM7QUFDdkMsZ0ZBQWlEO0FBRWpELElBQU0sY0FBYyxHQUFHLElBQUEsMkJBQU0sRUFBQyxtQkFBUSxDQUFDLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ3RELEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtLQUM5QyxDQUFDO0FBRnFELENBRXJELENBQUMsQ0FBQztBQU9HLElBQU0sT0FBTyxHQUFHLFVBQUMsRUFBNEI7UUFBMUIsSUFBSSxVQUFBLEVBQUUsSUFBSSxVQUFBO0lBQ2xDLE9BQU8sQ0FDTCx3QkFBQyxrQkFBTyxxQkFBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBQyxRQUFRLGlCQUNyQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ04sdUJBQUMsZ0JBQU0sSUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyxPQUFPLEdBQUcsQ0FDbkMsQ0FBQyxDQUFDLENBQUMsQ0FDRix1QkFBQyxnQkFBTSxJQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLE9BQU8sR0FBRyxDQUNwQyxFQUNELHVCQUFDLGNBQWMscUJBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxRQUFRLHNCQUM5QixJQUFBLHVCQUFVLEVBQUMsSUFBSSxDQUFDLElBQ0YsS0FDVCxDQUNYLENBQUM7QUFDSixDQUFDLENBQUM7QUFiVyxRQUFBLE9BQU8sV0FhbEI7QUFFRixrQkFBZSxlQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmxleFJvdyBmcm9tIFwiLi4vLi4vZmxleC1yb3cvZmxleC1yb3dcIjtcclxuaW1wb3J0IHsgZm9ybWF0SGFzaCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9mb3JtYXR0ZXJzXCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIi4uLy4uL2F2YXRhci9hdmF0YXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IEJvZHlUZXh0IGZyb20gXCIuLi8uLi9ib2R5LXRleHQvYm9keS10ZXh0XCI7XHJcblxyXG5jb25zdCBTdHlsZWRCb2R5VGV4dCA9IHN0eWxlZChCb2R5VGV4dCkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWNjb3VudFByb3BzIHtcclxuICBoYXNoOiBzdHJpbmc7XHJcbiAgbG9nbz86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFjY291bnQgPSAoeyBoYXNoLCBsb2dvIH06IEFjY291bnRQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleFJvdyBpdGVtc1NwYWNpbmc9ezh9IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgIHtsb2dvID8gKFxyXG4gICAgICAgIDxBdmF0YXIgc3JjPXtsb2dvfSBzaXplPVwic21hbGxcIiAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxBdmF0YXIgaGFzaD17aGFzaH0gc2l6ZT1cInNtYWxsXCIgLz5cclxuICAgICAgKX1cclxuICAgICAgPFN0eWxlZEJvZHlUZXh0IHNpemU9ezJ9IG1vbm90eXBlPlxyXG4gICAgICAgIHtmb3JtYXRIYXNoKGhhc2gpfVxyXG4gICAgICA8L1N0eWxlZEJvZHlUZXh0PlxyXG4gICAgPC9GbGV4Um93PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50O1xyXG4iXX0=