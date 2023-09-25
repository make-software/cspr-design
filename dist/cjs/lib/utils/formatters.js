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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvdXRpbHMvZm9ybWF0dGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsdUNBQWdGO0FBQ2hGLHFDQUFnRTtBQUNoRSw0REFBOEI7QUFFOUIsd0VBQXVDO0FBQ3ZDLGtFQUFvQztBQUNwQyxrRUFBb0M7QUFDcEMsa0VBQW9DO0FBQ3BDLGtFQUFvQztBQUNwQyxrRUFBb0M7QUFDcEMsa0VBQW9DO0FBQ3BDLGtFQUFvQztBQUNwQyxrRUFBb0M7QUFDcEMsa0VBQW9DO0FBQ3BDLG1EQUFzRTtBQUV6RCxRQUFBLHVCQUF1QixHQUFHLE9BQU8sQ0FBQztBQUNsQyxRQUFBLHdCQUF3QixHQUFHLENBQUMsQ0FBQztBQUM3QixRQUFBLGVBQWUsR0FBRyxDQUFDLENBQUM7QUFDcEIsUUFBQSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7QUFDdEIsUUFBQSxjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBRWhDLElBQU0sTUFBTSxHQUFHO0lBQ2IsRUFBRSxFQUFFLGVBQUU7SUFDTixFQUFFLEVBQUUsWUFBRTtJQUNOLEVBQUUsRUFBRSxZQUFFO0lBQ04sRUFBRSxFQUFFLFlBQUU7SUFDTixFQUFFLEVBQUUsWUFBRTtJQUNOLEVBQUUsRUFBRSxZQUFFO0lBQ04sRUFBRSxFQUFFLFlBQUU7SUFDTixFQUFFLEVBQUUsWUFBRTtJQUNOLEVBQUUsRUFBRSxZQUFFO0lBQ04sRUFBRSxFQUFFLFlBQUU7Q0FDUCxDQUFDO0FBRUYsSUFBTSxLQUFLLEdBQUcsSUFBQSxzQkFBZSxHQUFFLENBQUM7QUFDaEMsSUFBTSxJQUFJLEdBQUcsSUFBQSxpQkFBVSxFQUNyQjtJQUNFLE1BQU0sRUFBRSxPQUFPO0lBQ2YsUUFBUSxFQUFFO1FBQ1IsK0JBQStCLEVBQUUsU0FBUztLQUMzQztDQUNGLEVBQ0QsS0FBSyxDQUNOLENBQUM7QUFFSyxJQUFNLGFBQWEsR0FBRyxVQUMzQixV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QUFLLEVBQUU7UUFDckIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsY0FBYyxFQUFFLE9BQU87S0FDeEIsQ0FBQyxDQUFFO0FBSEosQ0FHSSxDQUFDO0FBSk0sUUFBQSxrQkFBa0Isc0JBSXhCO0FBRUEsSUFBTSxxQkFBcUIsR0FBRyxVQUFDLEtBQUs7SUFDekMsT0FBQSxJQUFBLG9CQUFZLEVBQUMsS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQXJDLENBQXFDLENBQUM7QUFEM0IsUUFBQSxxQkFBcUIseUJBQ00iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVJbnRsLCBjcmVhdGVJbnRsQ2FjaGUsIE1lc3NhZ2VEZXNjcmlwdG9yIH0gZnJvbSAnQGZvcm1hdGpzL2ludGwnO1xyXG5pbXBvcnQgeyBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0LCBmb3JtYXRJU08gfSBmcm9tICdkYXRlLWZucyc7XHJcbmltcG9ydCBpMThuZXh0IGZyb20gJ2kxOG5leHQnO1xyXG5cclxuaW1wb3J0IGVuIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbi1VUyc7XHJcbmltcG9ydCB1ayBmcm9tICdkYXRlLWZucy9sb2NhbGUvdWsnO1xyXG5pbXBvcnQgZXMgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VzJztcclxuaW1wb3J0IHRyIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS90cic7XHJcbmltcG9ydCBubCBmcm9tICdkYXRlLWZucy9sb2NhbGUvbmwnO1xyXG5pbXBvcnQgcnUgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL3J1JztcclxuaW1wb3J0IHBsIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9wbCc7XHJcbmltcG9ydCB2aSBmcm9tICdkYXRlLWZucy9sb2NhbGUvdmknO1xyXG5pbXBvcnQgZnIgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2ZyJztcclxuaW1wb3J0IGF6IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9heic7XHJcbmltcG9ydCB7IGlzQnJvd3NlclN1cHBvcnRSZWxhdGl2ZURhdGVGb3JtYXQgfSBmcm9tICcuL2RldGVjdC1icm93c2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBNSU5JTVVNX1NIT1dJTkdfQkFMQU5DRSA9IDAuMDAwMDE7XHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0FNT1VOVF9QUkVDSVNJT04gPSA0O1xyXG5leHBvcnQgY29uc3QgU01BTExfUFJFQ0lTSU9OID0gMjtcclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUFJFQ0lTSU9OID0gNTtcclxuZXhwb3J0IGNvbnN0IEZVTExfUFJFQ0lTSU9OID0gOTtcclxuXHJcbmNvbnN0IExvY2FsZSA9IHtcclxuICBlbjogZW4sXHJcbiAgZXM6IGVzLFxyXG4gIHVrOiB1ayxcclxuICB0cjogdHIsXHJcbiAgbmw6IG5sLFxyXG4gIHJ1OiBydSxcclxuICBwbDogcGwsXHJcbiAgdmk6IHZpLFxyXG4gIGZyOiBmcixcclxuICBhejogYXosXHJcbn07XHJcblxyXG5jb25zdCBjYWNoZSA9IGNyZWF0ZUludGxDYWNoZSgpO1xyXG5jb25zdCBpbnRsID0gY3JlYXRlSW50bChcclxuICB7XHJcbiAgICBsb2NhbGU6ICdlbi1VUycsXHJcbiAgICBtZXNzYWdlczoge1xyXG4gICAgICAnY29tcG9uZW50cy50cmFuc2FjdGlvbl9zdGF0dXMnOiAnU3VjY2VzcycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2FjaGVcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRNZXNzYWdlID0gKFxyXG4gIGRlc2NyaXB0b3I6IE1lc3NhZ2VEZXNjcmlwdG9yLFxyXG4gIHZhbHVlcz86IFJlY29yZDxzdHJpbmcsIGFueT5cclxuKTogc3RyaW5nID0+IHtcclxuICByZXR1cm4gaW50bC5mb3JtYXRNZXNzYWdlKGRlc2NyaXB0b3IsIHZhbHVlcyk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0TnVtYmVyID0gKFxyXG4gIHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsXHJcbiAge1xyXG4gICAgcHJlY2lzaW9uLFxyXG4gICAgbm90YXRpb24sXHJcbiAgICBjb21wYWN0RGlzcGxheSxcclxuICB9OiB7XHJcbiAgICBwcmVjaXNpb24/OiBudW1iZXI7XHJcbiAgICBub3RhdGlvbj86ICdjb21wYWN0JyB8ICdzdGFuZGFyZCc7XHJcbiAgICBjb21wYWN0RGlzcGxheT86ICdzaG9ydCcgfCAnbG9uZyc7XHJcbiAgfSA9IHt9XHJcbik6IHN0cmluZyA9PiB7XHJcbiAgcmV0dXJuIGludGwuZm9ybWF0TnVtYmVyKHZhbHVlIGFzIG51bWJlciwge1xyXG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjaXNpb24gfHwgMCxcclxuICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogcHJlY2lzaW9uIHx8IDAsXHJcbiAgICBub3RhdGlvbixcclxuICAgIGNvbXBhY3REaXNwbGF5LFxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgQklHX05VTUJFUlNfTk9UQVRJT05fU1lNQk9MID0gW1xyXG4gICcnLFxyXG4gICdrJywgLy9UaG91c2FuZFxyXG4gICdNJywgLy9NaWxsaW9uXHJcbiAgJ0InLCAvL0JpbGxpb25cclxuICAnVCcsIC8vVHJpbGxpb25cclxuICAnUWEnLCAvL1F1YWRyaWxsaW9uXHJcbiAgJ1FpJywgLy9RdWludGlsbGlvblxyXG4gICdTeCcsIC8vU2V4dGlsbGlvblxyXG4gICdTcCcsIC8vU2VwdGlsbGlvblxyXG4gICdPJywgLy9PY3RpbGxpb25cclxuICAnTicsIC8vTm9uaWxsaW9uXHJcbiAgJ0QnLCAvL0RlY2lsbGlvblxyXG4gICdVZCcsIC8vVW5kZWNpbGxpb25cclxuICAnRGQnLCAvL0R1b2RlY2lsbGlvblxyXG4gICdUZCcsIC8vVHJlZGVjaWxsaW9uXHJcbiAgJ1FhZCcsIC8vUXVhdHR1b3JkZWNpbGxpb25cclxuICAnUWlkJywgLy9RdWluZGVjaWxsaW9uXHJcbiAgJ1N4ZCcsIC8vU2V4ZGVjaWxsaW9uXHJcbiAgJ1NwZCcsIC8vU2VwdGVuZGVjaWxsaW9uXHJcbiAgJ09kJywgLy9PY3RvZGVjaWxsaW9uXHJcbiAgJ05kJywgLy9Ob3ZlbWRlY2lsbGlvblxyXG4gICdWJywgLy9WaWdpbnRpbGxpb25cclxuICAnVXYnLCAvL1VudmlnaW50aWxsaW9uXHJcbiAgJ0R2JywgLy9EdW92aWdpbnRpbGxpb25cclxuICAnVHYnLCAvL1RyZXZpZ2ludGlsbGlvblxyXG4gICdRYXYnLCAvL1F1YXR0dW9ydmlnaW50aWxsaW9uXHJcbiAgJ1FpdicsIC8vUXVpbnZpZ2ludGlsbGlvblxyXG4gICdTeHYnLCAvL1NleHZpZ2ludGlsbGlvblxyXG4gICdTcHYnLCAvL1NlcHRlbnZpZ2ludGlsbGlvblxyXG4gICdPdicsIC8vT2N0b3ZpZ2ludGlsbGlvblxyXG4gICdOdicsIC8vTm92ZW12aWdpbnRpbGxpb25cclxuICAnVHInLCAvL1RyaWdpbnRpbGxpb25cclxuICAnVXQnLCAvL1VudHJpZ2ludGlsbGlvblxyXG4gICdEdCcsIC8vRHVvdHJpZ2ludGlsbGlvblxyXG4gICdHJywgLy9Hb29nb2xcclxuICAnVHQnLCAvL1RyZXRyaWdpbnRpbGxpb25cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRCaWdOdW1iZXJzID0gKHZhbHVlKSA9PiB7XHJcbiAgLy8gZGV0ZXJtaW5lcyBzeW1ib2xcclxuICBjb25zdCB0aWVyID0gKE1hdGgubG9nMTAoTWF0aC5hYnModmFsdWUpKSAvIDMpIHwgMDtcclxuICBjb25zdCB0aWVyc1dpdGhvdXRTdWZmaXhlcyA9IFswLCAxLCAyXTtcclxuXHJcbiAgaWYgKHRpZXJzV2l0aG91dFN1ZmZpeGVzLmluY2x1ZGVzKHRpZXIpKSB7XHJcbiAgICByZXR1cm4gZm9ybWF0TnVtYmVyKHZhbHVlLCB7XHJcbiAgICAgIHByZWNpc2lvbjogREVGQVVMVF9QUkVDSVNJT04sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIGdldCBzdWZmaXggYW5kIGRldGVybWluZSBzY2FsZVxyXG4gIGNvbnN0IHN1ZmZpeCA9IEJJR19OVU1CRVJTX05PVEFUSU9OX1NZTUJPTFt0aWVyXTtcclxuICBjb25zdCBzY2FsZSA9IE1hdGgucG93KDEwLCB0aWVyICogMyk7XHJcblxyXG4gIGNvbnN0IHNjYWxlZE51bWJlciA9IHZhbHVlIC8gc2NhbGU7XHJcblxyXG4gIHJldHVybiBzY2FsZWROdW1iZXIudG9GaXhlZCg1KSArIHN1ZmZpeDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRDdXJyZW5jeSA9IChcclxuICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLFxyXG4gIGNvZGU6IHN0cmluZyxcclxuICB7XHJcbiAgICBwcmVjaXNpb24sXHJcbiAgfToge1xyXG4gICAgcHJlY2lzaW9uPzogbnVtYmVyO1xyXG4gIH0gPSB7fVxyXG4pOiBzdHJpbmcgPT4ge1xyXG4gIHJldHVybiBpbnRsLmZvcm1hdE51bWJlcih2YWx1ZSBhcyBudW1iZXIsIHtcclxuICAgIHN0eWxlOiAnY3VycmVuY3knLFxyXG4gICAgY3VycmVuY3k6IGNvZGUsXHJcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNpc2lvbixcclxuICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogcHJlY2lzaW9uLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdFBlcmNlbnRhZ2UgPSAoXHJcbiAgdmFsdWU6IG51bWJlcixcclxuICB7IHByZWNpc2lvbiB9OiB7IHByZWNpc2lvbj86IG51bWJlciB9ID0ge31cclxuKSA9PiB7XHJcbiAgcmV0dXJuIHZhbHVlLnRvRml4ZWQocHJlY2lzaW9uIHx8IDIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdFRpbWVzdGFtcCA9ICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xyXG4gIGNvbnN0IGxvY2FsZSA9IGkxOG5leHQubGFuZ3VhZ2UgfHwgJ2VuJztcclxuICBjb25zdCBuYXRpdmVJbnRsID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7XHJcbiAgICBtb250aDogJ3Nob3J0JyxcclxuICAgIGRheTogJ251bWVyaWMnLFxyXG4gICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgaG91cjogJ251bWVyaWMnLFxyXG4gICAgbWludXRlOiAnbnVtZXJpYycsXHJcbiAgICBzZWNvbmQ6ICdudW1lcmljJyxcclxuICAgIHRpbWVab25lTmFtZTogJ3Nob3J0JyxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGAke25hdGl2ZUludGwuZm9ybWF0KGRhdGUpfWA7XHJcbn07XHJcblxyXG5jb25zdCBmb3JtYXREaXN0YW5jZVRva2VucyA9IHtcclxuICBsZXNzVGhhblhTZWNvbmRzOiAnc2Vjb25kJyxcclxuICB4U2Vjb25kczogJ3NlY29uZCcsXHJcbiAgbGVzc1RoYW5YTWludXRlczogJ21pbnV0ZScsXHJcbiAgeE1pbnV0ZXM6ICdtaW51dGUnLFxyXG4gIHhIb3VyczogJ2hvdXInLFxyXG4gIHhEYXlzOiAnZGF5JyxcclxuICB4TW9udGhzOiAnbW9udGgnLFxyXG4gIHhZZWFyczogJ3llYXInLFxyXG59O1xyXG5cclxuY29uc3QgZm9ybWF0RGlzdGFuY2UgPSAodG9rZW4sIGNvdW50LCBvcHRpb25zKSA9PiB7XHJcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgY29uc3QgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUuY29kZSB8fCAnZW4nO1xyXG5cclxuICByZXR1cm4gbmV3IChJbnRsIGFzIGFueSkuUmVsYXRpdmVUaW1lRm9ybWF0KGxvY2FsZSwge1xyXG4gICAgc3R5bGU6ICdzaG9ydCcsXHJcbiAgfSlcclxuICAgIC5mb3JtYXQoLWNvdW50LCBmb3JtYXREaXN0YW5jZVRva2Vuc1t0b2tlbl0pXHJcbiAgICAucmVwbGFjZSgnLicsICcnKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRUaW1lc3RhbXBBZ2UgPSAodmFsdWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKTtcclxuICBjb25zdCBpc1N1cHBvcnRlZExhbmd1YWdlQW5kQnJvd3NlciA9XHJcbiAgICBpMThuZXh0Lmxhbmd1YWdlICE9PSAnYXonICYmIGlzQnJvd3NlclN1cHBvcnRSZWxhdGl2ZURhdGVGb3JtYXQ7XHJcblxyXG4gIHJldHVybiBgJHtmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0KGRhdGUsIHtcclxuICAgIGFkZFN1ZmZpeDogdHJ1ZSxcclxuICAgIGxvY2FsZToge1xyXG4gICAgICAuLi5Mb2NhbGVbaTE4bmV4dC5sYW5ndWFnZV0sXHJcbiAgICAgIC4uLihpc1N1cHBvcnRlZExhbmd1YWdlQW5kQnJvd3NlciAmJiB7XHJcbiAgICAgICAgZm9ybWF0RGlzdGFuY2UsXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICAgIHJvdW5kaW5nTWV0aG9kOiAnZmxvb3InLFxyXG4gIH0pfWA7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0RGF0ZSA9ICh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xyXG4gIHJldHVybiBgJHtpbnRsLmZvcm1hdERhdGUoZGF0ZSwge1xyXG4gICAgbW9udGg6ICdzaG9ydCcsXHJcbiAgICBkYXk6ICdudW1lcmljJyxcclxuICAgIHllYXI6ICdudW1lcmljJyxcclxuICB9KX0sICR7aW50bC5mb3JtYXRUaW1lKGRhdGUsIHtcclxuICAgIGhvdXI6ICdudW1lcmljJyxcclxuICAgIG1pbnV0ZTogJ251bWVyaWMnLFxyXG4gIH0pfWA7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0RGF0ZVdpdGhXZWVrZGF5ID0gKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XHJcbiAgcmV0dXJuIGAke2ludGwuZm9ybWF0RGF0ZShkYXRlLCB7XHJcbiAgICBtb250aDogJ3Nob3J0JyxcclxuICAgIGRheTogJ251bWVyaWMnLFxyXG4gICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgd2Vla2RheTogJ2xvbmcnLFxyXG4gIH0pfWA7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0RGF0ZVNob3J0ID0gKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XHJcbiAgcmV0dXJuIGAke2ludGwuZm9ybWF0RGF0ZShkYXRlLCB7XHJcbiAgICBtb250aDogJ3Nob3J0JyxcclxuICAgIGRheTogJ251bWVyaWMnLFxyXG4gIH0pfWA7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0RGF0ZVdpdGhNb250aEFuZFllYXIgPSAodmFsdWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKTtcclxuICByZXR1cm4gYCR7aW50bC5mb3JtYXREYXRlKGRhdGUsIHtcclxuICAgIG1vbnRoOiAnc2hvcnQnLFxyXG4gICAgeWVhcjogJ251bWVyaWMnLFxyXG4gIH0pfWA7XHJcbn07XHJcblxyXG5leHBvcnQgZW51bSBIYXNoTGVuZ3RoIHtcclxuICBGVUxMID0gMCxcclxuICBUSU5ZID0gNSxcclxuICBMSVRUTEUgPSAxMCxcclxuICBTTUFMTCA9IDE1LFxyXG4gIE1FRElVTSA9IDIwLFxyXG4gIExBUkdFID0gMjUsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRIYXNoID0gKFxyXG4gIGhhc2g6IHN0cmluZyxcclxuICB2aXNpYmxlSGFzaExlbmd0aDogSGFzaExlbmd0aCA9IEhhc2hMZW5ndGguVElOWVxyXG4pID0+IHtcclxuICBjb25zdCBNSU5fVFJVTkNBVEVfSEFTSF9MRU5HVEggPSBIYXNoTGVuZ3RoLlRJTlkgKiAyICsgMztcclxuXHJcbiAgY29uc3QgW2hhc2hXaXRob3V0U3VmZml4LCBsYXN0RGlnaXRzXSA9IGhhc2guc3BsaXQoJy0nKTtcclxuXHJcbiAgY29uc3QgaGFzaExlbmd0aCA9IGhhc2hXaXRob3V0U3VmZml4Lmxlbmd0aDtcclxuXHJcbiAgaWYgKFxyXG4gICAgdmlzaWJsZUhhc2hMZW5ndGggPT09IEhhc2hMZW5ndGguRlVMTCB8fFxyXG4gICAgaGFzaExlbmd0aCA8PSBNSU5fVFJVTkNBVEVfSEFTSF9MRU5HVEhcclxuICApIHtcclxuICAgIHJldHVybiBoYXNoO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZmlyc3RQYXJ0ID0gaGFzaFdpdGhvdXRTdWZmaXguc3Vic3RyaW5nKDAsIHZpc2libGVIYXNoTGVuZ3RoKTtcclxuICBjb25zdCBzZWNvbmRQYXJ0ID0gaGFzaFdpdGhvdXRTdWZmaXguc3Vic3RyaW5nKFxyXG4gICAgaGFzaExlbmd0aCAtIHZpc2libGVIYXNoTGVuZ3RoXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgdHJ1bmNhdGVkSGFzaCA9IGAke2ZpcnN0UGFydH0uLi4ke3NlY29uZFBhcnR9YDtcclxuXHJcbiAgcmV0dXJuIGxhc3REaWdpdHMgPyBgJHt0cnVuY2F0ZWRIYXNofS0ke2xhc3REaWdpdHN9YCA6IGAke3RydW5jYXRlZEhhc2h9YDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRJU09EYXRlT25seSA9IChkYXRlOiBEYXRlKTogc3RyaW5nID0+IHtcclxuICByZXR1cm4gZm9ybWF0SVNPKGRhdGUsIHtcclxuICAgIHJlcHJlc2VudGF0aW9uOiAnZGF0ZScsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0RGVwbG95c0NvdW50ID0gKHZhbHVlKTogc3RyaW5nID0+XHJcbiAgYCR7Zm9ybWF0TnVtYmVyKHZhbHVlLCB7XHJcbiAgICBub3RhdGlvbjogJ2NvbXBhY3QnLFxyXG4gICAgY29tcGFjdERpc3BsYXk6ICdzaG9ydCcsXHJcbiAgfSl9YDtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRSYXRlc1RvQ3VycmVuY3kgPSAodmFsdWUpOiBzdHJpbmcgPT5cclxuICBmb3JtYXROdW1iZXIodmFsdWUsIHsgcHJlY2lzaW9uOiA0IH0pO1xyXG4iXX0=