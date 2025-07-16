"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatRatesToCurrency = exports.formatDeploysCount = exports.formatISODateOnly = exports.formatHash = exports.shortenString = exports.HashLength = exports.formatDateWithMonthAndYear = exports.formatDateShort = exports.formatDateWithWeekday = exports.formatDate = exports.formatTimestampAge = exports.formatTimestamp = exports.formatPercentage = exports.formatCurrency = exports.formatBigNumbers = exports.formatNumber = exports.formatMessage = exports.FULL_PRECISION = exports.DEFAULT_PRECISION = exports.SMALL_PRECISION = exports.DEFAULT_AMOUNT_PRECISION = exports.MINIMUM_SHOWING_BALANCE = void 0;
var tslib_1 = require("tslib");
var intl_1 = require("@formatjs/intl");
var date_fns_1 = require("date-fns");
var i18next_1 = tslib_1.__importDefault(require("i18next"));
var en_US_1 = tslib_1.__importDefault(require("date-fns/locale/en-US"));
var uk_1 = tslib_1.__importDefault(require("date-fns/locale/uk"));
var es_1 = tslib_1.__importDefault(require("date-fns/locale/es"));
var tr_1 = tslib_1.__importDefault(require("date-fns/locale/tr"));
var nl_1 = tslib_1.__importDefault(require("date-fns/locale/nl"));
var ru_1 = tslib_1.__importDefault(require("date-fns/locale/ru"));
var pl_1 = tslib_1.__importDefault(require("date-fns/locale/pl"));
var vi_1 = tslib_1.__importDefault(require("date-fns/locale/vi"));
var fr_1 = tslib_1.__importDefault(require("date-fns/locale/fr"));
var az_1 = tslib_1.__importDefault(require("date-fns/locale/az"));
var detect_browser_1 = require("./detect-browser");
exports.MINIMUM_SHOWING_BALANCE = 0.00001;
exports.DEFAULT_AMOUNT_PRECISION = 4;
exports.SMALL_PRECISION = 2;
exports.DEFAULT_PRECISION = 5;
exports.FULL_PRECISION = 9;
var Locale = {
    en: en_US_1.default,
    es: es_1.default,
    uk: uk_1.default,
    tr: tr_1.default,
    nl: nl_1.default,
    ru: ru_1.default,
    pl: pl_1.default,
    vi: vi_1.default,
    fr: fr_1.default,
    az: az_1.default,
};
var cache = (0, intl_1.createIntlCache)();
var intl = (0, intl_1.createIntl)({
    locale: 'en-US',
    messages: {
        'components.transaction_status': 'Success',
    },
}, cache);
var formatMessage = function (descriptor, values) {
    return intl.formatMessage(descriptor, values);
};
exports.formatMessage = formatMessage;
var formatNumber = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, precision = _b.precision, notation = _b.notation, compactDisplay = _b.compactDisplay;
    return intl.formatNumber(value, {
        minimumFractionDigits: precision || 0,
        maximumFractionDigits: precision || 0,
        notation: notation,
        compactDisplay: compactDisplay,
    });
};
exports.formatNumber = formatNumber;
var BIG_NUMBERS_NOTATION_SYMBOL = [
    '',
    'k',
    'M',
    'B',
    'T',
    'e15',
    'e18',
    'e21',
    'e24',
    'e27',
    'e30',
    'e33',
    'e36',
    'e39',
    'e42',
    'e45',
    'e48',
    'e51',
    'e54',
    'e57',
    'e60',
    'e63',
    'e66',
    'e69',
    'e72',
    'e75',
    'e78',
    'e81',
    'e84',
    'e87',
    'e90',
    'e93',
    'e96',
    'e99',
    'e101',
    'e104', //Tretrigintillion
];
var formatBigNumbers = function (value) {
    // determines symbol
    var tier = (Math.log10(Math.abs(value)) / 3) | 0;
    var tiersWithoutSuffixes = [0, 1, 2];
    if (tiersWithoutSuffixes.includes(tier)) {
        return (0, exports.formatNumber)(value, {
            precision: exports.DEFAULT_PRECISION,
        });
    }
    // get suffix and determine scale
    var suffix = BIG_NUMBERS_NOTATION_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);
    var scaledNumber = value / scale;
    return scaledNumber.toFixed(5) + suffix;
};
exports.formatBigNumbers = formatBigNumbers;
var formatCurrency = function (value, code, _a) {
    var _b = _a === void 0 ? {} : _a, precision = _b.precision;
    return intl.formatNumber(value, {
        style: 'currency',
        currency: code,
        minimumFractionDigits: precision,
        maximumFractionDigits: precision,
    });
};
exports.formatCurrency = formatCurrency;
var formatPercentage = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, precision = _b.precision;
    return value.toFixed(precision || 2);
};
exports.formatPercentage = formatPercentage;
var formatTimestamp = function (value) {
    var date = new Date(value);
    var locale = i18next_1.default.language || 'en';
    var nativeIntl = new Intl.DateTimeFormat(locale, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short',
    });
    return "".concat(nativeIntl.format(date));
};
exports.formatTimestamp = formatTimestamp;
var formatDistanceTokens = {
    lessThanXSeconds: 'second',
    xSeconds: 'second',
    lessThanXMinutes: 'minute',
    xMinutes: 'minute',
    xHours: 'hour',
    xDays: 'day',
    xMonths: 'month',
    xYears: 'year',
};
var formatDistance = function (token, count, options) {
    options = options || {};
    var locale = options.locale.code || 'en';
    return new Intl.RelativeTimeFormat(locale, {
        style: 'short',
    })
        .format(-count, formatDistanceTokens[token])
        .replace('.', '');
};
var formatTimestampAge = function (value) {
    var date = new Date(value);
    var isSupportedLanguageAndBrowser = i18next_1.default.language !== 'az' && detect_browser_1.isBrowserSupportRelativeDateFormat;
    return "".concat((0, date_fns_1.formatDistanceToNowStrict)(date, {
        addSuffix: true,
        locale: tslib_1.__assign(tslib_1.__assign({}, Locale[i18next_1.default.language]), (isSupportedLanguageAndBrowser && {
            formatDistance: formatDistance,
        })),
        roundingMethod: 'floor',
    }));
};
exports.formatTimestampAge = formatTimestampAge;
var formatDate = function (value) {
    var date = new Date(value);
    return "".concat(intl.formatDate(date, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    }), ", ").concat(intl.formatTime(date, {
        hour: 'numeric',
        minute: 'numeric',
    }));
};
exports.formatDate = formatDate;
var formatDateWithWeekday = function (value) {
    var date = new Date(value);
    return "".concat(intl.formatDate(date, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        weekday: 'long',
    }));
};
exports.formatDateWithWeekday = formatDateWithWeekday;
var formatDateShort = function (value) {
    var date = new Date(value);
    return "".concat(intl.formatDate(date, {
        month: 'short',
        day: 'numeric',
    }));
};
exports.formatDateShort = formatDateShort;
var formatDateWithMonthAndYear = function (value) {
    var date = new Date(value);
    return "".concat(intl.formatDate(date, {
        month: 'short',
        year: 'numeric',
    }));
};
exports.formatDateWithMonthAndYear = formatDateWithMonthAndYear;
var HashLength;
(function (HashLength) {
    HashLength[HashLength["FULL"] = 0] = "FULL";
    HashLength[HashLength["TINY"] = 5] = "TINY";
    HashLength[HashLength["LITTLE"] = 10] = "LITTLE";
    HashLength[HashLength["SMALL"] = 15] = "SMALL";
    HashLength[HashLength["MEDIUM"] = 20] = "MEDIUM";
    HashLength[HashLength["LARGE"] = 25] = "LARGE";
})(HashLength = exports.HashLength || (exports.HashLength = {}));
var shortenString = function (valueToShort, visibleHashLength) {
    if (visibleHashLength === void 0) { visibleHashLength = HashLength.TINY; }
    var hashLength = valueToShort.length;
    var firstPart = valueToShort.substring(0, visibleHashLength);
    var secondPart = valueToShort.substring(hashLength - visibleHashLength);
    return "".concat(firstPart, "...").concat(secondPart);
};
exports.shortenString = shortenString;
var formatHash = function (hash, visibleHashLength) {
    if (visibleHashLength === void 0) { visibleHashLength = HashLength.TINY; }
    var MIN_TRUNCATE_HASH_LENGTH = HashLength.TINY * 2 + 3;
    var _a = hash.split('-'), hashWithoutSuffix = _a[0], lastDigits = _a[1];
    var hashLength = hashWithoutSuffix.length;
    if (visibleHashLength === HashLength.FULL ||
        hashLength <= MIN_TRUNCATE_HASH_LENGTH) {
        return hash;
    }
    var truncatedHash = (0, exports.shortenString)(hashWithoutSuffix, visibleHashLength);
    return lastDigits ? "".concat(truncatedHash, "-").concat(lastDigits) : "".concat(truncatedHash);
};
exports.formatHash = formatHash;
var formatISODateOnly = function (date) {
    return (0, date_fns_1.formatISO)(date, {
        representation: 'date',
    });
};
exports.formatISODateOnly = formatISODateOnly;
var formatDeploysCount = function (value) {
    return "".concat((0, exports.formatNumber)(value, {
        notation: 'compact',
        compactDisplay: 'short',
    }));
};
exports.formatDeploysCount = formatDeploysCount;
var formatRatesToCurrency = function (value) {
    return (0, exports.formatNumber)(value, { precision: 4 });
};
exports.formatRatesToCurrency = formatRatesToCurrency;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvdXRpbHMvZm9ybWF0dGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsdUNBQWdGO0FBQ2hGLHFDQUFnRTtBQUNoRSw0REFBOEI7QUFFOUIsd0VBQXVDO0FBQ3ZDLGtFQUFvQztBQUNwQyxrRUFBb0M7QUFDcEMsa0VBQW9DO0FBQ3BDLGtFQUFvQztBQUNwQyxrRUFBb0M7QUFDcEMsa0VBQW9DO0FBQ3BDLGtFQUFvQztBQUNwQyxrRUFBb0M7QUFDcEMsa0VBQW9DO0FBQ3BDLG1EQUFzRTtBQUV6RCxRQUFBLHVCQUF1QixHQUFHLE9BQU8sQ0FBQztBQUNsQyxRQUFBLHdCQUF3QixHQUFHLENBQUMsQ0FBQztBQUM3QixRQUFBLGVBQWUsR0FBRyxDQUFDLENBQUM7QUFDcEIsUUFBQSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7QUFDdEIsUUFBQSxjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBRWhDLElBQU0sTUFBTSxHQUFHO0lBQ2IsRUFBRSxFQUFFLGVBQUU7SUFDTixFQUFFLEVBQUUsWUFBRTtJQUNOLEVBQUUsRUFBRSxZQUFFO0lBQ04sRUFBRSxFQUFFLFlBQUU7SUFDTixFQUFFLEVBQUUsWUFBRTtJQUNOLEVBQUUsRUFBRSxZQUFFO0lBQ04sRUFBRSxFQUFFLFlBQUU7SUFDTixFQUFFLEVBQUUsWUFBRTtJQUNOLEVBQUUsRUFBRSxZQUFFO0lBQ04sRUFBRSxFQUFFLFlBQUU7Q0FDUCxDQUFDO0FBRUYsSUFBTSxLQUFLLEdBQUcsSUFBQSxzQkFBZSxHQUFFLENBQUM7QUFDaEMsSUFBTSxJQUFJLEdBQUcsSUFBQSxpQkFBVSxFQUNyQjtJQUNFLE1BQU0sRUFBRSxPQUFPO0lBQ2YsUUFBUSxFQUFFO1FBQ1IsK0JBQStCLEVBQUUsU0FBUztLQUMzQztDQUNGLEVBQ0QsS0FBSyxDQUNOLENBQUM7QUFFSyxJQUFNLGFBQWEsR0FBRyxVQUMzQixV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QnJCO0FBRUssSUFBTSxpQkFBaUIsR0FBRyxVQUFDLElBQVU7SUFDMUMsT0FBTyxJQUFBLG9CQUFTLEVBQUMsSUFBSSxFQUFFO1FBQ3JCLGNBQWMsRUFBRSxNQUFNO0tBQ3ZCLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUpXLFFBQUEsaUJBQWlCLHFCQUk1QjtBQUVLLElBQU0sa0JBQWtCLEdBQUcsVUFBQyxLQUFLO0lBQ3RDLE9BQUEsVUFBRyxJQUFBLG9CQUFZLEVBQUMsS0FBSyxFQUFFO1FBQ3JCLFFBQVEsRUFBRSxTQUFTO1FBQ25CLGNBQWMsRUFBRSxPQUFPO0tBQ3hCLENBQUMsQ0FBRTtBQUhKLENBR0ksQ0FBQztBQUpNLFFBQUEsa0JBQWtCLHNCQUl4QjtBQUVBLElBQU0scUJBQXFCLEdBQUcsVUFBQyxLQUFLO0lBQ3pDLE9BQUEsSUFBQSxvQkFBWSxFQUFDLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUFyQyxDQUFxQyxDQUFDO0FBRDNCLFFBQUEscUJBQXFCLHlCQUNNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlSW50bCwgY3JlYXRlSW50bENhY2hlLCBNZXNzYWdlRGVzY3JpcHRvciB9IGZyb20gJ0Bmb3JtYXRqcy9pbnRsJztcbmltcG9ydCB7IGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QsIGZvcm1hdElTTyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBpMThuZXh0IGZyb20gJ2kxOG5leHQnO1xuXG5pbXBvcnQgZW4gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VuLVVTJztcbmltcG9ydCB1ayBmcm9tICdkYXRlLWZucy9sb2NhbGUvdWsnO1xuaW1wb3J0IGVzIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lcyc7XG5pbXBvcnQgdHIgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL3RyJztcbmltcG9ydCBubCBmcm9tICdkYXRlLWZucy9sb2NhbGUvbmwnO1xuaW1wb3J0IHJ1IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9ydSc7XG5pbXBvcnQgcGwgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL3BsJztcbmltcG9ydCB2aSBmcm9tICdkYXRlLWZucy9sb2NhbGUvdmknO1xuaW1wb3J0IGZyIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9mcic7XG5pbXBvcnQgYXogZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2F6JztcbmltcG9ydCB7IGlzQnJvd3NlclN1cHBvcnRSZWxhdGl2ZURhdGVGb3JtYXQgfSBmcm9tICcuL2RldGVjdC1icm93c2VyJztcblxuZXhwb3J0IGNvbnN0IE1JTklNVU1fU0hPV0lOR19CQUxBTkNFID0gMC4wMDAwMTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0FNT1VOVF9QUkVDSVNJT04gPSA0O1xuZXhwb3J0IGNvbnN0IFNNQUxMX1BSRUNJU0lPTiA9IDI7XG5leHBvcnQgY29uc3QgREVGQVVMVF9QUkVDSVNJT04gPSA1O1xuZXhwb3J0IGNvbnN0IEZVTExfUFJFQ0lTSU9OID0gOTtcblxuY29uc3QgTG9jYWxlID0ge1xuICBlbjogZW4sXG4gIGVzOiBlcyxcbiAgdWs6IHVrLFxuICB0cjogdHIsXG4gIG5sOiBubCxcbiAgcnU6IHJ1LFxuICBwbDogcGwsXG4gIHZpOiB2aSxcbiAgZnI6IGZyLFxuICBhejogYXosXG59O1xuXG5jb25zdCBjYWNoZSA9IGNyZWF0ZUludGxDYWNoZSgpO1xuY29uc3QgaW50bCA9IGNyZWF0ZUludGwoXG4gIHtcbiAgICBsb2NhbGU6ICdlbi1VUycsXG4gICAgbWVzc2FnZXM6IHtcbiAgICAgICdjb21wb25lbnRzLnRyYW5zYWN0aW9uX3N0YXR1cyc6ICdTdWNjZXNzJyxcbiAgICB9LFxuICB9LFxuICBjYWNoZVxuKTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdE1lc3NhZ2UgPSAoXG4gIGRlc2NyaXB0b3I6IE1lc3NhZ2VEZXNjcmlwdG9yLFxuICB2YWx1ZXM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4pOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gaW50bC5mb3JtYXRNZXNzYWdlKGRlc2NyaXB0b3IsIHZhbHVlcyk7XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0TnVtYmVyID0gKFxuICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLFxuICB7XG4gICAgcHJlY2lzaW9uLFxuICAgIG5vdGF0aW9uLFxuICAgIGNvbXBhY3REaXNwbGF5LFxuICB9OiB7XG4gICAgcHJlY2lzaW9uPzogbnVtYmVyO1xuICAgIG5vdGF0aW9uPzogJ2NvbXBhY3QnIHwgJ3N0YW5kYXJkJztcbiAgICBjb21wYWN0RGlzcGxheT86ICdzaG9ydCcgfCAnbG9uZyc7XG4gIH0gPSB7fVxuKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGludGwuZm9ybWF0TnVtYmVyKHZhbHVlIGFzIG51bWJlciwge1xuICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogcHJlY2lzaW9uIHx8IDAsXG4gICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjaXNpb24gfHwgMCxcbiAgICBub3RhdGlvbixcbiAgICBjb21wYWN0RGlzcGxheSxcbiAgfSk7XG59O1xuXG5jb25zdCBCSUdfTlVNQkVSU19OT1RBVElPTl9TWU1CT0wgPSBbXG4gICcnLFxuICAnaycsIC8vVGhvdXNhbmRcbiAgJ00nLCAvL01pbGxpb25cbiAgJ0InLCAvL0JpbGxpb25cbiAgJ1QnLCAvL1RyaWxsaW9uXG4gICdlMTUnLCAvL1F1YWRyaWxsaW9uXG4gICdlMTgnLCAvL1F1aW50aWxsaW9uXG4gICdlMjEnLCAvL1NleHRpbGxpb25cbiAgJ2UyNCcsIC8vU2VwdGlsbGlvblxuICAnZTI3JywgLy9PY3RpbGxpb25cbiAgJ2UzMCcsIC8vTm9uaWxsaW9uXG4gICdlMzMnLCAvL0RlY2lsbGlvblxuICAnZTM2JywgLy9VbmRlY2lsbGlvblxuICAnZTM5JywgLy9EdW9kZWNpbGxpb25cbiAgJ2U0MicsIC8vVHJlZGVjaWxsaW9uXG4gICdlNDUnLCAvL1F1YXR0dW9yZGVjaWxsaW9uXG4gICdlNDgnLCAvL1F1aW5kZWNpbGxpb25cbiAgJ2U1MScsIC8vU2V4ZGVjaWxsaW9uXG4gICdlNTQnLCAvL1NlcHRlbmRlY2lsbGlvblxuICAnZTU3JywgLy9PY3RvZGVjaWxsaW9uXG4gICdlNjAnLCAvL05vdmVtZGVjaWxsaW9uXG4gICdlNjMnLCAvL1ZpZ2ludGlsbGlvblxuICAnZTY2JywgLy9VbnZpZ2ludGlsbGlvblxuICAnZTY5JywgLy9EdW92aWdpbnRpbGxpb25cbiAgJ2U3MicsIC8vVHJldmlnaW50aWxsaW9uXG4gICdlNzUnLCAvL1F1YXR0dW9ydmlnaW50aWxsaW9uXG4gICdlNzgnLCAvL1F1aW52aWdpbnRpbGxpb25cbiAgJ2U4MScsIC8vU2V4dmlnaW50aWxsaW9uXG4gICdlODQnLCAvL1NlcHRlbnZpZ2ludGlsbGlvblxuICAnZTg3JywgLy9PY3RvdmlnaW50aWxsaW9uXG4gICdlOTAnLCAvL05vdmVtdmlnaW50aWxsaW9uXG4gICdlOTMnLCAvL1RyaWdpbnRpbGxpb25cbiAgJ2U5NicsIC8vVW50cmlnaW50aWxsaW9uXG4gICdlOTknLCAvL0R1b3RyaWdpbnRpbGxpb25cbiAgJ2UxMDEnLCAvL0dvb2dvbFxuICAnZTEwNCcsIC8vVHJldHJpZ2ludGlsbGlvblxuXTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdEJpZ051bWJlcnMgPSAodmFsdWUpID0+IHtcbiAgLy8gZGV0ZXJtaW5lcyBzeW1ib2xcbiAgY29uc3QgdGllciA9IChNYXRoLmxvZzEwKE1hdGguYWJzKHZhbHVlKSkgLyAzKSB8IDA7XG4gIGNvbnN0IHRpZXJzV2l0aG91dFN1ZmZpeGVzID0gWzAsIDEsIDJdO1xuXG4gIGlmICh0aWVyc1dpdGhvdXRTdWZmaXhlcy5pbmNsdWRlcyh0aWVyKSkge1xuICAgIHJldHVybiBmb3JtYXROdW1iZXIodmFsdWUsIHtcbiAgICAgIHByZWNpc2lvbjogREVGQVVMVF9QUkVDSVNJT04sXG4gICAgfSk7XG4gIH1cblxuICAvLyBnZXQgc3VmZml4IGFuZCBkZXRlcm1pbmUgc2NhbGVcbiAgY29uc3Qgc3VmZml4ID0gQklHX05VTUJFUlNfTk9UQVRJT05fU1lNQk9MW3RpZXJdO1xuICBjb25zdCBzY2FsZSA9IE1hdGgucG93KDEwLCB0aWVyICogMyk7XG5cbiAgY29uc3Qgc2NhbGVkTnVtYmVyID0gdmFsdWUgLyBzY2FsZTtcblxuICByZXR1cm4gc2NhbGVkTnVtYmVyLnRvRml4ZWQoNSkgKyBzdWZmaXg7XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0Q3VycmVuY3kgPSAoXG4gIHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsXG4gIGNvZGU6IHN0cmluZyxcbiAge1xuICAgIHByZWNpc2lvbixcbiAgfToge1xuICAgIHByZWNpc2lvbj86IG51bWJlcjtcbiAgfSA9IHt9XG4pOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gaW50bC5mb3JtYXROdW1iZXIodmFsdWUgYXMgbnVtYmVyLCB7XG4gICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gICAgY3VycmVuY3k6IGNvZGUsXG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjaXNpb24sXG4gICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjaXNpb24sXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFBlcmNlbnRhZ2UgPSAoXG4gIHZhbHVlOiBudW1iZXIsXG4gIHsgcHJlY2lzaW9uIH06IHsgcHJlY2lzaW9uPzogbnVtYmVyIH0gPSB7fVxuKSA9PiB7XG4gIHJldHVybiB2YWx1ZS50b0ZpeGVkKHByZWNpc2lvbiB8fCAyKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRUaW1lc3RhbXAgPSAodmFsdWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gIGNvbnN0IGxvY2FsZSA9IGkxOG5leHQubGFuZ3VhZ2UgfHwgJ2VuJztcbiAgY29uc3QgbmF0aXZlSW50bCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwge1xuICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgIGRheTogJ251bWVyaWMnLFxuICAgIHllYXI6ICdudW1lcmljJyxcbiAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgdGltZVpvbmVOYW1lOiAnc2hvcnQnLFxuICB9KTtcblxuICByZXR1cm4gYCR7bmF0aXZlSW50bC5mb3JtYXQoZGF0ZSl9YDtcbn07XG5cbmNvbnN0IGZvcm1hdERpc3RhbmNlVG9rZW5zID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiAnc2Vjb25kJyxcbiAgeFNlY29uZHM6ICdzZWNvbmQnLFxuICBsZXNzVGhhblhNaW51dGVzOiAnbWludXRlJyxcbiAgeE1pbnV0ZXM6ICdtaW51dGUnLFxuICB4SG91cnM6ICdob3VyJyxcbiAgeERheXM6ICdkYXknLFxuICB4TW9udGhzOiAnbW9udGgnLFxuICB4WWVhcnM6ICd5ZWFyJyxcbn07XG5cbmNvbnN0IGZvcm1hdERpc3RhbmNlID0gKHRva2VuLCBjb3VudCwgb3B0aW9ucykgPT4ge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3QgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUuY29kZSB8fCAnZW4nO1xuXG4gIHJldHVybiBuZXcgKEludGwgYXMgYW55KS5SZWxhdGl2ZVRpbWVGb3JtYXQobG9jYWxlLCB7XG4gICAgc3R5bGU6ICdzaG9ydCcsXG4gIH0pXG4gICAgLmZvcm1hdCgtY291bnQsIGZvcm1hdERpc3RhbmNlVG9rZW5zW3Rva2VuXSlcbiAgICAucmVwbGFjZSgnLicsICcnKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRUaW1lc3RhbXBBZ2UgPSAodmFsdWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gIGNvbnN0IGlzU3VwcG9ydGVkTGFuZ3VhZ2VBbmRCcm93c2VyID1cbiAgICBpMThuZXh0Lmxhbmd1YWdlICE9PSAnYXonICYmIGlzQnJvd3NlclN1cHBvcnRSZWxhdGl2ZURhdGVGb3JtYXQ7XG5cbiAgcmV0dXJuIGAke2Zvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QoZGF0ZSwge1xuICAgIGFkZFN1ZmZpeDogdHJ1ZSxcbiAgICBsb2NhbGU6IHtcbiAgICAgIC4uLkxvY2FsZVtpMThuZXh0Lmxhbmd1YWdlXSxcbiAgICAgIC4uLihpc1N1cHBvcnRlZExhbmd1YWdlQW5kQnJvd3NlciAmJiB7XG4gICAgICAgIGZvcm1hdERpc3RhbmNlLFxuICAgICAgfSksXG4gICAgfSxcbiAgICByb3VuZGluZ01ldGhvZDogJ2Zsb29yJyxcbiAgfSl9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlID0gKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xuICByZXR1cm4gYCR7aW50bC5mb3JtYXREYXRlKGRhdGUsIHtcbiAgICBtb250aDogJ3Nob3J0JyxcbiAgICBkYXk6ICdudW1lcmljJyxcbiAgICB5ZWFyOiAnbnVtZXJpYycsXG4gIH0pfSwgJHtpbnRsLmZvcm1hdFRpbWUoZGF0ZSwge1xuICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgfSl9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlV2l0aFdlZWtkYXkgPSAodmFsdWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gIHJldHVybiBgJHtpbnRsLmZvcm1hdERhdGUoZGF0ZSwge1xuICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgIGRheTogJ251bWVyaWMnLFxuICAgIHllYXI6ICdudW1lcmljJyxcbiAgICB3ZWVrZGF5OiAnbG9uZycsXG4gIH0pfWA7XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGF0ZVNob3J0ID0gKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xuICByZXR1cm4gYCR7aW50bC5mb3JtYXREYXRlKGRhdGUsIHtcbiAgICBtb250aDogJ3Nob3J0JyxcbiAgICBkYXk6ICdudW1lcmljJyxcbiAgfSl9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlV2l0aE1vbnRoQW5kWWVhciA9ICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgcmV0dXJuIGAke2ludGwuZm9ybWF0RGF0ZShkYXRlLCB7XG4gICAgbW9udGg6ICdzaG9ydCcsXG4gICAgeWVhcjogJ251bWVyaWMnLFxuICB9KX1gO1xufTtcblxuZXhwb3J0IGVudW0gSGFzaExlbmd0aCB7XG4gIEZVTEwgPSAwLFxuICBUSU5ZID0gNSxcbiAgTElUVExFID0gMTAsXG4gIFNNQUxMID0gMTUsXG4gIE1FRElVTSA9IDIwLFxuICBMQVJHRSA9IDI1LFxufVxuXG5leHBvcnQgY29uc3Qgc2hvcnRlblN0cmluZyA9IChcbiAgdmFsdWVUb1Nob3J0OiBzdHJpbmcsXG4gIHZpc2libGVIYXNoTGVuZ3RoOiBIYXNoTGVuZ3RoID0gSGFzaExlbmd0aC5USU5ZXG4pID0+IHtcbiAgY29uc3QgaGFzaExlbmd0aCA9IHZhbHVlVG9TaG9ydC5sZW5ndGg7XG4gIGNvbnN0IGZpcnN0UGFydCA9IHZhbHVlVG9TaG9ydC5zdWJzdHJpbmcoMCwgdmlzaWJsZUhhc2hMZW5ndGgpO1xuICBjb25zdCBzZWNvbmRQYXJ0ID0gdmFsdWVUb1Nob3J0LnN1YnN0cmluZyhoYXNoTGVuZ3RoIC0gdmlzaWJsZUhhc2hMZW5ndGgpO1xuXG4gIHJldHVybiBgJHtmaXJzdFBhcnR9Li4uJHtzZWNvbmRQYXJ0fWA7XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0SGFzaCA9IChcbiAgaGFzaDogc3RyaW5nLFxuICB2aXNpYmxlSGFzaExlbmd0aDogSGFzaExlbmd0aCA9IEhhc2hMZW5ndGguVElOWVxuKSA9PiB7XG4gIGNvbnN0IE1JTl9UUlVOQ0FURV9IQVNIX0xFTkdUSCA9IEhhc2hMZW5ndGguVElOWSAqIDIgKyAzO1xuXG4gIGNvbnN0IFtoYXNoV2l0aG91dFN1ZmZpeCwgbGFzdERpZ2l0c10gPSBoYXNoLnNwbGl0KCctJyk7XG5cbiAgY29uc3QgaGFzaExlbmd0aCA9IGhhc2hXaXRob3V0U3VmZml4Lmxlbmd0aDtcblxuICBpZiAoXG4gICAgdmlzaWJsZUhhc2hMZW5ndGggPT09IEhhc2hMZW5ndGguRlVMTCB8fFxuICAgIGhhc2hMZW5ndGggPD0gTUlOX1RSVU5DQVRFX0hBU0hfTEVOR1RIXG4gICkge1xuICAgIHJldHVybiBoYXNoO1xuICB9XG5cbiAgY29uc3QgdHJ1bmNhdGVkSGFzaCA9IHNob3J0ZW5TdHJpbmcoaGFzaFdpdGhvdXRTdWZmaXgsIHZpc2libGVIYXNoTGVuZ3RoKTtcblxuICByZXR1cm4gbGFzdERpZ2l0cyA/IGAke3RydW5jYXRlZEhhc2h9LSR7bGFzdERpZ2l0c31gIDogYCR7dHJ1bmNhdGVkSGFzaH1gO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdElTT0RhdGVPbmx5ID0gKGRhdGU6IERhdGUpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gZm9ybWF0SVNPKGRhdGUsIHtcbiAgICByZXByZXNlbnRhdGlvbjogJ2RhdGUnLFxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREZXBsb3lzQ291bnQgPSAodmFsdWUpOiBzdHJpbmcgPT5cbiAgYCR7Zm9ybWF0TnVtYmVyKHZhbHVlLCB7XG4gICAgbm90YXRpb246ICdjb21wYWN0JyxcbiAgICBjb21wYWN0RGlzcGxheTogJ3Nob3J0JyxcbiAgfSl9YDtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFJhdGVzVG9DdXJyZW5jeSA9ICh2YWx1ZSk6IHN0cmluZyA9PlxuICBmb3JtYXROdW1iZXIodmFsdWUsIHsgcHJlY2lzaW9uOiA0IH0pO1xuIl19