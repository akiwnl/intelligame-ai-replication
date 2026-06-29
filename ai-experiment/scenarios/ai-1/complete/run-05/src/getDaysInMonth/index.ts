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

  // The last day of the current month is the 0th day of the next month
  // E.g., new Date(2024, 1 + 1, 0) gives Feb 29, 2024 (0th day of March)
  return new Date(year, month + 1, 0).getDate();
}
