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
        fontSize: theme.scale('1.1rem'),
        lineHeight: matchSize({
            1: theme.scale('2rem'),
            2: theme.scale('1.6rem'),
        }, size),
    });
});
export function CaptionText(props) {
    return _jsx(StyledText, __assign({}, props));
}
export default CaptionText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGlvbi10ZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2NhcHRpb24tdGV4dC9jYXB0aW9uLXRleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFFdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sSUFBbUIsTUFBTSxjQUFjLENBQUM7QUFRL0MsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFtQixVQUFDLEVBQW1CO1FBQWpCLEtBQUssV0FBQSxFQUFFLFlBQVEsRUFBUixJQUFJLG1CQUFHLENBQUMsS0FBQTtJQUFPLE9BQUEsQ0FBQztRQUMxRSxVQUFVLEVBQUUsU0FBUyxDQUNuQjtZQUNFLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNO1lBQ3JDLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPO1NBQ3ZDLEVBQ0QsSUFBSSxDQUNMO1FBQ0QsUUFBUSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQy9CLFVBQVUsRUFBRSxTQUFTLENBQ25CO1lBQ0UsQ0FBQyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3RCLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztTQUN6QixFQUNELElBQUksQ0FDTDtLQUNGLENBQUM7QUFoQnlFLENBZ0J6RSxDQUFDLENBQUM7QUFFSixNQUFNLFVBQVUsV0FBVyxDQUFDLEtBQXVCO0lBQ2pELE9BQU8sS0FBQyxVQUFVLGVBQUssS0FBSyxFQUFJLENBQUM7QUFDbkMsQ0FBQztBQUVELGVBQWUsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBtYXRjaFNpemUgfSBmcm9tICcuLi8uLi91dGlscy9tYXRjaC1zaXplJztcbmltcG9ydCBUZXh0LCB7IFRleHRQcm9wcyB9IGZyb20gJy4uL3RleHQvdGV4dCc7XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBDYXB0aW9uVGV4dFByb3BzIGV4dGVuZHMgVGV4dFByb3BzIHtcbiAgc2l6ZTogMSB8IDI7XG4gIGxpbmVIZWlnaHQ/OiAxIHwgMjtcbn1cblxuY29uc3QgU3R5bGVkVGV4dCA9IHN0eWxlZChUZXh0KTxDYXB0aW9uVGV4dFByb3BzPigoeyB0aGVtZSwgc2l6ZSA9IDIgfSkgPT4gKHtcbiAgZm9udFdlaWdodDogbWF0Y2hTaXplKFxuICAgIHtcbiAgICAgIDE6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5tZWRpdW0sXG4gICAgICAyOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQucmVndWxhcixcbiAgICB9LFxuICAgIHNpemVcbiAgKSxcbiAgZm9udFNpemU6IHRoZW1lLnNjYWxlKCcxLjFyZW0nKSxcbiAgbGluZUhlaWdodDogbWF0Y2hTaXplKFxuICAgIHtcbiAgICAgIDE6IHRoZW1lLnNjYWxlKCcycmVtJyksXG4gICAgICAyOiB0aGVtZS5zY2FsZSgnMS42cmVtJyksXG4gICAgfSxcbiAgICBzaXplXG4gICksXG59KSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXB0aW9uVGV4dChwcm9wczogQ2FwdGlvblRleHRQcm9wcykge1xuICByZXR1cm4gPFN0eWxlZFRleHQgey4uLnByb3BzfSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FwdGlvblRleHQ7XG4iXX0=