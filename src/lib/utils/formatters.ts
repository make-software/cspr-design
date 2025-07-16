import { createIntl, createIntlCache, MessageDescriptor } from '@formatjs/intl';
import { formatDistanceToNowStrict, formatISO } from 'date-fns';
import i18next from 'i18next';

import en from 'date-fns/locale/en-US';
import uk from 'date-fns/locale/uk';
import es from 'date-fns/locale/es';
import tr from 'date-fns/locale/tr';
import nl from 'date-fns/locale/nl';
import ru from 'date-fns/locale/ru';
import pl from 'date-fns/locale/pl';
import vi from 'date-fns/locale/vi';
import fr from 'date-fns/locale/fr';
import az from 'date-fns/locale/az';
import { isBrowserSupportRelativeDateFormat } from './detect-browser';

export const MINIMUM_SHOWING_BALANCE = 0.00001;
export const DEFAULT_AMOUNT_PRECISION = 4;
export const SMALL_PRECISION = 2;
export const DEFAULT_PRECISION = 5;
export const FULL_PRECISION = 9;

const Locale = {
  en: en,
  es: es,
  uk: uk,
  tr: tr,
  nl: nl,
  ru: ru,
  pl: pl,
  vi: vi,
  fr: fr,
  az: az,
};

const cache = createIntlCache();
const intl = createIntl(
  {
    locale: 'en-US',
    messages: {
      'components.transaction_status': 'Success',
    },
  },
  cache
);

export const formatMessage = (
  descriptor: MessageDescriptor,
  values?: Record<string, any>
): string => {
  return intl.formatMessage(descriptor, values);
};

export const formatNumber = (
  value: number | string,
  {
    precision,
    notation,
    compactDisplay,
  }: {
    precision?: number;
    notation?: 'compact' | 'standard';
    compactDisplay?: 'short' | 'long';
  } = {}
): string => {
  return intl.formatNumber(value as number, {
    minimumFractionDigits: precision || 0,
    maximumFractionDigits: precision || 0,
    notation,
    compactDisplay,
  });
};

const BIG_NUMBERS_NOTATION_SYMBOL = [
  '',
  'k', //Thousand
  'M', //Million
  'B', //Billion
  'T', //Trillion
  'e15', //Quadrillion
  'e18', //Quintillion
  'e21', //Sextillion
  'e24', //Septillion
  'e27', //Octillion
  'e30', //Nonillion
  'e33', //Decillion
  'e36', //Undecillion
  'e39', //Duodecillion
  'e42', //Tredecillion
  'e45', //Quattuordecillion
  'e48', //Quindecillion
  'e51', //Sexdecillion
  'e54', //Septendecillion
  'e57', //Octodecillion
  'e60', //Novemdecillion
  'e63', //Vigintillion
  'e66', //Unvigintillion
  'e69', //Duovigintillion
  'e72', //Trevigintillion
  'e75', //Quattuorvigintillion
  'e78', //Quinvigintillion
  'e81', //Sexvigintillion
  'e84', //Septenvigintillion
  'e87', //Octovigintillion
  'e90', //Novemvigintillion
  'e93', //Trigintillion
  'e96', //Untrigintillion
  'e99', //Duotrigintillion
  'e101', //Googol
  'e104', //Tretrigintillion
];

export const formatBigNumbers = (value) => {
  // determines symbol
  const tier = (Math.log10(Math.abs(value)) / 3) | 0;
  const tiersWithoutSuffixes = [0, 1, 2];

  if (tiersWithoutSuffixes.includes(tier)) {
    return formatNumber(value, {
      precision: DEFAULT_PRECISION,
    });
  }

  // get suffix and determine scale
  const suffix = BIG_NUMBERS_NOTATION_SYMBOL[tier];
  const scale = Math.pow(10, tier * 3);

  const scaledNumber = value / scale;

  return scaledNumber.toFixed(5) + suffix;
};

