"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.motesToCEP18Token = exports.motesToCSPR = exports.currencyPrecisionByCase = exports.MOTES_PER_CSPR_RATE = exports.PrecisionCase = void 0;
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
var motesToCEP18Token = function (motes, decimals) {
    return (0, big_js_1.default)(motes).div((0, big_js_1.default)(10).pow(decimals)).toString();
};
exports.motesToCEP18Token = motesToCEP18Token;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3V0aWxzL2N1cnJlbmN5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSwwREFBeUI7QUFDekIsMkNBQWlFO0FBRWpFLElBQVksYUFHWDtBQUhELFdBQVksYUFBYTtJQUN2QiwwQ0FBMkIsQ0FBQTtJQUMzQiw4QkFBZSxDQUFBO0FBQ2pCLENBQUMsRUFIVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQUd4QjtBQUVZLFFBQUEsbUJBQW1CLEdBQUcsWUFBWSxDQUFDLENBQUMsaUNBQWlDO0FBRTNFLElBQU0sdUJBQXVCLEdBQUcsVUFBQyxhQUE2QjtJQUNuRSxRQUFRLGFBQWEsRUFBRTtRQUNyQixLQUFLLGFBQWEsQ0FBQyxVQUFVO1lBQzNCLE9BQU8sOEJBQWlCLENBQUM7UUFFM0IsS0FBSyxhQUFhLENBQUMsSUFBSTtZQUNyQixPQUFPLDJCQUFjLENBQUM7UUFFeEI7WUFDRSxPQUFPLENBQUMsQ0FBQztLQUNaO0FBQ0gsQ0FBQyxDQUFDO0FBWFcsUUFBQSx1QkFBdUIsMkJBV2xDO0FBRUssSUFBTSxXQUFXLEdBQUcsVUFBQyxLQUFhO0lBQ3ZDLE9BQU8sSUFBQSxnQkFBRyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQywyQkFBbUIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3hELENBQUMsQ0FBQztBQUZXLFFBQUEsV0FBVyxlQUV0QjtBQUVLLElBQU0saUJBQWlCLEdBQUcsVUFBQyxLQUFhLEVBQUUsUUFBZ0I7SUFDL0QsT0FBTyxJQUFBLGdCQUFHLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUEsZ0JBQUcsRUFBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUMxRCxDQUFDLENBQUM7QUFGVyxRQUFBLGlCQUFpQixxQkFFNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmlnIGZyb20gJ2JpZy5qcyc7XHJcbmltcG9ydCB7IERFRkFVTFRfUFJFQ0lTSU9OLCBGVUxMX1BSRUNJU0lPTiB9IGZyb20gJy4vZm9ybWF0dGVycyc7XHJcblxyXG5leHBvcnQgZW51bSBQcmVjaXNpb25DYXNlIHtcclxuICAnZGVwbG95Q29zdCcgPSAnZGVwbG95Q29zdCcsXHJcbiAgJ2Z1bGwnID0gJ2Z1bGwnLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTU9URVNfUEVSX0NTUFJfUkFURSA9ICcxMDAwMDAwMDAwJzsgLy8gMSAwMDAgMDAwIDAwMCBNT1RFUyA9PT0gMSBDU1BSXHJcblxyXG5leHBvcnQgY29uc3QgY3VycmVuY3lQcmVjaXNpb25CeUNhc2UgPSAocHJlY2lzaW9uQ2FzZT86IFByZWNpc2lvbkNhc2UpID0+IHtcclxuICBzd2l0Y2ggKHByZWNpc2lvbkNhc2UpIHtcclxuICAgIGNhc2UgUHJlY2lzaW9uQ2FzZS5kZXBsb3lDb3N0OlxyXG4gICAgICByZXR1cm4gREVGQVVMVF9QUkVDSVNJT047XHJcblxyXG4gICAgY2FzZSBQcmVjaXNpb25DYXNlLmZ1bGw6XHJcbiAgICAgIHJldHVybiBGVUxMX1BSRUNJU0lPTjtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gMDtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbW90ZXNUb0NTUFIgPSAobW90ZXM6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgcmV0dXJuIEJpZyhtb3RlcykuZGl2KE1PVEVTX1BFUl9DU1BSX1JBVEUpLnRvU3RyaW5nKCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbW90ZXNUb0NFUDE4VG9rZW4gPSAobW90ZXM6IHN0cmluZywgZGVjaW1hbHM6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgcmV0dXJuIEJpZyhtb3RlcykuZGl2KEJpZygxMCkucG93KGRlY2ltYWxzKSkudG9TdHJpbmcoKTtcclxufTtcclxuIl19