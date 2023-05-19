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
var copyHashColorMapper = {
    blue: 'fillPrimaryBlue',
    gray: 'contentTertiary',
};
var SuccessIconWrapper = styled(SvgIcon)(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.styleguideColors.contentGreen,
    });
});
var StyledSvgIcon = styled(SvgIcon)(function (_a) {
    var theme = _a.theme, _b = _a.variation, variation = _b === void 0 ? 'blue' : _b;
    return theme.withMedia({
        color: theme.styleguideColors[copyHashColorMapper[variation]],
        path: {
            fill: theme.styleguideColors[copyHashColorMapper[variation]],
        },
    });
});
export var CopyHash = function (_a) {
    var value = _a.value, _b = _a.label, label = _b === void 0 ? 'Copy Public Key' : _b, _c = _a.copiedLabel, copiedLabel = _c === void 0 ? 'Copied!' : _c, variation = _a.variation, _d = _a.minified, minified = _d === void 0 ? false : _d;
    var _e = useState(false), isCopiedHash = _e[0], setIsCopiedHash = _e[1];
    return (_jsx(FlexRow, __assign({ align: "center", onClick: function () {
            copy(value);
            setIsCopiedHash(true);
            setTimeout(function () { return setIsCopiedHash(false); }, 3000);
        } }, { children: isCopiedHash ? (_jsxs(FlexRow, __assign({ align: 'center' }, { children: [_jsx(SuccessIconWrapper, { src: SuccessIcon, marginRight: true }), !minified && (_jsx(BodyText, __assign({ size: 3, variation: "green" }, { children: copiedLabel })))] }))) : (_jsxs(FlexRow, __assign({ align: 'center' }, { children: [_jsx(StyledSvgIcon, { src: CopyIcon, marginRight: true, variation: variation }), !minified && _jsx(BodyText, __assign({ size: 3 }, { children: label }))] }))) })));
};
export default CopyHash;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS1oYXNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2NvcHktaGFzaC9jb3B5LWhhc2gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN4QyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLFFBQVEsTUFBTSx3QkFBd0IsQ0FBQztBQUM5QyxPQUFPLE1BQU0sTUFBTSxtQkFBbUIsQ0FBQztBQUN2QyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLElBQUksTUFBTSxtQkFBbUIsQ0FBQztBQUVyQyxPQUFPLFdBQVcsTUFBTSxtQ0FBbUMsQ0FBQztBQUM1RCxPQUFPLFFBQVEsTUFBTSxnQ0FBZ0MsQ0FBQztBQUl0RCxJQUFNLG1CQUFtQixHQUFHO0lBQzFCLElBQUksRUFBRSxpQkFBaUI7SUFDdkIsSUFBSSxFQUFFLGlCQUFpQjtDQUN4QixDQUFDO0FBRUYsSUFBTSxrQkFBa0IsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ3pELEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsWUFBWTtLQUMzQyxDQUFDO0FBRndELENBRXhELENBQUMsQ0FBQztBQUVKLElBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDbkMsVUFBQyxFQUE2QjtRQUEzQixLQUFLLFdBQUEsRUFBRSxpQkFBa0IsRUFBbEIsU0FBUyxtQkFBRyxNQUFNLEtBQUE7SUFDMUIsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3RCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzdEO0tBQ0YsQ0FBQztBQUxGLENBS0UsQ0FDTCxDQUFDO0FBVUYsTUFBTSxDQUFDLElBQU0sUUFBUSxHQUFHLFVBQUMsRUFNVDtRQUxkLEtBQUssV0FBQSxFQUNMLGFBQXlCLEVBQXpCLEtBQUssbUJBQUcsaUJBQWlCLEtBQUEsRUFDekIsbUJBQXVCLEVBQXZCLFdBQVcsbUJBQUcsU0FBUyxLQUFBLEVBQ3ZCLFNBQVMsZUFBQSxFQUNULGdCQUFnQixFQUFoQixRQUFRLG1CQUFHLEtBQUssS0FBQTtJQUVWLElBQUEsS0FBa0MsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFoRCxZQUFZLFFBQUEsRUFBRSxlQUFlLFFBQW1CLENBQUM7SUFDeEQsT0FBTyxDQUNMLEtBQUMsT0FBTyxhQUNOLEtBQUssRUFBQyxRQUFRLEVBQ2QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ1osZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUF0QixDQUFzQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUMsZ0JBRUEsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUNkLE1BQUMsT0FBTyxhQUFDLEtBQUssRUFBRSxRQUFRLGlCQUN0QixLQUFDLGtCQUFrQixJQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUUsV0FBVyxTQUFHLEVBQ25ELENBQUMsUUFBUSxJQUFJLENBQ1osS0FBQyxRQUFRLGFBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUMsT0FBTyxnQkFDakMsV0FBVyxJQUNILENBQ1osS0FDTyxDQUNYLENBQUMsQ0FBQyxDQUFDLENBQ0YsTUFBQyxPQUFPLGFBQUMsS0FBSyxFQUFFLFFBQVEsaUJBQ3RCLEtBQUMsYUFBYSxJQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsV0FBVyxRQUFDLFNBQVMsRUFBRSxTQUFTLEdBQUksRUFDakUsQ0FBQyxRQUFRLElBQUksS0FBQyxRQUFRLGFBQUMsSUFBSSxFQUFFLENBQUMsZ0JBQUcsS0FBSyxJQUFZLEtBQzNDLENBQ1gsSUFDTyxDQUNYLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixlQUFlLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCBCb2R5VGV4dCBmcm9tICcuLi9ib2R5LXRleHQvYm9keS10ZXh0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi4vc3ZnLWljb24vc3ZnLWljb24nO1xuaW1wb3J0IGNvcHkgZnJvbSAnY29weS10by1jbGlwYm9hcmQnO1xuXG5pbXBvcnQgU3VjY2Vzc0ljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLXN1Y2Nlc3Muc3ZnJztcbmltcG9ydCBDb3B5SWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtY29weS5zdmcnO1xuXG50eXBlIENvcHlIYXNoQ29sb3IgPSAnYmx1ZScgfCAnZ3JheSc7XG5cbmNvbnN0IGNvcHlIYXNoQ29sb3JNYXBwZXIgPSB7XG4gIGJsdWU6ICdmaWxsUHJpbWFyeUJsdWUnLFxuICBncmF5OiAnY29udGVudFRlcnRpYXJ5Jyxcbn07XG5cbmNvbnN0IFN1Y2Nlc3NJY29uV3JhcHBlciA9IHN0eWxlZChTdmdJY29uKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50R3JlZW4sXG59KSk7XG5cbmNvbnN0IFN0eWxlZFN2Z0ljb24gPSBzdHlsZWQoU3ZnSWNvbik8eyB2YXJpYXRpb24/OiBDb3B5SGFzaENvbG9yIH0+KFxuICAoeyB0aGVtZSwgdmFyaWF0aW9uID0gJ2JsdWUnIH0pID0+XG4gICAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzW2NvcHlIYXNoQ29sb3JNYXBwZXJbdmFyaWF0aW9uXV0sXG4gICAgICBwYXRoOiB7XG4gICAgICAgIGZpbGw6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnNbY29weUhhc2hDb2xvck1hcHBlclt2YXJpYXRpb25dXSxcbiAgICAgIH0sXG4gICAgfSlcbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29weUhhc2hQcm9wcyB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBjb3BpZWRMYWJlbD86IHN0cmluZztcbiAgbWluaWZpZWQ/OiBib29sZWFuO1xuICB2YXJpYXRpb24/OiBDb3B5SGFzaENvbG9yO1xufVxuXG5leHBvcnQgY29uc3QgQ29weUhhc2ggPSAoe1xuICB2YWx1ZSxcbiAgbGFiZWwgPSAnQ29weSBQdWJsaWMgS2V5JyxcbiAgY29waWVkTGFiZWwgPSAnQ29waWVkIScsXG4gIHZhcmlhdGlvbixcbiAgbWluaWZpZWQgPSBmYWxzZSxcbn06IENvcHlIYXNoUHJvcHMpID0+IHtcbiAgY29uc3QgW2lzQ29waWVkSGFzaCwgc2V0SXNDb3BpZWRIYXNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8RmxleFJvd1xuICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBjb3B5KHZhbHVlKTtcbiAgICAgICAgc2V0SXNDb3BpZWRIYXNoKHRydWUpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldElzQ29waWVkSGFzaChmYWxzZSksIDMwMDApO1xuICAgICAgfX1cbiAgICA+XG4gICAgICB7aXNDb3BpZWRIYXNoID8gKFxuICAgICAgICA8RmxleFJvdyBhbGlnbj17J2NlbnRlcid9PlxuICAgICAgICAgIDxTdWNjZXNzSWNvbldyYXBwZXIgc3JjPXtTdWNjZXNzSWNvbn0gbWFyZ2luUmlnaHQgLz5cbiAgICAgICAgICB7IW1pbmlmaWVkICYmIChcbiAgICAgICAgICAgIDxCb2R5VGV4dCBzaXplPXszfSB2YXJpYXRpb249XCJncmVlblwiPlxuICAgICAgICAgICAgICB7Y29waWVkTGFiZWx9XG4gICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRmxleFJvdz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxGbGV4Um93IGFsaWduPXsnY2VudGVyJ30+XG4gICAgICAgICAgPFN0eWxlZFN2Z0ljb24gc3JjPXtDb3B5SWNvbn0gbWFyZ2luUmlnaHQgdmFyaWF0aW9uPXt2YXJpYXRpb259IC8+XG4gICAgICAgICAgeyFtaW5pZmllZCAmJiA8Qm9keVRleHQgc2l6ZT17M30+e2xhYmVsfTwvQm9keVRleHQ+fVxuICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICApfVxuICAgIDwvRmxleFJvdz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvcHlIYXNoO1xuIl19