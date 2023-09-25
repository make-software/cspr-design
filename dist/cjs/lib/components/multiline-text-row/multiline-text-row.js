"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultilineTextRow = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var body_text_1 = require("../body-text/body-text");
var flex_row_1 = require("../flex-row/flex-row");
var tooltip_1 = require("../tooltip/tooltip");
var StyledWrapper = (0, styled_components_1.default)('div')(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        display: 'flex',
        flexDirection: 'column',
    });
});
var LabelContainer = (0, styled_components_1.default)('div')(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 4,
    });
});
var InputContainer = (0, styled_components_1.default)('div')(function (_a) {
    var theme = _a.theme, height = _a.height, width = _a.width;
    return theme.withMedia({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 16px',
        height: height,
        width: width,
        backgroundColor: theme.styleguideColors.backgroundPrimary,
        border: theme.border.base,
        borderRadius: theme.borderRadius.base,
    });
});
var SuffixContainer = (0, styled_components_1.default)('div')(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        marginLeft: 16,
    });
});
var SuffixTextContainer = (0, styled_components_1.default)(SuffixContainer)(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        color: theme.styleguideColors.contentSecondary,
    });
});
var PrefixContainer = (0, styled_components_1.default)('div')(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        marginRight: 16,
    });
});
function MultilineTextRow(props) {
    var label = props.label, rightLabel = props.rightLabel, _a = props.height, height = _a === void 0 ? 'auto' : _a, width = props.width, text = props.text, prefixIcon = props.prefixIcon, suffixText = props.suffixText, suffixIcon = props.suffixIcon, labelIcon = props.labelIcon, labelTooltipText = props.labelTooltipText;
    return ((0, jsx_runtime_1.jsxs)(StyledWrapper, { children: [(0, jsx_runtime_1.jsxs)(LabelContainer, { children: [label && ((0, jsx_runtime_1.jsx)(tooltip_1.Tooltip, tslib_1.__assign({ title: labelTooltipText, limitWidth: true }, { children: (0, jsx_runtime_1.jsxs)(flex_row_1.FlexRow, tslib_1.__assign({ gap: 3, align: 'center' }, { children: [(0, jsx_runtime_1.jsx)(body_text_1.BodyText, tslib_1.__assign({ size: 1 }, { children: label })), labelIcon] })) }))), rightLabel && (0, jsx_runtime_1.jsx)(body_text_1.BodyText, tslib_1.__assign({ size: 1 }, { children: rightLabel }))] }), (0, jsx_runtime_1.jsxs)(InputContainer, tslib_1.__assign({ height: height, width: width }, { children: [prefixIcon && (0, jsx_runtime_1.jsx)(PrefixContainer, { children: prefixIcon }), (0, jsx_runtime_1.jsx)(flex_row_1.FlexRow, tslib_1.__assign({ itemsSpacing: 4 }, { children: (0, jsx_runtime_1.jsx)(tooltip_1.Tooltip, tslib_1.__assign({ title: typeof text === 'string' ? text : null }, { children: (0, jsx_runtime_1.jsx)(body_text_1.BodyText, tslib_1.__assign({ size: 3, monotype: true, scale: 'xs' }, { children: text })) })) })), suffixIcon && (0, jsx_runtime_1.jsx)(SuffixContainer, { children: suffixIcon }), suffixText && ((0, jsx_runtime_1.jsx)(SuffixTextContainer, { children: (0, jsx_runtime_1.jsx)(body_text_1.BodyText, tslib_1.__assign({ size: 3 }, { children: suffixText })) }))] }))] }));
}
exports.MultilineTextRow = MultilineTextRow;
exports.default = MultilineTextRow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlsaW5lLXRleHQtcm93LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL211bHRpbGluZS10ZXh0LXJvdy9tdWx0aWxpbmUtdGV4dC1yb3cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBQ3ZDLG9EQUFrRDtBQUNsRCxpREFBK0M7QUFDL0MsOENBQTZDO0FBb0I3QyxJQUFNLGFBQWEsR0FBRyxJQUFBLDJCQUFNLEVBQUMsS0FBSyxDQUFDLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQzFDLE9BQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNkLE9BQU8sRUFBRSxNQUFNO1FBQ2YsYUFBYSxFQUFFLFFBQVE7S0FDeEIsQ0FBQztBQUhGLENBR0UsQ0FDSCxDQUFDO0FBRUYsSUFBTSxjQUFjLEdBQUcsSUFBQSwyQkFBTSxFQUFDLEtBQUssQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUMzQyxPQUFBLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDZCxPQUFPLEVBQUUsTUFBTTtRQUNmLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLGNBQWMsRUFBRSxlQUFlO1FBQy9CLFlBQVksRUFBRSxDQUFDO0tBQ2hCLENBQUM7QUFORixDQU1FLENBQ0gsQ0FBQztBQUVGLElBQU0sY0FBYyxHQUFHLElBQUEsMkJBQU0sRUFBQyxLQUFLLENBQUMsQ0FDbEMsVUFBQyxFQUF3QjtRQUF0QixLQUFLLFdBQUEsRUFBRSxNQUFNLFlBQUEsRUFBRSxLQUFLLFdBQUE7SUFDckIsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsT0FBTyxFQUFFLE1BQU07UUFDZixhQUFhLEVBQUUsS0FBSztRQUNwQixjQUFjLEVBQUUsZUFBZTtRQUMvQixVQUFVLEVBQUUsUUFBUTtRQUNwQixPQUFPLEVBQUUsV0FBVztRQUNwQixN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QUNjLElBQ0gsQ0FDakIsQ0FBQztBQUNKLENBQUM7QUE3Q0QsNENBNkNDO0FBRUQsa0JBQWUsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQm9keVRleHQgfSBmcm9tICcuLi9ib2R5LXRleHQvYm9keS10ZXh0JztcclxuaW1wb3J0IHsgRmxleFJvdyB9IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcclxuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gJy4uL3Rvb2x0aXAvdG9vbHRpcCc7XHJcblxyXG5pbnRlcmZhY2UgQ29udGVudFN0eWxlZFByb3BzIHtcclxuICBoZWlnaHQ6IHN0cmluZztcclxuICB3aWR0aD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNdWx0aWxpbmVUZXh0Um93UHJvcHMge1xyXG4gIGxhYmVsPzogc3RyaW5nO1xyXG4gIHJpZ2h0TGFiZWw/OiBzdHJpbmc7XHJcbiAgdGV4dD86IHN0cmluZyB8IFJlYWN0Tm9kZTtcclxuICBoZWlnaHQ/OiBzdHJpbmc7XHJcbiAgd2lkdGg/OiBzdHJpbmc7XHJcbiAgcHJlZml4SWNvbj86IFJlYWN0Tm9kZTtcclxuICBzdWZmaXhJY29uPzogUmVhY3ROb2RlO1xyXG4gIHN1ZmZpeFRleHQ/OiBzdHJpbmc7XHJcbiAgbGFiZWxJY29uPzogUmVhY3ROb2RlO1xyXG4gIGxhYmVsVG9vbHRpcFRleHQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmNvbnN0IFN0eWxlZFdyYXBwZXIgPSBzdHlsZWQoJ2RpdicpKCh7IHRoZW1lIH0pID0+XHJcbiAgdGhlbWUud2l0aE1lZGlhKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gIH0pXHJcbik7XHJcblxyXG5jb25zdCBMYWJlbENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JykoKHsgdGhlbWUgfSkgPT5cclxuICB0aGVtZS53aXRoTWVkaWEoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBtYXJnaW5Cb3R0b206IDQsXHJcbiAgfSlcclxuKTtcclxuXHJcbmNvbnN0IElucHV0Q29udGFpbmVyID0gc3R5bGVkKCdkaXYnKTxDb250ZW50U3R5bGVkUHJvcHM+KFxyXG4gICh7IHRoZW1lLCBoZWlnaHQsIHdpZHRoIH0pID0+XHJcbiAgICB0aGVtZS53aXRoTWVkaWEoe1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgcGFkZGluZzogJzEwcHggMTZweCcsXHJcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcclxuICAgICAgYm9yZGVyOiB0aGVtZS5ib3JkZXIuYmFzZSxcclxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcclxuICAgIH0pXHJcbik7XHJcblxyXG5jb25zdCBTdWZmaXhDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpKCh7IHRoZW1lIH0pID0+XHJcbiAgdGhlbWUud2l0aE1lZGlhKHtcclxuICAgIG1hcmdpbkxlZnQ6IDE2LFxyXG4gIH0pXHJcbik7XHJcblxyXG5jb25zdCBTdWZmaXhUZXh0Q29udGFpbmVyID0gc3R5bGVkKFN1ZmZpeENvbnRhaW5lcikoKHsgdGhlbWUgfSkgPT5cclxuICB0aGVtZS53aXRoTWVkaWEoe1xyXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcclxuICB9KVxyXG4pO1xyXG5cclxuY29uc3QgUHJlZml4Q29udGFpbmVyID0gc3R5bGVkKCdkaXYnKSgoeyB0aGVtZSB9KSA9PlxyXG4gIHRoZW1lLndpdGhNZWRpYSh7XHJcbiAgICBtYXJnaW5SaWdodDogMTYsXHJcbiAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNdWx0aWxpbmVUZXh0Um93KHByb3BzOiBNdWx0aWxpbmVUZXh0Um93UHJvcHMpIHtcclxuICBjb25zdCB7XHJcbiAgICBsYWJlbCxcclxuICAgIHJpZ2h0TGFiZWwsXHJcbiAgICBoZWlnaHQgPSAnYXV0bycsXHJcbiAgICB3aWR0aCxcclxuICAgIHRleHQsXHJcbiAgICBwcmVmaXhJY29uLFxyXG4gICAgc3VmZml4VGV4dCxcclxuICAgIHN1ZmZpeEljb24sXHJcbiAgICBsYWJlbEljb24sXHJcbiAgICBsYWJlbFRvb2x0aXBUZXh0LFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRXcmFwcGVyPlxyXG4gICAgICA8TGFiZWxDb250YWluZXI+XHJcbiAgICAgICAge2xhYmVsICYmIChcclxuICAgICAgICAgIDxUb29sdGlwIHRpdGxlPXtsYWJlbFRvb2x0aXBUZXh0fSBsaW1pdFdpZHRoPlxyXG4gICAgICAgICAgICA8RmxleFJvdyBnYXA9ezN9IGFsaWduPXsnY2VudGVyJ30+XHJcbiAgICAgICAgICAgICAgPEJvZHlUZXh0IHNpemU9ezF9PntsYWJlbH08L0JvZHlUZXh0PlxyXG4gICAgICAgICAgICAgIHtsYWJlbEljb259XHJcbiAgICAgICAgICAgIDwvRmxleFJvdz5cclxuICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtyaWdodExhYmVsICYmIDxCb2R5VGV4dCBzaXplPXsxfT57cmlnaHRMYWJlbH08L0JvZHlUZXh0Pn1cclxuICAgICAgPC9MYWJlbENvbnRhaW5lcj5cclxuICAgICAgPElucHV0Q29udGFpbmVyIGhlaWdodD17aGVpZ2h0fSB3aWR0aD17d2lkdGh9PlxyXG4gICAgICAgIHtwcmVmaXhJY29uICYmIDxQcmVmaXhDb250YWluZXI+e3ByZWZpeEljb259PC9QcmVmaXhDb250YWluZXI+fVxyXG4gICAgICAgIDxGbGV4Um93IGl0ZW1zU3BhY2luZz17NH0+XHJcbiAgICAgICAgICA8VG9vbHRpcCB0aXRsZT17dHlwZW9mIHRleHQgPT09ICdzdHJpbmcnID8gdGV4dCA6IG51bGx9PlxyXG4gICAgICAgICAgICA8Qm9keVRleHQgc2l6ZT17M30gbW9ub3R5cGUgc2NhbGU9eyd4cyd9PlxyXG4gICAgICAgICAgICAgIHt0ZXh0fVxyXG4gICAgICAgICAgICA8L0JvZHlUZXh0PlxyXG4gICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgIDwvRmxleFJvdz5cclxuICAgICAgICB7c3VmZml4SWNvbiAmJiA8U3VmZml4Q29udGFpbmVyPntzdWZmaXhJY29ufTwvU3VmZml4Q29udGFpbmVyPn1cclxuICAgICAgICB7c3VmZml4VGV4dCAmJiAoXHJcbiAgICAgICAgICA8U3VmZml4VGV4dENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEJvZHlUZXh0IHNpemU9ezN9PntzdWZmaXhUZXh0fTwvQm9keVRleHQ+XHJcbiAgICAgICAgICA8L1N1ZmZpeFRleHRDb250YWluZXI+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9JbnB1dENvbnRhaW5lcj5cclxuICAgIDwvU3R5bGVkV3JhcHBlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNdWx0aWxpbmVUZXh0Um93O1xyXG4iXX0=