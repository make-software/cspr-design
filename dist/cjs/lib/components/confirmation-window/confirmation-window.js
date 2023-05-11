"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmationWindow = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var flex_column_1 = tslib_1.__importDefault(require("../flex-column/flex-column"));
var button_1 = tslib_1.__importDefault(require("../button/button"));
var body_text_1 = tslib_1.__importDefault(require("../body-text/body-text"));
var react_modal_1 = tslib_1.__importDefault(require("react-modal"));
var modal_header_1 = tslib_1.__importDefault(require("./modal-header"));
var subtitle_text_1 = tslib_1.__importDefault(require("../subtitle-text/subtitle-text"));
var ModalContainer = (0, styled_components_1.default)(flex_column_1.default)(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        width: ['311px', '400px', '462px'],
    });
});
var StyledCaption = styled_components_1.default.div(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        textAlign: 'center',
        marginBottom: '16px',
    });
});
var StyledCaptionText = (0, styled_components_1.default)(subtitle_text_1.default)(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        fontWeight: [600, 600, 700],
    });
});
var InformationText = (0, styled_components_1.default)(body_text_1.default)(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        textAlign: 'center',
        color: theme.styleguideColors.contentSecondary,
    });
});
var ButtonsContainer = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        marginTop: ['32px', '32px', '56px'],
        flexDirection: ['column', 'row', 'row'],
    });
});
var ConfirmationWindow = function (_a) {
    var isOpen = _a.isOpen, title = _a.title, withHeader = _a.withHeader, headerLogoSrc = _a.headerLogoSrc, information = _a.information, confirmLabel = _a.confirmLabel, confirmColor = _a.confirmColor, onConfirm = _a.onConfirm, dismissLabel = _a.dismissLabel, onDismiss = _a.onDismiss;
    var modalStyle = {
        overlay: {
            backgroundColor: '#0E1126A0',
        },
        content: {
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            borderRadius: '12px',
            padding: '32px 16px 16px',
            top: '50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: isOpen && ((0, jsx_runtime_1.jsx)(react_modal_1.default, tslib_1.__assign({ isOpen: isOpen, style: modalStyle, onRequestClose: onDismiss, shouldCloseOnEsc: true, shouldCloseOnOverlayClick: true, portalClassName: 'cspr' }, { children: (0, jsx_runtime_1.jsxs)(ModalContainer, { children: [withHeader && ((0, jsx_runtime_1.jsx)(modal_header_1.default, { headerLogoSrc: headerLogoSrc, onDismiss: onDismiss })), (0, jsx_runtime_1.jsx)(StyledCaption, { children: (0, jsx_runtime_1.jsx)(StyledCaptionText, tslib_1.__assign({ size: 1, scale: "lg" }, { children: title })) }), (0, jsx_runtime_1.jsx)(flex_row_1.default, { children: (0, jsx_runtime_1.jsx)(InformationText, tslib_1.__assign({ size: 3, scale: "sm" }, { children: information })) }), (0, jsx_runtime_1.jsxs)(ButtonsContainer, tslib_1.__assign({ gap: '16px', justify: 'space-between' }, { children: [dismissLabel && ((0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ color: 'secondaryBlue', onClick: onDismiss }, { children: dismissLabel }))), (0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ color: confirmColor === 'red' ? 'primaryRed' : 'primaryBlue', onClick: onConfirm }, { children: confirmLabel }))] }))] }) }))) }));
};
exports.ConfirmationWindow = ConfirmationWindow;
exports.default = exports.ConfirmationWindow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLXdpbmRvdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9jb25maXJtYXRpb24td2luZG93L2NvbmZpcm1hdGlvbi13aW5kb3cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBQ3ZDLDBFQUEyQztBQUMzQyxtRkFBb0Q7QUFDcEQsb0VBQXNDO0FBQ3RDLDZFQUE4QztBQUM5QyxvRUFBcUM7QUFDckMsd0VBQXlDO0FBQ3pDLHlGQUEwRDtBQWUxRCxJQUFNLGNBQWMsR0FBRyxJQUFBLDJCQUFNLEVBQUMscUJBQVUsQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUNoRCxPQUFBLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDZCxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztLQUNuQyxDQUFDO0FBRkYsQ0FFRSxDQUNILENBQUM7QUFFRixJQUFNLGFBQWEsR0FBRywyQkFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFDdkMsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsU0FBUyxFQUFFLFFBQVE7UUFDbkIsWUFBWSxFQUFFLE1BQU07S0FDckIsQ0FBQztBQUhGLENBR0UsQ0FDSCxDQUFDO0FBRUYsSUFBTSxpQkFBaUIsR0FBRyxJQUFBLDJCQUFNLEVBQUMsdUJBQVksQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUNyRCxPQUFBLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDZCxVQUFVLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztLQUM1QixDQUFDO0FBRkYsQ0FFRSxDQUNILENBQUM7QUFFRixJQUFNLGVBQWUsR0FBRyxJQUFBLDJCQUFNLEVBQUMsbUJBQVEsQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUMvQyxPQUFBLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDZCxTQUFTLEVBQUUsUUFBUTtRQUNuQixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQjtLQUMvQyxDQUFDO0FBSEYsQ0FHRSxDQUNILENBQUM7QUFFRixJQUFNLGdCQUFnQixHQUFHLElBQUEsMkJBQU0sRUFBQyxrQkFBTyxDQUFDLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQy9DLE9BQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNkLFNBQVMsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ25DLGFBQWEsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO0tBQ3hDLENBQUM7QUFIRixDQUdFLENBQ0gsQ0FBQztBQUVLLElBQU0sa0JBQWtCLEdBQUcsVUFBQyxFQVdKO1FBVjdCLE1BQU0sWUFBQSxFQUNOLEtBQUssV0FBQSxFQUNMLFVBQVUsZ0JBQUEsRUFDVixhQUFhLG1CQUFBLEVBQ2IsV0FBVyxpQkFBQSxFQUNYLFlBQVksa0JBQUEsRUFDWixZQUFZLGtCQUFBLEVBQ1osU0FBUyxlQUFBLEVBQ1QsWUFBWSxrQkFBQSxFQUNaLFNBQVMsZUFBQTtJQUVULElBQU0sVUFBVSxHQUFHO1FBQ2pCLE9BQU8sRUFBRTtZQUNQLGVBQWUsRUFBRSxXQUFXO1NBQzdCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLEtBQUs7WUFDWCxLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxNQUFNO1lBQ2QsWUFBWSxFQUFFLE1BQU07WUFDcEIsT0FBTyxFQUFFLGdCQUFnQjtZQUN6QixHQUFHLEVBQUUsS0FBSztZQUNWLFNBQVMsRUFBRSx1QkFBdUI7U0FDbkM7S0FDRixDQUFDO0lBRUYsT0FBTyxDQUNMLDJEQUNHLE1BQU0sSUFBSSxDQUNULHVCQUFDLHFCQUFVLHFCQUNULE1BQU0sRUFBRSxNQUFNLEVBQ2QsS0FBSyxFQUFFLFVBQVUsRUFDakIsY0FBYyxFQUFFLFNBQVMsRUFDekIsZ0JBQWdCLFFBQ2hCLHlCQUF5QixRQUN6QixlQUFlLEVBQUUsTUFBTSxnQkFFdkIsd0JBQUMsY0FBYyxlQUNaLFVBQVUsSUFBSSxDQUNiLHVCQUFDLHNCQUFXLElBQ1YsYUFBYSxFQUFFLGFBQWEsRUFDNUIsU0FBUyxFQUFFLFNBQVMsR0FDcEIsQ0FDSCxFQUNELHVCQUFDLGFBQWEsY0FDWix1QkFBQyxpQkFBaUIscUJBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUMsSUFBSSxnQkFDbkMsS0FBSyxJQUNZLEdBQ04sRUFDaEIsdUJBQUMsa0JBQU8sY0FDTix1QkFBQyxlQUFlLHFCQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFDLElBQUksZ0JBQ2pDLFdBQVcsSUFDSSxHQUNWLEVBQ1Ysd0JBQUMsZ0JBQWdCLHFCQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLGVBQWUsaUJBQ3BELFlBQVksSUFBSSxDQUNmLHVCQUFDLGdCQUFNLHFCQUFDLEtBQUssRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLFNBQVMsZ0JBQy9DLFlBQVksSUFDTixDQUNWLEVBQ0QsdUJBQUMsZ0JBQU0scUJBQ0wsS0FBSyxFQUFFLFlBQVksS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUM1RCxPQUFPLEVBQUUsU0FBUyxnQkFFakIsWUFBWSxJQUNOLEtBQ1EsSUFDSixJQUNOLENBQ2QsR0FDQSxDQUNKLENBQUM7QUFDSixDQUFDLENBQUM7QUF6RVcsUUFBQSxrQkFBa0Isc0JBeUU3QjtBQUVGLGtCQUFlLDBCQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSAnLi4vZmxleC1jb2x1bW4vZmxleC1jb2x1bW4nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24vYnV0dG9uJztcbmltcG9ydCBCb2R5VGV4dCBmcm9tICcuLi9ib2R5LXRleHQvYm9keS10ZXh0JztcbmltcG9ydCBSZWFjdE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcbmltcG9ydCBNb2RhbEhlYWRlciBmcm9tICcuL21vZGFsLWhlYWRlcic7XG5pbXBvcnQgU3VidGl0bGVUZXh0IGZyb20gJy4uL3N1YnRpdGxlLXRleHQvc3VidGl0bGUtdGV4dCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybWF0aW9uV2luZG93U2NlbmVQcm9wcyB7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgdGl0bGU6IHN0cmluZztcbiAgd2l0aEhlYWRlcj86IGJvb2xlYW47XG4gIGhlYWRlckxvZ29TcmM/OiBzdHJpbmc7XG4gIGluZm9ybWF0aW9uPzogc3RyaW5nO1xuICBjb25maXJtTGFiZWw6IHN0cmluZztcbiAgb25Db25maXJtOiAoKSA9PiB2b2lkO1xuICBjb25maXJtQ29sb3I/OiBzdHJpbmc7XG4gIGRpc21pc3NMYWJlbD86IHN0cmluZztcbiAgb25EaXNtaXNzOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBNb2RhbENvbnRhaW5lciA9IHN0eWxlZChGbGV4Q29sdW1uKSgoeyB0aGVtZSB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIHdpZHRoOiBbJzMxMXB4JywgJzQwMHB4JywgJzQ2MnB4J10sXG4gIH0pXG4pO1xuXG5jb25zdCBTdHlsZWRDYXB0aW9uID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXG4gIH0pXG4pO1xuXG5jb25zdCBTdHlsZWRDYXB0aW9uVGV4dCA9IHN0eWxlZChTdWJ0aXRsZVRleHQpKCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgZm9udFdlaWdodDogWzYwMCwgNjAwLCA3MDBdLFxuICB9KVxuKTtcblxuY29uc3QgSW5mb3JtYXRpb25UZXh0ID0gc3R5bGVkKEJvZHlUZXh0KSgoeyB0aGVtZSB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcbiAgfSlcbik7XG5cbmNvbnN0IEJ1dHRvbnNDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdykoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICBtYXJnaW5Ub3A6IFsnMzJweCcsICczMnB4JywgJzU2cHgnXSxcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsICdyb3cnLCAncm93J10sXG4gIH0pXG4pO1xuXG5leHBvcnQgY29uc3QgQ29uZmlybWF0aW9uV2luZG93ID0gKHtcbiAgaXNPcGVuLFxuICB0aXRsZSxcbiAgd2l0aEhlYWRlcixcbiAgaGVhZGVyTG9nb1NyYyxcbiAgaW5mb3JtYXRpb24sXG4gIGNvbmZpcm1MYWJlbCxcbiAgY29uZmlybUNvbG9yLFxuICBvbkNvbmZpcm0sXG4gIGRpc21pc3NMYWJlbCxcbiAgb25EaXNtaXNzLFxufTogQ29uZmlybWF0aW9uV2luZG93U2NlbmVQcm9wcykgPT4ge1xuICBjb25zdCBtb2RhbFN0eWxlID0ge1xuICAgIG92ZXJsYXk6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwRTExMjZBMCcsXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgICBib3R0b206ICdhdXRvJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzEycHgnLFxuICAgICAgcGFkZGluZzogJzMycHggMTZweCAxNnB4JyxcbiAgICAgIHRvcDogJzUwJScsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2lzT3BlbiAmJiAoXG4gICAgICAgIDxSZWFjdE1vZGFsXG4gICAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgICAgc3R5bGU9e21vZGFsU3R5bGV9XG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e29uRGlzbWlzc31cbiAgICAgICAgICBzaG91bGRDbG9zZU9uRXNjXG4gICAgICAgICAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGlja1xuICAgICAgICAgIHBvcnRhbENsYXNzTmFtZT17J2NzcHInfVxuICAgICAgICA+XG4gICAgICAgICAgPE1vZGFsQ29udGFpbmVyPlxuICAgICAgICAgICAge3dpdGhIZWFkZXIgJiYgKFxuICAgICAgICAgICAgICA8TW9kYWxIZWFkZXJcbiAgICAgICAgICAgICAgICBoZWFkZXJMb2dvU3JjPXtoZWFkZXJMb2dvU3JjfVxuICAgICAgICAgICAgICAgIG9uRGlzbWlzcz17b25EaXNtaXNzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxTdHlsZWRDYXB0aW9uPlxuICAgICAgICAgICAgICA8U3R5bGVkQ2FwdGlvblRleHQgc2l6ZT17MX0gc2NhbGU9XCJsZ1wiPlxuICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgPC9TdHlsZWRDYXB0aW9uVGV4dD5cbiAgICAgICAgICAgIDwvU3R5bGVkQ2FwdGlvbj5cbiAgICAgICAgICAgIDxGbGV4Um93PlxuICAgICAgICAgICAgICA8SW5mb3JtYXRpb25UZXh0IHNpemU9ezN9IHNjYWxlPVwic21cIj5cbiAgICAgICAgICAgICAgICB7aW5mb3JtYXRpb259XG4gICAgICAgICAgICAgIDwvSW5mb3JtYXRpb25UZXh0PlxuICAgICAgICAgICAgPC9GbGV4Um93PlxuICAgICAgICAgICAgPEJ1dHRvbnNDb250YWluZXIgZ2FwPXsnMTZweCd9IGp1c3RpZnk9eydzcGFjZS1iZXR3ZWVuJ30+XG4gICAgICAgICAgICAgIHtkaXNtaXNzTGFiZWwgJiYgKFxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9eydzZWNvbmRhcnlCbHVlJ30gb25DbGljaz17b25EaXNtaXNzfT5cbiAgICAgICAgICAgICAgICAgIHtkaXNtaXNzTGFiZWx9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjb2xvcj17Y29uZmlybUNvbG9yID09PSAncmVkJyA/ICdwcmltYXJ5UmVkJyA6ICdwcmltYXJ5Qmx1ZSd9XG4gICAgICAgICAgICAgICAgb25DbGljaz17b25Db25maXJtfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvbmZpcm1MYWJlbH1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0J1dHRvbnNDb250YWluZXI+XG4gICAgICAgICAgPC9Nb2RhbENvbnRhaW5lcj5cbiAgICAgICAgPC9SZWFjdE1vZGFsPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpcm1hdGlvbldpbmRvdztcbiJdfQ==