import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
import { matchSize } from '../../utils/match-size';
import Text from '../text/text';
var StyledText = styled(Text)(function (_a) {
    var theme = _a.theme, _b = _a.size, size = _b === void 0 ? 2 : _b, _c = _a.transform, transform = _c === void 0 ? 'unset' : _c, _d = _a.lineHeight, lineHeight = _d === void 0 ? 'sm' : _d;
    return ({
        fontWeight: matchSize({
            1: theme.typography.fontWeight.bold,
            2: theme.typography.fontWeight.medium,
        }, size),
        lineHeight: matchSize({
            sm: '1.5rem',
            xs: '1.25rem',
            xxs: '0.75rem'
        }, lineHeight),
        fontSize: '0.625rem',
        textTransform: transform,
    });
});
export function Label(props) {
    return _jsx(StyledText, __assign({}, props));
}
export default Label;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvbGFiZWwvbGFiZWwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFFdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sSUFBbUIsTUFBTSxjQUFjLENBQUM7QUFXL0MsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUM3QixVQUFDLEVBQTJEO1FBQXpELEtBQUssV0FBQSxFQUFFLFlBQVEsRUFBUixJQUFJLG1CQUFHLENBQUMsS0FBQSxFQUFFLGlCQUFtQixFQUFuQixTQUFTLG1CQUFHLE9BQU8sS0FBQSxFQUFFLGtCQUFpQixFQUFqQixVQUFVLG1CQUFHLElBQUksS0FBQTtJQUFPLE9BQUEsQ0FBQztRQUNoRSxVQUFVLEVBQUUsU0FBUyxDQUNuQjtZQUNFLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJO1lBQ25DLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNO1NBQ3RDLEVBQ0QsSUFBSSxDQUNMO1FBQ0MsVUFBVSxFQUFFLFNBQVMsQ0FDakI7WUFDSSxFQUFFLEVBQUUsUUFBUTtZQUNaLEVBQUUsRUFBRSxTQUFTO1lBQ2IsR0FBRyxFQUFFLFNBQVM7U0FDakIsRUFDRCxVQUFVLENBQ2I7UUFDSCxRQUFRLEVBQUUsVUFBVTtRQUNwQixhQUFhLEVBQUUsU0FBUztLQUN6QixDQUFDO0FBbEIrRCxDQWtCL0QsQ0FDSCxDQUFDO0FBRUYsTUFBTSxVQUFVLEtBQUssQ0FBQyxLQUFpQjtJQUNyQyxPQUFPLEtBQUMsVUFBVSxlQUFLLEtBQUssRUFBSSxDQUFDO0FBQ25DLENBQUM7QUFFRCxlQUFlLEtBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgbWF0Y2hTaXplIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWF0Y2gtc2l6ZSc7XG5pbXBvcnQgVGV4dCwgeyBUZXh0UHJvcHMgfSBmcm9tICcuLi90ZXh0L3RleHQnO1xuXG50eXBlIFRyYW5zZm9ybSA9ICd1cHBlcmNhc2UnIHwgJ2NhcGl0YWxpemUnIHwgJ3Vuc2V0JztcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgaW50ZXJmYWNlIExhYmVsUHJvcHMgZXh0ZW5kcyBUZXh0UHJvcHMge1xuICBzaXplOiAxIHwgMjtcbiAgdHJhbnNmb3JtPzogVHJhbnNmb3JtO1xuICBsaW5lSGVpZ2h0PzogJ3h4cycgfCAneHMnIHwgJ3NtJztcbn1cblxuY29uc3QgU3R5bGVkVGV4dCA9IHN0eWxlZChUZXh0KTxMYWJlbFByb3BzPihcbiAgKHsgdGhlbWUsIHNpemUgPSAyLCB0cmFuc2Zvcm0gPSAndW5zZXQnLCBsaW5lSGVpZ2h0ID0gJ3NtJyB9KSA9PiAoe1xuICAgIGZvbnRXZWlnaHQ6IG1hdGNoU2l6ZShcbiAgICAgIHtcbiAgICAgICAgMTogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LmJvbGQsXG4gICAgICAgIDI6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5tZWRpdW0sXG4gICAgICB9LFxuICAgICAgc2l6ZVxuICAgICksXG4gICAgICBsaW5lSGVpZ2h0OiBtYXRjaFNpemUoXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBzbTogJzEuNXJlbScsXG4gICAgICAgICAgICAgIHhzOiAnMS4yNXJlbScsXG4gICAgICAgICAgICAgIHh4czogJzAuNzVyZW0nXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsaW5lSGVpZ2h0XG4gICAgICApLFxuICAgIGZvbnRTaXplOiAnMC42MjVyZW0nLFxuICAgIHRleHRUcmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgfSlcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBMYWJlbChwcm9wczogTGFiZWxQcm9wcykge1xuICByZXR1cm4gPFN0eWxlZFRleHQgey4uLnByb3BzfSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFiZWw7XG4iXX0=