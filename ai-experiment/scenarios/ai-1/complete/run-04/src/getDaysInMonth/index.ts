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
  const dateObj = toDate(date);

  if (isNaN(dateObj.getTime())) {
    return NaN;
  }

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth();

  // Set the date to the 0th day of the next month.
  // This effectively gets the last day of the current month.
  // E.g., for March (month 2), new Date(year, 3, 0) gives the last day of Feb.
  // For Feb (month 1), new Date(year, 2, 0) gives the last day of Jan.
  // So we need to add 1 to the month to get the *next* month.
  const lastDayOfMonth = new Date(year, month + 1, 0);
  return lastDayOfMonth.getDate();
}
