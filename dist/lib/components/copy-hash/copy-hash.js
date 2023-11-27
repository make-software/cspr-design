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
    blue: 'contentBlue',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS1oYXNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2NvcHktaGFzaC9jb3B5LWhhc2gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN4QyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLFFBQVEsTUFBTSx3QkFBd0IsQ0FBQztBQUM5QyxPQUFPLE1BQU0sTUFBTSxtQkFBbUIsQ0FBQztBQUN2QyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLElBQUksTUFBTSxtQkFBbUIsQ0FBQztBQUVyQyxPQUFPLFdBQVcsTUFBTSxtQ0FBbUMsQ0FBQztBQUM1RCxPQUFPLFFBQVEsTUFBTSxnQ0FBZ0MsQ0FBQztBQUl0RCxJQUFNLG1CQUFtQixHQUFHO0lBQzFCLElBQUksRUFBRSxhQUFhO0lBQ25CLElBQUksRUFBRSxpQkFBaUI7Q0FDeEIsQ0FBQztBQUVGLElBQU0sa0JBQWtCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUN6RCxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFlBQVk7S0FDM0MsQ0FBQztBQUZ3RCxDQUV4RCxDQUFDLENBQUM7QUFFSixJQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQ25DLFVBQUMsRUFBNkI7UUFBM0IsS0FBSyxXQUFBLEVBQUUsaUJBQWtCLEVBQWxCLFNBQVMsbUJBQUcsTUFBTSxLQUFBO0lBQzFCLE9BQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNkLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0QsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM3RDtLQUNGLENBQUM7QUFMRixDQUtFLENBQ0wsQ0FBQztBQVVGLE1BQU0sQ0FBQyxJQUFNLFFBQVEsR0FBRyxVQUFDLEVBTVQ7UUFMZCxLQUFLLFdBQUEsRUFDTCxhQUF5QixFQUF6QixLQUFLLG1CQUFHLGlCQUFpQixLQUFBLEVBQ3pCLG1CQUF1QixFQUF2QixXQUFXLG1CQUFHLFNBQVMsS0FBQSxFQUN2QixTQUFTLGVBQUEsRUFDVCxnQkFBZ0IsRUFBaEIsUUFBUSxtQkFBRyxLQUFLLEtBQUE7SUFFVixJQUFBLEtBQWtDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBaEQsWUFBWSxRQUFBLEVBQUUsZUFBZSxRQUFtQixDQUFDO0lBQ3hELE9BQU8sQ0FDTCxLQUFDLE9BQU8sYUFDTixLQUFLLEVBQUMsUUFBUSxFQUNkLE9BQU8sRUFBRTtZQUNQLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNaLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixVQUFVLENBQUMsY0FBTSxPQUFBLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBdEIsQ0FBc0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRCxDQUFDLGdCQUVBLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FDZCxNQUFDLE9BQU8sYUFBQyxLQUFLLEVBQUUsUUFBUSxpQkFDdEIsS0FBQyxrQkFBa0IsSUFBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLFdBQVcsU0FBRyxFQUNuRCxDQUFDLFFBQVEsSUFBSSxDQUNaLEtBQUMsUUFBUSxhQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFDLE9BQU8sZ0JBQ2pDLFdBQVcsSUFDSCxDQUNaLEtBQ08sQ0FDWCxDQUFDLENBQUMsQ0FBQyxDQUNGLE1BQUMsT0FBTyxhQUFDLEtBQUssRUFBRSxRQUFRLGlCQUN0QixLQUFDLGFBQWEsSUFBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLFdBQVcsUUFBQyxTQUFTLEVBQUUsU0FBUyxHQUFJLEVBQ2pFLENBQUMsUUFBUSxJQUFJLEtBQUMsUUFBUSxhQUFDLElBQUksRUFBRSxDQUFDLGdCQUFHLEtBQUssSUFBWSxLQUMzQyxDQUNYLElBQ08sQ0FDWCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsZUFBZSxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmxleFJvdyBmcm9tICcuLi9mbGV4LXJvdy9mbGV4LXJvdyc7XG5pbXBvcnQgQm9keVRleHQgZnJvbSAnLi4vYm9keS10ZXh0L2JvZHktdGV4dCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcbmltcG9ydCBjb3B5IGZyb20gJ2NvcHktdG8tY2xpcGJvYXJkJztcblxuaW1wb3J0IFN1Y2Nlc3NJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy1zdWNjZXNzLnN2Zyc7XG5pbXBvcnQgQ29weUljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWNvcHkuc3ZnJztcblxudHlwZSBDb3B5SGFzaENvbG9yID0gJ2JsdWUnIHwgJ2dyYXknO1xuXG5jb25zdCBjb3B5SGFzaENvbG9yTWFwcGVyID0ge1xuICBibHVlOiAnY29udGVudEJsdWUnLFxuICBncmF5OiAnY29udGVudFRlcnRpYXJ5Jyxcbn07XG5cbmNvbnN0IFN1Y2Nlc3NJY29uV3JhcHBlciA9IHN0eWxlZChTdmdJY29uKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50R3JlZW4sXG59KSk7XG5cbmNvbnN0IFN0eWxlZFN2Z0ljb24gPSBzdHlsZWQoU3ZnSWNvbik8eyB2YXJpYXRpb24/OiBDb3B5SGFzaENvbG9yIH0+KFxuICAoeyB0aGVtZSwgdmFyaWF0aW9uID0gJ2JsdWUnIH0pID0+XG4gICAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzW2NvcHlIYXNoQ29sb3JNYXBwZXJbdmFyaWF0aW9uXV0sXG4gICAgICBwYXRoOiB7XG4gICAgICAgIGZpbGw6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnNbY29weUhhc2hDb2xvck1hcHBlclt2YXJpYXRpb25dXSxcbiAgICAgIH0sXG4gICAgfSlcbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29weUhhc2hQcm9wcyB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBjb3BpZWRMYWJlbD86IHN0cmluZztcbiAgbWluaWZpZWQ/OiBib29sZWFuO1xuICB2YXJpYXRpb24/OiBDb3B5SGFzaENvbG9yO1xufVxuXG5leHBvcnQgY29uc3QgQ29weUhhc2ggPSAoe1xuICB2YWx1ZSxcbiAgbGFiZWwgPSAnQ29weSBQdWJsaWMgS2V5JyxcbiAgY29waWVkTGFiZWwgPSAnQ29waWVkIScsXG4gIHZhcmlhdGlvbixcbiAgbWluaWZpZWQgPSBmYWxzZSxcbn06IENvcHlIYXNoUHJvcHMpID0+IHtcbiAgY29uc3QgW2lzQ29waWVkSGFzaCwgc2V0SXNDb3BpZWRIYXNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8RmxleFJvd1xuICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBjb3B5KHZhbHVlKTtcbiAgICAgICAgc2V0SXNDb3BpZWRIYXNoKHRydWUpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldElzQ29waWVkSGFzaChmYWxzZSksIDMwMDApO1xuICAgICAgfX1cbiAgICA+XG4gICAgICB7aXNDb3BpZWRIYXNoID8gKFxuICAgICAgICA8RmxleFJvdyBhbGlnbj17J2NlbnRlcid9PlxuICAgICAgICAgIDxTdWNjZXNzSWNvbldyYXBwZXIgc3JjPXtTdWNjZXNzSWNvbn0gbWFyZ2luUmlnaHQgLz5cbiAgICAgICAgICB7IW1pbmlmaWVkICYmIChcbiAgICAgICAgICAgIDxCb2R5VGV4dCBzaXplPXszfSB2YXJpYXRpb249XCJncmVlblwiPlxuICAgICAgICAgICAgICB7Y29waWVkTGFiZWx9XG4gICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRmxleFJvdz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxGbGV4Um93IGFsaWduPXsnY2VudGVyJ30+XG4gICAgICAgICAgPFN0eWxlZFN2Z0ljb24gc3JjPXtDb3B5SWNvbn0gbWFyZ2luUmlnaHQgdmFyaWF0aW9uPXt2YXJpYXRpb259IC8+XG4gICAgICAgICAgeyFtaW5pZmllZCAmJiA8Qm9keVRleHQgc2l6ZT17M30+e2xhYmVsfTwvQm9keVRleHQ+fVxuICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICApfVxuICAgIDwvRmxleFJvdz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvcHlIYXNoO1xuIl19