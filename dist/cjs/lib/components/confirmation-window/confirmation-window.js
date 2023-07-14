"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmationWindow = exports.ModalPosition = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var flex_column_1 = tslib_1.__importDefault(require("../flex-column/flex-column"));
var button_1 = tslib_1.__importDefault(require("../button/button"));
var body_text_1 = tslib_1.__importDefault(require("../body-text/body-text"));
var react_modal_1 = tslib_1.__importDefault(require("react-modal"));
var modal_header_1 = tslib_1.__importDefault(require("../modal-header/modal-header"));
var subtitle_text_1 = tslib_1.__importDefault(require("../subtitle-text/subtitle-text"));
var ModalPosition;
(function (ModalPosition) {
    ModalPosition["TopRight"] = "topRight";
    ModalPosition["Center"] = "center";
})(ModalPosition = exports.ModalPosition || (exports.ModalPosition = {}));
var centerModalStyles = {
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    border: 'none',
    borderRadius: '12px',
    padding: '32px 24px 24px 24px',
    top: '50%',
    transform: 'translate(-50%, -50%)',
};
var topModalStyles = {
    top: '40px',
    left: 'auto',
    right: '40px',
    border: 'none',
    bottom: 'auto',
    borderRadius: '12px',
    padding: '16px 24px 24px 24px',
};
var ModalContainer = (0, styled_components_1.default)(flex_column_1.default)(function (_a) {
    var theme = _a.theme, position = _a.position;
    return theme.withMedia({
        width: position === ModalPosition.TopRight
            ? ['261px', '350px', '350px']
            : ['261px', '400px', '446px'],
        background: theme.styleguideColors.backgroundPrimary,
        borderColor: theme.styleguideColors.backgroundPrimary,
    });
});
var ImageWrapper = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        margin: '15px 0 35px 0',
    });
});
var StyledCaption = styled_components_1.default.div(function (_a) {
    var theme = _a.theme, position = _a.position;
    return theme.withMedia({
        textAlign: position === ModalPosition.TopRight ? 'left' : 'center',
        marginBottom: '16px',
    });
});
var StyledCaptionText = (0, styled_components_1.default)(subtitle_text_1.default)(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        fontWeight: [600, 600, 700],
        fontSize: ['20px', '24px', '24px'],
        color: theme.styleguideColors.contentPrimary,
    });
});
var InformationText = (0, styled_components_1.default)(body_text_1.default)(function (_a) {
    var theme = _a.theme, position = _a.position;
    return theme.withMedia({
        textAlign: position === ModalPosition.TopRight ? 'left' : 'center',
        color: theme.styleguideColors.contentSecondary,
    });
});
var ButtonsContainer = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme, position = _a.position;
    return theme.withMedia({
        marginTop: position === ModalPosition.TopRight ? '40px' : ['32px', '32px', '56px'],
        flexDirection: ['column', 'row', 'row'],
    });
});
var ConfirmationWindow = function (_a) {
    var isOpen = _a.isOpen, position = _a.position, title = _a.title, withHeader = _a.withHeader, headerLogo = _a.headerLogo, bodyImg = _a.bodyImg, information = _a.information, confirmLabel = _a.confirmLabel, confirmColor = _a.confirmColor, onConfirm = _a.onConfirm, dismissLabel = _a.dismissLabel, onDismiss = _a.onDismiss, themeMode = _a.themeMode, _b = _a.portalClass, portalClass = _b === void 0 ? 'portal' : _b;
    var theme = (0, styled_components_1.useTheme)();
    var modalStyle = {
        overlay: {
            backgroundColor: '#0E1126A0',
            zIndex: 15,
        },
        content: position === ModalPosition.TopRight
            ? tslib_1.__assign(tslib_1.__assign({}, topModalStyles), {
                backgroundColor: theme.styleguideColors.backgroundPrimary,
                borderColor: theme.styleguideColors.backgroundPrimary,
            }) : tslib_1.__assign(tslib_1.__assign({}, centerModalStyles), {
            backgroundColor: theme.styleguideColors.backgroundPrimary,
            borderColor: theme.styleguideColors.backgroundPrimary,
        }),
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: isOpen && ((0, jsx_runtime_1.jsx)(react_modal_1.default, tslib_1.__assign({ isOpen: isOpen, style: modalStyle, onRequestClose: onDismiss, shouldCloseOnEsc: true, shouldCloseOnOverlayClick: true, portalClassName: portalClass }, { children: (0, jsx_runtime_1.jsxs)(ModalContainer, tslib_1.__assign({ position: position }, { children: [withHeader && ((0, jsx_runtime_1.jsx)(modal_header_1.default, { themeMode: themeMode, headerLogo: headerLogo, onDismiss: onDismiss })), bodyImg && (0, jsx_runtime_1.jsx)(ImageWrapper, tslib_1.__assign({ justify: "center" }, { children: bodyImg })), (0, jsx_runtime_1.jsx)(StyledCaption, tslib_1.__assign({ position: position }, { children: (0, jsx_runtime_1.jsx)(StyledCaptionText, tslib_1.__assign({ size: 1, scale: "lg" }, { children: title })) })), (0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ justify: "center" }, { children: (0, jsx_runtime_1.jsx)(InformationText, tslib_1.__assign({ position: position, size: 3, scale: "sm" }, { children: information })) })), (0, jsx_runtime_1.jsxs)(ButtonsContainer, tslib_1.__assign({ position: position, gap: '16px', justify: 'space-between' }, { children: [dismissLabel && ((0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ color: 'secondaryBlue', onClick: onDismiss }, { children: dismissLabel }))), (0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ color: confirmColor === 'red' ? 'primaryRed' : 'primaryBlue', onClick: onConfirm }, { children: confirmLabel }))] }))] })) }))) }));
};
exports.ConfirmationWindow = ConfirmationWindow;
exports.default = exports.ConfirmationWindow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLXdpbmRvdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9jb25maXJtYXRpb24td2luZG93L2NvbmZpcm1hdGlvbi13aW5kb3cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsNkVBQXFEO0FBQ3JELDBFQUEyQztBQUMzQyxtRkFBb0Q7QUFDcEQsb0VBQXNDO0FBQ3RDLDZFQUE4QztBQUM5QyxvRUFBcUM7QUFDckMsc0ZBQXVEO0FBQ3ZELHlGQUEwRDtBQUcxRCxJQUFZLGFBR1g7QUFIRCxXQUFZLGFBQWE7SUFDdkIsc0NBQXFCLENBQUE7SUFDckIsa0NBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUhXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBR3hCO0FBdUJELElBQU0saUJBQWlCLEdBQUc7SUFDeEIsSUFBSSxFQUFFLEtBQUs7SUFDWCxLQUFLLEVBQUUsTUFBTTtJQUNiLE1BQU0sRUFBRSxNQUFNO0lBQ2QsTUFBTSxFQUFFLE1BQU07SUFDZCxZQUFZLEVBQUUsTUFBTTtJQUNwQixPQUFPLEVBQUUscUJBQXFCO0lBQzlCLEdBQUcsRUFBRSxLQUFLO0lBQ1YsU0FBUyxFQUFFLHVCQUF1QjtDQUNuQyxDQUFDO0FBRUYsSUFBTSxjQUFjLEdBQUc7SUFDckIsR0FBRyxFQUFFLE1BQU07SUFDWCxJQUFJLEVBQUUsTUFBTTtJQUNaLEtBQUssRUFBRSxNQUFNO0lBQ2IsTUFBTSxFQUFFLE1BQU07SUFDZCxNQUFNLEVBQUUsTUFBTTtJQUNkLFlBQVksRUFBRSxNQUFNO0lBQ3BCLE9BQU8sRUFBRSxxQkFBcUI7Q0FDL0IsQ0FBQztBQUVGLElBQU0sY0FBYyxHQUFHLElBQUEsMkJBQU0sRUFBQyxxQkFBVSxDQUFDLENBQ3ZDLFVBQUMsRUFBbUI7UUFBakIsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBO0lBQ2hCLE9BQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNkLEtBQUssRUFDSCxRQUFRLEtBQUssYUFBYSxDQUFDLFFBQVE7WUFDakMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7UUFDakMsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7UUFDcEQsV0FBVyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7S0FDdEQsQ0FBQztBQVBGLENBT0UsQ0FDTCxDQUFDO0FBRUYsSUFBTSxZQUFZLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFDM0MsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsTUFBTSxFQUFFLGVBQWU7S0FDeEIsQ0FBQztBQUZGLENBRUUsQ0FDSCxDQUFDO0FBRUYsSUFBTSxhQUFhLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQXFCLFVBQUMsRUFBbUI7UUFBakIsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBO0lBQ3JFLE9BQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNkLFNBQVMsRUFBRSxRQUFRLEtBQUssYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRO1FBQ2xFLFlBQVksRUFBRSxNQUFNO0tBQ3JCLENBQUM7QUFIRixDQUdFLENBQ0gsQ0FBQztBQUVGLElBQU0saUJBQWlCLEdBQUcsSUFBQSwyQkFBTSxFQUFDLHVCQUFZLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFDckQsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDM0IsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDbEMsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjO0tBQzdDLENBQUM7QUFKRixDQUlFLENBQ0gsQ0FBQztBQUVGLElBQU0sZUFBZSxHQUFHLElBQUEsMkJBQU0sRUFBQyxtQkFBUSxDQUFDLENBQ3RDLFVBQUMsRUFBbUI7UUFBakIsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBO0lBQ2hCLE9BQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNkLFNBQVMsRUFBRSxRQUFRLEtBQUssYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRO1FBQ2xFLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCO0tBQy9DLENBQUM7QUFIRixDQUdFLENBQ0wsQ0FBQztBQUVGLElBQU0sZ0JBQWdCLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FDdEMsVUFBQyxFQUFtQjtRQUFqQixLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUE7SUFDaEIsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsU0FBUyxFQUNQLFFBQVEsS0FBSyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDekUsYUFBYSxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7S0FDeEMsQ0FBQztBQUpGLENBSUUsQ0FDTCxDQUFDO0FBRUssSUFBTSxrQkFBa0IsR0FBRyxVQUFDLEVBZUo7UUFkN0IsTUFBTSxZQUFBLEVBQ04sUUFBUSxjQUFBLEVBQ1IsS0FBSyxXQUFBLEVBQ0wsVUFBVSxnQkFBQSxFQUNWLFVBQVUsZ0JBQUEsRUFDVixPQUFPLGFBQUEsRUFDUCxXQUFXLGlCQUFBLEVBQ1gsWUFBWSxrQkFBQSxFQUNaLFlBQVksa0JBQUEsRUFDWixTQUFTLGVBQUEsRUFDVCxZQUFZLGtCQUFBLEVBQ1osU0FBUyxlQUFBLEVBQ1QsU0FBUyxlQUFBLEVBQ1QsbUJBQXNCLEVBQXRCLFdBQVcsbUJBQUcsUUFBUSxLQUFBO0lBRXRCLElBQU0sS0FBSyxHQUFHLElBQUEsNEJBQVEsR0FBRSxDQUFDO0lBRXpCLElBQU0sVUFBVSxHQUFHO1FBQ2pCLE9BQU8sRUFBRTtZQUNQLGVBQWUsRUFBRSxXQUFXO1lBQzVCLE1BQU0sRUFBRSxFQUFFO1NBQ1g7UUFDRCxPQUFPLEVBQ0wsUUFBUSxLQUFLLGFBQWEsQ0FBQyxRQUFRO1lBQ2pDLENBQUMsdUNBQ00sY0FBYyxHQUNkO2dCQUNELGVBQWUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO2dCQUN6RCxXQUFXLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjthQUN0RCxFQUVMLENBQUMsdUNBQ00saUJBQWlCLEdBQ2pCO1lBQ0QsZUFBZSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7WUFDekQsV0FBVyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7U0FDdEQsQ0FDRjtLQUNSLENBQUM7SUFFRixPQUFPLENBQ0wsMkRBQ0csTUFBTSxJQUFJLENBQ1QsdUJBQUMscUJBQVUscUJBQ1QsTUFBTSxFQUFFLE1BQU0sRUFDZCxLQUFLLEVBQUUsVUFBVSxFQUNqQixjQUFjLEVBQUUsU0FBUyxFQUN6QixnQkFBZ0IsUUFDaEIseUJBQXlCLFFBQ3pCLGVBQWUsRUFBRSxXQUFXLGdCQUU1Qix3QkFBQyxjQUFjLHFCQUFDLFFBQVEsRUFBRSxRQUFRLGlCQUMvQixVQUFVLElBQUksQ0FDYix1QkFBQyxzQkFBVyxJQUNWLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLFVBQVUsRUFBRSxVQUFVLEVBQ3RCLFNBQVMsRUFBRSxTQUFTLEdBQ3BCLENBQ0gsRUFDQSxPQUFPLElBQUksdUJBQUMsWUFBWSxxQkFBQyxPQUFPLEVBQUMsUUFBUSxnQkFBRSxPQUFPLElBQWdCLEVBQ25FLHVCQUFDLGFBQWEscUJBQUMsUUFBUSxFQUFFLFFBQVEsZ0JBQy9CLHVCQUFDLGlCQUFpQixxQkFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBQyxJQUFJLGdCQUNuQyxLQUFLLElBQ1ksSUFDTixFQUNoQix1QkFBQyxrQkFBTyxxQkFBQyxPQUFPLEVBQUMsUUFBUSxnQkFDdkIsdUJBQUMsZUFBZSxxQkFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFDLElBQUksZ0JBQ3JELFdBQVcsSUFDSSxJQUNWLEVBQ1Ysd0JBQUMsZ0JBQWdCLHFCQUNmLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLEdBQUcsRUFBRSxNQUFNLEVBQ1gsT0FBTyxFQUFFLGVBQWUsaUJBRXZCLFlBQVksSUFBSSxDQUNmLHVCQUFDLGdCQUFNLHFCQUFDLEtBQUssRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLFNBQVMsZ0JBQy9DLFlBQVksSUFDTixDQUNWLEVBQ0QsdUJBQUMsZ0JBQU0scUJBQ0wsS0FBSyxFQUFFLFlBQVksS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUM1RCxPQUFPLEVBQUUsU0FBUyxnQkFFakIsWUFBWSxJQUNOLEtBQ1EsS0FDSixJQUNOLENBQ2QsR0FDQSxDQUNKLENBQUM7QUFDSixDQUFDLENBQUM7QUE3RlcsUUFBQSxrQkFBa0Isc0JBNkY3QjtBQUVGLGtCQUFlLDBCQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgdXNlVGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgRmxleFJvdyBmcm9tICcuLi9mbGV4LXJvdy9mbGV4LXJvdyc7XG5pbXBvcnQgRmxleENvbHVtbiBmcm9tICcuLi9mbGV4LWNvbHVtbi9mbGV4LWNvbHVtbic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9idXR0b24nO1xuaW1wb3J0IEJvZHlUZXh0IGZyb20gJy4uL2JvZHktdGV4dC9ib2R5LXRleHQnO1xuaW1wb3J0IFJlYWN0TW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xuaW1wb3J0IE1vZGFsSGVhZGVyIGZyb20gJy4uL21vZGFsLWhlYWRlci9tb2RhbC1oZWFkZXInO1xuaW1wb3J0IFN1YnRpdGxlVGV4dCBmcm9tICcuLi9zdWJ0aXRsZS10ZXh0L3N1YnRpdGxlLXRleHQnO1xuaW1wb3J0IHsgVGhlbWVNb2RlVHlwZSB9IGZyb20gJy4uL25hdmlnYXRpb24vY3Nwci1wcm9kdWN0cy1tZW51L3Byb2R1Y3RzLW1lbnUtaXRlbSc7XG5cbmV4cG9ydCBlbnVtIE1vZGFsUG9zaXRpb24ge1xuICBUb3BSaWdodCA9ICd0b3BSaWdodCcsXG4gIENlbnRlciA9ICdjZW50ZXInLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vZGFsUG9zaXRpb25Qcm9wcyB7XG4gIHBvc2l0aW9uOiBNb2RhbFBvc2l0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpcm1hdGlvbldpbmRvd1NjZW5lUHJvcHMge1xuICBpc09wZW46IGJvb2xlYW47XG4gIGJvZHlJbWc/OiBSZWFjdC5SZWFjdEVsZW1lbnQ7XG4gIHBvc2l0aW9uOiBNb2RhbFBvc2l0aW9uO1xuICB0aXRsZTogc3RyaW5nO1xuICB3aXRoSGVhZGVyPzogYm9vbGVhbjtcbiAgaGVhZGVyTG9nbz86IFJlYWN0LlJlYWN0RWxlbWVudDtcbiAgaW5mb3JtYXRpb24/OiBSZWFjdC5SZWFjdEVsZW1lbnQgfCBzdHJpbmc7XG4gIGNvbmZpcm1MYWJlbDogc3RyaW5nO1xuICBvbkNvbmZpcm06ICgpID0+IHZvaWQ7XG4gIGNvbmZpcm1Db2xvcj86IHN0cmluZztcbiAgZGlzbWlzc0xhYmVsPzogc3RyaW5nO1xuICBvbkRpc21pc3M6ICgpID0+IHZvaWQ7XG4gIHRoZW1lTW9kZT86IFRoZW1lTW9kZVR5cGU7XG4gIHBvcnRhbENsYXNzPzogc3RyaW5nO1xufVxuXG5jb25zdCBjZW50ZXJNb2RhbFN0eWxlcyA9IHtcbiAgbGVmdDogJzUwJScsXG4gIHJpZ2h0OiAnYXV0bycsXG4gIGJvdHRvbTogJ2F1dG8nLFxuICBib3JkZXI6ICdub25lJyxcbiAgYm9yZGVyUmFkaXVzOiAnMTJweCcsXG4gIHBhZGRpbmc6ICczMnB4IDI0cHggMjRweCAyNHB4JyxcbiAgdG9wOiAnNTAlJyxcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbn07XG5cbmNvbnN0IHRvcE1vZGFsU3R5bGVzID0ge1xuICB0b3A6ICc0MHB4JyxcbiAgbGVmdDogJ2F1dG8nLFxuICByaWdodDogJzQwcHgnLFxuICBib3JkZXI6ICdub25lJyxcbiAgYm90dG9tOiAnYXV0bycsXG4gIGJvcmRlclJhZGl1czogJzEycHgnLFxuICBwYWRkaW5nOiAnMTZweCAyNHB4IDI0cHggMjRweCcsXG59O1xuXG5jb25zdCBNb2RhbENvbnRhaW5lciA9IHN0eWxlZChGbGV4Q29sdW1uKTxNb2RhbFBvc2l0aW9uUHJvcHM+KFxuICAoeyB0aGVtZSwgcG9zaXRpb24gfSkgPT5cbiAgICB0aGVtZS53aXRoTWVkaWEoe1xuICAgICAgd2lkdGg6XG4gICAgICAgIHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0XG4gICAgICAgICAgPyBbJzI2MXB4JywgJzM1MHB4JywgJzM1MHB4J11cbiAgICAgICAgICA6IFsnMjYxcHgnLCAnNDAwcHgnLCAnNDQ2cHgnXSxcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICB9KVxuKTtcblxuY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkKEZsZXhSb3cpKCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgbWFyZ2luOiAnMTVweCAwIDM1cHggMCcsXG4gIH0pXG4pO1xuXG5jb25zdCBTdHlsZWRDYXB0aW9uID0gc3R5bGVkLmRpdjxNb2RhbFBvc2l0aW9uUHJvcHM+KCh7IHRoZW1lLCBwb3NpdGlvbiB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIHRleHRBbGlnbjogcG9zaXRpb24gPT09IE1vZGFsUG9zaXRpb24uVG9wUmlnaHQgPyAnbGVmdCcgOiAnY2VudGVyJyxcbiAgICBtYXJnaW5Cb3R0b206ICcxNnB4JyxcbiAgfSlcbik7XG5cbmNvbnN0IFN0eWxlZENhcHRpb25UZXh0ID0gc3R5bGVkKFN1YnRpdGxlVGV4dCkoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICBmb250V2VpZ2h0OiBbNjAwLCA2MDAsIDcwMF0sXG4gICAgZm9udFNpemU6IFsnMjBweCcsICcyNHB4JywgJzI0cHgnXSxcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcbiAgfSlcbik7XG5cbmNvbnN0IEluZm9ybWF0aW9uVGV4dCA9IHN0eWxlZChCb2R5VGV4dCk8TW9kYWxQb3NpdGlvblByb3BzPihcbiAgKHsgdGhlbWUsIHBvc2l0aW9uIH0pID0+XG4gICAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICAgIHRleHRBbGlnbjogcG9zaXRpb24gPT09IE1vZGFsUG9zaXRpb24uVG9wUmlnaHQgPyAnbGVmdCcgOiAnY2VudGVyJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG4gICAgfSlcbik7XG5cbmNvbnN0IEJ1dHRvbnNDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8TW9kYWxQb3NpdGlvblByb3BzPihcbiAgKHsgdGhlbWUsIHBvc2l0aW9uIH0pID0+XG4gICAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICAgIG1hcmdpblRvcDpcbiAgICAgICAgcG9zaXRpb24gPT09IE1vZGFsUG9zaXRpb24uVG9wUmlnaHQgPyAnNDBweCcgOiBbJzMycHgnLCAnMzJweCcsICc1NnB4J10sXG4gICAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsICdyb3cnLCAncm93J10sXG4gICAgfSlcbik7XG5cbmV4cG9ydCBjb25zdCBDb25maXJtYXRpb25XaW5kb3cgPSAoe1xuICBpc09wZW4sXG4gIHBvc2l0aW9uLFxuICB0aXRsZSxcbiAgd2l0aEhlYWRlcixcbiAgaGVhZGVyTG9nbyxcbiAgYm9keUltZyxcbiAgaW5mb3JtYXRpb24sXG4gIGNvbmZpcm1MYWJlbCxcbiAgY29uZmlybUNvbG9yLFxuICBvbkNvbmZpcm0sXG4gIGRpc21pc3NMYWJlbCxcbiAgb25EaXNtaXNzLFxuICB0aGVtZU1vZGUsXG4gIHBvcnRhbENsYXNzID0gJ3BvcnRhbCcsXG59OiBDb25maXJtYXRpb25XaW5kb3dTY2VuZVByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICBjb25zdCBtb2RhbFN0eWxlID0ge1xuICAgIG92ZXJsYXk6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwRTExMjZBMCcsXG4gICAgICB6SW5kZXg6IDE1LFxuICAgIH0sXG4gICAgY29udGVudDpcbiAgICAgIHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0XG4gICAgICAgID8ge1xuICAgICAgICAgICAgLi4udG9wTW9kYWxTdHlsZXMsXG4gICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgOiB7XG4gICAgICAgICAgICAuLi5jZW50ZXJNb2RhbFN0eWxlcyxcbiAgICAgICAgICAgIC4uLntcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXNPcGVuICYmIChcbiAgICAgICAgPFJlYWN0TW9kYWxcbiAgICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgICBzdHlsZT17bW9kYWxTdHlsZX1cbiAgICAgICAgICBvblJlcXVlc3RDbG9zZT17b25EaXNtaXNzfVxuICAgICAgICAgIHNob3VsZENsb3NlT25Fc2NcbiAgICAgICAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrXG4gICAgICAgICAgcG9ydGFsQ2xhc3NOYW1lPXtwb3J0YWxDbGFzc31cbiAgICAgICAgPlxuICAgICAgICAgIDxNb2RhbENvbnRhaW5lciBwb3NpdGlvbj17cG9zaXRpb259PlxuICAgICAgICAgICAge3dpdGhIZWFkZXIgJiYgKFxuICAgICAgICAgICAgICA8TW9kYWxIZWFkZXJcbiAgICAgICAgICAgICAgICB0aGVtZU1vZGU9e3RoZW1lTW9kZX1cbiAgICAgICAgICAgICAgICBoZWFkZXJMb2dvPXtoZWFkZXJMb2dvfVxuICAgICAgICAgICAgICAgIG9uRGlzbWlzcz17b25EaXNtaXNzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtib2R5SW1nICYmIDxJbWFnZVdyYXBwZXIganVzdGlmeT1cImNlbnRlclwiPntib2R5SW1nfTwvSW1hZ2VXcmFwcGVyPn1cbiAgICAgICAgICAgIDxTdHlsZWRDYXB0aW9uIHBvc2l0aW9uPXtwb3NpdGlvbn0+XG4gICAgICAgICAgICAgIDxTdHlsZWRDYXB0aW9uVGV4dCBzaXplPXsxfSBzY2FsZT1cImxnXCI+XG4gICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICA8L1N0eWxlZENhcHRpb25UZXh0PlxuICAgICAgICAgICAgPC9TdHlsZWRDYXB0aW9uPlxuICAgICAgICAgICAgPEZsZXhSb3cganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8SW5mb3JtYXRpb25UZXh0IHBvc2l0aW9uPXtwb3NpdGlvbn0gc2l6ZT17M30gc2NhbGU9XCJzbVwiPlxuICAgICAgICAgICAgICAgIHtpbmZvcm1hdGlvbn1cbiAgICAgICAgICAgICAgPC9JbmZvcm1hdGlvblRleHQ+XG4gICAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgICAgICA8QnV0dG9uc0NvbnRhaW5lclxuICAgICAgICAgICAgICBwb3NpdGlvbj17cG9zaXRpb259XG4gICAgICAgICAgICAgIGdhcD17JzE2cHgnfVxuICAgICAgICAgICAgICBqdXN0aWZ5PXsnc3BhY2UtYmV0d2Vlbid9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtkaXNtaXNzTGFiZWwgJiYgKFxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9eydzZWNvbmRhcnlCbHVlJ30gb25DbGljaz17b25EaXNtaXNzfT5cbiAgICAgICAgICAgICAgICAgIHtkaXNtaXNzTGFiZWx9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjb2xvcj17Y29uZmlybUNvbG9yID09PSAncmVkJyA/ICdwcmltYXJ5UmVkJyA6ICdwcmltYXJ5Qmx1ZSd9XG4gICAgICAgICAgICAgICAgb25DbGljaz17b25Db25maXJtfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvbmZpcm1MYWJlbH1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0J1dHRvbnNDb250YWluZXI+XG4gICAgICAgICAgPC9Nb2RhbENvbnRhaW5lcj5cbiAgICAgICAgPC9SZWFjdE1vZGFsPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpcm1hdGlvbldpbmRvdztcbiJdfQ==