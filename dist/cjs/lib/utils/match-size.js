"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchSize = void 0;
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
var matchSize = function (matchers, size) {
    var match = matchers[size];
    if (match == null) {
        throw Error("Missing size declaration: ".concat(size));
    }
    return match;
};
exports.matchSize = matchSize;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gtc2l6ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvdXRpbHMvbWF0Y2gtc2l6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7Ozs7O0dBU0c7QUFDSSxJQUFNLFNBQVMsR0FBRyxVQUl2QixRQUFzQyxFQUN0QyxJQUFjO0lBRWQsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtRQUNqQixNQUFNLEtBQUssQ0FBQyxvQ0FBNkIsSUFBSSxDQUFFLENBQUMsQ0FBQztLQUNsRDtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBWlcsUUFBQSxTQUFTLGFBWXBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGBcclxuICogdHlwZSBQcm9wcyA9IHtcclxuICogICBoZWlnaHQ6IFwiMjRcIiB8IFwiMzZcIiB8IFwiNDBcIiB8IFwiMTAwJVwiXHJcbiAqIH1cclxuICogbWF0Y2hTaXplKHsgXCIyNFwiOiAyNCwgXCIzNlwiOiAzNiwgXCI0MFwiOiA0MCwgXCIxMDAlXCI6ICcxMDAlJyB9LCBoZWlnaHQpLFxyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCBjb25zdCBtYXRjaFNpemUgPSA8XHJcbiAgU2l6ZVR5cGUgZXh0ZW5kcyBzdHJpbmcgfCBudW1iZXIsXHJcbiAgUmV0dXJuVHlwZSBleHRlbmRzIGFueVxyXG4+KFxyXG4gIG1hdGNoZXJzOiBSZWNvcmQ8U2l6ZVR5cGUsIFJldHVyblR5cGU+LFxyXG4gIHNpemU6IFNpemVUeXBlXHJcbik6IFJldHVyblR5cGUgPT4ge1xyXG4gIGNvbnN0IG1hdGNoID0gbWF0Y2hlcnNbc2l6ZV07XHJcbiAgaWYgKG1hdGNoID09IG51bGwpIHtcclxuICAgIHRocm93IEVycm9yKGBNaXNzaW5nIHNpemUgZGVjbGFyYXRpb246ICR7c2l6ZX1gKTtcclxuICB9XHJcbiAgcmV0dXJuIG1hdGNoO1xyXG59O1xyXG4iXX0=