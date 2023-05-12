import React from 'react';
import SvgIcon from '../svg-icon/svg-icon';

export interface LockImageProps {
    size: number;
}
export const LockImage = ({ size }: LockImageProps) => {
    return (
        <SvgIcon src={'./assets/icons/ic-lock-image.svg'} size={size}/>
    );
}