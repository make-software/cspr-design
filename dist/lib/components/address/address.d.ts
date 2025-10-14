import { default as React } from 'react';
import { AvatarProps } from '../avatar/avatar';
import { BodyTextProps } from '../body-text/body-text.tsx';
import { FlexRowProps } from '../flex-row/flex-row.tsx';
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
    hashFontSize?: BodyTextProps['scale'];
    minifiedCopyNotification?: boolean;
    itemsSpacing?: number;
    horizonalAlign?: FlexRowProps['align'];
    loading?: boolean;
    /** @deprecated use *navigateToPath* instead */
    navigationPath?: keyof any;
    /** @deprecated use *minifiedCopyNotification* instead */
    copyNotifyingStyle?: 'full' | 'tiny';
}
/** @deprecated  */
export declare enum HashFontSize {
    'default' = "default",
    'big' = "big"
}
export declare const Address: React.ForwardRefExoticComponent<AddressProps & React.RefAttributes<HTMLDivElement>>;
export default Address;
//# sourceMappingURL=address.d.ts.map