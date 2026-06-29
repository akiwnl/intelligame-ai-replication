import { toDate } from "../toDate/index.js";

/**
 * @name isPast
 * @category Common Helpers
 * @summary Is the given date in the past?
 * @pure false
 *
 * @description
 * Is the given date in the past?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is in the past
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * const result = isPast(new Date(2014, 6, 2))
 * //=> true
 */
export function isPast<DateType extends Date>(
  date: DateType | number | string,
): boolean {
  const _date = toDate(date);
  const now = Date.now(); // Get current timestamp

  const dateTimestamp = _date.getTime();

  // If the date is invalid, it's not in the past
  if (isNaN(dateTimestamp)) {
    return false;
  }

  return dateTimestamp < now;
}
