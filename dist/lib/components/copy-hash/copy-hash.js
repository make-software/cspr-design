import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import FlexRow from '../flex-row/flex-row';
import BodyText from '../body-text/body-text';
import styled from 'styled-components';
import SvgIcon from '../svg-icon/svg-icon';
import copy from 'copy-to-clipboard';
import SuccessIcon from '../../assets/icons/ic-success.svg';
import CopyIcon from '../../assets/icons/ic-copy.svg';
var SuccessIconWrapper = styled(SvgIcon)(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.styleguideColors.contentGreen,
    });
});
var StyledSvgIcon = styled(SvgIcon)(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        color: [
            theme.styleguideColors.contentTertiary,
            theme.styleguideColors.contentTertiary,
            theme.styleguideColors.contentBlue,
        ],
        path: {
            fill: [
                theme.styleguideColors.contentTertiary,
                theme.styleguideColors.contentTertiary,
                theme.styleguideColors.contentBlue,
            ],
        },
    });
});
export var CopyHash = function (_a) {
    var value = _a.value, _b = _a.label, label = _b === void 0 ? 'Copy Public Key' : _b, _c = _a.copiedLabel, copiedLabel = _c === void 0 ? 'Copied!' : _c, _d = _a.minified, minified = _d === void 0 ? false : _d;
    var _e = useState(false), isCopiedHash = _e[0], setIsCopiedHash = _e[1];
    return (_jsx(FlexRow, __assign({ align: "center", onClick: function () {
            copy(value);
            setIsCopiedHash(true);
            setTimeout(function () { return setIsCopiedHash(false); }, 3000);
        } }, { children: isCopiedHash ? (_jsxs(FlexRow, __assign({ align: 'center' }, { children: [_jsx(SuccessIconWrapper, { src: SuccessIcon, marginRight: true }), !minified && (_jsx(BodyText, __assign({ size: 2, variation: "green" }, { children: copiedLabel })))] }))) : (_jsxs(FlexRow, __assign({ align: 'center' }, { children: [_jsx(StyledSvgIcon, { src: CopyIcon, marginRight: true }), !minified && _jsx(BodyText, __assign({ size: 2 }, { children: label }))] }))) })));
};
export default CopyHash;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS1oYXNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2NvcHktaGFzaC9jb3B5LWhhc2gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN4QyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLFFBQVEsTUFBTSx3QkFBd0IsQ0FBQztBQUM5QyxPQUFPLE1BQU0sTUFBTSxtQkFBbUIsQ0FBQztBQUN2QyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLElBQUksTUFBTSxtQkFBbUIsQ0FBQztBQUVyQyxPQUFPLFdBQVcsTUFBTSxtQ0FBbUMsQ0FBQztBQUM1RCxPQUFPLFFBQVEsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV0RCxJQUFNLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDekQsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZO0tBQzNDLENBQUM7QUFGd0QsQ0FFeEQsQ0FBQyxDQUFDO0FBRUosSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUM1QyxPQUFBLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDZCxLQUFLLEVBQUU7WUFDTCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtZQUN0QyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtZQUN0QyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVztTQUNuQztRQUNELElBQUksRUFBRTtZQUNKLElBQUksRUFBRTtnQkFDSixLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtnQkFDdEMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7Z0JBQ3RDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO2FBQ25DO1NBQ0Y7S0FDRixDQUFDO0FBYkYsQ0FhRSxDQUNILENBQUM7QUFTRixNQUFNLENBQUMsSUFBTSxRQUFRLEdBQUcsVUFBQyxFQUtUO1FBSmQsS0FBSyxXQUFBLEVBQ0wsYUFBeUIsRUFBekIsS0FBSyxtQkFBRyxpQkFBaUIsS0FBQSxFQUN6QixtQkFBdUIsRUFBdkIsV0FBVyxtQkFBRyxTQUFTLEtBQUEsRUFDdkIsZ0JBQWdCLEVBQWhCLFFBQVEsbUJBQUcsS0FBSyxLQUFBO0lBRVYsSUFBQSxLQUFrQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQWhELFlBQVksUUFBQSxFQUFFLGVBQWUsUUFBbUIsQ0FBQztJQUN4RCxPQUFPLENBQ0wsS0FBQyxPQUFPLGFBQ04sS0FBSyxFQUFDLFFBQVEsRUFDZCxPQUFPLEVBQUU7WUFDUCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDWixlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsVUFBVSxDQUFDLGNBQU0sT0FBQSxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQXRCLENBQXNCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakQsQ0FBQyxnQkFFQSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQ2QsTUFBQyxPQUFPLGFBQUMsS0FBSyxFQUFFLFFBQVEsaUJBQ3RCLEtBQUMsa0JBQWtCLElBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSxXQUFXLFNBQUcsRUFDbkQsQ0FBQyxRQUFRLElBQUksQ0FDWixLQUFDLFFBQVEsYUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBQyxPQUFPLGdCQUNqQyxXQUFXLElBQ0gsQ0FDWixLQUNPLENBQ1gsQ0FBQyxDQUFDLENBQUMsQ0FDRixNQUFDLE9BQU8sYUFBQyxLQUFLLEVBQUUsUUFBUSxpQkFDdEIsS0FBQyxhQUFhLElBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxXQUFXLFNBQUcsRUFDM0MsQ0FBQyxRQUFRLElBQUksS0FBQyxRQUFRLGFBQUMsSUFBSSxFQUFFLENBQUMsZ0JBQUcsS0FBSyxJQUFZLEtBQzNDLENBQ1gsSUFDTyxDQUNYLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixlQUFlLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCBCb2R5VGV4dCBmcm9tICcuLi9ib2R5LXRleHQvYm9keS10ZXh0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi4vc3ZnLWljb24vc3ZnLWljb24nO1xuaW1wb3J0IGNvcHkgZnJvbSAnY29weS10by1jbGlwYm9hcmQnO1xuXG5pbXBvcnQgU3VjY2Vzc0ljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLXN1Y2Nlc3Muc3ZnJztcbmltcG9ydCBDb3B5SWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtY29weS5zdmcnO1xuXG5jb25zdCBTdWNjZXNzSWNvbldyYXBwZXIgPSBzdHlsZWQoU3ZnSWNvbikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEdyZWVuLFxufSkpO1xuXG5jb25zdCBTdHlsZWRTdmdJY29uID0gc3R5bGVkKFN2Z0ljb24pKCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgY29sb3I6IFtcbiAgICAgIHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxuICAgICAgdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXG4gICAgICB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICAgIF0sXG4gICAgcGF0aDoge1xuICAgICAgZmlsbDogW1xuICAgICAgICB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcbiAgICAgICAgdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXG4gICAgICAgIHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXG4gICAgICBdLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvcHlIYXNoUHJvcHMge1xuICB2YWx1ZTogc3RyaW5nO1xuICBsYWJlbD86IHN0cmluZztcbiAgY29waWVkTGFiZWw/OiBzdHJpbmc7XG4gIG1pbmlmaWVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IENvcHlIYXNoID0gKHtcbiAgdmFsdWUsXG4gIGxhYmVsID0gJ0NvcHkgUHVibGljIEtleScsXG4gIGNvcGllZExhYmVsID0gJ0NvcGllZCEnLFxuICBtaW5pZmllZCA9IGZhbHNlLFxufTogQ29weUhhc2hQcm9wcykgPT4ge1xuICBjb25zdCBbaXNDb3BpZWRIYXNoLCBzZXRJc0NvcGllZEhhc2hdID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDxGbGV4Um93XG4gICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIGNvcHkodmFsdWUpO1xuICAgICAgICBzZXRJc0NvcGllZEhhc2godHJ1ZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SXNDb3BpZWRIYXNoKGZhbHNlKSwgMzAwMCk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIHtpc0NvcGllZEhhc2ggPyAoXG4gICAgICAgIDxGbGV4Um93IGFsaWduPXsnY2VudGVyJ30+XG4gICAgICAgICAgPFN1Y2Nlc3NJY29uV3JhcHBlciBzcmM9e1N1Y2Nlc3NJY29ufSBtYXJnaW5SaWdodCAvPlxuICAgICAgICAgIHshbWluaWZpZWQgJiYgKFxuICAgICAgICAgICAgPEJvZHlUZXh0IHNpemU9ezJ9IHZhcmlhdGlvbj1cImdyZWVuXCI+XG4gICAgICAgICAgICAgIHtjb3BpZWRMYWJlbH1cbiAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9GbGV4Um93PlxuICAgICAgKSA6IChcbiAgICAgICAgPEZsZXhSb3cgYWxpZ249eydjZW50ZXInfT5cbiAgICAgICAgICA8U3R5bGVkU3ZnSWNvbiBzcmM9e0NvcHlJY29ufSBtYXJnaW5SaWdodCAvPlxuICAgICAgICAgIHshbWluaWZpZWQgJiYgPEJvZHlUZXh0IHNpemU9ezJ9PntsYWJlbH08L0JvZHlUZXh0Pn1cbiAgICAgICAgPC9GbGV4Um93PlxuICAgICAgKX1cbiAgICA8L0ZsZXhSb3c+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3B5SGFzaDtcbiJdfQ==