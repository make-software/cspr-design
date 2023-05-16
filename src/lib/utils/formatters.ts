import { createIntl, createIntlCache } from '@formatjs/intl';

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

export enum HashLength {
  FULL = 0,
  TINY = 5,
  LITTLE = 10,
  SMALL = 15,
  MEDIUM = 20,
  LARGE = 25,
}

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

const BIG_NUMBERS_NOTATION_SYMBOL = [
  '',
  'k', //Thousand
  'M', //Million
  'B', //Billion
  'T', //Trillion
  'Qa', //Quadrillion
  'Qi', //Quintillion
  'Sx', //Sextillion
  'Sp', //Septillion
  'O', //Octillion
  'N', //Nonillion
  'D', //Decillion
  'Ud', //Undecillion
  'Dd', //Duodecillion
  'Td', //Tredecillion
  'Qad', //Quattuordecillion
  'Qid', //Quindecillion
  'Sxd', //Sexdecillion
  'Spd', //Septendecillion
  'Od', //Octodecillion
  'Nd', //Novemdecillion
  'V', //Vigintillion
  'Uv', //Unvigintillion
  'Dv', //Duovigintillion
  'Tv', //Trevigintillion
  'Qav', //Quattuorvigintillion
  'Qiv', //Quinvigintillion
  'Sxv', //Sexvigintillion
  'Spv', //Septenvigintillion
  'Ov', //Octovigintillion
  'Nv', //Novemvigintillion
  'Tr', //Trigintillion
  'Ut', //Untrigintillion
  'Dt', //Duotrigintillion
  'G', //Googol
  'Tt', //Tretrigintillion
];

export const formatBigNumbers = (value) => {
  // determines symbol
  const tier = (Math.log10(Math.abs(value)) / 3) | 0;
  const tiersWithoutSuffixes = [0, 1, 2];

  if (tiersWithoutSuffixes.includes(tier)) {
    return formatNumber(value, {
      precision: 5,
    });
  }

  // get suffix and determine scale
  const suffix = BIG_NUMBERS_NOTATION_SYMBOL[tier];
  const scale = Math.pow(10, tier * 3);

  const scaledNumber = value / scale;

  return scaledNumber.toFixed(5) + suffix;
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

export const formatTimestamp = (value: string, locale = 'en'): string => {
  const date = new Date(value);
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

export const formatDistance = (token, count, options) => {
  options = options || {};
  const locale = options.locale.code || 'en';

  return new (Intl as any).RelativeTimeFormat(locale, {
    style: 'short',
  })
    .format(-count, formatDistanceTokens[token])
    .replace('.', '');
};

export const formatDate = (value: string): string => {
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

export const formatDateShort = (value: string): string => {
  const date = new Date(value);
  return `${intl.formatDate(date, {
    month: 'short',
    day: 'numeric',
  })}`;
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

  const firstPart = hashWithoutSuffix.substring(0, visibleHashLength);
  const secondPart = hashWithoutSuffix.substring(
    hashLength - visibleHashLength
  );

  const truncatedHash = `${firstPart}...${secondPart}`;

  return lastDigits ? `${truncatedHash}-${lastDigits}` : `${truncatedHash}`;
};
