import React from 'react';
export declare const ValuesRow: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<import("../flex-row/flex-row").FlexRowProps & React.RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, {}, never>;
export interface AccountInfoRowProps {
    publicKey: string;
    label?: string;
    rightLabel?: string;
    accountBalance: string | null;
    loading: boolean;
    error: string | null;
    accountEmpty: boolean;
    disabled?: boolean;
}
export declare function AccountInfoRow(props: AccountInfoRowProps): JSX.Element;
export default AccountInfoRow;
//# sourceMappingURL=account-info-row.d.ts.map