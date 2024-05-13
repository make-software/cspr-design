"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatRatesToCurrency = exports.formatDeploysCount = exports.formatISODateOnly = exports.formatHash = exports.HashLength = exports.formatDateWithMonthAndYear = exports.formatDateShort = exports.formatDateWithWeekday = exports.formatDate = exports.formatTimestampAge = exports.formatTimestamp = exports.formatPercentage = exports.formatCurrency = exports.formatBigNumbers = exports.formatNumber = exports.formatMessage = exports.FULL_PRECISION = exports.DEFAULT_PRECISION = exports.SMALL_PRECISION = exports.DEFAULT_AMOUNT_PRECISION = exports.MINIMUM_SHOWING_BALANCE = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvdXRpbHMvZm9ybWF0dGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsdUNBQWdGO0FBQ2hGLHFDQUFnRTtBQUNoRSw0REFBOEI7QUFFOUIsd0VBQXVDO0FBQ3ZDLGtFQUFvQztBQUNwQyxrRUFBb0M7QUFDcEMsa0VBQW9DO0FBQ3BDLGtFQUFvQztBQUNwQyxrRUFBb0M7QUFDcEMsa0VBQW9DO0FBQ3BDLGtFQUFvQztBQUNwQyxrRUFBb0M7QUFDcEMsa0VBQW9DO0FBQ3BDLG1EQUFzRTtBQUV6RCxRQUFBLHVCQUF1QixHQUFHLE9BQU8sQ0FBQztBQUNsQyxRQUFBLHdCQUF3QixHQUFHLENBQUMsQ0FBQztBQUM3QixRQUFBLGVBQWUsR0FBRyxDQUFDLENBQUM7QUFDcEIsUUFBQSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7QUFDdEIsUUFBQSxjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBRWhDLElBQU0sTUFBTSxHQUFHO0lBQ2IsRUFBRSxFQUFFLGVBQUU7SUFDTixFQUFFLEVBQUUsWUFBRTtJQUNOLEVBQUUsRUFBRSxZQUFFO0lBQ04sRUFBRSxFQUFFLFlBQUU7SUFDTixFQUFFLEVBQUUsWUFBRTtJQUNOLEVBQUUsRUFBRSxZQUFFO0lBQ04sRUFBRSxFQUFFLFlBQUU7SUFDTixFQUFFLEVBQUUsWUFBRTtJQUNOLEVBQUUsRUFBRSxZQUFFO0lBQ04sRUFBRSxFQUFFLFlBQUU7Q0FDUCxDQUFDO0FBRUYsSUFBTSxLQUFLLEdBQUcsSUFBQSxzQkFBZSxHQUFFLENBQUM7QUFDaEMsSUFBTSxJQUFJLEdBQUcsSUFBQSxpQkFBVSxFQUNyQjtJQUNFLE1BQU0sRUFBRSxPQUFPO0lBQ2YsUUFBUSxFQUFFO1FBQ1IsK0JBQStCLEVBQUUsU0FBUztLQUMzQztDQUNGLEVBQ0QsS0FBSyxDQUNOLENBQUM7QUFFSyxJQUFNLGFBQWEsR0FBRyxVQUMzQixV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QUFLLEVBQUU7UUFDckIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsY0FBYyxFQUFFLE9BQU87S0FDeEIsQ0FBQyxDQUFFO0FBSEosQ0FHSSxDQUFDO0FBSk0sUUFBQSxrQkFBa0Isc0JBSXhCO0FBRUEsSUFBTSxxQkFBcUIsR0FBRyxVQUFDLEtBQUs7SUFDekMsT0FBQSxJQUFBLG9CQUFZLEVBQUMsS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQXJDLENBQXFDLENBQUM7QUFEM0IsUUFBQSxxQkFBcUIseUJBQ00iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVJbnRsLCBjcmVhdGVJbnRsQ2FjaGUsIE1lc3NhZ2VEZXNjcmlwdG9yIH0gZnJvbSAnQGZvcm1hdGpzL2ludGwnO1xuaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdCwgZm9ybWF0SVNPIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IGkxOG5leHQgZnJvbSAnaTE4bmV4dCc7XG5cbmltcG9ydCBlbiBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW4tVVMnO1xuaW1wb3J0IHVrIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS91ayc7XG5pbXBvcnQgZXMgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VzJztcbmltcG9ydCB0ciBmcm9tICdkYXRlLWZucy9sb2NhbGUvdHInO1xuaW1wb3J0IG5sIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9ubCc7XG5pbXBvcnQgcnUgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL3J1JztcbmltcG9ydCBwbCBmcm9tICdkYXRlLWZucy9sb2NhbGUvcGwnO1xuaW1wb3J0IHZpIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS92aSc7XG5pbXBvcnQgZnIgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2ZyJztcbmltcG9ydCBheiBmcm9tICdkYXRlLWZucy9sb2NhbGUvYXonO1xuaW1wb3J0IHsgaXNCcm93c2VyU3VwcG9ydFJlbGF0aXZlRGF0ZUZvcm1hdCB9IGZyb20gJy4vZGV0ZWN0LWJyb3dzZXInO1xuXG5leHBvcnQgY29uc3QgTUlOSU1VTV9TSE9XSU5HX0JBTEFOQ0UgPSAwLjAwMDAxO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfQU1PVU5UX1BSRUNJU0lPTiA9IDQ7XG5leHBvcnQgY29uc3QgU01BTExfUFJFQ0lTSU9OID0gMjtcbmV4cG9ydCBjb25zdCBERUZBVUxUX1BSRUNJU0lPTiA9IDU7XG5leHBvcnQgY29uc3QgRlVMTF9QUkVDSVNJT04gPSA5O1xuXG5jb25zdCBMb2NhbGUgPSB7XG4gIGVuOiBlbixcbiAgZXM6IGVzLFxuICB1azogdWssXG4gIHRyOiB0cixcbiAgbmw6IG5sLFxuICBydTogcnUsXG4gIHBsOiBwbCxcbiAgdmk6IHZpLFxuICBmcjogZnIsXG4gIGF6OiBheixcbn07XG5cbmNvbnN0IGNhY2hlID0gY3JlYXRlSW50bENhY2hlKCk7XG5jb25zdCBpbnRsID0gY3JlYXRlSW50bChcbiAge1xuICAgIGxvY2FsZTogJ2VuLVVTJyxcbiAgICBtZXNzYWdlczoge1xuICAgICAgJ2NvbXBvbmVudHMudHJhbnNhY3Rpb25fc3RhdHVzJzogJ1N1Y2Nlc3MnLFxuICAgIH0sXG4gIH0sXG4gIGNhY2hlXG4pO1xuXG5leHBvcnQgY29uc3QgZm9ybWF0TWVzc2FnZSA9IChcbiAgZGVzY3JpcHRvcjogTWVzc2FnZURlc2NyaXB0b3IsXG4gIHZhbHVlcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbik6IHN0cmluZyA9PiB7XG4gIHJldHVybiBpbnRsLmZvcm1hdE1lc3NhZ2UoZGVzY3JpcHRvciwgdmFsdWVzKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXROdW1iZXIgPSAoXG4gIHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsXG4gIHtcbiAgICBwcmVjaXNpb24sXG4gICAgbm90YXRpb24sXG4gICAgY29tcGFjdERpc3BsYXksXG4gIH06IHtcbiAgICBwcmVjaXNpb24/OiBudW1iZXI7XG4gICAgbm90YXRpb24/OiAnY29tcGFjdCcgfCAnc3RhbmRhcmQnO1xuICAgIGNvbXBhY3REaXNwbGF5PzogJ3Nob3J0JyB8ICdsb25nJztcbiAgfSA9IHt9XG4pOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gaW50bC5mb3JtYXROdW1iZXIodmFsdWUgYXMgbnVtYmVyLCB7XG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjaXNpb24gfHwgMCxcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNpc2lvbiB8fCAwLFxuICAgIG5vdGF0aW9uLFxuICAgIGNvbXBhY3REaXNwbGF5LFxuICB9KTtcbn07XG5cbmNvbnN0IEJJR19OVU1CRVJTX05PVEFUSU9OX1NZTUJPTCA9IFtcbiAgJycsXG4gICdrJywgLy9UaG91c2FuZFxuICAnTScsIC8vTWlsbGlvblxuICAnQicsIC8vQmlsbGlvblxuICAnVCcsIC8vVHJpbGxpb25cbiAgJ2UxNScsIC8vUXVhZHJpbGxpb25cbiAgJ2UxOCcsIC8vUXVpbnRpbGxpb25cbiAgJ2UyMScsIC8vU2V4dGlsbGlvblxuICAnZTI0JywgLy9TZXB0aWxsaW9uXG4gICdlMjcnLCAvL09jdGlsbGlvblxuICAnZTMwJywgLy9Ob25pbGxpb25cbiAgJ2UzMycsIC8vRGVjaWxsaW9uXG4gICdlMzYnLCAvL1VuZGVjaWxsaW9uXG4gICdlMzknLCAvL0R1b2RlY2lsbGlvblxuICAnZTQyJywgLy9UcmVkZWNpbGxpb25cbiAgJ2U0NScsIC8vUXVhdHR1b3JkZWNpbGxpb25cbiAgJ2U0OCcsIC8vUXVpbmRlY2lsbGlvblxuICAnZTUxJywgLy9TZXhkZWNpbGxpb25cbiAgJ2U1NCcsIC8vU2VwdGVuZGVjaWxsaW9uXG4gICdlNTcnLCAvL09jdG9kZWNpbGxpb25cbiAgJ2U2MCcsIC8vTm92ZW1kZWNpbGxpb25cbiAgJ2U2MycsIC8vVmlnaW50aWxsaW9uXG4gICdlNjYnLCAvL1VudmlnaW50aWxsaW9uXG4gICdlNjknLCAvL0R1b3ZpZ2ludGlsbGlvblxuICAnZTcyJywgLy9UcmV2aWdpbnRpbGxpb25cbiAgJ2U3NScsIC8vUXVhdHR1b3J2aWdpbnRpbGxpb25cbiAgJ2U3OCcsIC8vUXVpbnZpZ2ludGlsbGlvblxuICAnZTgxJywgLy9TZXh2aWdpbnRpbGxpb25cbiAgJ2U4NCcsIC8vU2VwdGVudmlnaW50aWxsaW9uXG4gICdlODcnLCAvL09jdG92aWdpbnRpbGxpb25cbiAgJ2U5MCcsIC8vTm92ZW12aWdpbnRpbGxpb25cbiAgJ2U5MycsIC8vVHJpZ2ludGlsbGlvblxuICAnZTk2JywgLy9VbnRyaWdpbnRpbGxpb25cbiAgJ2U5OScsIC8vRHVvdHJpZ2ludGlsbGlvblxuICAnZTEwMScsIC8vR29vZ29sXG4gICdlMTA0JywgLy9UcmV0cmlnaW50aWxsaW9uXG5dO1xuXG5leHBvcnQgY29uc3QgZm9ybWF0QmlnTnVtYmVycyA9ICh2YWx1ZSkgPT4ge1xuICAvLyBkZXRlcm1pbmVzIHN5bWJvbFxuICBjb25zdCB0aWVyID0gKE1hdGgubG9nMTAoTWF0aC5hYnModmFsdWUpKSAvIDMpIHwgMDtcbiAgY29uc3QgdGllcnNXaXRob3V0U3VmZml4ZXMgPSBbMCwgMSwgMl07XG5cbiAgaWYgKHRpZXJzV2l0aG91dFN1ZmZpeGVzLmluY2x1ZGVzKHRpZXIpKSB7XG4gICAgcmV0dXJuIGZvcm1hdE51bWJlcih2YWx1ZSwge1xuICAgICAgcHJlY2lzaW9uOiBERUZBVUxUX1BSRUNJU0lPTixcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGdldCBzdWZmaXggYW5kIGRldGVybWluZSBzY2FsZVxuICBjb25zdCBzdWZmaXggPSBCSUdfTlVNQkVSU19OT1RBVElPTl9TWU1CT0xbdGllcl07XG4gIGNvbnN0IHNjYWxlID0gTWF0aC5wb3coMTAsIHRpZXIgKiAzKTtcblxuICBjb25zdCBzY2FsZWROdW1iZXIgPSB2YWx1ZSAvIHNjYWxlO1xuXG4gIHJldHVybiBzY2FsZWROdW1iZXIudG9GaXhlZCg1KSArIHN1ZmZpeDtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRDdXJyZW5jeSA9IChcbiAgdmFsdWU6IG51bWJlciB8IHN0cmluZyxcbiAgY29kZTogc3RyaW5nLFxuICB7XG4gICAgcHJlY2lzaW9uLFxuICB9OiB7XG4gICAgcHJlY2lzaW9uPzogbnVtYmVyO1xuICB9ID0ge31cbik6IHN0cmluZyA9PiB7XG4gIHJldHVybiBpbnRsLmZvcm1hdE51bWJlcih2YWx1ZSBhcyBudW1iZXIsIHtcbiAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICBjdXJyZW5jeTogY29kZSxcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNpc2lvbixcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNpc2lvbixcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0UGVyY2VudGFnZSA9IChcbiAgdmFsdWU6IG51bWJlcixcbiAgeyBwcmVjaXNpb24gfTogeyBwcmVjaXNpb24/OiBudW1iZXIgfSA9IHt9XG4pID0+IHtcbiAgcmV0dXJuIHZhbHVlLnRvRml4ZWQocHJlY2lzaW9uIHx8IDIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFRpbWVzdGFtcCA9ICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgY29uc3QgbG9jYWxlID0gaTE4bmV4dC5sYW5ndWFnZSB8fCAnZW4nO1xuICBjb25zdCBuYXRpdmVJbnRsID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7XG4gICAgbW9udGg6ICdzaG9ydCcsXG4gICAgZGF5OiAnbnVtZXJpYycsXG4gICAgeWVhcjogJ251bWVyaWMnLFxuICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICB0aW1lWm9uZU5hbWU6ICdzaG9ydCcsXG4gIH0pO1xuXG4gIHJldHVybiBgJHtuYXRpdmVJbnRsLmZvcm1hdChkYXRlKX1gO1xufTtcblxuY29uc3QgZm9ybWF0RGlzdGFuY2VUb2tlbnMgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6ICdzZWNvbmQnLFxuICB4U2Vjb25kczogJ3NlY29uZCcsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6ICdtaW51dGUnLFxuICB4TWludXRlczogJ21pbnV0ZScsXG4gIHhIb3VyczogJ2hvdXInLFxuICB4RGF5czogJ2RheScsXG4gIHhNb250aHM6ICdtb250aCcsXG4gIHhZZWFyczogJ3llYXInLFxufTtcblxuY29uc3QgZm9ybWF0RGlzdGFuY2UgPSAodG9rZW4sIGNvdW50LCBvcHRpb25zKSA9PiB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZS5jb2RlIHx8ICdlbic7XG5cbiAgcmV0dXJuIG5ldyAoSW50bCBhcyBhbnkpLlJlbGF0aXZlVGltZUZvcm1hdChsb2NhbGUsIHtcbiAgICBzdHlsZTogJ3Nob3J0JyxcbiAgfSlcbiAgICAuZm9ybWF0KC1jb3VudCwgZm9ybWF0RGlzdGFuY2VUb2tlbnNbdG9rZW5dKVxuICAgIC5yZXBsYWNlKCcuJywgJycpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFRpbWVzdGFtcEFnZSA9ICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgY29uc3QgaXNTdXBwb3J0ZWRMYW5ndWFnZUFuZEJyb3dzZXIgPVxuICAgIGkxOG5leHQubGFuZ3VhZ2UgIT09ICdheicgJiYgaXNCcm93c2VyU3VwcG9ydFJlbGF0aXZlRGF0ZUZvcm1hdDtcblxuICByZXR1cm4gYCR7Zm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdChkYXRlLCB7XG4gICAgYWRkU3VmZml4OiB0cnVlLFxuICAgIGxvY2FsZToge1xuICAgICAgLi4uTG9jYWxlW2kxOG5leHQubGFuZ3VhZ2VdLFxuICAgICAgLi4uKGlzU3VwcG9ydGVkTGFuZ3VhZ2VBbmRCcm93c2VyICYmIHtcbiAgICAgICAgZm9ybWF0RGlzdGFuY2UsXG4gICAgICB9KSxcbiAgICB9LFxuICAgIHJvdW5kaW5nTWV0aG9kOiAnZmxvb3InLFxuICB9KX1gO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGUgPSAodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gIHJldHVybiBgJHtpbnRsLmZvcm1hdERhdGUoZGF0ZSwge1xuICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgIGRheTogJ251bWVyaWMnLFxuICAgIHllYXI6ICdudW1lcmljJyxcbiAgfSl9LCAke2ludGwuZm9ybWF0VGltZShkYXRlLCB7XG4gICAgaG91cjogJ251bWVyaWMnLFxuICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICB9KX1gO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGVXaXRoV2Vla2RheSA9ICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgcmV0dXJuIGAke2ludGwuZm9ybWF0RGF0ZShkYXRlLCB7XG4gICAgbW9udGg6ICdzaG9ydCcsXG4gICAgZGF5OiAnbnVtZXJpYycsXG4gICAgeWVhcjogJ251bWVyaWMnLFxuICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgfSl9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlU2hvcnQgPSAodmFsdWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gIHJldHVybiBgJHtpbnRsLmZvcm1hdERhdGUoZGF0ZSwge1xuICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgIGRheTogJ251bWVyaWMnLFxuICB9KX1gO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGVXaXRoTW9udGhBbmRZZWFyID0gKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xuICByZXR1cm4gYCR7aW50bC5mb3JtYXREYXRlKGRhdGUsIHtcbiAgICBtb250aDogJ3Nob3J0JyxcbiAgICB5ZWFyOiAnbnVtZXJpYycsXG4gIH0pfWA7XG59O1xuXG5leHBvcnQgZW51bSBIYXNoTGVuZ3RoIHtcbiAgRlVMTCA9IDAsXG4gIFRJTlkgPSA1LFxuICBMSVRUTEUgPSAxMCxcbiAgU01BTEwgPSAxNSxcbiAgTUVESVVNID0gMjAsXG4gIExBUkdFID0gMjUsXG59XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRIYXNoID0gKFxuICBoYXNoOiBzdHJpbmcsXG4gIHZpc2libGVIYXNoTGVuZ3RoOiBIYXNoTGVuZ3RoID0gSGFzaExlbmd0aC5USU5ZXG4pID0+IHtcbiAgY29uc3QgTUlOX1RSVU5DQVRFX0hBU0hfTEVOR1RIID0gSGFzaExlbmd0aC5USU5ZICogMiArIDM7XG5cbiAgY29uc3QgW2hhc2hXaXRob3V0U3VmZml4LCBsYXN0RGlnaXRzXSA9IGhhc2guc3BsaXQoJy0nKTtcblxuICBjb25zdCBoYXNoTGVuZ3RoID0gaGFzaFdpdGhvdXRTdWZmaXgubGVuZ3RoO1xuXG4gIGlmIChcbiAgICB2aXNpYmxlSGFzaExlbmd0aCA9PT0gSGFzaExlbmd0aC5GVUxMIHx8XG4gICAgaGFzaExlbmd0aCA8PSBNSU5fVFJVTkNBVEVfSEFTSF9MRU5HVEhcbiAgKSB7XG4gICAgcmV0dXJuIGhhc2g7XG4gIH1cblxuICBjb25zdCBmaXJzdFBhcnQgPSBoYXNoV2l0aG91dFN1ZmZpeC5zdWJzdHJpbmcoMCwgdmlzaWJsZUhhc2hMZW5ndGgpO1xuICBjb25zdCBzZWNvbmRQYXJ0ID0gaGFzaFdpdGhvdXRTdWZmaXguc3Vic3RyaW5nKFxuICAgIGhhc2hMZW5ndGggLSB2aXNpYmxlSGFzaExlbmd0aFxuICApO1xuXG4gIGNvbnN0IHRydW5jYXRlZEhhc2ggPSBgJHtmaXJzdFBhcnR9Li4uJHtzZWNvbmRQYXJ0fWA7XG5cbiAgcmV0dXJuIGxhc3REaWdpdHMgPyBgJHt0cnVuY2F0ZWRIYXNofS0ke2xhc3REaWdpdHN9YCA6IGAke3RydW5jYXRlZEhhc2h9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRJU09EYXRlT25seSA9IChkYXRlOiBEYXRlKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGZvcm1hdElTTyhkYXRlLCB7XG4gICAgcmVwcmVzZW50YXRpb246ICdkYXRlJyxcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGVwbG95c0NvdW50ID0gKHZhbHVlKTogc3RyaW5nID0+XG4gIGAke2Zvcm1hdE51bWJlcih2YWx1ZSwge1xuICAgIG5vdGF0aW9uOiAnY29tcGFjdCcsXG4gICAgY29tcGFjdERpc3BsYXk6ICdzaG9ydCcsXG4gIH0pfWA7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRSYXRlc1RvQ3VycmVuY3kgPSAodmFsdWUpOiBzdHJpbmcgPT5cbiAgZm9ybWF0TnVtYmVyKHZhbHVlLCB7IHByZWNpc2lvbjogNCB9KTtcbiJdfQ==