import { default as React } from 'react';
import { AvatarProps } from '../avatar/avatar';
import { HashLength } from '../../utils/formatters.ts';
import { Size } from '../../types.ts';
interface AddressProps {
    hash: string | null | undefined;
    name?: string | undefined;
    logo?: string | null;
    csprName?: string | undefined;
    tooltipCaption?: string;
    additionalTooltipBlock?: React.ReactElement;
    navigateToPath?: string;
    hashLength?: HashLength;
    nameTruncateSize?: Size;
    avatarSize?: AvatarProps['size'];
    hashFontSize?: HashFontSize;
    minifiedCopyNotification?: boolean;
    itemsSpacing?: number;
    horizonalAlign?: 'center' | 'top';
    loading?: boolean;
    /** @deprecated use *navigateToPath* instead */
    navigationPath?: keyof any;
    /** @deprecated use *minifiedCopyNotification* instead */
    copyNotifyingStyle?: 'full' | 'tiny';
}
export declare enum HashFontSize {
    'default' = "default",
    'big' = "big"
}
/**
 * Address component can be used to display a public key or hash associated with an account.
 * It supports various configurations, including loading state, logo, name, csprName, and tooltip.
 *
 * @param {boolean} loading - Specifies whether the address component is in a loading state.
 * @param {string | null} logo - The logo associated with the address, if available.
 * @param {string | undefined} name - The display name of the address.
 * @param {string | undefined} [csprName] - The CSPR.name associated with the address, if applicable.
 * @param {string | null | undefined} hash - The public key or hash associated with the address.
 * @param {string} [tooltipCaption] - Text to be displayed in a tooltip for additional context.
 * @param {string} [navigateToPath] - The path to navigate to when interacting with the address.
 * @param {HashLength} [hashLength] - Specifies the length of the hash representation.
 * @param {Size} [nameTruncateSize] - Defines the size of the name text.
 * @param {AvatarProps['size']} [avatarSize] - The size of the avatar related to the address.
 * @param {HashFontSize} [hashFontSize] - Specifies the font size to display the hash.
 * @param {boolean} [minifiedCopyNotification] - Determines if the address component should be rendered in a minimized style.
 * @param {number} [itemsSpacing] - Gap between avatar and hash.
 * @param {'center' | 'top'} [horizonalAlign] - Horizontal alignment of the address component.
 * @param {keyof any} [navigationPath] - **@deprecated** Use `navigateToPath` instead.
 * @param {'full' | 'tiny'} [copyNotifyingStyle] - **@deprecated** Use `minifiedCopyNotification` instead.
 */
export declare const Address: ({ hash, csprName, logo, name, loading, hashLength, minifiedCopyNotification, navigateToPath, tooltipCaption, additionalTooltipBlock, nameTruncateSize, avatarSize, hashFontSize, horizonalAlign, itemsSpacing, }: AddressProps) => import("react/jsx-runtime").JSX.Element;
export default Address;
//# sourceMappingURL=address.d.ts.map