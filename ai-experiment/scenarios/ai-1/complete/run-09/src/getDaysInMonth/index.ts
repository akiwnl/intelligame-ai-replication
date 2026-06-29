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

  // The number of days in a month is the day of the month of the last day of the month.
  // To get the last day of the current month, we create a date for the 0th day
  // of the *next* month. This automatically rolls back to the last day of the current month.
  // E.g., new Date(2000, 2, 0) gives February 29, 2000.
  const lastDayOfMonth = new Date(year, month + 1, 0);
  return lastDayOfMonth.getDate();
}
