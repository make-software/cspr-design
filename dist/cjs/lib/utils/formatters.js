"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatHash = exports.HashLength = void 0;
var HashLength;
(function (HashLength) {
    HashLength[HashLength["FULL"] = 0] = "FULL";
    HashLength[HashLength["TINY"] = 5] = "TINY";
    HashLength[HashLength["LITTLE"] = 10] = "LITTLE";
    HashLength[HashLength["SMALL"] = 15] = "SMALL";
    HashLength[HashLength["MEDIUM"] = 20] = "MEDIUM";
    HashLength[HashLength["LARGE"] = 25] = "LARGE";
})(HashLength = exports.HashLength || (exports.HashLength = {}));
var formatHash = function (hash, visibleHashLength) {
    if (visibleHashLength === void 0) { visibleHashLength = HashLength.TINY; }
    var MIN_TRUNCATE_HASH_LENGTH = HashLength.TINY * 2 + 3;
    var _a = hash.split("-"), hashWithoutSuffix = _a[0], lastDigits = _a[1];
    var hashLength = hashWithoutSuffix.length;
    if (visibleHashLength === HashLength.FULL ||
        hashLength <= MIN_TRUNCATE_HASH_LENGTH) {
        return hash;
    }
    var firstPart = hashWithoutSuffix.substring(0, visibleHashLength);
    var secondPart = hashWithoutSuffix.substring(hashLength - visibleHashLength);
    var truncatedHash = "".concat(firstPart, "...").concat(secondPart);
    return lastDigits ? "".concat(truncatedHash, "-").concat(lastDigits) : "".concat(truncatedHash);
};
exports.formatHash = formatHash;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvdXRpbHMvZm9ybWF0dGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFZLFVBT1g7QUFQRCxXQUFZLFVBQVU7SUFDcEIsMkNBQVEsQ0FBQTtJQUNSLDJDQUFRLENBQUE7SUFDUixnREFBVyxDQUFBO0lBQ1gsOENBQVUsQ0FBQTtJQUNWLGdEQUFXLENBQUE7SUFDWCw4Q0FBVSxDQUFBO0FBQ1osQ0FBQyxFQVBXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBT3JCO0FBRU0sSUFBTSxVQUFVLEdBQUcsVUFDeEIsSUFBWSxFQUNaLGlCQUErQztJQUEvQyxrQ0FBQSxFQUFBLG9CQUFnQyxVQUFVLENBQUMsSUFBSTtJQUUvQyxJQUFNLHdCQUF3QixHQUFHLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVuRCxJQUFBLEtBQWtDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWhELGlCQUFpQixRQUFBLEVBQUUsVUFBVSxRQUFtQixDQUFDO0lBRXhELElBQU0sVUFBVSxHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FBQztJQUU1QyxJQUNFLGlCQUFpQixLQUFLLFVBQVUsQ0FBQyxJQUFJO1FBQ3JDLFVBQVUsSUFBSSx3QkFBd0IsRUFDdEM7UUFDQSxPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsSUFBTSxTQUFTLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BFLElBQU0sVUFBVSxHQUFHLGlCQUFpQixDQUFDLFNBQVMsQ0FDNUMsVUFBVSxHQUFHLGlCQUFpQixDQUMvQixDQUFDO0lBRUYsSUFBTSxhQUFhLEdBQUcsVUFBRyxTQUFTLGdCQUFNLFVBQVUsQ0FBRSxDQUFDO0lBRXJELE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFHLGFBQWEsY0FBSSxVQUFVLENBQUUsQ0FBQyxDQUFDLENBQUMsVUFBRyxhQUFhLENBQUUsQ0FBQztBQUM1RSxDQUFDLENBQUM7QUF6QlcsUUFBQSxVQUFVLGNBeUJyQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEhhc2hMZW5ndGgge1xuICBGVUxMID0gMCxcbiAgVElOWSA9IDUsXG4gIExJVFRMRSA9IDEwLFxuICBTTUFMTCA9IDE1LFxuICBNRURJVU0gPSAyMCxcbiAgTEFSR0UgPSAyNSxcbn1cblxuZXhwb3J0IGNvbnN0IGZvcm1hdEhhc2ggPSAoXG4gIGhhc2g6IHN0cmluZyxcbiAgdmlzaWJsZUhhc2hMZW5ndGg6IEhhc2hMZW5ndGggPSBIYXNoTGVuZ3RoLlRJTllcbikgPT4ge1xuICBjb25zdCBNSU5fVFJVTkNBVEVfSEFTSF9MRU5HVEggPSBIYXNoTGVuZ3RoLlRJTlkgKiAyICsgMztcblxuICBjb25zdCBbaGFzaFdpdGhvdXRTdWZmaXgsIGxhc3REaWdpdHNdID0gaGFzaC5zcGxpdChcIi1cIik7XG5cbiAgY29uc3QgaGFzaExlbmd0aCA9IGhhc2hXaXRob3V0U3VmZml4Lmxlbmd0aDtcblxuICBpZiAoXG4gICAgdmlzaWJsZUhhc2hMZW5ndGggPT09IEhhc2hMZW5ndGguRlVMTCB8fFxuICAgIGhhc2hMZW5ndGggPD0gTUlOX1RSVU5DQVRFX0hBU0hfTEVOR1RIXG4gICkge1xuICAgIHJldHVybiBoYXNoO1xuICB9XG5cbiAgY29uc3QgZmlyc3RQYXJ0ID0gaGFzaFdpdGhvdXRTdWZmaXguc3Vic3RyaW5nKDAsIHZpc2libGVIYXNoTGVuZ3RoKTtcbiAgY29uc3Qgc2Vjb25kUGFydCA9IGhhc2hXaXRob3V0U3VmZml4LnN1YnN0cmluZyhcbiAgICBoYXNoTGVuZ3RoIC0gdmlzaWJsZUhhc2hMZW5ndGhcbiAgKTtcblxuICBjb25zdCB0cnVuY2F0ZWRIYXNoID0gYCR7Zmlyc3RQYXJ0fS4uLiR7c2Vjb25kUGFydH1gO1xuXG4gIHJldHVybiBsYXN0RGlnaXRzID8gYCR7dHJ1bmNhdGVkSGFzaH0tJHtsYXN0RGlnaXRzfWAgOiBgJHt0cnVuY2F0ZWRIYXNofWA7XG59O1xuIl19