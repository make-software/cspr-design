import { default as React } from 'react';
export declare const isValidAccountHash: (accountHash?: string | null) => accountHash is string;
export interface AvatarProps<T = any> {
    hash?: string | null;
    src?: string | null;
    size?: 'default' | 'big' | 'average' | 'medium' | 'small';
    loading?: boolean;
    isErc20?: boolean;
}
export declare const BackgroundWrapper: import('styled-components').StyledComponent<"div", import('styled-components').DefaultTheme, {
    sizeType: string;
    withBgColor?: boolean;
}, never>;
export declare const Avatar: React.ForwardRefExoticComponent<AvatarProps<any> & React.RefAttributes<HTMLSpanElement>>;
export default Avatar;
//# sourceMappingURL=avatar.d.ts.map