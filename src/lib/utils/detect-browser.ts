export const isSafariBrowser =
  window.navigator.userAgent.includes('Safari') &&
  !window.navigator.userAgent.includes('Chrome');

export const isBrowserSupportRelativeDateFormat =
  Intl && (Intl as any).RelativeTimeFormat;
