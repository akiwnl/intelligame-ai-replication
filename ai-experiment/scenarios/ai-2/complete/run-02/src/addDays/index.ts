import { toDate } from "../toDate/index.js";

/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
export function addDays<DateType extends Date>(
  date: DateType | number | string,
  amount: number,
): DateType {
  const d = toDate(date);
  const result = new Date(d.getTime() + amount * 24 * 60 * 60 * 1000);
  // Preserve the constructor (for possible extensions)
  return new (d.constructor as new (value: number) => DateType)(result.getTime());
}
