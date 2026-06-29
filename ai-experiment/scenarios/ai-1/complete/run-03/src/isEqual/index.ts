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
  const parsedLeftDate = toDate(leftDate);
  const parsedRightDate = toDate(rightDate);

  const leftTimestamp = parsedLeftDate.getTime();
  const rightTimestamp = parsedRightDate.getTime();

  // If either date is invalid, they are not considered equal
  if (isNaN(leftTimestamp) || isNaN(rightTimestamp)) {
    return false;
  }

  return leftTimestamp === rightTimestamp;
}
