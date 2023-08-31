import { __assign, __rest } from "tslib";
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Tooltip as ReakitTooltip, TooltipReference, useTooltipState, } from 'reakit/Tooltip';
import styled from 'styled-components';
import BodyText from '../body-text/body-text';
import CaptionText from '../caption-text/caption-text';
import FlexColumn from '../flex-column/flex-column';
import { matchSize } from "../../utils/match-size";
var StyledReactTooltip = styled(ReakitTooltip)(function (_a) {
    var theme = _a.theme, _b = _a.lineHeight, lineHeight = _b === void 0 ? 'sm' : _b, _c = _a.scale, scale = _c === void 0 ? 'sm' : _c;
    return ({
        zIndex: theme.zIndex.tooltip,
        color: theme.styleguideColors.contentPrimary,
        backgroundColor: theme.styleguideColors.backgroundPrimary,
        borderRadius: theme.borderRadius.base,
        padding: theme.padding[2],
        boxShadow: theme.boxShadow.tooltip,
        transition: 'opacity 250ms ease-in-out',
        opacity: 0,
        fontSize: matchSize({
            sm: '1.3rem',
            xs: '0.8125rem',
        }, scale),
        lineHeight: matchSize({
            sm: '1.5rem',
            xs: '1.25rem',
        }, lineHeight),
        '&[data-enter]': {
            opacity: 1,
        },
    });
});
export var Tooltip = React.forwardRef(function (_a, ref) {
    var children = _a.children, limitWidth = _a.limitWidth, title = _a.title, caption = _a.caption, monotype = _a.monotype, props = __rest(_a, ["children", "limitWidth", "title", "caption", "monotype"]);
    var tooltip = useTooltipState({ animated: 250 });
    if (children == null) {
        return null;
    }
    if (title == null) {
        return _jsx(_Fragment, { children: children });
    }
    return (_jsxs(_Fragment, { children: [_jsx(TooltipReference, __assign({}, tooltip, { ref: children.ref }, children.props, { children: function (referenceProps) { return React.cloneElement(children, referenceProps); } })), _jsx(StyledReactTooltip, __assign({}, tooltip, props, { children: _jsx("div", __assign({ style: { maxWidth: limitWidth ? '500px' : undefined } }, { children: _jsxs(FlexColumn, { children: [_jsx(CaptionText, __assign({ size: 2, variation: "gray" }, { children: caption })), _jsx(BodyText, __assign({ size: 3, monotype: monotype }, { children: title }))] }) })) }))] }));
});
export default Tooltip;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sRUFDTCxPQUFPLElBQUksYUFBYSxFQUN4QixnQkFBZ0IsRUFDaEIsZUFBZSxHQUNoQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sTUFBTSxNQUFNLG1CQUFtQixDQUFDO0FBRXZDLE9BQU8sUUFBUSxNQUFNLHdCQUF3QixDQUFDO0FBQzlDLE9BQU8sV0FBVyxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZELE9BQU8sVUFBVSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQWdCakQsSUFBTSxrQkFBa0IsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQTBCLFVBQUMsRUFBMEM7UUFBeEMsS0FBSyxXQUFBLEVBQUUsa0JBQWlCLEVBQWpCLFVBQVUsbUJBQUcsSUFBSSxLQUFBLEVBQUUsYUFBWSxFQUFaLEtBQUssbUJBQUcsSUFBSSxLQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ3pILE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87UUFDNUIsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjO1FBQzVDLGVBQWUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO1FBQ3pELFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUk7UUFDckMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU87UUFFbEMsVUFBVSxFQUFFLDJCQUEyQjtRQUN2QyxPQUFPLEVBQUUsQ0FBQztRQUNWLFFBQVEsRUFBRSxTQUFTLENBQ2hCO1lBQ0ksRUFBRSxFQUFFLFFBQVE7WUFDWixFQUFFLEVBQUUsV0FBVztTQUNsQixFQUNBLEtBQUssQ0FDUjtRQUNELFVBQVUsRUFBRSxTQUFTLENBQ2pCO1lBQ0ksRUFBRSxFQUFFLFFBQVE7WUFDWixFQUFFLEVBQUUsU0FBUztTQUNoQixFQUNELFVBQVUsQ0FDYjtRQUNELGVBQWUsRUFBRTtZQUNmLE9BQU8sRUFBRSxDQUFDO1NBQ1g7S0FDRixDQUFDO0FBM0J3SCxDQTJCeEgsQ0FBQyxDQUFDO0FBRUosTUFBTSxDQUFDLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQ3JDLFVBQUMsRUFBNEQsRUFBRSxHQUFHO0lBQS9ELElBQUEsUUFBUSxjQUFBLEVBQUUsVUFBVSxnQkFBQSxFQUFFLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFLLEtBQUssY0FBMUQsMERBQTRELENBQUY7SUFDekQsSUFBTSxPQUFPLEdBQUcsZUFBZSxDQUFDLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFFbkQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1FBQ3BCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDakIsT0FBTyw0QkFBRyxRQUFRLEdBQUksQ0FBQztLQUN4QjtJQUVELE9BQU8sQ0FDTCw4QkFDRSxLQUFDLGdCQUFnQixlQUFLLE9BQU8sSUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsSUFBTSxRQUFRLENBQUMsS0FBSyxjQUNqRSxVQUFDLGNBQWMsSUFBSyxPQUFBLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxFQUE1QyxDQUE0QyxJQUNoRCxFQUNuQixLQUFDLGtCQUFrQixlQUFLLE9BQU8sRUFBTSxLQUFLLGNBQ3hDLHVCQUFLLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLGdCQUN4RCxNQUFDLFVBQVUsZUFDVCxLQUFDLFdBQVcsYUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUNuQyxPQUFPLElBQ0ksRUFDZCxLQUFDLFFBQVEsYUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLGdCQUNsQyxLQUFLLElBQ0csSUFDQSxJQUNULElBQ2EsSUFDcEIsQ0FDSixDQUFDO0FBQ0osQ0FBQyxDQUNGLENBQUM7QUFFRixlQUFlLE9BQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBUb29sdGlwIGFzIFJlYWtpdFRvb2x0aXAsXG4gIFRvb2x0aXBSZWZlcmVuY2UsXG4gIHVzZVRvb2x0aXBTdGF0ZSxcbn0gZnJvbSAncmVha2l0L1Rvb2x0aXAnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgQm9keVRleHQgZnJvbSAnLi4vYm9keS10ZXh0L2JvZHktdGV4dCc7XG5pbXBvcnQgQ2FwdGlvblRleHQgZnJvbSAnLi4vY2FwdGlvbi10ZXh0L2NhcHRpb24tdGV4dCc7XG5pbXBvcnQgRmxleENvbHVtbiBmcm9tICcuLi9mbGV4LWNvbHVtbi9mbGV4LWNvbHVtbic7XG5pbXBvcnQge21hdGNoU2l6ZX0gZnJvbSBcIi4uLy4uL3V0aWxzL21hdGNoLXNpemVcIjtcblxudHlwZSBSZWYgPSBIVE1MRGl2RWxlbWVudDtcblxudHlwZSBTdHlsZWRSZWFjdFRvb2x0aXBQcm9wcyA9IHtcbiAgICBsaW5lSGVpZ2h0PzogJ3hzJyB8ICdzbSc7XG4gICAgc2NhbGU/OiAneHMnIHwgJ3NtJztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUb29sdGlwUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xuICB0aXRsZT86IEpTWC5FbGVtZW50IHwgc3RyaW5nIHwgbnVsbDtcbiAgY2FwdGlvbj86IHN0cmluZyB8IG51bGw7XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4gJiBhbnk7XG4gIG1vbm90eXBlPzogYm9vbGVhbjtcbiAgbGltaXRXaWR0aD86IGJvb2xlYW47XG59XG5jb25zdCBTdHlsZWRSZWFjdFRvb2x0aXAgPSBzdHlsZWQoUmVha2l0VG9vbHRpcCk8U3R5bGVkUmVhY3RUb29sdGlwUHJvcHM+KCh7IHRoZW1lLCBsaW5lSGVpZ2h0ID0gJ3NtJywgc2NhbGUgPSAnc20nIH0pID0+ICh7XG4gIHpJbmRleDogdGhlbWUuekluZGV4LnRvb2x0aXAsXG4gIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxuICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4gIHBhZGRpbmc6IHRoZW1lLnBhZGRpbmdbMl0sXG4gIGJveFNoYWRvdzogdGhlbWUuYm94U2hhZG93LnRvb2x0aXAsXG5cbiAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMjUwbXMgZWFzZS1pbi1vdXQnLFxuICBvcGFjaXR5OiAwLFxuICBmb250U2l6ZTogbWF0Y2hTaXplKFxuICAgICB7XG4gICAgICAgICBzbTogJzEuM3JlbScsXG4gICAgICAgICB4czogJzAuODEyNXJlbScsXG4gICAgIH0sXG4gICAgICBzY2FsZVxuICApLFxuICBsaW5lSGVpZ2h0OiBtYXRjaFNpemUoXG4gICAgICB7XG4gICAgICAgICAgc206ICcxLjVyZW0nLFxuICAgICAgICAgIHhzOiAnMS4yNXJlbScsXG4gICAgICB9LFxuICAgICAgbGluZUhlaWdodFxuICApLFxuICAnJltkYXRhLWVudGVyXSc6IHtcbiAgICBvcGFjaXR5OiAxLFxuICB9LFxufSkpO1xuXG5leHBvcnQgY29uc3QgVG9vbHRpcCA9IFJlYWN0LmZvcndhcmRSZWY8UmVmLCBUb29sdGlwUHJvcHMgJiBTdHlsZWRSZWFjdFRvb2x0aXBQcm9wcz4oXG4gICh7IGNoaWxkcmVuLCBsaW1pdFdpZHRoLCB0aXRsZSwgY2FwdGlvbiwgbW9ub3R5cGUsIC4uLnByb3BzIH0sIHJlZikgPT4ge1xuICAgIGNvbnN0IHRvb2x0aXAgPSB1c2VUb29sdGlwU3RhdGUoeyBhbmltYXRlZDogMjUwIH0pO1xuXG4gICAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aXRsZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8VG9vbHRpcFJlZmVyZW5jZSB7Li4udG9vbHRpcH0gcmVmPXtjaGlsZHJlbi5yZWZ9IHsuLi5jaGlsZHJlbi5wcm9wc30+XG4gICAgICAgICAgeyhyZWZlcmVuY2VQcm9wcykgPT4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCByZWZlcmVuY2VQcm9wcyl9XG4gICAgICAgIDwvVG9vbHRpcFJlZmVyZW5jZT5cbiAgICAgICAgPFN0eWxlZFJlYWN0VG9vbHRpcCB7Li4udG9vbHRpcH0gey4uLnByb3BzfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiBsaW1pdFdpZHRoID8gJzUwMHB4JyA6IHVuZGVmaW5lZCB9fT5cbiAgICAgICAgICAgIDxGbGV4Q29sdW1uPlxuICAgICAgICAgICAgICA8Q2FwdGlvblRleHQgc2l6ZT17Mn0gdmFyaWF0aW9uPVwiZ3JheVwiPlxuICAgICAgICAgICAgICAgIHtjYXB0aW9ufVxuICAgICAgICAgICAgICA8L0NhcHRpb25UZXh0PlxuICAgICAgICAgICAgICA8Qm9keVRleHQgc2l6ZT17M30gbW9ub3R5cGU9e21vbm90eXBlfT5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgICA8L0ZsZXhDb2x1bW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvU3R5bGVkUmVhY3RUb29sdGlwPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcDtcbiJdfQ==