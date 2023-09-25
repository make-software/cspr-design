"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressLine = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var flex_column_1 = require("../flex-column/flex-column");
var flex_row_1 = require("../flex-row/flex-row");
var caption_text_1 = require("../caption-text/caption-text");
var svg_icon_1 = require("../svg-icon/svg-icon");
var ic_check_svg_1 = tslib_1.__importDefault(require("../../assets/icons/ic-check.svg"));
var StepWrapper = (0, styled_components_1.default)(flex_column_1.FlexColumn)(function (_a) { return ({
    position: 'relative',
}); });
var StepText = (0, styled_components_1.default)(caption_text_1.CaptionText)(function (_a) {
    var theme = _a.theme, disabled = _a.disabled, isFirstStep = _a.isFirstStep, isLastStep = _a.isLastStep, isCheckedStep = _a.isCheckedStep;
    return theme.withMedia(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ color: disabled
            ? theme.styleguideColors.contentTertiary
            : theme.styleguideColors.contentBlue, position: 'absolute', bottom: 30, whiteSpace: ['inherit', 'nowrap', 'nowrap'] }, (isCheckedStep &&
        !isLastStep && {
        color: theme.styleguideColors.contentTertiary,
    })), (isFirstStep && {
        left: 0,
    })), (isLastStep && {
        right: 0,
    })));
});
var StepContainer = (0, styled_components_1.default)(flex_row_1.FlexRow)(function (_a) {
    var theme = _a.theme, disabled = _a.disabled, checked = _a.checked;
    return ({
        borderRadius: '50%',
        border: "2px solid ".concat(disabled
            ? theme.styleguideColors.contentQuaternary
            : theme.styleguideColors.contentBlue),
        background: checked
            ? disabled
                ? theme.styleguideColors.contentQuaternary
                : theme.styleguideColors.contentBlue
            : theme.styleguideColors.backgroundPrimary,
        width: 24,
        height: 24,
        '& svg': {
            path: {
                fill: theme.styleguideColors.backgroundPrimary,
            },
        },
    });
});
var Circle = styled_components_1.default.div(function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return ({
        borderRadius: '50%',
        background: disabled
            ? theme.styleguideColors.contentQuaternary
            : theme.styleguideColors.contentBlue,
        width: 12,
        height: 12,
    });
});
var Line = styled_components_1.default.div(function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return ({
        height: 2,
        background: disabled
            ? theme.styleguideColors.contentQuaternary
            : theme.styleguideColors.contentBlue,
        width: '100%',
    });
});
var renderStep = function (label, idx, currentIdx, totalSteps) {
    var isCurrentStep = idx === currentIdx;
    var isFirstStep = idx === 0;
    var isLastStep = idx === totalSteps - 1;
    var isCompletedStep = idx < currentIdx;
    var isDisabledStep = !isCompletedStep && !isCurrentStep;
    var isCheckedStep = isCompletedStep || isLastStep;
    return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [!isFirstStep && (0, jsx_runtime_1.jsx)(Line, { disabled: isDisabledStep }), (0, jsx_runtime_1.jsxs)(StepWrapper, tslib_1.__assign({ align: "center" }, { children: [(0, jsx_runtime_1.jsx)(StepText, tslib_1.__assign({ disabled: isDisabledStep, size: 1, isFirstStep: isFirstStep, isLastStep: isLastStep, isCheckedStep: isCheckedStep }, { children: label })), (0, jsx_runtime_1.jsx)(StepContainer, tslib_1.__assign({ disabled: isDisabledStep, checked: isCheckedStep, align: "center", justify: "center" }, { children: isCheckedStep ? ((0, jsx_runtime_1.jsx)(svg_icon_1.SvgIcon, { height: 7, width: 10, src: ic_check_svg_1.default })) : ((0, jsx_runtime_1.jsx)(Circle, { disabled: isDisabledStep })) }))] })), !isLastStep && (0, jsx_runtime_1.jsx)(Line, { disabled: !isFirstStep && !isCompletedStep })] }, "".concat(idx, "-").concat(label)));
};
function ProgressLine(_a) {
    var steps = _a.steps, currentIdx = _a.currentIdx;
    return ((0, jsx_runtime_1.jsx)(flex_row_1.FlexRow, tslib_1.__assign({ align: "center" }, { children: steps.map(function (label, idx) {
            return renderStep(label, idx, currentIdx, steps.length);
        }) })));
}
exports.ProgressLine = ProgressLine;
exports.default = ProgressLine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtbGluZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9wcm9ncmVzcy1saW5lL3Byb2dyZXNzLWxpbmUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLGdGQUF1QztBQUN2QywwREFBd0Q7QUFDeEQsaURBQStDO0FBQy9DLDZEQUEyRDtBQUMzRCxpREFBK0M7QUFDL0MseUZBQXdEO0FBT3hELElBQU0sV0FBVyxHQUFHLElBQUEsMkJBQU0sRUFBQyx3QkFBVSxDQUFDLENBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxDQUFDO0lBQzlDLFFBQVEsRUFBRSxVQUFVO0NBQ3JCLENBQUMsRUFGNkMsQ0FFN0MsQ0FBQyxDQUFDO0FBRUosSUFBTSxRQUFRLEdBQUcsSUFBQSwyQkFBTSxFQUFDLDBCQUFXLENBQUMsQ0FLakMsVUFBQyxFQUEyRDtRQUF6RCxLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxXQUFXLGlCQUFBLEVBQUUsVUFBVSxnQkFBQSxFQUFFLGFBQWEsbUJBQUE7SUFDM0QsT0FBQSxLQUFLLENBQUMsU0FBUyxzREFDYixLQUFLLEVBQUUsUUFBUTtZQUNiLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtZQUN4QyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFDdEMsUUFBUSxFQUFFLFVBQVUsRUFDcEIsTUFBTSxFQUFFLEVBQUUsRUFDVixVQUFVLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUN4QyxDQUFDLGFBQWE7UUFDZixDQUFDLFVBQVUsSUFBSTtRQUNiLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtLQUM5QyxDQUFDLEdBQ0QsQ0FBQyxXQUFXLElBQUk7UUFDakIsSUFBSSxFQUFFLENBQUM7S0FDUixDQUFDLEdBQ0MsQ0FB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QixVQUFVLEVBQUUsVUFBVSxFQUN0QixhQUFhLEVBQUUsYUFBYSxnQkFFM0IsS0FBSyxJQUNHLEVBQ1gsdUJBQUMsYUFBYSxxQkFDWixRQUFRLEVBQUUsY0FBYyxFQUN4QixPQUFPLEVBQUUsYUFBYSxFQUN0QixLQUFLLEVBQUMsUUFBUSxFQUNkLE9BQU8sRUFBQyxRQUFRLGdCQUVmLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FDZix1QkFBQyxrQkFBTyxJQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsc0JBQVMsR0FBSSxDQUNsRCxDQUFDLENBQUMsQ0FBQyxDQUNGLHVCQUFDLE1BQU0sSUFBQyxRQUFRLEVBQUUsY0FBYyxHQUFJLENBQ3JDLElBQ2EsS0FDSixFQUNiLENBQUMsVUFBVSxJQUFJLHVCQUFDLElBQUksSUFBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLElBQUksQ0FBQyxlQUFlLEdBQUksS0ExQmpELFVBQUcsR0FBRyxjQUFJLEtBQUssQ0FBRSxDQTJCckIsQ0FDbEIsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLFNBQWdCLFlBQVksQ0FBQyxFQUF3QztRQUF0QyxLQUFLLFdBQUEsRUFBRSxVQUFVLGdCQUFBO0lBQzlDLE9BQU8sQ0FDTCx1QkFBQyxrQkFBTyxxQkFBQyxLQUFLLEVBQUMsUUFBUSxnQkFDcEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUssRUFBRSxHQUFHO1lBQ3BCLE9BQUEsVUFBVSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFBaEQsQ0FBZ0QsQ0FDakQsSUFDTyxDQUNYLENBQUM7QUFDSixDQUFDO0FBUkQsb0NBUUM7QUFFRCxrQkFBZSxZQUFZLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRmxleENvbHVtbiB9IGZyb20gJy4uL2ZsZXgtY29sdW1uL2ZsZXgtY29sdW1uJztcclxuaW1wb3J0IHsgRmxleFJvdyB9IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcclxuaW1wb3J0IHsgQ2FwdGlvblRleHQgfSBmcm9tICcuLi9jYXB0aW9uLXRleHQvY2FwdGlvbi10ZXh0JztcclxuaW1wb3J0IHsgU3ZnSWNvbiB9IGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcclxuaW1wb3J0IENoZWNrSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtY2hlY2suc3ZnJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvZ3Jlc3NMaW5lUHJvcHMge1xyXG4gIHN0ZXBzOiBzdHJpbmdbXTtcclxuICBjdXJyZW50SWR4OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IFN0ZXBXcmFwcGVyID0gc3R5bGVkKEZsZXhDb2x1bW4pKCh7fSkgPT4gKHtcclxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxufSkpO1xyXG5cclxuY29uc3QgU3RlcFRleHQgPSBzdHlsZWQoQ2FwdGlvblRleHQpPHtcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgaXNGaXJzdFN0ZXA6IGJvb2xlYW47XHJcbiAgaXNMYXN0U3RlcDogYm9vbGVhbjtcclxuICBpc0NoZWNrZWRTdGVwOiBib29sZWFuO1xyXG59PigoeyB0aGVtZSwgZGlzYWJsZWQsIGlzRmlyc3RTdGVwLCBpc0xhc3RTdGVwLCBpc0NoZWNrZWRTdGVwIH0pID0+XHJcbiAgdGhlbWUud2l0aE1lZGlhKHtcclxuICAgIGNvbG9yOiBkaXNhYmxlZFxyXG4gICAgICA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5XHJcbiAgICAgIDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgYm90dG9tOiAzMCxcclxuICAgIHdoaXRlU3BhY2U6IFsnaW5oZXJpdCcsICdub3dyYXAnLCAnbm93cmFwJ10sXHJcbiAgICAuLi4oaXNDaGVja2VkU3RlcCAmJlxyXG4gICAgICAhaXNMYXN0U3RlcCAmJiB7XHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxyXG4gICAgICB9KSxcclxuICAgIC4uLihpc0ZpcnN0U3RlcCAmJiB7XHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICB9KSxcclxuICAgIC4uLihpc0xhc3RTdGVwICYmIHtcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICB9KSxcclxuICB9KVxyXG4pO1xyXG5cclxuY29uc3QgU3RlcENvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KTx7IGRpc2FibGVkOiBib29sZWFuOyBjaGVja2VkOiBib29sZWFuIH0+KFxyXG4gICh7IHRoZW1lLCBkaXNhYmxlZCwgY2hlY2tlZCB9KSA9PiAoe1xyXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgIGJvcmRlcjogYDJweCBzb2xpZCAke1xyXG4gICAgICBkaXNhYmxlZFxyXG4gICAgICAgID8gdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UXVhdGVybmFyeVxyXG4gICAgICAgIDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZVxyXG4gICAgfWAsXHJcbiAgICBiYWNrZ3JvdW5kOiBjaGVja2VkXHJcbiAgICAgID8gZGlzYWJsZWRcclxuICAgICAgICA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFF1YXRlcm5hcnlcclxuICAgICAgICA6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWVcclxuICAgICAgOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxyXG4gICAgd2lkdGg6IDI0LFxyXG4gICAgaGVpZ2h0OiAyNCxcclxuICAgICcmIHN2Zyc6IHtcclxuICAgICAgcGF0aDoge1xyXG4gICAgICAgIGZpbGw6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pXHJcbik7XHJcblxyXG5jb25zdCBDaXJjbGUgPSBzdHlsZWQuZGl2PHsgZGlzYWJsZWQ/OiBib29sZWFuIH0+KCh7IHRoZW1lLCBkaXNhYmxlZCB9KSA9PiAoe1xyXG4gIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgYmFja2dyb3VuZDogZGlzYWJsZWRcclxuICAgID8gdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UXVhdGVybmFyeVxyXG4gICAgOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxyXG4gIHdpZHRoOiAxMixcclxuICBoZWlnaHQ6IDEyLFxyXG59KSk7XHJcblxyXG5jb25zdCBMaW5lID0gc3R5bGVkLmRpdjx7IGRpc2FibGVkPzogYm9vbGVhbiB9PigoeyB0aGVtZSwgZGlzYWJsZWQgfSkgPT4gKHtcclxuICBoZWlnaHQ6IDIsXHJcbiAgYmFja2dyb3VuZDogZGlzYWJsZWRcclxuICAgID8gdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UXVhdGVybmFyeVxyXG4gICAgOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxyXG4gIHdpZHRoOiAnMTAwJScsXHJcbn0pKTtcclxuXHJcbmNvbnN0IHJlbmRlclN0ZXAgPSAoXHJcbiAgbGFiZWw6IHN0cmluZyxcclxuICBpZHg6IG51bWJlcixcclxuICBjdXJyZW50SWR4OiBudW1iZXIsXHJcbiAgdG90YWxTdGVwczogbnVtYmVyXHJcbikgPT4ge1xyXG4gIGNvbnN0IGlzQ3VycmVudFN0ZXAgPSBpZHggPT09IGN1cnJlbnRJZHg7XHJcbiAgY29uc3QgaXNGaXJzdFN0ZXAgPSBpZHggPT09IDA7XHJcbiAgY29uc3QgaXNMYXN0U3RlcCA9IGlkeCA9PT0gdG90YWxTdGVwcyAtIDE7XHJcblxyXG4gIGNvbnN0IGlzQ29tcGxldGVkU3RlcCA9IGlkeCA8IGN1cnJlbnRJZHg7XHJcblxyXG4gIGNvbnN0IGlzRGlzYWJsZWRTdGVwID0gIWlzQ29tcGxldGVkU3RlcCAmJiAhaXNDdXJyZW50U3RlcDtcclxuICBjb25zdCBpc0NoZWNrZWRTdGVwID0gaXNDb21wbGV0ZWRTdGVwIHx8IGlzTGFzdFN0ZXA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtgJHtpZHh9LSR7bGFiZWx9YH0+XHJcbiAgICAgIHshaXNGaXJzdFN0ZXAgJiYgPExpbmUgZGlzYWJsZWQ9e2lzRGlzYWJsZWRTdGVwfSAvPn1cclxuXHJcbiAgICAgIDxTdGVwV3JhcHBlciBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgIDxTdGVwVGV4dFxyXG4gICAgICAgICAgZGlzYWJsZWQ9e2lzRGlzYWJsZWRTdGVwfVxyXG4gICAgICAgICAgc2l6ZT17MX1cclxuICAgICAgICAgIGlzRmlyc3RTdGVwPXtpc0ZpcnN0U3RlcH1cclxuICAgICAgICAgIGlzTGFzdFN0ZXA9e2lzTGFzdFN0ZXB9XHJcbiAgICAgICAgICBpc0NoZWNrZWRTdGVwPXtpc0NoZWNrZWRTdGVwfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICA8L1N0ZXBUZXh0PlxyXG4gICAgICAgIDxTdGVwQ29udGFpbmVyXHJcbiAgICAgICAgICBkaXNhYmxlZD17aXNEaXNhYmxlZFN0ZXB9XHJcbiAgICAgICAgICBjaGVja2VkPXtpc0NoZWNrZWRTdGVwfVxyXG4gICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2lzQ2hlY2tlZFN0ZXAgPyAoXHJcbiAgICAgICAgICAgIDxTdmdJY29uIGhlaWdodD17N30gd2lkdGg9ezEwfSBzcmM9e0NoZWNrSWNvbn0gLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxDaXJjbGUgZGlzYWJsZWQ9e2lzRGlzYWJsZWRTdGVwfSAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1N0ZXBDb250YWluZXI+XHJcbiAgICAgIDwvU3RlcFdyYXBwZXI+XHJcbiAgICAgIHshaXNMYXN0U3RlcCAmJiA8TGluZSBkaXNhYmxlZD17IWlzRmlyc3RTdGVwICYmICFpc0NvbXBsZXRlZFN0ZXB9IC8+fVxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByb2dyZXNzTGluZSh7IHN0ZXBzLCBjdXJyZW50SWR4IH06IFByb2dyZXNzTGluZVByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4Um93IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgIHtzdGVwcy5tYXAoKGxhYmVsLCBpZHgpID0+XHJcbiAgICAgICAgcmVuZGVyU3RlcChsYWJlbCwgaWR4LCBjdXJyZW50SWR4LCBzdGVwcy5sZW5ndGgpXHJcbiAgICAgICl9XHJcbiAgICA8L0ZsZXhSb3c+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NMaW5lO1xyXG4iXX0=