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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtbGluZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9wcm9ncmVzcy1saW5lL3Byb2dyZXNzLWxpbmUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLGdGQUF1QztBQUN2QywwREFBd0Q7QUFDeEQsaURBQStDO0FBQy9DLDZEQUEyRDtBQUMzRCxpREFBK0M7QUFDL0MseUZBQXdEO0FBT3hELElBQU0sV0FBVyxHQUFHLElBQUEsMkJBQU0sRUFBQyx3QkFBVSxDQUFDLENBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxDQUFDO0lBQzlDLFFBQVEsRUFBRSxVQUFVO0NBQ3JCLENBQUMsRUFGNkMsQ0FFN0MsQ0FBQyxDQUFDO0FBRUosSUFBTSxRQUFRLEdBQUcsSUFBQSwyQkFBTSxFQUFDLDBCQUFXLENBQUMsQ0FLakMsVUFBQyxFQUEyRDtRQUF6RCxLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxXQUFXLGlCQUFBLEVBQUUsVUFBVSxnQkFBQSxFQUFFLGFBQWEsbUJBQUE7SUFDM0QsT0FBQSxLQUFLLENBQUMsU0FBUyxzREFDYixLQUFLLEVBQUUsUUFBUTtZQUNiLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtZQUN4QyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFDdEMsUUFBUSxFQUFFLFVBQVUsRUFDcEIsTUFBTSxFQUFFLEVBQUUsRUFDVixVQUFVLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUN4QyxDQUFDLGFBQWE7UUFDZixDQUFDLFVBQVUsSUFBSTtRQUNiLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtLQUM5QyxDQUFDLEdBQ0QsQ0FBQyxXQUFXLElBQUk7UUFDakIsSUFBSSxFQUFFLENBQUM7S0FDUixDQUFDLEdBQ0MsQ0FB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QixVQUFVLEVBQUUsVUFBVSxFQUN0QixhQUFhLEVBQUUsYUFBYSxnQkFFM0IsS0FBSyxJQUNHLEVBQ1gsdUJBQUMsYUFBYSxxQkFDWixRQUFRLEVBQUUsY0FBYyxFQUN4QixPQUFPLEVBQUUsYUFBYSxFQUN0QixLQUFLLEVBQUMsUUFBUSxFQUNkLE9BQU8sRUFBQyxRQUFRLGdCQUVmLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FDZix1QkFBQyxrQkFBTyxJQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsc0JBQVMsR0FBSSxDQUNsRCxDQUFDLENBQUMsQ0FBQyxDQUNGLHVCQUFDLE1BQU0sSUFBQyxRQUFRLEVBQUUsY0FBYyxHQUFJLENBQ3JDLElBQ2EsS0FDSixFQUNiLENBQUMsVUFBVSxJQUFJLHVCQUFDLElBQUksSUFBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLElBQUksQ0FBQyxlQUFlLEdBQUksS0ExQmpELFVBQUcsR0FBRyxjQUFJLEtBQUssQ0FBRSxDQTJCckIsQ0FDbEIsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLFNBQWdCLFlBQVksQ0FBQyxFQUF3QztRQUF0QyxLQUFLLFdBQUEsRUFBRSxVQUFVLGdCQUFBO0lBQzlDLE9BQU8sQ0FDTCx1QkFBQyxrQkFBTyxxQkFBQyxLQUFLLEVBQUMsUUFBUSxnQkFDcEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUssRUFBRSxHQUFHO1lBQ3BCLE9BQUEsVUFBVSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFBaEQsQ0FBZ0QsQ0FDakQsSUFDTyxDQUNYLENBQUM7QUFDSixDQUFDO0FBUkQsb0NBUUM7QUFFRCxrQkFBZSxZQUFZLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBGbGV4Q29sdW1uIH0gZnJvbSAnLi4vZmxleC1jb2x1bW4vZmxleC1jb2x1bW4nO1xuaW1wb3J0IHsgRmxleFJvdyB9IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCB7IENhcHRpb25UZXh0IH0gZnJvbSAnLi4vY2FwdGlvbi10ZXh0L2NhcHRpb24tdGV4dCc7XG5pbXBvcnQgeyBTdmdJY29uIH0gZnJvbSAnLi4vc3ZnLWljb24vc3ZnLWljb24nO1xuaW1wb3J0IENoZWNrSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtY2hlY2suc3ZnJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9ncmVzc0xpbmVQcm9wcyB7XG4gIHN0ZXBzOiBzdHJpbmdbXTtcbiAgY3VycmVudElkeDogbnVtYmVyO1xufVxuXG5jb25zdCBTdGVwV3JhcHBlciA9IHN0eWxlZChGbGV4Q29sdW1uKSgoe30pID0+ICh7XG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxufSkpO1xuXG5jb25zdCBTdGVwVGV4dCA9IHN0eWxlZChDYXB0aW9uVGV4dCk8e1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGlzRmlyc3RTdGVwOiBib29sZWFuO1xuICBpc0xhc3RTdGVwOiBib29sZWFuO1xuICBpc0NoZWNrZWRTdGVwOiBib29sZWFuO1xufT4oKHsgdGhlbWUsIGRpc2FibGVkLCBpc0ZpcnN0U3RlcCwgaXNMYXN0U3RlcCwgaXNDaGVja2VkU3RlcCB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIGNvbG9yOiBkaXNhYmxlZFxuICAgICAgPyB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeVxuICAgICAgOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJvdHRvbTogMzAsXG4gICAgd2hpdGVTcGFjZTogWydpbmhlcml0JywgJ25vd3JhcCcsICdub3dyYXAnXSxcbiAgICAuLi4oaXNDaGVja2VkU3RlcCAmJlxuICAgICAgIWlzTGFzdFN0ZXAgJiYge1xuICAgICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXG4gICAgICB9KSxcbiAgICAuLi4oaXNGaXJzdFN0ZXAgJiYge1xuICAgICAgbGVmdDogMCxcbiAgICB9KSxcbiAgICAuLi4oaXNMYXN0U3RlcCAmJiB7XG4gICAgICByaWdodDogMCxcbiAgICB9KSxcbiAgfSlcbik7XG5cbmNvbnN0IFN0ZXBDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8eyBkaXNhYmxlZDogYm9vbGVhbjsgY2hlY2tlZDogYm9vbGVhbiB9PihcbiAgKHsgdGhlbWUsIGRpc2FibGVkLCBjaGVja2VkIH0pID0+ICh7XG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICBib3JkZXI6IGAycHggc29saWQgJHtcbiAgICAgIGRpc2FibGVkXG4gICAgICAgID8gdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UXVhdGVybmFyeVxuICAgICAgICA6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWVcbiAgICB9YCxcbiAgICBiYWNrZ3JvdW5kOiBjaGVja2VkXG4gICAgICA/IGRpc2FibGVkXG4gICAgICAgID8gdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UXVhdGVybmFyeVxuICAgICAgICA6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWVcbiAgICAgIDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICB3aWR0aDogMjQsXG4gICAgaGVpZ2h0OiAyNCxcbiAgICAnJiBzdmcnOiB7XG4gICAgICBwYXRoOiB7XG4gICAgICAgIGZpbGw6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5jb25zdCBDaXJjbGUgPSBzdHlsZWQuZGl2PHsgZGlzYWJsZWQ/OiBib29sZWFuIH0+KCh7IHRoZW1lLCBkaXNhYmxlZCB9KSA9PiAoe1xuICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICBiYWNrZ3JvdW5kOiBkaXNhYmxlZFxuICAgID8gdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UXVhdGVybmFyeVxuICAgIDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgd2lkdGg6IDEyLFxuICBoZWlnaHQ6IDEyLFxufSkpO1xuXG5jb25zdCBMaW5lID0gc3R5bGVkLmRpdjx7IGRpc2FibGVkPzogYm9vbGVhbiB9PigoeyB0aGVtZSwgZGlzYWJsZWQgfSkgPT4gKHtcbiAgaGVpZ2h0OiAyLFxuICBiYWNrZ3JvdW5kOiBkaXNhYmxlZFxuICAgID8gdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UXVhdGVybmFyeVxuICAgIDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgd2lkdGg6ICcxMDAlJyxcbn0pKTtcblxuY29uc3QgcmVuZGVyU3RlcCA9IChcbiAgbGFiZWw6IHN0cmluZyxcbiAgaWR4OiBudW1iZXIsXG4gIGN1cnJlbnRJZHg6IG51bWJlcixcbiAgdG90YWxTdGVwczogbnVtYmVyXG4pID0+IHtcbiAgY29uc3QgaXNDdXJyZW50U3RlcCA9IGlkeCA9PT0gY3VycmVudElkeDtcbiAgY29uc3QgaXNGaXJzdFN0ZXAgPSBpZHggPT09IDA7XG4gIGNvbnN0IGlzTGFzdFN0ZXAgPSBpZHggPT09IHRvdGFsU3RlcHMgLSAxO1xuXG4gIGNvbnN0IGlzQ29tcGxldGVkU3RlcCA9IGlkeCA8IGN1cnJlbnRJZHg7XG5cbiAgY29uc3QgaXNEaXNhYmxlZFN0ZXAgPSAhaXNDb21wbGV0ZWRTdGVwICYmICFpc0N1cnJlbnRTdGVwO1xuICBjb25zdCBpc0NoZWNrZWRTdGVwID0gaXNDb21wbGV0ZWRTdGVwIHx8IGlzTGFzdFN0ZXA7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtgJHtpZHh9LSR7bGFiZWx9YH0+XG4gICAgICB7IWlzRmlyc3RTdGVwICYmIDxMaW5lIGRpc2FibGVkPXtpc0Rpc2FibGVkU3RlcH0gLz59XG5cbiAgICAgIDxTdGVwV3JhcHBlciBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICA8U3RlcFRleHRcbiAgICAgICAgICBkaXNhYmxlZD17aXNEaXNhYmxlZFN0ZXB9XG4gICAgICAgICAgc2l6ZT17MX1cbiAgICAgICAgICBpc0ZpcnN0U3RlcD17aXNGaXJzdFN0ZXB9XG4gICAgICAgICAgaXNMYXN0U3RlcD17aXNMYXN0U3RlcH1cbiAgICAgICAgICBpc0NoZWNrZWRTdGVwPXtpc0NoZWNrZWRTdGVwfVxuICAgICAgICA+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L1N0ZXBUZXh0PlxuICAgICAgICA8U3RlcENvbnRhaW5lclxuICAgICAgICAgIGRpc2FibGVkPXtpc0Rpc2FibGVkU3RlcH1cbiAgICAgICAgICBjaGVja2VkPXtpc0NoZWNrZWRTdGVwfVxuICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtpc0NoZWNrZWRTdGVwID8gKFxuICAgICAgICAgICAgPFN2Z0ljb24gaGVpZ2h0PXs3fSB3aWR0aD17MTB9IHNyYz17Q2hlY2tJY29ufSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8Q2lyY2xlIGRpc2FibGVkPXtpc0Rpc2FibGVkU3RlcH0gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1N0ZXBDb250YWluZXI+XG4gICAgICA8L1N0ZXBXcmFwcGVyPlxuICAgICAgeyFpc0xhc3RTdGVwICYmIDxMaW5lIGRpc2FibGVkPXshaXNGaXJzdFN0ZXAgJiYgIWlzQ29tcGxldGVkU3RlcH0gLz59XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9ncmVzc0xpbmUoeyBzdGVwcywgY3VycmVudElkeCB9OiBQcm9ncmVzc0xpbmVQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxGbGV4Um93IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICB7c3RlcHMubWFwKChsYWJlbCwgaWR4KSA9PlxuICAgICAgICByZW5kZXJTdGVwKGxhYmVsLCBpZHgsIGN1cnJlbnRJZHgsIHN0ZXBzLmxlbmd0aClcbiAgICAgICl9XG4gICAgPC9GbGV4Um93PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0xpbmU7XG4iXX0=