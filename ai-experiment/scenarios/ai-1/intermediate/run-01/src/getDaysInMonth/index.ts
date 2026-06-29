import { toDate } from "../toDate/index.js";

/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
export function getDaysInMonth<DateType extends Date>(
  date: DateType | number | string,
): number {
  const _date = toDate(date);
  const year = _date.getFullYear();
  const month = _date.getMonth(); // 0-indexed

  // Create a date for the 0th day of the next month.
  // This will effectively be the last day of the current month.
  const lastDayOfMonth = new Date(year, month + 1, 0);
  return lastDayOfMonth.getDate();
}
