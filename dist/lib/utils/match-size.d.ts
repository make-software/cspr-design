/**
 *
 * @usage
 * ```
 * type Props = {
 *   height: "24" | "36" | "40" | "100%"
 * }
 * matchSize({ "24": 24, "36": 36, "40": 40, "100%": '100%' }, height),
 * ```
 */
export declare const matchSize: <SizeType extends string | number, ReturnType extends any>(matchers: Record<SizeType, ReturnType>, size: SizeType) => ReturnType;
//# sourceMappingURL=match-size.d.ts.map