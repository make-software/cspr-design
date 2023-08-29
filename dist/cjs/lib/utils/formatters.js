"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatRatesToCurrency = exports.formatDeploysCount = exports.formatISODateOnly = exports.formatHash = exports.HashLength = exports.formatDateWithMonthAndYear = exports.formatDateShort = exports.formatDateWithWeekday = exports.formatDate = exports.formatTimestampAge = exports.formatTimestamp = exports.formatPercentage = exports.formatCurrency = exports.formatBigNumbers = exports.formatNumber = exports.formatMessage = exports.FULL_PRECISION = exports.DEFAULT_PRECISION = void 0;
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
    'Qa',
    'Qi',
    'Sx',
    'Sp',
    'O',
    'N',
    'D',
    'Ud',
    'Dd',
    'Td',
    'Qad',
    'Qid',
    'Sxd',
    'Spd',
    'Od',
    'Nd',
    'V',
    'Uv',
    'Dv',
    'Tv',
    'Qav',
    'Qiv',
    'Sxv',
    'Spv',
    'Ov',
    'Nv',
    'Tr',
    'Ut',
    'Dt',
    'G',
    'Tt', //Tretrigintillion
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
var formatHash = function (hash, visibleHashLength) {
    if (visibleHashLength === void 0) { visibleHashLength = HashLength.TINY; }
    var MIN_TRUNCATE_HASH_LENGTH = HashLength.TINY * 2 + 3;
    var _a = hash.split('-'), hashWithoutSuffix = _a[0], lastDigits = _a[1];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvdXRpbHMvZm9ybWF0dGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsdUNBQWdGO0FBQ2hGLHFDQUFnRTtBQUNoRSw0REFBOEI7QUFFOUIsd0VBQXVDO0FBQ3ZDLGtFQUFvQztBQUNwQyxrRUFBb0M7QUFDcEMsa0VBQW9DO0FBQ3BDLGtFQUFvQztBQUNwQyxrRUFBb0M7QUFDcEMsa0VBQW9DO0FBQ3BDLGtFQUFvQztBQUNwQyxrRUFBb0M7QUFDcEMsa0VBQW9DO0FBQ3BDLG1EQUFzRTtBQUV6RCxRQUFBLGlCQUFpQixHQUFHLENBQUMsQ0FBQztBQUN0QixRQUFBLGNBQWMsR0FBRyxDQUFDLENBQUM7QUFFaEMsSUFBTSxNQUFNLEdBQUc7SUFDYixFQUFFLEVBQUUsZUFBRTtJQUNOLEVBQUUsRUFBRSxZQUFFO0lBQ04sRUFBRSxFQUFFLFlBQUU7SUFDTixFQUFFLEVBQUUsWUFBRTtJQUNOLEVBQUUsRUFBRSxZQUFFO0lBQ04sRUFBRSxFQUFFLFlBQUU7SUFDTixFQUFFLEVBQUUsWUFBRTtJQUNOLEVBQUUsRUFBRSxZQUFFO0lBQ04sRUFBRSxFQUFFLFlBQUU7SUFDTixFQUFFLEVBQUUsWUFBRTtDQUNQLENBQUM7QUFFRixJQUFNLEtBQUssR0FBRyxJQUFBLHNCQUFlLEdBQUUsQ0FBQztBQUNoQyxJQUFNLElBQUksR0FBRyxJQUFBLGlCQUFVLEVBQ3JCO0lBQ0UsTUFBTSxFQUFFLE9BQU87SUFDZixRQUFRLEVBQUU7UUFDUiwrQkFBK0IsRUFBRSxTQUFTO0tBQzNDO0NBQ0YsRUFDRCxLQUFLLENBQ04sQ0FBQztBQUVLLElBQU0sYUFBYSxHQUFHLFVBQzNCLFVBQTZCLEVBQzdCLE1BQTRCO0lBRTVCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDaEQsQ0FBQyxDQUFDO0FBTFcsUUFB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QixzQkFJeEI7QUFFQSxJQUFNLHFCQUFxQixHQUFHLFVBQUMsS0FBSztJQUN6QyxPQUFBLElBQUEsb0JBQVksRUFBQyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFBckMsQ0FBcUMsQ0FBQztBQUQzQixRQUFBLHFCQUFxQix5QkFDTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUludGwsIGNyZWF0ZUludGxDYWNoZSwgTWVzc2FnZURlc2NyaXB0b3IgfSBmcm9tICdAZm9ybWF0anMvaW50bCc7XG5pbXBvcnQgeyBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0LCBmb3JtYXRJU08gfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgaTE4bmV4dCBmcm9tICdpMThuZXh0JztcblxuaW1wb3J0IGVuIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbi1VUyc7XG5pbXBvcnQgdWsgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL3VrJztcbmltcG9ydCBlcyBmcm9tICdkYXRlLWZucy9sb2NhbGUvZXMnO1xuaW1wb3J0IHRyIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS90cic7XG5pbXBvcnQgbmwgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL25sJztcbmltcG9ydCBydSBmcm9tICdkYXRlLWZucy9sb2NhbGUvcnUnO1xuaW1wb3J0IHBsIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9wbCc7XG5pbXBvcnQgdmkgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL3ZpJztcbmltcG9ydCBmciBmcm9tICdkYXRlLWZucy9sb2NhbGUvZnInO1xuaW1wb3J0IGF6IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9heic7XG5pbXBvcnQgeyBpc0Jyb3dzZXJTdXBwb3J0UmVsYXRpdmVEYXRlRm9ybWF0IH0gZnJvbSAnLi9kZXRlY3QtYnJvd3Nlcic7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1BSRUNJU0lPTiA9IDU7XG5leHBvcnQgY29uc3QgRlVMTF9QUkVDSVNJT04gPSA5O1xuXG5jb25zdCBMb2NhbGUgPSB7XG4gIGVuOiBlbixcbiAgZXM6IGVzLFxuICB1azogdWssXG4gIHRyOiB0cixcbiAgbmw6IG5sLFxuICBydTogcnUsXG4gIHBsOiBwbCxcbiAgdmk6IHZpLFxuICBmcjogZnIsXG4gIGF6OiBheixcbn07XG5cbmNvbnN0IGNhY2hlID0gY3JlYXRlSW50bENhY2hlKCk7XG5jb25zdCBpbnRsID0gY3JlYXRlSW50bChcbiAge1xuICAgIGxvY2FsZTogJ2VuLVVTJyxcbiAgICBtZXNzYWdlczoge1xuICAgICAgJ2NvbXBvbmVudHMudHJhbnNhY3Rpb25fc3RhdHVzJzogJ1N1Y2Nlc3MnLFxuICAgIH0sXG4gIH0sXG4gIGNhY2hlXG4pO1xuXG5leHBvcnQgY29uc3QgZm9ybWF0TWVzc2FnZSA9IChcbiAgZGVzY3JpcHRvcjogTWVzc2FnZURlc2NyaXB0b3IsXG4gIHZhbHVlcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbik6IHN0cmluZyA9PiB7XG4gIHJldHVybiBpbnRsLmZvcm1hdE1lc3NhZ2UoZGVzY3JpcHRvciwgdmFsdWVzKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXROdW1iZXIgPSAoXG4gIHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsXG4gIHtcbiAgICBwcmVjaXNpb24sXG4gICAgbm90YXRpb24sXG4gICAgY29tcGFjdERpc3BsYXksXG4gIH06IHtcbiAgICBwcmVjaXNpb24/OiBudW1iZXI7XG4gICAgbm90YXRpb24/OiAnY29tcGFjdCcgfCAnc3RhbmRhcmQnO1xuICAgIGNvbXBhY3REaXNwbGF5PzogJ3Nob3J0JyB8ICdsb25nJztcbiAgfSA9IHt9XG4pOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gaW50bC5mb3JtYXROdW1iZXIodmFsdWUgYXMgbnVtYmVyLCB7XG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjaXNpb24gfHwgMCxcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNpc2lvbiB8fCAwLFxuICAgIG5vdGF0aW9uLFxuICAgIGNvbXBhY3REaXNwbGF5LFxuICB9KTtcbn07XG5cbmNvbnN0IEJJR19OVU1CRVJTX05PVEFUSU9OX1NZTUJPTCA9IFtcbiAgJycsXG4gICdrJywgLy9UaG91c2FuZFxuICAnTScsIC8vTWlsbGlvblxuICAnQicsIC8vQmlsbGlvblxuICAnVCcsIC8vVHJpbGxpb25cbiAgJ1FhJywgLy9RdWFkcmlsbGlvblxuICAnUWknLCAvL1F1aW50aWxsaW9uXG4gICdTeCcsIC8vU2V4dGlsbGlvblxuICAnU3AnLCAvL1NlcHRpbGxpb25cbiAgJ08nLCAvL09jdGlsbGlvblxuICAnTicsIC8vTm9uaWxsaW9uXG4gICdEJywgLy9EZWNpbGxpb25cbiAgJ1VkJywgLy9VbmRlY2lsbGlvblxuICAnRGQnLCAvL0R1b2RlY2lsbGlvblxuICAnVGQnLCAvL1RyZWRlY2lsbGlvblxuICAnUWFkJywgLy9RdWF0dHVvcmRlY2lsbGlvblxuICAnUWlkJywgLy9RdWluZGVjaWxsaW9uXG4gICdTeGQnLCAvL1NleGRlY2lsbGlvblxuICAnU3BkJywgLy9TZXB0ZW5kZWNpbGxpb25cbiAgJ09kJywgLy9PY3RvZGVjaWxsaW9uXG4gICdOZCcsIC8vTm92ZW1kZWNpbGxpb25cbiAgJ1YnLCAvL1ZpZ2ludGlsbGlvblxuICAnVXYnLCAvL1VudmlnaW50aWxsaW9uXG4gICdEdicsIC8vRHVvdmlnaW50aWxsaW9uXG4gICdUdicsIC8vVHJldmlnaW50aWxsaW9uXG4gICdRYXYnLCAvL1F1YXR0dW9ydmlnaW50aWxsaW9uXG4gICdRaXYnLCAvL1F1aW52aWdpbnRpbGxpb25cbiAgJ1N4dicsIC8vU2V4dmlnaW50aWxsaW9uXG4gICdTcHYnLCAvL1NlcHRlbnZpZ2ludGlsbGlvblxuICAnT3YnLCAvL09jdG92aWdpbnRpbGxpb25cbiAgJ052JywgLy9Ob3ZlbXZpZ2ludGlsbGlvblxuICAnVHInLCAvL1RyaWdpbnRpbGxpb25cbiAgJ1V0JywgLy9VbnRyaWdpbnRpbGxpb25cbiAgJ0R0JywgLy9EdW90cmlnaW50aWxsaW9uXG4gICdHJywgLy9Hb29nb2xcbiAgJ1R0JywgLy9UcmV0cmlnaW50aWxsaW9uXG5dO1xuXG5leHBvcnQgY29uc3QgZm9ybWF0QmlnTnVtYmVycyA9ICh2YWx1ZSkgPT4ge1xuICAvLyBkZXRlcm1pbmVzIHN5bWJvbFxuICBjb25zdCB0aWVyID0gKE1hdGgubG9nMTAoTWF0aC5hYnModmFsdWUpKSAvIDMpIHwgMDtcbiAgY29uc3QgdGllcnNXaXRob3V0U3VmZml4ZXMgPSBbMCwgMSwgMl07XG5cbiAgaWYgKHRpZXJzV2l0aG91dFN1ZmZpeGVzLmluY2x1ZGVzKHRpZXIpKSB7XG4gICAgcmV0dXJuIGZvcm1hdE51bWJlcih2YWx1ZSwge1xuICAgICAgcHJlY2lzaW9uOiBERUZBVUxUX1BSRUNJU0lPTixcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGdldCBzdWZmaXggYW5kIGRldGVybWluZSBzY2FsZVxuICBjb25zdCBzdWZmaXggPSBCSUdfTlVNQkVSU19OT1RBVElPTl9TWU1CT0xbdGllcl07XG4gIGNvbnN0IHNjYWxlID0gTWF0aC5wb3coMTAsIHRpZXIgKiAzKTtcblxuICBjb25zdCBzY2FsZWROdW1iZXIgPSB2YWx1ZSAvIHNjYWxlO1xuXG4gIHJldHVybiBzY2FsZWROdW1iZXIudG9GaXhlZCg1KSArIHN1ZmZpeDtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRDdXJyZW5jeSA9IChcbiAgdmFsdWU6IG51bWJlciB8IHN0cmluZyxcbiAgY29kZTogc3RyaW5nLFxuICB7XG4gICAgcHJlY2lzaW9uLFxuICB9OiB7XG4gICAgcHJlY2lzaW9uPzogbnVtYmVyO1xuICB9ID0ge31cbik6IHN0cmluZyA9PiB7XG4gIHJldHVybiBpbnRsLmZvcm1hdE51bWJlcih2YWx1ZSBhcyBudW1iZXIsIHtcbiAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICBjdXJyZW5jeTogY29kZSxcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNpc2lvbixcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNpc2lvbixcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0UGVyY2VudGFnZSA9IChcbiAgdmFsdWU6IG51bWJlcixcbiAgeyBwcmVjaXNpb24gfTogeyBwcmVjaXNpb24/OiBudW1iZXIgfSA9IHt9XG4pID0+IHtcbiAgcmV0dXJuIHZhbHVlLnRvRml4ZWQocHJlY2lzaW9uIHx8IDIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFRpbWVzdGFtcCA9ICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgY29uc3QgbG9jYWxlID0gaTE4bmV4dC5sYW5ndWFnZSB8fCAnZW4nO1xuICBjb25zdCBuYXRpdmVJbnRsID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7XG4gICAgbW9udGg6ICdzaG9ydCcsXG4gICAgZGF5OiAnbnVtZXJpYycsXG4gICAgeWVhcjogJ251bWVyaWMnLFxuICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICB0aW1lWm9uZU5hbWU6ICdzaG9ydCcsXG4gIH0pO1xuXG4gIHJldHVybiBgJHtuYXRpdmVJbnRsLmZvcm1hdChkYXRlKX1gO1xufTtcblxuY29uc3QgZm9ybWF0RGlzdGFuY2VUb2tlbnMgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6ICdzZWNvbmQnLFxuICB4U2Vjb25kczogJ3NlY29uZCcsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6ICdtaW51dGUnLFxuICB4TWludXRlczogJ21pbnV0ZScsXG4gIHhIb3VyczogJ2hvdXInLFxuICB4RGF5czogJ2RheScsXG4gIHhNb250aHM6ICdtb250aCcsXG4gIHhZZWFyczogJ3llYXInLFxufTtcblxuY29uc3QgZm9ybWF0RGlzdGFuY2UgPSAodG9rZW4sIGNvdW50LCBvcHRpb25zKSA9PiB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZS5jb2RlIHx8ICdlbic7XG5cbiAgcmV0dXJuIG5ldyAoSW50bCBhcyBhbnkpLlJlbGF0aXZlVGltZUZvcm1hdChsb2NhbGUsIHtcbiAgICBzdHlsZTogJ3Nob3J0JyxcbiAgfSlcbiAgICAuZm9ybWF0KC1jb3VudCwgZm9ybWF0RGlzdGFuY2VUb2tlbnNbdG9rZW5dKVxuICAgIC5yZXBsYWNlKCcuJywgJycpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFRpbWVzdGFtcEFnZSA9ICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgY29uc3QgaXNTdXBwb3J0ZWRMYW5ndWFnZUFuZEJyb3dzZXIgPVxuICAgIGkxOG5leHQubGFuZ3VhZ2UgIT09ICdheicgJiYgaXNCcm93c2VyU3VwcG9ydFJlbGF0aXZlRGF0ZUZvcm1hdDtcblxuICByZXR1cm4gYCR7Zm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdChkYXRlLCB7XG4gICAgYWRkU3VmZml4OiB0cnVlLFxuICAgIGxvY2FsZToge1xuICAgICAgLi4uTG9jYWxlW2kxOG5leHQubGFuZ3VhZ2VdLFxuICAgICAgLi4uKGlzU3VwcG9ydGVkTGFuZ3VhZ2VBbmRCcm93c2VyICYmIHtcbiAgICAgICAgZm9ybWF0RGlzdGFuY2UsXG4gICAgICB9KSxcbiAgICB9LFxuICAgIHJvdW5kaW5nTWV0aG9kOiAnZmxvb3InLFxuICB9KX1gO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGUgPSAodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gIHJldHVybiBgJHtpbnRsLmZvcm1hdERhdGUoZGF0ZSwge1xuICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgIGRheTogJ251bWVyaWMnLFxuICAgIHllYXI6ICdudW1lcmljJyxcbiAgfSl9LCAke2ludGwuZm9ybWF0VGltZShkYXRlLCB7XG4gICAgaG91cjogJ251bWVyaWMnLFxuICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICB9KX1gO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGVXaXRoV2Vla2RheSA9ICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgcmV0dXJuIGAke2ludGwuZm9ybWF0RGF0ZShkYXRlLCB7XG4gICAgbW9udGg6ICdzaG9ydCcsXG4gICAgZGF5OiAnbnVtZXJpYycsXG4gICAgeWVhcjogJ251bWVyaWMnLFxuICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgfSl9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlU2hvcnQgPSAodmFsdWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gIHJldHVybiBgJHtpbnRsLmZvcm1hdERhdGUoZGF0ZSwge1xuICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgIGRheTogJ251bWVyaWMnLFxuICB9KX1gO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGVXaXRoTW9udGhBbmRZZWFyID0gKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xuICByZXR1cm4gYCR7aW50bC5mb3JtYXREYXRlKGRhdGUsIHtcbiAgICBtb250aDogJ3Nob3J0JyxcbiAgICB5ZWFyOiAnbnVtZXJpYycsXG4gIH0pfWA7XG59O1xuXG5leHBvcnQgZW51bSBIYXNoTGVuZ3RoIHtcbiAgRlVMTCA9IDAsXG4gIFRJTlkgPSA1LFxuICBMSVRUTEUgPSAxMCxcbiAgU01BTEwgPSAxNSxcbiAgTUVESVVNID0gMjAsXG4gIExBUkdFID0gMjUsXG59XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRIYXNoID0gKFxuICBoYXNoOiBzdHJpbmcsXG4gIHZpc2libGVIYXNoTGVuZ3RoOiBIYXNoTGVuZ3RoID0gSGFzaExlbmd0aC5USU5ZXG4pID0+IHtcbiAgY29uc3QgTUlOX1RSVU5DQVRFX0hBU0hfTEVOR1RIID0gSGFzaExlbmd0aC5USU5ZICogMiArIDM7XG5cbiAgY29uc3QgW2hhc2hXaXRob3V0U3VmZml4LCBsYXN0RGlnaXRzXSA9IGhhc2guc3BsaXQoJy0nKTtcblxuICBjb25zdCBoYXNoTGVuZ3RoID0gaGFzaFdpdGhvdXRTdWZmaXgubGVuZ3RoO1xuXG4gIGlmIChcbiAgICB2aXNpYmxlSGFzaExlbmd0aCA9PT0gSGFzaExlbmd0aC5GVUxMIHx8XG4gICAgaGFzaExlbmd0aCA8PSBNSU5fVFJVTkNBVEVfSEFTSF9MRU5HVEhcbiAgKSB7XG4gICAgcmV0dXJuIGhhc2g7XG4gIH1cblxuICBjb25zdCBmaXJzdFBhcnQgPSBoYXNoV2l0aG91dFN1ZmZpeC5zdWJzdHJpbmcoMCwgdmlzaWJsZUhhc2hMZW5ndGgpO1xuICBjb25zdCBzZWNvbmRQYXJ0ID0gaGFzaFdpdGhvdXRTdWZmaXguc3Vic3RyaW5nKFxuICAgIGhhc2hMZW5ndGggLSB2aXNpYmxlSGFzaExlbmd0aFxuICApO1xuXG4gIGNvbnN0IHRydW5jYXRlZEhhc2ggPSBgJHtmaXJzdFBhcnR9Li4uJHtzZWNvbmRQYXJ0fWA7XG5cbiAgcmV0dXJuIGxhc3REaWdpdHMgPyBgJHt0cnVuY2F0ZWRIYXNofS0ke2xhc3REaWdpdHN9YCA6IGAke3RydW5jYXRlZEhhc2h9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRJU09EYXRlT25seSA9IChkYXRlOiBEYXRlKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGZvcm1hdElTTyhkYXRlLCB7XG4gICAgcmVwcmVzZW50YXRpb246ICdkYXRlJyxcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGVwbG95c0NvdW50ID0gKHZhbHVlKTogc3RyaW5nID0+XG4gIGAke2Zvcm1hdE51bWJlcih2YWx1ZSwge1xuICAgIG5vdGF0aW9uOiAnY29tcGFjdCcsXG4gICAgY29tcGFjdERpc3BsYXk6ICdzaG9ydCcsXG4gIH0pfWA7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRSYXRlc1RvQ3VycmVuY3kgPSAodmFsdWUpOiBzdHJpbmcgPT5cbiAgZm9ybWF0TnVtYmVyKHZhbHVlLCB7IHByZWNpc2lvbjogNCB9KTtcbiJdfQ==