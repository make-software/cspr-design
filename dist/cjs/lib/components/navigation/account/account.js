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
        fontSize: fontSize,
    });
});
var Account = function (_a) {
    var hash = _a.hash, logo = _a.logo, fontSize = _a.fontSize;
    return ((0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ itemsSpacing: 8, align: "center" }, { children: [logo ? ((0, jsx_runtime_1.jsx)(avatar_1.default, { src: logo, size: "small" })) : ((0, jsx_runtime_1.jsx)(avatar_1.default, { hash: hash, size: "small" })), (0, jsx_runtime_1.jsx)(StyledBodyText, tslib_1.__assign({ size: 2, monotype: true, fontSize: fontSize }, { children: (0, formatters_1.formatHash)(hash) }))] })));
};
exports.Account = Account;
exports.default = exports.Account;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2FjY291bnQvYWNjb3VudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2RUFBOEM7QUFDOUMsd0RBQXVEO0FBQ3ZELHVFQUF5QztBQUN6QyxnRkFBdUM7QUFDdkMsZ0ZBQWlEO0FBRWpELElBQU0sY0FBYyxHQUFHLElBQUEsMkJBQU0sRUFBQyxtQkFBUSxDQUFDLENBQ3JDLFVBQUMsRUFBbUI7UUFBakIsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ3hCLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtRQUM3QyxRQUFRLEVBQUUsUUFBUTtLQUNuQixDQUFDO0FBSHVCLENBR3ZCLENBQ0gsQ0FBQztBQVFLLElBQU0sT0FBTyxHQUFHLFVBQUMsRUFBc0M7UUFBcEMsSUFBSSxVQUFBLEVBQUUsSUFBSSxVQUFBLEVBQUUsUUFBUSxjQUFBO0lBQzVDLE9BQU8sQ0FDTCx3QkFBQyxrQkFBTyxxQkFBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBQyxRQUFRLGlCQUNyQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ04sdUJBQUMsZ0JBQU0sSUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyxPQUFPLEdBQUcsQ0FDbkMsQ0FBQyxDQUFDLENBQUMsQ0FDRix1QkFBQyxnQkFBTSxJQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLE9BQU8sR0FBRyxDQUNwQyxFQUNELHVCQUFDLGNBQWMscUJBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxRQUFRLFFBQUMsUUFBUSxFQUFFLFFBQVEsZ0JBQ2pELElBQUEsdUJBQVUsRUFBQyxJQUFJLENBQUMsSUFDRixLQUNULENBQ1gsQ0FBQztBQUNKLENBQUMsQ0FBQztBQWJXLFFBQUEsT0FBTyxXQWFsQjtBQUVGLGtCQUFlLGVBQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGbGV4Um93IGZyb20gJy4uLy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCB7IGZvcm1hdEhhc2ggfSBmcm9tICcuLi8uLi8uLi91dGlscy9mb3JtYXR0ZXJzJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vYXZhdGFyL2F2YXRhcic7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBCb2R5VGV4dCBmcm9tICcuLi8uLi9ib2R5LXRleHQvYm9keS10ZXh0JztcblxuY29uc3QgU3R5bGVkQm9keVRleHQgPSBzdHlsZWQoQm9keVRleHQpPHsgZm9udFNpemU/OiBzdHJpbmcgfT4oXG4gICh7IHRoZW1lLCBmb250U2l6ZSB9KSA9PiAoe1xuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcbiAgICBmb250U2l6ZTogZm9udFNpemUsXG4gIH0pXG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjY291bnRQcm9wcyB7XG4gIGhhc2g6IHN0cmluZztcbiAgbG9nbz86IHN0cmluZztcbiAgZm9udFNpemU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBBY2NvdW50ID0gKHsgaGFzaCwgbG9nbywgZm9udFNpemUgfTogQWNjb3VudFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZsZXhSb3cgaXRlbXNTcGFjaW5nPXs4fSBhbGlnbj1cImNlbnRlclwiPlxuICAgICAge2xvZ28gPyAoXG4gICAgICAgIDxBdmF0YXIgc3JjPXtsb2dvfSBzaXplPVwic21hbGxcIiAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPEF2YXRhciBoYXNoPXtoYXNofSBzaXplPVwic21hbGxcIiAvPlxuICAgICAgKX1cbiAgICAgIDxTdHlsZWRCb2R5VGV4dCBzaXplPXsyfSBtb25vdHlwZSBmb250U2l6ZT17Zm9udFNpemV9PlxuICAgICAgICB7Zm9ybWF0SGFzaChoYXNoKX1cbiAgICAgIDwvU3R5bGVkQm9keVRleHQ+XG4gICAgPC9GbGV4Um93PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudDtcbiJdfQ==