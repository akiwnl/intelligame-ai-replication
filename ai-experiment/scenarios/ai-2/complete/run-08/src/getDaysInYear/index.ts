import { toDate } from "../toDate/index.js";

/**
 * @name getDaysInYear
 * @category Year Helpers
 * @summary Get the number of days in a year of the given date.
 *
 * @description
 * Get the number of days in a year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The number of days in a year
 *
 * @example
 * // How many days are in 2012?
 * const result = getDaysInYear(new Date(2012, 0, 1))
 * //=> 366
 */
export function getDaysInYear<DateType extends Date>(
  date: DateType | number | string,
): number {
  const d = toDate(date);
  const year = d.getFullYear();
  // 31 Dec of the year, then getDate() gives day of month (31)
  // Subtract 1 Jan day number (1) and add 1 => total days
  const start = new Date(year, 0, 1);
  const end = new Date(year, 11, 31);
  const diff = end.getTime() - start.getTime();
  return diff / (24 * 60 * 60 * 1000) + 1;
}
