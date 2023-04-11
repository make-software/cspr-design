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
export declare const matchSize: <SizeType extends string | number, ReturnType_1 extends unknown>(matchers: Record<SizeType, ReturnType_1>, size: SizeType) => ReturnType_1;
//# sourceMappingURL=match-size.d.ts.map