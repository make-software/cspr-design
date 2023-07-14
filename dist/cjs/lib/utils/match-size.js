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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gtc2l6ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvdXRpbHMvbWF0Y2gtc2l6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7Ozs7O0dBU0c7QUFDSSxJQUFNLFNBQVMsR0FBRyxVQUl2QixRQUFzQyxFQUN0QyxJQUFjO0lBRWQsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtRQUNqQixNQUFNLEtBQUssQ0FBQyxvQ0FBNkIsSUFBSSxDQUFFLENBQUMsQ0FBQztLQUNsRDtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBWlcsUUFBQSxTQUFTLGFBWXBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogQHVzYWdlXG4gKiBgYGBcbiAqIHR5cGUgUHJvcHMgPSB7XG4gKiAgIGhlaWdodDogXCIyNFwiIHwgXCIzNlwiIHwgXCI0MFwiIHwgXCIxMDAlXCJcbiAqIH1cbiAqIG1hdGNoU2l6ZSh7IFwiMjRcIjogMjQsIFwiMzZcIjogMzYsIFwiNDBcIjogNDAsIFwiMTAwJVwiOiAnMTAwJScgfSwgaGVpZ2h0KSxcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgbWF0Y2hTaXplID0gPFxuICBTaXplVHlwZSBleHRlbmRzIHN0cmluZyB8IG51bWJlcixcbiAgUmV0dXJuVHlwZSBleHRlbmRzIGFueVxuPihcbiAgbWF0Y2hlcnM6IFJlY29yZDxTaXplVHlwZSwgUmV0dXJuVHlwZT4sXG4gIHNpemU6IFNpemVUeXBlXG4pOiBSZXR1cm5UeXBlID0+IHtcbiAgY29uc3QgbWF0Y2ggPSBtYXRjaGVyc1tzaXplXTtcbiAgaWYgKG1hdGNoID09IG51bGwpIHtcbiAgICB0aHJvdyBFcnJvcihgTWlzc2luZyBzaXplIGRlY2xhcmF0aW9uOiAke3NpemV9YCk7XG4gIH1cbiAgcmV0dXJuIG1hdGNoO1xufTtcbiJdfQ==