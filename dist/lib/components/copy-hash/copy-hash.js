import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import FlexRow from '../flex-row/flex-row';
import BodyText from '../body-text/body-text';
import styled from 'styled-components';
import SvgIcon from '../svg-icon/svg-icon';
import copy from 'copy-to-clipboard';
var SuccessIcon = styled(SvgIcon)(function (_a) {
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
        } }, { children: isCopiedHash ? (_jsxs(FlexRow, __assign({ align: 'center' }, { children: [_jsx(SuccessIcon, { src: './assets/icons/ic-success.svg', marginRight: true }), !minified && (_jsx(BodyText, __assign({ size: 2, variation: "green" }, { children: copiedLabel })))] }))) : (_jsxs(FlexRow, __assign({ align: 'center' }, { children: [_jsx(StyledSvgIcon, { src: "./assets/icons/ic-copy.svg", marginRight: true }), !minified && _jsx(BodyText, __assign({ size: 2 }, { children: label }))] }))) })));
};
export default CopyHash;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS1oYXNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2NvcHktaGFzaC9jb3B5LWhhc2gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN4QyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLFFBQVEsTUFBTSx3QkFBd0IsQ0FBQztBQUM5QyxPQUFPLE1BQU0sTUFBTSxtQkFBbUIsQ0FBQztBQUN2QyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLElBQUksTUFBTSxtQkFBbUIsQ0FBQztBQUVyQyxJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ2xELEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsWUFBWTtLQUMzQyxDQUFDO0FBRmlELENBRWpELENBQUMsQ0FBQztBQUVKLElBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFDNUMsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsS0FBSyxFQUFFO1lBQ0wsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7WUFDdEMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7WUFDdEMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7U0FDbkM7UUFDRCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUU7Z0JBQ0osS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7Z0JBQ3RDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlO2dCQUN0QyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVzthQUNuQztTQUNGO0tBQ0YsQ0FBQztBQWJGLENBYUUsQ0FDSCxDQUFDO0FBU0YsTUFBTSxDQUFDLElBQU0sUUFBUSxHQUFHLFVBQUMsRUFLVDtRQUpkLEtBQUssV0FBQSxFQUNMLGFBQXlCLEVBQXpCLEtBQUssbUJBQUcsaUJBQWlCLEtBQUEsRUFDekIsbUJBQXVCLEVBQXZCLFdBQVcsbUJBQUcsU0FBUyxLQUFBLEVBQ3ZCLGdCQUFnQixFQUFoQixRQUFRLG1CQUFHLEtBQUssS0FBQTtJQUVWLElBQUEsS0FBa0MsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFoRCxZQUFZLFFBQUEsRUFBRSxlQUFlLFFBQW1CLENBQUM7SUFDeEQsT0FBTyxDQUNMLEtBQUMsT0FBTyxhQUNOLEtBQUssRUFBQyxRQUFRLEVBQ2QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ1osZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUF0QixDQUFzQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUMsZ0JBRUEsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUNkLE1BQUMsT0FBTyxhQUFDLEtBQUssRUFBRSxRQUFRLGlCQUN0QixLQUFDLFdBQVcsSUFBQyxHQUFHLEVBQUUsK0JBQStCLEVBQUUsV0FBVyxTQUFHLEVBQ2hFLENBQUMsUUFBUSxJQUFJLENBQ1osS0FBQyxRQUFRLGFBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUMsT0FBTyxnQkFDakMsV0FBVyxJQUNILENBQ1osS0FDTyxDQUNYLENBQUMsQ0FBQyxDQUFDLENBQ0YsTUFBQyxPQUFPLGFBQUMsS0FBSyxFQUFFLFFBQVEsaUJBQ3RCLEtBQUMsYUFBYSxJQUFDLEdBQUcsRUFBQyw0QkFBNEIsRUFBQyxXQUFXLFNBQUcsRUFDN0QsQ0FBQyxRQUFRLElBQUksS0FBQyxRQUFRLGFBQUMsSUFBSSxFQUFFLENBQUMsZ0JBQUcsS0FBSyxJQUFZLEtBQzNDLENBQ1gsSUFDTyxDQUNYLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixlQUFlLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCBCb2R5VGV4dCBmcm9tICcuLi9ib2R5LXRleHQvYm9keS10ZXh0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi4vc3ZnLWljb24vc3ZnLWljb24nO1xuaW1wb3J0IGNvcHkgZnJvbSAnY29weS10by1jbGlwYm9hcmQnO1xuXG5jb25zdCBTdWNjZXNzSWNvbiA9IHN0eWxlZChTdmdJY29uKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50R3JlZW4sXG59KSk7XG5cbmNvbnN0IFN0eWxlZFN2Z0ljb24gPSBzdHlsZWQoU3ZnSWNvbikoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICBjb2xvcjogW1xuICAgICAgdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXG4gICAgICB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcbiAgICAgIHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXG4gICAgXSxcbiAgICBwYXRoOiB7XG4gICAgICBmaWxsOiBbXG4gICAgICAgIHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxuICAgICAgICB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcbiAgICAgICAgdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29weUhhc2hQcm9wcyB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBjb3BpZWRMYWJlbD86IHN0cmluZztcbiAgbWluaWZpZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgQ29weUhhc2ggPSAoe1xuICB2YWx1ZSxcbiAgbGFiZWwgPSAnQ29weSBQdWJsaWMgS2V5JyxcbiAgY29waWVkTGFiZWwgPSAnQ29waWVkIScsXG4gIG1pbmlmaWVkID0gZmFsc2UsXG59OiBDb3B5SGFzaFByb3BzKSA9PiB7XG4gIGNvbnN0IFtpc0NvcGllZEhhc2gsIHNldElzQ29waWVkSGFzaF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHJldHVybiAoXG4gICAgPEZsZXhSb3dcbiAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgY29weSh2YWx1ZSk7XG4gICAgICAgIHNldElzQ29waWVkSGFzaCh0cnVlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRJc0NvcGllZEhhc2goZmFsc2UpLCAzMDAwKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAge2lzQ29waWVkSGFzaCA/IChcbiAgICAgICAgPEZsZXhSb3cgYWxpZ249eydjZW50ZXInfT5cbiAgICAgICAgICA8U3VjY2Vzc0ljb24gc3JjPXsnLi9hc3NldHMvaWNvbnMvaWMtc3VjY2Vzcy5zdmcnfSBtYXJnaW5SaWdodCAvPlxuICAgICAgICAgIHshbWluaWZpZWQgJiYgKFxuICAgICAgICAgICAgPEJvZHlUZXh0IHNpemU9ezJ9IHZhcmlhdGlvbj1cImdyZWVuXCI+XG4gICAgICAgICAgICAgIHtjb3BpZWRMYWJlbH1cbiAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9GbGV4Um93PlxuICAgICAgKSA6IChcbiAgICAgICAgPEZsZXhSb3cgYWxpZ249eydjZW50ZXInfT5cbiAgICAgICAgICA8U3R5bGVkU3ZnSWNvbiBzcmM9XCIuL2Fzc2V0cy9pY29ucy9pYy1jb3B5LnN2Z1wiIG1hcmdpblJpZ2h0IC8+XG4gICAgICAgICAgeyFtaW5pZmllZCAmJiA8Qm9keVRleHQgc2l6ZT17Mn0+e2xhYmVsfTwvQm9keVRleHQ+fVxuICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICApfVxuICAgIDwvRmxleFJvdz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvcHlIYXNoO1xuIl19