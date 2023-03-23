"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var flex_row_1 = tslib_1.__importDefault(require("../../flex-row/flex-row"));
var subtitle_text_1 = tslib_1.__importDefault(require("../../subtitle-text/subtitle-text"));
var formatters_1 = require("../../../utils/formatters");
var avatar_1 = tslib_1.__importDefault(require("../../avatar/avatar"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSubtitleText = (0, styled_components_1.default)(subtitle_text_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.styleguideColors.contentTertiary,
    });
});
var Account = function (_a) {
    var hash = _a.hash, logo = _a.logo;
    return ((0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ itemsSpacing: 8, align: "center" }, { children: [logo ? ((0, jsx_runtime_1.jsx)(avatar_1.default, { src: logo, size: "small" })) : ((0, jsx_runtime_1.jsx)(avatar_1.default, { hash: hash, size: "small" })), (0, jsx_runtime_1.jsx)(StyledSubtitleText, tslib_1.__assign({ size: 2, monotype: true }, { children: (0, formatters_1.formatHash)(hash) }))] })));
};
exports.Account = Account;
exports.default = exports.Account;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2FjY291bnQvYWNjb3VudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2RUFBOEM7QUFDOUMsNEZBQTZEO0FBQzdELHdEQUF1RDtBQUN2RCx1RUFBeUM7QUFDekMsZ0ZBQXVDO0FBRXZDLElBQU0sa0JBQWtCLEdBQUcsSUFBQSwyQkFBTSxFQUFDLHVCQUFZLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDOUQsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlO0tBQzlDLENBQUM7QUFGNkQsQ0FFN0QsQ0FBQyxDQUFDO0FBT0csSUFBTSxPQUFPLEdBQUcsVUFBQyxFQUE0QjtRQUExQixJQUFJLFVBQUEsRUFBRSxJQUFJLFVBQUE7SUFDbEMsT0FBTyxDQUNMLHdCQUFDLGtCQUFPLHFCQUFDLFlBQVksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFDLFFBQVEsaUJBQ3JDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDTix1QkFBQyxnQkFBTSxJQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLE9BQU8sR0FBRyxDQUNuQyxDQUFDLENBQUMsQ0FBQyxDQUNGLHVCQUFDLGdCQUFNLElBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsT0FBTyxHQUFHLENBQ3BDLEVBQ0QsdUJBQUMsa0JBQWtCLHFCQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsUUFBUSxzQkFDbEMsSUFBQSx1QkFBVSxFQUFDLElBQUksQ0FBQyxJQUNFLEtBQ2IsQ0FDWCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBYlcsUUFBQSxPQUFPLFdBYWxCO0FBRUYsa0JBQWUsZUFBTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZsZXhSb3cgZnJvbSBcIi4uLy4uL2ZsZXgtcm93L2ZsZXgtcm93XCI7XG5pbXBvcnQgU3VidGl0bGVUZXh0IGZyb20gXCIuLi8uLi9zdWJ0aXRsZS10ZXh0L3N1YnRpdGxlLXRleHRcIjtcbmltcG9ydCB7IGZvcm1hdEhhc2ggfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZm9ybWF0dGVyc1wiO1xuaW1wb3J0IEF2YXRhciBmcm9tIFwiLi4vLi4vYXZhdGFyL2F2YXRhclwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgU3R5bGVkU3VidGl0bGVUZXh0ID0gc3R5bGVkKFN1YnRpdGxlVGV4dCkoKHsgdGhlbWUgfSkgPT4gKHtcbiAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxufSkpO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjY291bnRQcm9wcyB7XG4gIGhhc2g6IHN0cmluZztcbiAgbG9nbz86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEFjY291bnQgPSAoeyBoYXNoLCBsb2dvIH06IEFjY291bnRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGbGV4Um93IGl0ZW1zU3BhY2luZz17OH0gYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgIHtsb2dvID8gKFxuICAgICAgICA8QXZhdGFyIHNyYz17bG9nb30gc2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxBdmF0YXIgaGFzaD17aGFzaH0gc2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICl9XG4gICAgICA8U3R5bGVkU3VidGl0bGVUZXh0IHNpemU9ezJ9IG1vbm90eXBlPlxuICAgICAgICB7Zm9ybWF0SGFzaChoYXNoKX1cbiAgICAgIDwvU3R5bGVkU3VidGl0bGVUZXh0PlxuICAgIDwvRmxleFJvdz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjY291bnQ7XG4iXX0=