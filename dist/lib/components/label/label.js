import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
import { matchSize } from '../../utils/match-size';
import Text from '../text/text';
var StyledText = styled(Text)(function (_a) {
    var theme = _a.theme, _b = _a.size, size = _b === void 0 ? 2 : _b, _c = _a.transform, transform = _c === void 0 ? 'unset' : _c;
    return ({
        fontWeight: matchSize({
            1: theme.typography.fontWeight.bold,
            2: theme.typography.fontWeight.medium,
        }, size),
        fontSize: theme.scale('1rem'),
        textTransform: transform,
    });
});
export function Label(props) {
    return _jsx(StyledText, __assign({}, props));
}
export default Label;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvbGFiZWwvbGFiZWwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFFdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sSUFBbUIsTUFBTSxjQUFjLENBQUM7QUFVL0MsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUM3QixVQUFDLEVBQXdDO1FBQXRDLEtBQUssV0FBQSxFQUFFLFlBQVEsRUFBUixJQUFJLG1CQUFHLENBQUMsS0FBQSxFQUFFLGlCQUFtQixFQUFuQixTQUFTLG1CQUFHLE9BQU8sS0FBQTtJQUFPLE9BQUEsQ0FBQztRQUM3QyxVQUFVLEVBQUUsU0FBUyxDQUNuQjtZQUNFLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJO1lBQ25DLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNO1NBQ3RDLEVBQ0QsSUFBSSxDQUNMO1FBQ0QsUUFBUSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzdCLGFBQWEsRUFBRSxTQUFTO0tBQ3pCLENBQUM7QUFWNEMsQ0FVNUMsQ0FDSCxDQUFDO0FBRUYsTUFBTSxVQUFVLEtBQUssQ0FBQyxLQUFpQjtJQUNyQyxPQUFPLEtBQUMsVUFBVSxlQUFLLEtBQUssRUFBSSxDQUFDO0FBQ25DLENBQUM7QUFFRCxlQUFlLEtBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgbWF0Y2hTaXplIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWF0Y2gtc2l6ZSc7XG5pbXBvcnQgVGV4dCwgeyBUZXh0UHJvcHMgfSBmcm9tICcuLi90ZXh0L3RleHQnO1xuXG50eXBlIFRyYW5zZm9ybSA9ICd1cHBlcmNhc2UnIHwgJ2NhcGl0YWxpemUnIHwgJ3Vuc2V0JztcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgaW50ZXJmYWNlIExhYmVsUHJvcHMgZXh0ZW5kcyBUZXh0UHJvcHMge1xuICBzaXplOiAxIHwgMjtcbiAgdHJhbnNmb3JtPzogVHJhbnNmb3JtO1xufVxuXG5jb25zdCBTdHlsZWRUZXh0ID0gc3R5bGVkKFRleHQpPExhYmVsUHJvcHM+KFxuICAoeyB0aGVtZSwgc2l6ZSA9IDIsIHRyYW5zZm9ybSA9ICd1bnNldCcgfSkgPT4gKHtcbiAgICBmb250V2VpZ2h0OiBtYXRjaFNpemUoXG4gICAgICB7XG4gICAgICAgIDE6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5ib2xkLFxuICAgICAgICAyOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQubWVkaXVtLFxuICAgICAgfSxcbiAgICAgIHNpemVcbiAgICApLFxuICAgIGZvbnRTaXplOiB0aGVtZS5zY2FsZSgnMXJlbScpLFxuICAgIHRleHRUcmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgfSlcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBMYWJlbChwcm9wczogTGFiZWxQcm9wcykge1xuICByZXR1cm4gPFN0eWxlZFRleHQgey4uLnByb3BzfSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFiZWw7XG4iXX0=