import { default as React } from 'react';
import { AvatarProps } from '../avatar/avatar';
import { HashLength } from '../../utils/formatters.ts';
import { Size } from '../../types.ts';
/**
 * Address component can be used to display a public key or hash associated with an account.
 * It supports various configurations, including loading state, logo, name, csprName, and tooltip.
 *
 * Properties:
 * @property {boolean} loading - Specifies whether the address component is in a loading state.
 * @property {string | null} logo - The logo associated with the address, if available.
 * @property {string | undefined} name - The display name of the address.
 * @property {string | undefined} [csprName] - The CSPR.name associated with the address, if applicable.
 * @property {string | null | undefined} hash - The public key or hash associated with the address.
 * @property {string} [tooltipCaption] - Text to be displayed in a tooltip for additional context.
 * @property {string} [navigateToPath] - The path to navigate to when interacting with the address.
 * @property {HashLength} [hashLength] - Specifies the length of the hash representation.
 * @property {Size} [nameTruncateSize] - Defines the size of the name text.
 * @property {AvatarProps['size']} [avatarSize] - The size of the avatar related to the address.
 * @property {HashFontSize} [hashFontSize] - Specifies the font size to display the hash.
 * @property {boolean} [minifiedCopyNotification] - Determines if the address component should be rendered in a minimized style.
 * @property {keyof any} [navigationPath] - **@deprecated** Use `navigateToPath` instead.
 * @property {'full' | 'tiny'} [copyNotifyingStyle] - **@deprecated** Use `minifiedCopyNotification` instead.
 */
interface AddressProps {
    loading: boolean;
    logo: string | null;
    name: string | undefined;
    hash: string | null | undefined;
    csprName?: string | undefined;
    tooltipCaption?: string;
    additionalTooltipBlock?: React.ReactElement;
    navigateToPath?: string;
    hashLength?: HashLength;
    nameTruncateSize?: Size;
    avatarSize?: AvatarProps['size'];
    hashFontSize?: HashFontSize;
    minifiedCopyNotification?: boolean;
    /** @deprecated use *navigateToPath* instead */
    navigationPath?: keyof any;
    /** @deprecated use *minifiedCopyNotification* instead */
    copyNotifyingStyle?: 'full' | 'tiny';
}
export declare enum HashFontSize {
    'default' = "default",
    'big' = "big"
}
export declare const Address: ({ hash, csprName, logo, name, loading, hashLength, minifiedCopyNotification, navigateToPath, tooltipCaption, additionalTooltipBlock, nameTruncateSize, avatarSize, hashFontSize, }: AddressProps) => import("react/jsx-runtime").JSX.Element;
export default Address;
//# sourceMappingURL=address.d.ts.map