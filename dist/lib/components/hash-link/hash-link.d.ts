import { HashLength } from '../../utils/formatters.ts';
interface HashLinkProps {
    href: string | undefined;
    hash: string | undefined;
    minified?: boolean;
    csprName?: string | null;
    hashLength?: HashLength;
    align?: string;
}
export declare const HashLink: ({ hash, href, csprName, hashLength, minified, align, }: HashLinkProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=hash-link.d.ts.map