import React from 'react';
import { ThemeModeType } from '../navigation/cspr-products-menu/products-menu-item';
export interface ModalHeaderProps {
    onClose?: () => void;
    headerLogo?: React.ReactElement;
    themeMode?: ThemeModeType;
    marginBottom?: string;
}
export declare const ModalHeader: ({ onClose, headerLogo, marginBottom, }: ModalHeaderProps) => JSX.Element;
export default ModalHeader;
//# sourceMappingURL=modal-header.d.ts.map