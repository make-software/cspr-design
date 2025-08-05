import { default as React } from 'react';
export declare const ValuesRow: import('styled-components').StyledComponent<React.ForwardRefExoticComponent<import('../..').FlexRowProps & React.RefAttributes<HTMLDivElement>>, import('styled-components').DefaultTheme, {}, never>;
export interface CEP18Config {
    decimals: number;
    precision: number;
}
export interface AccountInfoRowProps {
    publicKey: string;
    label?: string;
    rightLabel?: string;
    accountBalance: string | null;
    loading: boolean;
    error: string | null;
    accountEmpty: boolean;
    disabled?: boolean;
    ticker?: string;
    cep18Config?: CEP18Config;
}
export declare function AccountInfoRow(props: AccountInfoRowProps): import("react/jsx-runtime").JSX.Element;
export default AccountInfoRow;
//# sourceMappingURL=account-info-row.d.ts.map