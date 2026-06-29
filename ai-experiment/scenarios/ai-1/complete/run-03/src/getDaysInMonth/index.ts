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
  const parsedDate = toDate(date);

  if (isNaN(parsedDate.getTime())) {
    return NaN;
  }

  const year = parsedDate.getFullYear();
  const month = parsedDate.getMonth();

  // Create a date for the 0th day of the next month.
  // This effectively means the last day of the current month.
  // For example, new Date(2000, 1 + 1, 0) => new Date(2000, 2, 0)
  // will give Feb 29, 2000 (since 2000 is a leap year)
  // and its getDate() will be 29.
  const lastDayOfMonth = new Date(year, month + 1, 0);
  return lastDayOfMonth.getDate();
}
