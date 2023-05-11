"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var svg_icon_1 = tslib_1.__importDefault(require("../svg-icon/svg-icon"));
var cspr_live_full_svg_1 = tslib_1.__importDefault(require("../../assets/icons/logos/cspr-live-full.svg"));
var ic_close_svg_1 = tslib_1.__importDefault(require("../../assets/icons/ic-close.svg"));
var ModalHeaderContainer = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        marginBottom: ['40px', '46px', '46px'],
    });
});
var CloseButton = styled_components_1.default.div(function () { return ({
    cursor: 'pointer',
    padding: '0 10px',
}); });
var StyledSvgIcon = (0, styled_components_1.default)(svg_icon_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        path: {
            stroke: theme.styleguideColors.contentBlue,
        },
    });
});
var StyledImg = styled_components_1.default.img(function () { return ({
    marginLeft: '4px',
}); });
var ModalHeader = function (_a) {
    var onDismiss = _a.onDismiss, headerLogoSrc = _a.headerLogoSrc;
    return ((0, jsx_runtime_1.jsxs)(ModalHeaderContainer, tslib_1.__assign({ justify: "space-between", align: "center" }, { children: [(0, jsx_runtime_1.jsx)(StyledImg, { src: headerLogoSrc ? headerLogoSrc : cspr_live_full_svg_1.default, alt: "CSPR logo" }), (0, jsx_runtime_1.jsx)(CloseButton, tslib_1.__assign({ onClick: onDismiss }, { children: (0, jsx_runtime_1.jsx)(StyledSvgIcon, { src: ic_close_svg_1.default, size: 16 }) }))] })));
};
exports.default = ModalHeader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi13aW5kb3cvbW9kYWwtaGVhZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsZ0ZBQXVDO0FBQ3ZDLDBFQUEyQztBQUMzQywwRUFBMkM7QUFDM0MsMkdBQXVFO0FBQ3ZFLHlGQUF3RDtBQUV4RCxJQUFNLG9CQUFvQixHQUFHLElBQUEsMkJBQU0sRUFBQyxrQkFBTyxDQUFDLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQ25ELE9BQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNkLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO0tBQ3ZDLENBQUM7QUFGRixDQUVFLENBQ0gsQ0FBQztBQUVGLElBQU0sV0FBVyxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFDLGNBQU0sT0FBQSxDQUFDO0lBQ3BDLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLE9BQU8sRUFBRSxRQUFRO0NBQ2xCLENBQUMsRUFIbUMsQ0FHbkMsQ0FBQyxDQUFDO0FBRUosSUFBTSxhQUFhLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDcEQsSUFBSSxFQUFFO1lBQ0osTUFBTSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO1NBQzNDO0tBQ0YsQ0FBQztBQUptRCxDQUluRCxDQUFDLENBQUM7QUFFSixJQUFNLFNBQVMsR0FBRywyQkFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsQ0FBQztJQUNsQyxVQUFVLEVBQUUsS0FBSztDQUNsQixDQUFDLEVBRmlDLENBRWpDLENBQUMsQ0FBQztBQU9KLElBQU0sV0FBVyxHQUFHLFVBQUMsRUFBOEM7UUFBNUMsU0FBUyxlQUFBLEVBQUUsYUFBYSxtQkFBQTtJQUM3QyxPQUFPLENBQ0wsd0JBQUMsb0JBQW9CLHFCQUFDLE9BQU8sRUFBQyxlQUFlLEVBQUMsS0FBSyxFQUFDLFFBQVEsaUJBQzFELHVCQUFDLFNBQVMsSUFDUixHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLDRCQUFZLEVBQ2pELEdBQUcsRUFBQyxXQUFXLEdBQ2YsRUFDRix1QkFBQyxXQUFXLHFCQUFDLE9BQU8sRUFBRSxTQUFTLGdCQUM3Qix1QkFBQyxhQUFhLElBQUMsR0FBRyxFQUFFLHNCQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBSSxJQUMvQixLQUNPLENBQ3hCLENBQUM7QUFDSixDQUFDLENBQUM7QUFDRixrQkFBZSxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgRmxleFJvdyBmcm9tICcuLi9mbGV4LXJvdy9mbGV4LXJvdyc7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tICcuLi9zdmctaWNvbi9zdmctaWNvbic7XG5pbXBvcnQgQ1NQUkxpdmVMb2dvIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9sb2dvcy9jc3ByLWxpdmUtZnVsbC5zdmcnO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtY2xvc2Uuc3ZnJztcblxuY29uc3QgTW9kYWxIZWFkZXJDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdykoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICBtYXJnaW5Cb3R0b206IFsnNDBweCcsICc0NnB4JywgJzQ2cHgnXSxcbiAgfSlcbik7XG5cbmNvbnN0IENsb3NlQnV0dG9uID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgcGFkZGluZzogJzAgMTBweCcsXG59KSk7XG5cbmNvbnN0IFN0eWxlZFN2Z0ljb24gPSBzdHlsZWQoU3ZnSWNvbikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgcGF0aDoge1xuICAgIHN0cm9rZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgfSxcbn0pKTtcblxuY29uc3QgU3R5bGVkSW1nID0gc3R5bGVkLmltZygoKSA9PiAoe1xuICBtYXJnaW5MZWZ0OiAnNHB4Jyxcbn0pKTtcblxuaW50ZXJmYWNlIE1vZGFsSGVhZGVyUHJvcHMge1xuICBvbkRpc21pc3M6ICgpID0+IHZvaWQ7XG4gIGhlYWRlckxvZ29TcmM/OiBzdHJpbmc7XG59XG5cbmNvbnN0IE1vZGFsSGVhZGVyID0gKHsgb25EaXNtaXNzLCBoZWFkZXJMb2dvU3JjIH06IE1vZGFsSGVhZGVyUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TW9kYWxIZWFkZXJDb250YWluZXIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgPFN0eWxlZEltZ1xuICAgICAgICBzcmM9e2hlYWRlckxvZ29TcmMgPyBoZWFkZXJMb2dvU3JjIDogQ1NQUkxpdmVMb2dvfVxuICAgICAgICBhbHQ9XCJDU1BSIGxvZ29cIlxuICAgICAgLz5cbiAgICAgIDxDbG9zZUJ1dHRvbiBvbkNsaWNrPXtvbkRpc21pc3N9PlxuICAgICAgICA8U3R5bGVkU3ZnSWNvbiBzcmM9e0Nsb3NlSWNvbn0gc2l6ZT17MTZ9IC8+XG4gICAgICA8L0Nsb3NlQnV0dG9uPlxuICAgIDwvTW9kYWxIZWFkZXJDb250YWluZXI+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTW9kYWxIZWFkZXI7XG4iXX0=