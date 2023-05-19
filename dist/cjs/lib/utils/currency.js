"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.motesToCSPR = exports.currencyPrecisionByCase = exports.MOTES_PER_CSPR_RATE = exports.PrecisionCase = void 0;
var tslib_1 = require("tslib");
var big_js_1 = tslib_1.__importDefault(require("big.js"));
var formatters_1 = require("./formatters");
var PrecisionCase;
(function (PrecisionCase) {
    PrecisionCase["deployCost"] = "deployCost";
    PrecisionCase["full"] = "full";
})(PrecisionCase = exports.PrecisionCase || (exports.PrecisionCase = {}));
exports.MOTES_PER_CSPR_RATE = '1000000000'; // 1 000 000 000 MOTES === 1 CSPR
var currencyPrecisionByCase = function (precisionCase) {
    switch (precisionCase) {
        case PrecisionCase.deployCost:
            return formatters_1.DEFAULT_PRECISION;
        case PrecisionCase.full:
            return formatters_1.FULL_PRECISION;
        default:
            return 0;
    }
};
exports.currencyPrecisionByCase = currencyPrecisionByCase;
var motesToCSPR = function (motes) {
    return (0, big_js_1.default)(motes).div(exports.MOTES_PER_CSPR_RATE).toString();
};
exports.motesToCSPR = motesToCSPR;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3V0aWxzL2N1cnJlbmN5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSwwREFBeUI7QUFDekIsMkNBQWlFO0FBRWpFLElBQVksYUFHWDtBQUhELFdBQVksYUFBYTtJQUN2QiwwQ0FBMkIsQ0FBQTtJQUMzQiw4QkFBZSxDQUFBO0FBQ2pCLENBQUMsRUFIVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQUd4QjtBQUVZLFFBQUEsbUJBQW1CLEdBQUcsWUFBWSxDQUFDLENBQUMsaUNBQWlDO0FBRTNFLElBQU0sdUJBQXVCLEdBQUcsVUFBQyxhQUE2QjtJQUNuRSxRQUFRLGFBQWEsRUFBRTtRQUNyQixLQUFLLGFBQWEsQ0FBQyxVQUFVO1lBQzNCLE9BQU8sOEJBQWlCLENBQUM7UUFFM0IsS0FBSyxhQUFhLENBQUMsSUFBSTtZQUNyQixPQUFPLDJCQUFjLENBQUM7UUFFeEI7WUFDRSxPQUFPLENBQUMsQ0FBQztLQUNaO0FBQ0gsQ0FBQyxDQUFDO0FBWFcsUUFBQSx1QkFBdUIsMkJBV2xDO0FBRUssSUFBTSxXQUFXLEdBQUcsVUFBQyxLQUFhO0lBQ3ZDLE9BQU8sSUFBQSxnQkFBRyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQywyQkFBbUIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3hELENBQUMsQ0FBQztBQUZXLFFBQUEsV0FBVyxlQUV0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCaWcgZnJvbSAnYmlnLmpzJztcbmltcG9ydCB7IERFRkFVTFRfUFJFQ0lTSU9OLCBGVUxMX1BSRUNJU0lPTiB9IGZyb20gJy4vZm9ybWF0dGVycyc7XG5cbmV4cG9ydCBlbnVtIFByZWNpc2lvbkNhc2Uge1xuICAnZGVwbG95Q29zdCcgPSAnZGVwbG95Q29zdCcsXG4gICdmdWxsJyA9ICdmdWxsJyxcbn1cblxuZXhwb3J0IGNvbnN0IE1PVEVTX1BFUl9DU1BSX1JBVEUgPSAnMTAwMDAwMDAwMCc7IC8vIDEgMDAwIDAwMCAwMDAgTU9URVMgPT09IDEgQ1NQUlxuXG5leHBvcnQgY29uc3QgY3VycmVuY3lQcmVjaXNpb25CeUNhc2UgPSAocHJlY2lzaW9uQ2FzZT86IFByZWNpc2lvbkNhc2UpID0+IHtcbiAgc3dpdGNoIChwcmVjaXNpb25DYXNlKSB7XG4gICAgY2FzZSBQcmVjaXNpb25DYXNlLmRlcGxveUNvc3Q6XG4gICAgICByZXR1cm4gREVGQVVMVF9QUkVDSVNJT047XG5cbiAgICBjYXNlIFByZWNpc2lvbkNhc2UuZnVsbDpcbiAgICAgIHJldHVybiBGVUxMX1BSRUNJU0lPTjtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gMDtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IG1vdGVzVG9DU1BSID0gKG1vdGVzOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gQmlnKG1vdGVzKS5kaXYoTU9URVNfUEVSX0NTUFJfUkFURSkudG9TdHJpbmcoKTtcbn07XG4iXX0=