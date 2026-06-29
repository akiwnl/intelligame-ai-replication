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
  // Jan 0 of next year = last day of current year
  return new Date(year + 1, 0, 0).getDate();
}
