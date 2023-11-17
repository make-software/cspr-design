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
        lineHeight: matchSize({
            1: '1.25rem',
            2: '1rem',
        }, size)
    });
});
export function CaptionText(props) {
    return _jsx(StyledText, __assign({}, props));
}
export default CaptionText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGlvbi10ZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2NhcHRpb24tdGV4dC9jYXB0aW9uLXRleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFFdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sSUFBbUIsTUFBTSxjQUFjLENBQUM7QUFRL0MsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFtQixVQUFDLEVBQW1CO1FBQWpCLEtBQUssV0FBQSxFQUFFLFlBQVEsRUFBUixJQUFJLG1CQUFHLENBQUMsS0FBQTtJQUFPLE9BQUEsQ0FBQztRQUMxRSxVQUFVLEVBQUUsU0FBUyxDQUNuQjtZQUNFLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNO1lBQ3JDLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPO1NBQ3ZDLEVBQ0QsSUFBSSxDQUNMO1FBQ0QsUUFBUSxFQUFFLFVBQVU7UUFDbEIsVUFBVSxFQUFFLFNBQVMsQ0FDakI7WUFDSSxDQUFDLEVBQUUsU0FBUztZQUNaLENBQUMsRUFBRSxNQUFNO1NBQ1osRUFDRCxJQUFJLENBQ1A7S0FDSixDQUFDO0FBaEJ5RSxDQWdCekUsQ0FBQyxDQUFDO0FBRUosTUFBTSxVQUFVLFdBQVcsQ0FBQyxLQUF1QjtJQUNqRCxPQUFPLEtBQUMsVUFBVSxlQUFLLEtBQUssRUFBSSxDQUFDO0FBQ25DLENBQUM7QUFFRCxlQUFlLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgbWF0Y2hTaXplIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWF0Y2gtc2l6ZSc7XHJcbmltcG9ydCBUZXh0LCB7IFRleHRQcm9wcyB9IGZyb20gJy4uL3RleHQvdGV4dCc7XHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cclxuZXhwb3J0IGludGVyZmFjZSBDYXB0aW9uVGV4dFByb3BzIGV4dGVuZHMgVGV4dFByb3BzIHtcclxuICBzaXplOiAxIHwgMjtcclxuICBsaW5lSGVpZ2h0PzogMSB8IDI7XHJcbn1cclxuXHJcbmNvbnN0IFN0eWxlZFRleHQgPSBzdHlsZWQoVGV4dCk8Q2FwdGlvblRleHRQcm9wcz4oKHsgdGhlbWUsIHNpemUgPSAyIH0pID0+ICh7XHJcbiAgZm9udFdlaWdodDogbWF0Y2hTaXplKFxyXG4gICAge1xyXG4gICAgICAxOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQubWVkaXVtLFxyXG4gICAgICAyOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQucmVndWxhcixcclxuICAgIH0sXHJcbiAgICBzaXplXHJcbiAgKSxcclxuICBmb250U2l6ZTogJzAuNjg4cmVtJyxcclxuICAgIGxpbmVIZWlnaHQ6IG1hdGNoU2l6ZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIDE6ICcxLjI1cmVtJyxcclxuICAgICAgICAgICAgMjogJzFyZW0nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2l6ZVxyXG4gICAgKVxyXG59KSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2FwdGlvblRleHQocHJvcHM6IENhcHRpb25UZXh0UHJvcHMpIHtcclxuICByZXR1cm4gPFN0eWxlZFRleHQgey4uLnByb3BzfSAvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FwdGlvblRleHQ7XHJcbiJdfQ==