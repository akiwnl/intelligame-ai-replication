import { toDate } from "../toDate/index.js";

/**
 * Checks if a given year is a leap year.
 * A year is a leap year if it is divisible by 4,
 * except for end-of-century years which must be divisible by 400.
 */
function isLeapYear(year: number): boolean {
  // A simple way to check for leap year using Date object behavior:
  // February 29th exists if it's a leap year.
  // If new Date(year, 1, 29) results in a date with month 1 (February), it's a leap year.
  // Otherwise, it rolls over to March and getMonth() would be 2.
  return new Date(year, 1, 29).getMonth() === 1;
}

/**
 * @name getDaysInYear
 * @category Year Helpers
 * @summary Get the number of days in a year of the given date.
 *
 * @description
 * Get the number of days in a year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
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
  const dateObj = toDate(date);

  if (isNaN(dateObj.getTime())) {
    return NaN;
  }

  const year = dateObj.getFullYear();
  return isLeapYear(year) ? 366 : 365;
}
