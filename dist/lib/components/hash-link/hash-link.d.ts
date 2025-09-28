import { HashLength } from '../../utils/formatters.ts';
interface HashLinkProps {
    href: string | undefined;
    hash: string | undefined;
    minified?: boolean;
    csprName?: string | null;
    hashLength?: HashLength;
}
export declare const HashLink: ({ hash, href, csprName, hashLength, minified, }: HashLinkProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=hash-link.d.ts.map