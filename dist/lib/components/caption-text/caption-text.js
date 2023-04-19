import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
import { matchSize } from '../../utils/match-size';
import Text from '../text/text';
var StyledText = styled(Text)(function (_a) {
    var theme = _a.theme, _b = _a.size, size = _b === void 0 ? 2 : _b;
    return ({
        fontWeight: matchSize({
            1: theme.typography.fontWeight.medium,
            2: theme.typography.fontWeight.regular,
        }, size),
        fontSize: '0.688rem',
        lineHeight: '1rem',
    });
});
export function CaptionText(props) {
    return _jsx(StyledText, __assign({}, props));
}
export default CaptionText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGlvbi10ZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2NhcHRpb24tdGV4dC9jYXB0aW9uLXRleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFFdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sSUFBbUIsTUFBTSxjQUFjLENBQUM7QUFRL0MsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFtQixVQUFDLEVBQW1CO1FBQWpCLEtBQUssV0FBQSxFQUFFLFlBQVEsRUFBUixJQUFJLG1CQUFHLENBQUMsS0FBQTtJQUFPLE9BQUEsQ0FBQztRQUMxRSxVQUFVLEVBQUUsU0FBUyxDQUNuQjtZQUNFLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNO1lBQ3JDLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPO1NBQ3ZDLEVBQ0QsSUFBSSxDQUNMO1FBQ0QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztBQVZ5RSxDQVV6RSxDQUFDLENBQUM7QUFFSixNQUFNLFVBQVUsV0FBVyxDQUFDLEtBQXVCO0lBQ2pELE9BQU8sS0FBQyxVQUFVLGVBQUssS0FBSyxFQUFJLENBQUM7QUFDbkMsQ0FBQztBQUVELGVBQWUsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBtYXRjaFNpemUgfSBmcm9tICcuLi8uLi91dGlscy9tYXRjaC1zaXplJztcbmltcG9ydCBUZXh0LCB7IFRleHRQcm9wcyB9IGZyb20gJy4uL3RleHQvdGV4dCc7XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBDYXB0aW9uVGV4dFByb3BzIGV4dGVuZHMgVGV4dFByb3BzIHtcbiAgc2l6ZTogMSB8IDI7XG4gIGxpbmVIZWlnaHQ/OiAxIHwgMjtcbn1cblxuY29uc3QgU3R5bGVkVGV4dCA9IHN0eWxlZChUZXh0KTxDYXB0aW9uVGV4dFByb3BzPigoeyB0aGVtZSwgc2l6ZSA9IDIgfSkgPT4gKHtcbiAgZm9udFdlaWdodDogbWF0Y2hTaXplKFxuICAgIHtcbiAgICAgIDE6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5tZWRpdW0sXG4gICAgICAyOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQucmVndWxhcixcbiAgICB9LFxuICAgIHNpemVcbiAgKSxcbiAgZm9udFNpemU6ICcwLjY4OHJlbScsXG4gIGxpbmVIZWlnaHQ6ICcxcmVtJyxcbn0pKTtcblxuZXhwb3J0IGZ1bmN0aW9uIENhcHRpb25UZXh0KHByb3BzOiBDYXB0aW9uVGV4dFByb3BzKSB7XG4gIHJldHVybiA8U3R5bGVkVGV4dCB7Li4ucHJvcHN9IC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXB0aW9uVGV4dDtcbiJdfQ==