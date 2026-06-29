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
  const d = toDate(date);
  if (isNaN(d.getTime())) {
    return NaN;
  }

  const year = d.getFullYear();
  const month = d.getMonth();

  // JavaScript's Date object automatically handles this:
  // Setting day to 0 of the next month gives the last day of the current month.
  const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
  return lastDayOfMonth;
}
