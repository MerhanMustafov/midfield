import { MonthNumbersNormalType, NumberOfDaysInAMonthType } from '@/libs/calendar/month/month.types';

/**
 *
 * @param {number} year - format YYYY (e.g. 2021 || 2000 || 1990 || 1095)
 * @param {number} month - the 1 is January and 12 is December. e.g. 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |11 | 12
 * @param {number} day - the day of the month (1 to 31)
 * @param {string} delimiter - default is "/" but you can pass any delimiter you want
 * @returns - e.g. "2021/01/01" || "2021-01-01" || "2021.01.01" || "2021 01 01"
 *
 * @example getFormattedDateYYYYMMDD(2021, 1, 1) // returns "2021/01/01"
 * @example getFormattedDateYYYYMMDD(2021, 1, 1, "-") // returns "2021-01-01"
 */
export function getFormattedDateYYYYMMDD(
  year: number,
  month: MonthNumbersNormalType,
  day: NumberOfDaysInAMonthType,
  delimiter = '/',
) {
  const dayNumber = day < 10 ? `0${day}` : day;
  const monthNumber = month < 10 ? `0${month}` : month;
  const yearNumber = year;
  return `${yearNumber}${delimiter}${monthNumber}${delimiter}${dayNumber}`;
}

/**
 * @Description This function returns an object with year, month and day destructured from a date string.
 *
 * @Caution - when passing the date string you should now what is the delimiter (e.g. "/" or "-" or "." or " ")
 * and pass it as second argument to the function if it is not "/" (the default delimiter)
 *
 * @param date - e.g. "2021/01/01" || "2021-01-01" || "2021.01.01" || "2021 01 01"
 * @param delimiter - default is "/" but you can pass any delimiter you want
 * @returns - e.g. { year: 2021, month: 1, day: 1 }
 *
 * @example getDestructuredDateFromString("2021/01/01") // returns { year: 2021, month: 1, day: 1 }
 * @example getDestructuredDateFromString("2021-01-01", "-") // returns { year: 2021, month: 1, day: 1 }
 *
 *
 */
export function getDestructuredDateFromString(date: string, delimiter = '/') {
  const [year, month, day] = date.split(delimiter);
  const yyyy: number = parseInt(year);
  const mm: MonthNumbersNormalType = parseInt(month) as MonthNumbersNormalType;
  const dd: NumberOfDaysInAMonthType = parseInt(day) as NumberOfDaysInAMonthType;
  return { year: yyyy, month: mm, day: dd };
}
