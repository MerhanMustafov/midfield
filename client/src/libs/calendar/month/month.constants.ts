import {
  MonthNumbersNormalType,
  MonthNumbersZeroBasedType,
  MonthStringsLongType,
  MonthStringsShortType,
} from '@/libs/calendar/month/month.types';

export const monthsLong: { [key in MonthNumbersNormalType]: MonthStringsLongType } = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

export const monthsShort: { [key in MonthNumbersNormalType]: MonthStringsShortType } = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sept',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec',
};

/**
 * @Description
 * key - months from 1 to 12 \
 * value - months from 0 to 11 (the months indices returned from Date object)
 */
export const monthsLookUp: { [Key in MonthNumbersNormalType]: MonthNumbersZeroBasedType } = {
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
  7: 6,
  8: 7,
  9: 8,
  10: 9,
  11: 10,
  12: 11,
};
