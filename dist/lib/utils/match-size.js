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
export var matchSize = function (matchers, size) {
    var match = matchers[size];
    if (match == null) {
        throw Error("Missing size declaration: ".concat(size));
    }
    return match;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gtc2l6ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvdXRpbHMvbWF0Y2gtc2l6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLENBQUMsSUFBTSxTQUFTLEdBQUcsVUFJdkIsUUFBc0MsRUFDdEMsSUFBYztJQUVkLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDakIsTUFBTSxLQUFLLENBQUMsb0NBQTZCLElBQUksQ0FBRSxDQUFDLENBQUM7S0FDbEQ7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgXHJcbiAqIHR5cGUgUHJvcHMgPSB7XHJcbiAqICAgaGVpZ2h0OiBcIjI0XCIgfCBcIjM2XCIgfCBcIjQwXCIgfCBcIjEwMCVcIlxyXG4gKiB9XHJcbiAqIG1hdGNoU2l6ZSh7IFwiMjRcIjogMjQsIFwiMzZcIjogMzYsIFwiNDBcIjogNDAsIFwiMTAwJVwiOiAnMTAwJScgfSwgaGVpZ2h0KSxcclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbWF0Y2hTaXplID0gPFxyXG4gIFNpemVUeXBlIGV4dGVuZHMgc3RyaW5nIHwgbnVtYmVyLFxyXG4gIFJldHVyblR5cGUgZXh0ZW5kcyBhbnlcclxuPihcclxuICBtYXRjaGVyczogUmVjb3JkPFNpemVUeXBlLCBSZXR1cm5UeXBlPixcclxuICBzaXplOiBTaXplVHlwZVxyXG4pOiBSZXR1cm5UeXBlID0+IHtcclxuICBjb25zdCBtYXRjaCA9IG1hdGNoZXJzW3NpemVdO1xyXG4gIGlmIChtYXRjaCA9PSBudWxsKSB7XHJcbiAgICB0aHJvdyBFcnJvcihgTWlzc2luZyBzaXplIGRlY2xhcmF0aW9uOiAke3NpemV9YCk7XHJcbiAgfVxyXG4gIHJldHVybiBtYXRjaDtcclxufTtcclxuIl19