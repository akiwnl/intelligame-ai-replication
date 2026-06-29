import { toDate } from "../toDate/index.js";

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
  const d = toDate(date);
  const year = d.getFullYear();

  if (isNaN(year)) {
    return NaN;
  }

  // Create dates for Jan 1 of the given year and Jan 1 of the next year.
  // The difference in milliseconds divided by milliseconds per day gives the number of days.
  const startOfYear = new Date(year, 0, 1);
  const startOfNextYear = new Date(year + 1, 0, 1);

  const diffMillis = startOfNextYear.getTime() - startOfYear.getTime();
  const millisPerDay = 1000 * 60 * 60 * 24;

  // Use Math.round to handle potential floating point inaccuracies, though it should be exact for full days.
  return Math.round(diffMillis / millisPerDay);
}
