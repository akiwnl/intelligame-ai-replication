import { toDate } from "../toDate/index.js";;

/**
 * @name isWeekend
 * @category Weekday Helpers
 * @summary Does the given date fall on a weekend?
 *
 * @description
 * Does the given date fall on a weekend?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date falls on a weekend
 *
 * @example
 * // Does 5 October 2014 fall on a weekend?
 * const result = isWeekend(new Date(2014, 9, 5))
 * //=> true
 */
export function isWeekend<DateType extends Date>(
  date: DateType | number | string,
): boolean {
  const _date = toDate(date);

  if (isNaN(_date.getTime())) {
    return false; // Invalid dates are not weekends.
  }

  const day = _date.getDay();
  return day === 0 || day === 6; // 0 for Sunday, 6 for Saturday
}
