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
        fontSize: '1.1rem',
        lineHeight: matchSize({
            1: '2rem',
            2: '1.6rem',
        }, size),
    });
});
export function CaptionText(props) {
    return _jsx(StyledText, __assign({}, props));
}
export default CaptionText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGlvbi10ZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2NhcHRpb24tdGV4dC9jYXB0aW9uLXRleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFFdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sSUFBbUIsTUFBTSxjQUFjLENBQUM7QUFRL0MsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFtQixVQUFDLEVBQW1CO1FBQWpCLEtBQUssV0FBQSxFQUFFLFlBQVEsRUFBUixJQUFJLG1CQUFHLENBQUMsS0FBQTtJQUFPLE9BQUEsQ0FBQztRQUMxRSxVQUFVLEVBQUUsU0FBUyxDQUNuQjtZQUNFLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNO1lBQ3JDLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPO1NBQ3ZDLEVBQ0QsSUFBSSxDQUNMO1FBQ0QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsVUFBVSxFQUFFLFNBQVMsQ0FDbkI7WUFDRSxDQUFDLEVBQUUsTUFBTTtZQUNULENBQUMsRUFBRSxRQUFRO1NBQ1osRUFDRCxJQUFJLENBQ0w7S0FDRixDQUFDO0FBaEJ5RSxDQWdCekUsQ0FBQyxDQUFDO0FBRUosTUFBTSxVQUFVLFdBQVcsQ0FBQyxLQUF1QjtJQUNqRCxPQUFPLEtBQUMsVUFBVSxlQUFLLEtBQUssRUFBSSxDQUFDO0FBQ25DLENBQUM7QUFFRCxlQUFlLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgbWF0Y2hTaXplIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWF0Y2gtc2l6ZSc7XG5pbXBvcnQgVGV4dCwgeyBUZXh0UHJvcHMgfSBmcm9tICcuLi90ZXh0L3RleHQnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2FwdGlvblRleHRQcm9wcyBleHRlbmRzIFRleHRQcm9wcyB7XG4gIHNpemU6IDEgfCAyO1xuICBsaW5lSGVpZ2h0PzogMSB8IDI7XG59XG5cbmNvbnN0IFN0eWxlZFRleHQgPSBzdHlsZWQoVGV4dCk8Q2FwdGlvblRleHRQcm9wcz4oKHsgdGhlbWUsIHNpemUgPSAyIH0pID0+ICh7XG4gIGZvbnRXZWlnaHQ6IG1hdGNoU2l6ZShcbiAgICB7XG4gICAgICAxOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQubWVkaXVtLFxuICAgICAgMjogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LnJlZ3VsYXIsXG4gICAgfSxcbiAgICBzaXplXG4gICksXG4gIGZvbnRTaXplOiAnMS4xcmVtJyxcbiAgbGluZUhlaWdodDogbWF0Y2hTaXplKFxuICAgIHtcbiAgICAgIDE6ICcycmVtJyxcbiAgICAgIDI6ICcxLjZyZW0nLFxuICAgIH0sXG4gICAgc2l6ZVxuICApLFxufSkpO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2FwdGlvblRleHQocHJvcHM6IENhcHRpb25UZXh0UHJvcHMpIHtcbiAgcmV0dXJuIDxTdHlsZWRUZXh0IHsuLi5wcm9wc30gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcHRpb25UZXh0O1xuIl19