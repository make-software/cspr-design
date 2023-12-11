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
    var theme = _a.theme, fontSize = _a.fontSize;
    return ({
        color: theme.styleguideColors.contentTertiary,
        fontSize: fontSize ? fontSize : '13px',
    });
});
var Account = function (_a) {
    var hash = _a.hash, logo = _a.logo, fontSize = _a.fontSize;
    return ((0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ itemsSpacing: 8, align: "center" }, { children: [logo ? ((0, jsx_runtime_1.jsx)(avatar_1.default, { src: logo, size: "small" })) : ((0, jsx_runtime_1.jsx)(avatar_1.default, { hash: hash, size: "small" })), (0, jsx_runtime_1.jsx)(StyledBodyText, tslib_1.__assign({ size: 2, monotype: true, fontSize: fontSize }, { children: (0, formatters_1.formatHash)(hash) }))] })));
};
exports.Account = Account;
exports.default = exports.Account;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2FjY291bnQvYWNjb3VudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2RUFBOEM7QUFDOUMsd0RBQXVEO0FBQ3ZELHVFQUF5QztBQUN6QyxnRkFBdUM7QUFDdkMsZ0ZBQWlEO0FBRWpELElBQU0sY0FBYyxHQUFHLElBQUEsMkJBQU0sRUFBQyxtQkFBUSxDQUFDLENBQ3JDLFVBQUMsRUFBbUI7UUFBakIsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ3hCLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtRQUM3QyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU07S0FDdkMsQ0FBQztBQUh1QixDQUd2QixDQUNILENBQUM7QUFRSyxJQUFNLE9BQU8sR0FBRyxVQUFDLEVBQXNDO1FBQXBDLElBQUksVUFBQSxFQUFFLElBQUksVUFBQSxFQUFFLFFBQVEsY0FBQTtJQUM1QyxPQUFPLENBQ0wsd0JBQUMsa0JBQU8scUJBQUMsWUFBWSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUMsUUFBUSxpQkFDckMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNOLHVCQUFDLGdCQUFNLElBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsT0FBTyxHQUFHLENBQ25DLENBQUMsQ0FBQyxDQUFDLENBQ0YsdUJBQUMsZ0JBQU0sSUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyxPQUFPLEdBQUcsQ0FDcEMsRUFDRCx1QkFBQyxjQUFjLHFCQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsUUFBUSxRQUFDLFFBQVEsRUFBRSxRQUFRLGdCQUNqRCxJQUFBLHVCQUFVLEVBQUMsSUFBSSxDQUFDLElBQ0YsS0FDVCxDQUNYLENBQUM7QUFDSixDQUFDLENBQUM7QUFiVyxRQUFBLE9BQU8sV0FhbEI7QUFFRixrQkFBZSxlQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmxleFJvdyBmcm9tICcuLi8uLi9mbGV4LXJvdy9mbGV4LXJvdyc7XG5pbXBvcnQgeyBmb3JtYXRIYXNoIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZm9ybWF0dGVycyc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uLy4uL2F2YXRhci9hdmF0YXInO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQm9keVRleHQgZnJvbSAnLi4vLi4vYm9keS10ZXh0L2JvZHktdGV4dCc7XG5cbmNvbnN0IFN0eWxlZEJvZHlUZXh0ID0gc3R5bGVkKEJvZHlUZXh0KTx7IGZvbnRTaXplPzogc3RyaW5nIH0+KFxuICAoeyB0aGVtZSwgZm9udFNpemUgfSkgPT4gKHtcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXG4gICAgZm9udFNpemU6IGZvbnRTaXplID8gZm9udFNpemUgOiAnMTNweCcsXG4gIH0pXG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjY291bnRQcm9wcyB7XG4gIGhhc2g6IHN0cmluZztcbiAgbG9nbz86IHN0cmluZztcbiAgZm9udFNpemU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBBY2NvdW50ID0gKHsgaGFzaCwgbG9nbywgZm9udFNpemUgfTogQWNjb3VudFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZsZXhSb3cgaXRlbXNTcGFjaW5nPXs4fSBhbGlnbj1cImNlbnRlclwiPlxuICAgICAge2xvZ28gPyAoXG4gICAgICAgIDxBdmF0YXIgc3JjPXtsb2dvfSBzaXplPVwic21hbGxcIiAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPEF2YXRhciBoYXNoPXtoYXNofSBzaXplPVwic21hbGxcIiAvPlxuICAgICAgKX1cbiAgICAgIDxTdHlsZWRCb2R5VGV4dCBzaXplPXsyfSBtb25vdHlwZSBmb250U2l6ZT17Zm9udFNpemV9PlxuICAgICAgICB7Zm9ybWF0SGFzaChoYXNoKX1cbiAgICAgIDwvU3R5bGVkQm9keVRleHQ+XG4gICAgPC9GbGV4Um93PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudDtcbiJdfQ==