import { toDate } from "../toDate/index.js";

/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The dates are equal
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * const result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0),
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */
export function isEqual<DateType extends Date>(
  leftDate: DateType | number | string,
  rightDate: DateType | number | string,
): boolean {
  const d1 = toDate(leftDate);
  const d2 = toDate(rightDate);

  // If either date is invalid, return false as per common date-fns behavior
  // Note: new Date(NaN).getTime() is NaN. NaN === NaN is false.
  // So, d1.getTime() === d2.getTime() handles (NaN, valid) -> false, (valid, NaN) -> false, (NaN, NaN) -> false
  // This implicitly handles the invalid date checks.
  return d1.getTime() === d2.getTime();
}
