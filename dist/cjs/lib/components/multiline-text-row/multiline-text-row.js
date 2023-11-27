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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlsaW5lLXRleHQtcm93LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL211bHRpbGluZS10ZXh0LXJvdy9tdWx0aWxpbmUtdGV4dC1yb3cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBQ3ZDLG9EQUFrRDtBQUNsRCxpREFBK0M7QUFDL0MsOENBQTZDO0FBb0I3QyxJQUFNLGFBQWEsR0FBRyxJQUFBLDJCQUFNLEVBQUMsS0FBSyxDQUFDLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQzFDLE9BQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNkLE9BQU8sRUFBRSxNQUFNO1FBQ2YsYUFBYSxFQUFFLFFBQVE7S0FDeEIsQ0FBQztBQUhGLENBR0UsQ0FDSCxDQUFDO0FBRUYsSUFBTSxjQUFjLEdBQUcsSUFBQSwyQkFBTSxFQUFDLEtBQUssQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUMzQyxPQUFBLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDZCxPQUFPLEVBQUUsTUFBTTtRQUNmLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLGNBQWMsRUFBRSxlQUFlO1FBQy9CLFlBQVksRUFBRSxDQUFDO0tBQ2hCLENBQUM7QUFORixDQU1FLENBQ0gsQ0FBQztBQUVGLElBQU0sY0FBYyxHQUFHLElBQUEsMkJBQU0sRUFBQyxLQUFLLENBQUMsQ0FDbEMsVUFBQyxFQUF3QjtRQUF0QixLQUFLLFdBQUEsRUFBRSxNQUFNLFlBQUEsRUFBRSxLQUFLLFdBQUE7SUFDckIsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsT0FBTyxFQUFFLE1BQU07UUFDZixhQUFhLEVBQUUsS0FBSztRQUNwQixjQUFjLEVBQUUsZUFBZTtRQUMvQixVQUFVLEVBQUUsUUFBUTtRQUNwQixPQUFPLEVBQUUsV0FBVztRQUNwQixN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QUNjLElBQ0gsQ0FDakIsQ0FBQztBQUNKLENBQUM7QUE3Q0QsNENBNkNDO0FBRUQsa0JBQWUsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCb2R5VGV4dCB9IGZyb20gJy4uL2JvZHktdGV4dC9ib2R5LXRleHQnO1xuaW1wb3J0IHsgRmxleFJvdyB9IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICcuLi90b29sdGlwL3Rvb2x0aXAnO1xuXG5pbnRlcmZhY2UgQ29udGVudFN0eWxlZFByb3BzIHtcbiAgaGVpZ2h0OiBzdHJpbmc7XG4gIHdpZHRoPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpbGluZVRleHRSb3dQcm9wcyB7XG4gIGxhYmVsPzogc3RyaW5nO1xuICByaWdodExhYmVsPzogc3RyaW5nO1xuICB0ZXh0Pzogc3RyaW5nIHwgUmVhY3ROb2RlO1xuICBoZWlnaHQ/OiBzdHJpbmc7XG4gIHdpZHRoPzogc3RyaW5nO1xuICBwcmVmaXhJY29uPzogUmVhY3ROb2RlO1xuICBzdWZmaXhJY29uPzogUmVhY3ROb2RlO1xuICBzdWZmaXhUZXh0Pzogc3RyaW5nO1xuICBsYWJlbEljb24/OiBSZWFjdE5vZGU7XG4gIGxhYmVsVG9vbHRpcFRleHQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmNvbnN0IFN0eWxlZFdyYXBwZXIgPSBzdHlsZWQoJ2RpdicpKCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICB9KVxuKTtcblxuY29uc3QgTGFiZWxDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpKCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgbWFyZ2luQm90dG9tOiA0LFxuICB9KVxuKTtcblxuY29uc3QgSW5wdXRDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpPENvbnRlbnRTdHlsZWRQcm9wcz4oXG4gICh7IHRoZW1lLCBoZWlnaHQsIHdpZHRoIH0pID0+XG4gICAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgcGFkZGluZzogJzEwcHggMTZweCcsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICAgIGJvcmRlcjogdGhlbWUuYm9yZGVyLmJhc2UsXG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICAgIH0pXG4pO1xuXG5jb25zdCBTdWZmaXhDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpKCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgbWFyZ2luTGVmdDogMTYsXG4gIH0pXG4pO1xuXG5jb25zdCBTdWZmaXhUZXh0Q29udGFpbmVyID0gc3R5bGVkKFN1ZmZpeENvbnRhaW5lcikoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxuICB9KVxuKTtcblxuY29uc3QgUHJlZml4Q29udGFpbmVyID0gc3R5bGVkKCdkaXYnKSgoeyB0aGVtZSB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIG1hcmdpblJpZ2h0OiAxNixcbiAgfSlcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBNdWx0aWxpbmVUZXh0Um93KHByb3BzOiBNdWx0aWxpbmVUZXh0Um93UHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGxhYmVsLFxuICAgIHJpZ2h0TGFiZWwsXG4gICAgaGVpZ2h0ID0gJ2F1dG8nLFxuICAgIHdpZHRoLFxuICAgIHRleHQsXG4gICAgcHJlZml4SWNvbixcbiAgICBzdWZmaXhUZXh0LFxuICAgIHN1ZmZpeEljb24sXG4gICAgbGFiZWxJY29uLFxuICAgIGxhYmVsVG9vbHRpcFRleHQsXG4gIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRXcmFwcGVyPlxuICAgICAgPExhYmVsQ29udGFpbmVyPlxuICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgIDxUb29sdGlwIHRpdGxlPXtsYWJlbFRvb2x0aXBUZXh0fSBsaW1pdFdpZHRoPlxuICAgICAgICAgICAgPEZsZXhSb3cgZ2FwPXszfSBhbGlnbj17J2NlbnRlcid9PlxuICAgICAgICAgICAgICA8Qm9keVRleHQgc2l6ZT17MX0+e2xhYmVsfTwvQm9keVRleHQ+XG4gICAgICAgICAgICAgIHtsYWJlbEljb259XG4gICAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICApfVxuICAgICAgICB7cmlnaHRMYWJlbCAmJiA8Qm9keVRleHQgc2l6ZT17MX0+e3JpZ2h0TGFiZWx9PC9Cb2R5VGV4dD59XG4gICAgICA8L0xhYmVsQ29udGFpbmVyPlxuICAgICAgPElucHV0Q29udGFpbmVyIGhlaWdodD17aGVpZ2h0fSB3aWR0aD17d2lkdGh9PlxuICAgICAgICB7cHJlZml4SWNvbiAmJiA8UHJlZml4Q29udGFpbmVyPntwcmVmaXhJY29ufTwvUHJlZml4Q29udGFpbmVyPn1cbiAgICAgICAgPEZsZXhSb3cgaXRlbXNTcGFjaW5nPXs0fT5cbiAgICAgICAgICA8VG9vbHRpcCB0aXRsZT17dHlwZW9mIHRleHQgPT09ICdzdHJpbmcnID8gdGV4dCA6IG51bGx9PlxuICAgICAgICAgICAgPEJvZHlUZXh0IHNpemU9ezN9IG1vbm90eXBlIHNjYWxlPXsneHMnfT5cbiAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgPC9GbGV4Um93PlxuICAgICAgICB7c3VmZml4SWNvbiAmJiA8U3VmZml4Q29udGFpbmVyPntzdWZmaXhJY29ufTwvU3VmZml4Q29udGFpbmVyPn1cbiAgICAgICAge3N1ZmZpeFRleHQgJiYgKFxuICAgICAgICAgIDxTdWZmaXhUZXh0Q29udGFpbmVyPlxuICAgICAgICAgICAgPEJvZHlUZXh0IHNpemU9ezN9PntzdWZmaXhUZXh0fTwvQm9keVRleHQ+XG4gICAgICAgICAgPC9TdWZmaXhUZXh0Q29udGFpbmVyPlxuICAgICAgICApfVxuICAgICAgPC9JbnB1dENvbnRhaW5lcj5cbiAgICA8L1N0eWxlZFdyYXBwZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpbGluZVRleHRSb3c7XG4iXX0=