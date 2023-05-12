import React from 'react';
import SvgIcon from '../svg-icon/svg-icon';

export interface DocumentImageProps {
    size: number;
}
export const DocumentImage = ({ size }: DocumentImageProps) => {
    return (
        <SvgIcon src={'./assets/icons/ic-document.svg'} size={size}/>
    );
}