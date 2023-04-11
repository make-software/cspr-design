import { PropsWithChildren } from "react";
export interface MenuProps {
    opened?: boolean;
    onClose?: () => void;
}
export declare const Menu: ({ children, ...rest }: PropsWithChildren<MenuProps>) => JSX.Element;
export default Menu;
//# sourceMappingURL=menu.d.ts.map