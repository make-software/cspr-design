import { CSSObject } from 'styled-components';
import * as CSS from 'csstype';
export declare const Breakpoints: {
    tablet: number;
    laptop: number;
    desktop: number;
};
export declare const MediaQueries: {
    tablet: string;
    laptop: string;
    desktop: string;
};
type CSSPropertiesMulti = {
    [P in keyof CSS.Properties<string | number>]: CSS.Properties<string | number>[P] | CSS.Properties<string | number>[P][];
};
type CSSPseudos = {
    [K in CSS.Pseudos]?: CSSObjectMulti;
};
interface CSSObjectMulti extends CSSPropertiesMulti, CSSPseudos {
    [key: string]: Array<CSSObjectMulti | string | number | undefined> | CSSObjectMulti | string | number | undefined;
}
/** withMedia helper
 * @usage
 * ```
 * const StyledImg = styled.img(({ theme }) => theme.withMedia({
 *   display: ['mobileValue', 'tabletValue', 'laptopValue', 'desktopValue'],
 * }));
 * ```
 */
export declare const withMedia: (styled: CSSObjectMulti) => CSSObject;
/** useMatchMedia helper
 * @usage
 * ```
 * const responsiveType = useMatchMedia(['mobile', 'tablet', 'laptop or desktop'], [deps])
 * <div>{responsiveType}</div>
 * ```
 */
export declare const useMatchMedia: <T extends any>([onMobile, onTablet, onLaptop, onDesktop]: [T, T?, T?, T?], dependencies: any[]) => T;
export {};
//# sourceMappingURL=match-media.d.ts.map