export const formatCurrency = (
  value: number | string,
  code: string,
  {
    precision,
  }: {
    precision?: number;
  } = {}
): string => {
  return intl.formatNumber(value as number, {
    style: 'currency',
    currency: code,
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
  });
};

export const formatPercentage = (
  value: number,
  { precision }: { precision?: number } = {}
) => {
  return value.toFixed(precision || 2);
};

export const formatTimestamp = (value: string): string => {
  const date = new Date(value);
  const locale = i18next.language || 'en';
  const nativeIntl = new Intl.DateTimeFormat(locale, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
  });

  return `${nativeIntl.format(date)}`;
};

const formatDistanceTokens = {
  lessThanXSeconds: 'second',
  xSeconds: 'second',
  lessThanXMinutes: 'minute',
  xMinutes: 'minute',
  xHours: 'hour',
  xDays: 'day',
  xMonths: 'month',
  xYears: 'year',
};

const formatDistance = (token, count, options) => {
  options = options || {};
  const locale = options.locale.code || 'en';

  return new (Intl as any).RelativeTimeFormat(locale, {
    style: 'short',
  })
    .format(-count, formatDistanceTokens[token])
    .replace('.', '');
};

export const formatTimestampAge = (value: string): string => {
  const date = new Date(value);
  const isSupportedLanguageAndBrowser =
    i18next.language !== 'az' && isBrowserSupportRelativeDateFormat;

  return `${formatDistanceToNowStrict(date, {
    addSuffix: true,
    locale: {
      ...Locale[i18next.language],
      ...(isSupportedLanguageAndBrowser && {
        formatDistance,
      }),
    },
    roundingMethod: 'floor',
  })}`;
};

export const formatDate = (value: string | number): string => {
  const date = new Date(value);
  return `${intl.formatDate(date, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })}, ${intl.formatTime(date, {
    hour: 'numeric',
    minute: 'numeric',
  })}`;
};

export const formatDateWithWeekday = (value: string): string => {
  const date = new Date(value);
  return `${intl.formatDate(date, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    weekday: 'long',
  })}`;
};

export const formatDateShort = (value: string): string => {
  const date = new Date(value);
  return `${intl.formatDate(date, {
    month: 'short',
    day: 'numeric',
  })}`;
};

export const formatDateWithMonthAndYear = (value: string): string => {
  const date = new Date(value);
  return `${intl.formatDate(date, {
    month: 'short',
    year: 'numeric',
  })}`;
};

export enum HashLength {
  FULL = 0,
  TINY = 5,
  LITTLE = 10,
  SMALL = 15,
  MEDIUM = 20,
  LARGE = 25,
}

export const shortenString = (
  valueToShort: string,
  visibleHashLength: HashLength = HashLength.TINY
) => {
  const hashLength = valueToShort.length;
  if (hashLength <= visibleHashLength) {
    return valueToShort;
  }

  const firstPart = valueToShort.substring(0, visibleHashLength);
  const secondPart = valueToShort.substring(hashLength - visibleHashLength);

  return `${firstPart}...${secondPart}`;
};

export const formatHash = (
  hash: string,
  visibleHashLength: HashLength = HashLength.TINY
) => {
  const MIN_TRUNCATE_HASH_LENGTH = HashLength.TINY * 2 + 3;

  const [hashWithoutSuffix, lastDigits] = hash.split('-');

  const hashLength = hashWithoutSuffix.length;

  if (
    visibleHashLength === HashLength.FULL ||
    hashLength <= MIN_TRUNCATE_HASH_LENGTH
  ) {
    return hash;
  }

  const truncatedHash = shortenString(hashWithoutSuffix, visibleHashLength);

  return lastDigits ? `${truncatedHash}-${lastDigits}` : `${truncatedHash}`;
};

export const formatISODateOnly = (date: Date): string => {
  return formatISO(date, {
    representation: 'date',
  });
};

export const formatDeploysCount = (value): string =>
  `${formatNumber(value, {
    notation: 'compact',
    compactDisplay: 'short',
  })}`;

export const formatRatesToCurrency = (value): string =>
  formatNumber(value, { precision: 4 });
