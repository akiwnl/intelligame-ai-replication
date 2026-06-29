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

  if (isNaN(_date.getTime())) {
    return NaN;
  }

  const year = _date.getFullYear();
  const month = _date.getMonth();

  // Set to the first day of the next month, then subtract one day.
  // This rolls back to the last day of the current month.
  // The getDate() of this date will be the number of days in the original month.
  const nextMonth = new Date(year, month + 1, 0);
  return nextMonth.getDate();
}
