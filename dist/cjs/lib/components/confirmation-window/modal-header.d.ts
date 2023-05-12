import React from 'react';
import { ThemeModeType } from '../navigation/cspr-products-menu/products-menu-item';
interface ModalHeaderProps {
    onDismiss: () => void;
    headerLogo?: React.ReactElement;
    themeMode?: ThemeModeType;
}
declare const ModalHeader: ({ onDismiss, headerLogo }: ModalHeaderProps) => JSX.Element;
export default ModalHeader;
//# sourceMappingURL=modal-header.d.ts.map